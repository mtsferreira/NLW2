import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';

function GiveClasses() {
    const navigation = useNavigation();

    function handleNavigateBack() {
        navigation.goBack();
    }

    return (
        <View style={styles.container} >
            <ImageBackground 
                style={styles.content} 
                source={giveClassesBgImage}
                resizeMode="contain"
            >
                <Text style={styles.title}>
                    Quer ser um Proffy?
                </Text>
                <Text style={styles.description}>
                    Para começar, você precisa se cadastrar como professor na nossa plataforma web.
                </Text>

            </ImageBackground>

            <TouchableOpacity 
                onPress={handleNavigateBack}
                style={styles.okButton}
            >
                <Text style={styles.okButtonText}>
                    Tudo bem
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default GiveClasses;