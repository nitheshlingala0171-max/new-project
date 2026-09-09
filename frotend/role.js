function continueAs(role) {

    if (role === "customer") {
        window.location.href = "customer-auth.html";
    }

    else if (role === "creator") {
        alert("Creator page will be created next.");
    }

}