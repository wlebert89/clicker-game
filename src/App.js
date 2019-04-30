import React, { Component } from "react";
import Navbar from "./components/Navbar/navbar";
import ItemCard from "./components/ItemCard/itemCard";
import items from "./items.json";

class App extends Component {
  state = {
    items: items,
    score: 0,
    highscore: 0
  };

  clickItem = id => {
    const shuffledItems = this.shuffleItems(items);
    this.setState({ items: shuffledItems });

    if (this.state.items.find(item => item.id === id && !item.clicked)) {
      const newItems = this.state.items.map(item => {
        if (item.id === id) {
          return {
            id: item.id,
            image: item.image,
            clicked: true
          };
        } else {
          return item;
        }
      });

      this.setState((prevState) => {
        return {
          items: newItems,
          score: prevState.score + 1
        }
      }, () => {
        console.log(this.state);
      });
    } else {
      return this.gameOver();
    }

  }

  gameOver() {
    console.log("Game Over");
  }

  shuffleItems(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  render() {
    return (
      <div>
        <Navbar score={this.state.score} highscore={this.state.highscore}>Clicker Game</Navbar>
        <div id="item-container">
          {this.state.items.map(item => (
            <ItemCard
              id={item.id}
              key={item.id}
              image={item.image}
              count={item.count}
              clickItem={() => this.clickItem(item.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
