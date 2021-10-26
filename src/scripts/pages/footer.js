const buildFooter = () => {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const footerContent = document.createElement("div");
  footerContent.classList.add("content", "has-text-centered");
  footerContent.innerText = "(c) 2021 • Revolution Eyes • 82 West Broadway, New York, NY 10007 • (212)-608-1111"

  footer.appendChild(footerContent);

  const body = document.querySelector("body");
  body.appendChild(footer);

};

export default buildFooter;