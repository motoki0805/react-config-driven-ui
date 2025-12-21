import { useFormHandler } from '../hooks/useFormHandler';
import { projectLayoutConfig } from '../config/ProjectConfig';
import DynamicScreenTemplate from '../components/templates/DynamicScreenTemplate';

const ProjectPage = () => {
  const initialData = {
    projectName: '次世代ECサイト開発',
    projectCode: 'PJ-2025-X1',
    category: 'dev',
    startDate: '2025-04-01',
    endDate: '2026-03-31',
    budget: 12000000,
    isPublic: true,
    requireApproval: false,
    useSlack: true,
    isConfidential: false,
  };

  const { data, setData, onDefaultChange } = useFormHandler(initialData);

  const handlers = {
    onUpdate: () => {
      console.log('保存データ:', data);
      alert('プロジェクト設定を更新しました。');
    },
    onReset: () => {
      if (window.confirm('入力を初期状態に戻しますか？')) {
        setData(initialData);
      }
    },
  };

  return (
    <DynamicScreenTemplate
      title="プロジェクト詳細設定"
      config={projectLayoutConfig}
      data={data}
      handlers={handlers}
      onDefaultChange={onDefaultChange} // InputとCheckBoxの自動連動に必須
    />
  );
};

export default ProjectPage;
