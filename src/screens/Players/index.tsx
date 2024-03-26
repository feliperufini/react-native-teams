import { useEffect, useState, useRef } from 'react'
import { Alert, FlatList, TextInput } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import { playerAddByGroup } from '../../storage/player/playerAddByGroup'
import { playersGetByGroupAndTeam } from '../../storage/player/playerGetByGroupAndTeam'
import { PlayerStorageDTO } from '../../storage/player/PlayerStorageDTO'
import { playerRemoveByGroup } from '../../storage/player/playerRemoveByGroup'
import { groupRemoveByName } from '../../storage/group/groupRemoveByName'

import { AppError } from '../../utils/AppError'

import { Container, Form, HeaderList, NumberOfPlayers } from './styles'
import { Input } from '../../components/Input'
import { Filter } from '../../components/Filter'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Highlight } from '../../components/Highlight'
import { ListEmpty } from '../../components/ListEmpty'
import { ButtonIcon } from '../../components/ButtonIcon'
import { PlayerCard } from '../../components/PlayerCard'

type RouteParams = {
  group: string
}

export function Players() {
  const [team, setTeam] = useState('Time A')
  const [newPlayerName, setNewPlayerName] = useState('')
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([])

  const navigation = useNavigation()
  const route = useRoute()
  const { group } = route.params as RouteParams

  const newPlayerNameInputRef = useRef<TextInput>(null)

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert(
        'Novo Jogador',
        'Informe o nome do jogador para adicionar!',
      )
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    }

    try {
      await playerAddByGroup(newPlayer, group)

      setNewPlayerName('')
      newPlayerNameInputRef.current?.blur()

      fetchPlayersByTeam()
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo Jogador', error.message)
      } else {
        Alert.alert('Novo Jogador', 'Não foi possível adicionar!')
        console.log(error)
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      const playersByTeam = await playersGetByGroupAndTeam(group, team)
      setPlayers(playersByTeam)
    } catch (error) {
      Alert.alert(
        'Jogadores',
        'Não foi possível carregar os jogadores do time selecionado!',
      )
      console.log(error)
    }
  }

  async function handlePlayerRemove(playerName: string) {
    try {
      await playerRemoveByGroup(playerName, group)
      fetchPlayersByTeam()
    } catch (error) {
      console.log(error)
      Alert.alert('Remover pessoa', 'Não foi possível remover esta pessoa!')
    }
  }

  async function groupRemove() {
    try {
      await groupRemoveByName(group)
      navigation.navigate('groups')
    } catch (error) {
      console.log(error)
      Alert.alert('Remover equipe', 'Não foi possível remover este equipe!')
    }
  }

  async function handleGroupRemove() {
    Alert.alert('Remover equipe', 'Deseja remover esta equipe?', [
      { text: 'Não', style: 'cancel' },
      { text: 'Sim', onPress: () => groupRemove() },
    ])
  }

  useEffect(() => {
    fetchPlayersByTeam()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [team])

  return (
    <Container>
      <Header showBackButton></Header>
      <Highlight title={group} subtitle="adicione a galera e separe os times" />
      <Form>
        <Input
          inputRef={newPlayerNameInputRef}
          value={newPlayerName}
          onChangeText={setNewPlayerName}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </Form>
      <HeaderList>
        <FlatList
          horizontal
          data={['Time A', 'Time B']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>
      <FlatList
        style={{ marginBottom: 20 }}
        data={players}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard
            name={item.name}
            onRemove={() => handlePlayerRemove(item.name)}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time." />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          players.length === 0 && { flex: 1 }, // centralizar a mensagem de "não há pessoas"
        ]}
      />
      <Button
        title="Remover equipe"
        type="danger"
        onPress={handleGroupRemove}
      />
    </Container>
  )
}
