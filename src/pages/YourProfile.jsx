import React from "react";

const YourProfile = () => {
  return (
    <div className="bg-gray-900 dark:bg-gray-900 dark:text-white text-gray-600 flex-grow flex text-sm">
      <h1 className="hidden">Account Settings</h1>

      <header className="border-b-1 border-gray-200">
        <nav className="flex overflow-x-auto py-1">
          <ul role="list" className="ma uk vg abc asn axq ayc azc cnm dms">
            <li>
              <a href="#" className="azs">
                Account
              </a>
            </li>
            <li>
              <a href="#" className="">
                Notifications
              </a>
            </li>
            <li>
              <a href="#" className="">
                Billing
              </a>
            </li>
            <li>
              <a href="#" className="">
                Teams
              </a>
            </li>
            <li>
              <a href="#" className="">
                Integrations
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="acw adr">
        <div className="me us yy abd abf asn asz cnm cvm dms">
          <div>
            <h2 className="axj ayc bbv">Personal Information</h2>
            <p className="ky axq azc">
              Use a permanent address where you can receive mail.
            </p>
          </div>
          <form className="csh">
            <div className="me yy abc abq cic cjf">
              <div className="fb ma zr abd">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                  className="oc sj vg aes ajx arj"
                />
                <div>
                  <button
                    type="button"
                    className="aet amq ask ata axo ayc bbv bdd blw"
                  >
                    Change avatar
                  </button>
                  <p className="lf axx azc">JPG, GIF or PNG. 1MB max.</p>
                </div>
              </div>
              <div className="cck">
                <label for="first-name" className="lx axq aya bbv">
                  First name
                </label>
                <div className="lf">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autocomplete="given-name"
                    className="lx uf aet aga ams asv bbv bdd bdo bds bfi bpb bpc bpn cqq"
                  />
                </div>
              </div>
              <div className="cck">
                <label for="last-name" className="lx axq aya bbv">
                  Last name
                </label>
                <div className="lf">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autocomplete="family-name"
                    className="lx uf aet aga ams asv bbv bdd bdo bds bfi bpb bpc bpn cqq"
                  />
                </div>
              </div>
              <div className="fb">
                <label for="email" className="lx axq aya bbv">
                  Email address
                </label>
                <div className="lf">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    className="lx uf aet aga ams asv bbv bdd bdo bds bfi bpb bpc bpn cqq"
                  />
                </div>
              </div>
              <div className="fb">
                <label for="username" className="lx axq aya bbv">
                  Username
                </label>
                <div className="lf">
                  <div className="ma aet ams bdo bds bfi biw bix bja">
                    <span className="ma yj zr aur azc cqp">example.com/</span>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      placeholder="janesmith"
                      autocomplete="username"
                      className="ve aga amn asv auj bbv boz cqq"
                    />
                  </div>
                </div>
              </div>
              <div className="fb">
                <label for="timezone" className="lx axq aya bbv">
                  Timezone
                </label>
                <div className="lf">
                  <select
                    id="timezone"
                    name="timezone"
                    className="lx uf aet aga ams asv bbv bdd bdo bds bfi bpb bpc bpn cqq dxn"
                  >
                    <option>Pacific Standard Time</option>
                    <option>Eastern Standard Time</option>
                    <option>Greenwich Mean Time</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="lp ma">
              <button
                type="submit"
                className="aet akq ask ata axo ayc bbv bdd bkn bqv bqw bqy bre"
              >
                Save
              </button>
            </div>
          </form>
        </div>
        <div className="me us yy abd abf asn asz cnm cvm dms">
          <div>
            <h2 className="axj ayc bbv">Change password</h2>
            <p className="ky axq azc">
              Update your password associated with your account.
            </p>
          </div>
          <form className="csh">
            <div className="me yy abc abq cic cjf">
              <div className="fb">
                <label for="current-password" className="lx axq aya bbv">
                  Current password
                </label>
                <div className="lf">
                  <input
                    id="current-password"
                    name="current_password"
                    type="password"
                    autocomplete="current-password"
                    className="lx uf aet aga ams asv bbv bdd bdo bds bfi bpb bpc bpn cqq"
                  />
                </div>
              </div>
              <div className="fb">
                <label for="new-password" className="lx axq aya bbv">
                  New password
                </label>
                <div className="lf">
                  <input
                    id="new-password"
                    name="new_password"
                    type="password"
                    autocomplete="new-password"
                    className="lx uf aet aga ams asv bbv bdd bdo bds bfi bpb bpc bpn cqq"
                  />
                </div>
              </div>
              <div className="fb">
                <label for="confirm-password" className="lx axq aya bbv">
                  Confirm password
                </label>
                <div className="lf">
                  <input
                    id="confirm-password"
                    name="confirm_password"
                    type="password"
                    autocomplete="new-password"
                    className="lx uf aet aga ams asv bbv bdd bdo bds bfi bpb bpc bpn cqq"
                  />
                </div>
              </div>
            </div>
            <div className="lp ma">
              <button
                type="submit"
                className="aet akq ask ata axo ayc bbv bdd bkn bqv bqw bqy bre"
              >
                Save
              </button>
            </div>
          </form>
        </div>
        <div className="me us yy abd abf asn asz cnm cvm dms">
          <div>
            <h2 className="axj ayc bbv">Log out other sessions</h2>
            <p className="ky axq azc">
              Please enter your password to confirm you would like to log out of
              your other sessions across all of your devices.
            </p>
          </div>
          <form className="csh">
            <div className="me yy abc abq cic cjf">
              <div className="fb">
                <label for="logout-password" className="lx axq aya bbv">
                  Your password
                </label>
                <div className="lf">
                  <input
                    id="logout-password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    className="lx uf aet aga ams asv bbv bdd bdo bds bfi bpb bpc bpn cqq"
                  />
                </div>
              </div>
            </div>
            <div className="lp ma">
              <button
                type="submit"
                className="aet akq ask ata axo ayc bbv bdd bkn bqv bqw bqy bre"
              >
                Log out other sessions
              </button>
            </div>
          </form>
        </div>
        <div className="me us yy abd abf asn asz cnm cvm dms">
          <div>
            <h2 className="axj ayc bbv">Delete account</h2>
            <p className="ky axq azc">
              No longer want to use our service? You can delete your account
              here. This action is not reversible. All information related to
              this account will be deleted permanently.
            </p>
          </div>
          <form className="ma zp csh">
            <button
              type="submit"
              className="aet alq ask ata axo ayc bbv bdd ble"
            >
              Yes, delete my account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default YourProfile;
