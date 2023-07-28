import Footer from "@/components/footer/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Providers from "./Providers";
import { AuthProvider } from "@/components/authProvider/AuthProvider";
import "tw-elements/dist/css/tw-elements.min.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Akoweb",
  description:
    "Akoweb digital is a brand that provides excellent web app developement",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='theme'>
      <body className={inter.className}>
        <div className='container'>
          <Providers>
            <AuthProvider>
              <Navbar />
              {children}
            </AuthProvider>
            <Footer />
          </Providers>
        </div>
        <Toaster
          position='top-center'
          reverseOrder={false}
          gutter={8}
          containerClassName=''
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: "",
            duration: 5000,
            style: {
              background: "#363636",
              color: "#fff",
            },

            // Default options for specific types
            success: {
              duration: 3000,
              theme: {
                primary: "green",
                secondary: "black",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
