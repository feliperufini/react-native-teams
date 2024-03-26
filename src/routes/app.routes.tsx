import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Groups } from '../screens/Groups'
import { Players } from '../screens/Players'
import { NewGroup } from '../screens/NewGroup'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator initialRouteName="groups" screenOptions={{ headerShown: false }}>
      {/* initialRouteName => define a primeira rota a ser carregada
      se não passar nada, pega a primeira rota da lista */}
      <Screen name="groups" component={Groups} />
      <Screen name="new_group" component={NewGroup} />
      <Screen name="players" component={Players} />
    </Navigator>
  )
}
