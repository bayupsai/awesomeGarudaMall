import React, { PureComponent } from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'

import { connect } from 'react-redux'
import { GET_NEWS } from './action/action'

class Home extends PureComponent {

    componentDidMount() {
        this.props.dispatch(GET_NEWS())
    }

    render() {
        alert(JSON.stringify(this.props.news.results))
        return(
            <View>
                <Text>Hello Worlds</Text>
                {
                    this.props.news.isLoading
                    ? <ActivityIndicator />
                    :
                    <FlatList
                        data={this.props.news.results}
                        renderItem={ ({item, key})=> (
                            <View key={key}>
                                <Text>{item.username}</Text>
                            </View>
                        )}
                        keyExtractor={ (item, index)=> index.toString()}
                    />
                }
            </View>
        )
    }
}

const mapStateToProps = (state)=> ({
    news: state.homeReducer
})

export default connect(mapStateToProps)(Home)