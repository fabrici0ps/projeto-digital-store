import { Outlet } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'

function LayoutPage() {
    return(
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="bg-background">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default LayoutPage;