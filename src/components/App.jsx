import { Component } from 'react';
import { fetchPics, findPictureByName } from './services/api';
// import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    searchedQuery: null,
    page: 1,
    pictures: null,
    isLoading: false,
    error: null,
  };

  fetchAllPics = async () => {
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

  fetchPictureByName = async () => {
    try {
      this.setState({ isLoading: true });
      const picture = await findPictureByName(this.state.searchedQuery);
      console.log('picture: ', picture);

      this.setState({ pictures: picture });
    } catch (error) {
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    this.fetchAllPics();
  }
  componentDidUpdate(_, prevState) {
    if (prevState.searchedQuery !== this.state.searchedQuery) {
      this.fetchPictureByName();
    }
  }

  handleSearchSubmit = event => {
    event.preventDefault();
    console.log('submitted');

    const searchedQuery = event.currentTarget.elements.searchQuery.value;
    this.setState({
      searchedQuery: searchedQuery,
    });
    console.log(searchedQuery);

    event.currentTarget.reset();
  };

  render() {
    const showPics =
      Array.isArray(this.state.pictures) && this.state.pictures.length;

    return (
      <div className='container'>
        <header className="searchbar">
          <form className="form" onSubmit={this.handleSearchSubmit}>
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>
            <input
              className="input"
              name="searchQuery"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>

        {showPics && <ImageGallery pictures={this.state.pictures} />}
        <Loader />
        <Button />
        <Modal />
      </div>
    );
  }
}
