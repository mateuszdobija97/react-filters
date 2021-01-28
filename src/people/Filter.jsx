  
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Filter = ({filterQuery, changeSearchQuery}) => {
  const [query, setQuery] = useState('');

  const handleOnChange = e => setQuery(e.target.value);

    return (
      <div className='App__search-bar'>
        <input className='App__input' onChange={handleOnChange} value={query} type="text" placeholder="Search..." />
      </div>
    );
}

const mapStateToProps = (state) => ({
  filterQuery: state.people.filterQuery
});

const mapDispatchToProps = dispatch => bindActionCreators({
  //changeSearchQuery: dispatch(changeSearchQuery)
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Filter);