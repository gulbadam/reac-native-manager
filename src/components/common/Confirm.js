import React from 'react';
import { Text, View, Modal } from 'react-native';
import {CardSections} from './CardSections';
import {Button} from './Button';

const Confirm =({children, visible, onAccept, onDecline})=> {
    return(
        <Modal 
        visible={visible}
        transparent
        animationType="slide" 
        onRequestClose={()=>{}}
        >
        <View>
        <CardSections>
        <Text>{children}</Text>
        </CardSections>
        <CardSections>
        <Button onPress={onAccept}>Yes</Button>
        <Button onPress={onDecline}>No</Button>
        </CardSections>
        </View>
        </Modal>
    )

}
export {Confirm};