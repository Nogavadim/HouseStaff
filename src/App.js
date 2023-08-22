import React from "react";
import Header from "./сomponents/Header";
import Footer from "./сomponents/Footer";
import Items from "./сomponents/Items";
import Categories from "./сomponents/Categories";
import ShowFullItem from "./сomponents/ShowFullItem";

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      orders:[],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Серый стул',
          img: 'СhairGrey.webp',
          desc: 'Очень удобный Серый стул',
          category: 'chair',
          price: '5000'
        },
        {
          id: 2,
          title: 'Красный стул',
          img: 'СhairRed.webp',
          desc: 'Очень удобный Красный стул',
          category: 'chair',
          price: '6999'
        },
        {
          id: 3,
          title: 'Серая кровать',
          img: 'bedGrey.webp',
          desc: 'Очень удобная Серая кровать',
          category: 'bed',
          price: '13500'
        },

        {
          id: 4,
          title: 'Красная кровать',
          img: 'bedRed.webp',
          desc: 'Очень удобная Красная кровать',
          category: 'bed',
          price: '13500'
        },

        {
          id: 5,
          title: 'Серый диван',
          img: 'sofaGrey.webp',
          desc: 'Очень удобный Серый диван',
          category: 'sofa',
          price: '25600'
        },

        {
          id: 6,
          title: 'Красный диван',
          img: 'sofaRed.webp',
          desc: 'Очень удобный Красный диван',
          category: 'sofa',
          price: '16800'
        },

        {
          id: 7,
          title: 'Серый стол',
          img: 'stolGrey.webp',
          desc: 'Очень удобный Серый стол',
          category: 'stol',
          price: '16800'
        },

        {
          id: 8,
          title: 'Красный стол',
          img: 'stolRed.webp',
          desc: 'Очень удобный Красный стол',
          category: 'stol',
          price: '20999'
        },


      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }


  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items  onShowItem={this.onShowItem}  items={this.state.currentItems} onAdd={this.addToOrder}/>

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category )
    })
  }

  deleteOrder(id) {
   this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id) {
        isInArray = true
      }})

     if(!isInArray)

    this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
