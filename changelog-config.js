module.exports = {
    writerOpts: {
      transform: (commit, context) => {
        if (commit.type === "chore") {
          // 这里稍微改动一下
          commit.type = "  Chore";
        }
  
        return commit;
      },
    },
  };