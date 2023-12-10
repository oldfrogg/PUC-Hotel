import './Carrossel.css';

import { useRef, useEffect } from 'react';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();


const Carrossel = () => {
    const swiperElRef = useRef(null);

    useEffect(() => {
      // listen for Swiper events using addEventListener
      swiperElRef.current.addEventListener('swiperprogress', (e) => {
        const [swiper, progress] = e.detail;
        console.log(progress);
      });
  
      swiperElRef.current.addEventListener('swiperslidechange', (e) => {
        console.log('slide changed');
      });
    }, []);
  
    return(
        <>
        <section className="carrossel">
            <swiper-container ref={swiperElRef} slides-per-view="1" speed="500" loop="true" css-mode="true" navigation="true" pagination="true" scrollbar="false">
                    <swiper-slide>
                        <img src="imagens/Piscina.jpg" />
                    </swiper-slide>
                    <swiper-slide>
                        <img src="imagens/Bar.jpg" alt="" />
                    </swiper-slide>
                    <swiper-slide>
                        <img src="imagens/Academia.jpg" alt="" />
                    </swiper-slide>
                    <swiper-slide>
                        <img src="imagens/Salao cafe da manha.jpg" alt="" />
                    </swiper-slide>
                    <swiper-slide>
                        <img src="imagens/Suite presidencial 2.jpg" alt="" />
                    </swiper-slide>
            </swiper-container>
        </section>
        </>
    )
};
export default Carrossel;