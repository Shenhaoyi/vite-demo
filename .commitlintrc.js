// .commitlintrc.js
module.exports = {
  extends: ['cz'],
  rules: {
    // <type> 不能为空
    'type-empty': [2, 'never'],
    // <type> 格式 小写
    'type-case': [2, 'always', 'lower-case'],
    // <subject> 不能为空
    'subject-empty': [2, 'never'],
  },
};
