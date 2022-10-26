import React from 'react';

import './styles.scss';

type Props = {
  country: string;
  selectCountry: Function;
};

class Header extends React.Component<Props> {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <button
          className={`country-btn ${
            this.props.country === 'OTTAWA' ? 'active' : ''
          }`}
          onClick={() => this.props.selectCountry('OTTAWA')}>
          OTTAWA
        </button>
        <button
          className={`country-btn ${
            this.props.country === 'MOSCOW' ? 'active' : ''
          }`}
          onClick={() => this.props.selectCountry('MOSCOW')}>
          MOSCOW
        </button>
        <button
          className={`country-btn ${
            this.props.country === 'TOKYO' ? 'active' : ''
          }`}
          onClick={() => this.props.selectCountry('TOKYO')}>
          TOKYO
        </button>
      </div>
    );
  }
}

export default Header;
