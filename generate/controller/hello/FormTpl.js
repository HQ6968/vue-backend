module.exports.parse = function (params) {
    var code = `import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import VideoDialog from './VideoDialog'
import axios from 'axios'
import FileUpload from 'react-fileupload'
import {QuillEditor} from 'components/form/QuillEditor'
import { connect } from 'react-redux'


const validate = values => {
  const errors = {}
  const requiredFields = [ 'catid', 'title', 'content']
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = '必填'
    }
  })
  return errors
}

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => {
  return (
    <TextField hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
)}

const renderCheckbox = ({ input, label }) => (
  <Checkbox label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}/>
)

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioButtonGroup {...input} {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}/>
)

const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}/>
)

class renderEditorField extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <QuillEditor ref="quillEditor"
          {...this.props}
          value={this.props.input.value} id="content" height="200"
          onChange={value => {
            this.props.input.onChange(value)
          } }/>
  }
}


class ArticleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoDialogOpen: false
    };
    // const { handleSubmit, pristine, reset, submitting } = props

  }

  handleVideoImageChange() {
    const input = this.refs.videoImageInput
    const previewImg = this.refs.videoImagePreview

    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
          previewImg.src = e.target.result
        }
        reader.readAsDataURL(input.files[0]);
    }
  }

  videoConfirmHandler(video) {
    const reactQuill = this.refs.contentEditor.getRenderedComponent('editorComponent').refs.quillEditor.refs.reactQuill
    const quill = reactQuill.state.editor
    quill.focus()
    const editorIndex = quill.getSelection().index
    // quill.insertText(editorIndex, 'anytext');
    const delta = quill.insertEmbed(editorIndex, 'video', video.path);
    quill.blur()

  }

  openVideoDialog() {
    this.props.getVideos().then(() => {
      this.props.openVideoDialog();
    })
  }


  render() {
    const options={
        baseUrl:'/',
        param:{
            fid:0
        },
        chooseAndUpload: true,
        dataType: 'json'
    }

    return (
      <form onSubmit={this.props.handleSubmit} style={{ padding: '0 1em 1em 1em' }}>
        <div>
          <Field fullWidth={true} name="catid" component={renderSelectField} label="请选择分类">
            {this.props.categories.map((cate, i)=> {
              return (
                <MenuItem key={i} value={cate.id} primaryText={cate.catname}/>
              )
            })}
          </Field>
        </div>
        <div>
          <div id={this.props.title}>{this.props.title}</div>
          <Field fullWidth={true} name="title" component={renderTextField} label="标题"/>
        </div>
        <div>
          <br />
          <FileUpload options={options} ref="fileUpload">
            <FlatButton ref="chooseAndUpload" label="上传视频封面" primary={true} />
          </FileUpload>
        </div>
        <div>
          <FlatButton label="选择视频" primary={true} onClick={this.openVideoDialog.bind(this)} />
          <VideoDialog {...this.props}  videoConfirmHandler={this.videoConfirmHandler.bind(this)} />
        </div>
        <div>
          <Field style={{height: 500}} withRef="editorComponent" ref="contentEditor" fullWidth={true} name="content" videoHandler={this.openVideoDialog.bind(this)} component={renderEditorField} label="内容" />
        </div>

        <Toolbar style={{marginTop: "5em"}}>
            <ToolbarGroup>
              <RaisedButton type="submit" disabled={this.props.pristine || this.props.submitting} >提交</RaisedButton>
              <RaisedButton type="button" disabled={this.props.pristine || this.props.submitting} onClick={this.props.reset} >清空</RaisedButton>
            </ToolbarGroup>
        </Toolbar>
      </form>
    )
  }
}

let ArticleFormContainer = reduxForm({
  form: 'ArticleForm',  // a unique identifier for this form
  validate,
})(ArticleForm)


ArticleFormContainer = connect(
  state => ({
    initialValues: state.articleObj.editArticle
  })
)(ArticleFormContainer)

export default ArticleFormContainer`
    return code ;
}
