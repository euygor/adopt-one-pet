import { TitleStyled, SubtitleStyled } from "./style";

type Props = {
    title: string;
    subtitle?: string | JSX.Element;
}

const Title = (props: Props) => {
    return (
        <>
            <TitleStyled>{props.title}</TitleStyled>
            <SubtitleStyled>{props.subtitle}</SubtitleStyled>
        </>
    );
}

export default Title;