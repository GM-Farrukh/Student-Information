import React, { useState } from "react";
import {View,Text,StyleSheet, TextInput, Modal,Button,SafeAreaView, TouchableOpacity,Alert} from "react-native";

export default function AddStudentComponent({OnSave,modal,setModal,OnAdd}){
    const [Rollnumber,setRollNumber] = useState()
    const [Name,setName] = useState()
    const [Age,setAge] = useState()
    const [Class,setClass] = useState()
    const OnNewRecord = () => {
        OnSave({Rollnumber,Name,Age,Class})
    }
    return(
        <View>
            <TouchableOpacity onPress={() => OnAdd()} style={{alignItems:"center",justifyContent:"center",paddingTop:50}}>
            <View style={{borderWidth:2,borderRadius:3,width:150,height:50,backgroundColor:"#D3D3D3",borderColor:"grey"}}>
                <Text style={{paddingTop:15,paddingLeft:7,color:"grey"}}>Add Student Record</Text>
            </View>
            </TouchableOpacity>
            <Modal visible={modal}>
        <View>
            <SafeAreaView style={{backgroundColor:"#D3D3D3",height:60}}><Text style={{color:"#fff",textAlign:"center",paddingTop:10}}>Add Student Record</Text></SafeAreaView>
            <View style={{flexDirection:"row",paddingLeft:60,paddingTop:30}}>
            <View>
                <Text style={{color:"#D3D3D3",padding:10}}>RollNumber</Text>
                <Text style={{color:"#D3D3D3",padding:10,paddingTop:40}}>Name</Text>
                <Text style={{color:"#D3D3D3",padding:10,paddingTop:25}}>Age</Text>
                <Text style={{color:"#D3D3D3",padding:10,paddingTop:30}}>Class</Text>
                </View>
            <View style={{paddingLeft:10,paddingTop:5}}>
           <TextInput  style={{padding:10,borderWidth:2,width:100,borderColor:"#D3D3D3"}} onChangeText={(textValue) => setRollNumber(textValue)} value={Rollnumber}/>
           <Text/>
           <TextInput  style={{padding:10,borderWidth:2,width:100,borderColor:"#D3D3D3"}} onChangeText={(textValue) => setName(textValue)} value={Name}/>
           <Text/>
           <TextInput  style={{padding:10,borderWidth:2,width:100,borderColor:"#D3D3D3"}} onChangeText={(textValue) => setAge(textValue)} value={Age}/>
           <Text/>
           <TextInput  style={{padding:10,borderWidth:2,width:100,borderColor:"#D3D3D3"}} onChangeText={(textValue) => setClass(textValue)} value={Class}/>
           <Button title="add" onPress={() => OnNewRecord()} />
           <Button title="Cancel" onPress={() => setModal(false)} color="red" />
           </View>
            </View>
        </View>
        </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });