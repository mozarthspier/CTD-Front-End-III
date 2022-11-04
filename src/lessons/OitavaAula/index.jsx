import { useState } from 'react'
import { SetimaAulaCardProduto } from '../../components/SetimaAulaCardProduto'
import './style.scss'

export function OitavaAula() {
    
    const products = [
        {
            id: 1,
            name: 'Xbox',
            price: '3.000',
            picture: 'https://http2.mlstatic.com/D_NQ_NP_695945-MLB50098260025_052022-O.webp'
        },
        {
            id: 2,
            name: 'Playstation 5',
            price: '5.000',
            picture: 'https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.webp'
        },
        {
            id: 3,
            name: 'Switch',
            price: '2.000',
            picture: 'https://http2.mlstatic.com/D_NQ_NP_771705-MLA40692342174_022020-W.webp'
        }
    ]

    const [nomeProduto, setNomeProduto] = useState('')
    const [precoProduto, setPrecoProduto] = useState('')
    const [imagemProduto, setImagemProduto] = useState('')
    const [allProducts, setAllProducts] = useState(products)

    function cadastrarProduto(event) {
        
        event.preventDefault()
        let novoId = allProducts[allProducts.length - 1].id + 1
        
        let newProduct = {
            id: novoId,
            name: nomeProduto,
            price: precoProduto,
            picture: imagemProduto
        }
        setAllProducts([...allProducts, newProduct])

        setNomeProduto("")
        setPrecoProduto("")
        setImagemProduto("")
    }

    return (
        <main className="oitava-aula-component">

            <div className="tittle-wrapper">
                <h1>Produtos</h1>
            </div>

            <form>
                <div>

                    <label htmlFor="nomeProduto">Nome do produto: </label>
                    <input id="nomeProduto" type="text" value={nomeProduto} onChange={event => setNomeProduto(event.target.value)}/>

                </div>

                <div>

                    <label htmlFor="precoProduto">Preço do produto: </label>
                    <input id="precoProduto" type="number" value={precoProduto} onChange={event => setPrecoProduto(event.target.value)}/>

                </div>

                <div>

                    <label htmlFor="imagemProduto">Imagem do produto: </label>
                    <input id="imagemProduto" type="text" value={imagemProduto} onChange={event => setImagemProduto(event.target.value)}/>

                </div>

                <button type='submit' onClick={event => cadastrarProduto(event)}>Cadastrar Produto</button>

            </form>

            <section className='products'>
                {
                    allProducts.map(
                        product => {
                            return (
                                <SetimaAulaCardProduto
                                    productData={product}
                                />
                            )
                        }
                    )
                }
            </section>
        </main>
    )
}
