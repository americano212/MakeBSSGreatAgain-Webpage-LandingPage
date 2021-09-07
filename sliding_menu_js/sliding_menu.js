document.addEventListener('DOMContentLoaded', function(){
    document.querySelector(".mobile-menu").addEventListener("click", function(e){
        if ( document.querySelector('.sliding_menu_box').classList.contains('on') ){
            //메뉴닫힘
            document.querySelector('.sliding_menu_box').classList.remove('on');
            document.querySelector('.mobile-menu i').classList.remove('fa-times')
            document.querySelector('.mobile-menu i').classList.add('fa-bars');
        } else {
            //메뉴펼침
            document.querySelector('.sliding_menu_box').classList.add('on');
            document.querySelector('.mobile-menu i').classList.remove('fa-bars');
            document.querySelector('.mobile-menu i').classList.add('fa-times');
        }
    });
});