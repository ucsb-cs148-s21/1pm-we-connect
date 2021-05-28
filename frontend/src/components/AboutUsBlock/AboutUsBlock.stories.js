import React from "react"
import About from "./index.jsx"

export default {
    title: "About",
    component: About,
    argTypes: {
        backgroundColor: { control: "color" }
    }
}

const Template = (args) => <About {...args} />
export const Default = Template.bind({})
Default.args = {
}