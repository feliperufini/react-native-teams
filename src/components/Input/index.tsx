import { TextInputProps } from 'react-native'
import { Container } from './styles'
import theme from '../../theme'

export function Input({ ...rest }: TextInputProps) {
  return <Container placeholderTextColor={theme.colors.gray[300]} {...rest} />
}
