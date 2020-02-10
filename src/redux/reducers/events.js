const initialState = {
    events: [
        {
        "id" : 1,
        "title" : 'Фестиваль света',
        "image": 'https://img.cdn.fontanka.ru/mm/items/2019/11/2/0037/IMG_5307.JPG',
        "description": 'Петербург славится своими культурными традициями, и одна из них зарождается прямо на наших глазах — это Фестиваль света. Праздник проходит второй год подряд и привлекает тысячи зрителей. В этот раз темой стал юбилей Октябрьской революции.',
        "body": "4 и 5 ноября в Петербурге пройдёт очередной Фестиваль света. На этот раз действо захватит сразу две площадки — Дворцовую площадь и Петроградскую набережную.\nНа фасады Зимнего дворца и Главного штаба будут транслировать 3D-представление с использованием технологии видеомэппинга, лазерных и пиротехнических эффектов. На стенах штаба зрители увидят спектакль о ключевых моментах 1917 года, причём здание будет принимать облик то Путиловского завода, то особняка Матильды Кшесинской, то Александринского театра. На Зимнем дворце тем временем появятся картины, воспевающие Петербург. Здесь будет всё, что дорого каждому горожанину: мосты, львы и сфинксы, дворы-колодцы, белые ночи и другие символы Северной столицы.\nВ этом году на Дворцовой площади впервые пройдёт конкурс мастеров видео-арта. Команды из Италии, России, Польши, Франции и Испании выберут и проиллюстрируют одну из песен о  Петербурге. Зрители смогут проголосовать за понравившуюся работу и выбрать лучший мультимедийный спектакль.\nШоу займёт весь вечер с 19:00 до 23:00, старт каждые 15 минут. Увидеть это впечатляющее действо можно абсолютно бесплатно.\nКроме светового представления на Дворцовой устроят и шоу реконструкторов. Будет несколько площадок, где воссоздадут разные моменты из истории России.\nВторая площадка фестиваля расположится в месте, которое сейчас ассоциируется с революционными событиями 1917 года. Главным участником действа станет легендарный крейсер «Аврора». Видеопроекции будут транслироваться прямо на корабль, и перед зрителями оживёт его история, неразрывно связанная с судьбой государства. Шоу будет идти два дня с 19:00 до 22:00.\nДо этого все желающие смогут стать зрителями конкурса  «Смотр строя и песни». Он начнётся 4 ноября в 15:00. В воскресенье в дневное время рядом с  «Авророй»  устроят интерактивную зону, проведут викторины и конкурсы, организуют экскурсии по местам революционных событий.\nФестиваль света устраивают в Северной столице в четвёртый раз. В марте этого года площадкой стал стадион «Санкт-Петербург», за который проголосовало большинство горожан.  Прошлой осенью перед зрителями пронеслись история, мифы и легенды Петербурга, ожившие на стенах Исаакиевского собора. А стартовал фестиваль в апреле 2016 года на площади Островского.",
        "price": null,
        "is_free": true,
        "categories": [
            "holiday",
            "festival"
        ]
        },
        {
            "id" : 2,
            "title" : 'Фестиваль мороженного',
            "image": 'https://www.fiesta.ru/uploads/slider_image/image/120768/v880_63910_17497-tsvetnoe-morozhenoe.jpg',
            "description": "lorem ice cream",
            "body": " lorem body",
            "price": 1200,
            "is_free": false,
            "categories": [
                "holiday",
                "festival"
            ]
        },
        {
            "id" : 3,
            "title" : 'Кино старого Ганса',
            "image": 'https://static.ukrinform.com/photos/2017_08/thumb_files/630_360_1502356938-4847.jpg',
            "description": 'Lorem CInema',
            "body": "Body lorem cinema",
            "price": null,
            "is_free": true,
            "categories": [
                "cinema"
            ]
        },
        {
            "id" : 4,
            "title" : 'Фестиваль Танцев',
            "image": 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX9868078.jpg',
            "description": 'Lorem dance',
            "body": "Body lorem dance",
            "price": 1300,
            "is_free": false,
            "categories": [
                "festival"
            ]
        },{
            "id" : 5,
            "title" : 'Фестиваль краски',
            "image": 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-971260876-1559600482.jpg?crop=0.668xw:1.00xh;0.117xw,0&resize=768:*',
            "description": 'Lorem dance',
            "body": "Body lorem dance",
            "price": 1300,
            "is_free": false,
            "categories": [
                "festival"
            ]
        },
        {
            "id" : 6,
            "title" : 'Кино марафон Marvel',
            "image": 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1362954/ce55fc79ee240fc2102925e421722b4d/960x540',
            "description": 'Lorem CInema',
            "body": "Body lorem cinema",
            "price": null,
            "is_free": true,
            "categories": [
                "cinema"
            ]
        },
    ],
    search: ''
}

export default function events(state = initialState, action) {
    switch (action.type) {
        case 'DECREASE':
            return {
                events: state.events.sort((prev,next) => next.price - prev.price)
            }
        case 'INCREASE':
            return {
                events: state.events.sort((prev,next) => prev.price - next.price)
            }
        case 'FILTER':
            return {
                events: state.events.filter((event)=>{
                    return event.categories.includes(action.value)
                })
            }
        case 'RESET_EVENTS':
            return {
                events: initialState.events
            } 
        case 'INPUTCHANGE': 
            return {
                events: state.events,
                search: action.value
            }
        case 'SEARCH':
            return {
                events: state.events.filter((event)=>{
                    if(event.title.toLowerCase().includes(action.value.trim().toLowerCase()) || event.description.toLowerCase().includes(action.value.trim().toLowerCase()) || event.body.toLowerCase().includes(action.value.trim().toLowerCase())){
                        return event
                    }
                    return null
                    
                }),
                search: ""
            }
        default:
            return state
    }
}