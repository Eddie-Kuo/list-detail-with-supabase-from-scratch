export function renderColor(data) {
    const colorDiv = document.createElement('div');
    const nameTag = document.createElement('h1');
    const a = document.createElement('a');

    colorDiv.classList.add('color-card');
    colorDiv.style.backgroundColor = data.Name;

    a.href = `./detail/?id=${data.id}`;

    colorDiv.append(nameTag);
    a.append(colorDiv);
    return a;
}

export function renderColorDetail(data) {
    const colorPage = document.createElement('div');
    const header = document.createElement('h1');
    const colorPageImg = document.createElement('div');
    const colorHistory = document.createElement('p');

    header.textContent = data.Name;
    header.classList.add('page-header');

    colorPageImg.style.backgroundColor = data.Name;
    colorPageImg.classList.add('color-page-block');

    colorHistory.textContent = data.History;
    colorHistory.classList.add('color-history');

    if (data.id === 6){
        header.classList.remove('page-header');
        header.classList.add('page-header-black');
    }

    colorPageImg.append(header);
    colorPage.append(colorPageImg, colorHistory);

    return colorPage;
}

