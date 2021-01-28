import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const People =  ({ people }) => {
  const renderedPeople = people.map(person => (
    <div className="App__box" key={person.id}>{person.name}</div>
  ))

    return (
      <div className="App__box-wrapper">
        {renderedPeople}
      </div>
    );
}

const mapStateToProps = store => ({
  people: store.people.people
});

const mapDispatchToProps = dispatch => bindActionCreators({
  // ...
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(People);