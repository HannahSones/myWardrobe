$(document).ready(function(){

  // set up elements from html
  const calanderBar = $('#calander-container'); 
  const calander = $('#calander-table'); 
  const row = $('#calander-row'); 
  const currentYear = $('#current-year'); 
  const currentMonth = $('#current-month'); 
  const prev = $('a#btn-prev');
  const next = $('a#btn-next');

  // create event listners 

  prev.on('click', previousMonth);
  next.on('click', nextMonth); 


  // create the calander bar date content 

  const date = new Date(); 
  const year = date.getFullYear();
  const month = date.getMonth(); 
  // how many days in the month. 
  // const monthDays = daysInMonth(year, month); 
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; 

  console.log('global, date =', date); 
  console.log('global, year = ', year); 
  console.log('global, month = ', month); 

  
  // Populate page on load

  currentYear.text(year); 
  currentMonth.text(monthNames[month]); 
  
  


  // FUNCTIONS

  // ---------------------- Days in Month ------------------------------
  // check how many days in a give month
  // returns the 32nd day after the month started.  
  // subtracts the day returned from 32 to find the final day of the month. 
  // eg 32nd day in feb = 4th march, 32 - 4 = 28. 
  // --------------------------------------------------------------------
  function daysInMonth(year, month){ 
    const days = 32 - new Date(year, month, 32).getDate(); 
    return days;
  }

  // ---------------------- showMonth ------------------------------
  // Display the Month in calander container. 
  // -------------------------------------------------------------------- 
  function showMonth(month){
    const value = currentMonth.text();

    if(month === 0) {
      prev.addClass('hide'); 
    } 
    
    if (month > 0){
      prev.removeClass('hide');
    } 
    
    if(month === 11){
      next.addClass('hide');
    } 
    
    if (month < 11){
      next.removeClass('hide');
    } 
    const days = daysInMonth(year, month); 
    currentMonth.text(monthNames[month]); 
    showCalander(year, month, days);
    
  }


  // ---------------------- showCalander ------------------------------
  // Display the calander in html. 
  // ------------------------------------------------------------------
  function showCalander(year, month, days){
    let d = 1; 
    row.empty();
    // creating the cells for each day 
    for(let i = 0 ; i < days; i++ ) {
      
      let day = (new Date(year, month, d)).getDay();
      let dayName = weekDays[day];
      let cell = document.createElement('td');
      let cellText = `${dayName} ${d}`; 
      cell.append(cellText); 
      row.append(cell); 
      d++
    }
      
  }

  // ---------------------- previous Month ------------------------------
  // Show the previous month 
  // ------------------------------------------------------------------
  function previousMonth(){
    let text = currentMonth.text();
    let value = monthNames.indexOf(text);  
    value--;
    showMonth(value); 
  }

  // ---------------------- next month ------------------------------
  // show the next month
  // ------------------------------------------------------------------
  function nextMonth(){
    let text = currentMonth.text();
    let value = monthNames.indexOf(text); 
    value++;
    showMonth(value); 
  }
  
  // FUNCTION CALLS

  showMonth(month); 
  // showCalander(year, month, monthDays); 
  // page always loads the current month first. 



});


  // REFERENCES
  
  // patel,n.(2018). Challenge of building a calander with pure javascript. 
  // Medium.com. 
  // https://medium.com/@nitinpatel_20236/challenge-of-building-a-calendar-
  // with-pure-javascript-a86f1303267d. (accessed: 14/02/2021). 

