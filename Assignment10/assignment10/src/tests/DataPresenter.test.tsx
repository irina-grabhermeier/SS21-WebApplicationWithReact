import { shallow } from "enzyme";
import DataPresenter from "../components/DataPresenter";

test('List has correct item count', () => {
    const data = ['Random string #0', 'Random string #1', 'Random string #2', 'Random string #3'];
    const dataPresenter = shallow(<DataPresenter data={data} />);

    expect(dataPresenter.children()).toHaveLength(data.length);
    for (let i = 0; i < data.length; i++) {
        expect(dataPresenter.find(`#item-${i}`).text()).toBe(`Random string #${i}`);
    }
});
