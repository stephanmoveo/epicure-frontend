export interface dish {
    dishName: string;
    img: string;
    logo: string;
    description: string;
    price: string;
}
export interface restuarant {
    restName: string;
    img: string;
    chef: string;
    dishes: dish[];
}
export interface chefRest {
    restName: string;
    img: string;
}
export interface chef {
    chef: string;
    img: string;
    description: string;
    chefRest: chefRest[];
}
export interface restuarantsInterface {
    restArr: restuarant[],
    chefs: chef[]
}
