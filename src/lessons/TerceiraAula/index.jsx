import './style.scss'
import cardDoJogo from'../../assets/images/card-do-jogo.jpg'
import carrossel from'../../assets/images/carrossel.jpg'
import header from'../../assets/images/header.jpg'
import cardNoticia from'../../assets/images/card-noticia.jpg'
import cardVideo from'../../assets/images/card-video.jpg'
import tabela from'../../assets/images/tabela.jpg'
import agenda from'../../assets/images/agenda.jpg'
import shorts from'../../assets/images/shorts.jpg'

export function TerceiraAula() {

    const components = [
        {name: 'Header', description: 'Mostra links úteis e informações básicas da página', image: header},
        {name: 'Carrossel', description: 'Mostra mais informações das partidas ativas', image: carrossel},
        {name: 'Card do Jogo', description: 'Mostra o placar de um jogo e permite mudar o que é mostrado no carrossel', image: cardDoJogo},
        {name: 'Card de Notícia', description: 'Mostra imagem, título, descrição, horário e tags de uma notícia', image: cardNoticia},
        {name: 'Card de Vídeo', description: 'Mostra thumbnail, duração e título do vídeo; permite lançar o player', image: cardVideo},
        {name: 'Tabela', description: 'Informações resumidas da tabela de um campeonato', image: tabela},
        {name: 'Agenda', description: 'Informações sobre os jogos do dia', image: agenda},
        {name: 'Shorts', description: 'Permite reproduzir um vídeo curto direto na página com mouseover', image: shorts}
    ]

    return (
        <main className='terceira-aula-main'>
            <h1>Lista de componentes encontrados em um site</h1>
            <ul>

                {components.map( component => (
                    <li>
                    <img src={component.image}/>
                    <h1>{component.name}</h1>
                    <p>{component.description}</p>
                    </li>
                ))}

            </ul>
        </main>
    )

}