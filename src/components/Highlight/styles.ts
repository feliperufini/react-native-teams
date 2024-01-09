import styled from 'styled-components/native'
import theme from '../../theme'

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`

export const Title = styled.Text`
  text-align: center;
  font-size: ${theme.fontSizes.xl};
  font-family: ${theme.fontFamilies.bold};
  color: ${theme.colors.gray[50]};
`

export const SubTitle = styled.Text`
  text-align: center;
  font-size: ${theme.fontSizes.md};
  font-family: ${theme.fontFamilies.regular};
  color: ${theme.colors.gray[300]};
`
