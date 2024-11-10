let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let li = document.querySelector("li");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");
  item.innerText = inp.value;
  inp.value = "";
  ul.append(item);
  item.appendChild(delBtn);
});

inp.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    let item = document.createElement("li");
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.innerText = inp.value;
    inp.value = "";
    ul.appendChild(item);
    item.appendChild(delBtn);
  }
});

// let delBtns = document.querySelectorAll(".delete")
// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function() {
//         let par = this.parentElement
//         par.remove()()
//     })
// }

/**evetn listeners is for existing elemetns not apply for new element */

/**event delegation bubbling concept parent child relation */

ul.addEventListener("click", function(event) {
    console.log(event.target.nodeName)  
    if(event.target.nodeName === 'BUTTON'){  
        console.log(event.target.parentElement)
    event.target.parentElement.remove()
    }
})