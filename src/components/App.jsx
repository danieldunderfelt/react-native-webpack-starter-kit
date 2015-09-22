import React from 'react-native'

const { Component, StyleSheet, View, Text } = React

class App extends Component {

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    App
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 36,
        textAlign: 'center',
    }
})

export default App