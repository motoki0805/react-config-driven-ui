import { Table, Form } from 'react-bootstrap';
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

const SectionTable = ({ config, data, handlers, onDefaultChange }) => {
  const { headerVariant, fields } = config;

  // 各セルの中身を描画する関数
  const renderCellContent = (field, rowData) => {
    const { type, key, onChangeKey } = field;

    // ハンドラの優先順位判定
    const handleChange = (newValue) => {
      if (onChangeKey && handlers?.[onChangeKey]) {
        // 独自ハンドラ (Configに onChangeKey がある場合)
        handlers[onChangeKey](newValue, rowData);
      } else if (onDefaultChange) {
        // デフォルトハンドラ (上記がなく onDefaultChange がある場合)
        onDefaultChange(key, newValue);
      }
    };

    switch (type) {
      // インプット
      case 'input':
        return (
          <Form.Control
            type={field.inputType || 'text'}
            size="sm"
            value={rowData[key] ?? ''}
            onChange={(e) => handleChange(e.target.value)}
            style={field.style}
          />
        );
      // セレクトボックス
      case 'select':
        return (
          <Form.Select
            size="sm"
            value={rowData[key] ?? ''}
            onChange={(e) => handleChange(e.target.value)}
            style={field.style}
          >
            {field.options?.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Form.Select>
        );
      // チェックボックス
      case 'checkbox':
        return <Form.Check type="checkbox" checked={!!rowData[key]} onChange={(e) => handleChange(e.target.checked)} />;
      // カスタムエレメント
      case 'element':
        return typeof field.element === 'function' ? field.element(rowData, handlers) : field.element;
      // スペーサー
      case 'spacer':
        return null;
      // テキスト
      case 'text':
      default:
        return <span style={field.style}>{rowData[key] || '-'}</span>;
    }
  };

  return (
    <Table size="sm" style={tableStyle}>
      <thead>
        <tr>
          {fields.map((field, index) => {
            const isSpacer = field.type === 'spacer';
            const mergedHeaderStyle = isSpacer
              ? { background: 'transparent', width: field.width }
              : { ...headerStyleBase, ...field.headerStyle, ...(field.width ? { width: field.width } : {}) };

            const mergedHeaderClass = isSpacer
              ? 'p-0 border-0'
              : `bg-${headerVariant} text-white ${layoutStyle.headerStyle} ${field.headerClassName || ''}`;

            return (
              <th key={field.key || `header-${index}`} className={mergedHeaderClass} style={mergedHeaderStyle}>
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
            const mergedCellStyle = isSpacer ? { background: 'transparent' } : { ...cellStyleBase, ...field.style };
            const mergedCellClass = isSpacer ? 'p-0 border-0' : `${layoutStyle.cellPadding} ${field.className || ''}`;

            return (
              <td key={field.key || `cell-${index}`} className={mergedCellClass} style={mergedCellStyle}>
                {renderCellContent(field, data)}
              </td>
            );
          })}
        </tr>
      </tbody>
    </Table>
  );
};

export default SectionTable;
