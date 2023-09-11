document.addEventListener("DOMContentLoaded", function () {

    const slackUserName = "mustapha hamza";
    const slackDisplayImage = "/image/HNGx_dp.png"; 
    const currentDayOfTheWeek = new Date().toLocaleDateString("en-US", { weekday: "long" });
    const currentUTCTime = Date.now();
    const myTrack = "Frontend";
    const githubURL = "https://github.com/Mustapha-Hamza/HNGx_frontend_stage1"; 

    
    document.querySelector("[data-testid='slackUserName']").textContent = slackUserName;
    document.querySelector("[data-testid='slackDisplayImage']").src = slackDisplayImage;
    document.querySelector("[data-testid='slackDisplayImage']").alt = slackUserName;
    document.querySelector("[data-testid='currentDayOfTheWeek']").textContent = currentDayOfTheWeek;
    document.querySelector("[data-testid='currentUTCTime']").textContent = currentUTCTime;
    document.querySelector("[data-testid='myTrack']").textContent = myTrack;
    document.querySelector("[data-testid='githubURL']").href = githubURL;
});
