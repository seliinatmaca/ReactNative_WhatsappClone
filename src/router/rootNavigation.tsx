import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PHONENUMBER, STATUS, TABNAVIGATOR} from '../utils/routes';
import TabNavigation from './tabNavigation';
import PhoneNumber from '../screens/profile/phoneNumber';
import {Pressable, Text} from 'react-native';
import Colors from '../theme/colors';

const Stack = createNativeStackNavigator();

const RootNavigation: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={({navigation}) => ({
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate(TABNAVIGATOR)}>
              <Text style={{color: Colors.BLUE_1, fontSize: 18}}>Done</Text>
            </Pressable>
          ),
        })}
        name={PHONENUMBER}
        component={PhoneNumber}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={TABNAVIGATOR}
        component={TabNavigation}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
