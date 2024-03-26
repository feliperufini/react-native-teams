import { useCallback, useState } from 'react'
import { Alert, FlatList } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { groupGetAll } from '../../storage/group/groupGetAll'

import { Header } from '../../components/Header'
import { Highlight } from '../../components/Highlight'
import { GroupCard } from '../../components/GroupCard'
import { ListEmpty } from '../../components/ListEmpty'
import { Button } from '../../components/Button'
import { Container } from './styles'

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('new_group')
  }

  async function fetchGroups() {
    try {
      const data = await groupGetAll()
      setGroups(data)
    } catch (error) {
      console.log(error)
      Alert.alert('Equipes', 'Não foi possível carregar as equipes!')
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group })
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups()
    }, []),
  )

  return (
    <Container>
      <Header />
      <Highlight title="Equipes" subtitle="Jogue com a sua galera!" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <ListEmpty message="🕹 Ainda não existem equipes cadastrados 🎮" />
        }
      />
      <Button title="Criar nova equipe" onPress={handleNewGroup} />
    </Container>
  )
}
