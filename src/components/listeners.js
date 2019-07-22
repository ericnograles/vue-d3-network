// See: https://vuejs.org/v2/guide/render-function.html#Event-amp-Key-Modifiers
export const LISTENERS = {
  svg: ({emit}) => {
    return {
      mouseup: event => emit('dragEnd', [event]),
      '&touchend': event => emit('dragEnd', [event])
    }
  },
  link: ({emit, link}) => {
    return {
      click: event => emit('linkClick', [event, link]),
      dblclick: event => emit('linkDoubleClick', [event, link]),
      '&touchstart': event => emit('linkClick', [event, link]),
    }
  },
  node: ({emit, node, key}) => {
    return {
      click: event => emit('nodeClick', [event, node]),
      '&touchend': event => emit('nodeClick', [event, node]),
      dblclick: event => emit('nodeDoubleClick', [event, node]),
      mousedown: event => {
        event.preventDefault()
        emit('dragStart', [event, key])
      },
      touchstart: event => {
        event.preventDefault()
        emit('dragStart', [event, key])
      }
    }
  }
}
