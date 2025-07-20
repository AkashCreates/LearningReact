function App() {
  let foodlist = [
    "Biriyani",
    "Butter chicken",
    "Mutton curry",
    "Chicken chowmein",
    "Momo",
  ];

  return (
    <>
      <h1>Favourite Food</h1>
      <ul class="list-group">
        {foodlist.map((a, b, c) => (
          <li class="list-group-item">
            {a}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
