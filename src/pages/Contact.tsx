
import 'bootstrap/dist/css/bootstrap.css'
import './Contact.css'

export const Contact = () => {
  return (
    <form action="https://www.formsubmit.co/rmmason@gmail.com" method="POST" className="mb-3">
      <div className="mb-3">
        <label className="form-label" htmlFor="fromName"> Name </label>
        <input type="text" className="form-control" name="fromName" id="fromName" required />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="subject"> Subject </label>
        <input type="text" className="form-control" name="_subject" id="subject" required value="the subject" />
      </div>
      <div className="mb-3"> 
        <label className="form-label" htmlFor="email"> Email </label>
        <input type="text" className="form-control" name="email" id="email" required />
      </div>
      <label className="form-label"> Message </label>
      <textarea  className="form-control" id="message" name="message" rows={8} required />
      <input type="hidden" name="_next" value="https://reneemason.tech" />
      <input type="hidden" name="_autoresponse" value="Thank you for contacting me, I'll be in touch shortly. Renee"></input>
      <button className="btn btn-primary" type="submit">Send</button>
    </form>
  )
}
