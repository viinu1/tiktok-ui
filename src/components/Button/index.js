import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from './Button.module.scss';

const cx = classNames.bind(styles)

function Button({
    to,
    href,
    children,
    primary = false,
    outline = false,
    text = false,
    rounded,
    disabled = false,
    small = false,
    large = false,
    className,
    leftIcon,
    rightIcon,
    buttonIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props={
        onClick,
        ...passProps
    }
    if(to){
        props.to = to;
        Comp = Link;
    }else if(href){
        props.href  = href;
        Comp = 'a';
    }
    // trang tha disabled
    if(disabled){
        Object.keys(props).forEach(key =>{
           if(key.startsWith('on') && typeof props[key] === 'function'){
                delete props[key]
           }
        })
    }

    const classes = cx('wrapper',{
        [className]:className,
        primary,
        outline,
        text,
        rounded,
        disabled,
        small,
        large,
        buttonIcon,
    })
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;