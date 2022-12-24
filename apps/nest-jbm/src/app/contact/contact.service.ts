import { ContactEmail } from '@jbm-creator-network/model';
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { SentMessageInfo } from 'nodemailer';
import { environment } from '../../environments/environment';

@Injectable()
export class ContactService {
  constructor(private mailService: MailerService) {}

  sendMessage(contactEmail: ContactEmail): Observable<SentMessageInfo> {
    return from(
      this.mailService.sendMail({
        to: environment.contactEmail,
        from: environment.contactEmail,
        subject: 'Creator Contact for' + contactEmail.creatorName,
        text: `Von: ${contactEmail.name} (${contactEmail.eMail}) An Creator: ${contactEmail.creatorName}

Nachricht:
${contactEmail.message}`,
      })
      
      /* currently not working focus on in V2
      this.mailService.sendMail({
        to: environment.contactEmail,
        from: environment.contactEmail,
        subject: 'Creator Contact for' + contactEmail.creatorName,
        template: 'contactmail',
        context: { contactEmail },
        })
    */
    );
  }
}
