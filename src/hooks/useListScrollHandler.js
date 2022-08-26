import EventTypes from "../services/LocalEvent/EventTypes";
import { LocalEvent } from "../services/LocalEvent/LocalEvent";

export function useListScrollHandler() {
  const onMouseEnter = () => {
    LocalEvent.emit(EventTypes.ReactScroller.Scroll.Up.Block);
    LocalEvent.emit(EventTypes.ReactScroller.Scroll.Down.Block);
  };
  const onMouseLeave = () => {
    LocalEvent.emit(EventTypes.ReactScroller.Scroll.Up.UnBlock);
    LocalEvent.emit(EventTypes.ReactScroller.Scroll.Down.UnBlock);
  };

  return { onMouseEnter, onMouseLeave };
}
