export default function UserCard(props) {


    console.log(props.user.specialization)

    return (
        <div id="usercard">
            <div className="usercard-image-wrapper">
                <img src={props.user.image} alt={props.user.firstName} className="usercard-image" />
            </div>
            <h3 className="usercard-title">{props.user.firstName} {props.user.lastName}</h3>
            <div className="usercard-specs-wrapper">
                {props?.user?.specialization?.map((spec, idx) => <p className="usercard-spec" key={idx}>{spec}</p>)}
            </div>
        </div>
    )
}