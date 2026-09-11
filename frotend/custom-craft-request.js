document.querySelector("form").addEventListener("submit", function (event) {

    event.preventDefault();

    const craftType = document.getElementById("craftType").value;
    const occasion = document.getElementById("occasion").value;
    const budget = document.getElementById("budget").value;
    const colour = document.getElementById("colour").value;
    const size = document.getElementById("size").value;
    const customisation = document.getElementById("customisation").value;
    const requiredDate = document.getElementById("requiredDate").value;
    const instructions = document.getElementById("instructions").value;

    const request = {
        id: Date.now(),
        craftType: craftType,
        occasion: occasion,
        budget: budget,
        colour: colour,
        size: size,
        customisation: customisation,
        requiredDate: requiredDate,
        instructions: instructions,
        status: "OPEN"
    };

    let requests =
        JSON.parse(localStorage.getItem("customCraftRequests")) || [];

    requests.push(request);

    localStorage.setItem(
        "customCraftRequests",
        JSON.stringify(requests)
    );

    alert("Custom craft request submitted successfully!");

    window.location.href = "custom-craft-requests.html";
});