import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ title, value }) => {
    const [color, setColor] = useState("");
    const [status, setStatus] = useState("");

    useEffect(
        () => {
            if (title === "TDS") {
                if (value <= 300) {
                    setColor("#85ff91");
                    setStatus("Good");
                }
                else if (value > 300 && value <= 700) {
                    setColor("#85adff");
                    setStatus("Fair");
                }
                else if (value > 700) {
                    setColor("#ff8585");
                    setStatus("Poor");
                }
            }
            else if (title === "Temperature") {
                if (value < 25) {
                    setColor("#85adff");
                    setStatus("Cold");
                }
                else if (value >= 25 && value <= 37) {
                    setColor("#85ff91");
                    setStatus("Normal");
                }
                else if (value > 37) {
                    setColor("#ff8585");
                    setStatus("Hot");
                }
            }
            else {
                setColor("");
                setStatus("");
            }
        }, [value]
    );

    return (
        <View style={{backgroundColor:color}}>
            <Text>{status}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default ColorBox;