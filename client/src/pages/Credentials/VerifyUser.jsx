import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { verifyUser } from "../../services/authService.js";
function VerifyUser() {
  const [loading, setLoading] = useState(false);
  const [isLogin, setLogin] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    const response = async (id) => {
      const res = await verifyUser(id);
      if (res) {
        setLoading(false);
        setLogin(true);
        return;
      }
    };
    response(id);
  }, []);
  {
    loading && <h1>Loading...</h1>;
  } //changes here
  {
    isLogin && (
      <>
        <h1>Please Login Now!!!! </h1>
        <Link href="/login">Login</Link>
      </>
    );
  }
  return <div>Verifying User</div>;
}

export default VerifyUser;
