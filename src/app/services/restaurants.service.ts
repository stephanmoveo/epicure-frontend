import { Injectable } from '@angular/core';
import { restuarantsInterface } from '../shared/interfaces/restuarantsInterface';
import { IconsService } from './icons.service';
@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(public iconsService: IconsService) { }

  restaurantsArr = [
    {
      restArr: [
        {
          restName: 'Claro',
          img: 'assets/img/Rests/All/claro.jpg',
          chef: 'Ren Shmueli',
          dishes: []
        },
        {
          restName: 'Lumina',
          img: 'assets/img/Rests/All/mizlala-gret-mullet-fillet.jpg',
          chef: 'Meir Adoni',
          dishes: []
        },
        {
          restName: 'Tiger Lilly',
          img: 'assets/img/Rests/All/tiger-lili.jpg',
          chef: 'Ren Shmueli',
          dishes: [
            {
              dishName: 'Pad Ki Mao',
              img: 'assets/img/Rests/All/pad-ki-mao.jpg',
              description: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
              logo: this.iconsService.chilyIcon,
              price: '88'
            }
          ]
        },
        {
          restName: 'Kab Kem',
          img: '',
          chef: '',
          dishes: [
            {
              dishName: 'Garbanzo Frito',
              img: 'assets/img/Rests/All/kab-kem.jpg',
              description: "Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
              logo: '',
              price: '98'
            }
          ]
        },
        {
          restName: 'Popina',
          img: '',
          chef: '',
          dishes: [
            {
              dishName: 'Smoked Pizza',
              img: 'assets/img/Rests/All/popina.jpg',
              description: 'Basil dough, cashew "butter", demi-glace, bison & radish',
              logo: this.iconsService.leafIcon,
              price: '65'
            }
          ]
        }]
    },
    {
      chefs: [
        {
          chef: 'Yossi Shitrit',
          img: 'assets/img/Rests/All/yossi.jpg',
          description: "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each andevery dish.",
          chefRest: [
            { restName: 'Onza', img: 'assets/img/Rests/All/onza.jpg' },
            { restName: 'Kitchen Market', img: 'assets/img/Rests/All/kitchen-market.jpg' },
            { restName: 'Mashya', img: 'assets/img/Rests/All/mashya.jpg' },
          ]
        }
      ]
    }
  ]

}
