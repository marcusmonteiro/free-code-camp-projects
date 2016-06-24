/*
 *
 * NewQuoteButton
 *
 */

import React from 'react';

import FlatButton from 'material-ui/FlatButton';
import FormatQuote from 'material-ui/svg-icons/editor/format-quote';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { connect } from 'react-redux';
import selectNewQuoteButton from './selectors';

import { getQuote } from './actions';

export class NewQuoteButton extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.onClickButton();
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <FlatButton
            label='New Quote'
            icon={<FormatQuote />}
            // BUG: onTouchStart is not working
            onClick={this.props.onClickButton}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

NewQuoteButton.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool
  ]),
  quoteData: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool
  ]),
  onClickButton: React.PropTypes.func
}

const mapStateToProps = selectNewQuoteButton();

function mapDispatchToProps(dispatch) {
  return {
    onClickButton: (evt) => {
      if (evt !== undefined && evt.preventDefault) {
        evt.preventDefault();
      }
      dispatch(getQuote());
    },
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuoteButton);
