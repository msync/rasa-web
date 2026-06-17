const GOOGLE_TAG_ID = "G-0Q8CVSMVGS";

window.dataLayer = window.dataLayer || [];
function gtag() {
  window.dataLayer.push(arguments);
}
window.gtag = window.gtag || gtag;

const script = document.createElement("script");
script.async = true;
script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`;
document.head.append(script);

window.gtag("js", new Date());
window.gtag("config", GOOGLE_TAG_ID);
