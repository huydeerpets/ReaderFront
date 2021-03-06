import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Query, graphql } from 'react-apollo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// App imports
import ChapterForm from './ChapterForm';
import { Card } from '../../common/UI';
import { MetaTagEdit } from '../ACPChaptersMetaTags';
import { FETCH_CHAPTER } from '../query';
import { FETCH_CHAPTERS } from '../../works/query';
import { UPDATE_CHAPTER } from '../mutations';
import 'react-datepicker/dist/react-datepicker.css';

class EditChapter extends Component {
  onSubmit = async (event, chapter) => {
    event.preventDefault();
    const { match, mutate, history } = this.props;

    await mutate({
      variables: { ...chapter },
      refetchQueries: [
        {
          query: FETCH_CHAPTERS,
          variables: { language: -1, workStub: match.params.stub }
        }
      ]
    });

    history.push(
      '/admincp/work/' + match.params.workId + '/' + match.params.stub
    );
  };

  render() {
    const { match } = this.props;
    return (
      <div className="container">
        <MetaTagEdit />
        <Card>
          <Container>
            <Link
              to={
                '/admincp/work/' + match.params.workId + '/' + match.params.stub
              }
            >
              <Button>
                <FontAwesomeIcon icon={faArrowLeft} />{' '}
                <FormattedMessage id="go_back" defaultMessage="Back" />
              </Button>
            </Link>

            <h4>
              <FormattedMessage id="edit" defaultMessage="Edit" />{' '}
              <FormattedMessage id="chapter" defaultMessage="Chapter" />
            </h4>
            <Query
              query={FETCH_CHAPTER}
              variables={{ chapterId: parseInt(match.params.chapterId, 0) }}
            >
              {({ loading, error, data }) => {
                if (loading)
                  return (
                    <div>
                      <FormattedMessage
                        id="loading"
                        defaultMessage="Loading..."
                      />
                    </div>
                  );
                if (error) return <p id="error_edit_chapter">Error :(</p>;
                return (
                  <div>
                    <MetaTagEdit chapterTitle={data.chapterById.title} />
                    <ChapterForm
                      chapter={{
                        ...data.chapterById,
                        workId: parseInt(match.params.workId, 0)
                      }}
                      onSubmit={this.onSubmit}
                      intl={this.props.intl}
                    />
                  </div>
                );
              }}
            </Query>
          </Container>
        </Card>
      </div>
    );
  }
}

export default graphql(UPDATE_CHAPTER)(injectIntl(withRouter(EditChapter)));
