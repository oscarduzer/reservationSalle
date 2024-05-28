import {Fragment} from 'react'
import {Button, Chip, Container, InputAdornment, Link, Paper, Stack, TextField, Typography} from '@mui/material'
import { Lock, Mail } from '@mui/icons-material'
import LoginImage from '../assets/images/LoginImage.jpg'
export default function LoginUserPage() {

  const styles={
    containerStyle:{
      display:'flex',
    justifyContent:'center',
    alignItems:'center'
    },
    paperStyle:{
      p:3,
      width:'70%'
    },
    stackParentStyle:{
      width:'100%'
    },
    stackChildrenStyle:{
      width:{lg:'50%',xs:'100%'}
    },
    chipContainerStyle:
    {
        backgroundColor:'lightblue',
        textTransform:'capitalize',
        width:'100%'
    },
    linkStyle:
    {
        color:'lightblue',
        textDecoration:'none',
        textTransform:'capitalize'
    },
    typographyStyle:{
      textTransform:'capitalize',
      fontSize:'sans-serif'
    }
  }

  
  return (
        <Fragment>
                <Container sx={styles.containerStyle}  maxWidth={false} >
                        <Paper sx={styles.paperStyle}>
                             <Stack direction={'row-reverse'} mb={4}>
                                  <Typography sx={styles.typographyStyle} variant='h6' component={'span'}>Cliquez <Link sx={styles.linkStyle}>ici</Link> pour vous connecter</Typography>
                              </Stack>
                             <Stack sx={styles.stackParentStyle} direction={{lg:'row',sx:'column'}}>
                                  <Stack sx={styles.stackChildrenStyle} >
                                        <img src={LoginImage} alt="" />
                                  </Stack>
                                  <Stack sx={styles.stackChildrenStyle} component={'form'} direction={'column'} spacing={4}> 
                                            <Stack display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                                  <Typography fontWeight={'bold'} variant='h5'>Heureux de vous revoir !</Typography>
                                            </Stack>
                                            <Stack>
                                                  <TextField
                                                    InputProps={{
                                                        startAdornment:<InputAdornment position='start'><Mail/></InputAdornment>
                                                    }}
                                                    required
                                                    fullWidth label={'Email'}  type='email'
                                                            
                                                    />
                                            </Stack>
                                            <Stack>
                                                  <TextField
                                                            InputProps={{
                                                              startAdornment:<InputAdornment position='start'><Lock/></InputAdornment>
                                                            }}
                                                          required
                                                          fullWidth label={'Mot de Passe'}  type='password'
                                                   />
                                            </Stack>
                                              <Stack sx={styles.stackParentStyle} direction={'row'} justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'}>
                                                  <Stack sx={styles.stackChildrenStyle} direction={'row'} justifyContent={'center'} alignItems={'center'}>
                                                      
                                                          <Chip
                                                          sx={styles.chipContainerStyle}
                                                          label={'se connecter'}
                                                          clickable
                                                          />
                                                  </Stack>

                                                  <Stack sx={styles.stackChildrenStyle} direction={'row'} justifyContent={'center'} alignItems={'center'}>
                                                      <Link sx={styles.linkStyle}>Mot de Passe oublié?</Link>
                                                  </Stack>
                                            </Stack>
                                  </Stack>
                             </Stack>
                             <Stack m={3}>
                                    
                             </Stack>
                        </Paper>
                </Container>
        </Fragment>
  )
}