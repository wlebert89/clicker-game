import React, { Component } from "react";
import Navbar from "./components/Navbar/navbar";
import ItemCard from "./components/ItemCard/itemCard";
import items from "./items.json";

class App extends Component {
  state = {
    items,
    score: 0,
    highscore: 0
  };

  clickItem = id => {
    let newItems;
    let score;
    let highscore;

    if (this.state.items.find(item => item.id === id && !item.clicked)) {
      newItems = this.state.items.map(item => {
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
      score = this.state.score + 1
      if (score > this.state.highscore) {
        highscore = score;
      } else {
        highscore = this.state.highscore;
      }
    } else {
      newItems = this.state.items.map(item => ({
        id: item.id,
        image: item.image,
        clicked: false
      }));
      score = 0;
      highscore = this.state.highscore
    }

    this.setState({
      items: this.shuffleItems(newItems),
      score,
      highscore
    });
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
