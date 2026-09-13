/* =========================================================
   KALASETU - CHAT WITH CREATOR
   ========================================================= */

const messageInput = document.getElementById("messageInput");
const chatMessages = document.getElementById("chatMessages");


/* ================= SEND MESSAGE ================= */

function sendMessage() {

    const message = messageInput.value.trim();

    if (message === "") {
        return;
    }

    addCustomerMessage(message);

    messageInput.value = "";

    /* Demo creator reply */

    setTimeout(function () {

        addCreatorMessage(
            "Thank you for your message! 😊 I’ll be happy to help you with this craft."
        );

    }, 900);
}


/* ================= CUSTOMER MESSAGE ================= */

function addCustomerMessage(message) {

    const messageRow = document.createElement("div");

    messageRow.className =
        "message-row customer-message";

    const time =
        new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });

    messageRow.innerHTML = `
        <div>

            <div class="message-bubble">
                ${message}
            </div>

            <span class="message-time">
                ${time}
            </span>

        </div>
    `;

    chatMessages.appendChild(messageRow);

    scrollToBottom();
}


/* ================= CREATOR MESSAGE ================= */

function addCreatorMessage(message) {

    const messageRow = document.createElement("div");

    messageRow.className =
        "message-row creator-message";

    const time =
        new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });

    messageRow.innerHTML = `
        <div class="message-avatar"></div>

        <div>

            <div class="message-bubble">
                ${message}
            </div>

            <span class="message-time">
                ${time}
            </span>

        </div>
    `;

    chatMessages.appendChild(messageRow);

    scrollToBottom();
}


/* ================= QUICK MESSAGE ================= */

function sendQuickMessage(message) {

    messageInput.value = message;

    sendMessage();
}


/* ================= EMOJI ================= */

function addEmoji() {

    messageInput.value += " 😊";

    messageInput.focus();
}


/* ================= ENTER TO SEND ================= */

messageInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            event.preventDefault();

            sendMessage();
        }

    }
);


/* ================= SCROLL ================= */

function scrollToBottom() {

    chatMessages.scrollTop =
        chatMessages.scrollHeight;
}