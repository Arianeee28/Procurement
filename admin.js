 const saveDepartmentBtn = document.getElementById("saveDepartmentBtn");
  const departmentInput = document.getElementById("departmentInput");

  saveDepartmentBtn.addEventListener("click", () => {
    const departmentName = departmentInput.value.trim();

    if (departmentName === "") {
      alert("Please enter a department name.");
      return;
    }

    // Append to the department list
    const list = document.querySelector("#addVariablesSection ul");
    const li = document.createElement("li");
    li.textContent = departmentName;
    list.appendChild(li);

    // Clear input
    departmentInput.value = "";
    alert("Department added successfully!");
  });

   function addAccount() {
  hideAllSections(); // Reuse the same function that hides all sections
  addAccountSection.style.display = "block";
  document.getElementById("pageTitle").textContent = "Add Account";
  window.scrollTo({ top: 0, behavior: "smooth" });
}


function hideAllSections() {
  dashboardSection.style.display = "none";
  procurementSection.style.display = "none";
  teamSection.style.display = "none";
  profileSection.style.display = "none";
  addAccountSection.style.display = "none";
  addVariablesSection.style.display = "none"; // <-- add this
}


    let isDetailsVisible = false;
    function toggleAccountDetails() {
      const countEl = document.getElementById("accountCountWrapper");
      const detailEl = document.getElementById("accountDetails");
      isDetailsVisible = !isDetailsVisible;
      countEl.style.display = isDetailsVisible ? "none" : "flex";
      detailEl.style.display = isDetailsVisible ? "block" : "none";
    }

    let isBudgetVisible = false;
    function toggleBudgetDetails() {
      const extra = document.getElementById("moreBudgetDetails");
      isBudgetVisible = !isBudgetVisible;
      extra.style.display = isBudgetVisible ? "block" : "none";
    }

   const dashboardSection = document.querySelector(".cards");
const procurementSection = document.getElementById("procurementSection");
const teamSection = document.getElementById("teamSection");
const profileSection = document.getElementById("profileSection");

const dashboardLink = document.querySelector(".menu a:nth-child(1)");
const procurementLink = document.querySelector(".menu a:nth-child(2)");
const teamLink = document.querySelector(".menu a:nth-child(3)");
const profileBox = document.querySelector(".profile");
const procurementToggle = document.getElementById("procurementToggle");
const procurementMenu = document.getElementById("procurementMenu");
const showItinerary = document.getElementById("showItinerary");
const showRequest = document.getElementById("showRequest");

procurementToggle.addEventListener("click", (e) => {
  e.preventDefault();
  procurementMenu.style.display = procurementMenu.style.display === "flex" ? "none" : "flex";
});

dashboardLink.addEventListener("click", (e) => {
   e.preventDefault();
  hideAllSections();
  dashboardSection.style.display = "grid";
  document.getElementById("pageTitle").textContent = "Dashboard";
});


const teamToggle = document.getElementById("teamToggle");
const teamMenu = document.getElementById("teamMenu");

teamToggle.addEventListener("click", (e) => {
  e.preventDefault();
  teamMenu.style.display = teamMenu.style.display === "flex" ? "none" : "flex";
});


procurementLink.addEventListener("click", (e) => {
 e.preventDefault();
  hideAllSections();
  procurementSection.style.display = "block";
  document.getElementById("pageTitle").textContent = "Itinerary";
});

teamLink.addEventListener("click", (e) => {
  e.preventDefault();
  hideAllSections();
  teamSection.style.display = "block";
  document.getElementById("pageTitle").textContent = "Team";
});

profileBox.addEventListener("click", () => {
  hideAllSections();
  profileSection.style.display = "block";
  document.getElementById("pageTitle").textContent = "Profile";
});

showItinerary.addEventListener("click", (e) => {
  e.preventDefault();
  dashboardSection.style.display = "none";
  procurementSection.style.display = "block";
  teamSection.style.display = "none";
  profileSection.style.display = "none";
  document.getElementById("pageTitle").textContent = "Itinerary";
});

showRequest.addEventListener("click", (e) => {
  e.preventDefault();
  dashboardSection.style.display = "none";
  procurementSection.style.display = "block";
  teamSection.style.display = "none";
  profileSection.style.display = "none";
  document.getElementById("pageTitle").textContent = "Add/View Items";

  // Show Order Info modal
  document.getElementById("orderInfoModal").style.display = "flex";
});

const showEmployees = document.getElementById("showEmployees");
const showAddAccount = document.getElementById("showAddAccount");
const showAddVariables = document.getElementById("showAddVariables");

showEmployees.addEventListener("click", (e) => {
   e.preventDefault();
  hideAllSections();
  teamSection.style.display = "block";
  addVariablesSection.style.display = "none";
  document.getElementById("pageTitle").textContent = "Employees";
});

const addAccountSection = document.getElementById("addAccountSection");

showAddAccount.addEventListener("click", (e) => {
  e.preventDefault();
  hideAllSections();
  addAccountSection.style.display = "block";
  document.getElementById("pageTitle").textContent = "Add Account";
});


showAddVariables.addEventListener("click", (e) => {
  e.preventDefault();
  hideAllSections();
  addVariablesSection.style.display = "block"; // ONLY show this
  document.getElementById("pageTitle").textContent = "Add Variables";
});


  const editBtn = document.getElementById("editBtn");
  const saveBtn = document.getElementById("saveBtn");
  const inputs = document.querySelectorAll("#profileSection input");
  const textarea = document.querySelector("#profileSection textarea");

  // Set all to readonly initially
  inputs.forEach(input => input.setAttribute("readonly", true));
  textarea.setAttribute("readonly", true);

  // Enable fields on Edit
  editBtn.addEventListener("click", () => {
    inputs.forEach(input => input.removeAttribute("readonly"));
    textarea.removeAttribute("readonly");
  });

  // Disable fields on Save
  saveBtn.addEventListener("click", () => {
    inputs.forEach(input => input.setAttribute("readonly", true));
    textarea.setAttribute("readonly", true);

    // Optional: You can add saving logic here (e.g., send to server)
    alert("Changes saved!");
  });

// Show modal when a row in Itinerary is clicked
document.querySelectorAll("#procurementSection tbody tr").forEach(row => {
  row.addEventListener("click", () => {
    document.getElementById("orderInfoModal").style.display = "flex";
  });
});

// Close modal
document.getElementById("closeModal").addEventListener("click", () => {
  document.getElementById("orderInfoModal").style.display = "none";
});

const addVariablesSection = document.getElementById("addVariablesSection");

showAddVariables.addEventListener("click", (e) => {
  e.preventDefault();
  hideAllSections();
  addVariablesSection.style.display = "block";
  document.getElementById("pageTitle").textContent = "Add Variables";
});


showEmployees.addEventListener("click", (e) => {
  e.preventDefault();
  hideAllSections();
  teamSection.style.display = "block";
  addVariablesSection.style.display = "none"; // Hide Add Variables
  document.getElementById("pageTitle").textContent = "Employees";
});

showAddAccount.addEventListener("click", (e) => {
  e.preventDefault();
  hideAllSections();
  addAccountSection.style.display = "block";
  teamSection.style.display = "none";
  addVariablesSection.style.display = "none";
  document.getElementById("pageTitle").textContent = "Add Account";
});