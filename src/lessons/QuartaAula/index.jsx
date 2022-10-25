import './style.scss'

export function QuartaAula() {

    const nationalTeams = [
        {
            flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/800px-Flag_of_Iran.svg.png",
            name: "Irã",
            nickname: "Team Melli",
            association: "Iran Football Federation"
        },
        {
            flag: "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1280px-Flag_of_England.svg.png",
            name: "England",
            nickname: "The Three Lions",
            association: "English Football Association"
        },
        {
            flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/800px-Flag_of_Ecuador.svg.png",
            name: "Equador",
            nickname: "La Tricolor",
            association: "Federación Ecuatoriana de Fútbol"
        },
        {
            flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/1280px-Flag_of_Senegal.svg.png",
            name: "Senegal",
            nickname: "The Lions of Teragna",
            association: "Senegalese Football Federation"
        },
        {
            flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/1200px-Flag_of_Qatar.svg.png",
            name: "Qatar",
            nickname: "Al-Annabi (The Maroons)",
            association: "Qatar Football Association"
        }
    ]

    return (
        <main className="quarta-aula-component">
            <h1 className="main-title">Seleções da Copa do Mundo</h1>

            <ul className="components-found">
                {nationalTeams.map(team => (
                    <li>
                        <img src={team.flag}/>
                        <h1>{team.name}</h1>
                        <p><b>Nickname:</b> {team.nickname}</p>
                        <p><b>Association:</b> {team.association}</p>
                    </li>
                ))}
            </ul>
        </main>
    )

}

