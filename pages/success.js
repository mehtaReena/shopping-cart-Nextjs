import styled from "@emotion/styled";
// import Confetti from "react-confetti";
// import { useState, useEffect } from "react";
import Link from 'next/link'



const Container = styled.div`
  width: 475px;
  margin: 30px auto 0 auto;
  text-align: center;
  color: #fff;
`;

const Title = styled.div`
  font-size: 58px;
`;

const Message = styled.div`
  margin-top: 40px;
`;

const Success= ()=> {




  return (
    <div>

        <h3> Congrats ! Stripe has successfully processed your payment</h3>

        <h5>Thank you!</h5>
       <Link  href="/"> Shop-More </Link>

    </div>
  );
};

export default Success;
