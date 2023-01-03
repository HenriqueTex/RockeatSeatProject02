import { Header } from "@components/header";
import { Highlight } from "@components/highlight";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { Input } from "@components/input";
import { ButtonIcon } from "@components/buttonIcon";
import { Filter } from "@components/filter";
import { FlatList } from "react-native";
import { useState } from "react";

export function Players() {
	const [team, setTeam] = useState('time A')
	const [players, setPlayers] = useState(['jo','maria'])
	
	const x= [['timeA', 'timeB'], ['timec', 'timed']];
	
	const random = x[Math.floor(Math.random() * x.length)]
	const test = () => { x[0].push('d')  }
	
	
	return(
	<Container>
		<Header showBackButton/>
		
		<Highlight
			title="Jogadores"
			subtitle="Adicione a galera. "
		
		/>
		
		<Form>
			<Input  placeholder="Nome da Pessoa"/>
			<ButtonIcon icon="add"/>
		</Form>
		
		<HeaderList>
			<FlatList
			
			data={['time A','time B']}
			keyExtractor = {item => item}
			renderItem={({item}) => (
				<Filter 
				title={item} 
				isActive={item === team}
				onPress={() => setTeam(item)}
				/>
				
				)}
				horizontal
				/>
				<NumberOfPlayers >
					{players.length} 
				</NumberOfPlayers>
		</HeaderList>
	</Container>
	)

}