import React, {Component} from 'react';
import PropTypes from "prop-types";

//componente em forma de função - stateless

const Button = (props) => {
    return <a href=""  onclick={props.onclick}>
            {props.children }
        </a>
}
 
Button.defaultProps = {
    children: "Salvar"
};

Button.propTypes = {
    onclick: PropTypes.func.isRequired,
    children: PropTypes.string
};

export default Button;