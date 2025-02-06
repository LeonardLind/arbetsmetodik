const jobs = [
  {
    title: "Frontendutvecklare",
    description: "Utveckla moderna webbapplikationer.",
    location: "Stockholm",
  },
  {
    title: "Backendutvecklare",
    description: "Bygg API:er och databashantering.",
    location: "Göteborg",
  },
  {
    title: "UX Designer",
    description: "Skapa användarvänliga gränssnitt.",
    location: "Malmö",
  },
];

const displayJobs = () => {
  const jobList = document.getElementById("job-list");
  jobList.innerHTML = "";

  jobs.forEach((job) => {
    const jobItem = document.createElement("div");
    jobItem.classList.add("job");

    jobItem.innerHTML = `
    <h2>${job.title}</h2>
    <p>${job.description}</p>
    <span>${job.location}</span>
  `;
    jobList.appendChild(jobItem);
  });
};

document.addEventListener("DOMContentLoaded", displayJobs);
