import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CALLS, CAMERA, CHATS, SETTINGS, STATUS} from '../utils/routes';
import Status from '../screens/status';
import Calls from '../screens/calls';
import Camera from '../screens/camera';
import Chats from '../screens/chats';
import Settings from '../screens/settings';
import Colors from '../theme/colors';
import TabIcon from '../components/router/tabIcon';

const Tab = createBottomTabNavigator();

const TabNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: Colors.GRAY_3,
        },
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon size={size} focused={focused} color={color} route={route} />
        ),
        tabBarActiveTintColor: Colors.BLUE_1,
        tabBarInactiveTintColor: Colors.GRAY_1,
      })}>
      <Tab.Screen name={STATUS} component={Status} />
      <Tab.Screen name={CALLS} component={Calls} />
      <Tab.Screen name={CAMERA} component={Camera} />
      <Tab.Screen name={CHATS} component={Chats} />
      <Tab.Screen name={SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
