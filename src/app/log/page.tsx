import { WorkoutSummary } from "@/components/common/workout-summary";
import { db } from "@/server/db";
export default async function LogPage() {
  // const posts = await db.query.posts.findMany();

  return (
    <div>
      <WorkoutSummary />

      {process.env.DATABASE_URL}
      {/* {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.name}</h2>
        </div>
      ))} */}
    </div>
  );
}
