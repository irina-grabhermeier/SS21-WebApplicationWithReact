import { shallow } from "enzyme";
import { Pagination } from "../components/Pagination";

test('Next button works', () => {
    const spy = jest.fn();
    const pagination = shallow(<Pagination currentPage={1} maxPageCount={10} setPage={spy} />);

    expect(pagination.find("#current").text()).toBe('1 / 10');
    expect(pagination.find('#next').prop('disabled')).toBeFalsy();

    pagination.find("#next").simulate('click');
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(2);
});

test('Previous button works', () => {
    const spy = jest.fn();
    const pagination = shallow(<Pagination currentPage={2} maxPageCount={10} setPage={spy} />);

    expect(pagination.find("#current").text()).toBe('2 / 10');
    expect(pagination.find('#previous').prop('disabled')).toBeFalsy();

    pagination.find("#previous").simulate('click');
    expect(spy).toBeCalledTimes(1);
    expect(spy).toBeCalledWith(1);
});

test('Next button disabled on last page', () => {
    const spy = jest.fn();
    const pagination = shallow(<Pagination currentPage={10} maxPageCount={10} setPage={spy} />);

    expect(pagination.find("#current").text()).toBe('10 / 10');
    expect(pagination.find('#next').prop('disabled')).toBeTruthy();
});

test('Previous button disabled on first page', () => {
    const spy = jest.fn();
    const pagination = shallow(<Pagination currentPage={1} maxPageCount={10} setPage={spy} />);

    expect(pagination.find("#current").text()).toBe('1 / 10');
    expect(pagination.find('#previous').prop('disabled')).toBeTruthy();
});
