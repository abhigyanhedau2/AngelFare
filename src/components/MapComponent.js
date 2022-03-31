import { Text, StyleSheet, View } from 'react-native';
import React, { Component } from 'react';
import { mapStyle } from '../global/mapStyle';
import MapView, { PROVIDER_GOOGLE, } from 'react-native-maps';

export default class MapComponent extends Component {
    render() {
        return (
            <View>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    customMapStyle={mapStyle}
                >
                </MapView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    map: {
        height: "100%",
        width: "100%"
    }
})