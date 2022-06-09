import { Link, Box } from '@mui/material';
import NextLink from 'next/link';
import { HeaderContainer, Logo, LinksContainer } from './style';

const HeaderAdmin = () => {
    return (
        <HeaderContainer>
            <div>
                <Logo src="/images/logo.svg" alt="Imagem não encontrada." />
                <LinksContainer>
                    <Link component={NextLink} href={'/pets/register'}>
                        <a>Cadastrar Pet</a>
                    </Link>
                    <Link component={NextLink} href={'/pets/report'}>
                        <a>
                            Relatório{' '}
                            <Box component={'span'} sx={{ display: { sm: 'initial', xs: 'none' } }}>
                                de Adoção
                            </Box>
                        </a>
                    </Link>
                </LinksContainer>
            </div>
        </HeaderContainer>
    );
}

export default HeaderAdmin;