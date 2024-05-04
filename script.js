function showInfo(name, image, description) {
    const infoBox = document.getElementById('info-box');
    const leftOffset = event.pageX + 10;
    const topOffset = event.pageY + 10;

    infoBox.innerHTML = `
        <h3>${name}</h3>
        <img src="${image}" alt="${name}">
        <p>${description}</p>
    `;
    infoBox.style.display = 'block';
    infoBox.style.left = leftOffset + 'px';
    infoBox.style.top = topOffset + 'px';
}

function hideInfo() {
    const infoBox = document.getElementById('info-box');
    infoBox.style.display = 'none';
}