import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content:center;
    background: lightGreen;
`;

const Button = styled.button`
    background-color: lightGrey;
    text-align: center;
    font-size: 18px;
    margin: 5pt;
    padding: 5pt;
    min-width: 100pt;
`;

const Span = styled.span`
    text-align: center;
    font-size: 32px;
    margin: 5pt;
    padding: 5pt;
`;

interface PaginationProps {
    currentPage: number;
    maxPageCount: number;
    setPage: (page: number) => void;
}

export const Pagination = (props: PaginationProps): JSX.Element => {
    return (

        <Container>
            <Button id={'previous'} disabled={props.currentPage <= 1} onClick={() => props.setPage(props.currentPage - 1)}>Previous</Button>
            <Span id={'current'}>{props.currentPage + " / " + props.maxPageCount}</Span>
            <Button id={'next'} disabled={props.currentPage >= props.maxPageCount} onClick={() => { props.setPage(props.currentPage + 1) }}>Next</Button>
        </Container>
    );
}
