import React, { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Loader from 'react-loader-spinner';
import Notification from './components/Notification/Notification';
import Modal from './components/Modal/Modal';

import pixabayApi from './servises/pixabayApi';

export default class App extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    searchQuery: '',
    page: 1,
    showModal: false,
    largeImageURL: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    // const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
    if (nextPage > 2) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;

    this.setState({ loading: true });

    pixabayApi
      .fetchImagesWithQuery(searchQuery, page)
      .then(images => {
        console.log(images);
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchBarSubmit = query => {
    this.setState({
      searchQuery: query,
      page: 1,
      images: [],
    });
  };

  toggleModal = e => {
    const largeImageURL = e.target.dataset.sourse;
    this.setState(state => ({ showModal: !state.showModal, largeImageURL }));
  };

  render() {
    const { images, loading, error, showModal, largeImageURL } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchBarSubmit} />
        {error && (
          <Notification
            message={`Whoops, something went wrong:${error.message}`}
          />
        )}
        {loading && (
          <Loader
            type="Circles"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={0}
          />
        )}
        {images.length > 0 && !loading && (
          <ImageGallery images={images} onClick={this.toggleModal} />
        )}
        {images.length > 0 && !loading && <Button onClick={this.fetchImages} />}

        {showModal && (
          <Modal largeImageURL={largeImageURL} onClose={this.toggleModal} />
        )}
      </div>
    );
  }
}
