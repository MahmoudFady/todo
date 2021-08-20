const toDoDate = () => {
  const getDate = () => {
    let date = new Date();
    date = date.toDateString().split(" ");
    console.log(date);
    return {
      day: date[0],
      month: date[1],
      date: date[2],
      year: date[3],
    };
  };
  const getDateStructure = () => {
    const { day, month, date, year } = getDate();
    const dateStructure = `
        <div id="todo-date-l">
            <h1>
            <strong> <i class="fa fa-calendar"></i> ${date}</strong>
            </h1>
            <ul>
            <li>${month}</li>
            <li>${year}</li>
            </ul>
        </div>
        <div id="todo-date-r">
         <h3><strong>${day}</strong></h3>
        </div>
    `;
    return dateStructure;
  };
  const displayDate = () => {
    const toDoDate = document.getElementById("todo-date");
    toDoDate.insertAdjacentHTML("afterbegin", getDateStructure());
  };
  return { displayDate };
};
export { toDoDate };
