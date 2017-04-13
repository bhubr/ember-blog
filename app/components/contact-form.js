import Ember from 'ember';
import request from 'ember-ajax/request';

export default Ember.Component.extend({
  statusMessage: '',
  status: '',
  actions: {
  	sendMessage() {
      const self = this;
  		const name = this.get('name');
      const email = this.get('email');
      const website = this.get('website')
      const message = this.get('message');
      const payload = { name, email, website, message };
      return request('/send-message', {
        method: 'POST',
        data: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/vnd.api+json; charset=utf-8",
        }
      }).then(response => {
        console.log(response);
        self.set('status', 'alert-success');
        self.set('statusMessage', 'Your message was successfully sent!');
      })
      .catch(err => {
        self.set('status', 'alert-danger');
        self.set('statusMessage', 'An error occured!!! Your message could not be delivered :/');
      });
  	}
  }
});
