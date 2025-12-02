// テーブルセクション用コンポーネント
import { Table } from 'react-bootstrap';
import { layoutStyle } from '../../config/ScreenConfig';

const tableStyle = {
  marginBottom: '0',
  backgroundColor: 'transparent',
  width: 'fit-content',
};

const headerStyleBase = {
  border: '1px solid #000',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',
};

const cellStyleBase = {
  border: '1px solid #000',
  borderTop: 'none',
  verticalAlign: 'middle',
  backgroundColor: '#fff',
};

// コンテンツ描画ロジック
const renderCellContent = (field, data, handlers) => {
  // 1. スペーサー
  if (field.type === 'spacer') return null;

  // 2. エレメント (JSX または 関数)
  if (field.type === 'element') {
    if (typeof field.element === 'function') {
      // 関数なら data と handlers を渡して実行
      return field.element(data, handlers);
    }
    return field.element;
  }

  // 3. 通常テキスト
  const value = data && data[field.key] ? data[field.key] : '';
  return value || '-';
};

const SectionTable = ({ config, data, handlers }) => {
  const { headerVariant, fields } = config;

  return (
    <Table size="sm" style={tableStyle}>
      <thead>
        <tr>
          {fields.map((field, index) => {
            const isSpacer = field.type === 'spacer';

            const mergedHeaderStyle = isSpacer 
              ? { background: 'transparent', width: field.width } 
              : { 
                  ...headerStyleBase, 
                  ...field.headerStyle, 
                  ...(field.width ? { width: field.width } : {}) 
                };

            const mergedHeaderClass = isSpacer
              ? 'p-0 border-0'
              : `bg-${headerVariant} text-white ${layoutStyle.headerStyle} ${field.headerClassName || ''}`;

            return (
              <th
                key={field.key || `spacer-${index}`}
                className={mergedHeaderClass}
                style={mergedHeaderStyle}
              >
                {!isSpacer && field.label}
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody>
        <tr>
          {fields.map((field, index) => {
            const isSpacer = field.type === 'spacer';

            const mergedCellStyle = isSpacer
              ? { background: 'transparent' }
              : { 
                  ...cellStyleBase, 
                  ...field.style 
                };

            const mergedCellClass = isSpacer
              ? 'p-0 border-0'
              : `${layoutStyle.cellPadding} ${field.className || ''}`;

            return (
              <td
                key={field.key || `spacer-${index}`}
                className={mergedCellClass}
                style={mergedCellStyle}
              >
                {renderCellContent(field, data, handlers)}
              </td>
            );
          })}
        </tr>
      </tbody>
    </Table>
  );
};

export default SectionTable;