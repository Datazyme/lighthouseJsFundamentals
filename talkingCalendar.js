const talkingCalendar = function(date) {
  let year = date.substring(0, 4);
  let month = date.substring(5, 7);
  let day = date.substring(8, 10);
  let converted = ""; 
  switch (month) {
    case "01":
      converted += "January ";
      break;
    case "02":
      converted += "February ";
      break;
    case "03":
      converted += "March ";
      break;
    case "04":
      converted += "April ";
      break;
    case "05":
      converted += "May ";
      break;
    case "06":
      converted += "June ";
      break;
    case "07":
      converted += "July ";
      break; 
    case "08":
      converted += "August ";
      break;
    case "09":
      converted += "September ";
      break;
    case "10":
      converted += "October ";
      break;
    case "11":
      converted += "Novemeber ";
      break;
    case "12":
      converted += "December ";
      break;
  };
  switch (day) {
    case "01":
      converted += " 1st,";
      break;
    case "02":
      converted += " 2nd,";
      break;
    case "03":
      converted += " 3rd,";
      break;
    case "04":
    case "05":
    case "06":
    case "07":
    case "08":
    case "09":
      converted += day[1] + "th,"
      break;
    case "21":
    case "31":
    converted += day + "st,";
    break;
    case "22":
      converted += day + "nd,";
      break;
    case "23":
      converted += day + "rd,";
      break;
    default:
      converted += day + "th,";
    
  };
  return converted + " " + year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));