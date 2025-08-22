import React from "react";

function CardTitle({children,className,...rest}){
    return <div className={`m-1 ${className} font-bold`} {...rest}>
        <h2>{children}</h2>
    </div> 
}
function CardDescription({children,className,...rest}){
    return <p className={`${className} text-xs mx-1`} {...rest}>{children}</p>
}
function CardHeader({children,className,...rest}){
    return <div className={`${className} mb-2`} {...rest}>
        {children}
    </div>
}
function CardFooter({children,className, ...rest}){
    return <div className={`${className}`} {...rest}>
        {children}
    </div>
}
function Card({children,className,...rest}){
    return <div 
    className={`rounded border m-4 p-5 shadow-md ${className}`} 
    {...rest}>
        {children}
    </div>
}

export {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription
}
