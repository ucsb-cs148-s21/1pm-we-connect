import React from "react"
import NavBar from "./index.js"
import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router";

addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);
export default {
    title: "NavBar",
    component: NavBar,
    argTypes: {}
}

const Template = (args) => <NavBar {...args} />
export const Default = Template.bind({})
Default.args = {
    setDark: () => console.log("dark theme!"),
    dark: true
}

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
