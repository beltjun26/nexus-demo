import {EnableSidebar} from '../../../_metronic/layout/core'

const SupportPage = () => {
  return (
    <>
      <h2>Support</h2>
      <div className='card card-custom mt-8'>
        <div className='card-header'>
          <h3 className='card-title'>Contact Information</h3>
        </div>
        <div className='card-body'>
          <p>
            If you have any questions, concerns or feedback regarding our application, please do not
            hesitate to contact us. Our dedicated support team is available to assist you with any
            technical issues or inquiries you may have. We are committed to providing you with the
            best possible user experience, and we welcome your feedback to help us improve our
            application. Thank you for choosing our Single Page Application, and we look forward to
            hearing from you soon!
          </p>
          <p>
            <a className='btn btn-primary' href='mailto:support@hypernexus.ai'>
              support@hypernexus.ai
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

const SupportWrapper = () => {
  return (
    <EnableSidebar>
      <SupportPage />
    </EnableSidebar>
  )
}

export {SupportWrapper}
