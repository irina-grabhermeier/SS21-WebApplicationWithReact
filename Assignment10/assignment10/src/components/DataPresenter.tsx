import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content:center;
    background: lightGreen;
`;

const ListItem = styled.li`
    background-color: pink;
    list-style-type: none;
    margin: 5pt;
    padding:5pt;
    border: solid 1px;
    width: 200pt;
    text-align: center;
    font-size: 32px;
`;

interface DataPresenterProps {
    data: string[];
}

const DataPresenter = (props: DataPresenterProps) => {


    return (
        <Container>
            <ul>
                {props.data.map((item) => <ListItem id={item} key={item}>{item}</ListItem>)}
            </ul>
        </Container>
    );
}

export default DataPresenter;