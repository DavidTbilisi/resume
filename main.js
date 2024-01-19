let allDates = document.querySelectorAll('.dates-range')

allDates.forEach((date) => {
  let dateRange = date.innerHTML.split(' - ')
  let startDate = moment(dateRange[0], 'MMM YYYY')
  let endDate = dateRange[1] === 'PRESENT' ? moment() : moment(dateRange[1], 'MMM YYYY');
  // get the difference with moment.js and format it with Years, Months, Days
    let duration = moment.duration(endDate.diff(startDate))
    let years = duration.years() > 0 ? duration.years() + ' Years ' : '';
    let months = duration.months() > 0 ? duration.months() + ' Months ' : '';
    let days = duration.days() > 0 ? duration.days() + ' Days ' : '';
    let durationString = years + months + days;
    let relative = startDate.fromNow()
    
    date.parentElement.querySelector(".duration").innerHTML = durationString
    date.parentElement.querySelector(".ago").innerHTML = relative
    
})