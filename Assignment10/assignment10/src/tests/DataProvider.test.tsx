import { DataProvider } from "../classes/DataProvider";

test('DataProvider returns correct test data', () => {
    const dataProvider = new DataProvider();

    let expected = [];
    for (let i = 0; i < 10; i++) {
        expected.push(`Data ${i}`)
    }

    let actual = dataProvider.getData(1);

    for (let i = 0; i < actual.length; i++) {
        expect(actual[i]).toBe(expected[i]);
    }

    expected = [];
    for (let i = 10; i < 20; i++) {
        expected.push(`Data ${i}`)
    }

    actual = dataProvider.getData(2);

    for (let i = 0; i < actual.length; i++) {
        expect(actual[i]).toBe(expected[i]);
    }

    expected = [];
    for (let i = 90; i < 100; i++) {
        expected.push(`Data ${i}`)
    }

    actual = dataProvider.getData(10);

    for (let i = 0; i < actual.length; i++) {
        expect(actual[i]).toBe(expected[i]);
    }
});
