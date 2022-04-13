export default function scrollOps(param) {
  if (param === "open") {
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector("body").style.paddingRight = "1rem";
  } else {
    document.querySelector("body").style.overflow = "auto";
    document.querySelector("body").style.paddingRight = "0";
  }
}
