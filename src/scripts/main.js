import { calculateInterval, stopBlinking } from './utils.js';

let blinkIntervalId = null;



function setupBlinkEffect() {
    const pendings = document.querySelectorAll('.status-pending');
    if (!pendings.length) return;

    blinkIntervalId = stopBlinking(blinkIntervalId);
    blinkIntervalId = setInterval(() => 
        pendings.forEach(el => el.classList.toggle('dim')), 
        calculateInterval(pendings.length)
    );
}

document.addEventListener('DOMContentLoaded', setupBlinkEffect);