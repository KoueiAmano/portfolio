## 技術構成　(実装予定)

### フロントエンド
- Framework: Next.js (App Router, TypeScript)
- UI: React 18
- スタイリング: Tailwind CSS

### インフラ・ホスティング
- ホスティング: Vercel
- CD（自動デプロイ）: Vercel と GitHub の連携による自動デプロイ  
  （main ブランチへの push で本番に自動反映）

### 開発環境
- パッケージマネージャ: npm
- バージョン管理: Git / GitHub
- Node.js: 18 以上（ローカル開発環境）

---

※ 以下は **今後追加予定の拡張項目** 

### 今後追加予定（Plan）
- CI: GitHub Actions による lint / test の自動実行
- バックエンド / データ永続化:
  - Supabase や自作 API（Rails）との連携
  - プロジェクト情報や活動ログの永続化
