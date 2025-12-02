// データとロジックを持つページ本体コンポーネント
import { useState } from 'react';
import { screenLayoutConfig } from '../config/ScreenConfig.jsx';
import DynamicScreenTemplate from '../components/templates/DynamicScreenTemplate';

const ContractPage = () => {
const initialData = {
    contractId: '404',
    contractName: 'テスト 太郎',
    contractDate: '2025/12/02',
    recipientId: '303',
    recipientName: 'テスト 太郎',
    tel: '000-0000-0000',
    department: 'テスト部',
  };

  // 状態管理定義
  const [tel, setTel] = useState(initialData.tel);

  // ハンドラー定義
  const handleTelChange = (e) => {
    setTel(e.target.value); // 入力された値でStateを更新
    console.log('現在の電話番号:', e.target.value);
  };

  const handleSave = () => {
    alert(`保存します: 電話番号 ${tel}`);
  };

  // ハンドラーを渡すためのオブジェクトを作成
  const handlers = {
    onTelChange: handleTelChange,
    onSave: handleSave,
  };

  // テンプレートに渡すデータを作成
  const currentData = {
    ...initialData,
    tel: tel,   // 初期データのうち、telだけはStateの最新値で上書きして渡す
  };

  return (
    <DynamicScreenTemplate
      title="契約詳細"             // タイトルを渡す
      config={screenLayoutConfig} // 画面構成設定を渡す
      data={currentData}          // データを渡す
      handlers={handlers}         // ハンドラーを渡す
    />
  );
};

export default ContractPage;