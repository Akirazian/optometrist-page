const buildYelp = () => {
  const yelpContainer = document.createElement("div");
  yelpContainer.classList.add("content", "has-text-centered");

  const yelpTitle = document.createElement("h2");
  yelpTitle.innerText = "Patient Reviews"

  const yelp1 = document.createElement("div");
  yelp1.innerHTML = `<span class="yelp-review" data-review-id="6-7T6IXF-1CDZli7rPcdqQ" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=RdX1SalK7ZZQEPmtD1n3Kg" rel="nofollow noopener">Peter C.</a>'s <a href="https://www.yelp.com/biz/revolution-eyes-new-york-2?hrid=6-7T6IXF-1CDZli7rPcdqQ" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/TAjwJqwGJXsPiMN106DWvQ" rel="nofollow noopener">Revolution Eyes</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span>`;
  
  const yelp2 = document.createElement("div");
  yelp2.classList.add("mt-3");
  yelp2.innerHTML = `<span class="yelp-review" data-review-id="mKBVCvM9F1KLO_pwCz5anQ" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=BJVArJKGsHSWIBpjSMDRgA" rel="nofollow noopener">Mitchell M.</a>'s <a href="https://www.yelp.com/biz/revolution-eyes-new-york-2?hrid=mKBVCvM9F1KLO_pwCz5anQ" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/TAjwJqwGJXsPiMN106DWvQ" rel="nofollow noopener">Revolution Eyes</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span>`;

  const yelp3 = document.createElement("div");
  yelp3.classList.add("mt-3");
  yelp3.innerHTML = `<span class="yelp-review" data-review-id="AHg_qGSHsAgvlntCBh66rQ" data-hostname="www.yelp.com">Read <a href="https://www.yelp.com/user_details?userid=u0gJTZYTbsAly9wsJ_RxXg" rel="nofollow noopener">Mia K.</a>'s <a href="https://www.yelp.com/biz/revolution-eyes-new-york-2?hrid=AHg_qGSHsAgvlntCBh66rQ" rel="nofollow noopener">review</a> of <a href="https://www.yelp.com/biz/TAjwJqwGJXsPiMN106DWvQ" rel="nofollow noopener">Revolution Eyes</a> on <a href="https://www.yelp.com" rel="nofollow noopener">Yelp</a><script src="https://www.yelp.com/embed/widgets.js" type="text/javascript" async></script></span>`;


  yelpContainer.append(yelpTitle, yelp1, yelp2, yelp3);

  return yelpContainer;
}

export default buildYelp;