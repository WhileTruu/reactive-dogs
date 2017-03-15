import React, { PropTypes } from 'react'
import { withRouter } from 'react-router-dom'

const ListItem = withRouter(({ history, item, index }) => ( // eslint-disable-line
  <div // eslint-disable-line
    className="card mb-3"
    onClick={() => history.push(`/detail/${index}`)}
    style={{ cursor: 'pointer' }}
  >
    <div className="card-block">
      <h4 className="card-title">{item.name}</h4>
      {history.location.pathname === `/detail/${index}` ? <h6 className="card-subtitle mb-2 text-muted">{item.email}</h6> : '' }
    </div>
  </div>
))

const List = ({ listItems }) => (
  <div className="mt-5">
    {listItems.length ? listItems
      .map((item, index) => {
        const yolo = index * 13
        return (<ListItem key={`${item.name}${yolo}`} index={index} item={item} />)
      }) : '' }
  </div>
)

List.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default List
