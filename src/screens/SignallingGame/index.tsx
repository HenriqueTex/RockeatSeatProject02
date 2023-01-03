import { SafeAreaView, View } from "react-native";
import { Container, Flex, Lines, StatesBox, Title } from "./styles";
import { Icon } from "@components/buttonIcon/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Line } from "@components/Line";



export function SignallingGame() {
	return (

		<Container>
			<SafeAreaView style={{ flex: 1 }}>
				<Flex>
					<StatesBox>
						<Title>test</Title>
					</StatesBox>
					<StatesBox>
						<Title>test1</Title>
					</StatesBox>
					<StatesBox>
						<Title>test2</Title>
					</StatesBox>
					<StatesBox>
						<Title>test3</Title>
					</StatesBox>
				</Flex>
				<View style={{ position: "relative" }}>
					<View style={{ position: "absolute", left: 45, top: 35,
						height: 3, backgroundColor: "white", width: 150, transform: [
							// { translateX: 96 / 2 },
							// { translateY: 3 / 2 },
							{ rotate: "30deg" },
						]
					}} >
					</View>
					<View style={{ position: "absolute", left: 115, top: 35,
						height: 3, backgroundColor: "white", width: 96, transform: [
							// { translateX: 96 / 2 },
							// { translateY: 3 / 2 },
							{ rotate: "60deg" },
						]
					}} >
					</View>
					<View style={{ position: "absolute", left: 155, top: 35,
						height: 3, backgroundColor: "white", width: 96, transform: [
							// { translateX: 96 / 2 },
							// { translateY: 3 / 2 },
							{ rotate: "120deg" },
						]
					}} >
					</View>
					<View style={{position: "absolute", left: 175, top: 33,
						height: 3, backgroundColor: "white", width: 150, transform: [
							// { translateX: 96 / 2 },
							// { translateY: 3 / 2 },
							{ rotate: "150deg" },
						]
					}} >
					</View>
				</View>
				<View style={{ alignItems: "center", marginTop: 64 }}>
					{/* <Lines/> */}
					<MaterialIcons name="emoji-people" size={96} color="white" />
				</View>

			</SafeAreaView>
		</Container>
	)

}