import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { Button, CustomInput, FormGroup, Label, Input } from 'reactstrap';

// App imports
import { slugify } from '../../../utils/helpers';
import { languages } from '../../../utils/common';

class ChapterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chapter: props.chapter
    };
  }

  handleOnChange = event => {
    let chapter = this.state.chapter;
    if (isNaN(event.target.value) || event.target.value === '') {
      chapter[event.target.name] = event.target.value.toString();
    } else {
      chapter[event.target.name] = parseInt(event.target.value, 0);
    }

    if (event.target.name === 'name') {
      chapter.stub = slugify(event.target.value);
    }

    this.setState({
      chapter
    });
  };

  handleOnChangeSelect = event => {
    let chapter = this.state.chapter;
    chapter[event.target.name] = isNaN(event.target.value)
      ? event.target.value
      : parseInt(event.target.value, 0);
    this.setState({
      chapter
    });
  };

  onChangeDate = value => {
    let chapter = this.state.chapter;
    chapter.releaseDate = value.toDate();
    this.setState({
      chapter
    });
  };

  handleOnChangeCheckbox = event => {
    let chapter = this.state.chapter;
    chapter[event.target.name] = !chapter[event.target.name];

    this.setState({
      chapter
    });
  };

  handleOnSubmit = ev => {
    const user = JSON.parse(window.localStorage.getItem('user'));
    if (!user) {
      throw new Error('User not authenticated');
    }
    const chapter = Object.assign({}, this.state.chapter);
    const chStubNumber = chapter.chapter + '-' + chapter.subchapter + '_';
    chapter.stub = chStubNumber + (chapter.stub === null ? '' : chapter.stub);
    chapter.language =
      chapter.language === 0 ? languages[0].id : chapter.language;
    chapter.hidden = chapter.hidden ? true : false;
    delete chapter.pages;

    this.props.onSubmit(ev, chapter);
  };

  render() {
    const { intl } = this.props;
    const { chapter } = this.state;
    return (
      <>
        <FormGroup>
          <Label for="name">
            <FormattedMessage id="name" defaultMessage="Name" />
          </Label>
          <Input
            id="name"
            type="text"
            placeholder={intl.formatMessage({
              id: 'name',
              defaultMessage: 'Name'
            })}
            name="name"
            autoComplete="off"
            value={chapter.name}
            onChange={this.handleOnChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="volume">
            <FormattedMessage id="volume" defaultMessage="Volume" />
          </Label>
          <Input
            id="volume"
            type="text"
            placeholder={intl.formatMessage({
              id: 'volume',
              defaultMessage: 'Volume'
            })}
            required="required"
            name="volume"
            autoComplete="off"
            value={chapter.volume}
            onChange={this.handleOnChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="chapter">
            <FormattedMessage id="chapter" defaultMessage="Chapter" />
          </Label>
          <Input
            id="chapter"
            type="text"
            placeholder={intl.formatMessage({
              id: 'chapter',
              defaultMessage: 'Chapter'
            })}
            required="required"
            name="chapter"
            autoComplete="off"
            value={chapter.chapter}
            onChange={this.handleOnChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="subchapter">
            <FormattedMessage id="subchapter" defaultMessage="Subchapter" />
          </Label>
          <Input
            id="subchapter"
            type="text"
            placeholder={intl.formatMessage({
              id: 'subchapter',
              defaultMessage: 'Subchapter'
            })}
            required="required"
            name="subchapter"
            autoComplete="off"
            value={chapter.subchapter}
            onChange={this.handleOnChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="language">
            <FormattedMessage id="language" defaultMessage="Language" />
          </Label>
          <Input
            type="select"
            name="language"
            id="language"
            required="required"
            value={chapter.language}
            onChange={this.handleOnChangeSelect}
          >
            {languages.map(lang => (
              <option key={lang.id + lang.name} value={lang.id}>
                {intl.formatMessage({
                  id: lang.name + '_full',
                  defaultMessage: lang.name
                })}
              </option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="releaseDate">
            <FormattedMessage id="releaseDate" defaultMessage="Release date" />
          </Label>
          <DatePicker
            selected={chapter.releaseDate}
            onChange={this.handleOnChangeDate}
            className="form-control"
          />
        </FormGroup>
        <FormGroup check>
          <CustomInput
            type="checkbox"
            id="hidden"
            name="hidden"
            label={intl.formatMessage({
              id: 'hidden',
              defaultMessage: 'Hidden'
            })}
            value={chapter.hidden}
            onChange={this.handleOnChangeCheckbox}
          />
        </FormGroup>
        <FormGroup>
          <Button
            id="submit_chapter"
            type="button"
            theme="secondary"
            onClick={this.handleOnSubmit}
          >
            <FontAwesomeIcon icon={faSave} />{' '}
            <FormattedMessage id="save" defaultMessage="Save" />
          </Button>
        </FormGroup>
      </>
    );
  }
}

export default ChapterForm;
