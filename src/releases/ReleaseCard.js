import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default class ReleaseCard extends Component {
  render() {
    const { release, chapterUrl } = this.props;
    const CardCoverBackground = styled.div`
      background-image: url('${release.chapter.thumbnail}');
      background-position: 50% 50%;
      background-size: cover;
      border-radius: 3px;
      display: block;
      height: 100%;
      position: absolute;
      width: 100%;
      transition: 0.15s;
    `;
    const CardData = styled.div`
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0.01) 100%
      );
      border-radius: 0 0 3px 3px;
      bottom: 0;
      color: #fff;
      padding: 10px;
      padding-top: 40px;
      position: absolute;
      text-align: left;
      text-shadow: 0 0 2px rgba(0, 0, 0, 0.59);
      width: 100%;
      transition: all 200ms;

      h5 {
        display: inline-block;
        font-size: 1.2em;
        line-height: 1.3;
        padding: 0 3px;
        width: 100%;
        word-wrap: break-word;
      }

      div {
        color: #53c4ff;
        display: inline-block;
        font-size: 1em;
        margin-top: 10px;
        margin-left: 4px;
        width: 100%;
      }
    `;
    const Card = styled.div`
      background-color: #ddd;
      font-size: 0.87em;
      height: 275px;
      margin-right: 30px;
      margin-top: 20px;
      padding-left: 0px !important;
      overflow: hidden;
      position: relative;
      display: inline-block;
      cursor: pointer;
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.08);

      &:hover {
        box-shadow: 0 1px 15px rgba(0, 0, 0, 0.2);
      }

      &:hover ${CardCoverBackground} {
        transform: scale(1.2);
      }

      &hover: ${CardData} {
        padding-top: 90px;
        background: linear-gradient(
          to top,
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 0, 0, 0.02) 100%
        );
      }
    `;

    return (
      <Link to={chapterUrl}>
        <Card className="col-md-2 col-xs-12">
          <CardCoverBackground>{""}</CardCoverBackground>
          <CardData>
            <h5>{release.comic.name}</h5>
            <span>
              <div title="Capítulo">
                Capítulo {release.chapter.chapter}
                {Number(release.chapter.subchapter) !== 0
                  ? "." + release.chapter.subchapter
                  : ""}
              </div>
            </span>
          </CardData>
        </Card>
      </Link>
    );
  }
}
