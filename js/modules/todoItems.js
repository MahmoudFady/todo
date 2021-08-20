const toDoItems = function () {
  let items = ["learning js", "paly football "];
  const getItems = () => items;
  const pushItem = (item) => {
    items.push(item);
  };
  const popItem = (item) => {
    items = items.filter((i) => i !== item);
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
