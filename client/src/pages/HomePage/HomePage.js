import ShopCard from "../../components/Shops/ShopCard/ShopCard";
import Loading from '../../components/Loading/Loading'
import "./homepage.css";

export default function HomePage({ shops }) {
  const headerImg1 =
    "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGNha2UlMjBzaG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60";

  const headerImg2 =
    "https://images.unsplash.com/photo-1506815181983-292770fc39f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGNha2UlMjBzaG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60";

  const headerImg3 =
    "https://images.unsplash.com/photo-1572978577765-462b91a7f9e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNha2UlMjBzaG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60";

  const headerImg4 =
    "https://images.unsplash.com/photo-1506815181983-292770fc39f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGNha2UlMjBzaG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60";

  return (
    !shops.length ? (
      <Loading/>
    ) : (
      <div className="df">
      <div className="home-main df fd-c">
        <header className="home-header ">
          <h1>Trending</h1>
          <div className="homepage-trending df">
            <img src={headerImg1} alt="" className="home-header-img br" />
            <img src={headerImg2} alt="" className="home-header-img br" />
            <img src={headerImg3} alt="" className="home-header-img br" />
            <img src={headerImg4} alt="" className="home-header-img br" />
          </div>
        </header>
        <h1>Cake Shops at Calicut</h1>
        <div className="home-shops df">
          {!shops.length ? (
            <>Loading...</>
          ) : (
            <>
              {shops.map((shop) => (
                <div key={shop._id}>
                  <ShopCard shop={shop} />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      <button className="home-right-drag-button">
        <i className="fas fa-less-than"></i>
      </button>
    </div>
    )
  );
}
