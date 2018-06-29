const sessions = [
  {
    title: "Advances in Wasp Farming",
    presenter: "Cassandra Fleming",
    day: "Monday",
    start: "12:30",
    end: "2:00",
    summary: "Recent advances and trends among wasp farmers"
  },
  {
    title: "101 Uses for Beetles",
    presenter: "Omar Hassan",
    day: "Tuesday",
    start: "9:30",
    end: "11:00",
    summary: "What can you do with beetles? What CAN'T you do with beetles!"
  },
  {
    title: "Good or Weevil?",
    presenter: "Terrance O'Halloran & Amy Wong",
    day: "Monday",
    start: "4:00",
    end: "5:30",
    summary: "Debate: Do weevils just get a bad rap, or are they an unredeemable scourge?"
  }
];

// imagine we want the html for each session to look like this
// <div class="session">
  // <p class="title">Advances in Wasp Farming</p>
  // <p><span class="label">Time: </span>Monday 12:30 - 2:00</p>
  // <p><span class="label">Presenter: </span>Cassandra Fleming</p>
  // <p>Recent advances and trends among wasp farmers</p>
// </div>

// loop through the sessions array to create a string that contains one
// div for each session
let content = '';
sessions.forEach(function(session){
  content += `
    <div class="session">
      <p class="title">${session.title}</p>
      <p><span class="label">Time: </span>${session.day} ${session.start} - ${session.end}</p>
      <p><span class="label">Presenter: </span>${session.presenter}</p>
      <p>${session.summary}</p>
    </div>
  `;
});

$('.sessions').html(content);