import React from 'react';
import { FormControl, Input, Stack, Text, View, Container, Button, Center } from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import { Image, ScrollView, StyleSheet } from 'react-native';
import PageBody from '../../../../../../UI/Components/PageBody';
import { colors } from '../../../../../../theme';
import { Logo } from './styles';
import { useNavigation } from '@react-navigation/core';
import ONBOARDING_SCREENS from '~/Modules/Onboarding/routes/constants';

// import { Container } from './styles';

const PersonalInfo = ({ onNext }) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const navigation = useNavigation();

  function handleNextStep () {}

  return (
    <>
      <PageBody>
        <View pt={22} mt={50} mb={50}>
          <Text style={styles.title} textAlign='center' variant='title'>
            Vamos criar sua conta TwoChat
          </Text>
        </View>
        <View style={styles.Container}>
          <FormControl>
            <Stack>
              <FormControl.Label mb={3}>Numero de telefone</FormControl.Label>
              <Controller
                control={control}
                rules=''
                defaultValue=''
                name='first_name'
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    style={styles.input}
                    onBlur={onBlur}
                    value={value}
                    onChangeText={onChange}
                    keyboardType='name-phone-pad'
                    secureTextEntry
                    onSubmitEditing={handleSubmit(handleNextStep)}
                    returnKeyType='go'
                    returnKeyLabel='Acessar'
                    placeholder='+55 45991054763'
                  />
                )}
              />
            </Stack>
          </FormControl>
          <FormControl mt={4}>
            <Stack>
              <FormControl.Label mb={3}>Como quer ser chamado?</FormControl.Label>
              <Controller
                control={control}
                rules=''
                defaultValue=''
                name='first_name'
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    style={styles.input}
                    onBlur={onBlur}
                    value={value}
                    onChangeText={onChange}
                    keyboardType='name-phone-pad'
                    secureTextEntry
                    onSubmitEditing={handleSubmit(handleNextStep)}
                    returnKeyType='go'
                    returnKeyLabel='Acessar'
                    placeholder='Seu nome aqui'
                  />
                )}
              />
            </Stack>
          </FormControl>
        </View>
        {/* <View>
          <FormControl isRequired mt={4}>
            <Stack>
              <FormControl.Label>Nome:</FormControl.Label>
              <Controller
                control={control}
                rules=""
                defaultValue=""
                name="first_name"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    onBlur={onBlur}
                    value={value}
                    onChangeText={onChange}
                    keyboardType="name-phone-pad"
                    secureTextEntry
                    onSubmitEditing={handleSubmit(handleNextStep)}
                    returnKeyType="go"
                    returnKeyLabel="Acessar"
                    placeholder="Nome"
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
              <FormControl.Label>Sobrenome:</FormControl.Label>
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
                    keyboardType="name-phone-pad"
                    secureTextEntry
                    onSubmitEditing={handleSubmit(handleNextStep)}
                    returnKeyType="go"
                    returnKeyLabel="Acessar"
                    placeholder="Sobrenome"
                  />
                )}
              />

              <FormControl.ErrorMessage>
                você pode usar seu numero de celular ou email.
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
        </View> */}
        <View mt={10} px={22}>
          <Button backgroundColor={colors.secondary} onPress={onNext}>
            Criar conta
          </Button>
        </View>
        <View mt={15}>
          <Button
            onPress={() => navigation.navigate(ONBOARDING_SCREENS.LOGIN)}
            variant='simpleLink'
          >
            Ja tenho uma conta TwoChat
          </Button>
          <Text textAlign='center' color='#c1c1c1'>
            ir para o login
          </Text>
        </View>
        <Center>
          <Logo resizeMode='contain' source={require('~/Assets/images/logo.png')} />
        </Center>
      </PageBody>
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 30,
    paddingVertical: 50
  },
  title: {
    fontSize: 20,
    color: '#747F9E'
  },
  input: {
    borderRadius: 15
  }
});

export default PersonalInfo;
