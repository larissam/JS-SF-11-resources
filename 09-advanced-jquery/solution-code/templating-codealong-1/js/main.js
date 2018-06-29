const session = {
  title: "Advances in Wasp Farming",
  presenter: "Cassandra Fleming",
  day: "Monday",
  start: "12:30",
  end: "2:00",
  summary: "Recent advances and trends among wasp farmers"
};

// imagine we want the html for each session to look like this
// <div class="session">
  // <p class="title">Advances in Wasp Farming</p>
  // <p><span class="label">Time: </span>Monday 12:30 - 2:00</p>
  // <p><span class="label">Presenter: </span>Cassandra Fleming</p>
  // <p>Recent advances and trends among wasp farmers</p>
// </div>

// Make content equal to a template string that uses the values from session object
let content;
content = `
  <div class="session">
    <p class="title">${session.title}</p>
    <p><span class="label">Time: </span>${session.day} ${session.start} - ${session.end}</p>
    <p><span class="label">Presenter: </span>${session.presenter}</p>
    <p>${session.summary}</p>
  </div>
`;

$('.sessions').html(content);
