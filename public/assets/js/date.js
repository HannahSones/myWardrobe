function getDateData() {/* eslint-disable-line no-unused-vars */

  // set up elements from html
  const currentYear = $('#current-year');
  const currentMonth = $('#current-month');
  // create the calander bar date content

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();

  // const monthDays = daysInMonth(year, month);
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return { currentMonth, currentYear, date, year, month, monthNames, weekDays };
}
