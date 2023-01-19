import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { CompleteOrder } from "./pages/CompleteOrder";
import { HomePage } from "./pages/Home";
import { OrderConfirmedPage } from "./pages/OrderConfirmed";

export function Router () {
    return (
        <Routes>
            <Route path="/" element={ <DefaultLayout /> }>
                <Route path="/" element={ <HomePage /> } />
                <Route path="/completeorder" element={ <CompleteOrder /> } />
                <Route path="/orderconfirmed" element={ <OrderConfirmedPage /> } />
            </Route>
        </Routes>
    )
}