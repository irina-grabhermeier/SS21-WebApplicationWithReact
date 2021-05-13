import { shallow } from "enzyme";
import DataPresenter from "../components/DataPresenter";

test('Data is correct', () => {
    const testData = ['Data 0', 'Data 1', 'Data 2', 'Data 3'];
    const wrapper = shallow(<DataPresenter data={testData} />);

    expect(wrapper.find('ul').children()).toHaveLength(testData.length);


});
