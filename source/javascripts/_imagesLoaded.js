// 圖片延遲載入
jQuery(function() {
    imagesLoaded('body', function() {
      jQuery('#loading').fadeOut(2000);
    });
}());
  