import { UsersThree } from 'phosphor-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import theme from '../../theme'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${theme.colors.gray[600]};
  padding: 24px;
`

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`
export const Icon = styled(UsersThree).attrs(() => ({
  size: 56,
  color: theme.colors.green[700],
}))`
  align-self: center;
`
