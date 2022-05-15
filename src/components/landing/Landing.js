import React from 'react';
import"./Landing.css"

const Landing = () => {
    return (
        <div>
        <h1>About Dashboard of StudentHub</h1>
      <div>
      <table className="table-intro">
  <thead>
    <tr>
      <th>
      <img 
      src="https://roimedia.group/wp-content/uploads/2020/01/sub-services-img2.png"
      alt="new"
      />
      </th>
      <th>
      <img 
      src="https://roimedia.group/wp-content/uploads/2020/01/sub-services-img1.png"
      alt="new"
      />
      </th>
      <th>
      <img 
      src="https://roimedia.group/wp-content/uploads/2019/11/services_2.png"
      alt="new"
      />
      </th>
    </tr>
   </thead>
   <tbody>
     <tr>
       <td className="table-text-header">Login and Logout</td>
       <td className="table-text-header">Data display and statistics</td>
       <td className="table-text-header">Add and Update functions</td>
     </tr>
     <tr>
       <td className="table-text">In Login page, there is only designated administrator can login here. 
         After logout, the token will be clear that means no one can go back without login again.</td>
       <td className="table-text">To show Data and statistics, the Admin can check the details of users and products. Meanwhile, the basic statistics will show the survey of Data.</td>
       <td className="table-text">As an Admin, you are capable to add a new user and change the existed users' login email and password. 
         Furthermore, it is possible that you can designate a registered user as Admin.</td>
     </tr>
     <tr>
     </tr>
  </tbody>
</table>
   
      </div>
      </div>
    );
}

export default Landing;
