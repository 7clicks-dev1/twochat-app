import { Box, Button, Center, FormControl, Input, Stack } from 'native-base';
import React from 'react';
import { Text } from 'react-native';
import { colors } from '../../../../../../theme';
import styles from '../../styles';

const RecoveryForm = () => {
  return (
    <>
      <Box padding={25} backgroundColor='#fff' borderRadius={30}>
        <Center>
          <FormControl mt={4}>
            <Stack>
              <FormControl.Label mb={3}>Número de telefone</FormControl.Label>
              <Input borderRadius={18} placeholder='+55 45 99112333' />
              <FormControl.ErrorMessage>
                Você pode usar seu número de telefone ou email
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          <Box mt={10}>
            <Text style={{ textAlign: 'center', color: '#747F9E' }}>
              Enviaremos um código de Validação para seu número cadastrado
            </Text>
          </Box>
          <Box mt={10}>
            <Button paddingY={4} paddingX={10} borderRadius={30} backgroundColor={colors.secondary}>
              Recuperar Minha senha
            </Button>
          </Box>
        </Center>
      </Box>
    </>
  );
};
export default RecoveryForm;
