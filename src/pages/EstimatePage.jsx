import { useState } from 'react';
import { estimateLayoutConfig } from '../config/EstimateConfig.jsx';
import DynamicScreenTemplate from '../components/templates/DynamicScreenTemplate';

const EstimatePage = () => {
  // 1. テスト用モックデータ
  const initialData = {
    // 基本情報
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
  const [data, setData] = useState(initialData);

  // ハンドラー定義
  const handleQuantityChange = (e) => {
    const newQty = e.target.value;
    console.log('数量変更:', newQty);
    setData({ ...data, quantity: newQty });
  };

  const handleSave = () => {
    alert('見積データを保存しました。\n(これはテスト動作です)');
  };

  const handleCancel = () => {
    alert('入力を破棄して戻ります。');
  };

  // ハンドラーを渡すためのオブジェクトを作成
  const handlers = {
    onQuantityChange: handleQuantityChange,
    onSave: handleSave,
    onCancel: handleCancel,
  };

  return (
    // prettier-ignore
    <DynamicScreenTemplate
      title="見積詳細画面"             // 画面構成設定を渡す
      config={estimateLayoutConfig}   // 画面構成設定を渡す
      data={data}                     // テストデータを渡す
      handlers={handlers}             // ロジックを渡す
    />
  );
};

export default EstimatePage;
