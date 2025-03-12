// 1. Create constant for html elements
const newPeriodFormEl = document.getElementsByTagName("form")[0];
const startDateInputEl = document.getElementById("start-date");
const endDateInputEl = document.getElementById("end-date");

// 2. Listen for updates of the form el
newPeriodFormEl.addEventListener("submit", (event) => {
  // 3. Prevent default (prevent form from submitting to server)
  event.preventDefault();

  // 4. Check invalid dates

  // Get dates from the form
  const startDate = startDateInputEl.value;
  const endDate = endDateInputEl.value;

  if (checkDatesInvalid(startDate, endDate)) {
    return; //exit if invalid
  }

  // 5. Store new data
  storeNewPeriod(startDate, endDate);

  // 6. Refresh UI & reset the form
  renderPastPeriods();

  newPeriodFormEl.reset();
});
