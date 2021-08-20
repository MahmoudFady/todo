const toDoApp = () => {
  const getTodoItemStructure = (content) => {
    return `<div class="todo-item">
            <p>${content}</p>
            <button><i class="fa fa-trash"></i></button>
          </div>`;
  };
  const addNewToDoItem = (content) => {
    const toDoItemsEle = document.getElementById("todo-items");
    toDoItemsEle.insertAdjacentHTML(
      "afterbegin",
      getTodoItemStructure(content)
    );
  };
  const displayToDoItems = (items) => {
    const toDoItemsEle = document.getElementById("todo-items");
    let itemsStructure = "";
    for (let item of items) {
      itemsStructure += getTodoItemStructure(item);
    }
    toDoItemsEle.insertAdjacentHTML("afterbegin", itemsStructure);
  };
  return { displayToDoItems, addNewToDoItem };
};
export { toDoApp };
