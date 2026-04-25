document.getElementById('formFill').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page
  
    // Gather form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const documentType = document.getElementById('documentType').value;
    const address = document.getElementById('address').value;
  
    // Simple validation message (could be replaced with a real backend interaction)
    alert(`Form Submitted! \nName: ${name} \nEmail: ${email} \nDocument: ${documentType} \nAddress: ${address}`);
  
    // After form submission, you can reset the form (optional)
    document.getElementById('formFill').reset();
  });
  
