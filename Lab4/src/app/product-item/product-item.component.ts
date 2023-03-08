import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  itemList = [
    {
      "Name":"IHE Dog Bark Collar for Small Medium Large Dogs,No Bark Collar with No Shock Mode,Rechargeable Anti Barking Collar with Beep Vibration Harmless Shock",
      "Description":"Upgraded Smart Bark Detecting Technology - Our Smart and Upgraded Chip Microprocessor will detect only your dogâ€s barking and work more precisely and faster, prevent triggering device from other dogsâ€ barking or noise.\n" +
          "Suitable for All Dog Sizes of All Breeds - The dog collar is suitable for small, medium and large dogs. The length of the conductive probe cover can be changed, and can be replaced according to the length of the dog hair. It can better protect your dogâ€s skin. Adjustable collar design, suitable for most dogs whose neck length does not exceed 60 cm(23.6 in)",
      "Rating":4.9,
      "Link":"https://www.amazon.com/Collar-Rechargeable-Barking-Vibration-Harmless/dp/B09P9Z2KWX?ref=dlx_deals_gd_dcl_img_4_7afa60b2_dt_sl15_b4",
      "imgSrc":["https://m.media-amazon.com/images/I/71H-52raPWL._AC_SL1500_.jpg",
                "https://m.media-amazon.com/images/I/81eAVEy3FmL._AC_SL1500_.jpg",
                "https://m.media-amazon.com/images/I/715IW8A5gLL._AC_SL1500_.jpg"],
      "imgCnt":0
    },
    {
      "Name":"Pokémon Legends: Arceus - Nintendo Switch",
      "Description":"tudy Pokémon behaviors, sneak up on them, and toss a well-aimed Poké Ball to catch them\n" +
          "Unleash moves in the speedy agile style or the powerful strong style in battles\n" +
          "Travel to the Hisui region—the Sinnoh of old—and build the region’s first Pokédex\n" +
          "Learn about the Mythical Pokémon Arceus, the key to this mysterious tale\n",
      "Rating":4.8,
      "Link":"https://www.amazon.com/Pokemon-Legends-Arceus-Nintendo-Switch/dp/B0914YGQSH/ref=lp_16225016011_1_4",
      "imgSrc":["https://m.media-amazon.com/images/I/71HYKF4rO9L._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71CbaWAf7ZL._SL1500_.jpg",
                "https://m.media-amazon.com/images/I/71Cg2i6K-YL._SL1500_.jpg"],
      "imgCnt":0
    },
    {
      "Name":"KAXIMEII Carrying Case for Nintendo Switch OLED,8 in 1 Switch OLED Accessories Bundle with Thumb Cap, Crystal Protective Case for Console & J-Con,Screen Protector,Hard Material Storage Bag,-Silver",
      "Description":"21.5 inches Full HD (1920 x 1080) widescreen IPS display",
      "Rating":5,
      "Link":"https://www.amazon.com/dp/B09JZSNDN1/ref=sspa_dk_detail_0?psc=1&pd_rd_i=B09JZSNDN1&pd_rd_w=GG65I&pf_rd_p=b9951ce4-3bd8-4b04-9123-0fda35d6155e&pd_rd_wg=mtjrD&pf_rd_r=XGAE0PXY5TQWPWF9EEYW&pd_rd_r=19f24097-535e-496c-b49c-30f4c88cecbe&s=videogames&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyODhRM0dGUzg0RU9SJmVuY3J5cHRlZElkPUEwNzY3OTMzMVpQU1YwNkZCTzlNWCZlbmNyeXB0ZWRBZElkPUEwNDQ5OTY4M1MxQlozTEdVTjFOVSZ3aWRnZXROYW1lPXNwX2RldGFpbCZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
      "imgSrc":["https://m.media-amazon.com/images/I/71tQwNpLxqL._AC_SL1200_.jpg"],
      "imgCnt":0
    },
    {
      "Name":"TALK WORKS Tennis Racket for Nintendo Switch 2 Pack - Joy Con Controller Grip Sports Game Accessories for Mario Tennis Aces",
      "Description":"ENNIS RACKET FOR NINTENDO SWITCH: Joy Con controller adapter for Mario Tennis Aces Game (Sold as 2 Pack) - also features an adjustable wrist strap for added security so the racket doesn't go flying\n" +
          "NINTENDO SWITCH MARIO TENNIS RACKET: For use with joy con controllers to transform into the tennis racket needed to play Mario tennis aces - joycon easily clicks in and out of the racket for quickly changing up switch accessories between games\n" +
          "COMFORT FIT: This joy con controller adapter tennis racket has the perfect fit for users of all ages - not too big or too small and fits comfortably in your hand - joycons fit securely in the rackets and will not pop out while playing in swing mode\n" +
          "FUN FOR THE ENTIRE FAMILY: The beauty of the Switch is that anyone can play almost anywhere - Nintendo Switch tennis racket and other switch accessories will entertain the whole family for hours with games like Mario Ten Aces\n" +
          "TALK WORKS GAME ACCESSORIES: Additional accessories for Nintendo Switch by TALK WORKS include a case, screen protector, comfort grip controller, travel carrying case, joycon charging dock, cables and Mario kart accessories (Steering Wheel, Tennis Racket)",
      "Rating":4.3,
      "Link":"https://www.amazon.com/Nintendo-Switch-Tennis-TalkWorks-Controller-Accessories/dp/B07R9M879H/ref=pd_pb_ss_no_hpb_14/143-2888808-8008609?pd_rd_w=MHuPd&pf_rd_p=45f92aae-3fbe-4e26-9929-951264041217&pf_rd_r=CJY28T37EYYAX389VQA4&pd_rd_r=d5ae25f0-b459-4e17-9b2d-ff6768ea4416&pd_rd_wg=UVgwi&pd_rd_i=B07R9M879H&psc=1",
      "imgSrc":["https://m.media-amazon.com/images/I/71w-aiStPlL._SL1500_.jpg"],
      "imgCnt":0
    },
    {
      "Name":"Fiodio Mechanical Gaming Keyboard, LED Rainbow Gaming Backlit, 104 Anti-ghosting Keys, Quick-Response Black Switches, Multimedia Control for PC and Desktop Computer, with Removable Hand Rest",
      "Description":"Black Switches: If you’re into fast-paced games such as first-person shooters, linear switches will give you an edge. There is no dome to compress or click to overcome, the keystroke is consistent and smooth that offers unmistakable feedback when pressed.\n" +
          "Gorgeous Full-Spectrum Backlit Design: This mechanical gaming keyboard features 3 DIY backlight modes and 19 fantastic backlight modes, streaming, racing, breathing and so on, bright lighting effects offer immersing gaming experience to you. The brightness and lighting speed of the keyboard is available to change, you can choose the effect as you like.\n" +
          "Full 104-Key Anti-Ghosting for Smooth Gaming: 104-key rollover with anti-ghosting design ensures the most accuracy of your commands in any use case scenario, and will never miss a single key-press or confuse your commands under any conditions.\n" +
          "Metal + ABS Construction for Extended Durability: Different from other plastic keyboards, this mechanical gaming keyboard is designed with metal superstructure, which makes the keyboard more texture and more durable. Ergonomic honeycomb wrist rest- to relieve discomfort or fatigue of your wrist for long hours working or gaming.\n" +
          "Splash Resistant Design: Thanks to its spill-resistant design, you do not need to worry about the trouble caused by accidental spills of water any more.\n" +
          "Unrivalled Durability: Tested over 10, 000, 000 keystrokes, the keyboard is extremely durable to ensure longer service life.\n" +
          "Great Compatibility: Windows 2000 / 2003 / XP / Vista / Win7 / Win8 / Win10, compatible with any type / version cpu.\n" +
          "What You Get: Fiodio F-GKB100 gaming keyboard, user manual.\n" +
          "Compare with similar items\n" +
          "Note: Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing.",
      "Rating":4.7,
      "Link":"https://www.amazon.com/FIODIO-Mechanical-Anti-ghosting-Quick-Response-Multimedia/dp/B086168SJT/ref=sr_1_1_sspa?keywords=gaming%2Bkeyboard&pd_rd_r=69f16bc5-ab55-4126-bda9-127e3dc15a4f&pd_rd_w=OX5Gt&pd_rd_wg=KtXpw&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=0TBX1RR5XW1RN4VXPVWG&qid=1647135512&sr=8-1-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzMEdNSTYxSkFXVE8mZW5jcnlwdGVkSWQ9QTAyMTUxNjUxREVESjhUUVU4TDAxJmVuY3J5cHRlZEFkSWQ9QTAxODEzMjZYSFJOWExLWU9FOUQmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&th=1",
      "imgSrc":["https://m.media-amazon.com/images/I/71pPm31LFkS._AC_SL1500_.jpg"],
      "imgCnt":0
    },
    {
      "Name":"Gaming Keyboard and Mouse and Mouse pad and Gaming Headset, Wired LED RGB Backlight Bundle for PC Gamers and Xbox and PS4 Users - 4 in 1 Edition Hornet RX-250",
      "Description":"Gaming Mouse and Keyboard and around the Head Gaming Headset and Mouse Mat Complete Starter pack all in one great Gift box (This Bundle includes FOUR items)\n" +
          "PC Gaming, PS4 Gaming, Xbox Gaming, Retro Pie Gaming or can be used for normal day to day Computing\n" +
          "RGB lights for ultimate PC Gaming Experience\n" +
          "Gaming Keyboard and mouse come with 3 rotating colours and breathing mode, 4 colours circular breathing LED Gaming mouse, 4 adjustable DPI (1200, 1600, 2400, 3200). wired membrane gaming Keyboard with multi-coloured LED backlighting, anti-ghosting with 19 key rollover, smooth keystrokes allowing for rapid action in silence, media control keys, gaming Mode function keys, and adjustable legs for wrist comfort\n" +
          "Gaming Headset included has stereo sound for deep bass and crisp highs, soft earpads for prolonged sessions, foldable Microphone with Volume cord controls and a versatile 3.5mm audio jack",
      "Rating":4.4,
      "Link":"https://www.amazon.com/dp/B07TVK8WJP/ref=sspa_dk_detail_1?psc=1p13NParams&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEySldJNVBEQk5IN1RUJmVuY3J5cHRlZElkPUEwMTIzMjIyMzJZU0pDUTlFNDM3RiZlbmNyeXB0ZWRBZElkPUEwMjYxOTgzM0RPTFUxRUszREdKOCZ3aWRnZXROYW1lPXNwX2RldGFpbDImYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl",
      "imgSrc":["https://m.media-amazon.com/images/I/811W225fOUL._AC_SL1500_.jpg"],
      "imgCnt":0
    },
    {
      "Name":"Leather Tool Roll Up Pouch - Leather Tool Wrench Roll / Chisel Bag by Rustic Town",
      "Description":"LARGE CAPACITY TOOL ROLL: With 10 tool slots, you can put a variety of small to medium-sized hand tools such as chisels, drivers, wrenches, screwdrivers, pliers, Allen wrench, and more, the best home for your favourite tools. The longest tool that fits measures 9 inches.\n" +
          "COMPACT AND EASY TO CARRY - Measures 16\" X 10\" when unrolled. Rolls up to a compact size for easy carrying. Perfect kit for a wood carving hobbyists to store his precious chisels or serve as a tool kit for other profession such as contractor, HVAC repairman, plumber, framer, electrician, or cable & audio visual installer.\n" +
          "COMPACT & LIGHTWEIGHT: The lightweight Full Grain Leather Tool Roll is perfect for conveniently packing away in your bag for when you’re on the go. Offering style and protection, the Tool Roll folds up neatly and securely so you don’t have to worry.\n" +
          "SIMPLE AND FUNCTIONAL DESIGN, MAKES A GREAT GIFT: This makes an excellent gift for your friend, loved ones and family. Makes a great gift for anyone and everyone, from those who enjoy a bit of DIY around the house, to the professional craftsmen and women. This Tool Roll also serves for other trades, it’s great for those who love fishing, great for chefs, excellent for storing your tools on the go or travelling, perfect for your wrenches and tools for your motorbike or car, you name it.",
      "Rating":3.9,
      "Link":"https://www.amazon.com/Leather-Tool-Roll-Up-Pouch/dp/B07NNS1G8N?ref_=Oct_DLandingS_D_3b0b9294_61&smid=A11ZONG3SFCFWG",
      "imgSrc":["https://m.media-amazon.com/images/I/81F84AJQG2L._AC_SL1500_.jpg"],
      "imgCnt":0
    },
    {
      "Name":"FASITE Tool Roll Organizer - 35 Pockets Roll Up Bag Wrench/Pliers Pouch for Craftwork Handyman Electrician Plumber Mechanic, Black",
      "Description":"20 pockets to organize and protect smaller tools or Accessories.15 small side sockets pockets to hold other tiny tools and Accessories. With heavy-duty elastic strap keeps tools in place.\n" +
          "600D polyester fabric is extra strong, durable, the seams are strong and the canvas is thick.\n" +
          "Two strap closure fastens your pouch when not in use. It is easy to roll up and has a handle on the top for easy carrying.\n" +
          "Unfold dimensions (L x W): 23’’ ×13.4’’.\n" +
          "Note: tools not included.",
      "Rating":3.5,
      "Link":"https://www.amazon.com/FASITE-PTN028C-Pockets-Socket-Pouch/dp/B01M1FKMW2/ref=pb_allspark_dp_sims_pao_desktop_session_based_5/143-2888808-8008609?pd_rd_w=lNqd1&pf_rd_p=6b5008ac-c24a-4aea-a3ea-015a531184f5&pf_rd_r=HGCHRJFDHNRHZY60BC8R&pd_rd_r=5e054165-3182-455f-9d53-2df47c2b0142&pd_rd_wg=2B4SC&pd_rd_i=B01M1FKMW2&psc=1",
      "imgSrc":["https://m.media-amazon.com/images/I/41HEz5nHPBL._AC_.jpg"],
      "imgCnt":0
    },
    {
      "Name":'Lenovo Yoga 9i 14 2-in-1 14" FHD Touch-Screen -11th Gen Intel Evo Platform i7-1185G7-16GB DDR4 - 512GB SSD',
      "Description":"11th Generation Intel Core i7-1185G7 Processor (3.00 GHz, up to 4.80 GHz with Turbo Boost, 4 Cores, 8 Threads, 12 MB Cache); 16GB Soldered LPDDR4x-4266 Memory; 512GB SSD M.2 2280 PCIe 3.0x4 NVMe",
      "Rating":"None",
      "Link":"https://www.amazon.com/Lenovo-Touch-Screen-Platform-i7-1185G7-16GB-Built/dp/B08QH1C5PY/ref=sr_1_11?dchild=1&fst=as%3Aoff&pd_rd_r=bc0a545d-d07d-4235-85cb-6d7d7e109abe&pd_rd_w=Q3DE9&pd_rd_wg=yAzOZ&pf_rd_p=83ab1c34-7657-4d09-b72d-0a3e4b634b1d&pf_rd_r=XF8608SWWP17WE2NW23K&qid=1602294815&rnid=16225007011&s=computers-intl-ship&sr=1-11",
      "imgSrc":["https://images-na.ssl-images-amazon.com/images/I/41Rjr%2B67OtL._AC_.jpg"],
      "imgCnt":0
    },
    {
      "Name":"Mc-Core Products McCore Adjustable dumbbell set - 11 22 Lbs dumbbells, weights for home or office use, Portable sets, Soft Grip Weight comfort, dumbbells set,Dumb bells",
      "Description":"44 Pounds: Both dumbells are adjustable up to 22 Lbs, weighing 40 Lbs total so you can replace a good amount of dumbbells to save space! The adjustment intervals are as follows: 11lb, 15.4lb, 17.6lb, 22lb, allowing them to total up to 44 Lbs\n" +
          "Easy Weight Selection: Screw off each weight plate to reduce the weight, and screw them back on to increase the weight of the dumbbell set.\n" +
          "Stylish Design: Stainless steel finish and coloring of these adjustable dumbbells makes them the perfect fit for any home gym owner who wants the best looking equipment.\n" +
          "Durable: Made of a very durable stainless steel and rubber, these dumbbells should look brand new for a long time\n" +
          "100% Customer Satisfaction Guarantee: Please contact us with any questions you may have",
      "Rating":5,
      "Link":"https://www.amazon.com/Mc-Core-Products-McCore-Adjustable-dumbbell/dp/B09FCVVQKV/ref=sr_1_4?keywords=work+from+home+fitness&pd_rd_r=5e80c2e4-abe1-42f7-8ca5-2de23b8648fd&pd_rd_w=vZRBJ&pd_rd_wg=GG4i0&pf_rd_p=2c73d1ae-9178-422f-ae3b-1b5628bd95bb&pf_rd_r=ZMWH10GH7HSME5H2E3JH&qid=1647135982&sr=8-4",
      "imgSrc":["https://m.media-amazon.com/images/I/61UsMSBV1NL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81vrhM6rIKL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71txyfwgXmL._AC_SL1500_.jpg"],
      "imgCnt":0
    }
  ]

  goBack(i : number){
    if(this.itemList[i]["imgSrc"].length > 1){
      if(this.itemList[i]["imgCnt"] == 1 || this.itemList[i]["imgCnt"] == 2){
        this.itemList[i]["imgCnt"]--;

      }else if(this.itemList[i]["imgCnt"] == 0){
        this.itemList[i]["imgCnt"] = 2;
      }
    }
  }

  goForward(i : number){
    if(this.itemList[i]["imgSrc"].length > 1){
      if(this.itemList[i]["imgCnt"] == 0 || this.itemList[i]["imgCnt"] == 1){
        this.itemList[i]["imgCnt"]++;

      }else if(this.itemList[i]["imgCnt"] == 2){
        this.itemList[i]["imgCnt"] = 0;
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}