const jobs = [
  {
    title: "Frontendutvecklare",
    description: "Utveckla moderna webbapplikationer.",
    location: "Plats: Stockholm",
  },
  {
    title: "Backendutvecklare",
    description: "Bygg API:er och databashantering.",
    location: "Plats: Göteborg",
  },
  {
    title: "UX Designer",
    description: "Skapa användarvänliga gränssnitt.",
    location: "Plats: Malmö",
  },
];

const displayJobs = () => {
  const jobList = document.getElementById("job-list");
  jobList.innerHTML = "";

  const title = document.createElement("h1");
  title.innerHTML = "Lediga jobb";
  title.className = "jobs-title";

  jobList.append(title);

  jobs.forEach((job) => {
    const jobItem = document.createElement("div");
    jobItem.className = "job-item";

    jobItem.innerHTML = `
    <h2>${job.title}</h2>
    <p>${job.description}</p>
    <span>${job.location}</span>
  `;
    jobList.append(jobItem);
  });
};

document.addEventListener("DOMContentLoaded", displayJobs);
