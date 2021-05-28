import React from "react"
import Drawer from "./Drawer"
export default {
    title: "Drawer",
    component: Drawer,
    argTypes: {
        backgroundColor: { control: "color" }
    }
}

const Template = (args) => <Drawer {...args} />
export const Default = Template.bind({})
Default.args = {
    open: true,
    setOpen: () => console.log("open drawer")
}

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
