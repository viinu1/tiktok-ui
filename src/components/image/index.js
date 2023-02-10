import { forwardRef, useState } from "react";
import classNames from "classnames/bind";
import images from "~/assets/images";
import styles  from './Image.module.scss';

const Image = forwardRef(({src, alt, className,fallBack:customrFallBack = images.imgDefault ,...props},ref) => {
    const [fallBack,setFallBack] = useState('');

    const handleError = ()=>{
        setFallBack(customrFallBack)
    }

    return (
        <img className={classNames(styles.wrapper,className)}
            ref={ref} src={fallBack || src} alt={alt} {...props}
            onError={handleError}
        />
    );
})

export default Image;