import * as React from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Category from '../../components/Category';

import { ESTABELECIMENTOS, CATEGORIAS, PRODUTOS } from '../../mock';


const DATA = {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'COMERCIAL ZAFARI',
    image: 'https://aguiarbuenosaires.com/wp-content/uploads/2016/06/carnes-argentinas-cortes-dicas-cortes-2.jpg'
}

const windowWidth = Dimensions.get('window').width;

const Item = ({ key, name, image }) => (
    <TouchableOpacity key={key} activeOpacity={0.75} style={styles.item}>
        <Image source={{ uri: image }} style={styles.background} />
        <View style={styles.itemContent}>
            <View style={styles.opacity} />
            <Text style={styles.name}>{name}</Text>
        </View>
    </TouchableOpacity>
);

const Product = ({ name, image, price }) => (
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

const Profile = ({ navigation }) => {

    const renderCategory = ({ item }) => (
        <Category id={item.id} name={item.name} image={item.image} navigation={navigation} redirectTo='Category' />
    );

    const renderProducts = ({ item }) => (
        <Product name={item.name} image={item.image} price={item.price} />
    );

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#2c4e72" />

            <View style={styles.container}>

                <ScrollView style={styles.scrollView}>

                    <View style={styles.profile}>
                        <TouchableOpacity style={styles.iconBack} onPress={() => navigation.goBack()}>
                            <AntDesign name="arrowleft" size={24} color="#fff" />
                        </TouchableOpacity>
                        {/* <Image style={styles.profileBackground} source={{ uri: 'https://i.pinimg.com/originals/31/0b/15/310b15fbf06808f61c04d92112439273.png' }} /> */}
                        <View style={styles.profileColorBackground} />
                        <Image source={{ uri: DATA.image }} style={styles.profileAvatar} />
                        <Text style={styles.title}>{DATA.name}</Text>
                    </View>


                    <View style={styles.body}>
                        <View style={styles.category}>
                            <Text style={styles.title}>Categorias</Text>
                            <FlatList
                                horizontal
                                data={CATEGORIAS}
                                renderItem={renderCategory}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{ paddingRight: 15 }}
                            />
                        </View>

                        <View style={styles.products}>
                            <FlatList
                                data={PRODUTOS}
                                renderItem={renderProducts}
                                keyExtractor={item => item.id}
                            />
                        </View>
                    </View>
                </ScrollView>

            </View>
        </>
    );
}

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
        minHeight: 250,
        // minHeight: windowWidth * 0.6,
        alignItems: 'center',
        marginBottom: 15
    },
    profileBackground: {
        // height: windowWidth * 0.3,
        // width: windowWidth,
        // marginBottom: -1 * (windowWidth * 0.4) / 2,
        height: 150,
        width: windowWidth,
        marginBottom: 200,
    },
    profileColorBackground: {
        backgroundColor: '#2c4e72',
        height: 150,
        // height: windowWidth * 0.3,
        width: windowWidth,
        marginBottom: -100,
        // marginBottom: -1 * (windowWidth * 0.4) / 2,
    },
    iconBack: {
        top: 25,
        left: 25,
        position: 'absolute',
        zIndex: 99,
    },
    profileAvatar: {
        // height: windowWidth * 0.4,
        // width: windowWidth * 0.4,
        height: 200,
        width: 200,
        aspectRatio: 1,
        borderRadius: 200,
        overflow: 'hidden',
    },
    category: {
        flex: 1,
        minHeight: 200,
        paddingHorizontal: 15,
        marginRight: -15,
        marginBottom: 15
    },
    popular: { flex: 1.5 },
    title: {
        marginTop: 10,
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
        alignItems: 'flex-start'
    },
    productPrice: {
        color: '#fff',
        textAlign: 'center',
        backgroundColor: 'red',
        padding: 5,
        borderRadius: 10,
    }
});

export default Profile;
