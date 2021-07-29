import React from "react";
import { useOverrides, Override, StackItem, Stack } from "@quarkly/components";
import { Text, Section } from "@quarkly/widgets";
const defaultProps = {
	"padding": "90px 0px 100px 0px",
	"sm-padding": "24px 0 24px 0",
	"quarkly-title": "FAQ",
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
			"font": "--base",
			"margin": "0px 0px 10px 0px",
			"letter-spacing": "1px",
			"color": "--dark",
			"opacity": "0.6",
			"text-align": "center",
			"text-transform": "uppercase",
			"lg-text-align": "center",
			"lg-margin": "0px 0px 6px 0px",
			"quarkly-title": "Title",
			"children": "We're here to help"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "--headline2",
			"margin": "0px 0px 64px 0px",
			"color": "--dark",
			"text-align": "center",
			"lg-text-align": "center",
			"lg-margin": "0px 0px 36px 0px",
			"sm-font": "--headline3",
			"md-font": "--headline3",
			"children": "FAQ"
		}
	},
	"stack": {
		"kind": "Stack",
		"props": {}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "25%",
			"display": "flex",
			"padding": "16px 16px 16px 16px",
			"margin": "0px 0px 0px 0px",
			"lg-width": "50%",
			"lg-align-items": "center",
			"lg-justify-content": "center",
			"md-width": "100%"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"lg-align-items": "center",
			"md-align-items": "flex-start"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"margin": "0px 0px 0px 0px",
			"color": "--dark",
			"text-align": "center",
			"md-text-align": "left",
			"children": "Have any questions?"
		}
	},
	"text3": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"color": "--darkL2",
			"opacity": "0.6",
			"lg-text-align": "center",
			"text-align": "center",
			"margin": "16px 0px 0px 0px",
			"md-text-align": "left",
			"sm-margin": "8px 0px 0px 0px",
			"children": "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger."
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "25%",
			"display": "flex",
			"padding": "16px 45px 16px 16px",
			"lg-width": "50%",
			"md-width": "100%"
		}
	},
	"stackItemOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"lg-align-items": "center",
			"md-align-items": "flex-start"
		}
	},
	"text4": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"margin": "0px 0px 0px 0px",
			"color": "--dark",
			"text-align": "center",
			"md-text-align": "left",
			"children": "Have any questions?"
		}
	},
	"text5": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"color": "--darkL2",
			"opacity": "0.6",
			"lg-text-align": "center",
			"text-align": "center",
			"margin": "16px 0px 0px 0px",
			"md-text-align": "left",
			"sm-margin": "8px 0px 0px 0px",
			"children": "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger."
		}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {
			"width": "25%",
			"display": "flex",
			"lg-width": "50%",
			"md-width": "100%"
		}
	},
	"stackItemOverride2": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"lg-width": "100%",
			"lg-align-items": "center",
			"md-align-items": "flex-start"
		}
	},
	"text6": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"margin": "0px 0px 0px 0px",
			"color": "--dark",
			"text-align": "center",
			"md-text-align": "left",
			"children": "Have any questions?"
		}
	},
	"text7": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"color": "--darkL2",
			"opacity": "0.6",
			"lg-text-align": "center",
			"text-align": "center",
			"margin": "16px 0px 0px 0px",
			"md-text-align": "left",
			"sm-margin": "8px 0px 0px 0px",
			"children": "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger."
		}
	},
	"stackItem3": {
		"kind": "StackItem",
		"props": {
			"width": "25%",
			"display": "flex",
			"lg-width": "50%",
			"md-width": "100%"
		}
	},
	"stackItemOverride3": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"lg-width": "100%",
			"lg-align-items": "center",
			"md-align-items": "flex-start"
		}
	},
	"text8": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"margin": "0px 0px 0px 0px",
			"color": "--dark",
			"text-align": "center",
			"md-text-align": "left",
			"children": "Have any questions?"
		}
	},
	"text9": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"color": "--darkL2",
			"opacity": "0.6",
			"lg-text-align": "center",
			"text-align": "center",
			"margin": "16px 0px 0px 0px",
			"md-text-align": "left",
			"sm-margin": "8px 0px 0px 0px",
			"children": "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger."
		}
	}
};

const Faq = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override
			slot="SectionContent"
			align-items="center"
			margin="0px 48px 0px 48px"
			width="100%"
			md-margin="0px 16px 0px 16px"
			min-width="auto"
		/>
		<Text {...override("text")} />
		<Text {...override("text1")} />
		<Stack {...override("stack")}>
			{"    "}
			<StackItem {...override("stackItem")}>
				<Override {...override("stackItemOverride")} />
				{"        "}
				<Text {...override("text2")} />
				<Text {...override("text3")} />
				{"    "}
			</StackItem>
			<StackItem {...override("stackItem1")}>
				<Override {...override("stackItemOverride1")} />
				{"        "}
				<Text {...override("text4")} />
				<Text {...override("text5")} />
				{"    "}
			</StackItem>
			<StackItem {...override("stackItem2")}>
				<Override {...override("stackItemOverride2")} />
				{"        "}
				<Text {...override("text6")} />
				<Text {...override("text7")} />
				{"    "}
			</StackItem>
			<StackItem {...override("stackItem3")}>
				<Override {...override("stackItemOverride3")} />
				{"        "}
				<Text {...override("text8")} />
				<Text {...override("text9")} />
				{"    "}
			</StackItem>
			{"    "}
		</Stack>
		{children}
	</Section>;
};

Object.assign(Faq, { ...Section,
	defaultProps,
	overrides
});
export default Faq;