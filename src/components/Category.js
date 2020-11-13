import * as React from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

const { width, fontScale } = Dimensions.get("window");

const Category = ({ key, name, image, navigation, redirectTo }) => {
    
    const onPress = () => {
        if (name == 'Ver Todos') {
            if (redirectTo == 'Profile') {
                redirectTo = 'Stores'
            }
            return (
                navigation.navigate(redirectTo)
            )
        }
        return (
            navigation.navigate(redirectTo, {
                name
            })
        )
    }

    return (
        <TouchableOpacity
            id={key}
            activeOpacity={0.75}
            style={styles.item}
            onPress={onPress}>
            <Image source={{ uri: image }} style={styles.background} />
            <View style={styles.itemContent}>
                <View style={styles.opacity} />
                <Text style={styles.name}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#f3fdff',
    },
    promotion: {
        flex: 2,
        minHeight: 300,
        paddingHorizontal: 15,
        marginBottom: 15
    },
    category: {
        flex: 1,
        minHeight: 200,
        paddingHorizontal: 15,
        marginRight: -15,
        marginBottom: 15
    },
    stores: {
        flex: 1,
        minHeight: 200,
        paddingHorizontal: 15,
        marginRight: -15,
        marginBottom: 15
    },
    popular: {
        flex: 2,
        paddingHorizontal: 15,
        minHeight: 250,
        marginBottom: 15
    },
    title: {
        fontSize: 26,
        color: '#0b355d',
        fontWeight: 'bold'
    },
    item: {
        height: '100%',
        position: 'relative',
        width: windowWidth*0.6,
        maxWidth: 300,
        borderColor: '#f7f7f7',
        borderWidth: 1,
        marginHorizontal: 2,
    },
    background: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        aspectRatio: 1,
        borderRadius: 15,
        overflow: 'hidden',
    },
    name: {
        fontSize: 18,
        color: '#fff',
        zIndex: 99,
    },
    itemContent: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    opacity: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        opacity: 0.6,
        borderRadius: 15,
    },
    // MAIS RELEVANTE
    popularItem: {
        flex: 1,
        position: 'relative'
    },
    popularBackground: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        aspectRatio: 1,
        borderRadius: 15,
        overflow: 'hidden',
    },
    popularProfile: {
        position: 'absolute',
        top: 15,
        left: 15,
        width: 50,
        height: 50,
        aspectRatio: 1,
        borderRadius: 100,
        overflow: 'hidden',
        zIndex: 99
    },
    popularItemContent: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    popularTextContent: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: 20,
        paddingHorizontal: 15,
    },
    popularName: {
        fontSize: 22 / fontScale,
        color: '#fff',
        fontWeight: 'bold',
    },
    popularPrice: {
        fontSize: 22 / fontScale,
        color: '#fff',
        borderRadius: 10,
        padding: 5,
        marginLeft: 5,
        backgroundColor: 'red'
    },
    // SECTION: PROMOÇÕES
    promotionItem: {
        flex: 1,
        position: 'relative',
        flexDirection: 'row',
        height: '100%',
        // maxHeight: 320,
    },
    promotionBackground: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        // height: windowWidth * 0.6,
        bottom: 0,
        aspectRatio: 1,
        borderRadius: 15,
        overflow: 'hidden',
    },
    promotionImage: {
        width: '100%',
        height: 200,
        aspectRatio: 1,
        borderRadius: 100,
        overflow: 'hidden',
    },
    promotionItemContent: {
        flex: 1,
        height: '100%',
        flexDirection: 'row',
        marginTop: 'auto',
        marginBottom: 0,
        alignItems: 'flex-end',
        paddingBottom: 20,
        paddingHorizontal: 15,
    },
    promotionColumn1: {
        flex: 1
    },
    promotionColumn2: {
        height: '100%',
        flex: 0.5,
        borderRadius: 10,
        padding: 5,
        marginRight: 10,
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    promotionProfile: {
        position: 'absolute',
        top: 15,
        left: 15,
        width: 50,
        height: 50,
        aspectRatio: 1,
        borderRadius: 100,
        overflow: 'hidden',
        zIndex: 99
    },
    line: {
        // backgroundColor: 'yellow',
        // position: 'absolute',
        // top: 70,
        // left: 0,
        // width: 50,
        // height: 5
    },
    promotionName: {
        fontSize: 26,
        color: '#fff',
        fontWeight: 'bold',
    },
    promotionPrice: {
        fontSize: 26,
        color: '#fff',
        backgroundColor: 'red',
        textAlign: 'center'
    },
});

export default Category;