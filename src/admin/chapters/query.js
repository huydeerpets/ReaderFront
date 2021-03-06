import gql from 'graphql-tag';

export const FETCH_CHAPTER = gql`
  query ChapterById($chapterId: Int) {
    chapterById(id: $chapterId, showHidden: true) {
      id
      work {
        id
        stub
        name
        uniqid
      }
      chapter
      subchapter
      volume
      pages {
        id
        filename
        height
        width
        size
      }
      language
      name
      stub
      uniqid
      description
      thumbnail
      releaseDate
      createdAt
      updatedAt
    }
  }
`;
