import theme from '../../theme'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.gray[600]};
`

export const LoadIndicator = styled.ActivityIndicator.attrs(() => ({
  color: theme.colors.red[500],
}))``
