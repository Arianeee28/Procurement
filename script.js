document.addEventListener("DOMContentLoaded", () => {
  const dashboardLink = document.getElementById("dashboardLink");
  const procurementToggle = document.getElementById("procurementToggle");
  const procurementMenu = document.getElementById("procurementMenu");
  const showItinerary = document.getElementById("showItinerary");
  const showRequest = document.getElementById("showRequest");

  const itinerarySection = document.getElementById("itinerarySection");
  const requestSection = document.getElementById("requestSection");
  const dashboardTitle = document.querySelector(".dashboard-title");
  const gridSection = document.querySelector(".grid");

  const profileTrigger = document.querySelector(".profile");
  const profileSection = document.getElementById("profileSection");

  procurementToggle.addEventListener("click", (e) => {
    e.preventDefault();
    procurementMenu.style.display = procurementMenu.style.display === "flex" ? "none" : "flex";
  });

  // ✅ Show Profile
  profileTrigger.addEventListener("click", () => {
    profileSection.style.display = "block";
    dashboardTitle.style.display = "none";
    gridSection.style.display = "none";
    itinerarySection.style.display = "none";
    requestSection.style.display = "none";
    procurementMenu.style.display = "none";

    dashboardLink.classList.remove("active");
    procurementToggle.classList.remove("active");
    showItinerary.classList.remove("active");
    showRequest.classList.remove("active");
  });


  dashboardLink.addEventListener("click", () => {
    dashboardTitle.style.display = "block";
    gridSection.style.display = "grid";
    itinerarySection.style.display = "none";
    requestSection.style.display = "none";
    procurementMenu.style.display = "none";
    profileSection.style.display = "none";

    dashboardLink.classList.add("active");
    procurementToggle.classList.remove("active");
    showItinerary.classList.remove("active");
    showRequest.classList.remove("active");
  });

  procurementToggle.addEventListener("click", () => {
    procurementMenu.style.display = procurementMenu.style.display === "block" ? "none" : "block";
    procurementToggle.classList.toggle("active");
  });

  showItinerary.addEventListener("click", () => {
    itinerarySection.style.display = "block";
    requestSection.style.display = "none";
    dashboardTitle.style.display = "none";
    gridSection.style.display = "none";
    profileSection.style.display = "none";

    showItinerary.classList.add("active");
    showRequest.classList.remove("active");
    dashboardLink.classList.remove("active");
  });

  showRequest.addEventListener("click", () => {
    requestSection.style.display = "block";
    itinerarySection.style.display = "none";
    dashboardTitle.style.display = "none";
    gridSection.style.display = "none";
    profileSection.style.display = "none";

    showRequest.classList.add("active");
    showItinerary.classList.remove("active");
    dashboardLink.classList.remove("active");
  });

  document.getElementById("toggleNotifBtn").addEventListener("click", () => {
    const container = document.getElementById("notifContainer");
    container.classList.toggle("expanded");
    document.getElementById("toggleNotifBtn").textContent =
      container.classList.contains("expanded") ? "Show Less" : "Show More";
  });

  document.getElementById("toggleReceiptBtn").addEventListener("click", () => {
    const container = document.getElementById("receiptContainer");
    container.classList.toggle("expanded");
    document.getElementById("toggleReceiptBtn").textContent =
      container.classList.contains("expanded") ? "Show Less" : "Show More";
  });

  document.getElementById("toggleStatusBtn").addEventListener("click", () => {
    const steps = document.getElementById("statusSteps");
    steps.classList.toggle("expanded");
    document.getElementById("toggleStatusBtn").textContent =
      steps.classList.contains("expanded") ? "Show Less" : "Show More";
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

  // ✅ Filter for Itinerary Table
  const filterBtn = document.getElementById("filterBtn");
  const resetBtn = document.getElementById("resetBtn");
  const itineraryInput = document.getElementById("itineraryInput");
  const itineraryTable = document.getElementById("itineraryTable");

  filterBtn.addEventListener("click", () => {
    const search = itineraryInput.value.trim().toLowerCase();
    const rows = itineraryTable.querySelectorAll("tbody tr");

    rows.forEach(row => {
      const controlNo = row.cells[0].textContent.toLowerCase();
      row.style.display = controlNo.includes(search) ? "" : "none";
    });
  });

  resetBtn.addEventListener("click", () => {
    itineraryInput.value = "";
    itineraryTable.querySelectorAll("tbody tr").forEach(row => {
      row.style.display = "";
    });
  });

  // ✅ Profile Edit Toggle
  const editBtn = document.querySelector('.edit-btn');
  const profileInputs = document.querySelectorAll('.profile-left input, .profile-right textarea');

  if (editBtn) {
    editBtn.addEventListener('click', function () {
      const editing = this.classList.toggle('active');

      profileInputs.forEach(input => {
        input.disabled = !editing;
      });

      this.textContent = editing ? 'Save' : 'Edit';
    });
  }
});

// ✅ Request Form Functionality
const addItemBtn = document.getElementById("addItemBtn");
const cancelItemBtn = document.getElementById("cancelItemBtn");
const placeOrderBtn = document.getElementById("placeOrderBtn");
const cancelOrderBtn = document.getElementById("cancelOrderBtn");
const itemPreview = document.getElementById("itemPreview");

addItemBtn.addEventListener("click", () => {
  const dept = document.getElementById("department").value;
  const budget = document.getElementById("budget").value;
  const unit = document.getElementById("unit").value;
  const quantity = document.getElementById("quantity").value;
  const cost = document.getElementById("cost").value;
  const item = document.getElementById("itemName").value;
  const desc = document.getElementById("description").value;

  if (!item || !quantity || !cost) {
    alert("Item, Quantity and Cost are required.");
    return;
  }

  const total = quantity * cost;

  itemPreview.innerHTML = `
    <strong>Item:</strong> ${item} <br/>
    <strong>Department:</strong> ${dept} <br/>
    <strong>Budget:</strong> ${budget} <br/>
    <strong>Unit:</strong> ${unit} <br/>
    <strong>Quantity:</strong> ${quantity} <br/>
    <strong>Cost/Unit:</strong> ₱${cost} <br/>
    <strong>Total:</strong> ₱${total} <br/>
    <strong>Description:</strong> ${desc}
  `;
});

cancelItemBtn.addEventListener("click", () => {
  ["unit", "quantity", "cost", "itemName", "description"].forEach(id => {
    document.getElementById(id).value = "";
  });
  itemPreview.innerHTML = "";
});

placeOrderBtn.addEventListener("click", () => {
  if (itemPreview.innerHTML.trim() === "") {
    alert("Please add an item first.");
    return;
  }
  alert("Order Placed!");
  itemPreview.innerHTML = "";
});

cancelOrderBtn.addEventListener("click", () => {
  itemPreview.innerHTML = "";
});
document.querySelectorAll("#itinerarySection tbody tr").forEach(row => {
  row.addEventListener("click", () => {
    const cells = row.querySelectorAll("td");

    const controlNo = cells[0].textContent.trim();
    const item = cells[1].textContent.trim();
    const unit = cells[2].textContent.trim();
    const quantity = cells[3].textContent.trim();
    const cost = cells[4].textContent.trim();
    const total = cells[5].textContent.trim();

    // Get status based on the colored circle
    const circle = cells[0].querySelector("span");
    const statusClass = circle.classList.contains("red") ? "Cancelled" : "Approved";
    const statusColor = circle.classList.contains("red") ? "cancelled" : "approved";

    const modal = document.getElementById("orderInfoModal");
    const form = document.getElementById("orderFormContent");

    form.innerHTML = `
      <input type="text" value="Control No.: ${controlNo}" readonly>
      <input type="text" value="Item: ${item}" readonly>
      <div class="flex-row">
        <input type="text" value="Quantity: ${quantity}" readonly>
        <input type="text" value="Unit: ${unit}" readonly>
      </div>
      <div class="flex-row">
        <input type="text" value="Cost per Unit: ₱${cost}" readonly>
        <input type="text" value="Total: ₱${total}" readonly>
      </div>
      <input type="text" value="Status: ${statusClass}" class="${statusColor}" readonly>
      <textarea placeholder="Notes:" readonly></textarea>
    `;

    modal.style.display = "flex";
  });
});


// Close modal
document.getElementById("closeModal").addEventListener("click", () => {
  document.getElementById("orderInfoModal").style.display = "none";
});

document.querySelectorAll("#itinerarySection tbody tr").forEach(row => {
  row.addEventListener("click", () => {
    const cells = row.querySelectorAll("td");

    const controlNo = cells[0].textContent.trim();
    const item = cells[1].textContent.trim();
    const unit = cells[2].textContent.trim();
    const quantity = cells[3].textContent.trim();
    const cost = cells[4].textContent.trim();
    const total = cells[5].textContent.trim();

    const circle = cells[0].querySelector(".circle");
    const isCancelled = circle.classList.contains("red");

    document.getElementById("modalControlNo").textContent = controlNo;
    document.getElementById("modalDate").textContent = "05/12/2025"; // or extract this from your data

    document.getElementById("modalDot").className = `dot ${isCancelled ? 'red' : 'green'}`;
    document.getElementById("modalRole").textContent = "Office Head";

    document.getElementById("modalDept").value = "Department: Example";
    document.getElementById("modalItem").value = `Item: ${item}`;
    document.getElementById("modalBudget").value = "Budget: 80,000";
    document.getElementById("modalCost").value = `Cost per Unit: ${cost}`;
    document.getElementById("modalQty").value = `Quantity: ${quantity}`;
    document.getElementById("modalUnit").value = `Unit: ${unit}`;
    document.getElementById("modalStatus").value = `Status: ${isCancelled ? 'Cancelled' : 'Approved'}`;
    document.getElementById("modalStatus").className = isCancelled ? 'cancelled' : 'approved';
    document.getElementById("modalTotal").value = `Total: ${total}`;
    document.getElementById("modalNotes").value = "";

    document.getElementById("orderInfoModal").style.display = "flex";
  });
});

// Close button
document.getElementById("closeModal").addEventListener("click", () => {
  document.getElementById("orderInfoModal").style.display = "none";
});


form.innerHTML = `
  ...
  <textarea placeholder="Notes:" readonly></textarea>
`;



