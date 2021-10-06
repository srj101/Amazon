import React from 'react'
import './home.css'
import Product from './Product'
function home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img
                className='home__image'
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

                <div className="home__row">
                    {/** Product */}
                    <Product id={1} title='Apple MacBook Pro 13" M1 Chip with 8-Core CPU and 8-Core GPU' price={699.99} image='https://ph-live-05.slatic.net/p/5a7aa76ecfba0b9745a496994eb36aaf.png_720x720q80.jpg_.webp' rating={5}/>
                    {/** Product */}
                    <Product id={2}  title='Javascript by Junayed Ahmed' price={39.99} image='https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/e53af8191_202772.jpg' rating={5}/>
                </div>

                <div className="home__row">
                    {/** Product */}
                    <Product id={3} title='Cotton Casual T-shirt for Men - Multicolor' price={18.99} image='https://static-01.daraz.com.bd/p/cbf09966a311809971c263eff76e0bc1.jpg_340x340q80.jpg_.webp' rating={2}/>
                    {/** Product */}
                    <Product id={4} title='ayur Herbal Massage Cream With Aloe Vera- 250ml' price={49} image='https://static-01.daraz.com.bd/p/c69ff9fb84f96e1ae6e3a31a342edabc.jpg_340x340q80.jpg_.webp' rating={4}/>
                    {/** Product */}
                    <Product id={5} title='FANTECH HG20 CHIEF II RGB Gaming Headphone' price={99.99} image='https://static-01.daraz.com.bd/p/8f618e49f8352dc7ee97ddb38df99d4f.jpg_340x340q80.jpg_.webp' rating={3}/>
                </div>

                <div className="home__row">
                    {/** Product */}
                    <Product id={5} title='8139 Analog Wrist Watch - Brown and White' price={134.99} image='https://static-01.daraz.com.bd/p/1afadc3f7ef8ab6506dc1e25c845098f.jpg_340x340q80.jpg_.webp' rating={5}/>
                </div>

            </div>

           

        </div>
    )
}

export default home
