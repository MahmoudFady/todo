const toDoFormToggle = () => {
  const toggleAddToDoForm = function () {
    const element = document.getElementById("todo-add-container");
    const classes = element.classList;
    const isActive = classes.contains("isActive");
    if (isActive) {
      console.log("remove");
      element.classList.remove("isActive");
    } else {
      console.log("add");
      element.classList.add("isActive");
    }
  };
  const addTodDoBtn = document.querySelector("#add-todo button");
  const cancelTodDoBtn = document.querySelector("#cancel button");

  addTodDoBtn.onclick = () => {
    toggleAddToDoForm();
  };
  cancelTodDoBtn.onclick = () => {
    toggleAddToDoForm();
  };
};
export { toDoFormToggle };
