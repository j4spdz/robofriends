import React, { Component } from "react";
import { connect } from "react-redux";

import MainPage from "../components/MainPage"

import "./App.css";

import { setSearchField, requestRobots } from "../actions";

// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField, //come from reducer
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
  };
};

// parameter state comes from index.js provider store state(rootReducers)
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    return (
      <MainPage { ...this.props }/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
