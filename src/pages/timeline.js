import React from 'react'
import { Link } from 'gatsby'
import Timeline from 'react-image-timeline';
import Layout from '../components/layout'
require('react-image-timeline/dist/timeline.scss'); // .scss also available

const events = [{
  date: new Date(2013, 9, 27),
  text: "Sed leo elit, pellentesque sit amet congue quis, ornare nec lorem.",
  title: "Cairo, Egypt",
  buttonText: 'Click Me',
  imageUrl: "http://github.com/aaron9000/react-image-timeline/blob/master/src/assets/cairo.jpg?raw=true",
  onClick: () => {
    console.log('hello');
  }
}]

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    {/*<Timeline events={events} />*/}
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
