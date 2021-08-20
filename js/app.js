// class to do items
import { toDoDate } from "./modules/toDoDate.js";
import { toDoItems } from "./modules/todoItems.js";
import { toDoApp } from "./modules/toDoApp.js";
import { displayToDoCount } from "./modules/toDoCount.js";
import { toDoFormToggle } from "./modules/show-hide-form.js";
import { onAddItem, onDeleteItem } from "./modules/add-del-item.js";
////////////////////////////////
toDoFormToggle();
const toDoAppObj = toDoApp();
const toDoDateObj = toDoDate();
toDoDateObj.displayDate();
displayToDoCount(toDoItems().getItemsCount());
toDoAppObj.displayToDoItems(toDoItems().getItems());
/////////////////////////////////////////
onDeleteItem();
onAddItem();
