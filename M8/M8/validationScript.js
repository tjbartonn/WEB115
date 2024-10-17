    // JavaScript code for form validation
	
document.getElementById('myForm').addEventListener('submit', function(event) {
  // Retrieve the input field value
  let userInput = document.getElementById('inputField').value;
  if (userInput === '') {
    alert("Input is required.");
    // Prevent form from submitting
    event.preventDefault();
    return;
  }
  // Check if the input value matches the pattern
  if (!validateInput(userInput)) {
    // Invalid input: display error message
    alert('Invalid input format.');
    event.preventDefault();
  } else {
      // Valid input: display confirmation and submit the form
      alert('Form submitted successfully.')
  }
  
});
function validateInput(input) {
  // Regular expression pattern for alphanumeric input
  let regex = /^[a-zA-Z0-9]+$/;
  return regex.test(input);
}

        