import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadRemoteData, loadedRemoteData } from '../../actions';
import '../Pages.scss';

class ConnectedPage extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.loadedRemoteData([]);
    this.props.loadRemoteData();
  }

  render() {
    const { dataLoading, data } = this.props;

    return (
      <div>
        <p>Hello from ConnectedPage!</p>
        <p>
          <button disabled={dataLoading} onClick={this.handleClick}>
            Click to load data
          </button>
        </p>
        <div>
          {dataLoading && <span>Data is loading...</span>}
          <ul>
            {data.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

/**
 * Should be defined for each page
 */
ConnectedPage.propTypes = {
  dataLoading: PropTypes.bool,
  data: PropTypes.array,
  loadRemoteData: PropTypes.func,
  loadedRemoteData: PropTypes.func,
};

/**
 * Example default prop definition
 */
ConnectedPage.defaultProps = {
  defaultProp: false,
};

/**
 * To assign state elements of store to our current page's props
 */
const mapStateToProps = (state) => ({
  dataLoading: state.rootReducer.dataLoading,
  data: state.rootReducer.data,
});

/**
 * To assign actions to our current page's props
 */
const mapDispatchToProps = (dispatch) => ({
  loadRemoteData: () => dispatch(loadRemoteData()),
  loadedRemoteData: (data) => dispatch(loadedRemoteData(data)),
});

/**
 * Connect current page to redux store
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedPage);
