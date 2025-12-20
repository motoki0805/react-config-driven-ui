import { Form, Button, Badge } from 'react-bootstrap';

// 見積もり画面用のレイアウト定義
export const estimateLayoutConfig = [
  // セクション1: 見積基本情報
  {
    id: 'est_basic_info',
    sectionType: 'table',
    headerVariant: 'primary',
    fields: [
      { key: 'estimateId', label: '見積No', type: 'text', headerStyle: { width: '120px' } },
      { key: 'issueDate', label: '発行日', type: 'text', headerStyle: { width: '150px' } },
      { key: 'subject', label: '件名', type: 'text' },
      {
        key: 'status',
        label: '状態',
        type: 'element',
        headerStyle: { width: '100px' },
        element: (
          <Badge bg="warning" text="dark">
            下書き
          </Badge>
        ),
      },
    ],
  },

  // セクション2: 顧客情報
  {
    id: 'est_client_info',
    sectionType: 'table',
    headerVariant: 'primary',
    fields: [
      { key: 'clientName', label: '顧客名', type: 'text', headerStyle: { width: '250px' } },
      { key: 'contactPerson', label: '担当者名', type: 'text', headerStyle: { width: '150px' } },
      { key: 'email', label: 'メールアドレス', type: 'text' },
    ],
  },

  // セクション3: 明細 (入力欄あり)
  {
    id: 'est_details',
    sectionType: 'table',
    headerVariant: 'primary',
    fields: [
      { key: 'itemName', label: '品目', type: 'text', headerStyle: { width: '300px' } },
      {
        key: 'quantity',
        label: '数量',
        type: 'element',
        headerStyle: { width: '100px' },
        element: (data, handlers) => (
          <Form.Control
            type="number"
            size="sm"
            value={data.quantity}
            onChange={handlers.onQuantityChange}
            style={{ textAlign: 'right' }}
          />
        ),
      },
      { key: 'unitPrice', label: '単価', type: 'text', headerStyle: { width: '150px' }, style: { textAlign: 'right' } },
      {
        key: 'amount',
        label: '金額',
        type: 'text',
        headerStyle: { width: '150px' },
        style: { textAlign: 'right', fontWeight: 'bold' },
      },
    ],
  },

  //  セクション4: 合計金額など
  {
    id: 'est_summary',
    sectionType: 'table',
    headerVariant: 'primary',
    fields: [
      { key: 'subtotal', label: '小計', type: 'text', style: { textAlign: 'right' } },
      { key: 'tax', label: '消費税(10%)', type: 'text', style: { textAlign: 'right' } },
      {
        key: 'total',
        label: '合計金額',
        type: 'text',
        style: { textAlign: 'right', fontWeight: 'bold', fontSize: '1.1em' },
      },
    ],
  },

  // セクション5: アクションボタン
  {
    id: 'est_actions',
    sectionType: 'element',
    element: (data, handlers) => (
      <div className="d-flex justify-content-end gap-3">
        <Button variant="outline-secondary" onClick={handlers.onCancel}>
          キャンセル
        </Button>
        <Button variant="primary" size="lg" style={{ width: '200px' }} onClick={handlers.onSave}>
          見積書を発行
        </Button>
      </div>
    ),
  },
];
