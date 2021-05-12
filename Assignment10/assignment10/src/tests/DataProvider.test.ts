import { DataProvider } from "../classes/DataProvider";

test('FakeDataProvider returns correct test data', () => {
    const dataProvider = new DataProvider();

    for (let page = 1; page <= 10; page++) {
        for (let i = 0; i < 10; i++) {
            expect(dataProvider.getData(page)).toBe('Data ' + ((page - 1) * 10) + i);
        }
    }
});
