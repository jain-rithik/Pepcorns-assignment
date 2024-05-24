// import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#161d2d] ">
      <div className="lg:mx-44 md:px-8 px-4 md:pt-14 pt-4 pb-20 md:pb-12 ">
        <div className="flex md:flex-row flex-col gap-10 pb-6">
          <div className="flex flex-col gap-6 text-white/50 md:w-[20%]">
            <img
              className="w-32"
              src="https://assets.republic.com/assets/logo/full/white/120x30/logo-54659cb6a37ad65e8e65799b0238c6ea0c0c4ed99ce66f7286fd1d175e718e73.svg"
              alt="Logo"
            />
            <p className="text-lg">
              Giving everyone access to early-stage startup investing
            </p>
            <div className="flex items-center gap-4 ">
              <i className="fa-brands text-2xl cursor-pointer hover:opacity-100 hover:text-white opacity-60 fa-facebook"></i>
              <i className="fa-brands text-2xl cursor-pointer hover:opacity-100 hover:text-white opacity-60 fa-instagram"></i>
              <i className="fa-brands text-2xl cursor-pointer hover:opacity-100 hover:text-white opacity-60 fa-linkedin"></i>
              <i className="fa-brands text-2xl cursor-pointer hover:opacity-100 hover:text-white opacity-60 fa-discord"></i>
            </div>
          </div>
          <div className="flex flex-wrap md:flex-nowrap w-full md:w-[75%] gap-8 text-lg">
            <div className="md:w-[25%] w-[45%]">
              <h3 className="pb-3 mb-3 text-white/35 border-b border-white/35">
                For investors
              </h3>
              <ul className="text-white/70">
                <li className="hover:text-white cursor-pointer my-1">
                  Why invest
                </li>
                <li className="hover:text-white cursor-pointer my-1">
                  How it works
                </li>
                <li className="hover:text-white cursor-pointer my-1">FAQ</li>
                <li className="hover:text-white cursor-pointer my-1">Risks</li>
                <li className="hover:text-white cursor-pointer my-1">
                  Privacy policy
                </li>
                <li className="hover:text-white cursor-pointer my-1">
                  Accessibility
                </li>
                <li className="hover:text-white cursor-pointer my-1">
                  Cookie Preferences
                </li>
                <li className="hover:text-white cursor-pointer my-1">
                  Form CRS
                </li>
              </ul>
            </div>
            <div className="md:w-[25%] w-[45%]">
              <h3 className="pb-3 mb-3 text-white/35 border-b border-white/35">
                For startups
              </h3>
              <ul className="text-white/70">
                <li className="hover:text-white cursor-pointer my-1">Learn</li>
                <li className="hover:text-white cursor-pointer my-1">
                  Why raise
                </li>
                <li className="hover:text-white cursor-pointer my-1">FAQ</li>
                <li className="hover:text-white cursor-pointer my-1">
                  Instruments
                </li>
                <li className="hover:text-white cursor-pointer my-1">
                  Crowd SAFE
                </li>
                <li className="hover:text-white cursor-pointer my-1">
                  Tokenized assets
                </li>
              </ul>
            </div>
            <div className="md:w-[25%] w-[45%]">
              <h3 className="pb-3 mb-3 text-white/35 border-b border-white/35">
                Crypto
              </h3>
              <ul className="text-white/70">
                <li className="hover:text-white cursor-pointer my-1">
                  For investors
                </li>
                <li className="hover:text-white cursor-pointer my-1">
                  For companies
                </li>
                <li className="hover:text-white cursor-pointer my-1">
                  How it works
                </li>
                <li className="hover:text-white cursor-pointer my-1">
                  Token DPA
                </li>
                <li className="hover:text-white cursor-pointer my-1">
                  Tokenization
                </li>
              </ul>
            </div>
            <div className="md:w-[25%] w-[45%]">
              <h3 className="pb-3 mb-3 text-white/35 border-b border-white/35">
                Company
              </h3>
              <ul className="text-white/70">
                <li className="hover:text-white cursor-pointer my-1">About</li>
                <li className="hover:text-white cursor-pointer my-1">
                  Journal
                </li>
                <li className="hover:text-white cursor-pointer my-1">Events</li>
                <li className="hover:text-white cursor-pointer my-1">
                  Contact
                </li>
                <li className="hover:text-white cursor-pointer my-1">
                  We&apos;re hiring!
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-6 mb-6 border-y border-white/35 flex md:justify-between justify-center items-center">
          <div className="flex items-center gap-4">
            <img
              src="https://assets.republic.com/assets/layouts/dollar-582d5a155e415013ca316098b15357e5557a7e43a142badb0eede421774a7684.svg"
              alt="dollar"
            />
            <p className="text-lg text-white/90 hover:text-white cursor-pointer">
              Refer a startup, get $2,500
            </p>
          </div>
          <div className="hidden md:flex items-center">
            <p className="text-lg mr-10 text-white/50">Invest in the app</p>
            <img
              className="w-36 mr-4 cursor-pointer"
              src="https://assets.republic.com/assets/layouts/play-store-0d44180dd0587978e08f2ac3eb53b810461ff33756799fef2981667aee24dd2a.png"
              alt="Play Store"
            />
            <img
              className="w-36 cursor-pointer"
              src="https://assets.republic.com/assets/layouts/app-store-9101bc9fe34a6cdc55e4436229c0ba5125905ec10aa243ce3346ab6e36e8d5c6.png"
              alt="App Store"
            />
          </div>
        </div>
        <div className="md:hidden flex flex-col items-center gap-6">
          <p className="text-lg mr-10 text-white/50">Invest in the app</p>
          <div className="flex gap-3 pb-4">
          <img
            className="w-32 mr-4"
            src="https://assets.republic.com/assets/layouts/play-store-0d44180dd0587978e08f2ac3eb53b810461ff33756799fef2981667aee24dd2a.png"
            alt=""
          />
          <img
            className="w-32"
            src="https://assets.republic.com/assets/layouts/app-store-9101bc9fe34a6cdc55e4436229c0ba5125905ec10aa243ce3346ab6e36e8d5c6.png"
            alt=""
          />
          </div>
        </div>
        <div className="pb-3 mb-4 border-b border-white/15">
          <p className="mb-4 text-sm text-white/50">
            This site (the "Site") is owned and maintained by OpenDeal Inc.,
            which is not a registered broker-dealer. OpenDeal Inc. does not give
            investment advice, endorsement, analysis or recommendations with
            respect to any securities. All securities listed here are being
            offered by, and all information included on this Site is the
            responsibility of, the applicable issuer of such securities. The
            intermediary facilitating the offering will be identified in such
            offering’s documentation.
          </p>
          <p className="mb-4 text-sm text-white/50">
            All funding-portal activities are conducted by OpenDeal Portal LLC
            doing business as Republic, a funding portal which is registered
            with the US Securities and Exchange Commission (SEC) as a funding
            portal (Portal) and is a member of the Financial Industry Regulatory
            Authority (FINRA). OpenDeal Portal LLC is located at 149 E 23rd St
            #1314, New York, NY 10010, please check out background on FINRA’s
            Funding Portal page.
          </p>
          <p className="mb-4 text-sm text-white/50">
            All broker-dealer related securities activity is conducted by
            OpenDeal Broker LLC, an affiliate of OpenDeal Inc. and OpenDeal
            Portal LLC, and a registered broker-dealer, and member of FINRA |
            SiPC, located at 1345 Avenue of the Americas, 15th Floor, New York,
            NY 10105, please check our background on FINRA’s BrokerCheck.
          </p>
          <p className="mb-4 text-sm text-white/50">
            Certain pages discussing the mechanics and providing educational
            materials regarding regulation crowdfunding offerings may refer to
            OpenDeal Broker LLC and OpenDeal Portal LLC collectively as
            “Republic”, solely for explanatory purposes.
          </p>
          <p className="mb-4 text-sm text-white/50">
            Neither OpenDeal Inc., OpenDeal Portal LLC nor OpenDeal Broker LLC
            make investment recommendations and no communication, through this
            Site or in any other medium should be construed as a recommendation
            for any security offered on or off this investment platform.
            Investment opportunities posted on this Site are private placements
            of securities that are not publicly traded, involve a high degree of
            risk, may lose value, are subject to holding period requirements and
            are intended for investors who do not need a liquid investment. Past
            performance is not indicative of future results. Investors must be
            able to afford the loss of their entire investment. Only qualified
            investors, which may be restricted to only Accredited Investors or
            non-U.S. persons, may invest in offerings hosted by OpenDeal Broker.
          </p>
          <p className="mb-4 text-sm text-white/50">
            Neither OpenDeal Inc., OpenDeal Portal LLC nor OpenDeal Broker LLC,
            nor any of their officers, directors, agents and employees makes any
            warranty, express or implied, of any kind whatsoever related to the
            adequacy, accuracy or completeness of any information on this Site
            or the use of information on this site. Offers to sell securities
            can only be made through official offering documents that contain
            important information about the investment and the issuers,
            including risks. Investors should carefully read the offering
            documents. Investors should conduct their own due diligence and are
            encouraged to consult with their tax, legal and financial advisors.
          </p>
          <p className="mb-4 text-sm text-white/50">
            By accessing the Site and any pages thereof, you agree to be bound
            by the Terms of Use and Privacy Policy. Please also see OpenDeal
            Broker’s Business Continuity Plan and Additional Risk Disclosures.
            All issuers offering securities under regulation crowdfunding as
            hosted by OpenDeal Portal LLC are listed on the All Companies Page.
            The inclusion or exclusion of an issuer on the Platform Page and/or
            Republic’s Homepage, which includes offerings conducted under
            regulation crowdfunding as well as other exemptions from
            registration, is not based upon any endorsement or recommendation by
            OpenDeal Inc, OpenDeal Portal LLC, or OpenDeal Broker LLC, nor any
            of their affiliates, officers, directors, agents, and employees.
            Rather, issuers of securities may, in their sole discretion, opt-out
            of being listed on the Platform Page and Homepage.
          </p>
          <p className="mb-4 text-sm text-white/50 text-center px-4 py-6">
            Investors should verify any issuer information they consider
            important before making an investment.
          </p>
          <p className="mb-4 text-sm text-white/50">
            Investments in private companies are particularly risky and may
            result in total loss of invested capital. Past performance of a
            security or a company does not guarantee future results or returns.
            Only investors who understand the risks of early stage investment
            and who meet the Republic's investment criteria may invest.
          </p>
          <p className="mb-4 text-sm text-white/50">
            Neither OpenDeal Inc., OpenDeal Portal LLC nor OpenDeal Broker LLC
            verify information provided by companies on this Site and makes no
            assurance as to the completeness or accuracy of any such
            information. Additional information about companies fundraising on
            the Site can be found by searching the EDGAR database, or the
            offering documentation located on the Site when the offering does
            not require an EDGAR filing.
          </p>
          <p className="mb-4 text-sm text-white/50">
            To help the government fight the funding of terrorism and money
            laundering activities, Federal law requires all financial
            institutions to obtain, verify, and record information that
            identifies each person who opens an account. Therefore, when you use
            the Services we will ask for your name, address, date of birth, and
            other information that will allow us to identify you. We may also
            ask to see your driver's license, passport or other identifying
            documents.
          </p>
          <p className="mb-4 text-sm text-white/50">
            Republic and its affiliates are not and do not operate or act as a
            bank. Certain banking services are provided by BankProv, member FDIC
            / member DIF. Digital (crypto) assets and investment products are
            not insured by the FDIC, may lose value, and are not deposits or
            other obligations of BankProv and are not guaranteed by BankProv.
            Terms and conditions apply.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-white/50 text-sm">Made in India</p>
          <img
            src="https://assets.republic.com/assets/layouts/credit_cards-fb323581910488f0885fc63613e42a2d07ebc908e0af4df4ed139ed8cb3254fc.svg"
            alt="cards icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
