const tdEl = document.querySelectorAll(".grade");

for (const icon of tdEl) {
  let fulfill = Number(icon.innerHTML);
  icon.innerHTML = "";
  for (let i = 0; i <= 4; i++) {
    const gradeIcon = document.createElement("div");
    gradeIcon.classList = "grade-icons";
    icon.appendChild(gradeIcon);
  }
  const icons = icon.querySelectorAll(".grade-icons");
  console.log(icons);
  for (const fulfillIcon of icons) {
    if (fulfill <= 0) continue;
    fulfillIcon.className = "grade-icons-fulfill";
    fulfill--;
  }
}
