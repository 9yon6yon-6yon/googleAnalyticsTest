const swiperEl = document.querySelector('swiper-container')

const params = {
    injectStyles: [`
        .swiper-button-next,
        .swiper-button-prev {
            background-color: transparent;
            background-position: center;
            background-size: 40px;
            background-repeat: no-repeat;
            padding: 8px 16px;
            border-radius: 100%;
            color: #fff;

        }   
        .swiper-button-next::after,
        .swiper-button-prev::after {
            content: "";
        }
        .swiper-pagination-bullet {
            width: 20px;
            height: 20px;
            color: #000;
            opacity: 1;
            background: rgba(0, 0, 0, 0.2);
        }
        .swiper-pagination-bullet-active {
            color:  #333;
            background: #fff;
        }

      `],
    navigation: true,
    pagination: {
        clickable: true,
        renderBullet: function (index, className) {
            var bulletSVGs = [
                '<rect width="16" height="16" x="2" y="2" stroke="black" stroke-width="2" fill="#a78601" />',
                '<circle cx="10" cy="10" r="8" stroke="black" stroke-width="2" fill="red" />',
                '<polygon points="8,2 16,16 2,16" stroke="black" stroke-width="2" fill="green" />',
            ];
            return '<span class="' + className + '">' + '<svg width="30" height="30">' +
                bulletSVGs[index] +
                '</svg>' + "</span>";
        },
        
    },
    
}

Object.assign(swiperEl, params);

