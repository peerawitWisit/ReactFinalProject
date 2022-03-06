import React from 'react'
import styled from 'styled-components'

const MemberCon = () => {
  return (
    <MemberStyled>
        <h2>Member</h2>
        <p>1) Thitiwat Teeramessiriyos</p>
        <p>2) Peerawit Wisitsurawong</p>
        <p>3) Peeranat Aiwudomsin</p>
        <p>4) Kultida Karuna</p>
        <p>5) Thananson Kittisitthichai</p>
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

export default MemberCon