export interface Product {
    id: number;
    price: number;
    rating: number;
    name: string;
    description: string;
    image: string;
    link: string;
    like: number
    categoryId: number
    //      {id: 1, title: 'phones'},
    //     {id: 2, title: 'headphones'},
    //     {id: 3, title: 'laptops'},
    //     {id: 4, title: 'televisions'}
}

export const products = [
    {
        id: 1,
        price: 634000,
        like: 123,
        rating: 4.8,
        name: 'Smartphone Apple iPhone 14 Pro 256Gb purple',
        description: `nFC Technology: Yes
        color: purple
        screen type: OLED, Super Retina XDR display, always on
        diagonal: 6.1 inch
        rAM size: 6 GB
        processor: 6-core Apple A16 Bionic
        built-in memory: 256 GB
        battery capacity: 3125 mAh`,
        categoryId: 1,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4d/h62/62948396728350/apple-iphone-14-pro-128gb-fioletovyj-106363319-1.jpg',
        link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-256gb-fioletovyi-106363319/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIjfRcWuFftS3StWbXTm60n0OI7NzMi1YcoQu0kVnOQ0YGBllxklJWhoCtEkQAvD_BwE#!/item',
    },
    {
        id: 2,
        price: 120735,
        like: 1045,
        rating: 4.8,
        name: 'Headphones Apple AirPods Pro 2nd generation white',
        description: `type: headphones
        type: in-ear
        connection: wireless
        type of acoustic design: closed
        attachment type: no attachment
        active Noise Cancellation: Yes
        microphone: Yes`,
        categoryId: 2,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hba/hf8/62281477259294/apple-airpods-pro-2nd-generation-belyj-106362968-1.jpg',
        link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-106362968/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIjfRcWuFftS3StWbXTm60n0OI7NzMi1YcoQu0kVnOQ0YGBllxklJWhoCtEkQAvD_BwE#!/item',
    },
    {
        id: 3,
        price: 178656,
        like: 1024,
        rating: 4.2,
        name: 'TV LG 43LM5772PLA 109 cm black',
        description: `type: LED TV
        diagonal: 42.5 inch
        resolution: 1920x1080
        hD Support: 1080p Full HD
        smart TV Technology: Yes
        wiFi: Yes
        inputs: AV, Component, HDMI, Ethernet (RJ-45), USB`,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he5/he4/49320430370846/lg-43lm5772pla-108-sm-cernyj-101293496-1-Container.jpg',
        categoryId: 4,
        link: 'https://kaspi.kz/shop/p/lg-43lm5772pla-109-sm-chernyi-101293496/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIjfRcWuFftS3StWbXTm60n0OI7NzMi1YcoQu0kVnOQ0YGBllxklJWhoCtEkQAvD_BwE#!/item',
    },
    {
        id: 4,
        price: 481990,
        like: 12334,
        rating: 5.0,
        name: 'Notebook ASUS ZenBook UX3402ZA-KM302W 90NB0WC1-M00NP0 blue',
        description: `screen diagonal: 14 inch
        processor: Intel Core i5-1240P
        video Card: Intel Iris Xe Graphics
        rAM size: 8 GB
        hard disk type: SSD
        total storage capacity: 512 GB`,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdd/h66/62068914552862/asus-zenbook-14-oled-ux3402za-km302w-90nb0wc1-m00np0-sinij-106242913-1.jpg',
        categoryId: 3,
        link: 'https://kaspi.kz/shop/p/asus-zenbook-ux3402za-km302w-90nb0wc1-m00np0-sinii-106242913/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIjfRcWuFftS3StWbXTm60n0OI7NzMi1YcoQu0kVnOQ0YGBllxklJWhoCtEkQAvD_BwE#!/item',
    },
    {
        id: 5,
        price: 88675,
        like: 99,
        rating: 3.1,
        name: 'Smartphone Samsung Galaxy A13 4 GB/128 GB black',
        description: `nFC Technology: Yes
        black color
        screen type: PLS TFT LCD touch, multi-touch
        diagonal: 6.6 inch
        rAM size: 4 GB
        processor: 8-core Exynos 850
        built-in memory: 128 GB
        battery capacity: 5000 mAh`,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h90/h49/49613711966238/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-1.jpg',
        categoryId: 1,
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIjfRcWuFftS3StWbXTm60n0OI7NzMi1YcoQu0kVnOQ0YGBllxklJWhoCtEkQAvD_BwE#!/item',
    },
    {
        id: 6,
        price: 148467,
        like: 97,
        rating: 2.5,
        name: 'TV TCL 43P615 109 cm black',
        description: `type: LED TV
        diagonal: 43 inch
        resolution: 3840x2160
        hD support: 4K HDR
        smart TV Technology: Yes
        wiFi: Yes
        inputs: audio, ,optical, ,VGA, ,HDMI, ,USB, ,Bluetooth`,
        categoryId: 4,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd2/h67/46526308188190/tcl-43p615-cernyj-102569498-1.jpg',
        link: 'https://kaspi.kz/shop/p/tcl-43p615-109-sm-chernyi-102569498/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIjfRcWuFftS3StWbXTm60n0OI7NzMi1YcoQu0kVnOQ0YGBllxklJWhoCtEkQAvD_BwE#!/item',
    },
    {
        id: 7,
        price: 369265,
        like: 9789,
        rating: 4.9,
        name: 'Headphones Apple AirPods Max silver',
        description: `type: headset
        style: overhead
        connection: wireless
        type of acoustic design: closed
        attachment type: headband
        active Noise Cancellation: Yes
        microphone: Yes`,
        categoryId: 2,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0f/h18/33524667154462/apple-airpods-max-serebristyj-100949286-1-Container.jpg',
        link: 'https://kaspi.kz/shop/p/apple-airpods-max-serebristyi-100949286/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIjfRcWuFftS3StWbXTm60n0OI7NzMi1YcoQu0kVnOQ0YGBllxklJWhoCtEkQAvD_BwE#!/item',
    },
    {
        id: 8,
        price: 488999,
        like: 454,
        rating: 4.5,
        name: 'Notebook Apple MacBook Air 13 MGND3 golden',
        description: `screen diagonal: 13.3 inch
        processor: Apple M1
        video card: Apple M1 8 core
        rAM size: 8 GB
        hard disk type: SSD
        total storage capacity: 256 GB`,
        categoryId: 3,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfd/h54/33286638272542/apple-macbook-air-2020-13-3-mgnd3-zolotistyj-100797576-1-Container.jpg',
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgnd3-zolotistyi-100797576/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIjfRcWuFftS3StWbXTm60n0OI7NzMi1YcoQu0kVnOQ0YGBllxklJWhoCtEkQAvD_BwE#!/item',
    },
    {
        id: 9,
        price: 39890,
        like: 874,
        rating: 4.7,
        name: 'Smartphone Samsung Galaxy A03 Core 2 GB/32 GB green',
        description: `nFC Technology: No
        green color
        screen Type: PLS TFT LCD
        diagonal: 6.5 inch
        rAM size: 2 GB
        processor: 8-core Unisoc SC9863A
        built-in memory: 32 GB
        battery capacity: 5000 mAh`,
        categoryId: 1,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8b/h11/52423990575134/samsung-galaxy-a03-core-2-gb-32-gb-zelenyj-105772575-1.jpg',
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-a03-core-2-gb-32-gb-zelenyi-105772575/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIjfRcWuFftS3StWbXTm60n0OI7NzMi1YcoQu0kVnOQ0YGBllxklJWhoCtEkQAvD_BwE#!/item',
    },
    {
        id: 10,
        price: 204900,
        like: 0,
        rating: 4.0,
        name: 'Smartphone Google Pixel 6a 6 GB/128 GB black',
        description: `nFC Technology: Yes
        black color
        screen type: Super AMOLED, capacitive, multi-touch
        diagonal: 6.2 inch
        rAM size: 6 GB
        processor: 8 cores (2x2.80 GHz Cortex-X1 and 2x2.25 GHz Cortex-A76 and 4x1.80 GHz Cortex-A55)
        built-in memory: 128 GB
        battery capacity: 4800 mAh`,
        categoryId: 1,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h81/h12/62084243226654/google-pixel-6a-6-gb-128-gb-chernyi-106250318-1.jpg',
        link: 'https://kaspi.kz/shop/p/google-pixel-6a-6-gb-128-gb-chernyi-106250318/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIjfRcWuFftS3StWbXTm60n0OI7NzMi1YcoQu0kVnOQ0YGBllxklJWhoCtEkQAvD_BwE#!/item',
    },
    {
        id: 11,
        price: 128350,
        like: 8798,
        rating: 2.5,
        name: 'Smartphone Xiaomi Redmi Note 10 Pro 8 GB/256 GB gray',
        description: `nFC Technology: Yes
        color: gray
        screen type: color AMOLED, touch
        diagonal: 6.67 inch
        rAM size: 8 GB
        processor: 8-core Qualcomm Snapdragon 732G
        built-in memory: 256 GB
        battery capacity: 5020 mAh`,
        categoryId: 1,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/h27/64487158087710/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg',
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIjfRcWuFftS3StWbXTm60n0OI7NzMi1YcoQu0kVnOQ0YGBllxklJWhoCtEkQAvD_BwE#!/item',
    },
    {
        id: 12,
        price: 23935,
        like: 453,
        rating: 4.9,
        name: 'Headphones JBL Tune 510BT black',
        description: `type: headset
        style: overhead
        connection: wireless
        type of acoustic design: closed
        attachment type: headband
        active Noise Cancellation: No
        microphone: Yes`,
        categoryId: 2,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3d/h1d/33957524537374/jbl-tune-510bt-cernyj-101420081-1-Container.jpg',
        link: 'https://kaspi.kz/shop/p/jbl-tune-510bt-chernyi-101420081/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIjfRcWuFftS3StWbXTm60n0OI7NzMi1YcoQu0kVnOQ0YGBllxklJWhoCtEkQAvD_BwE#!/item',
    },
    {
        id: 13,
        price: 12252,
        like: 434,
        rating: 4.6,
        name: 'Headphones Realme Buds T100 black',
        description: `type: headset
        type: in-ear
        connection: wireless
        type of acoustic design: closed
        attachment type: no attachment
        active Noise Cancellation: Yes
        microphone: Yes`,
        categoryId: 2,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6b/hd2/65147416936478/realme-buds-t100-chernyi-107357596-1.jpg',
        link: 'https://kaspi.kz/shop/p/realme-buds-t100-chernyi-107357596/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIjfRcWuFftS3StWbXTm60n0OI7NzMi1YcoQu0kVnOQ0YGBllxklJWhoCtEkQAvD_BwE#!/item',
    },
    {
        id: 14,
        price: 12990,
        like: 9,
        rating: 1.5,
        name: 'Headphones Hyper BE62 white',
        description: `type: headset
        type: in-ear
        connection: wireless
        type of acoustic design: open
        attachment type: no attachment
        active Noise Cancellation: No
        microphone: Yes`,
        categoryId: 2,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9c/h82/46911447728158/hyper-be62-belyi-102749658-1.jpg',
        link: 'https://kaspi.kz/shop/p/hyper-be62-belyi-102749658/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIjfRcWuFftS3StWbXTm60n0OI7NzMi1YcoQu0kVnOQ0YGBllxklJWhoCtEkQAvD_BwE#!/item',
    },
    {
        id: 15,
        price: 626500,
        like: 789,
        rating: 4.8,
        name: 'Notebook Apple MacBook Air 13 MLXW3 gray',
        description: `screen Diagonal: 13.6 inch
        processor: Apple M2
        video card: Apple M2 8-Core
        rAM size: 8 GB
        hard disk type: SSD
        total storage capacity: 256 GB`,
        categoryId: 3,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h97/he9/52679187890206/noutbuk-apple-macbook-air-m2-8-cpu-8-gpu-256gb-space-gray-105933794-1.jpg',
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mlxw3-seryi-105933794/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIjfRcWuFftS3StWbXTm60n0OI7NzMi1YcoQu0kVnOQ0YGBllxklJWhoCtEkQAvD_BwE#!/item',
    },
    {
        id: 16,
        price: 657971,
        like: 990,
        rating: 4.9,
        name: 'Notebook Acer Nitro 5 AN515-58-74XD NH.QFMER.00D black',
        description: `screen diagonal: 15.6 inch
        processor: Intel Core i7 12700H
        video card: NVIDIA GeForce RTX 3060
        rAM size: 16 GB
        hard disk type: SSD
        total storage capacity: 512 GB`,
        categoryId: 3,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/heb/h3d/62755167404062/acer-nitro-5-an515-58-74xd-nh-qfmer-00d-cernyj-106607259-1.jpg',
        link: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-58-74xd-nh-qfmer-00d-chernyi-106607259/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIjfRcWuFftS3StWbXTm60n0OI7NzMi1YcoQu0kVnOQ0YGBllxklJWhoCtEkQAvD_BwE#!/item',
    },
    {
        id: 17,
        price: 299900,
        like: 354,
        rating: 4.3,
        name: 'Notebook HP Europe Pavilion 15S-EQ3068CI 725Z0EA silver',
        description: `screen diagonal: 15.6 inch
        processor: AMD Ryzen 5 5625U
        video card: AMD Radeon Graphics
        rAM size: 8 GB
        hard disk type: SSD
        total storage capacity: 512 GB`,
        categoryId: 3,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha5/h3d/64208771874846/hp-europe-pavilion-15s-eq3068ci-725z0ea-serebristyi-107198147-1.jpg',
        link: 'https://kaspi.kz/shop/p/hp-europe-pavilion-15s-eq3068ci-725z0ea-serebristyi-107198147/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIjfRcWuFftS3StWbXTm60n0OI7NzMi1YcoQu0kVnOQ0YGBllxklJWhoCtEkQAvD_BwE#!/item',
    },
    {
        id: 18,
        price: 74990,
        like: 4563,
        rating: 4.4,
        name: 'TV DEXP H32H8000Q black',
        description: `type: LED TV
        diagonal: 32 inch
        resolution: 1366x768
        hD support: 1080i HD
        smart TV Technology: Yes
        wiFi: Yes
        inputs: AV, ,HDMI, ,Ethernet (RJ-45), ,USB, ,Bluetooth`,
        categoryId: 4,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3a/h54/68081499373598/dexp-h32h8000q-chernyi-108526272-1.jpg',
        link: 'https://kaspi.kz/shop/p/dexp-h32h8000q-chernyi-108526272/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIjfRcWuFftS3StWbXTm60n0OI7NzMi1YcoQu0kVnOQ0YGBllxklJWhoCtEkQAvD_BwE#!/item',
    },
    {
        id: 19,
        price: 204990,
        like: 345,
        rating: 4.5,
        name: 'TV Qwatt Q55YK-MB 140 cm black',
        description: `type: LED TV
        diagonal: 55 inch
        resolution: 3840x2160
        hD support: 4K UHD
        smart TV Technology: Yes
        wiFi: Yes
        inputs: Bluetooth`,
        categoryId: 4,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h75/h6c/51443505922078/qwatt-q55yk-mb-chernyi-103717670-1.jpg',
        link: 'https://kaspi.kz/shop/p/qwatt-q55yk-mb-140-sm-chernyi-103717670/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIjfRcWuFftS3StWbXTm60n0OI7NzMi1YcoQu0kVnOQ0YGBllxklJWhoCtEkQAvD_BwE#!/item',
    },
    {
        id: 20,
        price: 276855,
        like: 8798,
        rating: 4.3,
        name: 'TV Samsung UE50AU7100UXCE 127 cm black',
        description: `type: LED TV
        diagonal: 50 inch
        resolution: 3840x2160
        hD support: 4K UHD
        smart TV Technology: Yes
        wiFi: Yes
        inputs: HDMI, ,Ethernet (RJ-45), ,USB`,
        categoryId: 4,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2a/h0c/49520169713694/samsung-ue50au7100uxce-127-sm-cernyj-101557919-1-Container.jpg',
        link: 'https://kaspi.kz/shop/p/samsung-ue50au7100uxce-127-sm-chernyi-101557919/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIjfRcWuFftS3StWbXTm60n0OI7NzMi1YcoQu0kVnOQ0YGBllxklJWhoCtEkQAvD_BwE#!/item',
    },
];

