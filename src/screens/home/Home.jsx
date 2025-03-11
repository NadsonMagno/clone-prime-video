import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';

import {styles} from "./styles";

import PrimeLogo from '../../assets/prime_video.png';
import AmazonLogo from '../../assets/amazon_logo.png';

import MovieTheWhell from '../../assets/movies/the_wheel_of_time.png';

import MOVIESWATCHING from '../../utils/moviesWatching';
import MovieCard from '../../components/MovieCard/MovieCard';

export default function Home() {
    return (
        <View style={styles.container} >
            <View style = {styles.header}>

                <Image source={PrimeLogo} style={styles.primeLogoImg} />
                <Image source={AmazonLogo} style={styles.amazonLogoImg} />
            </View>
       

            <View style = {styles.category}>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.categoryText}>TV Shows</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.categoryText}>Movies</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.categoryText}>Kids</Text>
                </TouchableOpacity>




            </View>
            <TouchableOpacity style={styles.movieTheWheelImg}>
                <Image source={MovieTheWhell}  />
            </TouchableOpacity>


            <FlatList 
            data={MOVIESWATCHING} 
            keyExtractor={(item) => item.id.toString()}  
            renderItem={({item})=> (<MovieCard movieURL={item.moviesURL}/>)}
            /> 
        </View>
    );
    }