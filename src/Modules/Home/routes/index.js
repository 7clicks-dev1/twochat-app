import HomeScene from '~/Modules/Home/scenes/Home';
import ProfileScene from '~/Modules/Home/scenes/Profile';
import HOME_SCREENS from './constants';

const HOME_NAVIGATION = [
  {
    name: HOME_SCREENS.CHAT,
    component: HomeScene,
    key: HOME_SCREENS.CHAT,
    options: { headerShown: true }
  },
  {
    name: HOME_SCREENS.HOME,
    component: HomeScene,
    key: HOME_SCREENS.HOME,
    options: { headerShown: true }
  },
  {
    name: HOME_SCREENS.PROFILE,
    component: ProfileScene,
    key: HOME_SCREENS.PROFILE,
    options: { headerShown: true }
  }
];

export default HOME_NAVIGATION;
