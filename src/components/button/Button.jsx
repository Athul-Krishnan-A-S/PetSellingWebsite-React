import './Button.css';
function Button(props) {
    return (
        props.reverse === 'true' ? <div
            className={props.className}>
            {props.value}
            {props.icon && <img
                src={props.icon}
                alt='icon' />}
        </div>
            : <div
                className={props.className}>
                {props.icon && <img
                    src={props.icon}
                    alt='icon' />}
                {props.value}
            </div>
    );
}
export default Button;