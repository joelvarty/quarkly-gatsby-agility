import React from "react";
import { useOverrides, Override, StackItem, Stack } from "@quarkly/components";
import { Text, Icon, Section } from "@quarkly/widgets";
import { FaRegGem, FaRegLifeRing, FaRegCalendarCheck, FaRegStar } from "react-icons/fa";
import { MdFace } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";
const defaultProps = {
	"box-sizing": "border-box",
	"padding": "100px 0px 100px 0px",
	"quarkly-title": "Our Services",
	"xl-padding": "100px 0px 100px 0px",
	"lg-padding": "50px 0px 50px 0px",
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
			"lg-margin": "0px 0px 6px 0px",
			"lg-text-align": "center",
			"quarkly-title": "Title",
			"children": "WHAT WE DO BEST"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "--headline2",
			"margin": "0px 0px 72px 0px",
			"color": "--dark",
			"text-align": "center",
			"lg-text-align": "center",
			"lg-margin": "0px 0px 48px 0px",
			"md-font": "--headline3",
			"sm-margin": "0px 0px 36px 0px",
			"children": "Our Services"
		}
	},
	"stack": {
		"kind": "Stack",
		"props": {
			"width": "100%",
			"sm-margin": "-16px 0px -16px 0px"
		}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "33.33%",
			"display": "flex",
			"lg-width": "50%",
			"margin": "0px 0px 24px 0px",
			"md-margin": "0px 0px 0px 0px",
			"md-width": "100%"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"align-items": "center"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaRegGem,
			"size": "82px",
			"margin": "0px 0px 19px 0px",
			"font": "36px sans-serif",
			"color": "--primary"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"margin": "0px 0px 10px 0px",
			"display": "inline-block",
			"color": "--darkL2",
			"children": "High Quality"
		}
	},
	"text3": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"margin": "0px 0px 0px 0px",
			"display": "inline-block",
			"opacity": "0.6",
			"color": "--darkL2",
			"lg-text-align": "center",
			"text-align": "center",
			"children": "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger."
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "33.33%",
			"display": "flex",
			"lg-width": "50%",
			"margin": "0px 0px 24px 0px",
			"md-margin": "0px 0px 0px 0px",
			"md-width": "100%"
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
	"icon1": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaRegLifeRing,
			"size": "82px",
			"margin": "0px 0px 19px 0px",
			"font": "36px sans-serif",
			"color": "--primary"
		}
	},
	"text4": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"margin": "0px 0px 10px 0px",
			"display": "inline-block",
			"color": "--darkL2",
			"children": "Best Support"
		}
	},
	"text5": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"margin": "0px 0px 0px 0px",
			"display": "inline-block",
			"opacity": "0.6",
			"color": "--darkL2",
			"lg-text-align": "center",
			"text-align": "center",
			"children": "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger."
		}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {
			"width": "33.33%",
			"display": "flex",
			"lg-width": "50%",
			"margin": "0px 0px 24px 0px",
			"md-margin": "0px 0px 0px 0px",
			"md-width": "100%"
		}
	},
	"stackItemOverride2": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"align-items": "center"
		}
	},
	"icon2": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdFace,
			"size": "82px",
			"margin": "0px 0px 19px 0px",
			"font": "36px sans-serif",
			"color": "--primary"
		}
	},
	"text6": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"margin": "0px 0px 10px 0px",
			"display": "inline-block",
			"color": "--darkL2",
			"children": "Personal Approach"
		}
	},
	"text7": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"margin": "0px 0px 0px 0px",
			"display": "inline-block",
			"opacity": "0.6",
			"color": "--darkL2",
			"lg-text-align": "center",
			"text-align": "center",
			"children": "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger."
		}
	},
	"stackItem3": {
		"kind": "StackItem",
		"props": {
			"width": "33.33%",
			"display": "flex",
			"lg-width": "50%",
			"margin": "0px 0px 24px 0px",
			"md-margin": "0px 0px 0px 0px",
			"md-width": "100%"
		}
	},
	"stackItemOverride3": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"align-items": "center"
		}
	},
	"icon3": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaRegCalendarCheck,
			"size": "82px",
			"margin": "0px 0px 19px 0px",
			"font": "36px sans-serif",
			"color": "--primary"
		}
	},
	"text8": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"margin": "0px 0px 10px 0px",
			"display": "inline-block",
			"color": "--darkL2",
			"children": "Flexible Schedule"
		}
	},
	"text9": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"margin": "0px 0px 0px 0px",
			"display": "inline-block",
			"opacity": "0.6",
			"color": "--darkL2",
			"lg-text-align": "center",
			"text-align": "center",
			"children": "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger."
		}
	},
	"stackItem4": {
		"kind": "StackItem",
		"props": {
			"width": "33.33%",
			"display": "flex",
			"lg-width": "50%",
			"margin": "0px 0px 24px 0px",
			"md-width": "100%",
			"md-margin": "0px 0px 0px 0px"
		}
	},
	"stackItemOverride4": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"align-items": "center"
		}
	},
	"icon4": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaRegStar,
			"size": "82px",
			"margin": "0px 0px 19px 0px",
			"font": "36px sans-serif",
			"color": "--primary"
		}
	},
	"text10": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"margin": "0px 0px 10px 0px",
			"display": "inline-block",
			"color": "--darkL2",
			"children": "Extensive Experience"
		}
	},
	"text11": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"margin": "0px 0px 0px 0px",
			"display": "inline-block",
			"opacity": "0.6",
			"color": "--darkL2",
			"lg-text-align": "center",
			"text-align": "center",
			"children": "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger."
		}
	},
	"stackItem5": {
		"kind": "StackItem",
		"props": {
			"width": "33.33%",
			"display": "flex",
			"lg-width": "50%",
			"margin": "0px 0px 24px 0px",
			"md-width": "100%",
			"md-margin": "0px 0px 0px 0px"
		}
	},
	"stackItemOverride5": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"align-items": "center"
		}
	},
	"icon5": {
		"kind": "Icon",
		"props": {
			"category": "ai",
			"icon": AiOutlineThunderbolt,
			"size": "82px",
			"margin": "0px 0px 19px 0px",
			"font": "36px sans-serif",
			"color": "--primary"
		}
	},
	"text12": {
		"kind": "Text",
		"props": {
			"font": "--lead",
			"margin": "0px 0px 10px 0px",
			"display": "inline-block",
			"color": "--darkL2",
			"children": "Better Efficiency"
		}
	},
	"text13": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"margin": "0px 0px 0px 0px",
			"display": "inline-block",
			"opacity": "0.6",
			"color": "--darkL2",
			"lg-text-align": "center",
			"text-align": "center",
			"children": "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger."
		}
	}
};

const ServiceListing = props => {
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
		<Text {...override("text")} />
		<Text {...override("text1")} />
		<Stack {...override("stack")}>
			{"    "}
			<StackItem {...override("stackItem")}>
				<Override {...override("stackItemOverride")} />
				<Icon {...override("icon")} />
				<Text {...override("text2")} />
				<Text {...override("text3")} />
				{"    "}
			</StackItem>
			<StackItem {...override("stackItem1")}>
				<Override {...override("stackItemOverride1")} />
				<Icon {...override("icon1")} />
				<Text {...override("text4")} />
				<Text {...override("text5")} />
				{"    "}
			</StackItem>
			<StackItem {...override("stackItem2")}>
				<Override {...override("stackItemOverride2")} />
				<Icon {...override("icon2")} />
				<Text {...override("text6")} />
				<Text {...override("text7")} />
				{"    "}
			</StackItem>
			<StackItem {...override("stackItem3")}>
				<Override {...override("stackItemOverride3")} />
				<Icon {...override("icon3")} />
				<Text {...override("text8")} />
				<Text {...override("text9")} />
				{"    "}
			</StackItem>
			<StackItem {...override("stackItem4")}>
				<Override {...override("stackItemOverride4")} />
				<Icon {...override("icon4")} />
				<Text {...override("text10")} />
				<Text {...override("text11")} />
				{"    "}
			</StackItem>
			<StackItem {...override("stackItem5")}>
				<Override {...override("stackItemOverride5")} />
				<Icon {...override("icon5")} />
				<Text {...override("text12")} />
				<Text {...override("text13")} />
				{"    "}
			</StackItem>
			{"    "}
		</Stack>
		{children}
	</Section>;
};

Object.assign(ServiceListing, { ...Section,
	defaultProps,
	overrides
});
export default ServiceListing;