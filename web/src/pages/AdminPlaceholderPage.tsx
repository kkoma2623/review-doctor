import { PlaceholderPanel } from "../components/organisms/AdminSections";
import { AdminConsoleTemplate } from "../components/templates/AdminConsoleTemplate";

interface AdminPlaceholderPageProps {
  title: string;
  description: string;
}

function AdminPlaceholderPage({ title, description }: AdminPlaceholderPageProps) {
  return (
    <AdminConsoleTemplate title={title} description="추가 관리 기능을 같은 템플릿 위에 이어서 확장할 수 있습니다.">
      <PlaceholderPanel title={title} description={description} />
    </AdminConsoleTemplate>
  );
}

export default AdminPlaceholderPage;
