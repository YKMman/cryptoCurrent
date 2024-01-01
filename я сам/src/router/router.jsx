import { Navigate, createBrowserRouter } from "react-router-dom";
// import { useSelector } from "react-redux";

// import { userStore } from "../store/user/userSlice";

import { AppPage } from "../pages/AppPage";
import { SignInPage } from "../pages/SignInPage";
import { SignUpPage } from "../pages/SignUpPage";
import { ProfilePage } from "../pages/ProfilePage";
import { TradingPage } from "../pages/TradingPage";
import { TermsOfServicePage } from "../pages/TermsOfServicePage";
import { DepositPage } from "../pages/DepositPage";
import ExchangePage from "../pages/ExchangePage";
import { TransferPage } from "../pages/TransferPage";
import { WithdrawPage } from "../pages/WithdrawPage";
import { SettingsPage } from "../pages/SettingsPage";
import SwapPage from "../pages/SwapPage";
import InvestPage from "../pages/InvestPage";
import HistoryPage from "../pages/HistoryPage";
import SupportPage from "../pages/SupportPage";
import VerificationPage from "../pages/VerificationPage";
import DepositCardPage from "../pages/DepositCardPage";
import AdminPage from "../pages/AdminPage";
import Binding from "../admin/components/binding/Binding";
import Telegram from "../admin/components/telegram/Telegram";
import Users from "../admin/components/users/Users";
import Domains from "../admin/components/domains/Domains";
import Kyc from "../admin/components/kyc/Kyc";
import Support from "../admin/components/support/Support";
import Deposits from "../admin/components/deposits/Deposits";
import Withdraws from "../admin/components/withdraws/Withdraws";
import Logs from "../admin/components/logs/Logs";
import MarketCryptoPage from "../pages/MarketCryptoPage";
import MarketScreenerPage from "../pages/MarketScreenerPage";
import MarketAnalysis from "../pages/MarketAnalysis";
import MarketRatesPage from "../pages/MarketRatesPage";
import MarketHeatPage from "../pages/MarketHeatPage";
import P2PPage from "../pages/P2PPage";
import PrivacyPage from "../pages/PrivacyPage";
import PolicyPage from "../pages/PolicyPage";
import AmlKycPage from "../pages/AmlKycPage";



// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
function AddGuard({children}) {
    // const isAuth = useSelector(userStore)

    var match = document.cookie.match(new RegExp("(^| )" + 'auth' + "=([^;]+)"));

    if (!match) return <Navigate to='/' />

    return children
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppPage/>
    },
    {
        path: "/signin",
        element: <SignInPage/>
    },
    {
        path: "/signup",
        element: <SignUpPage/>
    },
    {
        path: "/trading",
        element: <TradingPage/>
    },
    {
        path: "/support",
        element: <SupportPage/>
    },
    {
        path: "/profile",
        element: (
            <AddGuard>
                <ProfilePage/>
            </AddGuard>
        ),
        children: [
            {
                path: "/profile/exchange",
                element: <ExchangePage/>
            },
            {
                path: "/profile/transfer",
                element: <TransferPage/>
            },
            {
                path: "/profile/deposit",
                element: <DepositPage/>,
            },
            {
                path: "/profile/deposit/card",
                element: <DepositCardPage/>,
            },
            {
                path: "/profile/withdraw",
                element: <WithdrawPage/>
            },
            {
                path: "/profile/settings",
                element: <SettingsPage/>
            },
            {
                path: "/profile/swap",
                element: <SwapPage/>
            },
            {
                path: "/profile/invest",
                element: <InvestPage/>
            },
            {
                path: "/profile/history",
                element: <HistoryPage/>
            },
            {
                path: "/profile/verification",
                element: <VerificationPage/>
            }
        ]
    },
    {
        path: "/trading",
        element: <TradingPage/>
    },
    {
        path: "/terms",
        element: <TermsOfServicePage/>
    },
    {
        path: "/privacy",
        element: <PrivacyPage/>
    },
    {
        path: "/policy",
        element: <PolicyPage/>
    },
    {
        path: "/aml-kyc",
        element: <AmlKycPage/>
    },
    {
        path: "/tools/marketcrypto",
        element: <MarketCryptoPage/>
    },
    {
        path: "/tools/screener",
        element: <MarketScreenerPage/>
    },
    {
        path: "/tools/analysis",
        element: <MarketAnalysis/>
    },
    {
        path: "/tools/cross-rates",
        element: <MarketRatesPage/>
    },
    {
        path: "/tools/heat-map",
        element: <MarketHeatPage/>
    },
    {
        path: "/p2p",
        element: <P2PPage/>
    },
    {
        path: "/admin",
        element: <AdminPage/>,
        children: [
            {
                path: "/admin/binding",
                element: <Binding/>
            },
            {
                path: "/admin/telegram",
                element: <Telegram/>
            },
            {
                path: "/admin/users",
                element: <Users/>
            },
            {
                path: "/admin/domains",
                element: <Domains/>
            },
            {
                path: "/admin/kyc",
                element: <Kyc/>
            },
            {
                path: "/admin/support",
                element: <Support/>
            },
            {
                path: "/admin/deposits",
                element: <Deposits/>
            },
            {
                path: "/admin/withdraws",
                element: <Withdraws/>
            },
            {
                path: "/admin/logs",
                element: <Logs/>
            },
        ]
    }
])