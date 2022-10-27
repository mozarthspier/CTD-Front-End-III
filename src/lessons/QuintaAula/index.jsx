import { QuintaAulaItem } from '../../components/QuintaAulaItem'
import './style.scss'

export function QuintaAula() {

    const nationalTeams = [
        {
            id: 1,
            flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/800px-Flag_of_Iran.svg.png",
            name: "Irã",
            nickname: "Team Melli",
            association: "Iran Football Federation"
        },
        {
            id: 2,
            flag: "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1280px-Flag_of_England.svg.png",
            name: "Inglaterra",
            nickname: "The Three Lions",
            association: "English Football Association"
        },
        {
            id: 3,
            flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/800px-Flag_of_Ecuador.svg.png",
            name: "Equador",
            nickname: "La Tricolor",
            association: "Federación Ecuatoriana de Fútbol"
        },
        {
            id: 4,
            flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/1280px-Flag_of_Senegal.svg.png",
            name: "Senegal",
            nickname: "The Lions of Teragna",
            association: "Senegalese Football Federation"
        },
        {
            id: 5,
            flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/1200px-Flag_of_Qatar.svg.png",
            name: "Qatar",
            nickname: "Al-Annabi (The Maroons)",
            association: "Qatar Football Association"
        },
        {
            id: 6,
            flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Wales_%281959%29.svg/2560px-Flag_of_Wales_%281959%29.svg.png",
            name: "País de Gales",
            nickname: "Y Dreigiau (The Dragons)",
            association: "Football Association of Wales"
        },
        {
            id: 7,
            flag: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
            name: "Estados Unidos",
            nickname: "The Stars and Stripes",
            association: "United States Soccer Federation"
        }
    ]

    return (
        <main className="quinta-aula-component">
            <h1 className="main-title">Seleções da Copa do Mundo</h1>
            <ul className="components-found">
                {nationalTeams.map(team => (
                    <QuintaAulaItem team={team}/>
                ))}
            </ul>
        </main>
    )

}

