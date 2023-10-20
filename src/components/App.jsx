import { Component } from 'react';
import { fetchPics } from './services/api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    pictures: null,
    isLoading: false,
    error: null,
  };

  feltchAllPics = async () => {
    try {
      this.setState({ isLoading: true });
      const pictures = await fetchPics();
      console.log('pictures: ', pictures);

      this.setState({ pictures: pictures });
    } catch (error) {
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    this.feltchAllPics();
  }

  render() {
    return (
      <div>
        <Searchbar />
        <ImageGallery />
        <Loader />
        <Button />
        <Modal />
      </div>
    );
  }
}
