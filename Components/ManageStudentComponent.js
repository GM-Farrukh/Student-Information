import React, { useState } from "react";
import {View,Text,Alert,ScrollView} from "react-native";
import StudentList from "./StudentListComponent"
import AddStudent from "./AddStudentComponent"
import EditStudent from "./EditStudentComponent";

export default function ManageStudentComponent(){
  const [modal,setModal] = useState(false)
  const [EditModal,setEditModal] = useState(false)
  const [EditStd,setEditStd] = useState()
  const [Rollnumber,setRollNumber] = useState()
  const [Name,setName] = useState()
  const [Age,setAge] = useState()
  const [Class,setClass] = useState()
    const [Student,setStudent] = useState([
    ])
    const OnAdd = () => {
      // Student.splice(Student)
      setModal(true)
    }
    const OnSave = (std) => {
      var index = Student.findIndex(x => x.Rollnumber == std.Rollnumber)
      if(index == -1){
            setStudent(prevItems => {
                return [std, ...prevItems];
              })
              setModal(false)
            }else{
                Alert.alert("WARNING","This RollNumber Already Exsists!")
              }
      }
      const OnDelete = (deletestd) => {
        var newArray = [...Student]
        var index = Student.findIndex(ind => ind.Rollnumber == deletestd.Rollnumber)
          newArray.splice(index,1)
              setStudent(newArray)
        }

      const OnEditStd = (obj) => {
        setEditStd(obj)
        setEditModal(true)
      }
      const OnUpdate = (editstd) => {
        var newArray = [...Student]
        var index = newArray.findIndex(ind => ind.Rollnumber == editstd.Rollnumber)
        if(index == -1){
          Alert.alert("WARNING","This Record Does Not Exsists!")
        }else{
          newArray[index] = editstd
          setStudent(newArray)
        }
      }
      const onEditButton = () => {
        OnUpdate({Rollnumber,Name,Age,Class})
      }

    return(
        <ScrollView>
        <StudentList Student={Student} OnSave={OnSave} OnUpdate={OnEditStd} OnDelete={OnDelete}/>
        <AddStudent OnSave={OnSave} modal={modal} setModal={setModal} OnAdd={OnAdd}/>
        <EditStudent EditModal={EditModal} setEditModal={setEditModal}
         EditStd={EditStd} OnEditStd={OnEditStd}
         setRollNumber={setRollNumber}
         setName={setName}
         setAge={setAge}
         setClass={setClass}
         onEditButton={onEditButton}
        />
        </ScrollView>
    )
}

// if (!std) {
//   Alert.alert('No item entered','Please enter an item when adding to your shopping list')
// } else {}

// const OnDeleteState = (deletestate) => {
//   var newArray = [...Student]
//     newArray.splice(newArray)
//         setStudent(newArray)
//   }
