// import { useState } from "react";
// import Nav from "./Navigation/Nav";
// import Products from "./Products/Products";
// import Recommended from "./Recommended/Recommended";
// import Sidebar from "./Sidebar/Sidebar";

// //Database
// import products from './db/data'
// import Card from "./components/Card";


// function App() {
//   const[selectedCategory, setSelectedCategory] = useState(null)

//   //input Filter
//   const[query, setQuery] = useState("")

//   const handleInputChange = e => {
//     setQuery(e.target.value)
//   }

//   const filteredItems = products.filter(product => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1));
  
//   // RADIO FILTER
//   const handleChange = (e) => {
//     setSelectedCategory(e.target.value)
//   }

//   //BUTTONS FILTERS
//   const handleClick = (e) => {
//     setSelectedCategory(e.target.value)
//   }
  
//   function filteredData(products, selected, query){
//     let filteredProducts = products;

//     //filtering input items
//     if(query){
//       filteredProducts = filteredItems
//     }

//     //Selected Filter
//     if(selected){
//       filteredProducts = filteredProducts.filter(({category, color, company, newPrice, title}) => 
//         category === selected || 
//         color === selected || 
//         company === selected ||
//         newPrice === selected ||
//         title === selected
//         );
//     }

//     return filteredProducts.map(({img,title, star, reviews, newPrice, prevPrice}) => (
//       <Card 
//       key={Math.random()}
//       img={img}
//       title= {title}
//       star = {star}
//       reviews = {reviews}
//       newPrice = {newPrice}
//       prevPrice = {prevPrice}
//       />
//       ))
//   }
  
//   const result = filteredData(products, selectedCategory, query);
  
//   return (
//     <>
//     <Sidebar handleChange ={handleChange}/>
//     <Nav query={query} handleInputChange={handleInputChange}/>
//     <Recommended handleChange={handleClick}/>
//     <Products result={result}/>
//     </>
    
//   );
// }

// export default App;

import { useState } from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;
