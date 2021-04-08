import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box } from "@quarkly/widgets";
const defaultProps = {
	"width": "400px",
	"height": "400px",
	"background": "#bd3535"
};
const overrides = {};

const Page322 = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		{children}
	</Box>;
};

Object.assign(Page322, { ...Box,
	defaultProps,
	overrides
});
export default Page322;