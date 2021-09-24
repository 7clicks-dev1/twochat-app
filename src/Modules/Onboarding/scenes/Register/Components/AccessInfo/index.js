import React from 'react';
import { Button, FormControl, Input, Stack, Text, View } from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import { ScrollView } from 'react-native';
import Navbar from '../../../../../../UI/Components/Navbar';
import PageBody from '../../../../../../UI/Components/PageBody';
import { Logo } from '../ContactInfo/styles';

import styles from './styles';
// import { Container } from './styles';

const logo = require('../../../../../../Assets/images/logo.png');

const PersonalInfo = ({ onNext, onBack }) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm();

  function handleNextStep () {}

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Navbar callback={onBack} buttonTitle='Dados pessoais' />

      <PageBody>
        <View alignItems='center' mt={20}>
          <Text style={styles.title}>Sua conta foi criada com sucesso</Text>
          <Logo resizeMode='contain' source={logo} />
        </View>

        {/* <View>
          <FormControl isRequired mt={4}>
            <Stack>
              <FormControl.Label>Email:</FormControl.Label>
              <Controller
                control={control}
                rules=""
                defaultValue=""
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onBlur={onBlur}
                    value={value}
                    onChangeText={onChange}
                    keyboardType="email-address"
                    secureTextEntry
                    onSubmitEditing={handleSubmit(handleNextStep)}
                    returnKeyLabel="Acessar"
                    placeholder="Email"
                  />
                )}
              />

              <FormControl.ErrorMessage>
                você pode usar seu numero de celular ou email.
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          <FormControl isRequired mt={4}>
            <Stack>
              <FormControl.Label>Celular:</FormControl.Label>
              <Controller
                control={control}
                rules=""
                defaultValue=""
                name="last_name"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onBlur={onBlur}
                    value={value}
                    onChangeText={onChange}
                    keyboardType="phone-pad"
                    secureTextEntry
                    onSubmitEditing={handleSubmit(handleNextStep)}
                    returnKeyType="go"
                    returnKeyLabel="Acessar"
                    placeholder="Celular"
                  />
                )}
              />

              <FormControl.ErrorMessage>
                você pode usar seu numero de celular ou email.
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
        </View> */}
      </PageBody>
      <View px={22} mb={90}>
        <Button style={styles.btn} variant='btnCreateAcount' onPress={onNext}>
          Ir para a pagina inicial
        </Button>
      </View>
    </ScrollView>
  );
};

export default PersonalInfo;
