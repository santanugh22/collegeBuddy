import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CommunityScroll from '../screens/mainScreen/CommunityScroll'


const Tab=createBottomTabNavigator()
const TabNavigator = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='CommunityScroll' component={CommunityScroll}/>
        <Tab.Screen name=''/>
        <Tab.Screen/>
        

    </Tab.Navigator>
   
  )
}
export default TabNavigator
const styles = StyleSheet.create({})