// A reducer takes in 2 things:

 //  1. the action ( info about what happend)
 //  2. a copy of current state

export function posts(state = [], action) {
  console.log("the post WILL CHANGE");
   console.log(state, action);
   return state;
}

export default posts;
