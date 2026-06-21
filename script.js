// Attendance counterss
let attendeeCount = 0;
let waterCount = 0;
let zeroCount = 0;
let powerCount = 0;

const attendanceGoal = 50;

// Grab elements
const checkInForm = document.getElementById("checkInForm");
const greeting = document.getElementById("greeting");

// Listen for form submission
checkInForm.addEventListener("submit", function (event) {
  // Prevent page refresh
  event.preventDefault();

  // Get attendee information
  const attendeeName = document.getElementById("attendeeName").value.trim();

  const selectedTeam = document.getElementById("teamSelect").value;

  // Stop if fields are blank
  if (attendeeName === "" || selectedTeam === "") {
    alert("Please enter your name and select a team.");
    return;
  }

  // Show greeting message
  greeting.style.display = "block";

  greeting.classList.add("success-message");

  greeting.textContent = `Welcome, ${attendeeName}! Thanks for supporting Intel's sustainability goals.`;

  // Increase attendance count
  attendeeCount++;

  document.getElementById("attendeeCount").textContent = attendeeCount;

  // Update team counts
  if (selectedTeam === "water") {
    waterCount++;

    document.getElementById("waterCount").textContent = waterCount;
  } else if (selectedTeam === "zero") {
    zeroCount++;

    document.getElementById("zeroCount").textContent = zeroCount;
  } else if (selectedTeam === "power") {
    powerCount++;

    document.getElementById("powerCount").textContent = powerCount;
  }

  // Determine leading team
  let leader = "";

  if (waterCount === zeroCount && zeroCount === powerCount) {
    leader = "It's a three-way tie!";
  } else if (waterCount === zeroCount && waterCount > powerCount) {
    leader = "🌊 Team Water Wise & 🌿 Team Net Zero";
  } else if (waterCount === powerCount && waterCount > zeroCount) {
    leader = "🌊 Team Water Wise & ⚡ Team Renewables";
  } else if (zeroCount === powerCount && zeroCount > waterCount) {
    leader = "🌿 Team Net Zero & ⚡ Team Renewables";
  } else if (waterCount > zeroCount && waterCount > powerCount) {
    leader = "🌊 Team Water Wise";
  } else if (zeroCount > waterCount && zeroCount > powerCount) {
    leader = "🌿 Team Net Zero";
  } else {
    leader = "⚡ Team Renewables";
  }

  document.getElementById("leadingTeam").textContent =
    `🏆 Leading Team: ${leader}`;

  // Update progress bar
  let progress = (attendeeCount / attendanceGoal) * 100;

  if (progress > 100) {
    progress = 100;
  }

  document.getElementById("progressBar").style.width = progress + "%";

  // Reset form
  checkInForm.reset();
});
