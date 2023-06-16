import { View, Text } from 'react-native';
import React from 'react';
import {FlipPage, FlipPagePage} from 'react-native-flip-page';

const Flip = () => (
    <View style={{ flex: 1, backgroundColor: 'aqua' }}>
        <FlipPage><FlipPagePage></FlipPagePage></FlipPage>
    </View>
)

export default Flip