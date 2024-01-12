import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Modal, Text } from 'react-native';


export default function Tasks(){
    const [modalVisable, setModalVisable] = useState(false)

    const openModal = () => {
        setModalVisable(true);
    };

    const closeModal = () => {
        setModalVisable(false);
    };

    return(
            <Modal>
                <View>
                    <Text>!!!</Text>
                </View>
            </Modal>
    )
};

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        flex: 2,
        backgroundColor: '#1c1c1c',
        borderRadius: 10,
    },
})