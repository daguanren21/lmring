const Configuration = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [0],
  },
  ignores: [(message: string) => message.startsWith('chore: bump')],
};

export default Configuration;
