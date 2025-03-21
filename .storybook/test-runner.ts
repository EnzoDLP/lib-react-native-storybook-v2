import type { TestRunnerConfig } from '@storybook/test-runner';

const config: TestRunnerConfig = {
  async postVisit(page, context) {
    const elementHandle = await page.$('#storybook-root');
    const innerHTML = await page.evaluate(
      (element) => element?.innerHTML,
      elementHandle
    );
    globalThis.expect(innerHTML).toMatchSnapshot();
  },
};

export default config;
