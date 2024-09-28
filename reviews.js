import sql from './db.js'

async function getReviews() {
  const reviews = await sql`
    select
      id
      username,
      feedback
    from reviews;
  `
  // reviews = Result [{ username: "Walter", feedback: "Great job!" }, { username: 'Murray', feedback: "Will call again!" }, ...]
  return reviews
}


async function insertReview({ username, feedback }) {
  const reviews = await sql`
    insert into reviews
      (username, feedback)
    values
      (${ username }, ${ feedback })
    returning username, feedback
  `
  // reviews = Result [{ username: "Murray", feedback: "Great job!" }]
  return reviews
}