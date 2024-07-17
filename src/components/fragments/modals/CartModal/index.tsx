import { Modal } from "../Modal";

export function CartModal(){
    return(
        <Modal onClose={() => console.log("Fechar")}>
            <h2>Carrinho</h2>
            <ul>
                {/* componentes CartProductCard */}
            </ul>
            <div>
                <p>Total:</p>
                <p>R$ 200,00</p>
                <button>Finalizar a compra</button>
            </div>
        </Modal>
    )
}