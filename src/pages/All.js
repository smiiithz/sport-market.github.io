import React, { useState } from 'react';

  const PRODUCTS = [
    {
      imageSrc: "/img/1.jpg",
      altText: "Torneo",
      price: "5 599 ₽",
      description: "Набор гантелей с пластиковыми дисками 20 кг Torneo",
      rating: "★★★★★",
      reviews: "(48)"
    },
    {
      imageSrc: "/img/2.jpg",
      altText: "Гантель",
      originalPrice: "4 599 ₽",
      price: "3 699 ₽",
      description: "Гантель наборная Torneo, 10 кг",
      rating: "★★★★★",
      reviews: "(65)",
      discount: "-20 %"
    },
    {
      imageSrc: "/img/3.jpg",
      altText: "KETTLER",
      price: "1 199 ₽",
      description: "Гантель гексагональная обрезиненная KETTLER, 2 кг",
      rating: "★★★★★",
      reviews: "(30)"
    },
    {
      imageSrc: "/img/4.jpg",
      altText: "Набор гантелей",
      price: "8 999 ₽",
      description: "Гантель гексагональная обрезиненная KETTLER, 20 кг",
      rating: "★★★★☆",
      reviews: "(5)"
    },
    {
      imageSrc: "/img/5.jpg",
      altText: "Proiron",
      originalPrice: "2 819 ₽",
      price: "2 437 ₽",
      description: "Гантели PROIRON неопреновые набор 2 шт, 3+3 кг",
      rating: "★★★★★",
      reviews: "(10)",
      discount: "-14 %"
    },
    {
      imageSrc: "/img/6.jpg",
      altText: "Proiron обрезиненные",
      originalPrice: "8 984 ₽",
      price: "7 833 ₽",
      description: "Гантели PROIRON обрезиненные набор 2 шт, 10+10 кг",
      rating: "★★★★★",
      reviews: "(25)",
      discount: "-13 %"
    },
    {
      imageSrc: "/img/7.jpg",
      altText: "KETTLER",
      price: "12 999 ₽",
      description: "Мультинабор обрезиненный: гантели+гиря KETTLER, 24 кг",
      rating: "★★★★★",
      reviews: "(2)"
    },
    {
      imageSrc: "/img/8.jpg",
      altText: "Proiron 2",
      originalPrice: "9 120 ₽",
      price: "7 871 ₽",
      description: "Гантели разборные PROIRON с грифом из чугуна набор 2 шт, 10+10 кг",
      rating: "☆☆☆☆☆",
      reviews: "(0)",
      discount: "-14 %"
    },
    {
      imageSrc: "/img/9.jpg",
      altText: "Турник",
      price: "3 599 ₽",
      description: "Турник настенный Torneo A-990WG",
      rating: "★★★★★",
      reviews: "(113)"
    },
    {
      imageSrc: "/img/10.jpg",
      altText: "Demix",
      price: "1 999 ₽",
      description: "Утяжелители Demix, 2 х 2 кг",
      rating: "★★★★☆",
      reviews: "(22)"
    },
    {
      imageSrc: "/img/11.jpg",
      altText: "Demix эсп",
      price: "399 ₽",
      description: "Эспандер кистевой Demix, 20 кг",
      rating: "★★★★★",
      reviews: "(234)"
    },
    {
      imageSrc: "/img/12.jpg",
      altText: "Athlex",
      price: "6 999 ₽",
      description: "Гантель гексагональная обрезиненная Athlex, 15 кг",
      rating: "☆☆☆☆☆",
      reviews: "(0)"
    },
    {
      imageSrc: "/img/13.jpg",
      altText: "Диск",
      price: "3 599 ₽",
      description: "Диск чугунный обрезиненный KETTLER, 51 мм, 5 кг",
      rating: "★★★★★",
      reviews: "(14)"
    },
    {
      imageSrc: "/img/14.jpg",
      altText: "Гриф",
      price: "4 599 ₽",
      description: "Гриф стальной 30х1700 мм Torneo",
      rating: "★★★★★",
      reviews: "(55)"
    },
    {
      imageSrc: "/img/15.jpg",
      altText: "Гриф с",
      price: "1 599 ₽",
      description: "Гриф стальной, обрезиненная рукоять 30x360 мм Torneo",
      rating: "★★★★☆",
      reviews: "(97)"
    },
    {
      imageSrc: "/img/16.jpg",
      altText: "Накладка",
      price: "1 799 ₽",
      description: "Смягчающая накладка на гриф Torneo",
      rating: "★★★★★",
      reviews: "(6)"
    },
    {
      imageSrc: "/img/17.jpg",
      altText: "Ткань",
      price: "999 ₽",
      description: "Набор силовых тканевых лент Demix, 3 шт",
      rating: "★★★★☆",
      reviews: "(48)"
    },
    {
      imageSrc: "/img/18.jpg",
      altText: "Demix",
      originalPrice:"1 399 ₽",
      price: "979 ₽",
      description: "Эспандер пружинный Demix",
      rating: "★★★★★",
      reviews: "(7)",
      discount: "-30 %"
    },
    {
      imageSrc: "/img/19.jpg",
      altText: "SPR",
      originalPrice:"2 890 ₽",
      price: "1 750 ₽",
      description: "Утяжелители для плавания 3 кг",
      rating: "☆☆☆☆☆",
      reviews: "(0)",
      discount: "-39 %"
    },
    {
      imageSrc: "/img/20.jpg",
      altText: "SPR",
      originalPrice:"12 990 ₽",
      price: "5 196 ₽",
      description: "Утяжелители SPR регулируемые 2 шт по 8 кг",
      rating: "☆☆☆☆☆",
      reviews: "(0)",
      discount: "-60 %"
    },
    {
      imageSrc: "/img/21.jpg",
      altText: "Nike",
      price: "3 499 ₽",
      description: "Утяжелители для рук Nike, 2 х 1,1 кг",
      rating: "☆☆☆☆☆",
      reviews: "(0)"
    },
    {
      imageSrc: "/img/22.jpg",
      altText: "KETTLER",
      price: "2 599 ₽",
      description: "Платформа для отжиманий KETTLER",
      rating: "★★★★★",
      reviews: "(45)"
    },
    {
      imageSrc: "/img/23.jpg",
      altText: "KETTLER",
      price: "1 799 ₽",
      description: "Упоры для отжимания KETTLER",
      rating: "★★★★★",
      reviews: "(53)"
    },    
    {
      imageSrc: "/img/24.jpg",
      altText: "Demix",
      price: "999 ₽",
      description: "Упоры для отжимания Demix",
      rating: "★★★★★",
      reviews: "(22)"
    },
    {
        imageSrc: "/img/y1.jpg",
        altText: "Demix",
        price: "999 ₽",
        description: "Мяч гимнастический с насосом Demix, 55 см",
        rating: "★★★★☆",
        reviews: "(12)"
      },
      {
        imageSrc: "/img/y2.jpg",
        altText: "Demix",
        originalPrice: "799 ₽",
        price: "559 ₽",
        description: "Мяч гимнастический с насосом Demix, 45 см",
        rating: "★★★★★",
        reviews: "(6)",
        discount: "-30 %"
      },
      {
        imageSrc: "/img/y3.jpg",
        altText: "Baltic-Air",
        price: "42 000 ₽",
        description: "Мягкий цилиндр из двух частей 90 x Ø 60 см",
        rating: "☆☆☆☆☆",
        reviews: "(0)"
      },
      {
        imageSrc: "/img/y4.jpg",
        altText: "Baltic-Air",
        price: "25 000 ₽",
        description: "Надувной спортивный фляк",
        rating: "☆☆☆☆☆",
        reviews: "(0)"
      },
      {
        imageSrc: "/img/y5.jpg",
        altText: "Baltic-Air",
        price: "14 000 ₽",
        description: "Надувной спортивный цилиндр 100 см голубой",
        rating: "☆☆☆☆☆",
        reviews: "(0)"
      },
      {
        imageSrc: "/img/y6.jpg",
        altText: "Demix",
        originalPrice: "3 199 ₽",
        price: "2 599 ₽",
        description: "Коврик для фитнеса Demix",
        rating: "★★★★★",
        reviews: "(159)",
        discount: "-19 %"
      },
      {
        imageSrc: "/img/y7.jpg",
        altText: "Torneo",
        originalPrice: "799 ₽",
        price: "399 ₽",
        description: "Мяч гимнастический Torneo, 45 см",
        rating: "★★★★★",
        reviews: "(55)",
        discount: "-50 %"
      },
      {
        imageSrc: "/img/y8.jpg",
        altText: "Torneo",
        originalPrice: "999 ₽",
        price: "499 ₽",
        description: "Мяч гимнастический Torneo, 55 см",
        rating: "★★★★★",
        reviews: "(209)",
        discount: "-50 %"
      },
      {
        imageSrc: "/img/y9.jpg",
        altText: "Proiron",
        originalPrice: "659 ₽",
        price: "565 ₽",
        description: "Мяч PROIRON для пилатеса 25 см",
        rating: "☆☆☆☆☆",
        reviews: "(0)",
        discount: "-14 %"
      },
      {
        imageSrc: "/img/y10.jpg",
        altText: "Sensana",
        price: "3 999 ₽",
        description: "Коврик для йоги Sensana",
        rating: "★★★★★",
        reviews: "(2)"
      },
      {
        imageSrc: "/img/y11.jpg",
        altText: "Demix",
        originalPrice: "1 399 ₽",
        price: "999 ₽",
        description: "Коврик для йоги Demix",
        rating: "★★★★★",
        reviews: "(215)",
        discount: "-29 %"
      },
      {
        imageSrc: "/img/y12.jpg",
        altText: "Demix",
        price: "1 299 ₽",
        description: "Сумка для коврика Demix",
        rating: "★★★★★",
        reviews: "(16)"
      },
      {
        imageSrc: "/img/y13.jpg",
        altText: "KETTLER",
        price: "599 ₽",
        description: "Ремень для занятия йогой и переноски коврика KETTLER",
        rating: "★★★★★",
        reviews: "(6)"
      },
      {
        imageSrc: "/img/y14.jpg",
        altText: "Ramayoga",
        originalPrice: "13 920 ₽",
        price: "11 971 ₽",
        description: "Йога критического выравнивания и пилатес Лавка Випарита Дандасана Premium",
        rating: "☆☆☆☆☆",
        reviews: "(0)",
        discount: "-14 %"
      },
      {
        imageSrc: "/img/y15.jpg",
        altText: "Demix",
        originalPrice: "999 ₽",
        price: "699 ₽",
        description: "Блок для йоги Demix",
        rating: "★★★★★",
        reviews: "(10)",
        discount: "-30 %"
      },
      {
        imageSrc: "/img/y16.jpg",
        altText: "KETTLER",
        price: "999 ₽",
        description: "Блок для йоги KETTLER",
        rating: "★★★★★",
        reviews: "(22)"
      },
      {
        imageSrc: "/img/y17.jpg",
        altText: "Ramayoga",
        originalPrice: "3 713 ₽",
        price: "3 193 ₽",
        description: "Болстер для йоги из гречихи Мандала, серый, размер 60 х 23 см вес 5 кг",
        rating: "☆☆☆☆☆",
        reviews: "(0)",
        discount: "-14 %"
      },
      {
        imageSrc: "/img/y18.jpg",
        altText: "Ramayoga",
        originalPrice: "2 970 ₽",
        price: "2 554 ₽",
        description: "Болстер для йоги из гречихи Чакра Анахата зеленая Рамайога",
        rating: "☆☆☆☆☆",
        reviews: "(0)",
        discount: "-14 %"
      },
      {
        imageSrc: "/img/y19.jpg",
        altText: "Bodhi",
        originalPrice: "2 888 ₽",
        price: "2 483 ₽",
        description: "Подушка для медитации Мандала серый BODHI",
        rating: "☆☆☆☆☆",
        reviews: "(0)",
        discount: "-14 %"
      },
      {
        imageSrc: "/img/y20.jpg",
        altText: "Ramayoga",
        originalPrice: "2 820 ₽",
        price: "2 425 ₽",
        description: "Болстер для йоги Айенгара синий 75см шерстяной с хлопковым чехлом Рамайога",
        rating: "☆☆☆☆☆",
        reviews: "(0)",
        discount: "-14 %"
      },
      {
        imageSrc: "/img/y21.jpg",
        altText: "ОВЕМАН",
        originalPrice: "3 200 ₽",
        price: "2 400 ₽",
        description: "Маты спортивные пазлы ОВЕМАН",
        rating: "☆☆☆☆☆",
        reviews: "(0)",
        discount: "-25 %"
      },
      {
        imageSrc: "/img/y22.jpg",
        altText: "ОВЕМАН",
        originalPrice: "2 990 ₽",
        price: "2 290 ₽",
        description: "Набор для массажа и йоги PRCTZ MASSAGE THERAPY 3-PIECE YOGA SET",
        rating: "☆☆☆☆☆",
        reviews: "(0)",
        discount: "-23 %"
      },
      {
        imageSrc: "/img/y23.jpg",
        altText: "Proiron",
        originalPrice: "2 280 ₽",
        price: "1 975 ₽",
        description: "Коврик складной PROIRON для йоги и фитнеса 1830х610х6 мм",
        rating: "☆☆☆☆☆",
        reviews: "(0)",
        discount: "-13 %"
      },
      {
        imageSrc: "/img/y24.jpg",
        altText: "Colorfit",
        price: "1 799 ₽",
        description: "Блок для йоги Colorfit",
        rating: "☆☆☆☆☆",
        reviews: "(0)",
      },
      {
        imageSrc: "/img/y25.jpg",
        altText: "Bodhi",
        originalPrice: "810 ₽",
        price: "697 ₽",
        description: "Деревянный опорный блок, кирпич для йоги однотонный BODHI",
        rating: "★★★☆☆",
        reviews: "(25)",
        discount: "-14 %"
      },
      {
        imageSrc: "/img/y26.jpg",
        altText: "Yamaguchi",
        originalPrice: "6 000 ₽",
        price: "3 200 ₽",
        description: "Спортивный коврик Yamaguchi Comfort Fitness",
        rating: "★★★★★",
        reviews: "(225)",
        discount: "-47 %"
      },
      {
        imageSrc: "/img/s1.jpg",
        altText: "PUMA",
        price: "7 499 ₽",
        description: "Кроссовки PUMA Flyer Lite 3",
        rating: "★★★★★",
        reviews: "(23)"
      },
      {
        imageSrc: "/img/s2.jpg",
        altText: "adidas",
        price: "8 999 ₽",
        description: "Кроссовки adidas Strutter",
        rating: "★★★★★",
        reviews: "(620)"
      },
      {
        imageSrc: "/img/s3.jpg",
        altText: "ASICS",
        originalPrice: "28 599 ₽",
        price: "20 019 ₽",
        description: "Кроссовки ASICS Gel-Trabuco 12",
        rating: "★★★★★",
        reviews: "(3)",
        discount: "-30 %"
      },
      {
        imageSrc: "/img/s4.jpg",
        altText: "PUMA",
        originalPrice: "7 499 ₽",
        price: "6 749 ₽",
        description: "Кроссовки PUMA Skyrocket Lite Elevate",
        rating: "★★★★★",
        reviews: "(8)",
        discount: "-10 %"
      },
      {
        imageSrc: "/img/s5.jpg",
        altText: "New Balance",
        price: "11 999 ₽",
        description: "Кроссовки New Balance Arishi V4",
        rating: "★★★★★",
        reviews: "(1)"
      },
      {
        imageSrc: "/img/s6.jpg",
        altText: "adidas",
        originalPrice: "7 999 ₽",
        price: "6 799 ₽",
        description: "Кроссовки adidas Response Runner",
        rating: "★★★★★",
        reviews: "(20)",
        discount: "-15 %"
      },
      {
        imageSrc: "/img/s7.jpg",
        altText: "adidas",
        originalPrice: "10 799 ₽",
        price: "9 179 ₽",
        description: "Кроссовки adidas Duramo SL",
        rating: "★★★★☆",
        reviews: "(39)",
        discount: "-15 %"
      },
      {
        imageSrc: "/img/s8.jpg",
        altText: "Erke",
        originalPrice: "8 999 ₽",
        price: "5 399 ₽",
        description: "Кроссовки Erke",
        rating: "☆☆☆☆☆",
        reviews: "(0)",
        discount: "-40 %"
      },
      {
        imageSrc: "/img/s9.jpg",
        altText: "PUMA",
        price: "7 999 ₽",
        description: "Кроссовки PUMA Pounce Lite",
        rating: "★★★★★",
        reviews: "(6)"
      },
      {
        imageSrc: "/img/s10.jpg",
        altText: "PUMA",
        price: "9 799 ₽",
        description: "Кроссовки PUMA X-Cell Nova Cat Sl Wns",
        rating: "★★★☆☆",
        reviews: "(3)"
      },
      {
        imageSrc: "/img/s11.jpg",
        altText: "Li-Ning",
        originalPrice: "9 199 ₽",
        price: "8 003 ₽",
        description: "Кроссовки Li-Ning Yueying 4",
        rating: "☆☆☆☆☆",
        reviews: "(0)",
        discount: "-13 %"
      },
      {
        imageSrc: "/img/s12.jpg",
        altText: "ASICS",
        originalPrice: "25 999 ₽",
        price: "18 199 ₽",
        description: "Кроссовки ASICS Noosa TRI 15",
        rating: "★★★★☆",
        reviews: "(45)",
        discount: "-30 %"
      },
      {
        imageSrc: "/img/s13.jpg",
        altText: "Saucony",
        originalPrice: "20 599 ₽",
        price: "10 299 ₽",
        description: "Кроссовки Saucony Omni 21",
        rating: "★★★★★",
        reviews: "(2)",
        discount: "-50 %"
      },
      {
        imageSrc: "/img/s14.jpg",
        altText: "361°",
        price: "11 499 ₽",
        description: "Кроссовки 361° Spire Ⅱ Float",
        rating: "☆☆☆☆☆",
        reviews: "(0)"
      },
      {
        imageSrc: "/img/s15.jpg",
        altText: "PUMA",
        price: "18 499 ₽",
        description: "Кроссовки PUMA Magnify Nitro 2 Wns",
        rating: "★★★★★",
        reviews: "(20)"
      },
      {
        imageSrc: "/img/n1.jpg",
        altText: "Optimum system",
        price: "2 999 ₽",
        description: "Протеин 100% Optimum System 'Французская ваниль', 900 г",
        rating: "★★★★★",
        reviews: "(41)"
      },
      {
        imageSrc: "/img/n2.jpg",
        altText: "ULTRASUPPS",
        price: "1 999 ₽",
        description: "Аминокислоты BCAA 8:1:1 Ultrasupps Ultra Gold 'Фруктовый пунш', 300 г",
        rating: "☆☆☆☆☆",
        reviews: "(0)"
      },
      {
        imageSrc: "/img/n3.jpg",
        altText: "Optimum system",
        price: "1 599 ₽",
        description: "Моногидрат креатина Optimum System 200 г",
        rating: "★★★★☆",
        reviews: "(28)",
      },
      {
        imageSrc: "/img/n4.jpg",
        altText: "UltraBalance",
        originalPrice: "7 555 ₽",
        price: "2 191 ₽",
        description: "Л-карнитин тартрат UltraBalance жиросжигатель для мужчин и женщин, 90 капсул",
        rating: "★★★★★",
        reviews: "(1)",
        discount: "-71 %"
      },
      {
        imageSrc: "/img/n5.jpg",
        altText: "Forsio",
        price: "79 ₽",
        description: "Батончик протеиновый Forsio 'Кокос' 35 г",
        rating: "★★★★★",
        reviews: "(92)",
      },
      {
        imageSrc: "/img/n6.jpg",
        altText: "Forsio",
        price: "79 ₽",
        description: "Батончик протеиновый Forsio 'Шоколад' 35 г",
        rating: "★★★★★",
        reviews: "(176)",
      },
      {
        imageSrc: "/img/n7.jpg",
        altText: "Forsio",
        price: "99 ₽",
        description: "Батончик протеиновый Forsio 'Малина' 35 г",
        rating: "★★★★★",
        reviews: "(36)",
      },
      {
        imageSrc: "/img/n8.jpg",
        altText: "Forsio",
        originalPrice: "1 999 ₽",
        price: "999 ₽",
        description: "Батончики протеиновые Forsio Микс 50 г, 18 шт.",
        rating: "☆☆☆☆☆",
        reviews: "(0)",
        discount: "-50 %"
      },
      {
        imageSrc: "/img/n9.jpg",
        altText: "Chikalab",
        originalPrice: "2 146 ₽",
        price: "1 788 ₽",
        description: "Протеиновые батончики 12 шт. LAYERS Chikalab Двойной шоколад",
        rating: "☆☆☆☆☆",
        reviews: "(0)",
        discount: "-17 %"
      },
      {
        imageSrc: "/img/n10.jpg",
        altText: "Watt Nutrition",
        originalPrice: "2 698 ₽",
        price: "1 281 ₽",
        description: "Креатин моногидрат, Натуральный 500 гр",
        rating: "☆☆☆☆☆",
        reviews: "(0)",
        discount: "-53 %"
      },
      {
        imageSrc: "/img/n11.jpg",
        altText: "RPS Nutrition",
        originalPrice: "2 300 ₽",
        price: "2 000 ₽",
        description: "Заменитель питания RPS Nutrition 1000 гр Банан с кусочками банана",
        rating: "☆☆☆☆☆",
        reviews: "(0)",
        discount: "-13 %"
      },
      {
        imageSrc: "/img/n12.jpg",
        altText: "Optimum system",
        price: "2 499 ₽",
        description: "Комплекс железа Optimum system, 60 шт",
        rating: "☆☆☆☆☆",
        reviews: "(0)",
      },
      {
        imageSrc: "/img/n13.jpg",
        altText: "Forsio",
        price: "119 ₽",
        description: "Изотоник Forsio Мохито, 0.5 л",
        rating: "★★★★★",
        reviews: "(1)",
      },
      {
        imageSrc: "/img/n14.jpg",
        altText: "Forsio",
        price: "119 ₽",
        description: "Изотоник Forsio Грейпфрут, 0.5 л",
        rating: "★★★★★",
        reviews: "(545)",
      },
      {
        imageSrc: "/img/n15.jpg",
        altText: "Forsio",
        price: "119 ₽",
        description: "Изотоник Forsio Ананас, 0.5 л",
        rating: "★★★★★",
        reviews: "(446)",
      },
      {
        imageSrc: "/img/n16.jpg",
        altText: "Gel4u",
        price: "199 ₽",
        description: "Гель энергетический GEL4 U Мята-Лимон, 60 г",
        rating: "☆☆☆☆☆",
        reviews: "(0)",
      },
      {
        imageSrc: "/img/n17.jpg",
        altText: "Gel4u",
        price: "1 650 ₽",
        description: "Гель энергетический GEL4U + ВСАА, вкус Лесные Ягоды, 6 шт.",
        rating: "☆☆☆☆☆",
        reviews: "(0)",
      },
      {
        imageSrc: "/img/n18.jpg",
        altText: "Mutant",
        originalPrice: "5 570 ₽",
        price: "3 899 ₽",
        description: "Гейнер Mutant Mass EXTREME 2500, 2720 г, Ванильное мороженое",
        rating: "★★★★★",
        reviews: "(1)",
        discount: "-30 %"
      },
      {
        imageSrc: "/img/n19.jpg",
        altText: "Watt Nutrition",
        originalPrice: "2 699 ₽",
        price: "2 374 ₽",
        description: "Протеин сывороточный Whey Protein Concentrate 80%, 1000 гр",
        rating: "★★★★★",
        reviews: "(2)",
        discount: "-12 %"
      },
      {
        imageSrc: "/img/n20.jpg",
        altText: "Powerup",
        price: "199 ₽",
        description: "Гель энергетический Powerup со вкусом Апельсина",
        rating: "★★★★☆",
        reviews: "(4)",
      },
      {
        imageSrc: "/img/n21.jpg",
        altText: "SiS",
        price: "349 ₽",
        description: "Гель энергетический углеводный с кофеином SIS Science In Sport 'Кола', 60 мл",
        rating: "★★★★★",
        reviews: "(28)",
      },
      {
        imageSrc: "/img/n22.jpg",
        altText: "Powerup",
        price: "169 ₽",
        description: "Гель энергетический Powerup Черника",
        rating: "★★★☆☆",
        reviews: "(4)",
      },
      {
        imageSrc: "/img/n23.jpg",
        altText: "Optimum Nutrition",
        originalPrice: "7 713 ₽",
        price: "5 399 ₽",
        description: "Креатин Optimum Nutrition Micronized Creatine Capsules, 200 капсул",
        rating: "☆☆☆☆☆",
        reviews: "(0)",
        discount: "-30 %"
      },
      {
        imageSrc: "/img/m1.jpg",
        altText: "KETTLER",
        originalPrice: "1 599 ₽",
        price: "999 ₽",
        description: "Массажный роллер KETTLER",
        rating: "★★★★★",
        reviews: "(10)",
        discount: "-38 %"
      },
      {
        imageSrc: "/img/m2.jpg",
        altText: "KETTLER",
        price: "2 999 ₽",
        description: "Ролик массажный KETTLER, 61 см",
        rating: "★★★★★",
        reviews: "(37)",
      },
      {
        imageSrc: "/img/m3.jpg",
        altText: "KETTLER",
        price: "899 ₽",
        description: "Набор массажных мячей KETTLER, 2 шт",
        rating: "★★★★★",
        reviews: "(6)",
      },
      {
        imageSrc: "/img/m4.jpg",
        altText: "KETTLER",
        price: "999 ₽",
        description: "Массажер с охлаждающим эффектом KETTLER",
        rating: "★★★★★",
        reviews: "(11)",
      },
      {
        imageSrc: "/img/m5.jpg",
        altText: "Sensana",
        price: "1 199 ₽",
        description: "Массажный ролик мягкий Sensana, 30 см",
        rating: "☆☆☆☆☆",
        reviews: "(0)",
      },
      {
        imageSrc: "/img/m6.jpg",
        altText: "KETTLER",
        price: "599 ₽",
        description: "Массажный мяч KETTLER",
        rating: "★★★★★",
        reviews: "(37)",
      },
      {
        imageSrc: "/img/m7.jpg",
        altText: "Athlex",
        price: "5 999 ₽",
        description: "Массажный валик с функцией вибрации Athlex",
        rating: "★★★★★",
        reviews: "(4)",
      },
      {
        imageSrc: "/img/m8.jpg",
        altText: "KETTLER",
        price: "1 599 ₽",
        description: "Мяч массажный с насосом KETTLER, 65 см",
        rating: "★★★★★",
        reviews: "(48)",
      },
      {
        imageSrc: "/img/m9.jpg",
        altText: "Demix",
        price: "699 ₽",
        description: "Двойной массажный мяч Demix",
        rating: "★★★★★",
        reviews: "(36)",
      },
      {
        imageSrc: "/img/m10.jpg",
        altText: "Demix",
        price: "399 ₽",
        description: "Ручной массажер с одной ручкой Demix",
        rating: "★★★★★",
        reviews: "(96)",
      },
      {
        imageSrc: "/img/m11.jpg",
        altText: "Demix",
        price: "399 ₽",
        description: "Массажер Demix",
        rating: "★★★★★",
        reviews: "(96)",
      },
      {
        imageSrc: "/img/m12.jpg",
        altText: "Demix",
        price: "599 ₽",
        description: "Мяч массажный Demix",
        rating: "★★★★★",
        reviews: "(30)",
      },
      {
        imageSrc: "/img/m13.jpg",
        altText: "Demix",
        price: "499 ₽",
        description: "Массажер Demix",
        rating: "★★★★★",
        reviews: "(27)",
      },
      {
          imageSrc: "/img/m14.jpg",
          altText: "Qualigo",
          originalPrice: "6 000 ₽",
          price: "2 500 ₽",
          description: "Перкуссионный спортивный массажер для тела Qualigo 32 скорости",
          rating: "★★★★☆",
          reviews: "(5)",
          discount: "-58 %"
      },
      {
        imageSrc: "/img/m15.jpg",
        altText: "Athlex",
        price: "6 999 ₽",
        description: "Ручной массажер Athlex",
        rating: "★★★★★",
        reviews: "(5)",
      },
      {
          imageSrc: "/img/m16.jpg",
          altText: "CS Medica",
          originalPrice: "7 168 ₽",
          price: "3 405 ₽",
          description: "Массажер перкуссионный для ног, шеи, спины CS MedicaMassage Gun CS-v10",
          rating: "☆☆☆☆☆",
          reviews: "(0)",
          discount: "-52 %"
      },
      {
          imageSrc: "/img/m17.jpg",
          altText: "Bradex",
          originalPrice: "1 790 ₽",
          price: "1 205 ₽",
          description: "Подушка дорожная акупунктурная Нирвана, чёрная, золотые шипы",
          rating: "★★★★★",
          reviews: "(6)",
          discount: "-30 %"
      },
      {
          imageSrc: "/img/m18.jpg",
          altText: "Torneo",
          originalPrice: "499 ₽",
          price: "249 ₽",
          description: "Массажер электрический Torneo",
          rating: "★★★★☆",
          reviews: "(81)",
          discount: "-50 %"
      },
      {
          imageSrc: "/img/m19.jpg",
          altText: "Demix",
          originalPrice: "999 ₽",
          price: "699 ₽",
          description: "Ручной массажер с двумя ручками Demix",
          rating: "★★★★★",
          reviews: "(14)",
          discount: "-30 %"
      },
      {
          imageSrc: "/img/m20.jpg",
          altText: "ZENET",
          originalPrice: "14 000 ₽",
          price: "13 850 ₽",
          description: "Массажер для ног ZENET",
          rating: "☆☆☆☆☆",
          reviews: "(0)",
          discount: "-1 %"
      },
      {
        imageSrc: "/img/b1.jpg",
        altText: "Stern",
        originalPrice: "32 999 ₽",
        price: "26 399 ₽",
        description: "Велосипед горный Stern Energy 29'",
        rating: "★★★★★",
        reviews: "(9)",
        discount: "-20 %"
      },
      {
        imageSrc: "/img/b2.jpg",
        altText: "Stern",
        price: "99 999 ₽",
        description: "Велосипед горный Stern Motion X 29'",
        rating: "★★★★★",
        reviews: "(1)",
      },
      {
          imageSrc: "/img/b3.jpg",
          altText: "Stern",
          price: "45 999 ₽",
          description: "Велосипед горный Stern Motion 3.0 27.5'",
          rating: "★★★★★",
          reviews: "(3)",
      },
      {
          imageSrc: "/img/b4.jpg",
          altText: "Stern",
          price: "31 999 ₽",
          description: "Велосипед горный Stern Energy 2.0 27.5'",
          rating: "☆☆☆☆☆",
          reviews: "(0)",
      },
      {
          imageSrc: "/img/b5.jpg",
          altText: "Stern",
          price: "29 999 ₽",
          description: "Велосипед горный Stern Energy 1.0 26'",
          rating: "★★★★★",
          reviews: "(1)",
      },
      {
          imageSrc: "/img/b6.jpg",
          altText: "Stern",
          price: "31 999 ₽",
          description: "Велосипед горный Stern Energy 2.0 27.5'",
          rating: "★★★★★",
          reviews: "(4)",
      },
      {
          imageSrc: "/img/b7.jpg",
          altText: "Stern",
          price: "29 999 ₽",
          description: "Велосипед горный Stern Energy 1.0 Sport 26'",
          rating: "☆☆☆☆☆",
          reviews: "(0)",
      },
      {
          imageSrc: "/img/b8.jpg",
          altText: "Stern",
          price: "46 999 ₽",
          description: "Велосипед горный Stern Motion 2.0 29'",
          rating: "★★★★★",
          reviews: "(3)",
      },
      {
          imageSrc: "/img/b9.jpg",
          altText: "Stern",
          price: "29 999 ₽",
          description: "Велосипед горный Stern Energy 1.0 26'",
          rating: "★★★★☆",
          reviews: "(1)",
      },
      {
          imageSrc: "/img/b10.jpg",
          altText: "Stern",
          price: "29 999 ₽",
          description: "Велосипед горный Stern Energy 1.0 26'",
          rating: "★★★☆☆",
          reviews: "(3)",
      },
      {
          imageSrc: "/img/b11.jpg",
          altText: "Stern",
          price: "31 999 ₽",
          description: "Велосипед горный женский Stern Angel 2.0 27.5' 2024",
          rating: "★★★★☆",
          reviews: "(52)",
      },
      {
          imageSrc: "/img/b12.jpg",
          altText: "Stern",
          originalPrice: "29 999 ₽",
          price: "23 999 ₽",
          description: "Велосипед горный женский Stern Angel 1.0 26'",
          rating: "★★★★★",
          reviews: "(2)",
          discount: "-20 %"
      },
  ]

const ITEMS_PER_PAGE = 12;

const parsePrice = (priceStr) => {
  if (typeof priceStr === 'string') {
    return priceStr.replace(/\s|₽/g, '');
  }
  return 0;
};

const parseReviews = (reviewsStr) => {
  const match = reviewsStr.match(/\d+/);
  return match ? parseInt(match[0], 10) : 0;
};

const ProductCard = ({ product, onAdd }) => {
  const {
    imageSrc, altText, price, originalPrice,
    description, rating, reviews, bonus, discount, exclusive, weeklyOffer
  } = product;

  const handleAddToCart = () => {
    const itemToAdd = {
      id: imageSrc,
      img: imageSrc.split("/").pop(),
      price: parsePrice(price),
      title: description,
    };
    onAdd(itemToAdd);
  };

  return (
    <div className="product-card">
      <img src={imageSrc} alt={altText} className="product-image" />
      <div className="badge-container">
        {discount && <span className="badge discount">{discount}</span>}
        {weeklyOffer && <span className="text-muted weekly-offer">{weeklyOffer}</span>}
        {bonus && <span className="badge bonus">{bonus}</span>}
        {exclusive && <span className="badge exclusive">{exclusive}</span>}
      </div>
      <div className="product-info">
        {originalPrice && <span className="original-price">{originalPrice}</span>}
        <h3 className="price">{price}</h3>
        <p className="description">{description}</p>
      </div>
      <div className="rating-container">
        <span className="rating">{rating}</span>
        <span className="text-muted reviews">{reviews}</span>
      </div>
      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        +
      </button>
    </div>
  );
};

const SORT_OPTIONS = {
  PRICE_ASC: "PRICE_ASC",
  PRICE_DESC: "PRICE_DESC",
  REVIEWS_DESC: "REVIEWS_DESC",
};

const ProductGrid = ({ onAdd }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState(null);

  const sortProducts = (products, option) => {
    const sorted = [...products];
    switch (option) {
      case SORT_OPTIONS.PRICE_ASC:
        return sorted.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
      case SORT_OPTIONS.PRICE_DESC:
        return sorted.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
      case SORT_OPTIONS.REVIEWS_DESC:
        return sorted.sort((a, b) => parseReviews(b.reviews) - parseReviews(a.reviews));
      default:
        return sorted;
    }
  };

  const sortedProducts = sortProducts(PRODUCTS, sortOption);

  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = sortedProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="wrapper-items-sport">
      <div className="page-title-sports">Все товары</div>
      <div style={{ display: 'grid', gap: '25px' }}>
        <div style={{ minWidth: '200px' }}>
          <h4>Сортировать:</h4>
          <div className='sort-buttons'>
              <button onClick={() => setSortOption(SORT_OPTIONS.PRICE_ASC)}>По цене ↑</button><br />
              <button onClick={() => setSortOption(SORT_OPTIONS.PRICE_DESC)}>По цене ↓</button><br />
              <button onClick={() => setSortOption(SORT_OPTIONS.REVIEWS_DESC)}>По популярности</button><br />
              <button onClick={() => setSortOption(null)}>По умолчанию</button>
            </div>
        </div>

        <div style={{ flexGrow: 1 }}>
          <div className="product-grid">
            {currentProducts.map((product, index) => (
              <ProductCard key={index} product={product} onAdd={onAdd} />
            ))}
          </div>

          <div className="pagination">
            {currentPage > 1 && <button onClick={handlePrev}>←</button>}
            <span>Страница {currentPage} из {totalPages}</span>
            {currentPage < totalPages && <button onClick={handleNext}>→</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;