import React, { Component, Suspense } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import Section from "./Section";
import AppBar from "./AppBar/AppBar";
import { PrivateRoute, PublicRoute } from "./CustomRoutes";
import { contactsOperations, contactsSelectors } from "../redux/contacts";
import { authOperations } from "../redux/auth";
import routes from "../routes";

class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Section>
          <AppBar />
        </Section>
        <Suspense
          fallback={<h1 className="loading-state">Loading with suspense...</h1>}
        >
          <Switch>
            <Section>
              {routes.map((route) =>
                route.private ? (
                  <PrivateRoute key={route.label} {...route} />
                ) : (
                  <PublicRoute
                    key={route.label}
                    {...route}
                    restricted={route.restricted}
                  />
                )
              )}
            </Section>
          </Switch>
        </Suspense>
        {/* </Section> */}
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoadingContact: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  isLoadingContact: PropTypes.bool,
  onFetchContacts: PropTypes.func,
  onGetCurrentUser: PropTypes.func,
};
