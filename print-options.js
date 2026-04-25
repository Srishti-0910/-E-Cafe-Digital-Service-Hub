document.getElementById('printOptionsForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const optionType = document.getElementById('optionType').value;

    // Show confirmation message
    const confirmationMessage = `You have selected: ${optionType} for printing.`;

    
    document.getElementById('optionsConfirmation').innerHTML = confirmationMessage;
    document.getElementById('optionsConfirmation').style.display = 'block'; // Show the confirmation message
});
