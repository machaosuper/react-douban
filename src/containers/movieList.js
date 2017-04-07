import React from 'react';
import { connect } from 'react-redux'
import MovieListView from '../components/movie//MovieListView'
import { fetchData } from '../actions/movieList'
import * as selector from '../reducers/movieList'

const mapState2Props = state => {
    return {
        items: selector.getState(state).items,
        loading: selector.getState(state).loading,
        hasError: selector.getState(state).hasError,
    }
}

const mapDispacth2Props = dispatch => {
    return {
        fetchData: (type) => dispatch(fetchData(type)),
    };
}

export default connect(
    mapState2Props,
    mapDispacth2Props
)(MovieListView)
