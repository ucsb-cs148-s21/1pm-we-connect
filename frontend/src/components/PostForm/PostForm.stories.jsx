import React from 'react';
import PostForm  from "."

export default {
  title: 'PostForm',
  component: PostForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <PostForm {...args} />;
export const Default = Template.bind({});
Default.args = {
    submitForm: (e) => {
        e.preventDefault();
        alert("Form submitted");
    }
}

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
