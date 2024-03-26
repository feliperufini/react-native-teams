import { TextInput, TextInputProps } from 'react-native'
import { Container } from './styles'
import theme from '../../theme'

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>
}

export function Input({ inputRef, ...rest }: Props) {
  return (
    <Container
      ref={inputRef}
      placeholderTextColor={theme.colors.gray[300]}
      {...rest}
    />
  )
}
