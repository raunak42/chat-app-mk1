const resolvers = {
    Query: {
        searchUsers: () => {

        }
    },
    Mutation: {
        createUsername: (_: any, args: { username: string }, context: any) => {
            const { username } = args;
            console.log("Hey, at the API", username);
        }
    },
}

export default resolvers;