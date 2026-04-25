const printOrderForm = document.getElementById('printOrderForm');
const confirmationDiv = document.getElementById('confirmation');
const deleteFileButton = document.getElementById('deleteFile');
const fileUpload = document.getElementById('fileUpload');

// Event listener for form submission
printOrderForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const documentType = document.getElementById('documentType').value;
    const numPages = parseInt(document.getElementById('numPages').value);
    const uploadedFile = fileUpload.files[0]; // Get the uploaded file

    // Check if a file is selected
    if (!uploadedFile) {
        alert('Please upload a file!');
        return;
    }

    // Calculate cost
    const printCost = documentType === 'blackWhite' ? numPages * 2 : numPages * 5; // Example pricing
    const deliveryCharge = 10; // Fixed delivery charge
    const totalCost = printCost + deliveryCharge; // Total cost

    // Show confirmation message
    const confirmationMessage = `
      <h4>Order Confirmation</h4>
      <p>Document Type: ${documentType === 'blackWhite' ? 'Black & White' : 'Color'}</p>
      <p>Number of Pages: ${numPages}</p>
      <p>Uploaded File: ${uploadedFile.name}</p>
      <p>Total Cost: ₹{totalCost} (Print: ₹{printCost}, Delivery: ₹{deliveryCharge})</p>
    `;
    
    confirmationDiv.innerHTML = confirmationMessage;
    confirmationDiv.style.display = 'block'; // Show confirmation message
    deleteFileButton.style.display = 'block'; // Show the delete button
});

// Event listener for delete file button
deleteFileButton.addEventListener('click', function() {
    fileUpload.value = ''; // Clear the file input
    deleteFileButton.style.display = 'none'; // Hide the delete button
    confirmationDiv.style.display = 'none'; // Clear the confirmation message
});
