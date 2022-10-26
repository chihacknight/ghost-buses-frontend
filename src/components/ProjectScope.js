import React, {useState} from 'react'
import DetailContainer from './DetailContainer'
import DotNav from './DotNav'

export default function ProjectScope() {
    const [detailNavSelect, setDetailNavSelect] = useState('matters')

  return (
    <div className='project-scope-container padding-container'>
        <aside>
            <DotNav setDetailNavSelect={setDetailNavSelect} detailNavSelect={detailNavSelect}/>
        </aside>
        
          <DetailContainer selected={detailNavSelect}/>
        
    </div>
  )
}
