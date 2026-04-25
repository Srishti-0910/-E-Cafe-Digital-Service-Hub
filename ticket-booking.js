document.getElementById('ticketBookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const numberOfTickets = document.getElementById('numberOfTickets').value;

    // Input validation
    if (!name || !destination || !date || !numberOfTickets) {
        alert("Please fill out all fields.");
        return;
    }

    // Show confirmation message
    const confirmationDetails = `Name: ${name}<br>
                                 Destination: ${destination}<br>
                                 Travel Date: ${date}<br>
                                 Number of Tickets: ${numberOfTickets}`;
    document.getElementById('confirmationDetails').innerHTML = confirmationDetails;
    document.getElementById('bookingConfirmation').style.display = 'block';

    // Clear form after submission
    document.getElementById('ticketBookingForm').reset();

    // Optional: Hide confirmation after 5 seconds
    setTimeout(() => {
        document.getElementById('bookingConfirmation').style.display = 'none';
    }, 5000);
});
