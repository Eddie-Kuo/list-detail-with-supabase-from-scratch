import { getColor } from '../fetch-utils.js';
import { renderColorDetail } from '../render-utils.js';

const colorHistoryPage = document.querySelector('.color-history-page');

const params = new URLSearchParams(window.location.search);

async function loadColor() {
    const color = await getColor(params.get('id'));
    const colorDisplay = renderColorDetail(color);
    colorHistoryPage.append(colorDisplay);
}

loadColor();