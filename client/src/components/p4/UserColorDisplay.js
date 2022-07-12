import './UserColors.css'

export const UserColorDisplay = (props) => {
    return (
        <>
            <span className={"p-2 flex-fill text-dark fw-bold text-responsive"} style={{backgroundColor: props.col}}>
                {props.user}
            </span>
        </>
    )
}
