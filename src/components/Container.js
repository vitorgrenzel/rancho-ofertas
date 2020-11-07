import React from 'react';
import { View, StyleSheet, Platform, Dimensions } from 'react-native';

const Container = ({ children }) => (
    <View styles={styles.background}>
        <View styles={getContainerStyle()}>
            {children}
        </View>
    </View>
)

// const memoizedErrors = useMemo(() => <Errors active={showErrors} />, [showErrors]);

let screenWidth = Dimensions.get('window').width;

console.log('screenWidth', screenWidth)
console.log('Platform.OS', Platform.OS)

function getContainerStyle() {
    if (Platform.OS == 'web' && screenWidth > 720) {
        return {
            maxWidth: 720,
            borderRadius: 5,
            padding: 10,
            borderWidth: 2,
            borderColor: 'gray',
            margin: 'auto'
        }
    } else {
        return {
            flex: 1
        }
    }
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default Container;