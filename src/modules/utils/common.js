// Common functions
import params from '../params.json';
import * as config from '../config';

const DEFAULT_IMAGE = '/static/images/default-cover.png';

// Return an object with styles
export function getStatusTagStyle(statusId) {
  if (statusId === params.works.status.onGoing.id) {
    return { background: '#ff982c', color: '#ffe111' };
  } else if (statusId === params.works.status.completed.id) {
    return { background: '#ff982c', color: '#ffe111' };
  } else if (statusId === params.works.status.dropped.id) {
    return { background: '#ff982c', color: '#ffe111' };
  }
}

// Get the work thumbnail url
export function getWorkThumb(dir, covers) {
  return covers
    ? `${config.READER_PATH}works/${dir}/${covers.medium_thumb.filename}`
    : DEFAULT_IMAGE;
}

export function getChapterPageUrl(work, chapter, filename, thumb = '') {
  return `${config.READER_PATH}works/${work.stub}_${work.uniqid}/${
    chapter.chapter
  }-${chapter.subchapter}_${chapter.stub}_${
    chapter.uniqid
  }/${thumb}${filename}`;
}

// Get the post thumbnail url
export function getPostThumb(dir, filename) {
  return filename
    ? `${config.READER_PATH}images/blog/${dir}/${filename}`
    : DEFAULT_IMAGE;
}
