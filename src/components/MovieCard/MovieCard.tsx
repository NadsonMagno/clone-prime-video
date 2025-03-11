import {TouchableOpacity, Text, Image, View} from 'react-native';
import React from 'react';
import {styles} from "./styles";

type MovieCardProps = {
    movieURL: any;
};

    export default function MovieCard({movieURL,...rest}: MovieCardProps) {
    return (
        <TouchableOpacity {...rest}>
        <Image style = {styles.img} source={ movieURL}  />
        </TouchableOpacity>
    );
    }