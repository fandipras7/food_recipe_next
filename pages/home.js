import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../components/module/Card"
import Footer from "../components/module/Footer"
import Navbar from "../components/module/Navbar"
import style from "../styles/home.module.css"
import {useRouter} from "next/router"

const Home = () => {
  const router = useRouter();
  const [recipes, setRecipes] = useState([]);
  async function fetchData() {
    try {
      const result = await axios({
        method: "GET",
        baseURL: process.env.FOOD_RECIPE_API,
        url: `/recipes`,
      });
      const recipes = result.data.data;
      console.log(recipes);
      setRecipes([...recipes, recipes]);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(recipes);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className={style.yellow}>
        <div className={style.image}>
          <img src="/asset/img/image_1.png" alt="" />
        </div>
      </div>
      <Navbar />
      <main className={style.main1}>
        <h1>Discover Recipe <br />
          & Delicious Food</h1>
        <form onSubmit>
          <input type="text" className={style.input} placeholder="Search Recipes" />
        </form>
      </main>
      <main className={style.main}>
        <h1>Recently Recipe</h1>
        <div className={style.container}>
          {
            recipes && recipes.map((recipe) => <Card key={recipe.id} title={recipe.title} id={recipe.id} image={recipe.image}/>)
          }
          
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home
