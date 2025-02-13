var intervalId;

function displayUserAgent() {
  var userAgentString = navigator.userAgent;
  var htmlContent = '<p><i class="fas fa-circle-info"></i> Horibyte Website Version 2.2.3077.main.250212-1900</p><i class="fas fa-user-gear"></i>&nbsp;' + userAgentString;
  document.getElementById('userAgent').innerHTML = htmlContent;
}

function updateDateTime() {
  var now = new Date();
  var dateTimeString = now.toLocaleString();
  var htmlContent = '<i class="fas fa-user-clock"></i>&nbsp;' + dateTimeString;
  document.getElementById('dateTime').innerHTML = htmlContent;
}

function handleShiftKeyPress(event) {
  if (event.keyCode === 16) {
    displayUserAgent();
    updateDateTime();
    // Start the interval only if it's not already running
    if (!intervalId) {
      intervalId = setInterval(updateDateTime, 1000); 
    }
  }
}

function handleShiftKeyRelease(event) {
  if (event.keyCode === 16) {
    // Clear the interval if it's running
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null; // Reset intervalId to prevent unexpected behavior
    }
    document.getElementById('userAgent').innerHTML = '';
    document.getElementById('dateTime').innerHTML = '';
  }
}

document.addEventListener('keydown', handleShiftKeyPress);
document.addEventListener('keyup', handleShiftKeyRelease);