import * as localStorage from "./local-storage.js";
const toDoItems = function () {
  let items = localStorage.getItems();
  const getItems = () => items;
  const pushItem = (item) => {
    items.push(item);
    localStorage.updateItems(items);
  };
  const popItem = (item) => {
    items = items.filter((i) => i !== item);
    localStorage.updateItems(items);
  };
  const isItemDublicated = (item) => {
    item = item.toLowerCase();
    const dublicated = items.indexOf(item) !== -1 ? true : false;
    return dublicated;
  };
  const getItemsCount = () => items.length;
  return {
    getItems,
    getItemsCount,
    pushItem,
    popItem,
    isItemDublicated,
  };
};
export { toDoItems };
