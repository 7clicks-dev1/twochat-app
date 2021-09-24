import { ScrollView } from 'native-base';
import { Image } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(ScrollView)`
  flex-grow: 1;
`;

export const Logo = styled(Image)`
  width: 300px;
  height: 300px;
`;

export default {
  Container
};
