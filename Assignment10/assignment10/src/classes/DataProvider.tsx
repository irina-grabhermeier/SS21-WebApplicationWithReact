
export class DataProvider {
    public getData(index: number) {

        const data = [];
        const product = (index - 1) * 10;

        for (let i = 0; i < 10; i++) {
            data.push(`Data ${i + product}`)
        }

        return data;
    }
}