import './Button';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/web-components/writing-stories/introduction
export default {
  title: 'Example/Button',
  tags: ['docsPage'],
  component: 'sb-button',
  argTypes: {
    onClick: {action: 'onClick'},
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/web-components/writing-stories/args
export const Primary = {
  args: {
    label: 'button',
  },
};
