import React, { useCallback, useMemo, useState } from "react";
import "./NavigationButtons.css";
import { ReactComponent as ListLogo } from "../../assets/list-logo.svg";
import { ReactComponent as CrossLogo } from "../../assets/cross-logo.svg";
import { Stack } from "react-bootstrap";
import TransparentButton from "../TransparentButton/TransparentButton";

const menuItems = ["Projects", "Experience", "About", "Contact"];
function NavigationButtons(props) {
  const { onItemSelect, currentSelectedPage } = props;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onButtonPress = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

  const _onItemSelect = useCallback(
    (pageNumber) => {
      onItemSelect?.(pageNumber);
      onButtonPress();
    },
    [onItemSelect]
  );

  const renderMenuItems = useMemo(() => {
    return menuItems.map((item, index) => {
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
  }, [_onItemSelect, isMenuOpen]);

  return (
    <div>
      {isMenuOpen ? (
        <Stack direction="horizontal" gap={3} style={styles.container}>
          {renderMenuItems}
          <TransparentButton onClick={onButtonPress}>
            <CrossLogo fill="cadetBlue" />
          </TransparentButton>
        </Stack>
      ) : (
        <TransparentButton onClick={onButtonPress} style={styles.paddingStyle}>
          <ListLogo fill="cadetBlue" />
        </TransparentButton>
      )}
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