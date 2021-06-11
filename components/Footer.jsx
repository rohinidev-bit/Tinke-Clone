import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Footer() {
	return (
		<View style={styles.container}>
			<View>
				<TouchableOpacity>
					<Text> Shop Watches</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text> Shop Straps </Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text> About Straps </Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text> About Tinker </Text>
				</TouchableOpacity>
			</View>
			<View>
				<TouchableOpacity>
					<Text> Help</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text> Returns </Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text> Contact </Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text> Policies </Text>
				</TouchableOpacity>
			</View>
			<View>
				<Text>
					<Icon name="logo-instagram" size={30} />;
			</Text>

				<Text>
					<Icon name="logo-pinterest" size={30} />;
			</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
