/* AppNav.module.css */

.navbar {
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* This ensures items are spaced between left and right */
    font-size: 1rem;
    padding: 0.5rem 1rem;
    /* color: #ecf0f1; */
    /* text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7); */
    background-color: #2c3e50;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
    margin-bottom: 10%;
    z-index: 1500;
}

.settings-menu-button {
    margin-left: auto;
    /* This will push the settings button to the far right */
}

/* Navbar Items */
.navbar a,
.navbar button {
    color: inherit;
    text-decoration: none;
    padding: 0.25rem 0.5rem;
    transition: background-color 0.3s ease;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
    -webkit-transition: background-color 0.3s ease;
    -moz-transition: background-color 0.3s ease;
    -ms-transition: background-color 0.3s ease;
    -o-transition: background-color 0.3s ease;
}

/* Hover effect for navigation links */
.navbar a:hover,
.navbar button:hover {
    background-color: #34495e;
}

.navbar-left-content {
    padding: 0.25rem 0.5rem;
}


.navbar-right-content {
    position: relative;
    display: flex;
    /* Use Flexbox for alignment */
    align-items: center;
    /* Vertically center the content */
    /* max-width: fit-content; */
    /* Or set a specific width if needed */
    justify-content: space-between;
    text-align: right;
    /* Push content to the end (right side) */
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
}

.username-dropdown {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    /* Match your design */
}

.user-info {
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-align: center;
}

.points-info {
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    text-align: center;
}

.dropdown-menu {
    display: none;
    /* Hide dropdown initially */
    position: absolute;
    top: 100%;
    /* Position the dropdown directly below the navbar */
    right: 0;
    /* Align the dropdown to the right of the navbar */
    background-color: white;
    /* Set a background color */
    border: 1px solid #ccc;
    /* Optional: Add a border */
    min-width: 60px;
    text-align: center;
    /* Minimum width of the dropdown */
    z-index: 100;
    /* Ensure it overlays other content */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.points-dropdown-menu {
    display: none;
    /* Hide dropdown initially */
    position: absolute;
    top: 100%;
    /* Position the dropdown directly below the navbar */
    left: 0;
    /* Align the dropdown to the right of the navbar */
    background-color: white;
    /* Set a background color */
    color: black;
    /* border: 1px solid #ccc; */
    /* Optional: Add a border */
    width: auto;
    /* Minimum width of the dropdown */
    z-index: 100;
    /* Ensure it overlays other content */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.show-dropdown {
    display: block;
    /* Show the dropdown */
}

/* Add :not(.show-dropdown) to hide the dropdown when it's not supposed to show */
.navbar .navbar-right-content .dropdown-menu:not(.show-dropdown) {
    display: none;
}

button.sign-out-button {
    text-align: center;
}

.dropdown-menu a,
.dropdown-menu button, 
.dropdown-menu-button, 
.points-dropdown-menu a, 
.points-dropdown-menu button {
    display: block;
    padding: 10px;
    text-align: center;
    /* Align text to the left */
    background: none;
    border: none;
    text-decoration: none;
    color: black;
    /* Text color */
    cursor: pointer;
}

.dropdown-menu-button,
.dropdown-menu button {
    text-align: center;
}


.points-dropdown-menu button:hover,
.points-dropdown-menu a:hover {
    background-color: #f5f5f5;
    /* Slight highlight on hover */
}

.dropdown-menu button:hover,
.dropdown-menu a:hover {
    background-color: #f5f5f5;
    /* Slight highlight on hover */
}

.settings-menu-button {
    cursor: pointer;
}

.menu-title {
    font-size: 20px;
    /* Make sure this is large enough */
    font-weight: bold;
    color: #2C3E50;
    /* Ensure contrast with the background */
    padding: 20px;
    border-bottom: 1px solid #ccc;
    /* Optional: adds a separator */
    margin-bottom: 20px;
}

/* .right-close-button {
    left: auto;
    padding: 0rem 0rem;
} */

/* Ensure this media query encompasses the screen sizes you're targeting */
@media (max-width: 780) {
    .navbar {
        /* Use your actual navbar class */
        z-index: 1500;
        /* Lower z-index than the menu */
        flex-shrink: 1;
    }
}
