function until90YearsOld(currentAge) {
  //calculate age to days
  let ageInDays = 32850 - currentAge * 365;
  //calculate age to weeks
  let ageInWeeks = 4680 - currentAge * 52;
  //calculate age to months
  let ageInMonths = 1080 - currentAge * 12;
  //output total in days, weeks, months
  console.log(
    "You have " +
      ageInDays +
      " days, " +
      ageInWeeks +
      " weeks and " +
      ageInMonths +
      " months left until you're 80 years old."
  );
}

until90YearsOld(89);
