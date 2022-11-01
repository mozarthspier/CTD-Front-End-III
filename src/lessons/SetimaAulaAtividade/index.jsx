import { useState } from 'react'
import { SetimaAulaCardProduto } from '../../components/SetimaAulaCardProduto'
import './style.scss'

export function SetimaAulaAtividade() {
    
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

    const newProduct = {
        id: 4,
        name: 'Playstation 4',
        price: '2.000',
        picture: 'https://http2.mlstatic.com/D_NQ_NP_798586-MLA40076060236_122019-W.webp'
    }

    const [allProducts, setAllProducts] = useState(products)

    function adicionaElemento() {
        setAllProducts([...allProducts, newProduct])
    }

    return (
        <main className="setima-aula-atividade-component">

            <div className="tittle-wrapper">
                <h1>Produtos</h1>
                <button onClick={adicionaElemento}>Adicionar novo produto</button>
            </div>

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
