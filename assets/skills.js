// Dynamic skill renderer
// Edit the skills array to change what appears on the page.
// The script will render .skill elements inside #skills-list and animate the bars.

(function () {
  const skills = [
    { name: "Python", percent: 60 },
    { name: "Java", percent: 40 },
    { name: "DSA", percent: 30 },
    { name: "Frontend Dev", percent: 60 },
    { name: "M L", percent: 50 }
  ];

  const container = document.getElementById("skills-list");
  if (!container) return;

  // Remove existing static skill nodes if any (safety)
  const existingSkills = container.querySelectorAll(".skill");
  existingSkills.forEach((n) => n.remove());

  const fragment = document.createDocumentFragment();

  skills.forEach((skill, idx) => {
    const skillEl = document.createElement("div");
    skillEl.className = "skill flex";

    const nameSpan = document.createElement("span");
    nameSpan.textContent = skill.name;

    const barContainer = document.createElement("div");
    barContainer.className = "skill_bar_container";

    const bar = document.createElement("div");
    bar.className = "skill_bar";
    bar.style.width = "0%"; // start at 0 for animation
    bar.setAttribute("role", "progressbar");
    bar.setAttribute("aria-valuemin", "0");
    bar.setAttribute("aria-valuemax", "100");
    bar.setAttribute("aria-valuenow", String(skill.percent));
    bar.textContent = skill.percent + "%";

    barContainer.appendChild(bar);
    skillEl.appendChild(nameSpan);
    skillEl.appendChild(barContainer);

    fragment.appendChild(skillEl);

    // staggered animation so bars fill sequentially
    setTimeout(() => {
      bar.style.transition = "width 700ms ease-in-out";
      bar.style.width = skill.percent + "%";
    }, 120 * idx + 150);
  });

  container.appendChild(fragment);
})();