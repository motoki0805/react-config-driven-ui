// エレメント(ボタン等)セクション用コンポーネント
const SectionElement = ({ config, data, handlers }) => {
  const content = typeof config.element === 'function' ? config.element(data, handlers) : config.element;

  return <div>{content}</div>;
};

export default SectionElement;
