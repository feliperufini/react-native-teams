import { useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { groupCreate } from '../../storage/group/groupCreate'
import { AppError } from '../../utils/AppError'

import { Container, Content, Icon } from './styles'
import { Header } from '../../components/Header'
import { Highlight } from '../../components/Highlight'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

export function NewGroup() {
  const [groupName, setGroupName] = useState('')

  const navigation = useNavigation()

  async function handleNewGroup() {
    try {
      if (groupName.trim().length === 0) {
        return Alert.alert('Nova Equipe', 'Informe o nome da equipe!')
      }

      await groupCreate(groupName)
      navigation.navigate('players', { group: groupName })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo Equipe', error.message)
      } else {
        Alert.alert('Novo Equipe', 'Não foi possível criar uma nova equipe!')
        console.log(error)
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova equipe"
          subtitle="Crie a equipe para adicionar novas pessoas"
        />
        <Input
          placeholder="Nome da equipe"
          onChangeText={setGroupName}
          style={{ marginBottom: 20 }}
        />
        <Button title="Criar" onPress={handleNewGroup} />
      </Content>
    </Container>
  )
}
