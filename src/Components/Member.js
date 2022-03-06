import React from 'react'
import styled from 'styled-components'

const Member = () => {
  return (
    <MemberStyled>
        <h2>Member</h2>
        <p>1) Peerawit Wisitsurawong</p>
        <p>2) Peeranat Aiwudomsin</p>
        <p>3) Panalie Muensri</p>
        <p>4) Thitiwan Aufau</p>
        <p>5) Nattapong Rojjanasiripong</p>
        <p>6) sikawat kotklangdon</p>
    </MemberStyled>
  )
}
 const MemberStyled = styled.div`
    margin: 1rem 0;
    h2{
        text-decoration-line: underline;
        text-decoration-thickness: 3px;
    }
 `


export default Member