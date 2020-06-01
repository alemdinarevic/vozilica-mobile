import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';

import Colors from '../../constants/Colors';

const CustomHeaderButton = (props) => {
    return <HeaderButton {...props} IconComponent={Ionicons} iconSize={22} color={'white'}/>
}

export default CustomHeaderButton;