import React from "react";
import { useOverrides, Override, StackItem, Stack } from "@quarkly/components";
import { Text, Icon, Section } from "@quarkly/widgets";
import { DiBootstrap, DiBingSmall, DiCssTricks, DiEnvato, DiGithubBadge } from "react-icons/di";
const defaultProps = {
	"padding": "80px 0 80px 0",
	"quarkly-title": "Customers",
	"lg-padding": "50px 0 50px 0",
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
			"children": "They trust us"
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
			"sm-margin": "0px 0px 48px 0px",
			"sm-font": "--headline3",
			"md-font": "--headline3",
			"children": "Our Customers"
		}
	},
	"stack": {
		"kind": "Stack",
		"props": {
			"width": "100%",
			"lg-justify-content": "center",
			"sm-flex-direction": "column"
		}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "20%",
			"display": "flex",
			"padding": "16px 16px 16px 16px",
			"margin": "0px 0px 0px 0px",
			"lg-width": "33.33%",
			"lg-align-items": "center",
			"lg-justify-content": "center",
			"sm-width": "100%"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"lg-align-items": "center",
			"sm-flex-direction": "row",
			"sm-align-items": "center",
			"sm-justify-content": "flex-start"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "di",
			"icon": DiBootstrap,
			"margin": "0px auto 0px auto",
			"size": "84px",
			"lg-font": "64px sans-serif",
			"sm-margin": "0px 13px 0px 0px",
			"sm-font": "48px sans-serif"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"color": "--darkL2",
			"opacity": "0.6",
			"lg-text-align": "center",
			"text-align": "center",
			"md-margin": "16px 0px 0px 0px",
			"sm-margin": "0px 0px 0px 0px",
			"children": "Company Name"
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "20%",
			"display": "flex",
			"padding": "16px 45px 16px 16px",
			"lg-width": "33.33%",
			"sm-width": "100%"
		}
	},
	"stackItemOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"lg-align-items": "center",
			"sm-flex-direction": "row",
			"sm-align-items": "center",
			"sm-justify-content": "flex-start"
		}
	},
	"icon1": {
		"kind": "Icon",
		"props": {
			"category": "di",
			"icon": DiBingSmall,
			"margin": "0px auto 0px auto",
			"size": "84px",
			"lg-font": "64px sans-serif",
			"sm-margin": "0px 13px 0px 0px",
			"sm-font": "48px sans-serif"
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
			"md-margin": "16px 0px 0px 0px",
			"sm-margin": "0px 0px 0px 0px",
			"children": "Company Name"
		}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {
			"width": "20%",
			"display": "flex",
			"lg-width": "33.33%",
			"sm-width": "100%"
		}
	},
	"stackItemOverride2": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"lg-width": "100%",
			"lg-align-items": "center",
			"sm-flex-direction": "row",
			"sm-align-items": "center",
			"sm-justify-content": "flex-start"
		}
	},
	"icon2": {
		"kind": "Icon",
		"props": {
			"category": "di",
			"icon": DiCssTricks,
			"margin": "0px auto 0px auto",
			"size": "84px",
			"lg-font": "64px sans-serif",
			"sm-margin": "0px 13px 0px 0px",
			"sm-font": "48px sans-serif"
		}
	},
	"text4": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"color": "--darkL2",
			"opacity": "0.6",
			"lg-text-align": "center",
			"text-align": "center",
			"md-margin": "16px 0px 0px 0px",
			"sm-margin": "0px 0px 0px 0px",
			"children": "Company Name"
		}
	},
	"stackItem3": {
		"kind": "StackItem",
		"props": {
			"width": "20%",
			"display": "flex",
			"lg-width": "33.33%",
			"sm-width": "100%"
		}
	},
	"stackItemOverride3": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"lg-width": "100%",
			"lg-align-items": "center",
			"sm-flex-direction": "row",
			"sm-align-items": "center",
			"sm-justify-content": "flex-start"
		}
	},
	"icon3": {
		"kind": "Icon",
		"props": {
			"category": "di",
			"icon": DiEnvato,
			"margin": "0px auto 0px auto",
			"size": "84px",
			"lg-font": "64px sans-serif",
			"sm-margin": "0px 13px 0px 0px",
			"sm-font": "48px sans-serif"
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
			"md-margin": "16px 0px 0px 0px",
			"sm-margin": "0px 0px 0px 0px",
			"children": "Company Name"
		}
	},
	"stackItem4": {
		"kind": "StackItem",
		"props": {
			"width": "20%",
			"display": "flex",
			"lg-width": "33.33%",
			"sm-width": "100%"
		}
	},
	"stackItemOverride4": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"lg-width": "100%",
			"lg-align-items": "center",
			"sm-flex-direction": "row",
			"sm-align-items": "center",
			"sm-justify-content": "flex-start"
		}
	},
	"icon4": {
		"kind": "Icon",
		"props": {
			"category": "di",
			"icon": DiGithubBadge,
			"margin": "0px auto 0px auto",
			"size": "84px",
			"lg-font": "64px sans-serif",
			"sm-margin": "0px 13px 0px 0px",
			"sm-font": "48px sans-serif"
		}
	},
	"text6": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"color": "--darkL2",
			"opacity": "0.6",
			"lg-text-align": "center",
			"text-align": "center",
			"md-margin": "16px 0px 0px 0px",
			"sm-margin": "0px 0px 0px 0px",
			"children": "Company Name"
		}
	}
};

const Customers = props => {
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
				{"        "}
				<Icon {...override("icon")} />
				<Text {...override("text2")} />
				{"    "}
			</StackItem>
			<StackItem {...override("stackItem1")}>
				<Override {...override("stackItemOverride1")} />
				{"        "}
				<Icon {...override("icon1")} />
				<Text {...override("text3")} />
				{"    "}
			</StackItem>
			<StackItem {...override("stackItem2")}>
				<Override {...override("stackItemOverride2")} />
				{"        "}
				<Icon {...override("icon2")} />
				<Text {...override("text4")} />
				{"    "}
			</StackItem>
			<StackItem {...override("stackItem3")}>
				<Override {...override("stackItemOverride3")} />
				{"        "}
				<Icon {...override("icon3")} />
				<Text {...override("text5")} />
				{"    "}
			</StackItem>
			<StackItem {...override("stackItem4")}>
				<Override {...override("stackItemOverride4")} />
				{"        "}
				<Icon {...override("icon4")} />
				<Text {...override("text6")} />
				{"    "}
			</StackItem>
			{"    "}
		</Stack>
		{children}
	</Section>;
};

Object.assign(Customers, { ...Section,
	defaultProps,
	overrides
});
export default Customers;