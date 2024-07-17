import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React,{useState} from 'react'
import Freinds from './subscreens/Freinds';
import Groups from './subscreens/Groups';
import Activity from './subscreens/Activity';
import SettleUp from './subscreens/SettleUp';
import Account from './subscreens/Account';

const MainHandle = () => {
    const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={{ flex: 1 }}>
    {selectedTab == 0 ? (<Freinds />) : selectedTab == 1 ? (<Groups />) : selectedTab == 2 ? (<SettleUp />) : selectedTab == 3 ? (<Activity />) : (< Account/>)} 
    <View style={{ height: 70, width: '100%', position: 'absolute', bottom: 0, backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center' }}>
      <TouchableOpacity style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' ,borderTopWidth:5,borderTopColor:selectedTab==0?'#632696':'white', }}
      onPress={()=>{
        setSelectedTab(0);
      }}>
        <Image source={require("../images/user.png")} style={{ width: 24, height: 24 ,tintColor:selectedTab==0?'#632696':'black'}} />
      </TouchableOpacity>
      <TouchableOpacity style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' ,borderTopWidth:5,borderTopColor:selectedTab==1?'#632696':'white',  }}
      onPress={()=>{
        setSelectedTab(1);
      }}>
        <Image source={require("../images/people.png")} style={{ width:35, height: 35,tintColor:selectedTab==1?'#632696':'black'}} />
      </TouchableOpacity>
      <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={{ width: 60, height: 60, backgroundColor:selectedTab==2?'#632696':'black', borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}
        onPress={()=>{
          setSelectedTab(2);
        }}>
          <Image source={require("../images/plus.png")} style={{ width: '60%', height: '60%', tintColor: 'white' }} />
        </TouchableOpacity>

      </View>

      <TouchableOpacity style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' ,borderTopWidth:5,borderTopColor:selectedTab==3?'#632696':'white',  }}
      onPress={()=>{
        setSelectedTab(3);
      }}>
        <Image source={require("../images/activity.png")} style={{ width: 32, height: 32 ,tintColor:selectedTab==3?'#632696':'black'}} />
      </TouchableOpacity>
      <TouchableOpacity style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' ,borderTopWidth:5,borderTopColor:selectedTab==4?'#632696':'white',  }}
      onPress={()=>{
        setSelectedTab(4);
      }}>
        <Image source={require("../images/user.png")} style={{ width: 24, height: 24,tintColor:selectedTab==4?'#632696':'black' }} />
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default MainHandle

const styles = StyleSheet.create({})