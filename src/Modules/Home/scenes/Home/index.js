import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { Box, Input, VStack } from 'native-base';
import React from 'react';
import { ImageBackground, Text } from 'react-native';
import Page from '../../../../UI/Components/Page';
import Categorias from './components/categorias';
import Promocao from './components/Promocoes';

import styles from './styles';

const logo = require('../../../../Assets/images/background.png');

const Home = () => {
  return (
    <Page margin={15}>
      <Box style={styles.containerExplorar}>
        <Text style={styles.title}>Explorar</Text>
        <VStack style={styles.inputContainer}>
          <Input
            style={styles.input}
            placeholder="Buscar"
            size="sm"
            InputRightElement={<MaterialIcons name="search" size={30} color="black" />}
          />
        </VStack>
      </Box>
      <Box>
        <Categorias />
      </Box>

      <ImageBackground style={styles.banner} resizeMode="cover" source={logo}>
        <Box style={styles.TextContainer}>
          <Text style={styles.bannerText}>Facilitando a vida da sua empresa</Text>
          <Text style={styles.white}>
            Ver mais <AntDesign color="white" size={20} name="arrowright" />
          </Text>
        </Box>
      </ImageBackground>
      <Box>
        <Promocao />
      </Box>
    </Page>
  );
};

export default Home;
