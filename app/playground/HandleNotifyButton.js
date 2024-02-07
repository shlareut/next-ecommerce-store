'use client';

import React from 'react';
import { toast } from 'react-toastify';
import Button from '../components/Button';

export default function HandleNotifyButton() {
  const notify = () => toast('TEST');
  return <Button onClick={notify}>Add</Button>;
}
