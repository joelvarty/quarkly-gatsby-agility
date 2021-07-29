import React from "react";
import { useOverrides, Override, StackItem, Stack } from "@quarkly/components";
import { Text, Button, Section } from "@quarkly/widgets";
const defaultProps = {
	"quarkly-title": "USP",
	"padding": "75px 0 50px 0",
	"lg-padding": "25px 0 25px 0",
	"lg-height": "auto",
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
			"width": "100%",
			"display": "flex"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"align-items": "center",
			"justify-content": "center",
			"height": "480px",
			"background": "linear-gradient(180deg,rgba(24, 29, 34, 0.5) 0%,transparent 100%) 0 0 no-repeat,--color-lightD1 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-fireworks.svg?v=2020-11-06T17:22:27.801Z) center center/cover no-repeat",
			"flex-direction": "column",
			"md-height": "360px",
			"padding": "36px 24px 36px 24px",
			"sm-height": "280px",
			"lg-height": "420px"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"margin": "10px 0px 15px 0px",
			"font": "--headline2",
			"text-align": "center",
			"quarkly-title": "Title",
			"color": "--light",
			"md-font": "--headline3",
			"children": "Make It Work."
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 28px 0px",
			"font": "--lead",
			"opacity": "0.6",
			"text-align": "center",
			"quarkly-title": "Description",
			"color": "--light",
			"max-width": "720px",
			"children": "Good design adds value faster than it adds cost."
		}
	},
	"button": {
		"kind": "Button",
		"props": {
			"padding": "8px 36px 8px 36px",
			"font": "--lead",
			"letter-spacing": "0.5px",
			"transition": "opacity .15s ease 0s",
			"position": "relative",
			"z-index": "5",
			"background": "--color-light",
			"opacity": "1",
			"hover-opacity": ".85",
			"focus-box-shadow": "none",
			"hover-box-shadow": "none",
			"active-box-shadow": "none",
			"margin": "10px auto 0px auto",
			"width": "fit-content",
			"md-font": "--base",
			"color": "--darkL2",
			"children": "Start Now"
		}
	}
};

const HeroCta = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override
			slot="SectionContent"
			width="100%"
			margin="0px 32px 0px 32px"
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
				<Button {...override("button")} />
				{"    "}
			</StackItem>
			{"    "}
		</Stack>
		{children}
	</Section>;
};

Object.assign(HeroCta, { ...Section,
	defaultProps,
	overrides
});
export default HeroCta;