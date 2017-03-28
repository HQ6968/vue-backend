module.exports.parse = function (params) {
  var code = `import React from 'react'
class ArticleRoot extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCategories()
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.add(this.props.simpleForm.values);
  }

  render() {
    // const a = {
    //   ...this.props,
    //   getArticles: function() {return {
    //     action: 'aa'
    //   }}
    // }
    return <div>
      {this.props.children}
    </div>
  }
}
// { React.cloneElement(this.props.children, this.props) }

export default ArticleRoot`
  return code ;
}
