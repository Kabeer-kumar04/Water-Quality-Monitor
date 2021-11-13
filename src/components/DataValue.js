import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import database from '@react-native-firebase/database';
import ColorBox from "./ColorBox";

const DataValue = ({ title }) => {
    const [value, setValue] = useState([]);

    useEffect(() => {
        database()
            .ref(`/${title}`)
            .on('value', snapshot => {
                setValue(...value, snapshot.val());
            });
    }, [])

    return (
        <View>
            <Text>{value[value.length - 1]}</Text>
            <Text>Status</Text>
            {value.length != 0 ?
                <ColorBox title={title} value={value[value.length - 1]} />
                : null}
        </View>
    );
}

const styles = StyleSheet.create({});

export default DataValue;