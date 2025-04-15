db.i.drop();
db.i.insertMany([
  {n:"A",c:"X",p:100,q:5},
  {n:"B",c:"X",p:200,q:10},
  {n:"C",c:"Y",p:50,q:20}
]);

db.v.drop();
db.v.insertMany([{_id:1,n:"V1",c:["X"]},{_id:2,n:"V2",c:["Y"]}]);

print("1.Match/Group: " + JSON.stringify(db.i.aggregate([
  {$match: {p: {$gt: 50}}},
  {$group: {_id: "$c", avgPrice: {$avg: "$p"}}}
]).toArray()));

print("2.Project: " + JSON.stringify(db.i.aggregate([
  {$project: {n: 1, totalPrice: {$multiply: ["$p", "$q"]}}}
]).toArray()));

print("3.Unwind: " + JSON.stringify(db.i.aggregate([
  {$unwind: "$t"},
  {$group: {_id: "$t", count: {$sum: 1}}}
]).toArray()));

print("4.Lookup: " + JSON.stringify(db.i.aggregate([
  {$lookup: {from: "v", localField: "c", foreignField: "c", as: "s"}}
]).toArray()));

print("5.Facet: " + JSON.stringify(db.i.aggregate([
  {$facet: {
    "categoryCount": [{$group: {_id: "$c", count: {$sum: 1}}}],
    "priceRange": [{$bucket: {groupBy: "$p", boundaries: [0, 100, 300], default: "Other"}}]
  }}
]).toArray()));