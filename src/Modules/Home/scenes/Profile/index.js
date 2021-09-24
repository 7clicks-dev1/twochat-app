import { Box, NativeBaseProvider } from 'native-base';
import React from 'react';
import { Image } from 'react-native';
import { Text, View } from 'react-native';
import styles from './styles';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';
EvilIcons.loadFont();
AntDesign.loadFont();
SimpleLineIcons.loadFont();
Ionicons.loadFont();

const Profile = () => {
  return (
    <NativeBaseProvider>
      <Box style={styles.StarterContainer}>
        <Image
          style={styles.img}
          marginLeft={15}
          source={require('../../../../Assets/images/avatarPerfil.png')}
        />

        <Box marginX={5}>
          <Text style={styles.Name}>Rafael Santos</Text>
          <Text>Blumenau - SC</Text>
        </Box>
      </Box>
      <View style={styles.border} />
      <View style={styles.container}>
        <Text style={styles.options}>
          <Ionicons name='wallet-outline' size={20} color='#000' />
          {'  '} Minha Carteira
        </Text>
        <Text style={styles.options}>
          <SimpleLineIcons name='bag' size={20} color='#000' />
          {'  '} Minhas Compras
        </Text>
        <Text style={styles.options}>
          <AntDesign color='#000' size={20} name='hearto' /> {'  '}Favoritos
        </Text>
        <Text style={styles.options}>
          <EvilIcons name='gear' size={25} color='#000' />
          {'  '} Configurações de Conta
        </Text>
      </View>
    </NativeBaseProvider>
  );
};

export default Profile;
