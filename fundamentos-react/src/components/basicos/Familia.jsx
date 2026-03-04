import React from 'react'

export default props => {
    return (
        <div>
            {
                // React.cloneElement(props.children, props ) Aqui é só pra 1 elemento
                React.Children.map(props.children, child => {
                    return React.cloneElement(child, props)
                })
            }
        </div>
    );
}