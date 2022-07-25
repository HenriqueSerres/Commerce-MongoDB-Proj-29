db.produtos.find({ valoresNutricionais: { $elemMatch: {
  tipo: { $eq: "proteínas" },
  quantidade: { $lte: 40, $gte: 30 },
} } },
{ nome: 1, _id: 0 });