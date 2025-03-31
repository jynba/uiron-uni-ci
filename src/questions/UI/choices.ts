import { green, trueColor as rgb } from 'kolorist';
import type { ModelType } from '../type';

export const UIList: ModelType[] = [
  {
    title: '不需要组件库',
    description: '',
    value: null,
  },
  {
    title: green('Uni UI'),
    description: 'UniApp官方组件库',
    value: 'uni',
  },
  {
    title: rgb(77, 128, 240)('wot-design-uni'),
    description: '高颜值、轻量化的uni-app组件库',
    value: 'wot',
  },
  {
    title: rgb(250, 44, 25)('nutui-uniapp'),
    description: '京东风格的轻量级移动端组件库',
    value: 'nut',
  },
  {
    title: rgb(60, 156, 255)('uv-ui'),
    description: '多平台快速开发的UI框架',
    value: 'uv',
  },
];
