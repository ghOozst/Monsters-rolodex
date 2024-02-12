import { useEffect, useState } from 'react';

import CardList from './components/card-list/card-list.component';
import './App.css';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterdMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilterdMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField)
    );
    setFilterdMonsters(newFilterdMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (e) => {
    const searchFieldstr = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldstr);
  };

  return (
    <div className="App">
      <h1 className="app-tittle">Monster Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search monsters"
        className="monsters-search-box"
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

//class App extends Component {
//  constructor() {
//    super();

//    this.state = {
//      monsters: [],
//      searchField: '',
//    };
//  }

//  componentDidMount() {
//    fetch('https://jsonplaceholder.typicode.com/users')
//      .then((res) => res.json())
//      .then((users) => this.setState(() => ({ monsters: users })));
//  }

//  render() {
//    const { monsters, searchField } = this.state;
//    const { onSearchChange } = this;

//    const filteredMonsters = monsters.filter((monster) =>
//      monster.name.toLocaleLowerCase().includes(searchField)
//    );

//    return (
//      <div className="App">
//        <h1 className="app-tittle">Monster Rolodex</h1>
//        <SearchBox
//          onChangeHandler={onSearchChange}
//          placeholder="Search monsters"
//          className="search-box"
//        />
//        <CardList monsters={filteredMonsters} />
//      </div>
//    );
//  }
//}

export default App;
