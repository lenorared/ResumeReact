
import 'bootstrap/dist/css/bootstrap.css'
import './Contact.css'

export const Contact = () => {
  return (
    <> 
  
    <form action="https://api.web3forms.com/submit" method="POST" >
    <h3 className="mb-3"> Send me an email </h3>
    <input type="hidden" name="access_key" value="9350e9f1-b735-4874-bdde-225b38fe87d0" />
    <div className="mb-3"> 
      <label htmlFor="name" className="form-label"> Name </label>
      <input type="text" className="form-control" name="name" required />
    </div>
    <div className="mb-3"> 
      <label htmlFor="_subject" className="form-label"> Subject </label>
      <input type="text" className="form-control" name="_subject" placeholder="" />
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label"> Email </label>
      <input type="email" name="email" className="form-control"  required />
    </div>
    <div className="mb-3">
      <label htmlFor="message" className="form-label"> Message </label>
      <textarea name="message"  className="form-control" rows={8} required />
    </div>
    <div className="h-captcha" data-captcha="true"></div>
    <button type="submit">Send Email</button>
    </form>

    <script src="https://web3forms.com/client/script.js" async defer></script>
    </>

  )
}
