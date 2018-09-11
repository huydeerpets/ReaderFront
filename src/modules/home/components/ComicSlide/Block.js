import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';
import { getChapterPageUrl } from '../../../utils/common';

const BlockStyle = styled.div`
  display: block;
`;

const Image = styled(Link)`
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  background-image: url('${props => props.image}');
  background-size: cover;
  display: block;
  width: 240px;
  height: 300px;
`;

export default class Block extends PureComponent {
  chapterUrl(block) {
    return `read/${block.work.stub}/${block.language}/${block.volume}/${
      block.chapter
    }.${block.subchapter}`;
  }

  render() {
    const { chapter } = this.props;
    return (
      <Image
        key={'block-' + chapter.id}
        to={this.chapterUrl(chapter)}
        image={getChapterPageUrl(
          chapter.work,
          chapter,
          chapter.thumbnail,
          'medium_thumb_'
        )}
        tabIndex="-1"
      />
    );
  }
}
