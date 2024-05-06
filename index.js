const createBox = () => {
  const newElement = document.createElement("div");
  newElement.innerHTML =`<div onclick="moveBox()" class ="box" id ="${randomId()}">${nId}</div>`;
  document.body.appendChild(newElement);
};
let nId=0;

const randomId = () =>{
    nId++;
    return nId;
}

const moveBox = () =>{
    const box = document.querySelector("#boxTest")
}

onmousemove = function(e){console.log(e.clientX, e.clientY)}

//html colection pasar a array for each selecionar elemento,