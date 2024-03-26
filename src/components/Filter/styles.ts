import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'
import theme from '../../theme'

export type FilterStyleProps = {
  isActive?: boolean
}

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  ${({ isActive }: FilterStyleProps) =>
    isActive &&
    css`
      border: 1px solid ${theme.colors.green[700]};
    `}

  border-radius: 4px;
  margin-right: 12px;
  height: 38px;
  width: 70px;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  font-family: ${theme.fontFamilies.bold};
  font-size: ${theme.fontSizes.sm};
  color: ${theme.colors.gray[50]};
  text-transform: uppercase;
`
