function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested").querySelector(".target")
}

function increaseRankBy(n) {
  const lis = document.querySelector("#app").querySelectorAll("ul.ranked-list li")
  for (let i = 0; i< lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
  return
}

function deepestChild() {
  var current = document.querySelector("#grand-node")
  while (current.children.length !== 0) {
    current = current.children[0]
  }
  return current
}