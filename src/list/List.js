import React, { PropTypes } from 'react'

const List = ({ listItems }) => (
  <div className="mt-5">
    {listItems.length ? listItems
      .map(listItem => (
        <div className="card mb-3" key={listItem.name}>
          <div className="card-block">
            <h4 className="card-title">{listItem.name}</h4>
            <h6 className="card-subtitle mb-2 text-muted">{listItem.email}</h6>
          </div>
        </div>
      )) : '' }
  </div>
)

List.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default List
