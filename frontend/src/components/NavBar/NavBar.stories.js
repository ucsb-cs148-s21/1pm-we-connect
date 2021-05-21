import React from "react"
import NavBar from "./index.js"

export default {
    title: "NavBar",
    component: NavBar,
    argTypes: {
        backgroundColor: { control: "color" }
    }
}

const Template = (args) => <NavBar {...args} />
export const Default = Template.bind({})
Default.args = {
    list: [
        { idea: "hello", leaderName: "thanawat", contactInfo: "111-111-1111" },
        { idea: "hello", leaderName: "thanawat", contactInfo: "111-111-1111" },
        { idea: "hello", leaderName: "thanawat", contactInfo: "111-111-1111" }
    ]
}

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
