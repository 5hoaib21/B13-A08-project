'use client'

import { authClient } from '@/lib/auth-client';
import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  // console.log(user);
  return (
    <div>
       <Card  className="max-w-96  mx-auto flex flex-col items-center border border-zinc-200 shadow-xl mt-8 ">
  

      {user?.image &&   <Image
      className='object-cover rounded-xl shadow-xl' 
  height={260}
  width={260}
         src={user?.image}
         alt={user?.name || 'user'}
         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
         />}

      <h2 className='text-2xl font-bold'>{user?.name}</h2>
      <p className='text-muted text-xl'>{user?.email}</p>
     {/* <UpdateUserModal /> */}
     <Link href={'/update-profile'}>

     <Button>Update Profile</Button>
     </Link>
     </Card>
    </div>
  );
};

export default ProfilePage;