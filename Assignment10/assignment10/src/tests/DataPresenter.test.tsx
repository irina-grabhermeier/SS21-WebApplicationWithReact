import { shallow } from "enzyme";
import DataPresenter from "../components/DataPresenter";

test('Correct data length', () => {
    const testData = ['Data 0', 'Data 1', 'Data 2', 'Data 3'];
    const wrapper = shallow(<DataPresenter data={testData} />);

    expect(wrapper.find('ul').children()).toHaveLength(testData.length);
});


test('Correct data', () => {
    const testData = ['Data 0', 'Data 1', 'Data 2', 'Data 3'];
    const wrapper = shallow(<DataPresenter data={testData} />);

    for (let i = 0; i < testData.length; i++) {
        const liWrapper = wrapper.find('ListItem');
        expect(wrapper.find('ul').children().contains('Data ' + i)).toBe(true);
    }
});
