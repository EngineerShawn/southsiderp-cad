import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslations } from "use-intl";

const management = ["CITIZENS", "COMPANIES"];
const types = ["GENDER", "ETHNICITY", "LICENSE", "WEAPON", "VEHICLE"];

export const AdminSidebar = () => {
  const t = useTranslations("Values");
  const man = useTranslations("Management");
  const router = useRouter();

  const isActive = (type: string) => {
    return typeof router.query.path === "string" && router.query.path.toUpperCase() === type;
  };

  return (
    <div className="w-60">
      <aside
        style={{ height: "calc(100vh - 5rem)" }}
        className="absolute w-60 left-0 -top-2 bg-gray-200 rounded-md py-2"
      >
        <section>
          <h1 className="text-2xl font-semibold px-3">{man("management")}</h1>
          <ul className="flex flex-col space-y-1.5 mt-3">
            {management.map((type) => (
              <li key={type} className="px-2">
                <Link href={`/admin/manage/${type.toLowerCase()}`}>
                  <a
                    className={`transition-colors rounded-md block px-4 py-1.5 hover:bg-gray-300 ${
                      isActive(type) && "bg-gray-300"
                    }`}
                  >
                    {man(`MANAGE_${type}`)}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-3">
          <h1 className="text-2xl font-semibold px-3">{t("values")}</h1>
          <ul className="flex flex-col space-y-1.5 mt-3">
            {types.map((type) => (
              <li key={type} className="px-2">
                <Link href={`/admin/values/${type.toLowerCase()}`}>
                  <a
                    className={`transition-colors rounded-md block px-4 py-1 hover:bg-gray-300 ${
                      isActive(type) && "bg-gray-300"
                    }`}
                  >
                    {t(`MANAGE_${type}`)}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </aside>
    </div>
  );
};
