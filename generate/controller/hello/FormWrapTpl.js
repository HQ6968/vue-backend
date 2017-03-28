
module.exports.parse = function (params) {
    var code = `import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ${params.short.m}Form from './${params.short.m}Form'


import './${params.short.m}.scss'

class ${params.short.m} extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.params.id) {
            this.state = {
                title: '编辑${params.options.m_title}',
                formType: 'edit',
                initialValues: this.props.edit${params.short.m} ? {...this.props.edit${params.short.m}} : {}
            }
        } else {
            this.state = {
                title: '添加${params.options.m_title}',
                formType: 'add',
                initialValues: {}
            }
        }
    }

    componentWillMount() {

    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.formType === 'add') {
            this.props.add${params.short.m}({
                ...this.props.${params.short.m}Form.values,
                mid: 1,
                status: 0
            });
        } else {
            this.props.update${params.short.m}({
                ...this.props.${params.short.m}Form.values,
                mid: 1,
                status: 0
            });
        }

    }

    componentDidMount () {

    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.params.id) {
            this.setState({
                title: '编辑${params.options.m_title}',
                formType: 'edit',
                initialValues: this.props.edit${params.short.m} ? {...this.props.edit${params.short.m}} : {}
            })
        } else {
            this.setState({
                title: '添加${params.options.m_title}',
                formType: 'add',
                initialValues: {}
            })
        }
    }

    render() {

        return (
            <Card>
                <CardHeader title={this.state.title} />
                <${params.short.m}Form  {...this.props}
                    handleSubmit={this.handleSubmit.bind(this)}
                />
            </Card>
        )
    }
}


// ${params.short.m}Grid.propTypes = {
//   get${params.short.m}s : React.PropTypes.func.isRequired,
//   ${params.short.m}s: React.PropTypes.array
// }

export default ${params.short.m}` ;
    return code ;
}

