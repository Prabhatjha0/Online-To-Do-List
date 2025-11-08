export function calculateInterval(taskCount) {
    const BASE_INTERVAL_MS = 1000;
    const TASK_THRESHOLD = 5;
    return taskCount <= TASK_THRESHOLD ? BASE_INTERVAL_MS 
           : BASE_INTERVAL_MS + ((taskCount - TASK_THRESHOLD) * 200);
}

export function stopBlinking(intervalId) {
    if (intervalId) {
        clearInterval(intervalId);
        document.querySelectorAll('.status-pending.dim')
            .forEach(el => el.classList.remove('dim'));
    }
    return null;
}