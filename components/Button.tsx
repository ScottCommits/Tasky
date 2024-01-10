import React from "react";
import { StyleSheet, Pressable, View, Text } from "react-native";

export default function Button(){
    return(
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => alert('Pressed hehe')}> 
                <Text style={styles.buttonLabel}>+ Add Task</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create ({
    buttonContainer: {
        width: 180,
        height: 68,
        padding: 3,
        marginHorizontal: 20,
    },
    button: {
        backgroundColor: '#000',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 30,
        
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    }
})