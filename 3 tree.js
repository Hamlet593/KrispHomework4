/*Write a recursive function that will get all values from the tree.*/

const tree = {
  value: 12,
  next: {
    value: 20,
    next: {
      value: 30,
      next: {
        value: -10,
        next: null
      }
    }
  }
}


const fn = tree => {
  if(tree.next){
    return [tree.value, ...fn(tree.next)];
  }
  else{
    return [tree.value];
  }
}

console.log(fn(tree))