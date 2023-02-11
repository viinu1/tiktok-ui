import PropTypes from 'prop-types';



import './GlobalStyle.scss'
function GlobalStyle({children}){
    return (
        children
    )
}

GlobalStyle.prototype = {
    children:PropTypes.node.isRequired
}
export default GlobalStyle