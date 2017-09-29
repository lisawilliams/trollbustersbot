/*
  CONGRATULATIONS on creating your first Botpress bot!

  This is the programmatic entry point of your bot.
  Your bot's logic resides here.

  Here's the next steps for you:
  1. Read this file to understand how this simple bot works
  2. Read the `content.yml` file to understand how messages are sent
  3. Install a connector module (Facebook Messenger and/or Slack)
  4. Customize your bot!

  Happy bot building!

  The Botpress Team
  ----
  Getting Started (Youtube Video): https://www.youtube.com/watch?v=HTpUmDz9kRY
  Documentation: https://botpress.io/docs
  Our Slack Community: https://slack.botpress.io
*/

// module.exports = function(bp) {
//   // Listens for a first message (this is a Regex)
//   // GET_STARTED is the first message you get on Facebook Messenger
//   bp.hear(/GET_STARTED|hello|hi|test|hey|holla/i, (event, next) => {
//     event.reply('#welcome') // See the file `content.yml` to see the block
//   })
//
//   // You can also pass a matcher object to better filter events
//   bp.hear({
//     type: /message|text/i,
//     text: /exit|bye|goodbye|quit|done|leave|stop/i
//   }, (event, next) => {
//     event.reply('#goodbye', {
//       // You can pass data to the UMM bloc!
//       reason: 'unknown'
//     })
//   })
// }


//Dependencias
const Promise = require('bluebird');
const _ = require('lodash');
// var unirest = require('unirest');

const pickCategory = {
    quick_replies: [
        {
            content_type: 'text',
            title: 'Website attack',
            payload: 'PEDIDO'
        },
        {
            content_type: 'text',
            title: 'Consultar presio 💲',
            payload: 'PRECIO'
        },
        {
            content_type: 'text',
            title: 'Más información 💻',
            payload: 'INFORMACION'
        },
        {
            content_type: 'text',
            title: 'Hablar con un humano 👨🏼',
            payload: 'HUMANO'
        }
    ],
    typing: true
}

module.exports = function (bp) {

    bp.middlewares.load()

    bp.hear({
        type: 'postback',
        text: 'GET_STARTED'
    }, (event, next) => {
        const { first_name, last_name } = event.user
        bp.logger.info('New user:', first_name, last_name)

        const WELCOME_SENTENCES = [
            "Are you being harassed online? What's happening right now?"
        ]

        const WELCOME_TEXT_QUICK_REPLY = "Choose one of the categories below to be connected with help and resources."

        Promise.mapSeries(WELCOME_SENTENCES, txt => {
            bp.messenger.sendText(event.user.id, txt, { typing: true })
            return Promise.delay(4000)
        })
            .then(() => {
                bp.messenger.sendText(event.user.id, WELCOME_TEXT_QUICK_REPLY, pickCategory)
            })
    })

    // Respuestas quick reply
    bp.hear({
        type: 'quick_reply',
        text: 'PEDIDO'
    }, (event, next) => {
        const PICK_TEXT = "We're sorry to hear someone is attacking your site."
        bp.messenger.sendText(event.user.id, PICK_TEXT, { typing: true })
        Promise.delay(3000)
            .then(() => {
                bp.messenger.sendText(event.user.id, 'Ej. Pedido 2 botellas de agua mineral, 1 cacahuates salados, 2 paquetes de donas')
            })
    })
    bp.hear({
        type: 'quick_reply',
        text: 'PRECIO'
    }, (event, next) => {
        const PICK_TEXT = "Opción aún no disponible"
        bp.messenger.sendText(event.user.id, PICK_TEXT, { typing: true })
        /*Promise.delay(3000)
            .then(() => {
                bp.messenger.sendText(event.user.id, 'Ej. Pedido 2 botellas de agua mineral, 1 cacahuates salados, 2 paquetes de donas')
            })*/
    })
    bp.hear({
        type: 'quick_reply',
        text: 'INFORMACION'
    }, (event, next) => {
        const PICK_TEXT = "Opción aún no disponible"
        bp.messenger.sendText(event.user.id, PICK_TEXT, { typing: true })
        /*Promise.delay(3000)
            .then(() => {
                bp.messenger.sendText(event.user.id, 'Ej. Pedido 2 botellas de agua mineral, 1 cacahuates salados, 2 paquetes de donas')
            })*/
    })
    bp.hear({
        type: 'quick_reply',
        text: 'HUMANO'
    }, (event, next) => {
        const PICK_TEXT = "En unos minutos un humano estará atendiéndote"
        bp.messenger.sendText(event.user.id, PICK_TEXT, { typing: true })
        /*Promise.delay(3000)
            .then(() => {
                bp.messenger.sendText(event.user.id, 'Ej. Pedido 2 botellas de agua mineral, 1 cacahuates salados, 2 paquetes de donas')
            })*/
    })
    // Escuchando al usuario
    bp.hear({
        text: 'PEDIDO'
    }, (event, next) => {
        const PICK_TEXT = "Utiliza la palabra Pedir + la lista de lo que necesitas separando cada artículo con una ',' y lo más detallado posible."
        bp.messenger.sendText(event.user.id, PICK_TEXT, { typing: true })
        Promise.delay(3000)
            .then(() => {
                bp.messenger.sendText(event.user.id, 'Ej. Pedido 2 botellas de agua mineral, 1 cacahuates salados, 2 paquetes de donas')
            })
    })
    bp.hear({
        text: 'PRECIO'
    }, (event, next) => {
        const PICK_TEXT = "Opción aún no disponible."
        bp.messenger.sendText(event.user.id, PICK_TEXT, { typing: true })
        /*Promise.delay(3000)
            .then(() => {
                bp.messenger.sendText(event.user.id, 'Ej. Pedido 2 botellas de agua mineral, 1 cacahuates salados, 2 paquetes de donas')
            })*/
    })
    bp.hear({
        text: 'INFORMACION'
    }, (event, next) => {
        const PICK_TEXT = "Opción aún no disponible."
        bp.messenger.sendText(event.user.id, PICK_TEXT, { typing: true })
        /*Promise.delay(3000)
            .then(() => {
                bp.messenger.sendText(event.user.id, 'Ej. Pedido 2 botellas de agua mineral, 1 cacahuates salados, 2 paquetes de donas')
            })*/
    })
    bp.hear({
        text: 'HUMANO'
    }, (event, next) => {
        const PICK_TEXT = "En unos minutos un humano estará atendiéndote."
        bp.messenger.sendText(event.user.id, PICK_TEXT, { typing: true })
        /*Promise.delay(3000)
            .then(() => {
                bp.messenger.sendText(event.user.id, 'Ej. Pedido 2 botellas de agua mineral, 1 cacahuates salados, 2 paquetes de donas')
            })*/
    })

    // API.AI
    bp.hear({ 'nlp.action': 'smalltalk.person' }, (event, next) => {
        bp.messenger.sendText(event.user.id, 'My name is James')
    })


    bp.hear({ type: 'message', text: /Pedir/i }, (event, next) => {
        //exports.name = name;
        var evento = event.raw.message.text.replace('Pedir', '');
        unirest.post('http://localhost:3000/api/pedidos')
            .headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' })
            //.send({"pedidoName": evento})
            .send({ "pedidoName": event.raw.message.text.replace('Pedir', '') })
            .end(function (response) {
                console.log(response.body);
                console.log("El mensaje: " + event.raw.message.text.replace('Pedir', ''));
                bp.messenger.sendText(event.user.id, '¡Muy bien! ¿Es todo lo que necesitas?')
            });
    })
}
