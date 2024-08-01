import React, { useMemo } from "react";

const Transactions = ({ tableData }) => {
  return (
    <div className="flex flex-col relative transition-all duration-300">
    <div key={tableData} className="p-4 w-full">
      <h3 className="flex text-left font-bold bg-white p-2">
        Transaction History
      </h3>
      {tableData?.length ? (
        <div className="pl-4  h-[300px] overflow-auto">
          <div class="flex flex-col">
            <div class="-m-1.5 overflow-x-auto">
              <div class="p-1.5 min-w-full inline-block align-middle">
                <div class="overflow-hidden">
                  <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                    <thead className="">
                      <tr>
                        {Object.keys(tableData[0]?.data).map((key) => (
                          <th
                            key={key}
                            scope="col"
                            class="px-6 py-3 text-start text-xs text-gray-700 uppercase font-bold"
                          >
                            {key}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
                      {tableData.map((edge, i) => (
                        <tr key={edge.id}>
                          {Object.values(edge.data).map((value) => (
                            <td
                              key={value}
                              class="px-6 py-4 text-start text-sm font-medium text-gray-500 dark:text-neutral-500"
                            >
                              {value?.toString()}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
    </div>
  );
};

export default Transactions;
