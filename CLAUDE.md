# Project Task Board

このプロジェクトはタスク管理ボードアプリケーションです。

## プロジェクト概要

- **用途**: タスクの作成・管理・進捗追跡を行うタスクボードアプリ
- **学習目的**: AIスクール（侍エンジニア）スプリント課題

## Git 運用ルール

### 基本方針

コードを変更するたびに必ずGitHubへプッシュすること。

### 手順

1. **変更後は即コミット＆プッシュ**
   ```
   git add <変更ファイル>
   git commit -m "<変更内容を端的に説明するメッセージ>"
   git push origin main
   ```

2. **コミットメッセージの形式**
   - `feat: <機能追加の説明>`
   - `fix: <バグ修正の説明>`
   - `refactor: <リファクタリングの説明>`
   - `docs: <ドキュメント変更の説明>`
   - `style: <スタイル・フォーマット変更の説明>`
   - `test: <テスト追加・修正の説明>`

3. **ブランチ戦略**
   - `main`: 本番相当のブランチ。常に動作する状態を保つ
   - 機能追加は `feat/<機能名>` ブランチで作業し、完了後に `main` へマージ

4. **プッシュのタイミング**
   - 1つの機能・修正が完了したら都度プッシュ
   - 作業終了時には必ずプッシュ
   - Claude Codeがコードを変更した場合も毎回プッシュを実施

### Claude Code の Git 操作ルール

- コードファイルを変更・作成するたびに、変更をコミットしてGitHubへプッシュする
- `git push` は `main` ブランチへ行う（別途指示がある場合はその指示に従う）
- コミット前に `git status` と `git diff` で変更内容を確認する
- コミットメッセージには変更の「何を」「なぜ」を含める

## デプロイ先

- **GitHub Pages**: https://calcio10.github.io/task-board/
- **リポジトリ**: https://github.com/calcio10/task-board
- デプロイコマンド: `npm run deploy`（`gh-pages` ブランチへビルド成果物を公開）

## 技術スタック

| カテゴリ | 技術 | バージョン |
|---|---|---|
| UIライブラリ | React | ^18.3.1 |
| ビルドツール | Vite | ^6.3.5 |
| Reactプラグイン | @vitejs/plugin-react | ^4.3.4 |
| デプロイ | gh-pages | ^6.3.0 |
| 言語 | JavaScript (JSX) | - |
| スタイリング | CSS Modules (plain CSS) | - |
| データ永続化 | localStorage | - |

## コンポーネント命名規約

### ファイル名

- コンポーネントファイルは **PascalCase** + `.jsx` 拡張子
  - 例: `App.jsx`, `TaskList.jsx`, `TaskItem.jsx`
- スタイルファイルはコンポーネント名と同名の `.css`
  - 例: `App.css`, `TaskList.css`
- ユーティリティ・フック類は **camelCase** + `.js`
  - 例: `useLocalStorage.js`, `taskUtils.js`

### コンポーネント定義

- 関数コンポーネントのみ使用（クラスコンポーネントは使わない）
- コンポーネント名は **PascalCase**
- propsの変数名は **camelCase**

```jsx
function TaskItem({ taskId, text, done, onToggle, onDelete }) { ... }
```

### 変数・関数名

| 種別 | 規約 | 例 |
|---|---|---|
| state変数 | camelCase（名詞） | `tasks`, `input` |
| stateセッター | `set` + PascalCase | `setTasks`, `setInput` |
| イベントハンドラ | `handle` + 対象 + イベント | `handleKeyDown`, `handleSubmit` |
| 操作関数 | 動詞 + 対象 | `addTask`, `deleteTask`, `toggleTask` |

## 開発環境

- **OS**: Windows 11
- **Shell**: PowerShell / Bash
- **エディタ**: VS Code + Claude Code
- **Node.js**: v24

## コーディング規約

- コメントは必要最小限にとどめる（WHYが自明でない場合のみ）
- 関数・変数名は意図が伝わる命名にする
- セキュリティ上の脆弱性（XSS, SQLインジェクション等）を避ける
