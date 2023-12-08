import { clsx, Image } from "@mantine/core";
import PropTypes from "prop-types";

const socialMedia = [
  {
    name: "Tiktok",
    url: "https://tiktok.com",
    icon: "/icons/brand/tiktok.svg"
  },
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: "/icons/brand/facebook.svg"
  }, {
    name: "Instagram",
    url: "https://instagram.com",
    icon: "/icons/brand/instagram.svg"
  }, {
    name: "Twitter",
    url: "https://twitter.com",
    icon: "/icons/brand/x-twitter.svg"
  }, {
    name: "Youtube",
    url: "https://youtube.com",
    icon: "/icons/brand/youtube.svg"
  }
]

const menuPage = [
  {
    name: "FAQ",
    url: "/faq"
  }, {
    name: "Term of use",
    url: "/term-of-use"
  }, {
    name: "Privacy Policy",
    url: "/privacy-policy"
  }, {
    name: "About Us",
    url: "/about-us"
  }, {
    name: "Contact",
    url: "/contact"
  }
]

const feature = [
  {
    name: "Statistik Pertanian",
    url: "/statistik-pertanian"
  }, {
    name: "Data Pertanian",
    url: "/data-pertanian"
  }, {
    name: "Info Pertanian",
    url: "/info-pertanian"
  }, {
    name: "Toko Pertanian",
    url: "/toko-pertanian"
  }, {
    name: "Info Penyuluh",
    url: "/info-penyuluh"
  }, {
    name: "Hak Akses User",
    url: "/hak-akses-user"
  }, {
    name: "Riwayat Aktivitas",
    url: "/riwayat-aktivitas"
  }, {
    name: "List Data Operator",
    url: "/list-data-operator"
  }
]

const GetFeatures = () => {
  // round up the size
  const size = Math.ceil(feature.length / 2)
  return <div className="grid grid-cols-2">
    <ol className="list-decimal mx-4">
      {
        feature.slice(0, size).map((item, index) => {
          return (
            <li key={index}>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-bold"
              >
                {item.name}
              </a>
            </li>
          )
        })
      }
    </ol>
    <ol className="list-decimal mx-4" start={size + 1}>
      {
        feature.slice(size).map((item, index) => {
          return (
            <li key={index}>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-bold"
              >
                {item.name}
              </a>
            </li>
          )
        })
      }
    </ol>
  </div>
}

const Footer = ({ sidebarOpen }) => {
  return (
    <footer className="relative left-0 right-0 z-[999999999] w-full flex">
      <div
        className={clsx(sidebarOpen ? "block" : "hidden",
          "bg-green-secondary bg-opacity-50 p-4 w-80"
        )}
      >
        <div
        >
          <Image
            src="/image/logo-navbar.png"
            alt="Logo Siketan"
            className={sidebarOpen ? "block" : "hidden"}
          />
          <Image
            src="/image/logo.png"
            alt="Logo Siketan"
            className={sidebarOpen ? "hidden" : "block"}
          />
        </div>
        <div className="flex gap-2 items-center justify-center">
          {
            socialMedia.map((item, index) => {
              return (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={32}
                    height={32}
                  />
                </a>
              )
            })
          }
        </div>
        <div className="flex flex-wrap gap-1 items-center justify-center mt-4 uppercase text-white">
          {
            menuPage.map((item, index) => {
              return (
                <div key={index} className="inline-block">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold"
                  >
                    {item.name}
                  </a>
                  {index !== menuPage.length - 1 && (
                    <span className="text-sm font-bold">|</span>
                  )}
                </div>
              )
            })
          }
        </div>
        <div className="text-white text-xs text-center mt-2">
          Copyright@
          {new Date().getFullYear()}
          .SIKETAN.All Right Reserved
        </div>
      </div>
      <div className={clsx("bg-green-primary text-white p-6 flex-1 flex gap-8", !sidebarOpen && "ml-20")}>
        <div className="w-2/5">
          <h3 className="uppercase font-bold text-xl">Siketan Apps</h3>
          <p>Sebuah inovasi website penyuluhan pertanian. Berbagi wawasan terbaru, praktik terbaik, dan solusi agraris. Antarmuka intuitif untuk akses mudah dan pembaruan informasi yang akurat. Mendorong pertumbuhan sektor pertanian melalui pendekatan digital yang terjangkau.</p>
        </div>
        <div>
          <h3 className="uppercase font-bold text-xl">Daftar Menu</h3>
          <GetFeatures />
        </div>
        <div >
          <h3 className="uppercase font-bold text-xl">Kontak</h3>
          <p>Email : &nbsp;
            <a
              href="mailto:pertanian@ngawikab.go.id">
              pertanian@ngawikab.go.id
            </a>
          </p>
          <p>Telephone : (0351) 749026</p>
          <p>Fax : (0351) 749026</p>
          <p>WA : &nbsp;
            <a
              href="https://wa.me/6281252232644">
              +62 812-5223-2644
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

Footer.propTypes = {
  sidebarOpen: PropTypes.bool,
}
