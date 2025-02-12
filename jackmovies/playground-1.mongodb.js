use ("college")

db.grades.insertOne({
    "student_id" : 50,
    "class_id" : 28,
    "scores" : [
      { "type" : "exam", "score" : 58.6 },
      { "type" : "quiz", "score" : 22.4 },
      { "type" : "homework", "score" : 74.2 },
      { "type" : "homework", "score" : 68.3 },
      { "type" : "homework", "score" : 17.92 }
    ] });