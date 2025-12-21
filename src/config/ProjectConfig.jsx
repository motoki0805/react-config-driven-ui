export const projectLayoutConfig = [
  // セクション1: 基本設定
  {
    id: 'proj_base',
    sectionType: 'table',
    headerVariant: 'dark',
    fields: [
      { key: 'projectName', label: 'プロジェクト名', type: 'input', headerStyle: { width: '300px' } },
      { key: 'projectCode', label: '案件コード', type: 'text', headerStyle: { width: '150px' } },
      {
        key: 'category',
        label: 'カテゴリ',
        type: 'select',
        options: [
          { label: '開発', value: 'dev' },
          { label: '保守', value: 'maint' },
          { label: 'コンサル', value: 'cons' },
        ],
      },
    ],
  },
  // セクション2: スケジュールと予算
  {
    id: 'proj_schedule',
    sectionType: 'table',
    headerVariant: 'dark',
    fields: [
      { key: 'startDate', label: '開始予定日', type: 'input', inputType: 'date' },
      { key: 'endDate', label: '終了予定日', type: 'input', inputType: 'date' },
      { key: 'budget', label: '予算額', type: 'input', inputType: 'number', style: { textAlign: 'right' } },
    ],
  },
  // セクション3: 運用オプション
  {
    id: 'proj_options',
    sectionType: 'table',
    headerVariant: 'secondary',
    fields: [
      { key: 'isPublic', label: '社内公開', type: 'checkbox' },
      { key: 'requireApproval', label: '承認必須', type: 'checkbox' },
      { key: 'useSlack', label: 'Slack通知', type: 'checkbox' },
      { key: 'isConfidential', label: '機密案件', type: 'checkbox' },
    ],
  },
  // セクション4: アクション
  {
    id: 'proj_actions',
    sectionType: 'element',
    element: (data, handlers) => (
      <div className="d-flex justify-content-end gap-2 mt-3">
        <button className="btn btn-outline-danger" onClick={handlers.onReset}>
          設定をリセット
        </button>
        <button className="btn btn-dark" style={{ width: '200px' }} onClick={handlers.onUpdate}>
          設定を更新
        </button>
      </div>
    ),
  },
];
