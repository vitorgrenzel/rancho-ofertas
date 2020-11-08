import * as React from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const Product = ({ name, image, price }) => (
    <View style={styles.productItem}>
        <Image source={{ uri: image }} style={styles.productAvatar} />
        <View style={styles.productItemContent}>
            <View style={styles.promotionColumn1}>
                <Text style={styles.productName}>{name}</Text>
                <Text style={styles.productName}>{name}</Text>
            </View>
            <View style={styles.promotionColumn2}>
                <Text style={styles.productPrice}>R$ {price}</Text>
            </View>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3fdff',
    },
    body: {
        paddingHorizontal: 15,
    },
    profile: {
        paddingHorizontal: 10,
        minHeight: windowWidth * 0.6,
        alignItems: 'center',
        marginBottom: 15
    },
    profileBackground: {
        height: windowWidth * 0.3,
        width: windowWidth,
        marginBottom: -1 * (windowWidth * 0.4) / 2,
    },
    profileColorBackground: {
        backgroundColor: '#2c4e72',
        height: windowWidth * 0.3,
        width: windowWidth,
        marginBottom: -1 * (windowWidth * 0.4) / 2,
    },
    iconBack: {
        top: 25,
        left: 25,
        position: 'absolute',
        zIndex: 99,
    },
    profileAvatar: {
        height: windowWidth * 0.4,
        width: windowWidth * 0.4,
        aspectRatio: 1,
        borderRadius: 100,
        overflow: 'hidden',
    },
    category: { flex: 1, marginRight: -15, marginBottom: 25, },
    popular: { flex: 1.5 },
    title: {
        fontSize: 26,
        color: '#0b355d',
        fontWeight: 'bold'
    },
    item: {
        position: 'relative',
        width: windowWidth / 2.5,
        minHeight: windowWidth / 4,
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
    },
    popularBackground: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        aspectRatio: 1,
        borderRadius: 15,
        overflow: 'hidden',
    },
    popularItemContent: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    popularTextContent: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: 20,
    },
    popularName: {
        fontSize: 26,
        color: '#fff',
        fontWeight: 'bold',
    },
    popularPrice: {
        fontSize: 26,
        color: '#fff',
        borderRadius: 10,
        padding: 5,
        backgroundColor: 'red'
    },
    // SECTION: PROMOÇÕES
    promotionItem: {
        flex: 1,
        flexDirection: 'row',
        width: windowWidth - 50,
        marginVertical: 20,
    },
    promotionBackground: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        aspectRatio: 1,
        borderRadius: 15,
        overflow: 'hidden',
    },
    promotionImage: {
        position: 'absolute',
        top: -10,
        right: 0,
        width: '100%',
        height: '100%',
        aspectRatio: 1,
        borderRadius: 15,
        overflow: 'hidden',
    },
    promotionItemContent: {
        flex: 0.6,
        justifyContent: 'space-around',
    },
    line: {},
    promotionName: {
        fontSize: 26,
        color: '#fff',
        fontWeight: 'bold',
    },
    promotionPrice: {
        fontSize: 26,
        color: '#fff',
        borderRadius: 10,
        padding: 5,
        backgroundColor: 'red'
    },
    // PRODUCTS
    productItem: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#feffff',
        paddingVertical: 10,
        marginTop: 8,
        borderColor: '#f7f7f7',
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: 'row'
    },
    productAvatar: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginHorizontal: 15
    },
    productName: {
        fontSize: 18,
        color: '#4f4f4f',
    },
    productItemContent: {
        width: '100%',
        flexDirection: 'row'
    },
    promotionColumn1: {
        flex: 1,
    },
    promotionColumn2: {
        flex: 0.65,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginRight: 25
    },
    productPrice: {
        color: '#fff',
        textAlign: 'center',
        backgroundColor: 'red',
        padding: 5,
        borderRadius: 10,
    }
});
