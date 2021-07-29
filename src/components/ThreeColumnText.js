import React from "react";
import { useOverrides, Override, StackItem, Stack } from "@quarkly/components";
import { Text, Section } from "@quarkly/widgets";
const defaultProps = {
	"box-sizing": "border-box",
	"padding": "80px 0px 80px 0px",
	"quarkly-title": "About",
	"background": "--color-lightD1",
	"border-width": "1px 0px 1px 0px",
	"border-style": "solid",
	"border-color": "--color-lightD2",
	"lg-padding": "50px 0px 50px 0px",
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
			"width": "33.33%",
			"display": "flex",
			"lg-width": "100%"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"font": "--headline3",
			"margin": "0px 0px 10px 0px",
			"display": "inline-block",
			"color": "--darkL2",
			"lg-margin": "0px 0px 0px 0px",
			"md-font": "--lead",
			"children": <>
				Hi! I'm a paragraph.{" "}
			</>
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "33.33%",
			"display": "flex",
			"lg-width": "100%"
		}
	},
	"stackItemOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"align-items": "center"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"margin": "0px 0px 0px 0px",
			"display": "inline-block",
			"opacity": "0.6",
			"color": "--darkL2",
			"lg-text-align": "left",
			"text-align": "left",
			"children": "Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer."
		}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {
			"width": "33.33%",
			"display": "flex",
			"lg-width": "100%"
		}
	},
	"stackItemOverride2": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"margin": "0px 0px 0px 0px",
			"display": "inline-block",
			"opacity": "0.6",
			"color": "--darkL2",
			"lg-text-align": "left",
			"text-align": "left",
			"children": "Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are."
		}
	}
};

const ThreeColumnText = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override
			slot="SectionContent"
			align-items="center"
			width="100%"
			margin="0px 32px 0px 32px"
			md-margin="0px 16px 0px 16px"
			min-width="auto"
		/>
		<Stack {...override("stack")}>
			{"    "}
			<StackItem {...override("stackItem")}>
				<Override {...override("stackItemOverride")} />
				<Text {...override("text")} />
				{"    "}
			</StackItem>
			<StackItem {...override("stackItem1")}>
				<Override {...override("stackItemOverride1")} />
				<Text {...override("text1")} />
				{"    "}
			</StackItem>
			<StackItem {...override("stackItem2")}>
				<Override {...override("stackItemOverride2")} />
				<Text {...override("text2")} />
				{"    "}
			</StackItem>
			{"    "}
		</Stack>
		{children}
	</Section>;
};

Object.assign(ThreeColumnText, { ...Section,
	defaultProps,
	overrides
});
export default ThreeColumnText;