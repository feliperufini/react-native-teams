import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'
import theme from '../../theme'

export const Container = styled.View`
  width: 100%;
  height: 56px;
  background-color: ${theme.colors.gray[500]};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`

export const Name = styled.Text`
  flex: 1;
  font-family: ${theme.fontFamilies.regular};
  font-size: ${theme.fontSizes.md};
  color: ${theme.colors.gray[200]};
`

export const Icon = styled(MaterialIcons).attrs(() => ({
  size: 24,
  color: theme.colors.gray[200],
}))`
  margin-left: 16px;
  margin-right: 4px;
`
