import React, { Component } from 'react'
import {
  Highlight,
  Hits,
  InstantSearch,
  SearchBox,
  Stats,
  RefinementList,
} from 'react-instantsearch-dom'
import styled from 'styled-components'

import AlgoliaLogo from './AlgoliaLogo'

import './algolia.css'
import './search.css'

// Min number of characters needed to trigger search results
const MIN_CHAR_COUNT = 0

const StyledAlgoliaLogoWrapper = styled.div`
  margin: 0.5rem 0;
  text-align: right;
`
const StyledSearchWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`
const StyledResult = styled.a`
  margin-top: 10px;
`
const StyledHighlight = styled(Highlight)`
  display: block;
`

const Result = ({ hit }) => (
  <StyledResult href={hit.slug}>
    <StyledHighlight attribute="title" hit={hit} />
    <StyledHighlight attribute="date" hit={hit} />
    <StyledHighlight attribute="tags" hit={hit} />
  </StyledResult>
)

class Search extends Component {
  state = {
    shouldShowResults: false,
  }

  handleChange = e => {
    this.setState({
      shouldShowResults: e.target.value.length > MIN_CHAR_COUNT,
    })
  }

  handleReset = () => this.setState({ shouldShowResults: false })

  render() {
    const { appId, apiKey, indexName } = this.props
    const { shouldShowResults } = this.state
    return (
      <InstantSearch appId={appId} apiKey={apiKey} indexName={indexName}>
        <StyledSearchWrapper>
          <RefinementList attribute="language" />
          <SearchBox onChange={this.handleChange} onReset={this.handleReset} />
          <StyledAlgoliaLogoWrapper>
            <AlgoliaLogo />
          </StyledAlgoliaLogoWrapper>
          {shouldShowResults && (
            <>
              <Hits hitComponent={Result} />
              <Stats />
            </>
          )}
        </StyledSearchWrapper>
      </InstantSearch>
    )
  }
}

export default Search
