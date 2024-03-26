import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import theme from '../../theme'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${theme.colors.gray[600]};
  padding: 24px;
`

export const Form = styled.View`
  width: 100%;
  background-color: ${theme.colors.gray[700]};
  flex-direction: row;
  justify-content: center;
  border-radius: 6px;
`

export const HeaderList = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: 32px 0 12px;
`

export const NumberOfPlayers = styled.Text`
  color: ${theme.colors.gray[200]};
  font-family: ${theme.fontFamilies.bold};
  font-size: ${theme.fontSizes.sm};
`
