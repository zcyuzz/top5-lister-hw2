import React from "react";

export default class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            editActive: false,
        }
    }
    handleClick = (event) => {
        if (event.detail === 2) {
            this.handleToggleEdit(event);
        }
    }
    handleToggleEdit = (event) => {
        this.setState({editActive: !this.state.editActive});
    }
    handleUpdate = (event) => {
        this.setState({ text: event.target.value });
    }
    handleKeyPress = (event) => {
        if (event.code === "Enter") {
            this.handleBlur();
        }
    }
    handleBlur = () => {
        let key = this.props.currentList.key;
        let textValue = this.state.text;
        console.log("ItemCard handleBlur: " + textValue);
        this.props.renameItemCallback(key, this.props.index, textValue);
        this.handleToggleEdit();
    }
    render() {
        const {index, currentList} = this.props;
        let item = ""
        if (currentList) {
            item = currentList.items[index];
        }
        if (this.state.editActive) {
            return (
                <input autoFocus
                    id={'item-' + (index + 1)}
                    className="top5-item"
                    type='text'
                    onKeyPress={this.handleKeyPress}
                    onBlur={this.handleBlur}
                    onChange={this.handleUpdate}
                    defaultValue={currentList.items[index]}/>
            )
        }
        else {
            return (
                <div 
                    id={'item-' + (index + 1)}
                    className="top5-item"
                    onClick={this.handleClick}>
                    {item}
                </div>
            )
        }
    }
}