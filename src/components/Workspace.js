import React from "react";

export default class Workspace extends React.Component {
    render() {
        const {currentList} = this.props
        let first = "";
        let second = "";
        let third = "";
        let fourth = "";
        let fifth = "";
        if (currentList) {
            first = currentList.items[0];
            second = currentList.items[1];
            third = currentList.items[2];
            fourth = currentList.items[3];
            fifth = currentList.items[4];
        }
        return (
            <div id="top5-workspace">
                <div id="workspace-edit">
                    <div id="edit-numbering">
                        <div className="item-number">1.</div>
                        <div className="item-number">2.</div>
                        <div className="item-number">3.</div>
                        <div className="item-number">4.</div>
                        <div className="item-number">5.</div>
                    </div>
                    <div id="edit-items">
                        <div id="item-1" class="top5-item">{first}</div>
                        <div id="item-2" class="top5-item">{second}</div>
                        <div id="item-3" class="top5-item">{third}</div>
                        <div id="item-4" class="top5-item">{fourth}</div>
                        <div id="item-5" class="top5-item">{fifth}</div>
                    </div>
                </div>
            </div>
        )
    }
}