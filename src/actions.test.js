import { sayHi } from "./actions";

it('sayHi matches snapshot', () => {
  expect(sayHi()).toMatchSnapshot();
});
