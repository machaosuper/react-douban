import React from 'react';
import { connect } from 'react-redux'
import MovieListView from '../components/MovieListView'
import { itemsFetchData } from '../actions/movieList'
import * as selector from '../reducers/movieList'

const mapState2Props = state => {
    return {
        items: selector.getState(state).items,
        isLoading: selector.getState(state).itemIsLoading,
        hasErrored: selector.getState(state).itemHasErrored
    }
}

const mapDispacth2Props = dispatch => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
}

export default connect(
    mapState2Props,
    mapDispacth2Props
)(MovieListView)
