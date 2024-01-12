import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";


export default function CDate() {
    const [currentDate, setCurrentDate] = useState('')

    useEffect(() => {
        const getCurrentDate = () => {
            const date =  new Date();

            const months = [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
              ];

            const formattedDate = 
                `${months[date.getMonth()]}, ${date.getDate().toString().padStart(2, '0')}`;
                setCurrentDate(formattedDate);
            };

            getCurrentDate();
    }, []);
    
    return(
        <View>
            <Text style={styles.dateContainer}>{currentDate}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    dateContainer: {
        color: '#fff'
    }
})