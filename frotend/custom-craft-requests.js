const requestsList = document.getElementById("requestsList");

const requests =
    JSON.parse(localStorage.getItem("customCraftRequests")) || [];

if (requests.length === 0) {

    requestsList.innerHTML = `
        <div class="empty-state">
            <h3>No Custom Craft Requests Yet</h3>
            <p>Create a request and tell our creators what you need.</p>

            <a href="custom-craft-request.html" class="create-btn">
                + Create New Request
            </a>
        </div>
    `;

} else {

    requestsList.innerHTML = "";

    requests.forEach(request => {

        const card = document.createElement("div");

        card.className = "request-item";

        card.innerHTML = `
            <div class="request-info">

                <h3>${request.craftType}</h3>

                <p>
                    <strong>Occasion:</strong>
                    ${request.occasion}
                </p>

                <p>
                    <strong>Budget:</strong>
                    ₹${request.budget}
                </p>

                <p>
                    <strong>Required Date:</strong>
                    ${request.requiredDate}
                </p>

            </div>

            <div class="request-status">
                ${request.status}
            </div>
        `;

        requestsList.appendChild(card);
    });
}