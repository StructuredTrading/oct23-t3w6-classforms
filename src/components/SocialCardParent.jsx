import React from "react"
import SocialCardDisplay from "./SocialCardDisplay";
import SocialCardForm from "./SocialCardForm";


export default class SocialCardParent extends React.Component {
    constructor() {
        super();

        this.state= {
            currentlyEditing: false,
            content: "Default content",
            imageUrl: ""
        }
    }

    render() {
        if (this.state.currentlyEditing){
            return <SocialCardForm contents={this.state.content} imageUrl={this.state.imageUrl} toggleEditMode="" />
        } else {
            return <SocialCardDisplay contents={this.state.content} imageUrl={this.state.imageUrl} toggleEditMode="" />
    
        }
    }

}