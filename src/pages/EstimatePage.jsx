import { useFormHandler } from '../hooks/useFormHandler';
import { estimateLayoutConfig } from '../config/EstimateConfig.jsx';
import DynamicScreenTemplate from '../components/templates/DynamicScreenTemplate';

const EstimatePage = () => {
  // 1. テスト用モックデータ
  const initialData = {
    estimateId: 'EST-2025-001',
    issueDate: '2025/12/03',
    subject: '【テスト案件】社内システム改修工事のお見積り',
    status: 'draft',

    // 顧客情報
    clientName: '株式会社 サンプル商事',
    contactPerson: '見本 一郎 様',
    email: 'sample@example.com',

    // 明細
    itemName: 'サーバー構築費用一式 (テスト)',
    quantity: 1,
    unitPrice: '¥500,000',
    amount: '¥500,000',

    // 合計
    subtotal: '¥500,000',
    tax: '¥50,000',
    total: '¥550,000',
  };

  // 状態管理定義
  const { data, onDefaultChange } = useFormHandler(initialData);

  // ハンドラー定義
  const handlers = {
    onSave: () => {
      alert(`保存します:\n${JSON.stringify(data, null, 2)}`);
    },
    onCancel: () => {
      alert('入力を破棄して戻ります。');
    },
  };

  return (
    // prettier-ignore
    <DynamicScreenTemplate
      title="見積詳細画面"               // 画面構成設定を渡す
      config={estimateLayoutConfig}     // 画面構成設定を渡す
      data={data}                       // テストデータを渡す
      handlers={handlers}               // ロジックを渡す
      onDefaultChange={onDefaultChange} // 汎用ハンドラを渡す
    />
  );
};

export default EstimatePage;
