import { Box } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import styled from 'styled-components';

const Imagebox = styled(Image)`
  width: 90px;
  height: 90px;
`;

const Categorias = () => {
  return (
    <Box>
      <Text style={styles.title}>Categorias</Text>
      <View style={styles.container}>
        <ScrollView horizontal>
          <Box style={styles.categoryBox}>
            <Imagebox
              source={require('../../../../../../Assets/images/category/eletronicos.png')}
            />
            <Text style={styles.CategoryText}>Eletrônicos</Text>
          </Box>
          <Box style={styles.categoryBox}>
            <Imagebox source={require('../../../../../../Assets/images/category/vestuario.png')} />
            <Text style={styles.CategoryText}>Vestuário</Text>
          </Box>
          <Box style={styles.categoryBox}>
            <Imagebox source={require('../../../../../../Assets/images/category/infantil.png')} />
            <Text style={styles.CategoryText}>Infantil</Text>
          </Box>
          <Box style={styles.categoryBox}>
            <Imagebox source={require('../../../../../../Assets/images/category/casa.png')} />
            <Text style={styles.CategoryText}>Casa</Text>
          </Box>
          <Box style={styles.categoryBox}>
            <Imagebox source={require('../../../../../../Assets/images/category/jardim.png')} />
            <Text style={styles.CategoryText}>Jardim</Text>
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
  categoryBox: {
    padding: 10
  },
  CategoryText: {
    textAlign: 'center',
    marginTop: 10,
    color: '#6930C3',
    fontWeight: '500'
  }
});
export default Categorias;
