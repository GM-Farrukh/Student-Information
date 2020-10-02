import React, { useState } from "react";
import {View,Text,StyleSheet,ScrollView,SafeAreaView,TouchableOpacity, Modal, TextInput, Button} from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default function EditStudentComponent(
    {EditModal,setEditModal,EditStd,OnEditStd,setRollNumber,setName,setAge,setClass,onEditButton}
    ){
    return(
            <View>
                {/* <TouchableOpacity onPress={() => OnEditStd()}>
                <FontAwesome name="edit" size={24} color="blue" />
                </TouchableOpacity> */}
                <Modal visible={EditModal}>
                    <View>
                        <SafeAreaView style={{backgroundColor:"#D3D3D3",height:60}}>
                            <Text style={{color:"#fff",textAlign:"center",paddingTop:10}}>Edit Student Record</Text>
                        </SafeAreaView>
                        <View style={{flexDirection:"row",paddingLeft:60,paddingTop:30}}>
                            <View>
                                <Text style={{color:"#D3D3D3",padding:10}}>RollNumber</Text>
                                <Text style={{color:"#D3D3D3",padding:10,paddingTop:40}}>Name</Text>
                                <Text style={{color:"#D3D3D3",padding:10,paddingTop:25}}>Age</Text>
                                <Text style={{color:"#D3D3D3",padding:10,paddingTop:30}}>Class</Text>
                                </View>
                                <View style={{paddingLeft:10,paddingTop:5}}>
                                <TextInput  style={{padding:10,borderWidth:2,width:100,borderColor:"#D3D3D3"}} onChangeText={(textValue) => setRollNumber(textValue)}/>
                                <Text/>
                                <TextInput  style={{padding:10,borderWidth:2,width:100,borderColor:"#D3D3D3"}} onChangeText={(textValue) => setName(textValue)}/>
                                <Text/>
                                <TextInput  style={{padding:10,borderWidth:2,width:100,borderColor:"#D3D3D3"}} onChangeText={(textValue) => setAge(textValue)}/>
                                <Text/>
                                <TextInput  style={{padding:10,borderWidth:2,width:100,borderColor:"#D3D3D3"}} onChangeText={(textValue) => setClass(textValue)}/>
                                </View>
                        </View>
                        <Button title="Edit" color="blue" onPress={() => onEditButton()} />
                        <TouchableOpacity onPress={() => setEditModal(false)} style={{flexDirection:"row",paddingLeft:170,paddingTop:10}}>
                        <FontAwesome name="remove" size={24} color="red" />
                        <Text style={{color:"red",paddingTop:5}}>Cancel</Text>
                        </TouchableOpacity>
                </View>
                </Modal>
            </View>
    )
}
