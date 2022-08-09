import { getColors } from './fetch-utils.js';
import { renderColor } from './render-utils.js';


const colorContainer = document.querySelector('.color-container');

async function loadData() {
    const colors = await getColors();
    for (let color of colors) {
        const colorBlock = renderColor(color);
        colorContainer.append(colorBlock);
    }
}
loadData();
