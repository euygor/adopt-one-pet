import { styled } from '@mui/material';

export const ListStyled = styled('ul')`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: ${props => props.theme.spacing(2)};
`;

export const ItemList = styled('li')`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${props => props.theme.spacing(2)};
    margin-bottom: ${props => props.theme.spacing(5)};

    ${props => props.theme.breakpoints.down('md')} {
        grid-template-columns: 1fr;
        gap: ${props => props.theme.spacing(2)};
        margin-bottom: ${props => props.theme.spacing(10)};
    }
`;

export const Photo = styled('img')`
    width: 100%;
`;

export const Info = styled('div')`
    display: flex;
    flex-direction: column;
    gap: ${props => props.theme.spacing(2)};
`;

export const Name = styled('h2')`
    margin: 0;
`;

export const Description = styled('p')`
    margin: 0;
    word-break: break-word;
`;