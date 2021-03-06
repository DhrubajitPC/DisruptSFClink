import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';

import {
    Card,
    CardTitle,
    CardImage,
    CardContent,
    CardAction
} from 'react-native-card-view';

import { DetailCard } from '../detailCard';

export default class DetailScreenElon extends Component {
    render() {
        return (
            <DetailCard 
                first_name='Elon'
                last_name='Musk'
                role='CEO'
                company='Telsa Motors, SpaceX, So..'
                coy_web='https://www.tesla.com'
                imgSrc={require('../../images/elon.png')}
                coySrc={require('../../images/telsa.png')}
                short_des='Tesla Motors was started by a group of Silicon Valley entrepreneurs and strives to create a revolution.'
                investors='Benchmark, Lightspeed Ventu...'
                tcSrc={require('../../images/tc_tesla.jpg')}
                title='Tesla’s weird week'
                starting='IT DevOps monitoring company ScriptRock has recently received 8.7 million...'
                tcurl="It's been a weird few days for Tesla...."
            />
        );
    }
}
