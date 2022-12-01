import React from "react";
import Card from "./Card";

export default props => {
    const { max } = props
    return (
        <Card title={props.titulo} pink>
            <div>
                <p>{props.aluno} {max}</p>
            </div>
        </Card>
    )
}