
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/auth/Login'
import Register from '../screens/auth/Register'
import TabNavigator from './TabNavigator'

const Stack=createStackNavigator()
const StackNavigator = () => {
  return (
    <Stack.Navigator >
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='TabNavigator' component={TabNavigator}/>

    </Stack.Navigator>

   
  )
}
export default StackNavigator
