import React, {Component} from 'react'

class ProfileStatus extends Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
        console.log('Component did update');
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div onDoubleClick={ this.activateEditMode }>
                        Статус: {this.props.status || '-------'}
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input
                            onChange={this.onStatusChange}
                            onBlur={this.deactivateEditMode}
                            value={this.state.status}
                            autoFocus={true}
                            className='test'
                        />
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;