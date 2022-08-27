$(function(){
    
    $('.mosaico .wraper').slick({
        centerMode: false,
        slidesToShow: 6,
        arrow:false,
        responsive:[

            {
                breakpoint:768,
                settings:{
                    arrows:false,
                    centerMode:true,
                    slidesToShow:3
                }
            },

            {
                breakpoint:580,
                settings:{
                    slidesToShow:2,
                    centerMode:true,
                    arrows:false,
                }
            },

            {
                breakpoint:380,
                settings:{
                    arrows:false,
                    centerMode:true,
                    slidesToShow:1,
                }
            }

        ]

    });


})