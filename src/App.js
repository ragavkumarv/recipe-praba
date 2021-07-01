import { useState } from "react";
import "./styles.css";

export default function App() {
  const initialRecipe = [
    {
      title: "Chicken 65",
      src:
        "https://mirchmasalafood.com/wp-content/uploads/2020/10/Chicken65_thumb_youtube.jpg",
      list:
        "500 gm chicken*2 tablespoon coriander powder*4 tablespoon yoghurt (curd)*4 green chilli*4 tablespoon mustard oil*1 pinch red chilli powder*1/2 teaspoon turmeric *1 tablespoon curry leaves *4 tablespoon tomato ketchup*salt as required ",
      prep: [
        "To make chicken 65 masala in a bowl add Yogurt, Ginger garlic paste, garam masala, coriander powder, chili powder, corn flour,Turmeric powder, salt ,beated egg  and mix it nicely to for am smooth paste. Do not add any water.The batter should be thick Ingredients-for-Chicken-65Masala-for-Chicken-65Step ",
        "Add the chicken pieces and combine well with the masala paste.Make sure all the areas are nicely covered with the masalas.After mixing cover and marinate for 30 minutes.Marination-for-Chicken-65Marinatinf-for-Chicken-65 Step",
        "After 30 minutes of marination fry the chicken pieces in oil.Do not over crowd the chicken pieces there should be enough space between the pieces only then the chicken will fry uniformly all around.Once they are half done flip it to the other side and fry until crisp and golden brown.Finally fry some curry leaves and chilies in the same oil and garnish the chicken pieces."
      ]
    },

    {
      title: "Fish Fry",
      src: "http://www.ndtv.com/cooks/images/KERELA.FISH.66%281%29.jpg",
      list:
        "6 pc	Fish (i have used pomfret)(400g ) 1 tsp	Chili powder 1/2 tsp	Turmeric powder Salt and Pepper Oil for frying For Masala 2 tbsp	Oil 1/4 tsp	Mustard seeds 1/2 tsp	Cumin seeds 1/2 tsp	Fennel seeds 1 tbsp	Ginger (chopped finely) 1 tbsp	Garlic (chopped finely) 1	Green chilies 1	red chilies 1 spring	Curry leaves 3 small	onion (or 2 medium) 1 tsp	Chili powder 1 tsp	Garam masala  required salt  required water  Coriander leaves",
      prep:
        "Step 1) Clean the fish and mariante the fish with chili powder, turmeric, salt and pepper. Keep it aside for 15 -20 min.  Step 2) Heat oil in a pan and fry the fish until crisp on both sides. Remove it from the oil and keep it aside.  Step 3) Now in the same pan add mustard seeds, cumin , fennel, chopped ginger, chopped garlic, dry red chilies, green chilies, curry leaves and give it a stir.  Step 4) Then add chopped onion and cook until they are browned.Once they are browned add the tomatoes and the masalas Chili powder and garam masala. Cook until it turns to a paste.  Step 5) Now add some water and cook for 2 minutes, then add the fried fish from step 2 and cover it with a lid. Cook for few minutes and then flip it over and cook for few more minutes.  Step 6) Finally add coriander leaves and turn off the heat.  That's it our delicious Fish masala fry is ready to be served with rice. Happy Cooking !!!"
    },
    {
      title: "Mutton Kola",
      src: "https://i.ytimg.com/vi/oTOn6_ZR5p0/maxresdefault.jpg",
      list:
        "500 gm minced mutton 1 teaspoon ginger powder 2 pinches asafoetida 6 tablespoon vegetable oil 2 tablespoon gram flour (besan) 1 cup water 4 clove 1 1/2 teaspoon red chilli powder 3 teaspoon aniseed 3 tablespoon yoghurt (curd) 3 crushed black cardamom 3 pinches salt 1/2 teaspoon garam masala powder 2 bay leaf",
      prep:
        "Step 1) Grind fennel seeds, cinnamon, cloves and cardamom to a fine powder. Then add ginger, garlic and green chilies and grind it again. Step 2) Heat oil in a pan and add the minced meat (i bout it from stores) we can remove the bones and grind it in mixie as well. Now add the masalas -turmeric powder, chili powder and the freshly ground masala for step 1 , required salt and cook for 5 minutes. Step 3) once done transfer the cooked meat into a mixie and grind well. If there is any water left after cooking the meat strain the water completely and add only the meat. Add finely chopped onion and some coriander leaves. Check for salt and if required add more. Step 4) Now to bind everything together add roasted channa dal powder (pottu kadadalai maavu) and mix well, if there is more water left add a little more of flour to bind everything together. Now make small balls out of it. We get approximately 10 kola urundai from 1/4 kg meat. Step 5) Once the oil is medium hot place the kofta one by one and fry until all the sides are crispy and golden."
    },
    {
      title: "Prawn Masala",
      src: "https://i.ytimg.com/vi/FHolAvTFxzc/maxresdefault.jpg",
      list:
        "300 gm prawns 1/4 inch ginger 1/2 cup grated coconut 1 tablespoon coriander powder 1/4 tablespoon powdered cinnamon 2 boiled,chopped into cubes potato 1/2 cup refined oil 1 onion 6 cloves garlic 1/2 tablespoon cumin powder 1/2 tablespoon red chilli powder 1 tomato 2 tablespoon coriander leaves water as required For Marination 2 teaspoon powdered turmeric 2 teaspoon salt",
      prep:
        "Step 1) In a blender add pepper corns and cumin seeds and grind it to a fine powder. Freshly ground powder smells very good so grind them freshly to get nice aroma.  Masala-for-pepper-prawns  Step 2) Heat oil in a pan and add the whole spices cinnamon stick, cardamom pods, cloves and dry red chilies .Give it a stir and add the finely chopped onions, also add some salt to speed up the cooking process.We need to cook saute the onions until they are nice and golden.  Whole-spices-for-pepper-prawns  Step 3) Once the onions turns golden add the masalas Turmeric powder, Garam masala powder, Ginger garlic paste, Green Chilies and the freshly ground masala and mix well. Add some water to prevent the masalas from burning.Add the cleaned and deveined prawns and mix well with the masalas. Add Salt and water if required Cover and cook for 7-10 minutes depending on the size of your prawns.  Masala-for-pepper-prawns  Step 4) Once the prawns are nicely cooked add some freshly ground pepper powder to get more realistic and aroma.Finally garnish it with some curry leaves and turn off the heat"
    },
    {
      title: "Crab Pepper Fry",
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBNlzB4E3uBHX4Y02FaHb3H8c5TC5juC2TAQ&usqp=CAU",
      list:
        "4 sea water crabs 1/2 cup tomato 2 teaspoon turmeric 2 teaspoon garam masala powder 1 tablespoon coriander seeds 4 peppercorns 1 inch cinnamon stick 1 teaspoon salt refined oil as required 1 cup onion 1 tablespoon grated ginger 2 teaspoon red chilli powder 1 cup grated coconut 4 clove 2 dry red chili 3 teaspoon kokum 1 tablespoon garlic",
      prep:
        "Step 1) Dry roast 1 cup grated coconut, pepper corns, cumin seeds, dry red chilies for 3 minutes on a medium heat.Then grind the coconut mixture into a fine paste  Coconut-MasalaGrinding  Step 2) to make crab masala heat some oil , add mustard seeds once the seeds pops out add green chilies add chopped onions ,required salt and saute until the onions are golden Then add ginger garlic paste and cook for 2 more minutes or until the raw smell is gone  mustard_green_chilies_onionGinger_Garlic_Paste  Step 3) Add the masalas turmeric powder, coriander powder and chili powder (I have added 2 tbsp chili powder I am making it very spicy) and mix well.Then add chopped tomatoes and cook until the tomatoes are soft and well cooked (If you like the gravy to be very smooth then grind the cooked onions and tomatoes)  Crab-MasalaTomatoes  Step  4) Add the ground coconut paste(from step 1) ,add required water and cook for 5 - 7 minutes after the gravy boils add the cleaned and scored crabs, cover and cook for 15 - 20 minutes based on the size of your crab  Nandu-MasalaKing-Crab-Curry  Step 5) after the crabs are nicely cooked add some curry leaves for garnishing and serve "
    }
  ];
  const [dish, setDish] = useState(initialRecipe);
  const [title, setTitle] = useState("");
  const [src, setSrc] = useState("");
  const [list, setList] = useState("");
  const [prep, setPrep] = useState("");
  const addRecipe = () => setDish(dish.concat({ title, src, list, prep }));
  return (
    <div>
      <input
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Enter the dish name"
      />
      <input
        onChange={(event) => setSrc(event.target.value)}
        placeholder="Enter the image url"
      />
      <input
        onChange={(event) => setList(event.target.value)}
        placeholder="Enter the ingredient list"
      />
      <input
        onChange={(event) => setPrep(event.target.value)}
        placeholder="Enter the steps to make the dish"
      />
      <button onClick={addRecipe}>Add Recipe</button>

      {dish.map((details) => (
        <Recipe
          title={details.title}
          src={details.src}
          list={details.list}
          prep={details.prep}
        />
      ))}
    </div>
  );
}
function Recipe({ title, src, list, prep }) {
  const [expand, setExpand] = useState(false);
  return (
    <div
      className="App"
      style={{
        backgroundImage:
          "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
        width: "350px",
        position: "relative",
        left: "300px",
        margin: "50px",
        borderRadius: "10px",
        color: "white"
      }}
    >
      <h3 style={{ color: "black" }}>{title}</h3>
      <img
        src={src}
        alt={"no image found"}
        height={"130px"}
        style={{ borderRadius: "10px" }}
      />
      <h4 style={{ color: "black" }}>Ingredients</h4>
      <p>{list}</p>
      <h4 style={{ color: "black" }}>How to Make</h4>
      <button
        onClick={() => setExpand(!expand)}
        style={{ backgroundColor: "yellow", fontWeight: "bold" }}
      >
        Show{expand ? "less" : "more"}
      </button>
      {expand ? (
        <ul style={{ listStyleType: "upper-roman" }}>
          {prep.map((step) => (
            <li style={{ marginBottom: "10px" }}> {step} </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}
