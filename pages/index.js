import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import { useRouter } from 'next/router'
//import ryuKen from '../gifs/testeImagem.jpg';
import appConfig from '../config.json';
//import {ReactComponent as ryuKen} from '../gifs/testeImagem.jpg';
import ryuKen from '../gifs/RYU_KEN.gif'

function Titulo(props) {
    const Tag = props.tag || 'h1';
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
            ${Tag} {
                color: ${appConfig.theme.colors.personalized['1000']};
                font-size: 32px;
                font-weight: 1000;
                font-family: Courier New;
                
            }
            `}</style>
        </>
    );
}

// Componente React
// function HomePage() {
//     // JSX
//     return (
//         <div>
//             <GlobalStyle />
//             <Titulo tag="h2">Boas vindas de volta!</Titulo>
//             <h2>Discord - Alura Matrix</h2>
//         </div>
//     )
// }
// export default HomePage

export default function PaginaInicial() {
    //const username = 'copyright © 2022';

    const [username, setUserName] = React.useState('');
    const gifAnimado = 'https://i.gifer.com/Z3zH.gif';
    const roteamento = useRouter();
    return (
        <>       
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    // backgroundColor: appConfig.theme.colors.primary[100],
                    backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/11/street-fighter-ii-ryus-stage.jpg)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '700px',
                        borderRadius: '5px', padding: '32px', margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 100%)',
                        //backgroundColor: appConfig.theme.colors.neutrals[700],
                        background: "linear-gradient(#fbff00, #e62e09);"
                    }}
                >
                    {/* Formulário */}
                    <Box
                        as="form"
                        onSubmit={function(infosDoEvento){
                            infosDoEvento.preventDefault();
                            roteamento.push('/chat');
                        }}
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                        }}
                    >
                        <Titulo tag="h2">Bem-vindo ao GameChat!</Titulo>
                        <Text variant="body3" styleSheet={{ marginBottom: '32px', marginTop: '5px', color: appConfig.theme.colors.neutrals[800] }}>
                            O seu canal de chat para jogos!
                        </Text>
                        <TextField
                            value={[username]}
                            fullWidth
                            onChange={function Handler(eventUser) {
                                {
                                    console.log('usuario digitou')
                                    const valorUser = eventUser.target.value
                                    setUserName(valorUser);

                                }
                            }}
                            textFieldColors={{
                                neutral: {
                                    textcolor: appConfig.theme.colors.personalized[1000],
                                    mainColor: appConfig.theme.colors.personalized[1000],
                                    mainColorHighlight: appConfig.theme.colors.personalized[1001],
                                    backgroundColor: appConfig.theme.colors.personalized[1002],
                                },
                            }}
                        />
                        <Button
                            type='submit'
                            label='Entrar'
                            fullWidth
                            textcolor={{
                                color: appConfig.theme.colors.personalized[1000],
                            }}
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["999"],
                                mainColor: appConfig.theme.colors.personalized[1001],
                                mainColorLight: appConfig.theme.colors.personalized[1000],
                                mainColorStrong: appConfig.theme.colors.personalized[1000],
                            }}
                        >
                        </Button>

                    </Box>
                    {/* Formulário */}


                    {/* Photo Area */}
                    {username.length <= 2 
                        ? <Box
                            styleSheet={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                maxWidth: '300px',
                                padding: '16px',
                                backgroundColor: "linear-gradient(#fbff00, #e62e09);",
                                border: '1px solid',
                                borderColor: appConfig.theme.colors.neutrals[1000],
                                borderRadius: '30px',
                                flex: 1,
                                minHeight: '240px',
                            }}
                        >
                            <Image
                                styleSheet={{
                                    borderRadius: '10%',
                                    marginBottom: '16px',
                                }}
                                src={gifAnimado}
                            />
                        </Box>
                        : <Box
                            styleSheet={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                maxWidth: '300px',
                                padding: '16px',
                                backgroundColor: "linear-gradient(#fbff00, #e62e09);",
                                border: '1px solid',
                                borderColor: appConfig.theme.colors.neutrals[1000],
                                borderRadius: '30px',
                                flex: 1,
                                minHeight: '240px',
                            }}
                        >
                            <Image
                                styleSheet={{
                                    borderRadius: '10%',
                                    marginBottom: '16px',
                                }}
                                src={`https://github.com/${username}.png`}
                            />
                            <Text
                                variant="body4"
                                styleSheet={{
                                    color: appConfig.theme.colors.personalized[1000],
                                    backgroundColor: appConfig.theme.colors.personalized[1001],
                                    padding: '3px 10px',
                                    borderRadius: '1000px',
                                    fontFamily: 'Courier New',
                                    width: '150px',
                                    textAlign: 'center'
                                }}
                            >
                                <a href={`https://github.com/${username}`}>{username}</a>
                            </Text>
                        </Box>}
                    {/* Photo Area */}
                </Box>
                <Image
                    styleSheet={{
                        marginBottom: '16px',
                    }}
                //src='https://i.gifer.com/Z3zH.gif'
                />
            </Box>
        </>
    );
}