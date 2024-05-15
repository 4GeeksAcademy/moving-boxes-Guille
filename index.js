const createBox = () => {
  const newElement = document.createElement("div");
  newElement.innerHTML = `<div onclick="moveBox(event)" class ="box" id ="${randomId()}">${nId}</div>`;
  document.body.appendChild(newElement);
};

let nId = 0;

const randomId = () => {
  nId++;
  return nId;
};

let isMoving = false;

const moveBox = (event) => {
  const box = document.getElementById(event.target.id);
  box.style.position = 'absolute';

  isMoving = true;
  onmousemove = (e) => {
    if (!isMoving) return;
    box.style.top = e.clientY + "px";
    box.style.left = e.clientX + "px";
  };
};

const stopMovingBox = () => {
  isMoving = false;
};
//html colection pasar a array for each selecionar elemento,
