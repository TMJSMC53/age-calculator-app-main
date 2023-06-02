// day
const birthDay = document.getElementById("day");
const dayError = document.querySelector(".day");
const dayLabel = document.querySelector("[for='day']");

// month
const birthMonth = document.getElementById("month");
const monthError = document.querySelector(".month");
const monthLabel = document.querySelector("[for='month']");

// year
const birthYear = document.getElementById("year");
const yearError = document.querySelector(".year");
const yearLabel = document.querySelector("[for='year']");

// submit btn
const submitButton = document.createElement("button");

// results
const yearsResults = document.querySelector("[data-years]");
const monthsResults = document.querySelector("[data-months]");
const daysResults = document.querySelector("[data-days]");

// validation
const isDayValid = false;
const isDayPassedValid = false;
const isMonthPassedValid = false;
const isYearPassedValid = false;

const validBirthDay = () => {
  dayError.textContent = "Must be a valid day";

  if (isNaN(birthDay.value) || birthDay.value > 31) {
    showErrorMessages(dayError, dayLabel, birthDay);
    isDayPassedValid = false;
  } else if (birthDay.value === "") {
    dayError.textContent = "This field is required";
    showErrorMessages(dayError, dayLabel, birthDay);
    isDayPassedValid = false;
  } else {
    hideErrorMessages(dayError, dayLabel, birthDay);
    isDayPassedValid = true;
  }
};

const showErrorMessages = (dayError, dayLabel, birthDay) => {
  const errorColor = "var(--primary-lightRed)";

  if (dayError && dayLabel && birthDay) {
    dayError.style.opacity = 1;
    dayLabel.style.color = errorColor;
    birthDay.style.borderColor = errorColor;
  } else {
    console.log("One or more elements are undefined");
  }
};
const hideErrorMessages = (dayError, dayLabel, birthDay) => {
  const hideColor = "transparent";

  if (dayError && dayLabel && birthDay) {
    dayError.style.opacity = 0;
    dayLabel.style.color = "var(--neutral-lgtGrey)";
    birthDay.style.borderColor = hideColor;
  } else {
    console.log("One or more elements are undefined");
  }
};
