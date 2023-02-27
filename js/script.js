

const { createApp } = Vue


createApp({
    data() {
        return {
            contacts: [
                {
                    name: 'Harry',
                    avatar: './img/Harry.jpg',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai studiato per la lezione?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ci vorrebbe una magia',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Se vuoi ti presto un libro!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Hermione',
                    avatar: './img/Hermione.jpg',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Hagrid',
                    avatar: './img/Hagrid.jpg',
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Ron',
                    avatar: './img/Ron.jpg',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Silente',
                    avatar: './img/Silente.jpg',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Albus, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Tom',
                    avatar: './img/Tom.jpg',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Dolores',
                    avatar: './img/Dolores.jpg',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }

            ],
            currentIndex: 0,
            newMessage: '',
            search: '',
        }
    },
    methods: {
        setCurrentChat(currentMessage) {
            this.currentIndex = currentMessage
        },
        sendMessage() {
            const msg = this.newMessage.trim()
            if (msg === '') {
                return
            }
            const newEnterMessage = {
                date: '',
                message: msg,
                status: 'sent'
            }
            this.contacts[this.currentIndex].messages.push(newEnterMessage)

            const activeContact = this.contacts[this.currentIndex]
            setTimeout(() => {
                const msgReceived = {
                    date: '',
                    message: 'ok',
                    status: 'received',
                }
                activeContact.messages.push(msgReceived)
            }, 1000);
        },
    },

    // computed:{
    //     lastMessage(){

    //     }
    //     lastAccess(){

    //     }
    // }

}).mount('#app')


