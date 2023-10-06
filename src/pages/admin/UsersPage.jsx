import React from "react";

const UsersPage = () => {
  return (
    <div className="alo arr">
      <div className="gx ua">
        <div className="ari cfc ddh">
          <div className="bxr cbi">
            <div className="bzy">
              <h1 className="avy awg awp axv">Users</h1>
              <p className="lb awa axt">
                A list of all the users in your account including their name,
                title, email and role.
              </p>
            </div>
            <div className="lh bwf bwv bzz">
              <button
                type="button"
                className="lu adu ajr arf arv avl awa awg bah bbn bis boy boz bpb bpk"
              >
                Add user
              </button>
            </div>
          </div>
          <div className="lm ma">
            <div className="gc gl adi buw cte">
              <div className="lv ts arv avo cfc ddh">
                <table className="ts acc ach">
                  <thead>
                    <tr>
                      <th scope="col" className="asa atn auc avk awa awg axv cgi">
                        Name
                      </th>
                      <th scope="col" className="arf asa avk awa awg axv">
                        Title
                      </th>
                      <th scope="col" className="arf asa avk awa awg axv">
                        Email
                      </th>
                      <th scope="col" className="arf asa avk awa awg axv">
                        Role
                      </th>
                      <th scope="col" className="ab asa atm aue cgp">
                        <span className="t">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="acc acg">
                    <tr>
                      <td className="adm asc atn auc awa awe axv cgi">
                        Lindsay Walton
                      </td>
                      <td className="adm arf asc awa axr">Front-end Developer</td>
                      <td className="adm arf asc awa axr">
                        lindsay.walton@example.com
                      </td>
                      <td className="adm arf asc awa axr">Member</td>
                      <td className="ab adm asc atm aue avm awa awe cgp">
                        <a href="#" className="ayh bli">
                          Edit<span className="t">, Lindsay Walton</span>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="adm asc atn auc awa awe axv cgi">
                        Courtney Henry
                      </td>
                      <td className="adm arf asc awa axr">Designer</td>
                      <td className="adm arf asc awa axr">
                        courtney.henry@example.com
                      </td>
                      <td className="adm arf asc awa axr">Admin</td>
                      <td className="ab adm asc atm aue avm awa awe cgp">
                        <a href="#" className="ayh bli">
                          Edit<span className="t">, Courtney Henry</span>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="adm asc atn auc awa awe axv cgi">Tom Cook</td>
                      <td className="adm arf asc awa axr">Director of Product</td>
                      <td className="adm arf asc awa axr">tom.cook@example.com</td>
                      <td className="adm arf asc awa axr">Member</td>
                      <td className="ab adm asc atm aue avm awa awe cgp">
                        <a href="#" className="ayh bli">
                          Edit<span className="t">, Tom Cook</span>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="adm asc atn auc awa awe axv cgi">
                        Whitney Francis
                      </td>
                      <td className="adm arf asc awa axr">Copywriter</td>
                      <td className="adm arf asc awa axr">
                        whitney.francis@example.com
                      </td>
                      <td className="adm arf asc awa axr">Admin</td>
                      <td className="ab adm asc atm aue avm awa awe cgp">
                        <a href="#" className="ayh bli">
                          Edit<span className="t">, Whitney Francis</span>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="adm asc atn auc awa awe axv cgi">
                        Leonard Krasner
                      </td>
                      <td className="adm arf asc awa axr">Senior Designer</td>
                      <td className="adm arf asc awa axr">
                        leonard.krasner@example.com
                      </td>
                      <td className="adm arf asc awa axr">Owner</td>
                      <td className="ab adm asc atm aue avm awa awe cgp">
                        <a href="#" className="ayh bli">
                          Edit<span className="t">, Leonard Krasner</span>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="adm asc atn auc awa awe axv cgi">
                        Floyd Miles
                      </td>
                      <td className="adm arf asc awa axr">Principal Designer</td>
                      <td className="adm arf asc awa axr">
                        floyd.miles@example.com
                      </td>
                      <td className="adm arf asc awa axr">Member</td>
                      <td className="ab adm asc atm aue avm awa awe cgp">
                        <a href="#" className="ayh bli">
                          Edit<span className="t">, Floyd Miles</span>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
