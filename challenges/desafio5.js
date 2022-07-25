db.produtos.find({ $or: [
  { vendidos: { $eq: 85 } },
  { curtidas: { $eq: 36 } },
] },
{ nome: 1, curtidas: 1, vendidos: 1, _id: 0 });