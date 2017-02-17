// increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES', // type of action
    index: index            // which post needs to be incremented
  }
}
// add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// remove comment
export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}
