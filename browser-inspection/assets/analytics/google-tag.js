const GOOGLE_TAG_ID = "G-0Q8CVSMVGS";

window.dataLayer = window.dataLayer || [];
window.gtag = function gtag() {
  window.dataLayer.push(arguments);
};

const script = document.createElement("script");
script.async = true;
script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`;
document.head.append(script);

window.gtag("js", new Date());
window.gtag("config", GOOGLE_TAG_ID);
