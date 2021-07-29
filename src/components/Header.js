import React from "react";
import { useOverrides, Override, StackItem, Stack } from "@quarkly/components";
import { Image, Link, Button, Section } from "@quarkly/widgets";
import BurgerMenu from "./BurgerMenu";
import { MdMenu } from "react-icons/md";
const defaultProps = {
	"margin": "0 0 0 0",
	"padding": "16px 0 16px 0",
	"box-sizing": "border-box",
	"quarkly-title": "Header",
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
			"display": "flex",
			"quarkly-title": "Logo",
			"md-width": "75%",
			"width": "25%"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"align-items": "center"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "/",
			"position": "relative",
			"transition": "opacity 200ms ease",
			"quarkly-title": "Link"
		}
	},
	"image": {
		"kind": "Image",
		"props": {
			"src": "https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-logo.svg?v=2020-11-06T17:26:21.226Z",
			"width": "120px",
			"z-index": "3"
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "50%",
			"display": "block",
			"quarkly-title": "Menu",
			"md-width": "25%"
		}
	},
	"stackItemOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"align-items": "center",
			"justify-content": "center",
			"md-justify-content": "flex-end"
		}
	},
	"burgerMenu": {
		"kind": "BurgerMenu",
		"props": {}
	},
	"burgerMenuOverride": {
		"kind": "Override",
		"props": {
			"slot": "menu",
			"lg-transform": "translateY(0px) translateX(0px)",
			"lg-transition": "transform 400ms ease 0s",
			"md-position": "fixed",
			"display": "flex",
			"md-left": 0,
			"md-top": 0,
			"md-width": "100%",
			"md-height": "100%",
			"padding": "0px 0 0px 0"
		}
	},
	"overrideOverride": {
		"kind": "Override",
		"props": {
			"slot": "item",
			"text-transform": "uppercase",
			"text-align": "center",
			"padding": "8px 20px 8px 20px",
			"md-padding": "16px 40px 16px 40px",
			"display": "inline-block"
		}
	},
	"overrideOverride1": {
		"kind": "Override",
		"props": {
			"slot": "item-404",
			"lg-display": "none",
			"display": "none"
		}
	},
	"overrideOverride2": {
		"kind": "Override",
		"props": {
			"slot": "item-index",
			"lg-display": "none",
			"display": "none"
		}
	},
	"overrideOverride3": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"md-color": "--dark",
			"md-opacity": ".5",
			"md-transition": "opacity .15s ease 0s",
			"md-hover-opacity": "1",
			"md-active-opacity": "1",
			"md-font": "16px/24px sans-serif",
			"font": "--base",
			"text-decoration-line": "initial",
			"color": "--dark",
			"opacity": ".5",
			"transition": "opacity .15s ease 0s",
			"hover-opacity": "1",
			"letter-spacing": "0.5px",
			"text-transform": "initial"
		}
	},
	"overrideOverride4": {
		"kind": "Override",
		"props": {
			"slot": "link-active",
			"md-opacity": "1",
			"md-cursor": "default",
			"opacity": "1",
			"color": "--primary",
			"cursor": "default"
		}
	},
	"burgerMenuOverride1": {
		"kind": "Override",
		"props": {
			"slot": "icon,icon-close",
			"category": "md",
			"icon": MdMenu
		}
	},
	"burgerMenuOverride2": {
		"kind": "Override",
		"props": {
			"slot": "icon",
			"category": "md",
			"icon": MdMenu,
			"size": "36px"
		}
	},
	"burgerMenuOverride3": {
		"kind": "Override",
		"props": {
			"slot": "menu-open",
			"md-top": 0,
			"md-bottom": 0,
			"md-display": "flex",
			"md-flex-direction": "column",
			"md-align-items": "center",
			"md-justify-content": "center"
		}
	},
	"burgerMenuOverride4": {
		"kind": "Override",
		"props": {
			"slot": "icon-open",
			"md-position": "fixed",
			"md-top": "24px",
			"md-right": "calc(4% + 4px)"
		}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {
			"display": "flex",
			"quarkly-title": "Side",
			"width": "25%",
			"md-display": "none"
		}
	},
	"stackItemOverride2": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"align-items": "center",
			"justify-content": "flex-end"
		}
	},
	"button": {
		"kind": "Button",
		"props": {
			"padding": "8px 18px 8px 18px",
			"font": "--base",
			"letter-spacing": "0.5px",
			"z-index": "5",
			"background": "--color-primary",
			"md-display": "none",
			"white-space": "nowrap",
			"border-radius": "0px",
			"hover-transform": "translateY(-4px)",
			"transition": "transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s",
			"children": "Contact Us"
		}
	}
};

const Header = props => {
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
				<Link {...override("link")}>
					<Image {...override("image")} />
				</Link>
			</StackItem>
			<StackItem {...override("stackItem1")}>
				<Override {...override("stackItemOverride1")} />
				{"        "}
				<BurgerMenu {...override("burgerMenu")}>
					<Override {...override("burgerMenuOverride")}>
						<Override {...override("overrideOverride")} />
						<Override {...override("overrideOverride1")} />
						<Override {...override("overrideOverride2")} />
						<Override {...override("overrideOverride3")} />
						<Override {...override("overrideOverride4")} />
					</Override>
					<Override {...override("burgerMenuOverride1")} />
					<Override {...override("burgerMenuOverride2")} />
					<Override {...override("burgerMenuOverride3")} />
					<Override {...override("burgerMenuOverride4")} />
				</BurgerMenu>
				{"    "}
			</StackItem>
			<StackItem {...override("stackItem2")}>
				<Override {...override("stackItemOverride2")} />
				<Button {...override("button")} />
				{"   "}
			</StackItem>
			{"    "}
		</Stack>
		{children}
	</Section>;
};

Object.assign(Header, { ...Section,
	defaultProps,
	overrides
});
export default Header;