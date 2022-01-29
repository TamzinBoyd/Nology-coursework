import React from "react";
import Card from "../Card";
import styles from "./CardList.module.scss";

const CardList = (props) => {
  const { beers } = props;

  // render Card, pass in beer
  const getCardJsx = (beer) => (
    <div>
      <Card beer={beer} />
      <p> test card renders</p>
    </div>
  );

  // map over beers state (array) & for each beer carry out the function to render a card
  return (
    <section className={styles.container}>
      {beers.map((beer) => {
        getCardJsx(beer);
      })}
    </section>
  );
};

export default CardList;

// .filter((val) => {
//   if (searchTerm === "") {
//     console.log("doesnt include it");
//     return val;
//   } else if (
//     val.name.toLowerCase().includes(searchTerm.toLowerCase())
//   ) {
//     console.log("includes search term");
//     return val;
//   }
// })

// trying to filter based on search term - reads errors
// const test = (beers) => {
//   const filter = beers.filter((beer) => {
//     return beer.name.includes(searchTerm);
//   });
// };
