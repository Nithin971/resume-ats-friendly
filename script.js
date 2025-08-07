document.getElementById('startButton').addEventListener('click', function () {
  document.getElementById('landingPage').style.display = 'none';
  document.getElementById('resumePage').style.display = 'block';
});

function generateResume() {
  const fullName = document.getElementById('fullName').value || "Your Name";
  const email = document.getElementById('email').value || "you@example.com";
  const city = document.getElementById('city').value || "Your City";
  const phone = document.getElementById('phone').value || "123-456-7890";
  const experience = document.getElementById('experience').value || "No experience added.";
  const projects = document.getElementById('projects').value || "No projects listed.";
  const education = document.getElementById('education').value || "No education info.";
  const skills = document.getElementById('skills').value || "";
  const coursework = document.getElementById('coursework').value || "N/A";
  const societies = document.getElementById('societies').value || "N/A";
  const links = document.getElementById('links').value || "";

  const skillList = skills
    .split(',')
    .filter(skill => skill.trim())
    .map(skill => `<li>${skill.trim()}</li>`)
    .join('');

  const linkList = links
    .split('\n')
    .filter(link => link.trim())
    .map(link => {
      const url = link.trim();
      return url.startsWith("http") ? url : `https://${url}`;
    })
    .join('<br>');

  const content = `
    <html>
    <head>
      <title>${fullName} - Resume</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 30px; line-height: 1.6; }
        h1, h2 { margin: 10px 0; }
        ul { padding-left: 20px; }
        .header { text-align: center; margin-bottom: 30px; }
        .columns { display: flex; gap: 40px; }
        .column { width: 50%; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>${fullName}</h1>
        <p>📧 ${email} | 📍 ${city} | 📞 ${phone}</p>
      </div>
      <div class="columns">
        <div class="column">
          <h2>Experience</h2>
          <p>${experience}</p>
          <h2>Projects</h2>
          <p>${projects}</p>
        </div>
        <div class="column">
          <h2>Education</h2>
          <p>${education}</p>
          <h2>Skills</h2>
          ${skillList ? `<ul>${skillList}</ul>` : "<p>None listed</p>"}
          <h2>Coursework</h2>
          <p>${coursework}</p>
          <h2>Societies</h2>
          <p>${societies}</p>
          <h2>Links</h2>
          <p>${linkList || 'No links provided.'}</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const newWindow = window.open('', '_blank');
  newWindow.document.open();
  newWindow.document.write(content);
  newWindow.document.close();
}
