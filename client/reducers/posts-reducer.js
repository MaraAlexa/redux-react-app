// A reducer takes in 2 things:

 //  1. the action ( info about what happend)
 //  2. a copy of current state

export function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      console.log("INCREMENTING LIKES");
      const i = action.index;
      return [
        ...state.slice(0,i), // before the one that need to be updated
        {... state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), // after the one that needs to be updated
      ]
    default:
      return state;
  }
}

export default posts;
