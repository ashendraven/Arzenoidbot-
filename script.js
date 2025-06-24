// Simple interactivity for Arzenoidbot

// Optional: Show a welcome message after 3 seconds
window.addEventListener("load", function() {
  setTimeout(function() {
    alert("Welcome to Arzenoidbot! Start earning by doing simple tasks.");
  }, 3000);
});

// Optional: Confirm before leaving task page
function confirmLeave() {
  return confirm("Are you sure you want to leave this task?");
}

// Example: When a button is clicked
function notifyTaskStart() {
  alert("Task started! Please complete it and submit through the Google Form.");
}
