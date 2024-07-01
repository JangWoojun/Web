document.addEventListener("DOMContentLoaded", function() {
    const targetDate = new Date('2024-06-28T00:00:00');
    const currentDate = new Date();
    const diffTime = currentDate - targetDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const displayText = `D+${diffDays+1}`;
    
    document.getElementById('day-counter').innerText = displayText;
});