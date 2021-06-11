import React from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import Header from "../components/Header"
import Footer from "../components/Footer"
export default function Home() {
	return (
		<SafeAreaView>
			<ScrollView>
				<View style={styles.container}>
					<Header style={styles.menuicon} />
					{/* <View>
						<ImageBackground source={{ uri: 'https://cdn.shopify.com/s/files/1/0877/8598/products/BFWC002_1800x1800.jpg?v=1574889945' }} style={styles.coverImage} >
							<Text> It's Midnight</Text>
							<Text> The Midnight Limited Edition features sublte accents of white luminescent hands and raised steel indices</Text>
						</ImageBackground>
					</View>
					<View>
						<TouchableOpacity>
							<ImageBackground source={{ uri: 'https://i.pinimg.com/originals/57/76/20/57762079ab9a292ea7a3c3fa672a3e6b.jpg' }} style={styles.coverImage} >
								<Text> Shop the Line</Text>
							</ImageBackground>
						</TouchableOpacity>
						<TouchableOpacity>
							<ImageBackground source={{ uri: 'https://cdn.faire.com/fastly/a22c6af03d7ced9696745eed16caa2cd1df4e79a5a6d94205273dd4e942f5f1f.png?bg-color=FFFFFF&dpr=1&fit=crop&format=jpg&height=350&width=350' }} style={styles.coverImage} >
								<Text> Shop Straps</Text>
							</ImageBackground>
						</TouchableOpacity>
						<TouchableOpacity>
							<ImageBackground source={{ uri: 'https://mindsparklemag.com/wp-content/uploads/2017/11/Tinker-Watches-design-mindsparkle-mag-10.jpg' }} style={styles.coverImage} >
								<Text> The Gift of Tinker</Text>
							</ImageBackground>
						</TouchableOpacity>
					</View>
					<View>
						<ImageBackground source={{ uri: 'https://imgs.abduzeedo.com/files/francois/tinker/Tinker4.jpg' }} style={styles.coverImage}>
							<Text> We transparently build high quality minimal watches from the finest components and matrials </Text>
							<TouchableOpacity>
								<Text> Shop Now</Text>
							</TouchableOpacity>
						</ImageBackground>
					</View> */}
				</View>
				<Footer />
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',

	},
	logo: {
		height: 50,
		width: 100,
		marginTop: 25,
		marginHorizontal: 20
	},
	coverImage: {
		height: 50,
		width: 100,
	},
	menuicon: {
		marginRight: 20,
		marginHorizontal: 20
	},
});
