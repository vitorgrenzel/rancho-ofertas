import * as React from 'react';
import { View, Text, FlatList, StyleSheet, Image, StatusBar } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import Header from '../../components/Header';

import { ESTABELECIMENTOS, CATEGORIAS, PRODUTOS } from '../../mock';


const Item = ({ name, image }) => (
    <View style={styles.item}>
        <Image source={{ uri: image }} style={styles.avatar} />
        <View style={styles.itemContent}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.description}>1,8km de distância</Text>
        </View>
    </View>
);

const Stores = ({ route, navigation }) => {
    const { name } = route.params ?? {name: 'Todos Estabelecimentos'};

    const renderItem = ({ item }) => (
        <Item name={item.name} image={item.image} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Text style={styles.title}>{name}</Text>
            <FlatList
                data={ESTABELECIMENTOS}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#f3fdff',
    },
    title: {
        fontSize: 26,
        color: '#0b355d',
        fontWeight: 'bold'
    },
    item: {
        backgroundColor: '#feffff',
        paddingVertical: 10,
        marginTop: 8,
        borderColor: '#f7f7f7',
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: 'row'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginHorizontal: 15
    },
    name: {
        fontSize: 18,
        color: '#4f4f4f',
    },
    itemContent: {
        width: '100%',
    },
    description:{
        fontSize: 16,
        color: 'gray',
    }
});

export default Stores;
