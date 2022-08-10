import { defineComponent, ref } from 'vue';

const Test = defineComponent(() => {
  const count = ref(0);

  const inc = () => {
    count.value++;
  };

  return () => <div onClick={inc}>{count.value}</div>;
});

export default Test;
