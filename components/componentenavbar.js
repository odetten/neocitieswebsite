document.addEventListener("DOMContentLoaded", function() {
    // Create navigation bar
    const navBar = document.createElement("nav");
    navBar.classList.add("nav");

    const navList = document.createElement("ul");

    const navItems = [
        { text: "+Home", href: "#home" },
        { text: "+News", href: "#news" },
        { text: "+Contact", href: "#contact" },
        { text: "+About", href: "#about" }
    ];

    navItems.forEach(item => {
        const navItem = document.createElement("li");
        const navLink = document.createElement("a");
        navLink.textContent = item.text;
        navLink.href = item.href;
        navItem.appendChild(navLink);
        navList.appendChild(navItem);
    });

    navBar.appendChild(navList);

    // Insert navigation bar before the buttons div
    const buttonsDiv = document.querySelector(".buttons");
    buttonsDiv.parentNode.insertBefore(navBar, buttonsDiv);
});
