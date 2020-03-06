import React, { Component } from 'react';
import Header from '../Components/Header/Header';
import PortfolioCard from '../Components/PortfolioCard/PortfolioCard';
import PostsGrid from '../Components/PostsGrid/PostsGrid';
import FilterBar from '../Components/FilterBar/FilterBar';
import Footer from '../Components/Footer/Footer';

import './App.css';

// image imports
import image1 from '../Assets/weather.jpg';
import image3 from '../Assets/wildrose.jpg';
import image4 from '../Assets/angelina.jpg';
import image5 from '../Assets/photo.jpg';
import crochet from '../Assets/crochet.jpg'
import image6 from '../Assets/cocktail.jpg';


class App extends Component {

  state = {
    posts: [
      { 
        id: '1',
        image: image1,
        title: "My Weather",
        description: "A little app that checks the local weather, using the Accuweather API",
        label: "Vanilla JS",
        url: "https://tomgriffiths88.github.io/weather-app-demo/"
      },
      { 
        id: '2',
        image: crochet,
        title: "Crochet Calculator",
        description: "An online tool to help crocheters work out perfect patterns",
        label: "Vanilla JS",
        url: "http://www.crochetcalculator.co.uk"
      },
      { 
        id: '3',
        image: image3,
        title: "Wild Rose Forge",
        description: "Static website, designed and built for a local black smith",
        label: "Static",
        url: "http://wildroseforge.com/"
      },
      { 
        id: '4',
        image: image4,
        title: "Angelina Paloma",
        description: "A wordpress site, designed and developed for a local artist",
        label: "Wordpress",
        url: "https://www.angelinapaloma.com/"
      },
      { 
        id: '5',
        image: image5,
        title: "Tom Griffiths Photos",
        description: "A wordpress site for my photography work",
        label: "Wordpress",
        url: "https://www.tomgriffithsphotos.com"
      },
      { 
        id: '6',
        image: image6,
        title: "Bar Buddy",
        description: "A react cocktail recipe app, that pulls data from the cocktail db api.",
        label: "React",
        url: "https://tomgriffiths88.github.io/bar-buddy"
      }
    ],
    filter: 'All',
  }

  filterClickHandler = (e) => {
    const filter = e.target.innerHTML;
    this.setState({filter: filter});
  };

  render() {

    const posts = this.state.posts.map(post => {
        if(post.label === this.state.filter || this.state.filter === 'All') {
          return  <PortfolioCard title={post.title} image={post.image} description={post.description} label={post.label} url={post.url} key={post.id}/>
        } else {
          return null;
        }
      });
    
    return (
      <div className="App">
        <div className="container">
          <Header/>
          <FilterBar posts={this.state.posts} click={this.filterClickHandler} clearFilter={this.clearFilterHandler} filter={this.state.filter}/>
            <PostsGrid>
            {posts}
            </PostsGrid>
          <Footer />
        </div>
    </div>
    );
  }
  
}

export default App;
