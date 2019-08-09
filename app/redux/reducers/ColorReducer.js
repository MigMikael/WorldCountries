const initialState = {
  colorName: 'RED'
}

const ColorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'COLOR_CHANGE':
      return { ...state, colorName: action.payload.colorName }
    default:
      return state
  }
}

export default ColorReducer