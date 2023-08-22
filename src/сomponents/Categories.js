import React, { Component } from 'react'

export class Categories extends Component {

  constructor(props) {
    super(props)
    this.state = {
      categories: [
        {
          key: 'all',
          name: 'Всё'
        },
        {
          key: 'chair',
          name: 'Стулья'
        },
        {
          key: 'bed',
          name: 'Кровати'
        },
        {
          key: 'sofa',
          name: 'Диваны'
        },
        {
          key: 'stol',
          name: 'Столы'
        },

      ]
    }
  }

  render() {
    return (
      <div>
      <h2>Фильтр по товарам:</h2>
      <div className='categories'>

        {this.state.categories.map(el => (
           <button onClick={() => this.props.chooseCategory(el.key)} key={el.key}>{el.name}</button>
        ))}
      </div>
      </div>
    )
  }
}

export default Categories
