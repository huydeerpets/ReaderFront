import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import Card from '../../../works/components/WorkItem';
import CardLoading from '../../../works/components/WorkItemEmpty';
import { subString } from '../../../utils/helpers';
import { getStatusTagStyle, workStatusIdToName } from '../../../utils/common';

const WorksList = styled.div`
  margin-top: 30px;
`;

export default class LatestWork extends PureComponent {
  handleTruncate = work => {
    if (work.works_descriptions.length === 0) {
      return '';
    }

    return subString(work.works_descriptions[0].description, 120);
  };

  handleRedirectTo = work => {
    return `/work/${work.stub}`;
  };

  handleStatusTag = statusId => {
    return {
      style: getStatusTagStyle(statusId),
      name: workStatusIdToName(statusId)
    };
  };

  render() {
    const { works, isLoading } = this.props;
    return (
      <div className="LatestWorks mb-4">
        <h3>
          <FormattedMessage
            id="recently_added"
            defaultMessage="Recently added"
          />
        </h3>
        <WorksList>
          {!isLoading
            ? works.map(work => (
                <Card
                  key={work.id}
                  truncate={this.handleTruncate}
                  redirectTo={this.handleRedirectTo}
                  statusTag={this.handleStatusTag}
                  work={work}
                  size={'small'}
                />
              ))
            : Array.from(new Array(4)).map((fk, index) => (
                <CardLoading
                  key={'lw-card-loading-' + index}
                  work={{}}
                  size={'small'}
                />
              ))}
        </WorksList>
      </div>
    );
  }
}
