import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DataValue from '../components/DataValue';

const HomeScreen = () => {
    return (
        <View>
            <Text>TDS Value</Text>
            <DataValue title="TDS" />
            <Text>Temperature Value</Text>
            <DataValue title="Temperature" />
        </View>
    );
}

const styles = StyleSheet.create({});

export default HomeScreen;