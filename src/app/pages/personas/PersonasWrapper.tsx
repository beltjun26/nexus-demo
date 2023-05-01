import {EnableSidebar, PageTitle} from '../../../_metronic/layout/core'
import {
  // ListsWidget4,
  // ListsWidget5,

} from '../../../_metronic/partials/widgets'
import { PersonasTable } from './PersonasTable'

const PersonasPage = () => (
  <>
    <PersonasTable className='mb-5 mb-xl-10' />

    {/*begin::Row*/}
    {/* <div className='row gy-5 g-xl-10'> */}
      {/*begin::Col*/}
      {/* <div className='col-xxl-6'>
        <ListsWidget5 className='card-xl-stretch mb-xl-10' />
      </div> */}
      {/*end::Col*/}

      {/*begin::Col*/}
      {/* <div className='col-xxl-6'>
        <ListsWidget4 className='card-xl-stretch mb-5 mb-xl-10' items={5} />
      </div> */}
      {/*end::Col*/}
    {/* </div> */}
  </>
)

const PersonasWrapper = () => {
  return (
    <EnableSidebar>
      {/* <PageTitle description='Welcome to hypernexus' breadcrumbs={[]}>
        Hello, Paul
      </PageTitle> */}
      <PersonasPage />
    </EnableSidebar>
  )
}

export {PersonasWrapper}
