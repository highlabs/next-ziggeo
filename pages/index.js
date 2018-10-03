import 'isomorphic-fetch'
import React from 'react'
import { connect } from 'react-redux'
import dynamic from 'next/dynamic'

const Ziggeo = dynamic(() => import('../components/Ziggeo'), {
  ssr: false
})

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
