import React, { useCallback, useMemo, useState, useEffect } from "react";
import "./NavigationButtons.css";
import { ReactComponent as ListLogo } from "../../assets/list-logo.svg";
import { ReactComponent as CrossLogo } from "../../assets/cross-logo.svg";
import { Stack } from "react-bootstrap";
import TransparentButton from "../TransparentButton/TransparentButton";
import { ThemeModes, useThemeContext } from "../../contexts/ThemeContext";
import { DarkModeIconSvg, LightModeIconSvg } from "../../assets";

const navigationMenuItems = ["Projects", "Experience", "About", "Contact"];
function NavigationButtons(props) {
  const { onItemSelect, currentSelectedPage } = props;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { toggleTheme, mode: themeMode } = useThemeContext();

  const onButtonPress = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  const _onItemSelect = useCallback(
    (pageNumber) => {
      onItemSelect?.(pageNumber);
      onButtonPress();
    },
    [onButtonPress, onItemSelect]
  );

  const renderMenuItems = useMemo(() => {
    return navigationMenuItems.map((item, index) => {
      const shouldUnderline = currentSelectedPage === index + 1;

      const textOptions = {
        textTransform: "uppercase",
      };

      if (shouldUnderline) {
        textOptions.textDecoration = "underline";
        textOptions.textDecorationThickness = "2px";
      }

      return (
        <TransparentButton
          onClick={() => {
            _onItemSelect(index + 1);
          }}
          style={styles.paddingStyle}
          key={item}
        >
          <p style={textOptions}>{item}</p>
        </TransparentButton>
      );
    });
  }, [_onItemSelect, currentSelectedPage, isMenuOpen]);

  const themeButtonsUpAnimation = useCallback(() => {
    document
      .getElementById("light-mode-icon-svg")
      .setAttribute("class", "theme-mode-icon-up-animation");
    document
      .getElementById("dark-mode-icon-svg")
      .setAttribute("class", "theme-mode-icon-up-animation");
  }, []);

  const themeButtonsDownAnimation = useCallback(() => {
    document
      .getElementById("light-mode-icon-svg")
      .setAttribute("class", "theme-mode-icon-down-animation");
    document
      .getElementById("dark-mode-icon-svg")
      .setAttribute("class", "theme-mode-icon-down-animation");
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (themeMode === ThemeModes.Dark) {
        themeButtonsUpAnimation();
      } else {
        themeButtonsDownAnimation();
      }
    }, 500);
  }, []);

  const onThemeChangeClick = useCallback(() => {
    if (themeMode === ThemeModes.Light) {
      themeButtonsUpAnimation();
    } else {
      themeButtonsDownAnimation();
    }
    toggleTheme();
  }, [
    themeButtonsDownAnimation,
    themeButtonsUpAnimation,
    themeMode,
    toggleTheme,
  ]);

  return (
    <div>
      <Stack gap={3} direction="horizontal" style={styles.container}>
        <Stack
          gap={3}
          direction="horizontal"
          style={{ opacity: isMenuOpen ? 1 : 0 }}
          className="navigation-buttons-menu"
        >
          {renderMenuItems}

          <div className="theme-toggle-btn-round" onClick={onThemeChangeClick}>
            <div className="theme-toggle-btn-round-content">
              <LightModeIconSvg
                id="light-mode-icon-svg"
                fill="white"
                style={{ height: "20px", width: "20px" }}
              />
              <DarkModeIconSvg
                id="dark-mode-icon-svg"
                fill="white"
                style={{ height: "20px", width: "20px" }}
              />
            </div>
          </div>
        </Stack>
        {isMenuOpen ? (
          <TransparentButton onClick={onButtonPress}>
            <CrossLogo
              fill="cadetBlue"
              style={{ height: "4vh", width: "4vw" }}
            />
          </TransparentButton>
        ) : (
          <TransparentButton onClick={onButtonPress}>
            <ListLogo
              fill="cadetBlue"
              style={{ height: "4vh", width: "4vw" }}
            />
          </TransparentButton>
        )}
      </Stack>
    </div>
  );
}

export default NavigationButtons;

const styles = {
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  paddingStyle: {
    paddingTop: "25px",
  },
};
