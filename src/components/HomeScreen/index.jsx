import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Stack } from "react-bootstrap";
import ReactPageScroller from "react-page-scroller";
import { hsLogo } from "../../assets";
import EventTypes from "../../services/LocalEvent/EventTypes";
import { LocalEvent } from "../../services/LocalEvent/LocalEvent";
import colors from "../../utils/colors";
import About from "../About";
import ContactPage from "../Contact";
import Experience from "../Experience";
import Introduction from "../Introduction";
import NavigationButtons from "../NavigationButtons";
import Projects from "../Projects/screen";
import "./HomeScreen.css";

function HomeScreen() {
  const currentPageNumberRef = useRef(0);
  const [currentPageNumber, setCurrentPageNumber] = useState(
    currentPageNumberRef.current
  );
  const [shouldBlockScrollUp, setShouldBlockScrollUp] = useState(false);
  const [shouldBlockScrollDown, setShouldBlockScrollDown] = useState(false);

  const componentsList = useMemo(
    () => [
      <Introduction />,
      <Projects />,
      <Experience />,
      <About />,
      <ContactPage />,
    ],
    []
  );

  useEffect(() => {
    LocalEvent.on(EventTypes.ReactScroller.Scroll.Up.Block, () => {
      updateScrollUpPref(true);
    });
    LocalEvent.on(EventTypes.ReactScroller.Scroll.Up.UnBlock, () => {
      updateScrollUpPref(false);
    });
    LocalEvent.on(EventTypes.ReactScroller.Scroll.Down.Block, () => {
      updateScrollDownPref(true);
    });
    LocalEvent.on(EventTypes.ReactScroller.Scroll.Down.UnBlock, () => {
      updateScrollDownPref(false);
    });

    return () => {
      LocalEvent.off(EventTypes.ReactScroller.Scroll.Up.Block, () => {
        updateScrollUpPref(true);
      });
      LocalEvent.off(EventTypes.ReactScroller.Scroll.Up.UnBlock, () => {
        updateScrollUpPref(false);
      });
      LocalEvent.off(EventTypes.ReactScroller.Scroll.Down.Block, () => {
        updateScrollDownPref(true);
      });
      LocalEvent.off(EventTypes.ReactScroller.Scroll.Down.UnBlock, () => {
        updateScrollDownPref(false);
      });
    };
  }, []);

  const updateScrollUpPref = useCallback((pref) => {
    setShouldBlockScrollUp(pref);
  }, []);
  const updateScrollDownPref = useCallback((pref) => {
    setShouldBlockScrollDown(pref);
  }, []);

  const onPageChange = useCallback(
    (pageNum) => {
      if (pageNum >= 0 && pageNum < componentsList.length) {
        currentPageNumberRef.current = pageNum;
        setCurrentPageNumber(currentPageNumberRef.current);
      }
    },
    [componentsList.length]
  );

  const onCustomPageNumberSelect = useCallback(
    (pageNum) => {
      if (currentPageNumberRef.current !== pageNum) {
        currentPageNumberRef.current = pageNum;
        setCurrentPageNumber(currentPageNumberRef.current);
      }
    },
    [currentPageNumber]
  );

  const renderPaginationDots = useMemo(() => {
    return (
      <Stack gap={3} style={styles.navigationDotsContainer}>
        {componentsList.map((_, index) => {
          const localStyle = {
            ...styles.navigationDots,
            ...{
              backgroundColor:
                currentPageNumberRef.current == index
                  ? colors.activePageDot
                  : colors.inActivePageDot,
            },
          };

          return <div style={localStyle} />;
        })}
      </Stack>
    );
  }, [componentsList, currentPageNumber]);

  const renderPages = useMemo(() => {
    return componentsList.map((item) => item);
  }, [componentsList]);

  return (
    <div>
      <div className="hs-logo-container">
        <img
          className="hs-logo"
          src={hsLogo}
          onClick={() => {
            onCustomPageNumberSelect(0);
          }}
        />
      </div>
      <div style={styles.navigationButtonsContainer}>
        <NavigationButtons
          onItemSelect={onCustomPageNumberSelect}
          currentSelectedPage={currentPageNumber}
        />
      </div>
      <Stack direction="horizontal" gap={1}>
        <div style={styles.scrollView}>
          <ReactPageScroller
            animationTimer={800}
            pageOnChange={onPageChange}
            customPageNumber={currentPageNumber}
            blockScrollUp={shouldBlockScrollUp}
            blockScrollDown={shouldBlockScrollDown}
          >
            {renderPages}
          </ReactPageScroller>
        </div>
        {renderPaginationDots}
      </Stack>
    </div>
  );
}

export default React.memo(HomeScreen);

const styles = {
  navigationButtonsContainer: {
    display: "flex",
    width: "100%",
    position: "absolute",
    zIndex: 10,
    justifyContent: "flex-end",
    marginTop: "12px",
    paddingRight: "59px",
  },
  navigationDotsContainer: {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: "59px",
    position: "absolute",
  },
  navigationDots: {
    height: "10px",
    width: "10px",
    borderRadius: "5px",
  },
  scrollView: {
    zIndex: 9,
  },
};
