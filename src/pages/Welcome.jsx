export default function Welcome(props) {
  return (
    <div id="welcome">
        <h1 
        className="welcome-title"
        onClick={props.onClick}
        >EDUCATERA</h1>
    </div>
  )
}
