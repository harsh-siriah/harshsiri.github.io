import React, { useCallback, useMemo, useState } from "react";
import { Stack } from "react-bootstrap";
import ReactPageScroller from "react-page-scroller";
import colors from "../../utils/colors";
import About from "../About";
import Experience from "../Experience";
import Introduction from "../Introduction";
import NavigationButtons from "../NavigationButtons";
import "./HomeScreen.css";

function HomeScreen() {
  const [currentPageNumber, setCurrentPageNumber] = useState(0);

  const componentsList = useMemo(
    () => [<Introduction />, <About />, <Experience />],
    []
  );

  const onPageChange = useCallback(
    (pageNum) => {
      setCurrentPageNumber((currentPageNumber) => {
        if (pageNum > 0 && pageNum < componentsList.length) {
          console.log({ pageNum });
          return pageNum;
        }
        return currentPageNumber;
      });
    },
    [componentsList.length]
  );

  const onCustomPageNumberSelect = useCallback(
    (pageNum) => {
      if (currentPageNumber !== pageNum) {
        setCurrentPageNumber(pageNum);
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
                currentPageNumber == index
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
      <div style={styles.navigationButtonsContainer}>
        <NavigationButtons onItemSelect={onCustomPageNumberSelect} />
      </div>
      <Stack direction="horizontal" gap={1}>
        <div style={styles.scrollView}>
          <ReactPageScroller
            animationTimer={800}
            pageOnChange={onPageChange}
            customPageNumber={currentPageNumber}
            // renderAllPagesOnFirstRender={true}
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
