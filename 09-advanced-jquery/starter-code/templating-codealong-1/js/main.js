const session = {
  title: "Advances in Wasp Farming",
  presenter: "Cassandra Fleming",
  day: "Monday",
  start: "12:30",
  end: "2:00",
  summary: "Recent advances and trends among wasp farmers"
};

// imagine we want the html for the session to look like this
// <div class="session">
  // <p class="title">Advances in Wasp Farming</p>
  // <p><span class="label">Time: </span>Monday 12:30 - 2:00</p>
  // <p><span class="label">Presenter: </span>Cassandra Fleming</p>
  // <p>Recent advances and trends among wasp farmers</p>
// </div>

// Make content equal to a template string that uses the values from session object
let content;








$('.sessions').html(content);
