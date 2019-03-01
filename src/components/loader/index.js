import { connect } from 'react-redux'
import imagePlaceholder from './Component'

const mapStateToProps = state=> ({
    news: state.newsReducer
})

const mapDispatchToProps = dispatch=> ({
    dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(imagePlaceholder)