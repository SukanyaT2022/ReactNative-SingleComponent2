import { ImageSourcePropType } from 'react-native';
import dog1 from '../assets/images/imgDog1.jpg';
import dog2 from  '../assets/images/imgDog2.jpg';

interface ExtraServiceProp{
    title: string,
    subtitle: string,
    text:string[],
    image:ImageSourcePropType,
    recommendedTag?: string,
    price:string,
    id:string
}

export const data: ExtraServiceProp[] = [
    {
    title: "Skip the Pump and Save Time",
    subtitle: "Save time, return without refueling",
    text:[
        'Comparable to local fuel prices',
        'Avoid $9.99/gal for not refueling',
    ],
    image:dog1,
    recommendedTag:"Recommended",
    price:"$50.99",
    id:"1"
},
{
    title: "Emergency & Roadside Assistance",
    subtitle: "unexpected situation",
    text:[
        'Flat tires or spare installation',
        'Lost car keys or locked out',
    ],
    image:dog2,
    price:"$9.99",
    id:"2"
},
{
    title: "Unlimited Toll Pass",
    subtitle: "Toll-free travel made easy",
    text:[
        'Unlimited toll usage 24/7',
        'Fixed daily rate',
    ],
    image:dog1,
    price:"$20.99",
    id:"3"
},
]

