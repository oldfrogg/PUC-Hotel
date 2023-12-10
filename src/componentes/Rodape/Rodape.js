import './Rodape.css';
import React from 'react';

const Rodape = () => {

    const logoHotel = `${process.env.PUBLIC_URL}/imagens/Logo Hotel.png`;
    const logoInsta = `${process.env.PUBLIC_URL}/imagens/Instagram.png`;
    const logoFace = `${process.env.PUBLIC_URL}/imagens/Facebook.png`;
    const logoTwitter = `${process.env.PUBLIC_URL}/imagens/Twitter.png`;
    const logoPhone = `${process.env.PUBLIC_URL}/imagens/Phone.png`;
    const logoWhatsapp = `${process.env.PUBLIC_URL}/imagens/WhatsApp.png`;
    const divisoriaRodape = `${process.env.PUBLIC_URL}/imagens/divisoria-rodape.png`;

    return (
        <footer>
            <img className='logo-rodape' src={logoHotel} />
            <div className='secoes-rodape'>
                <div className='secao-rodape'>
                    <h3>Redes Sociais</h3>
                    <img className='icone-rodape' src={logoInsta} />
                    <img className='icone-rodape' src={logoFace} alt="Ícone do Facebook" />
                    <img className='icone-rodape' src={logoTwitter} alt="Ícone do Twitter" />
                </div>
                <img className='divisoria-rodape' src={divisoriaRodape} alt="Divisória no Rodapé" />
                <div className='secao-rodape'>
                    <h3>Contato</h3>
                    <div className='div-contato'>
                        <img className='icone-rodape' src={logoPhone} alt="Ícone de Telefone" />
                        <p>(21) 3022-2112</p>
                    </div>
                    <div className='div-contato'>
                        <img className='icone-rodape' src={logoWhatsapp} alt="Ícone do WhatsApp" />
                        <p>(21) 9510-2112</p>
                    </div>
                </div>
                <img className='divisoria-rodape' src={divisoriaRodape} alt="Divisória no Rodapé" />
                <div className='secao-rodape'>
                    <h3><a href='blank'>Trabalhe Conosco</a></h3>
                </div>
                <img className='divisoria-rodape' src={divisoriaRodape} alt="Divisória no Rodapé" />
                <div className='secao-rodape'>
                    <h3><a href='blank'>Guia da Cidade</a></h3>
                </div>
            </div>
        </footer>
    )
};
export default Rodape;