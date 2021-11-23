import React from "react";
import ClassComponent from "../Components/ClassComponent";
import Welcome from "../Components/Welcome";


export default class Komponen extends React.Component {

    render() {
        return (
            <div>
                <ClassComponent />
                <Welcome />
            </div>
        )
    }
}