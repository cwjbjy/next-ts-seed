//在window上添加自定义属性
declare interface Window {
  custom: any;
}

//外部模块声明，已支持未使用Typescript的第三方库
declare module 'react-beautiful-dnd';
