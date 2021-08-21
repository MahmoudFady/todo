import { toDoItems } from "./todoItems.js";
import { toDoApp } from "./toDoApp.js";
import { displayToDoCount } from "./toDoCount.js";
import * as validate from "./validate-todo-items.js";
const { getItemsCount, pushItem, popItem, isItemDublicated } = toDoItems();
const onAddItem = () => {
  const form = document.querySelector("#todo-form form");
  form.onsubmit = function (evt) {
    evt.preventDefault();
    const content = form["content"].value.trim();
    if (validate.isItemDublicated(content)) {
      alert("item already added");
    } else if (validate.isItemTooLong(content)) {
      alert("max length is : 20");
    } else if (content !== "") {
      pushItem(content);
      toDoApp().addNewToDoItem(content);
      displayToDoCount(getItemsCount());
      onDeleteItem();
      this.reset();
    } else {
      alert("content con't be empty");
    }
  };
};
function onDeleteItem() {
  const delBtns = document.querySelectorAll("#todo-items button");
  for (let i = 0; i < delBtns.length; i++) {
    delBtns[i].onclick = function () {
      let item = this.previousElementSibling.textContent;
      let okDelete = window.confirm("to do will be deleted !!");
      if (okDelete) {
        this.parentElement.remove();
        popItem(item);
        displayToDoCount(getItemsCount());
      }
    };
  }
}
export { onAddItem, onDeleteItem };
