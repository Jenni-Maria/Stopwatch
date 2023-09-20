import { View, Text, StyleSheet } from "react-native"
import React, {useState} from 'react'
import {useRef} from 'react'
import Toggle from "./Toggle";


export default function Clock(){
    const [seconds, setSeconds] = useState(0)
    const timeRef = useRef()

const start = () => {
    const id = setInterval( () => {
        setSeconds(prevState => prevState +1)
        console.log('timer', seconds)
    }, 1000)
    timeRef.current = id
    }

const stop = () => {
    setSeconds(0)
    clearInterval(timeRef.current)
}

const formatSecondsToTime = () => {
    const secondsInt = parseInt(seconds, 10)
    const hrs = String(Math.floor(secondsInt / 3600))
    const mins = String(Math.floor((secondsInt / 60) % 60))
    const snds = String(secondsInt % 60)
    return `${hrs.padStart(2,'0')}.${mins.padStart(2,'0')}.${snds.padStart(2,'0')}`
}

    return (
        <View style={styles.container}>
            <Text style={styles.display}>{formatSecondsToTime()} </Text>
            <Toggle start={start} reset={stop}/>
        </View>
    )
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        display:{
            fontSize: 24,
            marginBottom: 20,
        }
    });