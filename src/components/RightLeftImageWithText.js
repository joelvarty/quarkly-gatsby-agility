import React from "react";
import { useOverrides, Override, StackItem, Stack } from "@quarkly/components";
import { Text, Link, Box, Section } from "@quarkly/widgets";
const defaultProps = {
	"padding": "70px 0 70px 0",
	"quarkly-title": "Info",
	"lg-padding": "50px 0px 50px 0px",
	"md-padding": "25px 0px 25px 0px",
	"justify-content": "center"
};
const overrides = {
	"stack": {
		"kind": "Stack",
		"props": {}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "40%",
			"display": "flex",
			"lg-width": "100%",
			"lg-order": "2",
			"lg-margin": "0px 0px 0px 0px"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"justify-content": "flex-start",
			"lg-align-items": "flex-start",
			"align-items": "flex-start",
			"padding": "0px 30px 0px 0px",
			"lg-padding": "0px 0px 0px 0px"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"margin": "0px 0px 10px 0px",
			"letter-spacing": "1px",
			"color": "--dark",
			"opacity": "0.6",
			"lg-text-align": "center",
			"lg-margin": "0px 0px 6px 0px",
			"quarkly-title": "Title",
			"text-transform": "uppercase",
			"children": "Team"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "--headline2",
			"margin": "0px 0px 28px 0px",
			"color": "--dark",
			"lg-text-align": "center",
			"lg-margin": "0px 0px 18px 0px",
			"sm-font": "--headline3",
			"md-font": "--headline3",
			"children": "Who We Are"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"margin": "0px 0px 20px 0px",
			"color": "--darkL2",
			"opacity": "0.6",
			"lg-text-align": "left",
			"lg-margin": "0px 0px 18px 0px",
			"sm-font": "--base",
			"children": "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "/about",
			"text-decoration-line": "initial",
			"color": "--light",
			"padding": "8px 18px 8px 18px",
			"font": "--base",
			"letter-spacing": "0.5px",
			"text-align": "center",
			"margin": "9px 0px 0px 0px",
			"background": "--color-primary",
			"hover-transform": "translateY(-4px)",
			"transition": "transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s",
			"children": "Read More"
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "60%",
			"display": "flex",
			"padding": "0px 0px 0px 0px",
			"miniPk-width": "59%",
			"lg-width": "100%",
			"lg-order": "1",
			"lg-margin": "0px 0px 10px 0px",
			"quarkly-title": "Illustration"
		}
	},
	"box": {
		"kind": "Box",
		"props": {
			"width": "100%",
			"background": "--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-first.svg?v=2020-11-06T16:37:39.391Z) center center/100% no-repeat",
			"margin": "0px 0px 0px 0px",
			"padding": "0px 0px 60% 0px",
			"height": "0px",
			"hover-background": "--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-first.svg?v=2020-11-06T16:37:39.391Z) center center/110% no-repeat",
			"transition": "background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
		}
	}
};

const RightLeftImageWithText = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override
			slot="SectionContent"
			margin="0px 32px 0px 32px"
			width="100%"
			md-margin="0px 16px 0px 16px"
			min-width="auto"
		/>
		<Stack {...override("stack")}>
			{"    "}
			<StackItem {...override("stackItem")}>
				<Override {...override("stackItemOverride")} />
				{"        "}
				<Text {...override("text")} />
				<Text {...override("text1")} />
				<Text {...override("text2")} />
				<Link {...override("link")} />
				{"    "}
			</StackItem>
			{"    "}
			<StackItem {...override("stackItem1")}>
				{"        "}
				<Box {...override("box")} />
				{"    "}
			</StackItem>
		</Stack>
		{children}
	</Section>;
};

Object.assign(RightLeftImageWithText, { ...Section,
	defaultProps,
	overrides
});
export default RightLeftImageWithText;