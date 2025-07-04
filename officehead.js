function toggleNotificationDetails() {
  const moreDetails = document.getElementById("moreNotificationDetails");
  if (moreDetails.style.display === "none") {
    moreDetails.style.display = "block";  // Show more details when clicked
  } else {
    moreDetails.style.display = "none";   // Hide the extra details
  }
}
function hideAllSections() {
  dashboardSection.style.display = "none";
  procurementSection.style.display = "none";
  profileSection.style.display = "none";
}


    let isBudgetVisible = false;
    function toggleBudgetDetails() {
      const extra = document.getElementById("moreBudgetDetails");
      isBudgetVisible = !isBudgetVisible;
      extra.style.display = isBudgetVisible ? "block" : "none";
    }

const dashboardSection = document.querySelector(".cards");
const procurementSection = document.getElementById("procurementSection");
const profileSection = document.getElementById("profileSection");

const dashboardLink = document.querySelector(".menu a:nth-child(1)");
const procurementLink = document.querySelector(".menu a:nth-child(2)");
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

procurementLink.addEventListener("click", (e) => {
 e.preventDefault();
  hideAllSections();
  procurementSection.style.display = "block";
  document.getElementById("pageTitle").textContent = "Itinerary";
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
  profileSection.style.display = "none";
  document.getElementById("pageTitle").textContent = "Itinerary";
});

showRequest.addEventListener("click", (e) => {
  e.preventDefault();
  dashboardSection.style.display = "none";
  procurementSection.style.display = "block";
  profileSection.style.display = "none";
  document.getElementById("pageTitle").textContent = "Add/View Items";

  // Show Order Info modal
  document.getElementById("orderInfoModal").style.display = "flex";
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