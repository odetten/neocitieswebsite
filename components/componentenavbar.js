document.addEventListener("DOMContentLoaded", function() {
    // Create navigation bar
    const navBar = createNavBar([
        { text: "+Home", href: "#home" },
        { text: "+News", href: "#news" },
        { text: "+Contact", href: "#contact" },
        { text: "+About", href: "#about" }
    ]);

    // Insert navigation bar before the buttons div
    const otherDiv = document.querySelector(".other");
    otherDiv.parentNode.insertBefore(navBar, otherDiv);
});

function createNavBar(items) {
    const navBar = document.createElement("nav");
    navBar.classList.add("nav");

    const navList = document.createElement("ul");

    items.forEach(item => {
        const navItem = document.createElement("li");
        const navLink = document.createElement("a");
        navLink.textContent = item.text;
        navLink.href = item.href;
        navItem.appendChild(navLink);
        navList.appendChild(navItem);
    });

    navBar.appendChild(navList);
    return navBar;
}
