import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native'
import theme from '../theme'

import { AppRoutes } from './app.routes'

export function Routes() {
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.gray[600] }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  )
}
