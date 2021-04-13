import { createStore } from 'redux'

// For now this is just a minimal reducer, as a placeholder
function oeeRootReducer(state = {}, action) {
  switch (action.type) {
    case 'DO_A_THING':
      // This is where we would alter state.
      return state
    default:
      return state
  }
}

const store = createStore(oeeRootReducer, {})

export default store
