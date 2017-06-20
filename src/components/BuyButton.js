'use strict';

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const BuyButton = () => {
    const { textStyle, buyButtonStyle } = styles;

    return (
        <TouchableOpacity style={buyButtonStyle}>
            <Text style={textStyle}>Click Me!!</Text>
        </TouchableOpacity>
    )
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aaf',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buyButtonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aaf',
        marginLeft: 5,
        marginRight: 5
    }
};

export default BuyButton;