import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import Shoes from "../../component/Shoes";

export default function Home() {
    const navigation = useNavigation();
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image
                    source={require('../../assets/1.jpg')}
                    style={style.image}
                />

                <View style={style.textContainer}>
                    <Text style={style.text}>TÊNIS</Text>
                    <Text style={[style.text, { color: '#CECECF' }]}>* </Text>
                    <Text style={[style.text, { color: '#CECECF' }]}>MASCULINO </Text>
                    <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: 'center' }}>
                        <MaterialIcons
                            name='filter-list'
                            size={24}
                            color='#000'
                        />
                    </TouchableOpacity>
                </View>


                <View style={style.line} />

                <ScrollView>
                    <Text style={style.text}> LANÇAMENTOS</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                        <Shoes img={require('../../assets/6.webp')} cost="R$300,00" onClick={() => alert('CLICOU')}>
                            Nike NK300
                        </Shoes>
                        <Shoes img={require('../../assets/11.webp')} cost="R$250,00" onClick={() => alert('CLICOU')}>
                            Nike Better
                        </Shoes>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Shoes img={require('../../assets/9.webp')} cost="R$160,99" onClick={() => navigation.navigate('Detail')}>
                            Nike Master
                        </Shoes>
                        <Shoes img={require('../../assets/10.webp')} cost="R$199,00" onClick={() => navigation.navigate('Detail')}>
                            Nike Junior
                        </Shoes>

                    </View>


                </ScrollView>
            </View>
        </View>
    );
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF'
    },
    header: {
        marginBottom: 8,
    },
    image: {
        width: '100%',
        height: '20%'
    },
    textContainer: {
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%'
    },
    text: {
        fontFamily: 'Anton_400Regular',
        fontSize: 26,
        marginHorizontal: '1%'
    },
    line: {
        borderBottomColor: '#D8d8d8',
        borderBottomWidth: 2,

    }
});