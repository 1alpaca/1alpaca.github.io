<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         document.title = '这里这里Σ(/ﾟДﾟ)/！！ ';
         clearTimeout(titleTime);
     }
     else {
         document.title = '安全屋继续运行！！(・ω< )★' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });
