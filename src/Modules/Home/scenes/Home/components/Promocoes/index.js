import { Box } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import styled from 'styled-components';

const Imagebox = styled(Image)`
  width: 90px;
  height: 90px;
`;

const Promocao = () => {
  return (
    <Box>
      <Text style={styles.title}>Promoções</Text>
      <View style={styles.container}>
        <ScrollView horizontal>
          <Box style={styles.promoContainer}>
            <Imagebox
              source={require('../../../../../../Assets/images/promocoes/SamsungS21.png')}
            />
            <Text style={styles.name}> Samsung S21 Ultra</Text>
            <Text style={styles.type}>celular</Text>
            <Text style={styles.price}>R$ 3.899,00</Text>
          </Box>
          <Box style={styles.promoContainer}>
            <Imagebox
              source={require('../../../../../../Assets/images/promocoes/MotorolaMotoG8.png')}
            />
            <Text style={styles.name}>Motorola Moto G8</Text>
            <Text style={styles.type}>celular</Text>
            <Text style={styles.price}>R$ 3.899,00</Text>
          </Box>
          <Box style={styles.promoContainer}>
            <Imagebox
              source={require('../../../../../../Assets/images/promocoes/iphone12Pro.png')}
            />
            <Text style={styles.name}>Iphone 12 Pro Max</Text>
            <Text style={styles.type}>celular</Text>
            <Text style={styles.price}>R$ 3.899,00</Text>
          </Box>
          <Box style={styles.promoContainer}>
            <Imagebox
              source={require('../../../../../../Assets/images/promocoes/SamsungS21.png')}
            />
            <Text style={styles.name}>Samsung S21 Ultra</Text>
            <Text style={styles.type}>celular</Text>
            <Text style={styles.price}>R$ 3.899,00</Text>
          </Box>
        </ScrollView>
      </View>
    </Box>
  );
};
const styles = StyleSheet.create({
  title: {
    fontWeight: '800',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    paddingLeft: 10
  },
  container: {
    marginBottom: 20,
    flexDirection: 'row'
  },
  promoContainer: {
    maxWidth: 110,
    padding: 10
  },
  name: {
    marginVertical: 5,
    fontWeight: '300'
  },
  type: {
    marginVertical: 5,
    fontWeight: '600',
    color: '#CCCCCC'
  },
  price: {
    marginVertical: 5,
    fontWeight: '300'
  }
});
export default Promocao;
