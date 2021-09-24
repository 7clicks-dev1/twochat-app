import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerExplorar: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10
  },
  title: {
    fontSize: 35,
    fontWeight: '500',
    color: '#0B1742'
  },
  inputContainer: {
    width: '50%',
    backgroundColor: '#E0E0E0',
    borderRadius: 20
  },
  input: {
    height: 60
  },

  banner: {
    width: 380,
    height: 140
  },
  bannerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '900',
    alignItems: 'center'
  },
  TextContainer: {
    width: '60%',
    padding: 15
  },
  white: {
    color: 'white',
    fontSize: 16,
    marginTop: 30
  }
});

export default styles;
