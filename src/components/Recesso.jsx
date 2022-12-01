import React from "react";
import Card from "./Card";

export default props => {
    const { min, max } = props
    return (
        <Card title="Está chegando..." green>
            <div>
                <h2>Estarei de Recesso em { min + max } dias</h2>
            </div>
        </Card>
    )
}