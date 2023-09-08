import { Component } from 'react';
import Notiflix from 'notiflix';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import API from './GetApi/GetApi';
import Button from './Button';
import Loader from './Loader';

Notiflix.Notify.init({
  width: '480px',
  position: 'right-bottom',
  distance: '10px',
  opacity: 1,
  fontSize: '20px',
  clickToClose: true,
  timeout: 3000,
  background: '#4f2ee8',
});

class App extends Component {
  state = {
    textSearch: '',
    page: 1,
    items: [],
    loading: false,
    showMore: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.textSearch !== prevState.textSearch) {
      this.setState({ page: 1, items: [] });
      this.findByApi();
    }
    if (this.state.page !== prevState.page && this.state.page !== 1) {
      this.findByApi();
    }
  }

  findByApi = () => {
    this.setState({ loading: true, showMore: false });
    API.getApi(this.state.textSearch, this.state.page).then(findImages => {
      // console.log(findImages);
      if (findImages.data.hits.length === 0) {
        Notiflix.Notify.info('There are no results');
      }
      this.setState({
        items: [...this.state.items, ...findImages.data.hits],
      });
      if (this.state.page < Math.ceil(findImages.data.totalHits / 12)) {
        this.setState({ showMore: true });
      } else {
        this.setState({ showMore: false });
      }

      this.setState({ loading: false });
    });
  };

  onSearch = textSearch => {
    this.setState(() => ({ page: 1, textSearch: textSearch }));
  };

  onShowMore = () => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    return (
      <>
        <div className="container">
          <Searchbar onSearch={this.onSearch} />
        </div>
        <div className="main-container">
          {this.state.textSearch && <ImageGallery items={this.state.items} />}

          {this.state.loading && <Loader />}
          {this.state.showMore && <Button onShowMore={this.onShowMore} />}
        </div>
      </>
    );
  }
}

export default App;
