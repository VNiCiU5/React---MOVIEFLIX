import './Colaborador.css'

const Colaborador = ({ nome, imagem,  corDeFundo }) => {

    return (
    <div className='colaborador'>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={imagem} alt={nome} />
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            
        </div>
    </div>
    )

}

export default Colaborador