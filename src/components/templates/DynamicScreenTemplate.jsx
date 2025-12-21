// 画面レイアウトの枠組みを動的に生成するテンプレートコンポーネント
import { Container } from 'react-bootstrap';
import SectionTable from '../organisms/SectionTable';
import SectionElement from '../organisms/SectionElement';
import { layoutStyle } from '../../config/ScreenConfig';

const DynamicScreenTemplate = ({ config, data, handlers, onDefaultChange, title }) => {
  return (
    <Container className={layoutStyle.containerPadding} fluid style={{ maxWidth: 'fit-content', margin: '0' }}>
      <h3>{title}</h3>
      <hr />

      {config.map((sectionConfig) => {
        // テーブルセクション
        if (sectionConfig.sectionType === 'table') {
          return (
            <div key={sectionConfig.id} className={layoutStyle.sectionSpacing}>
              <SectionTable config={sectionConfig} data={data} handlers={handlers} onDefaultChange={onDefaultChange} />
            </div>
          );
        }

        // エレメントセクション (ボタンやフリーエリア)
        if (sectionConfig.sectionType === 'element') {
          return (
            <div key={sectionConfig.id} className={layoutStyle.sectionSpacing}>
              <SectionElement config={sectionConfig} data={data} handlers={handlers} />
            </div>
          );
        }

        return null;
      })}
    </Container>
  );
};

export default DynamicScreenTemplate;
