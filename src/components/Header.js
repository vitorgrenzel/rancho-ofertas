import React from 'react';
// import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = ({ isHome }) => {
    const navigation = useNavigation();

    return (
        <View style={[(isHome) ? styles.container : styles.container]}>
            {/* <StatusBar barStyle="dark-content" backgroundColor="#f3fdff" /> */}
            <View style={styles.row}>

                {isHome != true &&
                    <TouchableOpacity style={styles.iconBack} onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" size={24} color="#000" />
                    </TouchableOpacity>
                }

                <Text style={styles.title}>Rancho Ofertas</Text>
                <View style={styles.icons}>
                    {/* <Ionicons style={styles.icon} name="ios-search" size={30} color="#bfc8cd" /> */}
                    {/* <Ionicons name="ios-heart-empty" size={30} color="#bfc8cd" /> */}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#f3fdff',
        paddingVertical: 15,
        // marginTop: StatusBar.currentHeight || 0,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        // justifyContent: 'space-between',
    },
    title: {
        paddingLeft: 15,
        fontSize: 22
    },
    // icons: {
    //     flexDirection: 'row',
    //     justifyContent: 'flex-end',
    // },
    icon: {
        marginRight: 10
    },
    // iconBack: {
    //     marginRight: 10
    // }
});

export default Header;