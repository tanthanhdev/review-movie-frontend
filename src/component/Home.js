import React, { Component } from 'react'
import Banner from './Banner'
import Container from './Container'
import Content from './Content'
import ContentFooter from './ContentFooter'
import ContentList from './ContentList'
import Nav from './Nav'

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Banner/>
                <Nav></Nav>
                <Container/>
                <Content/>
                <ContentList/>
                <ContentFooter/>
            </React.Fragment>
        )
    }
}
