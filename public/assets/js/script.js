$(document).ready(function(){

  // import date elements from date.js
  const [currentMonth, currentYear, date, year, month, monthNames, weekDays] = getDateData();

  // set up elements from html
  const calendarDay = $('#calendar-row');

  
  
  
  // FUNCTIONS
  
  function getDayID(){
    
    const text = $(this).text().split(" ");
    let textDate = text[1];
    const textMonth = currentMonth.text();
    const textYear = currentYear.text();

    if(textDate.length === 1){
      const zero = '0';
      textDate = zero + textDate;
      // console.log("textDate =", textDate, typeof(textDate));
    }

    // gets the index and plus 1 to account for indexing begining with zero.
    const monthIndex = monthNames.indexOf(textMonth) + 1;
    let valueMonth = monthIndex.toString();
    // console.log("valueMonth =", valueMonth, typeof(valueMonth));
    if(valueMonth.length === 1){
      const zero = '0';
      valueMonth = zero + valueMonth;
      // console.log("valueMonth =", valueMonth, typeof(valueMonth));
    }

    const dayId = `${textYear}-${valueMonth}-${textDate}`;
    // console.log("dayId =", dayId);
    
    return dayId;
  }
  
  
  // create event listners
  calendarDay.on('click', 'td', getDayID);
  



}); 