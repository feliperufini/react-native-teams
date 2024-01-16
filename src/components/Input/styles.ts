import { TextInput } from 'react-native'
import styled from 'styled-components/native'
import theme from '../../theme'

export const Container = styled(TextInput)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  background-color: ${theme.colors.gray[700]};
  color: ${theme.colors.gray[50]};
  border-radius: 6px;
  padding: 16px;
  font-family: ${theme.fontFamilies.regular};
  font-size: ${theme.fontSizes.md};
`
