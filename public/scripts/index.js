loadHTML( "dilionHeader", "./_views/navbar.html" );
if(window.location.pathname === "/"){
    loadHTML( "dilionSidebar", "./_views/sidebar.html" );
    loadHTML( "dilionMain", "./_views/_main.html" );
    loadHTML( "dilionSlider", "./_views/slider.html");
}
else if(window.location.pathname === "/profile"){
    loadHTML( "dilionMain", "./_views/_profile.html" );
}
else if(window.location.pathname === "/contact"){
    loadHTML( "dilionMain", "./_views/_contact.html" );
}
