import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Text, Link, Section } from "@quarkly/widgets";
const defaultProps = {
	"padding": "25px 0 75px 0",
	"sm-align-items": "center",
	"sm-justify-content": "center",
	"quarkly-title": "Hero",
	"lg-padding": "25px 0 25px 0",
	"sm-padding": "0px 0 25px 0",
	"justify-content": "center"
};
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"color": "--light",
			"font": "--headline1",
			"margin": "16px 0px 0px 0px",
			"sm-text-align": "center",
			"sm-width": "80%",
			"lg-text-align": "center",
			"lg-font": "--headline2",
			"children": "Make a Difference."
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"color": "--light",
			"margin": "10px 0px 35px 0px",
			"sm-text-align": "center",
			"sm-width": "80%",
			"opacity": "0.7",
			"md-text-align": "center",
			"children": "Supercharge your personal and professional success with a beautifully crafted website."
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "#mission",
			"text-decoration-line": "initial",
			"color": "--darkL2",
			"background": "--color-light",
			"padding": "12px 24px 12px 24px",
			"font": "--base",
			"letter-spacing": "0.5px",
			"hover-transform": "translateY(-4px)",
			"transition": "transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s",
			"children": "Learn More"
		}
	}
};

const Hero = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override
			slot="SectionContent"
			width="100%"
			background="linear-gradient(180deg,rgba(155, 108, 252, 0.15) 0%,transparent 100%) 0 0 no-repeat,#191C23 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-works-angle.svg?v=2020-11-06T16:36:54.345Z) center center/cover repeat scroll padding-box"
			height="620px"
			align-items="center"
			justify-content="center"
			sm-width="100%"
			lg-height="520px"
			md-height="420px"
			md-padding="0px 24px 0px 24px"
			md-margin="0px 16px 0px 16px"
			margin="0px 32px 0px 32px"
			min-width="auto"
		/>
		<Text {...override("text")} />
		<Text {...override("text1")} />
		<Link {...override("link")} />
		{children}
	</Section>;
};

Object.assign(Hero, { ...Section,
	defaultProps,
	overrides
});
export default Hero;