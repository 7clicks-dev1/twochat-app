import React from 'react';
import { Container, Box, Text, Center } from 'native-base';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import RecoveryForm from './components/RecoveryForm';
import { Logo } from './styles';
import Page from '../../../../UI/Components/Page';
import { colors } from '../../../../theme';

const Login = () => {
  const insets = useSafeAreaInsets();
  return (
    <Page backgroundColor={colors.amber}>
      <Container contentContainerStyle={{ flexGrow: 1 }} style={styles.Container}>
        <Box>
          <Center>
            <Logo resizeMode="contain" source={require('~/Assets/images/logo.png')} />
          </Center>
        </Box>
        <Box
          backgroundColor="#eee"
          marginBottom={-insets.bottom}
          paddingBottom={insets.bottom}
          borderTopRadius={30}
        >
          <RecoveryForm />
        </Box>
      </Container>
    </Page>
  );
};
const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    marginHorizontal: 40
  }
});

export default Login;
