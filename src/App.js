// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js';
import ChocoList from './components/chocolist';
import React, { useState } from 'react';
import Footer from './components/footer';
import AddItem from './components/addItem';
// import Chocolates from './components/chocolates';
// 1. Plain chocolate = 8 ₹
// 2. Dark chocolate = 10 ₹
// 3. Milk chocolate = 12 ₹
// 4. Plain crunch chocolate = 8 ₹
// 5. Dark crunch chocolate = 10 ₹
// 6. Milk crunch chocolate = 12 ₹
// 7. Dry fruit chocolate = 15 ₹
// 8. Butterscotch chocolate = 10 ₹

function App() {
  const chocoList = [
    {
      name: "Plain",
      price: 8,
      quantity: 0,

    },
    {
      name: "Dark",
      price: 10,
      quantity: 0,
    }
    ,
    {
      name: "Milk",
      price: 12,
      quantity: 0,
    }

    ,
    {
      name: "Plain Crunch",
      price: 8,
      quantity: 0,
    }
    ,
    {
      name: "Dark Crunch",
      price: 10,
      quantity: 0,
    }
    ,
    {
      name: "Milk Crunch",
      price: 12,
      quantity: 0,
    }
    ,
    {
      name: "Dry Fruit",
      price: 15,
      quantity: 0,
    }
    ,
    {
      name: "Butterscotch",
      price: 10,
      quantity: 0,
    }

  ]

  let [chocolist, setChocoList] = useState(chocoList);
  let [totalAmount, setTotal] = useState(0);
  const increment = (index) => {
    let list = [...chocolist]
    let total = totalAmount;
    list[index].quantity++;
    total += list[index].price;
    setTotal(total);
    setChocoList(list);
  }
  const decrement = (index) => {
    let list = [...chocolist]
    let total = totalAmount;

    if (list[index].quantity > 0) {
      list[index].quantity--;
      total -= list[index].price;
    } else {
      list[index].quantity = 0;
    };
    setTotal(total);
    setChocoList(list);
  }
  const reset = () => {
    let list = [...chocolist]
    list.map((chocolate) => {
      chocolate.quantity = 0;

    })
    setTotal(0);
    setChocoList(list)
  }
  const remove = (index) => {
    let list = [...chocolist]
    let total = totalAmount;
    total -= list[index].quantity * list[index].price;
    list.splice(index, 1);
    setTotal(total)
    setChocoList(list);
  }
  const add = (name, price) => {
    // console.log("helo");
    // console.log(props);
    let list = [...chocolist]
    list.push({
        name: name,
        price: price,
        quantity: 0
    })
    setChocoList(list);
}

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      {/* <button onclick="window.print()">Print this page!</button> */}



      <Navbar />
      
      <main className="container mt-5" style={{ height: "100vh" }} >
      <h1 className="">Add Chocolate</h1>
      <AddItem chocolist={chocolist} add={ add}/>
        <h1>Your Cart</h1>
        <ChocoList chocolist={chocolist} increment={increment} decrement={decrement} remove={remove} />
      </main>

      <Footer totalamount={totalAmount} reset={reset} />

    </>
  );
}

export default App;
