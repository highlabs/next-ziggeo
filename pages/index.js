import 'isomorphic-fetch'
import React from 'react'
import { connect } from 'react-redux'

import Ziggeo from '../components/Ziggeo';

class Index extends React.Component {

	render() {
		const { stars } = this.props
		return (
			<div>
				<Ziggeo/>
			</div>
		)
	}
}

export default connect()(Index)
