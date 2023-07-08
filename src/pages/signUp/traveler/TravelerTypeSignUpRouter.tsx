import React, { useState } from 'react'
import styled from 'styled-components'
import { colors } from '../../../styles/variables'
import {
  Routes,
  Route,
} from 'react-router-dom'
import TermsOfUseAgreeView from './TermsOfUseAgreeView'
import IdentityVerificationView from './IdentityVerificationView'
import SelectUserTypeView from '../SelectUserTypeView'

const TravelerTypeSignUpRouter = () => {

  return (
    <>
      <Routes>
        {/* TODO: path 통일 */}
        <Route index element={<SelectUserTypeView />} />
        <Route path="/step2" element={<TermsOfUseAgreeView />} />
        <Route path="/step3" element={<IdentityVerificationView />} />
      </Routes>
    </>
  )
}
export default TravelerTypeSignUpRouter
