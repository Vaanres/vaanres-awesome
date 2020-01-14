import { ScrollbarPlugin } from 'smooth-scrollbar'

export default class HorizontalScrollPlugin extends ScrollbarPlugin {
  static pluginName = 'horizontalScroll'

  transformDelta(delta, fromEvent) {
    if (this.shouldInvertDelta(fromEvent)) {
      return {
        x: delta.y,
        y: delta.y
      }
    }

    return delta
  }

  shouldInvertDelta(fromEvent) {
    return this.options.events.some((rule) => fromEvent.type.match(rule))
  }
}

HorizontalScrollPlugin.pluginName = 'horizontalScroll'
HorizontalScrollPlugin.defaultOptions = { events: [] }
