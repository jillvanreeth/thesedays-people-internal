import React from 'react';


import './App.scss';

import {AppContext} from './contexts/App.context';

import {ErrorMsg} from './components/errorMsg/ErrorMsg';
import {NoResults} from './components/noResults/NoResults';
import {Sidebar} from './components/sidebar/Sidebar';
import {Header} from './components/header/Header';
import {PersonDetail} from './components/personDetail/PersonDetail';
import {Searchbar} from './components/searchbar/Searchbar';
import {Thead} from './components/thead/Thead';
import {PeopleList} from './components/peopleList/PeopleList';
import {Pager} from './components/pager/Pager';

import './styles/style.css';

function App() {
  return (
    <AppContext.Consumer>
      { 
        ({ error, results, pages, isLoading, menu, activePerson }) => (
            
          <main className={`main sidebar-is-${menu}`}>
          
            {error && (<ErrorMsg />)}
            
            {!error && (
              <div>
                <Sidebar/>

                <div className="main">
                  <Header />
     
                    {isLoading && <h3>Loading...</h3> }

                    { activePerson && (<PersonDetail />)}

                    {(!isLoading && !activePerson) && (
                      <section className="main__content">
                        <Searchbar />
                              
                        <table className="theTable">
                          <Thead />
                           
                          {!results && <NoResults /> }

                          {results && <PeopleList /> }
                        </table>
                        
                        {pages > 1 && <Pager /> }
                      </section>
                    )}  
                </div>
              </div>
            )}
          </main>
        )
      }
    </AppContext.Consumer>
   )
}

export default App;