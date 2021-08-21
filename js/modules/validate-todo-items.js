import * as localStorage from "./local-storage.js";
export const isItemDublicated = (item) => {
  item = item.toLowerCase();
  const dublicated =
    localStorage.getItems().indexOf(item) !== -1 ? true : false;
  return dublicated;
};
export const isItemTooLong = (item) => {
  return item.length > 20 ? true : false;
};
