console.log("dan told me to write soemthing in here")

$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: false,
    prevArrow: '<button type="button" class="slick-prev">Back</button>'

});

  const banner = document.querySelector('.tickerBanner');
  const textBlock = banner.querySelectorAll('.text-block');

  console.log(textBlock[1].offsetWidth)

  let bannerBlock = 0;
  textBlock.forEach( block => {
    bannerBlock += block.offsetWidth
  });

  let bannerLength = bannerBlock
  console.log(bannerBlock)
  console.log(bannerLength)
  
  
  document.documentElement.style.setProperty('--bannerBlockLength', `${bannerBlock}px`);
  document.documentElement.style.setProperty('--bannerBlockTime', `${(bannerBlock / 50)}s`);

  
  function extendBanner() {
  if (bannerLength < (screen.width + bannerBlock) ) {
    textBlock.forEach(block => {
      console.log(block.innerHTML)
      // add the newly created element and its content into the DOM
      banner.appendChild(block.cloneNode(true));
      // banner.querySelector('a:last-child').innerHTML = block.innerHTML
      // banner.querySelector('a:last-child').href = block.href
      
    });
    bannerLength += bannerBlock;
    console.log(bannerLength) 
    extendBanner()
  }
  }



  extendBanner()

  console.log(bannerLength)
  

  //burger menu

  const btn = document.getElementById("menuBtn");
const menu = document.getElementById("mobileMenu");

if (btn && menu) {
  const closeMenu = () => {
    menu.classList.add("hidden");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-label", "Open menu");
  };

  const openMenu = () => {
    menu.classList.remove("hidden");
    btn.setAttribute("aria-expanded", "true");
    btn.setAttribute("aria-label", "Close menu");
  };

  btn.addEventListener("click", () => {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    isOpen ? closeMenu() : openMenu();
  });

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // Optional: close after clicking a link
  menu.addEventListener("click", (e) => {
    if (e.target.closest("a")) closeMenu();
  });
}

