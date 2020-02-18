import React, {Component} from 'react';
import Splash from './pages/splash';
import MainScreen from './pages/main';
//import MainScreen from './screens/ProductScreens/productPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {currentScreen: 'Splash'};
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        currentScreen: 'MainScreen',
      });
    }, 3000);
  }

  render() {
    const {currentScreen} = this.state;
    let mainScreen = currentScreen === 'Splash' ? <Splash /> : <MainScreen />;
    return mainScreen;
  }
}
export default App;
