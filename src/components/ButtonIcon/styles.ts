import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import theme from '../../theme'

export type ButtonIconTypeStyleProps = 'success' | 'danger'

type Props = {
  type: ButtonIconTypeStyleProps
}

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`

export const Icon = styled(MaterialIcons).attrs(({ type }: Props) => ({
  size: 24,
  color: type === 'danger' ? theme.colors.red[700] : theme.colors.green[700],
}))``
