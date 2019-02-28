import React from 'react';
import { Highlight, Hits, InstantSearch, SearchBox, Stats, RefinementList } from 'react-instantsearch-dom';

import './algolia.css';
import './search.css';

// Min number of characters needed to trigger search results
const MIN_CHAR_COUNT = 0;

const Result = ({ hit }) => (
  <a style={{ marginTop: '10px' }} href={hit.slug}>
    <div>
      <Highlight attribute="title" hit={hit} />
    </div>
    <Highlight attribute="date" hit={hit} />
    <Highlight attribute="tags" hit={hit} />
    <small>{hit.date}</small>
  </a>
);

class Search extends React.Component {
  state = {
    showResults: false
  };

  handleChange = e => {
    this.setState({
      showResults: e.target.value.length > MIN_CHAR_COUNT
    });
  };

  handleReset = () => this.setState({ showResults: false });

  render() {
    const { appId, apiKey, indexName } = this.props;
    return (
      <InstantSearch appId={appId} apiKey={apiKey} indexName={indexName}>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '1.45rem 1.0875rem'
          }}
        >
          <RefinementList attribute="language" />
          <SearchBox onChange={this.handleChange} onReset={this.handleReset} />
          {this.state.showResults && (
            <div>
              <Hits hitComponent={Result} />
              <Stats />
            </div>
          )}
        </div>
      </InstantSearch>
    );
  }
}

export default Search;
