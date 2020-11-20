
// Responsavel por gerenciar a passagem das partes dos pisos(steps)
import React from 'react';
import { useTheme } from '@react-navigation/native';
import percentage from '../../utils/getPercentage';
import { TouchableOpacity, Text, View, StyleSheet} from 'react-native';

export default function SelectedLevel(props) {
    const { colors } = useTheme();
    let { info, setPartSelect, partSelect, piso } = props;
    let { level } = info;
    level = level[piso]
    let { inverted= false } = level;

    // Usado para calcular a altura do seletor de pisos
    let topHeight = () => {
        switch(level.totalStep){
            case 0:
               return 730/percentage[1]
            case 1:
                return 690/percentage[1]
            case 2:
                return 620/percentage[1]
            case 3:
                return 580/percentage[1]
            case 4:
                return 500/percentage[1]
            case 5:
                return 425/percentage[1]
        }
    }

    let styles = StyleSheet.create({
        viewCard: {
            backgroundColor: colors.card,
            position: "absolute",
            top: topHeight(),
            borderRadius: 13,
            borderColor: colors.card,
        },
        options: {
            padding: 18,
            borderColor: colors.primary,
        },
        textOptions: {
            fontSize: 18
        },
        selectedOption: {
            padding: 18,
            paddingTop: 20,
            borderColor: colors.lightText,
            backgroundColor: colors.primary,
            borderWidth: 1.4,
            borderRadius: 13,
            borderTopEndRadius: 2,
        },
        selectedTextOptions:{
            color: colors.lightText,
            fontSize: 18
        }
    })

    let LevelSelect = () => {
        let obj = [];
        for(let i=0; i < level.totalStep ; i++){
            obj.push(
                <TouchableOpacity
                    key={i}
                    onPress={() => setPartSelect(i)}
                    style={i == partSelect ? styles.selectedOption : styles.options }
                >
                    <Text style={i == partSelect ? styles.selectedTextOptions : styles.textOptions}> 
                        {i+1} 
                    </Text>
                </TouchableOpacity>
            )
        }
        return obj
    } 
       
    return( 
        <View style={styles.viewCard}>
            <LevelSelect/>
        </View>
    )
}