import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Grey chair",
          img: "sol-chair-45x45x85cm-nt-1.0_2.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, deleniti!",
          category: "Chairs",
          price: "49.99",
        },
        {
          id: 2,
          title: "Table",
          img: "sol-chair-45x45x85cm-nt-1.0_2.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, veniam?",
          category: "Tables",
          price: "149.00",
        },
        {
          id: 3,
          title: "Chair",
          img: "sol-chair-45x45x85cm-nt-1.0_2.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, veniam?",
          category: "Chairs",
          price: "55.00",
        },
        {
          id: 4,
          title: "Table",
          img: "sol-chair-45x45x85cm-nt-1.0_2.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, veniam?",
          category: "Tables",
          price: "80.00",
        },
        {
          id: 5,
          title: "Table",
          img: "sol-chair-45x45x85cm-nt-1.0_2.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, veniam?",
          category: "Tables",
          price: "180.00",
        },
        {
          id: 6,
          title: "Sofa",
          img: "sol-chair-45x45x85cm-nt-1.0_2.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, veniam?",
          category: "Sofas",
          price: "120.00",
        },
        {
          id: 6,
          title: "Light",
          img: "sol-chair-45x45x85cm-nt-1.0_2.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, veniam?",
          category: "Lights",
          price: "50.25",
        },
      ],
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items items={this.state.currentItems} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  chooseCategory(category) {
    if (category === "All") {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }
}
export default App;
