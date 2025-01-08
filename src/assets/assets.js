import Bali from '../assets/destinations/Bali.png'
import Kerry from '../assets/destinations/Kerry.png'
import Sydney from '../assets/destinations/Sydney.png'
import Paris from '../assets/destinations/Paris.png'


import Hotels from '../assets/properties/hotels.png'
import Villas from '../assets/properties/villas.png'
import Resorts from '../assets/properties/resorts.png'
import Apartments from '../assets/properties/apartments.png'


import Flight from '../assets/offers/flight.png'
import Hotel from '../assets/offers/hotel.png'
import Mountain from '../assets/offers/mountain.png'

import Taj from '../assets/community/Taj.png'
import Fire from '../assets/community/Fire.png'
import BeachGirl from '../assets/community/BeachGirl.png'
import MountainGirl from '../assets/community/MountainGirl.png'


import Swiss from '../assets/packages/destinations/swiss.png'
import Hallstatt from '../assets/packages/destinations/hallstatt.png'
import Farroe from '../assets/packages/destinations/faroe.png'
import Innsbruck from '../assets/packages/destinations/innsbruck.png'


import Valdi from '../assets/packages/inclusive/valdi.png'
import Ushuaia from '../assets/packages/inclusive/ushuaia.png'
import Berchtes from '../assets/packages/inclusive/berchtes.png'
import Fussen from '../assets/packages/inclusive/fussen.png'

import Mauritius from '../assets/packages/honeymoon/mauritius.png'
import Havelock from '../assets/packages/honeymoon/havelock.png'
import Whitsunday from '../assets/packages/honeymoon/whitsunday.png'
import Maldives from '../assets/packages/honeymoon/maldives.png'

  export const destinations = [
    {
        _id: "a",
        name: "Bali, Indonesia",
        image:[Bali],

    },
    {
        _id:"b",
        name:"Kerry, Ireland",
        image:[Kerry]
    },
    {
        _id:"c",
        name:"Sydney, Australia",
        image:[Sydney]
    },
    {
        _id:"d",
        name:"Paris, France",
        image:[Paris]
    }
  ]

  export const properties = [
    {
        _id: "a",
        name: "Hotels",
        image:[Hotels],

    },
    {
        _id:"b",
        name:"Villas",
        image:[Villas]
    },
    {
        _id:"c",
        name:"Resorts",
        image:[Resorts]
    },
    {
        _id:"d",
        name:"Apartments",
        image:[Apartments]
    }
  ]


  export const offers = [
    {
        _id: "a",
        image:[Flight],
        name: "Domestic Flights",
        p1:"Huge savings on flight with trxvl.",
        p2:"Book domestic flights starting @ just $1459",

    },
    {
        _id: "b",
        image:[Hotel],
        name: "International Hotels",
        p1:"Enjoy upto 20% off on International Hotels",
        p2:"Make the most out of this deal on your first booking with trxvl.",

    },
    {
        _id: "c",
        image:[Mountain],
        name: "Bank Offer",
        p1:"Get upto 30% instant discount",
        p2:"Get discount on flights, hotels and holiday packages with HDFC bank credit card.",

    },
  ]

  export const communities = [
    {
        _id:"a",
        image:[Taj],
        name:"India",
        p1:"Travel community",
        p2:"155,073 travelers"
    },
    {
        _id:"b",
        image:[Fire],
        name:"Travel talk",
        p1:"Travel community",
        p2:"155,073 travelers"
    },
    {
        _id:"c",
        image:[BeachGirl],
        name:"Beach",
        p1:"Travel community",
        p2:"155,073 travelers"
    },
    {
        _id:"d",
        image:[MountainGirl],
        name:"Mountains",
        p1:"Travel community",
        p2:"155,073 travelers"
    },
    
  ]

  
export const mountDestinations = [

    {
        _id:"a",
        image:[Swiss],
        name:"Swiss Apls",
        rating:"4.7",
        favourite:true
    },
    {
        _id:"b",
        image:[Hallstatt],
        name:"Hallstatt",
        rating:"4.9",
        favourite:true
    },
    {
        _id:"c",
        image:[Farroe],
        name:"Faroe island",
        rating:"4.5",
        favourite:false
    },
    {
        _id:"d",
        image:[Innsbruck],
        name:"Innsbruck",
        rating:"4.8",
        favourite:false
    },
]

export const mountRecents = [

    
    {
        _id:"b",
        image:[Hallstatt],
        name:"Hallstatt",
        rating:"4.9",
        favourite:true
    },
   
    {
        _id:"d",
        image:[Innsbruck],
        name:"Innsbruck",
        rating:"4.8",
        favourite:false
    },
]
export const mountInclusive = [

    
    {
        _id:"a",
        image:[Valdi],
        name:"Val di Funes",
        rating:"4.7",
        favourite:false
    },
   
    {
        _id:"b",
        image:[Ushuaia],
        name:"Ushuaia",
        rating:"4.9",
        favourite:false
    },
    {
        _id:"c",
        image:[Berchtes],
        name:"Berchtestgaden",
        rating:"4.5",
        favourite:false
    },
    {
        _id:"d",
        image:[Fussen],
        name:"Fussen",
        rating:"4.8",
        favourite:false
    }
]
export const mountHoneymoon = [

    
    {
        _id:"a",
        image:[Mauritius],
        name:"Mauritius",
        rating:"4.7",
        favourite:false
    },
   
    {
        _id:"b",
        image:[Havelock],
        name:"Havelock",
        rating:"4.9",
        favourite:false
    },
    {
        _id:"c",
        image:[Whitsunday],
        name:"Whitsunday Islands",
        rating:"4.5",
        favourite:false
    },
    {
        _id:"d",
        image:[Maldives],
        name:"Maldives",
        rating:"4.8",
        favourite:false
    }
]

