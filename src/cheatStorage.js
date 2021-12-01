// restaurantsArr: restuarantsInterface = {
//     restArr: [
//       {
//         restName: 'Claro',
//         img: 'assets/img/Rests/All/claro.jpg',
//         chef: 'Ren Shmueli',
//         dishes: [],
//       },
//       {
//         restName: 'Lumina',
//         img: 'assets/img/Rests/All/mizlala-gret-mullet-fillet.jpg',
//         chef: 'Meir Adoni',
//         dishes: [],
//       },
//       {
//         restName: 'Tiger Lilly',
//         img: 'assets/img/Rests/All/tiger-lili.jpg',
//         chef: 'Ren Shmueli',
//         dishes: [
//           {
//             dishName: 'Pad Ki Mao',
//             img: 'assets/img/Rests/All/pad-ki-mao.jpg',
//             description:
//               'Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut',
//             logo: this.iconsService.chilyIcon,
//             price: '88',
//           },
//         ],
//       },
//       {
//         restName: 'Kab Kem',
//         img: 'assets/img/Rests/All/kab-kem.jpg',
//         chef: 'Yariv Malili',
//         dishes: [
//           {
//             dishName: 'Garbanzo Frito',
//             img: 'assets/img/dishes/Garbanzo Frito/Garbanzo_Frito.jpg',
//             description:
//               'Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa',
//             logo: '',
//             price: '98',
//           },
//         ],
//       },
//       {
//         restName: 'Popina',
//         img: 'assets/img/Rests/All/popina.jpg',
//         chef: 'Yariv Malili',
//         dishes: [
//           {
//             dishName: 'Smoked Pizza',
//             img: 'assets/img/dishes/Smoked Pizza/smoked_pizza.jpg',
//             description:
//               'Basil dough, cashew "butter", demi-glace, bison & radish',
//             logo: this.iconsService.leafIcon,
//             price: '65',
//           },
//         ],
//       },
//       {
//         restName: 'Messa',
//         img: 'assets/img/Rests/messa_2021-10-20/messa.png',
//         chef: 'Aviv Moshe',
//         dishes: [
//           {
//             dishName: 'Smoked Pizza',
//             img: 'assets/img/Rests/messa_2021-10-20/messa.png',
//             description:
//               'Basil dough, cashew "butter", demi-glace, bison & radish',
//             logo: this.iconsService.leafIcon,
//             price: '65',
//           },
//         ],
//       },
//     ],

//     chefs: [
//       {
//         chef: 'Yossi Shitrit',
//         img: 'assets/img/chefs/yossi.jpg',
//         description:
//           "Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav Udim. Shitrit's creativity and culinary acumen born of long experience are expressed in the every detail of each and every dish.",
//         chefRest: [
//           { restName: 'Onza', img: 'assets/img/Rests/All/onza.jpg' },
//           {
//             restName: 'Kitchen Market',
//             img: 'assets/img/Rests/All/kitchen-market.jpg',
//           },
//           { restName: 'Mashya', img: 'assets/img/Rests/All/mashya.jpg' },
//         ],
//       },
//     ],
//   };
// }


// get filteredNewRest() {
//     const cArr = this.restaurantsArr.restArr;
//     const lastThree = cArr.slice(-3).reverse();
//     return lastThree;
//   }

//   get filteredChefRest() {
//     const cArr = this.restaurantsArr.chefs;
//     const filterdRests = cArr[0].chefRest;
//     return filterdRests;
//   }

//   get filteredArr() {
//     const sliced = this.restaurantsArr.restArr;
//     return sliced;
//   }


// get filteredArr() {
//     const sliced = this.restaurantsService.restaurantsArr.restArr;
//     return sliced;
//   }


{/* <pre>{{filteredrests | json}}</pre> */}


//   const rest = await restaurantModel.aggregate([
//     { $match: { chef: makeObjectId(data.id) } },
//   ]);


// {
//     "chef":ObjectId('618105c865292eca59830e68')
//   }


  // async login(obj: any) {
  //   const res = await fetch(`${this.localHost}user/login`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify({ obj }),
  //   });
  //   const data = await res.json();
  //   console.log(data);
  // }