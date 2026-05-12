const UserTable = () => (
  <div className="rounded-3xl bg-slate-950 p-6 shadow-xl shadow-slate-950/40">
    <h3 className="text-xl font-semibold text-white">User Table</h3>
    <div className="mt-6 overflow-x-auto">
      <table className="min-w-full text-left text-sm text-slate-300">
        <thead className="border-b border-slate-800 text-slate-400">
          <tr>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Role</th>
            <th className="px-4 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-slate-800">
            <td className="px-4 py-4">Aarti</td>
            <td className="px-4 py-4">NGO</td>
            <td className="px-4 py-4">Verified</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)

export default UserTable
