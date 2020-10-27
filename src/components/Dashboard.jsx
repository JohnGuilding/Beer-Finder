import React from 'react'
import styles from "./../styles/App.module.scss";
import Styles from "./../styles/Card.module.scss"; 
import Card from "./Card";


const Dashboard = (props) => {

    const { searchBeers, randomBeer } = props;

    // passing beer to card
    const getBeer = (beer) => (
        <div key={beer.id}>
            <Card beer={beer}/>
        </div>
    )

{
    //Movement Animation to happen
    const card = document.querySelector(".card");
    const container = document.querySelector(".container");

    // //Items
    // const title = document.querySelector(".title");
    // const sneaker = document.querySelector(".sneaker img");
    // const purchase = document.querySelector(".purchase");
    // const description = document.querySelector(".info h3");
    // const sizes = document.querySelector(".sizes");

    // //Moving Animation Event
    // container.addEventListener("mousemove", (e) => {
    //     let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    //     let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    //     card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    // });

    // //Animate In
    // container.addEventListener("mouseenter", (e) => {
    //     card.style.transition = "none";

    //     //Popout
    //     title.style.transform = "translateZ(150px)";
    //     sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
    //     description.style.transform = "translateZ(125px)";
    //     sizes.style.transform = "translateZ(100px)";
    //     purchase.style.transform = "translateZ(75px)";
    // });

    // //Animate Out
    // container.addEventListener("mouseleave", (e) => {
    //     card.style.transition = "all 0.5s ease";
    //     card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        
    //     //Popback
    //     title.style.transform = "translateZ(0px)";
    //     sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    //     description.style.transform = "translateZ(0px)";
    //     sizes.style.transform = "translateZ(0px)";
    //     purchase.style.transform = "translateZ(0px)";
    // });
}

// const func = (e) => {
//     console.log('yo');
//     let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
//     let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
//     card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
// }


    return (
        <>
            <div className={Styles.container}>
                <div className={Styles.card}>
                    <div className={Styles.sneaker}>
                        <div className={Styles.circle}></div>
                        <img src="./nike-air-max-97-1.png" alt="sneaker 001"></img>
                    </div>
                    <div className={Styles.info}>
                        <h1 className={Styles.title}>Nike</h1>
                        <h3>ICONIC - THE SEAN WEATHERSPOON AIR MAX 1 97 CROSSOVER NEEDS NO INTRODUCTION</h3>
                        <div className={Styles.sizes}>
                            <button className={Styles.active}>9</button>
                            <button>10</button>
                            <button>11</button>
                            <button>12</button>
                        </div>
                        <div className={Styles.purchase}>
                            <button>Purchase</button>
                        </div>
                    </div>
                </div>
            </div>
            <section className={styles.dashboard}>
                {searchBeers.map(getBeer)}
                {randomBeer.map(getBeer)}
            </section>
        </>
    )
}

export default Dashboard;
