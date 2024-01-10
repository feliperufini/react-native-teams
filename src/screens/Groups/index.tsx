import { useState } from 'react'
import { FlatList } from 'react-native'
import { Header } from '../../components/Header'
import { Highlight } from '../../components/Highlight'
import { GroupCard } from '../../components/GroupCard'
import { ListEmpty } from '../../components/ListEmpty'
import { Button } from '../../components/Button'
import { Container } from './styles'

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

  return (
    <Container>
      <Header />
      <Highlight title="Times" subtitle="Jogue com a sua galera!" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={
          <ListEmpty message="🕹 Ainda não existem times cadastrados 🎮" />
        }
      />
      <Button title="Criar novo time" />
    </Container>
  )
}
