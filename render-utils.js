export function renderColor(data) {
    const colorDiv = document.createElement('div');
    const nameTag = document.createElement('h1');
    // const a = document.createElement('a'); //anchor tag to later use to link the detail page

    colorDiv.classList.add('color-card');
    colorDiv.style.backgroundColor = data.Name;
    nameTag.textContent = data.Name;

    colorDiv.append(nameTag);
    return colorDiv;
}