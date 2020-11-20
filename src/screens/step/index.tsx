import React, { useEffect, useState } from 'react';
import { Text, View, ImageBackground, Animated, Alert, StyleSheet, BackHandler  } from 'react-native';

import Header from '../../components/header'

import percentage from '../../utils/getPercentage';

import Images from "./images"
import { useTheme } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import  { FlingGestureHandler, Directions, } from 'react-native-gesture-handler'
import SelectLevel from "../../components/SelectLevel"
import TouchableTransform from '../../components/touchableTransform';

let image = "";
let debug = false;

interface valuesType {
    height:number, 
    left: number,
    top: number,
    width: number,
    transform: { 
        rotateY: number,
        rotateZ: number 
    },
    id: number,
    text: string
}

function Step(props){
    const { colors } = useTheme();
    const [y, setY] = useState(0);
    const [partSelect, setPartSelect] = useState(0);
    const [lastScreen, setLastScreen] = useState('');

    let { route: { params: { bloco: bloco, piso: piso } } } = props;
    let info = Images[bloco.toUpperCase()];

    // Apenas exibe a mensagem de erro
    let displayErrorMessage = () => {
        let errorMessage = "Ops.. This floor not exist. "
        console.error(errorMessage)
    }

    // é um formato enviado é valido ?
    let isValidData = () => {
        if(info.totalFloor > piso){
            return true
        }
        displayErrorMessage()
    }

    // É um piso com multiplos levels ?
    let isMultipartStep = () => {
        let { haveSteps = false } = info
        if(haveSteps){
            return true
        }
        return false
    }

    // Seleciona a imagem para ser exibida com base no props
    let selectImageFromData = () => {
        if( isValidData() ) {
            let newImage;
            if( isMultipartStep() ){
                let levels = info.level;
                let level = levels[piso];
                newImage = level.step[partSelect];
                let thisScreen = `${bloco}${piso}`
                if(thisScreen != lastScreen) {
                    setPartSelect(0)
                    setLastScreen(thisScreen)
                }
            }
            else {
                newImage = info.level[piso];
            }
            image = newImage;
        }   
    }

    selectImageFromData()

    // Faz a verificação de fingerUp e down
    let handleGesture = (event: any) => {
        setLastScreen(`${bloco}${piso}`)
        let { level } = info;
        let { nativeEvent: { state, absoluteY} } = event;
        level = level[piso]
        let totalStep = level.totalStep;
        if(state == 5 || state == 2) {
            if(state == 2) {
                setY(absoluteY) 
            }
            if(state == 5) {
                if(y > absoluteY) {
                    if(partSelect < totalStep-1)
                        setPartSelect(partSelect+1)
                }
                else if (y < absoluteY) {
                    if(partSelect > 0)
                    setPartSelect(partSelect-1)
                }        
            }
        }
    }

    let onIdPress = (id: number) => {
        alert(id)
    }

    let renderTouchables = () => {
        let { touchable = false } = info;
        if(touchable) {
            let { pisos } = touchable;
            let constructBase = pisos[piso];

            if(constructBase.length >= 1) {
                let finalObj = [] as unknown as JSX.Element[] ;
                constructBase.map((values: valuesType, index: number) => {
                    let { height, left, top, width, transform: { rotateY, rotateZ }, id, text } = values;
                    finalObj.push(
                        <TouchableTransform 
                            array={[left, top, height, width]}
                            trans={[rotateY, rotateZ]}
                            backgroundColor={!debug ? "lightblue" : "transparent"}
                            onPressed={() => onIdPress(id)}
                        >                        
                            <Text style={{ 
                                textAlign: "center", 
                                maxHeight: height, 
                                marginTop: width >= 200 ? "20%" : 0
                            }}>{text}</Text>
                        </TouchableTransform>
                    )
                })
                return finalObj
            }
        }
        return null

    }
    return(
        <>
        <FlingGestureHandler
            direction={Directions.DOWN | Directions.UP }
            numberOfPointers={1}
            onHandlerStateChange={event => handleGesture(event)}
        >
            <View style={{backgroundColor: '#fff', height: '100%'}}>
                <ImageBackground 
                    style={{ 
                        width: '100%',
                        height: '100%'
                    }} 
                    source={image}>
                <Header isLight />
            
                </ImageBackground>
            </View>
        </FlingGestureHandler>    
        {
            isMultipartStep() && <SelectLevel piso={piso} info={info} setPartSelect={setPartSelect} partSelect={partSelect}/>
        }
        {
            renderTouchables()
        }
        
        </>
    )
}

export default Step