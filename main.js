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
