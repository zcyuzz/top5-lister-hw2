import React from "react";
import Item from "./Item"

export default class Workspace extends React.Component {
    render() {
        const {currentList, renameItemCallback} = this.props
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
                </div>
                <div id="edit-items">
                    <Item
                        index={0}
                        currentList={currentList}
                        renameItemCallback={renameItemCallback}
                    />
                    <Item
                        index={1}
                        currentList={currentList}
                        renameItemCallback={renameItemCallback}
                    />
                    <Item
                        index={2}
                        currentList={currentList}
                        renameItemCallback={renameItemCallback}
                    />
                    <Item
                        index={3}
                        currentList={currentList}
                        renameItemCallback={renameItemCallback}
                    />
                    <Item
                        index={4}
                        currentList={currentList}
                        renameItemCallback={renameItemCallback}
                    />
                </div>
            </div>
        )
    }
}