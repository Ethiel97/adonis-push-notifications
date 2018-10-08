'use strict'

const Event = use('Event');
class NotificationController {

  async sendNotification({request, session, response}) {

    let message = request.input('message');

    Event.emit('send::notification', message)

    session.flash({status: 'Notification sent'})
    return response.redirect('back')

  }
}

module.exports = NotificationController
