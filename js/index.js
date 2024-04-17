// layui.use(function(){
//     var carousel = layui.carousel;
//     // 渲染 - 图片轮播
//     carousel.render({
//       elem: '#ID-carousel-demo-image',
//       width: '70%',
//       height:  '600px',
//       interval: 3000
//     });
//   });

// var thumbsSwiper = new Swiper('.swiper-thumbs', {
//     slidesPerView: 4,
//   });
// var mySwiper = new Swiper('.swiper', {
//     direction: 'vertical', // 垂直切换选项
//     loop: true, // 循环模式选项
//     autoplay: true,
// })

// 痛点 轮播图
var thumbsSwiper = new Swiper('#thumbs',{
    // loop: true, // 循环模式选项
    autoplay: false,
    loop:false,
    spaceBetween: 4,
    slidesPerView: 1.7,
    watchSlidesVisibility: true,//防止不可点击
})
var gallerySwiper = new Swiper('#gallery',{
  direction: 'vertical', // 垂直切换选项
    autoplay: true,
    loop: true,
    spaceBetween: 4,
    thumbs: {
      swiper: thumbsSwiper,
    }
  })
  // 关于我们 轮播图
  var thumbsSwiper = new Swiper('#aboutThumbs',{
      // loop: true, // 循环模式选项
      autoplay: false,
      loop:false,
      spaceBetween: 3,
      slidesPerView: 1.3,
      // watchSlidesVisibility: true,//防止不可点击
    })
    var gallerySwiper = new Swiper('#aboutGallery',{
      // direction: 'vertical', // 垂直切换选项
      autoplay: true,
      loop: true,
      spaceBetween: 3,
      thumbs: {
        swiper: thumbsSwiper,
      }
    })
