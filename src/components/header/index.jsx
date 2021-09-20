import React from 'react'

export default function Header() {
    return (
        <div className="row header_container_dark ">
<div className="col-6 d-flex ">
<div className="icon">

<i class="fa fa-facebook"></i>&nbsp;
<i class="fa fa-linkedin"></i>

</div>

<div className="phone_head">
+912222222222
</div>
</div>

<div className="col-6">
<div className="login_signup_container">



<button>
<i class="fa fa-user-circle"></i>
 &nbsp;
       SIGNUP</button>
<button><i class="fa fa-power-off"></i> &nbsp; LOGIN</button>

</div>

</div>



        </div>
    )
}
