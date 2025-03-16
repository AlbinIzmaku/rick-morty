import Select from "@/app/[lng]/components/select";

export default function Filters({ setFilters, t }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex gap-3 mt-2">
      <Select name="status" handleChange={handleChange}>
        <option value="">{t("status.allStatus")}</option>
        <option value="Alive">{t("status.alive")}</option>
        <option value="Dead">{t("status.dead")}</option>
        <option value="unknown">{t("status.unknown")}</option>
      </Select>

      <Select name="species" handleChange={handleChange}>
        <option value="">{t("species.allSpecies")}</option>
        <option value="Human">{t("species.human")}</option>
        <option value="Alien">{t("species.alien")}</option>
      </Select>
    </div>
  );
}
