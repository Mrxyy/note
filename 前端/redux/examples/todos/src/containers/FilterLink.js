import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'


const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = {
  onClick: function(){
    return setVisibilityFilter("SHOW_ACTIVE")
  }
}

// const mapDispatchToProps =(dispatch, ownProps) => ({
//   onClick: () => {console.log(ownProps);dispatch(setVisibilityFilter(ownProps.filter))}
// })
 // ...mapDispatchToProps(dispatch,ownProps)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
