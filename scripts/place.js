const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;
document.getElementById("lastModified").textContent = document.lastModified;


// Weather information
const temperature = 10;
const windSpeed = 5;


// Calculate wind chill
function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}


// Check whether wind chill can be calculated
if (temperature <= 10 && windSpeed > 4.8) {

    const windChill = calculateWindChill(temperature, windSpeed);

    document.querySelector("#windchill").textContent = windChill.toFixed(1) + "°C";

} else {

    document.querySelector("#windchill").textContent = "N/A";

}