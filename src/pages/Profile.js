import * as React from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
// import SafeAreaView from 'react-native-safe-area-view';
import { AntDesign } from '@expo/vector-icons';

const CATEGORY = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'Carnes',
        image: 'https://aguiarbuenosaires.com/wp-content/uploads/2016/06/carnes-argentinas-cortes-dicas-cortes-2.jpg'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Vegetais',
        image: 'https://64.media.tumblr.com/0091ce5b8c09418f9762d59457c5e43a/tumblr_p4yxjek5UR1uoxyuao1_400.jpg'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        name: 'Limpeza',
        image: 'https://64.media.tumblr.com/abf58677166dc54706d6de643ec64324/tumblr_inline_prhrb3oVR61wqfwiw_1280.jpg'
    },
];

const DATA = {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'COMERCIAL ZAFARI',
    image: 'https://aguiarbuenosaires.com/wp-content/uploads/2016/06/carnes-argentinas-cortes-dicas-cortes-2.jpg'
}

const PRODUCTS = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'Primeiro Produto',
        price: '9,99',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQM5R2lJiuLjlH6HRfuxR3ubmi8R7d9AFOz3A&usqp=CAU'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Segundo Produto',
        price: '19,99',
        image: 'https://carrefourbr.vtexassets.com/arquivos/ids/189948-800-auto?width=800&height=auto&aspect=true'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571ea29d72',
        name: 'Terceiro Produto',
        price: '29,99',
        image: 'https://media.glassdoor.com/sqll/2482728/zaffari-squarelogo-1558435516909.png'
    },
];



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

const Profile = ({ navigation: { goBack } }) => {

    const renderItem = ({ item }) => (
        <Item key={item.id} name={item.name} image={item.image} />
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
                        <TouchableOpacity style={styles.iconBack} onPress={() => goBack()}>
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
                                data={CATEGORY}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{ paddingRight: 15 }}
                            />
                        </View>

                        <View style={styles.products}>
                            <FlatList
                                data={PRODUCTS}
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
