export function QuintaAulaItem(props) {

    console.log(props)

    return (
        <>
            <li key={props.team.id}>
                <img src={props.team.flag}/>
                <h1>{props.team.name}</h1>
                <p><b>Nickname:</b> {props.team.nickname}</p>
                <p><b>Association:</b> {props.team.association}</p>
            </li>
        </>
    )

}