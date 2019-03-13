import { prisma } from './generated/prisma-client'

async function main() {
  const newUser = await prisma
    .createUser({
      name: "Alice",
      email: "alice.wang@gmail.com",
      posts: {
        create: {
          title: "The data layer for modern apps",
        }
      },
    })
  console.log("Created new user: ${newUser.name} (ID: ${newUser.id})");

  // 从数据库中读取所有文章post并将其打印到控制台
  const allUsers = await prisma.users();
  console.log(allUsers);

  // 从数据库中读取所有文章post并将其打印打控制台
  const allPosts = await prisma.posts();
  console.log(allPosts);
}
main().catch(e => console.error(e))
