import React from "react";
import { Button, Text, View,TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function StudentListItemComponent({Student,OnUpdate,onDelete}){
 const OnEdit = () => {
     OnUpdate(Student)
     
 }
 const OnRemove = () => {
    onDelete(Student)
    
}
    return(
        <View style={{flexDirection:"row",justifyContent:"space-between",borderColor:"#D3D3D3",borderWidth:1,padding:5}}>
        <Text>{Student.Rollnumber}</Text>
        <Text>{Student.Name}</Text>
        <Text>{Student.Age}</Text>
        <Text>{Student.Class}</Text>
        <TouchableOpacity onPress={() => OnEdit()}>
            <FontAwesome name="edit" size={24} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => OnRemove()}>
        <FontAwesome name="remove" size={24} color="red" />
        </TouchableOpacity>
        </View>
    )
}






