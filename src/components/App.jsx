import { Component } from 'react';
import { fetchPics } from './services/api';

export class App extends Component {
  state = {
    pictures: null,
    isLoading: false,
    error: null,
  };

  feltchAllPics = async () => {
    try {
      const pictures = await fetchPics();
      console.log('pictures: ', pictures);

      this.setState({ pictures: pictures });
    } catch (error) {}
  };

  componentDidMount() {
    this.feltchAllPics();
  }

  render() {
    return <div></div>;
  }
}
