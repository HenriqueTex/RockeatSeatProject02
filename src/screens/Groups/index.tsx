import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { Container } from './styles';

import { Header } from '@components/header';
import { Highlight } from '@components/highlight';
import { GroupCard } from '@components/groupCard';
import { useState } from 'react';
import { ListEmpty } from '@components/listEmpty';
import { Button } from '@components/button';

export  function Groups() {
  const [groups,setGroups] = useState(['teste1','teste2'])
  
  return (
		<Container>
          <Header/>
          <Highlight title="Turma" subtitle="Jogar com a tropa" />
          
          <FlatList
           data={groups}
           keyExtractor={item => item}
           renderItem={({item}) => <GroupCard title={item} />}
           contentContainerStyle={groups.length===0 && { flex:1 }}
           ListEmptyComponent={()=><ListEmpty message="Cadastre a primeira turma!"/>}
          />
          
          <Button title="Adicionar"/>
      </Container>
  );
}


