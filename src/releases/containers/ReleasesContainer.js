import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Query } from 'react-apollo';

// App imports
import MetaTag from './ReleaseMetaTags';
import ReleasePagination from '../components/ReleasePagination';
import ReleasesList from '../components/ReleasesList';
import ReleaseCardEmpty from '../components/ReleaseCardEmpty';
import params from '../../params.json';
import { FETCH_RELEASES } from './query';

const LatestReleases = ({ language, orderBy, first, offset }) => (
  <Query
    query={FETCH_RELEASES}
    variables={{ language, orderBy, first, offset }}
  >
    {({ loading, error, data }) => {
      if (loading) return <ReleaseCardEmpty />;
      if (error) return <p id="error_releases">Error :(</p>;

      return <ReleasesList releases={data.chapters} />;
    }}
  </Query>
);

class ReleasesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      offset: 0,
      perPage: 20
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(page) {
    this.setState({ page, offset: page * this.state.perPage });
  }

  render() {
    const { language } = this.props;
    const { page, perPage, offset } = this.state;
    return (
      <div className="Releases">
        <h2>
          <FormattedMessage
            id="latest_releases"
            defaultMessage="Latest Releases"
          />
        </h2>
        <MetaTag />
        <LatestReleases
          language={params.global.languages[language].id}
          orderBy={'DESC'}
          first={perPage}
          offset={offset}
        />
        <ReleasePagination page={page} onPageChange={this.handlePageChange} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    language: state.layout.language
  };
};

export default connect(mapStateToProps)(ReleasesContainer);
