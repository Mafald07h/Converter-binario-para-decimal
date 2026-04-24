import "./Button.css"

function Button({buttonTitle}){
    return (
        <>
            <button className="button-style">{buttonTitle}</button>
        </>
    )
}

export default Button