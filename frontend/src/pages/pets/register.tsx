import { NextPage } from "next";
import { useRegister } from "../../data/hooks/pages/pets/useRegister";
import Title from "../../ui/components/Title";
import { Paper, Grid, TextField, Button, Snackbar } from "@mui/material";
import { maxWidth } from "@mui/system";

const Register: NextPage = () => {
    const { name, setName, history, setHistory, photo, setPhoto, message, setMessage, register } = useRegister();

    return (
        <>
            <title>Cadastrar Pet</title>
            <Title title={'Cadastro de Pets para Adoção'} subtitle={'Preencha os dados do novo Pet'} />

            <Paper sx={{ maxWidth: 970, mx: 'auto', p: 5 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField value={name} onChange={(e) => setName(e.target.value)} label={'Nome'} placeholder={'Digite o nome do Pet'} fullWidth></TextField>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField value={history} onChange={(e) => setHistory(e.target.value)} label={'História do Pet'} multiline fullWidth rows={4}></TextField>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField value={photo} onChange={(e) => setPhoto(e.target.value)} label={'Foto'} placeholder={'Digite o endereço da imagem'} fullWidth></TextField>

                        <Button variant={'contained'} color={'secondary'} sx={{ mt: 2 }} component={'a'} href={'https://imgur.com/upload'} target={'_blank'}>
                            Enviar Imagem
                        </Button>
                    </Grid>
                    <Grid item xs={12} sx={{ textAlign: 'center' }}>
                        <Button onClick={register} variant={'contained'} fullWidth sx={{ maxWidth: { md: 200, mt: 4 } }}>
                            Cadastrar Pet
                        </Button>
                    </Grid>
                </Grid>
            </Paper>

            <Snackbar open={message.length > 0} autoHideDuration={2500} onClose={() => setMessage('')} message={message} />
        </>
    );
}

export default Register;