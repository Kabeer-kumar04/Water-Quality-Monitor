import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import database from '@react-native-firebase/database';

const DataValue = ({title}) => {
    const [value, setValue] = useState([]);

    useEffect(
        () => {
            database()
                .ref(`/${title}`)
                .on('value', snapshot => {
                    setValue(...value, snapshot.val())
                });
        }, []
    );


    return (
        <View>
            <Text>{value[value.length - 1]}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default DataValue;