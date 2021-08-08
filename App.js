import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';
import SurveyCompletedScreen from './screens/SurveyCompletedScreen';
import  surveyTest from './screens/surveyTest';

const stackNav = createStackNavigator({
    Survey: {
        screen: surveyTest
    },
    SurveyCompleted: {
        screen: SurveyCompletedScreen
    }
});

const AppContainer = createAppContainer(stackNav);

export default AppContainer;