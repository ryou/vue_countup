import _ from 'lodash';

export default {
  // 配列をシャッフル
  // 参考：https://qiita.com/artistan/items/9eb9a0fb14f4ec3a8764
  shuffle(array) {
    const tmpArray = _.cloneDeep(array);
    for (let i = 0; i < tmpArray.length; i += 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = tmpArray[i];
      tmpArray[i] = tmpArray[j];
      tmpArray[j] = tmp;
    }

    return tmpArray;
  },
};
