import "./Numero.css"
import React from "react";
import Card from "./Card";

export default props => {
    const { max } = props
    return (
        <Card title="Escolha um Número:" blue>
            <div className="Numero">
                <span>
                    Número:
                    <input type="number" value={max} onChange={e => props.onMaxChanged(+e.target.value)}/>
                </span>
            </div>
        </Card>
    )
}