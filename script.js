function showInfo(title, image, description) {
    var infoBox = document.getElementById('info-box');

    // Get the container element
    var container = document.getElementById('map-container');
    
    // Calculate the center position of the container
    var containerRect = container.getBoundingClientRect();
    var containerWidth = containerRect.width;
    var containerHeight = containerRect.height;
    var centerX = containerWidth / 2;
    var centerY = containerHeight / 2;
    
    // Set fixed position for the info box
    var infoBoxWidth = infoBox.offsetWidth;
    var infoBoxHeight = infoBox.offsetHeight;
    
    // Calculate the maximum distance from the edges of the container
    var maxMargin = 50; // Maximum margin from the edges
    var maxLeft = maxMargin;
    var maxTop = maxMargin;
    var maxRight = containerWidth - infoBoxWidth - maxMargin;
    var maxBottom = containerHeight - infoBoxHeight - maxMargin;
    
    // Calculate the dynamic position based on mouse cursor
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    var left, top;
    
    if (mouseX < centerX) {
        // Mouse cursor is on the left side of the container
        left = Math.max(maxLeft, mouseX + maxMargin);
    } else {
        // Mouse cursor is on the right side of the container
        left = Math.min(maxRight, mouseX - infoBoxWidth - maxMargin);
    }
    
    if (mouseY < centerY) {
        // Mouse cursor is above the center of the container
        top = Math.max(maxTop, mouseY + maxMargin);
    } else {
        // Mouse cursor is below the center of the container
        top = Math.min(maxBottom, mouseY - infoBoxHeight - maxMargin);
    }
    
    // Set new position
    infoBox.style.left = left + 'px';
    infoBox.style.top = top + 'px';
    
    // Display info-box content
    infoBox.innerHTML = '<h2>' + title + '</h2>' +
                        '<img src="' + image + '" alt="' + title + '">' +
                        '<p>' + description + '</p>';


    infoBox.style.display = 'block';
}

function hideInfo() {
    const infoBox = document.getElementById('info-box');
    infoBox.style.display = 'none';
}
