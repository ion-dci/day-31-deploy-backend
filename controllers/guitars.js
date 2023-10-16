import Guitar from "../models/Guitar.js";

export async function searchByBrand(req, res) {
  try {
    const { searchParam, limit, skip } = req.query;

    const guitars = searchParam
      ? await Guitar.find({ brand: searchParam }).limit(limit).skip(skip)
      : await Guitar.find().limit(limit).skip(skip); // an empty query, returns EVERYTHING

    res.send(guitars);
  } catch (error) {
    res.status(500).send("There was error processing your request");
    console.log(error);
  }
}
