import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Text, Section } from "@quarkly/widgets";
const defaultProps = {
	"id": "mission",
	"padding": "90px 0px 100px 0px",
	"sm-padding": "24px 0 24px 0",
	"quarkly-title": "About",
	"background": "--color-lightD1",
	"border-color": "--color-lightD2",
	"border-style": "solid",
	"border-width": "1px 0px 1px 0px",
	"box-sizing": "border-box",
	"lg-padding": "50px 30px 50px 30px",
	"justify-content": "center"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"text-align": "center",
			"font": "--base",
			"opacity": "0.6",
			"letter-spacing": "1px",
			"margin": "0px 0px 10px 0px",
			"color": "--dark",
			"lg-margin": "0px 0px 6px 0px",
			"lg-text-align": "center",
			"quarkly-title": "Title",
			"text-transform": "uppercase",
			"children": "Our Mission"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "normal 500 28px/1.2 'AvenirNextCyrRegular', sans-serif",
			"margin": "0px 0px 0px 0px",
			"letter-spacing": "1px",
			"color": "--dark",
			"text-align": "center",
			"width": "85%",
			"lg-font": "--lead",
			"sm-font": "--base",
			"children": "We empower creators to do their best work while maintaining our uncompromising values while we grow."
		}
	}
};

const Heading = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override
			slot="SectionContent"
			align-items="center"
			margin="0px 32px 0px 32px"
			width="100%"
			md-margin="0px 16px 0px 16px"
			min-width="auto"
		/>
		<Text {...override("text")} />
		<Text {...override("text1")} />
		{children}
	</Section>;
};

Object.assign(Heading, { ...Section,
	defaultProps,
	overrides
});
export default Heading;