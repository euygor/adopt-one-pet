import type { NextPage } from 'next'
import List from '../ui/components/List'
import Title from '../ui/components/Title'
import { Dialog, TextField, Grid, DialogActions, Button, Snackbar } from '@mui/material'
import { useIndex } from '../data/hooks/pages/useIndex'

const Home: NextPage = () => {
  const { listPets, petSelected, setPetSelected, email, setEmail, value, setValue, message, setMessage, adopt } = useIndex();

  return (
    <div>
      <title>Pets para Adoção</title>
      <Title title="" subtitle={<span>Com um pequeno valor mensal, você <br /> pode <strong>adotar um pet virtualmente</strong></span>} />
      <List pets={listPets} onSelect={(pet) => setPetSelected(pet)} />

      <Dialog open={petSelected !== null} fullWidth PaperProps={{ sx: { padding: 5 } }} onClose={() => setPetSelected(null)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="E-mail" type={'email'} fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Quantia por Mês" type={'number'} fullWidth value={value} onChange={(e) => setValue(e.target.value)} />
          </Grid>
        </Grid>
        <DialogActions sx={{ marginTop: 5 }}>
          <Button color={'secondary'} onClick={() => setPetSelected(null)}>Cancelar</Button>
          <Button variant="contained" color={'primary'} onClick={() => adopt()} >Confirmar adoção</Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={message.length > 0} message={message} autoHideDuration={2500} onClose={() => setMessage('')} />
    </div>
  )
}

export default Home