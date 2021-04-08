import React from 'react';
import atomize from "@quarkly/atomize";

const Components = props => <div {...props}>
	Say hello Components
</div>;

export default atomize(Components)({
	name: "Components",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here description for your component
		en: "Components — my awesome component"
	},
	propInfo: {
		// paste here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});