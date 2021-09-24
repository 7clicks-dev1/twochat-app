import { Image, ScrollView } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled(ScrollView)`
  flex-grow: 1;
`;

export const Logo = styled(Image)`
  width: 250px;
  height: 250px;
`;

export default {
  Container,
  Image
};
