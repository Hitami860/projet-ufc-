


document.addEventListener('DOMContentLoaded', function () {

  let addevent = [];
 fetch('./json/datecombatufc.json').then(res => res.json()).then(data => {
    for (i = 0; i < data.length; i++) {
      addevent.push({title : data[i].Name, start : data[i].DateTime})
    }

    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      events: addevent,
      selectable: true,
    });
    calendar.render();
  })

});
