import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React, { useState } from 'react';
import appConfig from '../config.json';

export default function ChatPage() {
    // Sua lógica vai aqui
    const [mensagem, setMensagem] = React.useState('');
    const [listaDeMensagens, setListaDeMensagens] = React.useState([]);
    const username = 'micaeltrivelato'
    // ./Sua lógica vai aqui

    function handleNovaMensagem(novaMensagem) {
        const mensagem = {
            id: listaDeMensagens.length,
            de: 'Micael Trivelato',
            texto: novaMensagem,
        };
        setListaDeMensagens([
            mensagem,
            ...listaDeMensagens

        ]);
        setMensagem('');
    }
    return (
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: appConfig.theme.colors.personalized[1003],
                //backgroundImage: `url(https://i0.wp.com/rubberchickengames.com/wp-content/uploads/2015/05/retro-video-game-wallpapers.jpg?ssl=1)`,
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                color: appConfig.theme.colors.neutrals['000']
            }}
        >
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 100%)',
                    borderRadius: '30px',
                    borderWidth: '1000px',
                    borderColor: appConfig.theme.colors.neutrals[1000],
                    //background: "linear-gradient(#174dff, white);",
                    background: "linear-gradient(#fbff00, #e62e09);",
                    height: '100%',
                    maxWidth: '70%',
                    maxHeight: '95vh',
                    padding: '32px',
                }}
            >
                <Header />
                <Box
                    styleSheet={{
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        height: '80%',
                        background: "linear-gradient(#fbff00, #e62e09);",
                        flexDirection: 'column',
                        border: '1px solid',
                        borderColor: 'black',
                        borderRadius: '30px',
                        padding: '16px',
                    }}
                >

                    <MessageList mensagens={listaDeMensagens} />
                    {/*listaDeMensagens.map((mensagemAtual) => {
                        return (
                            <li key={mensagemAtual.id}>
                                {mensagemAtual.de}: {mensagemAtual.texto}
                            </li>                        
                        )
                    })*/}
                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <TextField
                            value={mensagem}
                            onChange={(event) => {
                                const valor = event.target.value
                                setMensagem(valor);
                            }}
                            onKeyPress={(event) => {
                                if (event.key == 'Enter') {
                                    event.preventDefault();
                                    handleNovaMensagem(mensagem);
                                }
                            }}
                            placeholder="Insira sua mensagem aqui..."
                            type="textarea"
                            styleSheet={{
                                fontFamily: 'Courier New',
                                width: '100%',
                                border: '0',
                                resize: 'none',
                                borderRadius: '5px',
                                padding: '6px 8px',
                                marginRight: '12px',
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
                            variant='tertiary'
                            colorVariant='neutral'
                            label='Enviar'
                            onClick={() => {
                                setMensagem('');
                                handleNovaMensagem(mensagem);
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

function Header() {
    return (
        <>
            <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                <Text variant='heading5'>
                    Chat
                </Text>
                <Button
                    variant='tertiary'
                    colorVariant='neutral'
                    label='Logout'
                    href="/"
                />
            </Box>
        </>
    )
}

function MessageList(props) {
    console.log('MessageList', props);
    return (
        <Box
            tag="ul"
            styleSheet={{
                overflow: 'scroll',
                display: 'flex',
                flexDirection: 'column-reverse',
                flex: 1,
                color: appConfig.theme.colors.neutrals["000"],
                marginBottom: '16px',
            }}
        >
            {props.mensagens.map((mensagem) => {
                return (
                    <Text
                        key={mensagem.id}
                        tag="li"
                        styleSheet={{
                            borderRadius: '5px',
                            padding: '6px',
                            marginBottom: '12px',
                            hover: {
                                backgroundColor: appConfig.theme.colors.neutrals[700],
                            }
                        }}
                    >
                        <Box
                            styleSheet={{
                                marginBottom: '8px',
                            }}
                        >
                            <Image
                                styleSheet={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    display: 'inline-block',
                                    marginRight: '8px',
                                }}
                                src={`https://github.com/micaeltrivelato.png`}
                            />
                            <Text tag="strong">
                                {mensagem.de}
                            </Text>
                            <Text
                                styleSheet={{
                                    fontSize: '10px',
                                    marginLeft: '8px',
                                    color: appConfig.theme.colors.neutrals[300],
                                }}
                                tag="span"
                            >
                                {(new Date().toLocaleDateString())}
                            </Text>
                        </Box>
                        {mensagem.texto}
                    </Text>
                );
            })}

        </Box>
    )
}