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
const submitButton = document.querySelector("button");

// results
const yearsResults = document.querySelector("[data-years]");
const monthsResults = document.querySelector("[data-months]");
const daysResults = document.querySelector("[data-days]");

const errorColor = "var(--secondary-lightRed)";
const textColorDefault = "var(--neutral-smokeyGrey)";
const defaultBorderColor = "";

// validation

let isDayPassedValid = false;
let isMonthPassedValid = false;
let isYearPassedValid = false;
let isDateOfBirthValid = false;

const validDay = () => {
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

const validMonth = () => {
  dayError.textContent = "Must be a valid day";

  if (isNaN(birthMonth.value === "") || birthMonth.value > 12) {
    showErrorMessages(monthError, monthLabel, birthMonth);
    isMonthPassedValid = false;
  } else if (birthMonth.value === "") {
    monthError.textContent = "This field is required";
    showErrorMessages(monthError, monthLabel, birthMonth);
    isMonthPassedValid = false;
  } else {
    hideErrorMessages(monthError, monthLabel, birthMonth);
    isMonthPassedValid = true;
  }
};

const validYear = () => {
  yearError.textContent = "Must be in the past";

  const year = new Date().getFullYear();

  if (isNaN(birthYear.value) || birthYear.value > year) {
    showErrorMessages(yearError, yearLabel, birthYear);
    isYearPassedValid = false;
  } else if (birthYear.value === "") {
    yearError.textContent = "This field is required";
    showErrorMessages(yearError, yearLabel, birthYear);
    isYearPassedValid = false;
  } else {
    hideErrorMessages(yearError, yearLabel, birthYear);
    isYearPassedValid = true;
  }
};

const checkDateOfBirth = () => {
  const yearValue = parseInt(birthYear.value);
  const monthValue = parseInt(birthMonth.value) - 1;
  const dayValue = parseInt(birthDay.value);

  const birthdayTime = getBirthdayTime(
    yearValue,
    monthValue,
    dayValue
  ).getTime();

  const validMonth = getVali(yearValue, monthValue + 1, 0).getDate();

  const currentDate = Date.now();

  const isDateInvalid = isBirthdayInvalid(
    dayValue,
    validMonth,
    currentDate,
    birthdayTime
  );

  if (isDateInvalid) {
    showErrorMessages(dayError, dayLabel, birthDay);
    showErrorMessages(monthError, monthLabel, birthMonth);
    showErrorMessages(yearError, yearLabel, birthYear);

    isDateOfBirthValid = false;
  } else {
    isDateOfBirthValid = false;
  }
};

const getBirthdayTime = (year, month, day) => {
  return new Date(year, month, day).getTime();
};

const getValidMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

const isBirthdayInvalid = (day, validMonth, currentDate, birthdayTime) => {
  return day > validMonth || currentDate < birthdayTime;
};

const calculateAge = () => {
  checkDateOfBirth();

  if (!(isDayPassedValid && isMonthPassedValid && isYearPassedValid)) return;
};

const today = new Date();
const currentMonth = today.getMonth() + 1;
const currentDay = today.getDate();

let getYearDifference = today.getFullYear() - parseInt(birthYear.value);
let getMonthDifference = currentMonth - parseInt(birthMonth.value);
let getDayDifference = currentDay - parseInt(birthDay.value);

const showErrorMessages = (dayError, dayLabel, birthDay) => {
  dayError.style.opacity = 1;
  dayLabel.style.color = errorColor;
  birthDay.style.borderColor = errorColor;
};

const hideErrorMessages = (dayError, dayLabel, birthDay) => {
  dayError.style.opacity = 0;
  dayLabel.style.color = textColorDefault;
  birthDay.style.borderColor = defaultBorderColor;
};

console.log(validDay(17));
console.log(validMonth(17));
console.log(validYear(2019));

// hideErrorMessages(dayError, dayLabel, birthDay);

birthDay.addEventListener("input", validDay);
birthMonth.addEventListener("input", validMonth);
birthYear.addEventListener("input", validYear);
submitButton.addEventListener("click", calculateAge);
