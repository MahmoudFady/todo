const displayToDoCount = (count) => {
  const toDoCount = document.getElementById("todo-count");
  toDoCount.innerHTML = "";
  let msg = "";
  if (count !== 0) {
    msg = ` <h5><strong>there are ${count} todo</strong></h5>`;
  } else {
    msg = ` <h5><strong>no todo now !!</strong></h5>`;
  }
  toDoCount.insertAdjacentHTML("afterbegin", msg);
};
export { displayToDoCount };
