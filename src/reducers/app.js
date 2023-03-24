export default function app(state = {
  user: null,
}, action) {
  switch (action.type) {
    case 'CHANGE_USER':
      return { ...state, user: action.payload }
    default:
      return state
  }
}
