import { useState } from 'react';
import ContractPage from './pages/ContractPage';
import EstimatePage from './pages/EstimatePage';
import ProjectPage from './pages/ProjectPage';

function App() {
  const [currentPage, setCurrentPage] = useState('contract');

  return (
    <div className="App">
      <div className="bg-light p-3 border-bottom mb-4 d-flex gap-2">
        <button
          className={`btn ${currentPage === 'contract' ? 'btn-success' : 'btn-outline-success'}`}
          onClick={() => setCurrentPage('contract')}
        >
          契約詳細
        </button>
        <button
          className={`btn ${currentPage === 'estimate' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setCurrentPage('estimate')}
        >
          見積詳細
        </button>
        <button
          className={`btn ${currentPage === 'project' ? 'btn-dark' : 'btn-outline-dark'}`}
          onClick={() => setCurrentPage('project')}
        >
          プロジェクト設定
        </button>
      </div>

      {/* ページの条件付きレンダリング */}
      {currentPage === 'contract' && <ContractPage />}
      {currentPage === 'estimate' && <EstimatePage />}
      {currentPage === 'project' && <ProjectPage />}
    </div>
  );
}

export default App;
