import styled from 'styled-components/native'
import theme from '../../theme'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Message = styled.Text`
  text-align: center;
  font-size: ${theme.fontSizes.sm};
  font-family: ${theme.fontFamilies.regular};
  color: ${theme.colors.gray[300]};
`
