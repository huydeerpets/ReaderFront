import React, { PureComponent } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import NextButton from './NextButton';
import { Row } from 'reactstrap';
import Block from './Block';

const ComicSlideWrapper = styled.div`
  position: relative;
  min-width: 1004px;
  background: #e2e2e2;
  border-top: 1px solid #c8c8c8;
  border-bottom: 1px solid #c8c8c8;
  padding: 8px 0;
  height: 352px;
  box-sizing: border-box;

  @media (max-width: 1004px) {
    min-width: auto;
  }

  @media (max-width: 602px) {
    height: 177px;
    padding: 4px 0;
  }

  .comic-slide-wrapper-css,
  .comic-slide-wrapper-svg {
    display: block;
  }
`;

const ComicSlideFrList = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0px 50px;

  &:focus {
    outline: none;
  }
`;

const ComicSlideFrTrack = styled(Row)``;

export default class ComicSlide extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      _transform: 0,
      style: {
        opacity: '1',
        width: '30000px',
        transform: 'translate3d(-40px, 0px, 0px)'
      }
    };
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        {!this.props.isLoading &&
          this.props.chapters.map((chapter, index) => (
            <Block key={index} chapter={chapter} />
          ))}
      </Slider>
    );
  }
}
