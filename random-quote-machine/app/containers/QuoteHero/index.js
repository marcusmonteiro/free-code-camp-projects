/*
 *
 * QuoteHero
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import FlatButton from 'material-ui/FlatButton';
import FormatQuote from 'material-ui/svg-icons/editor/format-quote';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { loadQuote } from './actions';
import {
  selectQuoteHero,
} from './selectors';

export class QuoteHero extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.onClickButton();
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <FlatButton
            label="New Quote"
            icon={<FormatQuote />}
            // BUG: onTouchStart is not working
            onClick={this.props.onClickButton}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

QuoteHero.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool,
  ]),
  quote: React.PropTypes.string,
  author: React.PropTypes.string,
  onClickButton: React.PropTypes.func,
};

const mapStateToProps = selectQuoteHero();

function mapDispatchToProps(dispatch) {
  return {
    onClickButton: (evt) => {
      if (evt !== undefined && evt.preventDefault) {
        evt.preventDefault();
      }
      dispatch(loadQuote());
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteHero);
