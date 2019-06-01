import React from 'react';
import PropTypes from 'prop-types';
import './gallery.scss';
import Review from './description/review';

class GalleryConnect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: false,
      index: 0,
    };
    this.onBack = this.onBack.bind(this);
    this.onNext = this.onNext.bind(this);
    this.handleReview = this.handleReview.bind(this);
    this.reviewClose = this.reviewClose.bind(this);
  }

  onBack() {
    const { index } = this.state;
    const { handleIndex } = this.props;
    if (index <= 0) {
      this.setState({ index: 5 });
    } else {
      this.setState({ index: index - 1 });
    }
    handleIndex(index);
  }

  onNext() {
    const { index } = this.state;
    const { handleIndex } = this.props;
    if (index >= 5) {
      this.setState({ index: 0 });
    } else {
      this.setState({ index: index + 1 });
    }
    handleIndex(index);
  }

  handleReview(e) {
    const { handleIndex } = this.props;
    const index = e.target.id;
    this.setState({ review: true });
    handleIndex(parseInt(index, 10));
  }

  reviewClose() {
    this.setState({ review: false });
  }

  render() {
    const { review } = this.state;
    const { galeria } = this.props;
    return (
      <section id="galeria" className={galeria.visible ? 'animated fadeIn gallery_cont' : 'gallery_cont'}>
        {console.log(galeria.visible)}
        <h2 className="main_title">Tenemos lo que te gusta</h2>
        <div className="items_cont">
          <div className="item_mini_main_cont d-flex justify-content-center justify-content-md-between">
            {
              galeria.items.map(item => (
                <div className="item_cont_mini shadow" key={item.title}>
                  <div className="item_img_mini_cont">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <button onClick={this.handleReview} id={item.index} type="button">ver descripcion</button>
                  <div className="mini_info">
                    <span>{item.title}</span>
                    <span>{item.price}</span>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        {
          review && (
          <Review
            items={galeria.items}
            actions={{ onBack: this.onBack, onNext: this.onNext, onClose: this.reviewClose }}
          />
          )
        }
        <h2 className="main_title">Visitanos, te esperamos</h2>
      </section>
    );
  }
}

GalleryConnect.propTypes = {
  galeria: PropTypes.shape({
    visible: PropTypes.bool.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      index: PropTypes.number.isRequired,
      visible: PropTypes.bool.isRequired,
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }).isRequired).isRequired,
  }).isRequired,
  handleIndex: PropTypes.func.isRequired,
};

export default GalleryConnect;
