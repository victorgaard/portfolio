export default function modalOps(param) {
  const body = document.querySelector("body");
  if (param === "open") {
    body.style.overflow = "hidden";
    body.style.paddingRight = "1rem";
  } else {
    window.history.back();
    body.style.overflow = "auto";
    body.style.paddingRight = "0";
  }
}
