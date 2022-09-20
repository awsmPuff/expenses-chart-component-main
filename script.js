// fetch json
const data = fetch('data.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        return data;
      })
      .catch(error => console.log(error));

// convert data into array
let chartContainer = document.querySelector(".bars");

// map through data and populate bars
data.then(data => {
    data.forEach(item => {
    let bar = document.createElement('div');
    bar.classList.add('bar');
    let value = "";
    const weekdays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const currentDay = new Date().getDay();
    if (item.day == weekdays[currentDay]) {
        value = `<div class="bar-value active" style="height:${item.amount * 1.1}%" data-before="$${item.amount}"></div>`;
    } else {
        value = `<div class="bar-value" style="height:${item.amount * 1.1}%" data-before="$${item.amount}"></div>`;
    }
    bar.innerHTML = `
      ${value}
      <div class="bar-title">${item.day}</div>    
    `;
    chartContainer.appendChild(bar);
})})



