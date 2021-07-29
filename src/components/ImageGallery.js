import React from "react";
import { useOverrides, Override, StackItem, Stack } from "@quarkly/components";
import { Text, Box, Link, Section } from "@quarkly/widgets";
const defaultProps = {
	"padding": "100px 0px 100px 0px",
	"sm-padding": "24px 0 24px 0",
	"quarkly-title": "Works",
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
			"lg-margin": "0px 0px 6px 0px",
			"lg-text-align": "center",
			"quarkly-title": "Title",
			"children": "what we create"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"font": "--headline2",
			"margin": "0px 0px 48px 0px",
			"color": "--dark",
			"text-align": "center",
			"lg-text-align": "center",
			"md-margin": "0px 0px 36px 0px",
			"sm-font": "--headline3",
			"md-font": "--headline3",
			"children": "Our Works"
		}
	},
	"stack": {
		"kind": "Stack",
		"props": {
			"width": "100%"
		}
	},
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "33.33%",
			"display": "flex",
			"lg-width": "50%",
			"xl-width": "50%",
			"md-width": "100%",
			"sm-padding": "16px 0px 8px 0px"
		}
	},
	"box": {
		"kind": "Box",
		"props": {
			"width": "100%",
			"background": "--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-first.svg?v=2020-11-06T16:37:39.391Z) center center/100% no-repeat",
			"padding": "0px 0px 60% 0px",
			"height": "0px",
			"hover-background": "--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-first.svg?v=2020-11-06T16:37:39.391Z) center center/110% no-repeat",
			"transition": "background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "33.33%",
			"display": "flex",
			"lg-width": "50%",
			"xl-width": "50%",
			"md-width": "100%",
			"sm-padding": "8px 0px 8px 0px"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"width": "100%",
			"background": "--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-second.svg?v=2020-11-06T17:14:59.136Z) center center/100% no-repeat",
			"padding": "0px 0px 60% 0px",
			"height": "0px",
			"hover-background": "--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-second.svg?v=2020-11-06T17:14:59.136Z) center center/110% no-repeat",
			"transition": "background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
		}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {
			"width": "33.33%",
			"display": "flex",
			"lg-width": "50%",
			"xl-width": "50%",
			"md-width": "100%",
			"sm-padding": "8px 0px 8px 0px"
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"width": "100%",
			"background": "--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-third.svg?v=2020-11-06T17:15:50.700Z) center center/100% no-repeat",
			"padding": "0px 0px 60% 0px",
			"height": "0px",
			"hover-background": "--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-third.svg?v=2020-11-06T17:15:50.700Z) center center/110% no-repeat",
			"transition": "background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
		}
	},
	"stackItem3": {
		"kind": "StackItem",
		"props": {
			"width": "33.33%",
			"display": "flex",
			"lg-width": "50%",
			"xl-width": "50%",
			"md-width": "100%",
			"sm-padding": "8px 0px 8px 0px"
		}
	},
	"box3": {
		"kind": "Box",
		"props": {
			"width": "100%",
			"background": "--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-fourth.svg?v=2020-11-06T17:17:18.847Z) center center/100% no-repeat",
			"padding": "0px 0px 60% 0px",
			"height": "0px",
			"hover-background": "--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-fourth.svg?v=2020-11-06T17:17:18.847Z) center center/110% no-repeat",
			"transition": "background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
		}
	},
	"stackItem4": {
		"kind": "StackItem",
		"props": {
			"width": "33.33%",
			"display": "flex",
			"lg-width": "50%",
			"xl-width": "50%",
			"md-width": "100%",
			"sm-padding": "8px 0px 8px 0px"
		}
	},
	"box4": {
		"kind": "Box",
		"props": {
			"width": "100%",
			"background": "--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-fifth.svg?v=2020-11-06T17:18:24.897Z) center center/100% no-repeat",
			"padding": "0px 0px 60% 0px",
			"height": "0px",
			"hover-background": "--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-fifth.svg?v=2020-11-06T17:18:24.897Z) center center/110% no-repeat",
			"transition": "background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
		}
	},
	"stackItem5": {
		"kind": "StackItem",
		"props": {
			"width": "33.33%",
			"display": "flex",
			"lg-width": "50%",
			"xl-width": "50%",
			"md-width": "100%",
			"sm-padding": "8px 0px 16px 0px"
		}
	},
	"box5": {
		"kind": "Box",
		"props": {
			"width": "100%",
			"background": "--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-sixth.svg?v=2020-11-06T17:19:03.657Z) center center/100% no-repeat",
			"padding": "0px 0px 60% 0px",
			"height": "0px",
			"hover-background": "--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-sixth.svg?v=2020-11-06T17:19:03.657Z) center center/110% no-repeat",
			"transition": "background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "/contact",
			"text-decoration-line": "initial",
			"color": "--light",
			"padding": "8px 18px 8px 18px",
			"font": "--base",
			"letter-spacing": "0.5px",
			"transition": "transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s",
			"text-align": "center",
			"margin": "48px 0px 0px 0px",
			"background": "--color-primary",
			"hover-transform": "translateY(-4px)",
			"lg-margin": "24px 0px 0px 0px",
			"md-margin": "36px 0px 0px 0px",
			"children": "View More"
		}
	}
};

const ImageGallery = props => {
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
		<Stack {...override("stack")}>
			{"    "}
			<StackItem {...override("stackItem")}>
				<Box {...override("box")} />
				{"    "}
			</StackItem>
			<StackItem {...override("stackItem1")}>
				<Box {...override("box1")} />
			</StackItem>
			<StackItem {...override("stackItem2")}>
				<Box {...override("box2")} />
				{"    "}
			</StackItem>
			<StackItem {...override("stackItem3")}>
				<Box {...override("box3")} />
				{"    "}
			</StackItem>
			<StackItem {...override("stackItem4")}>
				<Box {...override("box4")} />
			</StackItem>
			<StackItem {...override("stackItem5")}>
				<Box {...override("box5")} />
				{"    "}
			</StackItem>
			{"    "}
		</Stack>
		<Link {...override("link")} />
		{children}
	</Section>;
};

Object.assign(ImageGallery, { ...Section,
	defaultProps,
	overrides
});
export default ImageGallery;