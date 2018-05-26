import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: [] // what we have available.
    }
  }
  search (term) {
    var context = this;
    //console.log(`${term} was searched`); 
    //  This is probably where the post request should happen.
    // TODO : POST TO SERVER.
    var search = JSON.stringify({ 0: (term)});
    // console.log(search); 
    $.ajax({
      type: 'POST',
      url: '/repos',
      contentType: 'application/json', // has to be json to send to server then server parse back to string.
      data: search,
      success: function(data) {
        // console.log('data recieved', data);
        context.grabStuff();
        // console.log(this);
      },
      error: function (error) {
        console.log('myerror ', error);
      }
    });
  }
  
  grabStuff () {
    var context = this;
    $.ajax({
      type: 'GET',
      url: '/grabrepos',
      // accept: 'application/json',
      success:function(data) {
        // console.log('data:',data);
        context.setState({
          repos: data
        })
      },
      error: function (err) {
        console.log('err:', err);
      }
    });
  }
  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));