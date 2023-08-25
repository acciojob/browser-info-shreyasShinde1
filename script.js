//your JS code here. If required.
const div = document.createElement("div")
div.id = "browser-info"

let browserName = navigator.appName;
let version = navigator.appVersion;
div.innerText = "You are using "+browserName + " version "+ version;

document.body.appendChild(div);