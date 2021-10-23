const buildHome = () => {
  const homepage = document.createElement("div");
  homepage.classList.add("container", "home-content");

  const buildLevel = () => {
    const level = document.createElement("div");
    level.classList.add("level", "block", "is-mobile");

    const addressContainer = document.createElement("div");
    addressContainer.classList.add("level-item", "has-text-centered");

    const address = document.createElement("div");
    address.classList.add("address");

    for (let i = 0; i < 2; i++) {
      const line = document.createElement("p");
      switch (i) {
        case 0:
          line.innerText = "82 West Broadway";
          break;
        case 1:
          line.innerText = "New York, NY 10007";
          break;       
      }
      address.appendChild(line);
    }

    const phoneContainer = document.createElement("div");
    phoneContainer.classList.add("level-item", "has-text-centered");

    const phoneNumber = document.createElement("a");
    phoneNumber.classList.add("button", "is-medium", "is-link", "is-light");
    phoneNumber.href = "tel:212-609-1111";
    phoneNumber.innerText = "212-608-1111";

    addressContainer.appendChild(address);
    phoneContainer.appendChild(phoneNumber);
    level.append(addressContainer, phoneContainer);

    const hr = document.createElement("hr");

    homepage.append(level, hr);
  }

  const buildMain = () => {
    const homepageMain = document.createElement("div");
    homepageMain.classList.add("columns", "is-centered");

    //Build image column

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("column");

    const figure = document.createElement("figure");
    figure.classList.add("image");

    const image = document.createElement("img");
    image.src = "frontdoor.jpg";
    image.alt = "The front door of our office";

    //build text column
    const homepageText = document.createElement("div");
    homepageText.classList.add("column", "content", "is-medium", "has-text-centered");
    
    const h1 = document.createElement("h1");
    h1.innerText = "Revolution Eyes";
    const p1 = document.createElement("p");
    p1.innerText = "We provide best-in-class eye care for children and adults, and offer a wide selection of luxury eyeglass brands.";
    const p2 = document.createElement("p");
    p2.innerText = "Servicing downtown Manhattan since 2014";
    const yelp = document.createElement("span");
    yelp.innerHTML = `<span class="yelp-review" data-review-id="6-7T6IXF-1CDZli7rPcdqQ" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=RdX1SalK7ZZQEPmtD1n3Kg" rel="nofollow noopener">Peter C.</a>'s <a href="https://www.yelp.com/biz/revolution-eyes-new-york-2?hrid=6-7T6IXF-1CDZli7rPcdqQ" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/TAjwJqwGJXsPiMN106DWvQ" rel="nofollow noopener">Revolution Eyes</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span>`;

    const hr = document.createElement("hr");

    figure.appendChild(image);
    imageContainer.appendChild(figure);
    homepageText.append(h1, p1, p2, hr, yelp);
    homepageMain.append(imageContainer, homepageText);
    homepage.appendChild(homepageMain);
  }

  buildLevel();
  buildMain();
  content.appendChild(homepage);
}

export default buildHome;