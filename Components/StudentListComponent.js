import React, { useState } from "react";
import {View,Text,StyleSheet,ScrollView,SafeAreaView,TouchableOpacity} from "react-native";
import StudentListItem from "./StudentListItemComponent";
import AddStudent from "./AddStudentComponent"

export default function StudentListComponent({Student,OnUpdate,OnDelete}){
  const OnEdit = (obj) => {
    OnUpdate(obj)
}
const OnRemove = (obj) => {
  OnDelete(obj)
}
    return(
      <ScrollView>
          <SafeAreaView style={{backgroundColor:"#D3D3D3",height:60}}>
            <View style={{flexDirection:"row",paddingTop:10}}>
            <Text style={{color:"#fff"}}>Rollnumber</Text>
            <Text style={{color:"#fff",paddingLeft:35}}>Name</Text>
            <Text style={{color:"#fff",paddingLeft:35}}>Age</Text>
            <Text style={{color:"#fff",paddingLeft:35}}>Class</Text>
            </View>
            </SafeAreaView>
      {Student.map((item) =>{
           return <StudentListItem Student={item} OnUpdate={OnEdit} onDelete={OnRemove}/>
      })}
  </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });