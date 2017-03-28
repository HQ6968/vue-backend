module.exports.parse = function (params) {
    var code = `import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Pagination from '../../../ui/list/Pagination'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ContentRemove from 'material-ui/svg-icons/action/delete';
import { IndexLink, Link } from 'react-router'
import { browserHistory } from 'react-router'
import ConfirmDialog from '../../../ui/dialog/ConfirmDialog'
import './Article.scss'

class ArticleGrid extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  componentDidMount() {
    this.props.getArticles();
    this.props.getCategories();
  }

  handleSubmit(e) {
    e.preventDefault();
    // debugger
    this.props.addTask(this.props.simpleForm.values);
    // this.props.addTask({
    //   id: this.refs.id.getValue(),
    //   name: this.refs.name.getValue()
    // });
    // this.refs.myTaskForm.reset();
  }

  navigateToEdit(idx) {
    this.props.loadArticle(idx)
    browserHistory.push('/articles/edit/' + idx)
  }

  showDeleteDialog(article) {
    this.refs.confirmDialog.handleOpen();
    this.props.setRmoveArticle(article);
  }

  render() {
    const pageObj = this.props.articlePagination
    console.log('##', this.props.articles);
    Object.keys(pageObj).forEach(function (key) {
      pageObj[key] = parseInt(pageObj[key], 10)
    });
    return (
      <Card>
        <CardHeader title="所有文章" />
        <CardActions>
          <FlatButton label="添加" containerElement={<Link to={'/articles/add'} />} />
        </CardActions>
        <Table ref="table">
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>分类</TableHeaderColumn>
              <TableHeaderColumn>标题</TableHeaderColumn>
              <TableHeaderColumn>点击</TableHeaderColumn>
              <TableHeaderColumn>添加时间</TableHeaderColumn>
              <TableHeaderColumn>内容</TableHeaderColumn>
              <TableHeaderColumn></TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody deselectOnClickaway={false} displayRowCheckbox={false}>
            {this.props.articles && this.props.articles.map((article, i) => {
              return (
                <TableRow key={i}>
                  <TableRowColumn>{article.id}</TableRowColumn>
                  <TableRowColumn>{article.catid}</TableRowColumn>
                  <TableRowColumn>{article.title}</TableRowColumn>
                  <TableRowColumn>{article.hits}</TableRowColumn>
                  <TableRowColumn>{article.addtime}</TableRowColumn>
                  <TableRowColumn>{article.content}</TableRowColumn>
                  <TableRowColumn>
                    <ContentCreate color={"rgb(0, 188, 212)"} className="svgLinkEdit" onClick={this.navigateToEdit.bind(this, article.id)}/>
                    <ContentRemove color={"rgb(0, 188, 212)"} className="svgLinkRemove" onClick={this.showDeleteDialog.bind(this, article)}/>
                  </TableRowColumn>
                </TableRow>
              )
            } )}
          </TableBody>
        </Table>
        <Pagination page={pageObj.currentPage} perPage={pageObj.perPage} total={pageObj.totalCount}  />

        <ConfirmDialog ref="confirmDialog" confirmAction={this.props.removeArticle.bind(this, this.props.selectedRemoveArticle.id)} />

      </Card>
    )
  }
}

ArticleGrid.propTypes = {
  getArticles : React.PropTypes.func.isRequired
}

export default ArticleGrid`
    return code ;
}
