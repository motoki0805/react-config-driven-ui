// 画面定義ファイル
import { Form, Button } from 'react-bootstrap';

export const layoutStyle = {
  containerPadding: 'p-4',
  sectionSpacing: 'mb-4',
  headerStyle: 'align-middle text-start',
  cellPadding: 'p-2',
};

export const screenLayoutConfig = [
  // 1. テーブルセクション
  {
    id: 'section_contract',
    sectionType: 'table',
    headerVariant: 'success',
    fields: [
      { key: 'contractId', label: '契約ID', type: 'text', headerStyle: { width: '150px' } },
      { key: 'contractName', label: '契約者名', type: 'text', headerStyle: { width: '150px' } },
      { key: 'contractDate', label: '契約日', type: 'text', headerStyle: { width: '150px' } },
    ],
  },

  // 2. エレメントセクション (ボタン)
  {
    id: 'section_actions_1',
    sectionType: 'element',
    // handlersを受け取ってonClickに割り当て
    element: (data, handlers) => (
      <div className="d-flex justify-content-center gap-2">
        <Button variant="outline-primary" size="sm" onClick={handlers.onCopy}>
          契約内容をコピー
        </Button>
      </div>
    ),
  },

  // 3. テーブルセクション (入力あり)
  {
    id: 'section_recipient',
    sectionType: 'table',
    headerVariant: 'success',
    fields: [
      { key: 'recipientId', label: '受注者ID', type: 'text', headerStyle: { width: '120px' } },
      { key: 'recipientName', label: '受注者名', type: 'text', headerStyle: { width: '200px' } },
      {
        key: 'tel',
        label: '電話番号',
        type: 'element',
        headerStyle: { width: '200px' },
        element: (data, handlers) => (
          <Form.Control type="tel" size="sm" value={data?.tel || ''} onChange={handlers.onTelChange} />
        ),
      },
      { key: 'department', label: '部署', type: 'text', headerStyle: { width: '150px' } },
    ],
  },

  // 4. テーブルセクション (添付ファイル)
  {
    id: 'section_attachments',
    sectionType: 'table',
    headerVariant: 'success',
    fields: [
      {
        key: 'file1',
        label: '添付ファイル1',
        type: 'element',
        headerStyle: { width: '280px' },
        element: <Form.Control type="file" size="sm" />,
      },
      { type: 'spacer', width: '30px' },
      {
        key: 'file2',
        label: '添付ファイル2',
        type: 'element',
        headerStyle: { width: '320px' },
        element: <Form.Control type="file" size="sm" />,
      },
    ],
  },

  // 5. エレメントセクション (保存ボタン)
  {
    id: 'section_submit',
    sectionType: 'element',
    element: (data, handlers) => (
      <div className="d-flex justify-content-end">
        <Button variant="success" size="lg" style={{ width: '280px' }} onClick={handlers.onSave}>
          保 存
        </Button>
      </div>
    ),
  },
];
