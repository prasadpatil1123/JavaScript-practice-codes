function calculateTotalMinutes(minutesArray) {
  let totalMinutes = 0;
  for (const minutes of minutesArray) {
    totalMinutes += minutes;
  }
  return totalMinutes;
}

function calculateTotalHours(minutesArray) {
  let totalMinutes = 0;
  for (const muinutes of minutesArray) {
    totalMinutes += muinutes;
  }
  // const totalHours = Math.floor(totalMinutes / 60);
  const totalHours = totalMinutes / 60;
  return totalHours;
}

const minutesArray = [];
const minutesListElement = document.getElementById("minutes-list");
const totalMinutesElement = document.getElementById("total-minutes");
const minutesInputElement = document.getElementById("minutes-input");

function addMinute() {
  const minuteValue = parseInt(minutesInputElement.value);
  if (!isNaN(minuteValue) && minuteValue > 0) {
    minutesArray.push(minuteValue);
    const listItem = document.createElement("li");
    listItem.textContent = `${minuteValue} minutes`;
    minutesListElement.appendChild(listItem);
    minutesInputElement.value = "";
  } else {
    alert("Enter a valid number.");
  }
}

function calculateAndDisplay() {
  const total = calculateTotalMinutes(minutesArray);
  totalMinutesElement.textContent = `${total} minutes`;
}

function calculateAndDisplayHours() {
  const totalHours = calculateTotalHours(minutesArray);
  const totalHoursElement = document.getElementById("total-hours");
  totalHoursElement.textContent = `${totalHours} hours`;
}

function addTitleIndex(text) {
  const titleElement = document.createElement("h2");
  titleElement.textContent = text;
  document.body.insertBefore(
    titleElement,
    document.getElementById("input-container")
  );
}

function addTitle() {
  const titleInput = document.getElementById("title-input");
  const titleText = titleInput.value.trim();

  if (titleText !== "") {
    const titleElement = document.createElement("h2");
    titleElement.textContent = titleText;

    const titleDisplay = document.getElementById("title-display");
    titleDisplay.appendChild(titleElement);

    titleInput.value = "";
  } else {
    alert("Please enter a title.");
  }
}
