export function getItems() {
  let items = [];
  const isItemSaved = localStorage.getItem("todoItems") ? true : false;
  if (isItemSaved) items = localStorage.getItem("todoItems").split(",");
  return items.reverse();
}
export function updateItems(newItems) {
  localStorage.setItem("todoItems", newItems);
}
