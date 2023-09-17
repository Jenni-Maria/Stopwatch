import {View, Button} from 'react-native'
import React, {useState} from 'react'


export default function Toggle({start,reset}) {
    const [isOn, setIsOn] = useState(false)

    const handleClick = () => {
        setIsOn(!isOn)
        isOn ? reset() : start()
    }

    return (
        <View>
            <Button title={isOn ? 'Reset' : 'Start'} onPress={() =>handleClick()}/>
        </View>
    )
}