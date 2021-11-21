import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, {
    Keyboard,
    EffectFade,
    Mousewheel,
    Pagination,
} from 'swiper';

import {
    Welcome,
    Champion,
    ChampionDetail,
    Trailer,
    Credit,
} from '../components/home-section';

import { championsData } from '../assets/dummy';

SwiperCore.use([Keyboard, Mousewheel, Pagination, EffectFade]);

const swiperOptions = {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: {
        forceToAxis: true,
    },
    pagination: true,
    effect: 'fade',
    speed: 1000,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
};

const Home = () => {
    return (
        <>
            <Swiper {...swiperOptions}>
                <SwiperSlide>
                    {({ isActive }) => <Welcome isActive={isActive} />}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => <Champion isActive={isActive} />}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => <Trailer isActive={isActive} />}
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive }) => <Credit isActive={isActive} />}
                </SwiperSlide>
            </Swiper>
            {championsData.map((item, index) => (
                <ChampionDetail key={index} item={item} id={index} />
            ))}
            <div className='scroll'>
                <span>Scroll to see effect</span>
            </div>
        </>
    );
};

export default Home;
