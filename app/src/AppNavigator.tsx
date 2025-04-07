import {createBottomTabNavigator} from "@react-navigation/bottom-tabs/src";
import {Ionicons} from "@expo/vector-icons";
import CalendarScreen from "@/app/screens/CalendarScreen";

export type RootTabParamList = {
  Calendar: undefined;
  Timetable: undefined;
  GoalPlan: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}: { route: any }) => ({
        tabBarIcon: ({focused, color, size}: { focused: any, color: any, size: any }) => {
          let iconName: string = "";

          if (route.name === 'Calendar') {
            iconName = focused
              ? 'calendar'
              : 'calendar-outline';
          } else if (route.name === 'Timetable') {
            iconName = focused
              ? 'timetable'
              : 'timetable-outline';
          } else if (route.name === 'GoalPlan') {
            iconName = focused
              ? 'goal-plan'
              : 'goal-plan-outline';
          } else if (route.name === 'Profile') {
            iconName = focused
              ? 'profile'
              : 'profile-outline';
          }
          return <Ionicons name={iconName} size={size} color={color}/>;
        },
      })}
    >
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{title: "캘린더"}}
      />
    </Tab.Navigator>
  );
}