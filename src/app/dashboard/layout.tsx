// src/app/dashboard/layout.tsx

import Link from "../../../node_modules/next/link";

export default function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  const isLoggedIn = true; // getting from database or session
  const role = 'admin'; // getting from database or session

  return (
    <>
      {isLoggedIn ? (
        <>
          <div>{children}</div>
          <div>{users}</div>
          {role === 'admin' && <div>{revenue}</div>}
          <div>{notifications}</div>
        </>
      ) : (
        <div>
          <Link href={`/login`} className='flex justify-center mt-14'>
            <div className="bg-green-500 p-4 rounded-lg w-fit flex justify-center">

            Login
            </div>
            </Link>
        </div>
      )}
    </>
  );
}
