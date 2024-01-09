import styled from 'styled-components/native'
import theme from '../../theme'
import { TouchableOpacity } from 'react-native'

export type ButtonTypeStyleProps = 'success' | 'danger'

type Props = {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ type }: Props) =>
    type === 'success' ? theme.colors.green[700] : theme.colors.red[700]};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  font-size: ${theme.fontSizes.md};
  color: ${theme.colors.gray[50]};
  font-family: ${theme.fontFamilies.bold};
`
