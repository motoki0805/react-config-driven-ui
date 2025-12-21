import { useState, useCallback } from 'react';

/**
 * フォームの状態管理と汎用更新ロジックを提供する共通フック
 * @param {Object} initialData
 * @returns {Object} { data, setData, onDefaultChange }
 */
export const useFormHandler = (initialData) => {
  const [data, setData] = useState(initialData);

  // 指定されたキーに対応するStateの値を更新する汎用関数
  const onDefaultChange = useCallback((key, value) => {
    setData((prev) => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  return { data, setData, onDefaultChange };
};
