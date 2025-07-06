import React, { FC } from 'react';
import { Badge } from '@/components/ui';
import { BsRobot } from 'react-icons/bs';
import { Role } from '@/enums';
import { Message as MessageType } from '@/types';

export const Message: FC<MessageType> = ({ text, role }) => (
  <div className={`flex mb-4 ${role === Role.ASSISTANT ? 'justify-end' : 'justify-start'}`}>
    <Badge
      variant={role === Role.ASSISTANT ? 'secondary' : 'outline'}
      className="inline-block px-3 py-2 max-w-full break-words whitespace-break-spaces shadow-lg text-xs sm:text-sm text-foreground/80 text-justify"
    >
      {role === Role.ASSISTANT && <BsRobot className="inline mb-1 mr-2" />}
      {text}
    </Badge>
  </div>
);
