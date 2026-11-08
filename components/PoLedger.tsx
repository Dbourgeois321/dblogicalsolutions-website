type Status = "late" | "unconfirmed" | "due" | "received";

const statusStyle: Record<Status, { label: string; className: string }> = {
  late: { label: "Late", className: "bg-late text-white" },
  unconfirmed: {
    label: "Not confirmed",
    className: "border border-due bg-white text-due",
  },
  due: { label: "Due soon", className: "bg-due-bg text-due" },
  received: { label: "Received", className: "bg-ok-bg text-ok" },
};

const rows: { po: string; supplier: string; status: Status; note: string }[] = [
  {
    po: "PO-1042",
    supplier: "Bar stock supplier",
    status: "late",
    note: "3 days past due",
  },
  {
    po: "PO-1047",
    supplier: "Fastener supplier",
    status: "unconfirmed",
    note: "Reminder sent yesterday",
  },
  {
    po: "PO-1051",
    supplier: "Plating vendor",
    status: "due",
    note: "Due in 2 days",
  },
  {
    po: "PO-1038",
    supplier: "Steel service center",
    status: "received",
    note: "Received in full",
  },
];

export default function PoLedger() {
  return (
    <figure className="relative mb-4 mr-4">
      {/* Carbon copies peeking out from behind the top sheet */}
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-4 translate-y-4 bg-carbon-pink"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 translate-x-2 translate-y-2 bg-carbon-yellow"
      />

      <div className="relative border border-rule bg-sheet shadow-sm">
        <div className="flex items-baseline justify-between gap-4 border-b border-rule px-4 py-3">
          <p className="display text-2xl">Purchase orders that need you</p>
          <p className="shrink-0 text-xs text-mute">Sample data</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <caption className="sr-only">
              Sample purchase orders and their status
            </caption>
            <thead>
              <tr className="border-b border-rule text-mute">
                <th scope="col" className="px-4 py-2 font-medium">
                  PO
                </th>
                <th scope="col" className="px-4 py-2 font-medium">
                  Supplier
                </th>
                <th scope="col" className="px-4 py-2 font-medium">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => {
                const style = statusStyle[row.status];

                return (
                  <tr
                    key={row.po}
                    className="border-b border-rule align-top last:border-0"
                  >
                    <td className="whitespace-nowrap px-4 py-3 font-mono text-[13px]">
                      {row.po}
                    </td>
                    <td className="px-4 py-3">{row.supplier}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block rounded-[2px] px-2 py-0.5 text-xs font-semibold ${style.className}`}
                      >
                        {style.label}
                      </span>
                      <span className="mt-1 block text-xs text-mute">
                        {row.note}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <figcaption className="relative mt-6 text-sm text-mute">
        An example of the view MaterialFlow is being built to give you. The
        suppliers and numbers are made up.
      </figcaption>
    </figure>
  );
}
