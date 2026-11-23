
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    const seatNumber = document.getElementById("seatNumber");
    const category = document.getElementById("category");
    const totalPrice = document.getElementById("totalPrice");
    const ticketPrice = document.getElementById("ticketPrice");
    const summaryCategory = document.getElementById("summaryCategory");
    const bookingPopup = document.getElementById("bookingPopup");
    const closePopup = document.getElementById("closePopup");

    const categoryPrices = {
        General: 1200,
        VIP: 2500,
        VVIP: 4000
    };

    function updatePrice() {
        const selectedCategory = category.value;
        const price = categoryPrices[selectedCategory] || 0;

        summaryCategory.textContent = selectedCategory || "Not selected";
        ticketPrice.textContent = price;
        totalPrice.textContent = seatNumber.value && price ? price : "0";
    }

    category.addEventListener("change", updatePrice);
    seatNumber.addEventListener("change", updatePrice);

    function hidePopup() {
        bookingPopup.classList.remove("show");
    }

    closePopup.addEventListener("click", hidePopup);

    bookingPopup.addEventListener("click", function (event) {
        if (event.target === bookingPopup) {
            hidePopup();
        }
    });

    // Booking Form Submit
    bookingForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Get Input Values
        const eventName = document.getElementById("event").value.trim();
        const customerName = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const selectedCategory = category.value;
        const selectedSeat = seatNumber.value;

        // Check Empty Fields
        if (
            eventName === "" ||
            customerName === "" ||
            email === "" ||
            phone === "" ||
            selectedCategory === "" ||
            selectedSeat === ""
        ) {
            alert("Please fill in all booking details.");
            return;
        }

        // Gmail Validation
        if (!email.endsWith("@gmail.com")) {
            alert("Please enter a valid Gmail address.");
            return;
        }

        // Phone Number Validation
        if (!/^[0-9]{10}$/.test(phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        // Booking Details
        const bookingDetails = {
            event: eventName,
            name: customerName,
            email: email,
            phone: phone,
            category: selectedCategory,
            seat: selectedSeat,
            price: categoryPrices[selectedCategory]
        };

        // Display Booking Details in Console
        console.log("Booking Details:", bookingDetails);

        // Show Professional Success Popup
        document.getElementById("popupEvent").textContent = eventName;
        document.getElementById("popupCategory").textContent = selectedCategory;
        document.getElementById("popupSeat").textContent = "Seat " + selectedSeat;
        bookingPopup.classList.add("show");

        // Reset Form
        bookingForm.reset();

        // Reset Price
        updatePrice();

    });

}




const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const contactName = document.getElementById("contactName");
        const contactEmail = document.getElementById("contactEmail");
        const contactMessageInput = document.getElementById("message");
        const contactMessage = document.getElementById("contactMessage");

        if (
            !contactName ||
            !contactEmail ||
            !contactMessageInput
        ) {
            alert("Please check your contact form field IDs.");
            return;
        }

        if (
            contactName.value.trim() === "" ||
            contactEmail.value.trim() === "" ||
            contactMessageInput.value.trim() === ""
        ) {
            alert("Please fill in all contact details.");
            return;
        }

        if (contactMessage) {
            contactMessage.textContent =
                "Your message has been submitted successfully!";
            contactMessage.style.color = "green";
        } else {
            alert("Your message has been submitted successfully!");
        }

        contactForm.reset();

    });

}
