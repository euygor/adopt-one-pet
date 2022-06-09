import { styled } from "@mui/material";

export const TitleStyled = styled('h1')`
    font-size: 20px;
    text-align: center;
    margin-top: ${props => props.theme.spacing(5)};

`;

export const SubtitleStyled = styled('h2')`
    font-size: 18px;
    text-align: center;
    margin-bottom: ${props => props.theme.spacing(5)};
    font-weight: normal;
    color: ${props => props.theme.palette.text.secondary};
`;