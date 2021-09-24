import React from 'react';
import { Button, Center, FormControl, Input, Stack, Text, View } from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import { Image, ScrollView, StyleSheet } from 'react-native';
import Navbar from '../../../../../../UI/Components/Navbar';
import PageBody from '../../../../../../UI/Components/PageBody';
import { colors } from '../../../../../../theme';
import { Logo } from './styles';

// import { Container } from './styles';

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
      <View px={22}>
        <Text color='#747F9E' textAlign='center' variant='title'>
          Agora temos que validar o seu telefone
        </Text>
        <Text color='#747F9E' textAlign='center'>
          A validação do telefone é necessaria para garantir a segurança na plataforma
        </Text>
      </View>
      <PageBody>
        <View style={styles.container}>
          <FormControl mt={4}>
            <Stack>
              <FormControl.Label>Número de telefone</FormControl.Label>
              <Controller
                control={control}
                rules=''
                defaultValue=''
                name='email'
                ß
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    mt={4}
                    borderRadius={10}
                    onBlur={onBlur}
                    value={value}
                    onChangeText={onChange}
                    keyboardType='email-address'
                    secureTextEntry
                    onSubmitEditing={handleSubmit(handleNextStep)}
                    returnKeyLabel='Acessar'
                    placeholder='+55 45991054763'
                  />
                )}
              />
              <FormControl.ErrorMessage>
                você pode usar seu numero de celular ou email.
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          <Text color='#747F9E' mt={4} textAlign='center'>
            Informe o número de confirmação enviado para o seu telefone
          </Text>

          <FormControl mt={4}>
            <Stack>
              <Controller
                control={control}
                rules=''
                defaultValue=''
                name='email'
                ß
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input
                    mt={4}
                    borderRadius={10}
                    onBlur={onBlur}
                    value={value}
                    onChangeText={onChange}
                    keyboardType='email-address'
                    secureTextEntry
                    onSubmitEditing={handleSubmit(handleNextStep)}
                    returnKeyLabel='Acessar'
                    placeholder='Digite o codigo de confirmação'
                  />
                )}
              />
              <FormControl.ErrorMessage>
                você pode usar seu numero de celular ou email.
              </FormControl.ErrorMessage>
            </Stack>
          </FormControl>
          <Text my={5} color='#747F9E' textAlign='center' fontSize={13}>
            voce pode pedir um novo codigo em 45s
          </Text>
        </View>
        <View px={22}>
          <Button mt={5} backgroundColor={colors.secondary} onPress={onNext}>
            Proximo
          </Button>
          <Button mt={5} variant='simpleLink' onPress={onBack}>
            Voltar
          </Button>
        </View>
        {/* <FormControl isRequired mt={4}>
          <Stack>
            <FormControl.Label>Email:</FormControl.Label>
            <Controller
              control={control}
              rules=""
              defaultValue=""
              name="email"
              ß
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
        </FormControl> */}
        <Center mt={-10}>
          <Logo resizeMode='contain' source={require('~/Assets/images/logo.png')} />
        </Center>
      </PageBody>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginVertical: 10,
    padding: 20,
    borderRadius: 20
  }
});
export default PersonalInfo;
