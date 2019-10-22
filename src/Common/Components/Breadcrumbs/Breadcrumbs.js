import React, { Fragment } from 'react';
import { Link, Route } from 'react-router-dom';
import { injectIntl, intlShape } from 'react-intl';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Icon from '@material-ui/core/Icon';

const DeconstructUrl = match => {
  const path = _.split(`${match.url}`, '/');
  if (_.includes(_.last(path), 'car')) {
    // Replace 'car' with 'CAR'
    return _.startCase(_.replace(_.last(path), 'car', 'CAR'));
  }
  return _.startCase(_.last(path));
};

const BuildLink = (match, location) => {
  if (match.url) {
    if (_.isEqual(match.url, location.pathname) && location.search)
      return `${match.url}${location.search}`;
    return match.url;
  }
  return '';
};

const BreadcrumbsItem = props => {
  const { match, intl, location } = props;
  return (
    <Fragment>
      {match.isExact ? (
        <p className="breadcrumbeach">
          <Link className="breadcrumblink" to={BuildLink(match, location)}>
            {intl.formatMessage({
              id: `breadCrumbs.${match.params.path}`,
              defaultMessage: `${DeconstructUrl(match)}`
            })}
          </Link>
        </p>
      ) : (
        <Fragment>
          <p className="breadcrumbeach">
            <Link className="breadcrumblink" to={BuildLink(match, location)}>
              {intl.formatMessage({
                id: `breadCrumbs.${match.params.path}`,
                defaultMessage: `${DeconstructUrl(match)}`
              })}
            </Link>
          </p>
          <Icon className="breadcrumbIcons">chevron_right</Icon>
        </Fragment>
      )}
      <Route
        path={`${match.url}/:path`}
        component={injectIntl(BreadcrumbsItem)}
      />
    </Fragment>
  );
};

const Breadcrumbs = () => {
  return (
    <div className="breadcrumbs">
      <Route path="/:path" component={injectIntl(BreadcrumbsItem)} />
    </div>
  );
};

BreadcrumbsItem.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  intl: intlShape.isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired
  }).isRequired
};

export default Breadcrumbs;
