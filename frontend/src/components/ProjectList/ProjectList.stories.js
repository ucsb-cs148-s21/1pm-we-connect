import React from "react"
import Ideas from "./index.js"

export default {
    title: "Ideas",
    component: Ideas,
    argTypes: {
        backgroundColor: { control: "color" }
    }
}

const Template = (args) => <Ideas {...args} />
export const Default = Template.bind({})
Default.args = {
    list: Array(10).fill({ author: "thanawat", projectName: "hello", contactInfo: "111-111-1111", projectDescription: "hello" })
}

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
