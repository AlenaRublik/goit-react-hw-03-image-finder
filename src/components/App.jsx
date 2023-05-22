import { Component } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import SearchBar from './SearchBar/SearchBar';


export class App extends Component {
  state = {
    searchQuery: '',
    pictures: [],
    page: 1,
    loading: false,
    loadMore: false,
    error: '',
  };


handleSearch = searchQuery => {
    const initialStateParams = {
      page: 1,
      pictures: [],
      error: '',
      loadMore: false,
    };

    if (searchQuery === this.state.searchQuery) {
      toast.error(
        'The same request. Change your request'
      );
      return;
    }

    this.setState({ ...initialStateParams, searchQuery });
  };

  render() {
    const { error, pictures, loading, loadMore } = this.state;
    return (
      <>
        <SearchBar handleSearch={this.handleSearch} />
      <ToastContainer/>
      </>
    );
  }
}
