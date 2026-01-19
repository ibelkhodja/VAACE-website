'use client';

import React from 'react';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';
import styles from './team.module.scss';
import type { TeamMember } from '@/app/utils/readCsv';

export default function TeamMember(member: TeamMember) {
    return (
    <div className={styles.teamMember}>
      <div className={styles.avatarContainer}>
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
          <div className={styles.avatarImage}>
            <Image
              src={member.headshot}
              alt={member.name}
              fill
              sizes="(max-width: 640px) 100px, (max-width: 1024px) 200px, 300px"
              style={{ objectFit: 'cover' }}
              onError={(e) => {
                e.currentTarget.src = '/team_images/default-avatar.jpg';
              }}
            />
          </div>
          <div>
            <FiExternalLink />
          </div>
        </a>
      </div>

      <div className={styles.memberInfo}>
        <h3>{member.name}</h3>
        <p className={styles.school}>{member.school}</p>
        <div className={styles.tags}>
          {member.subteams.map((subteam) => (
            <span key={subteam}>{subteam}</span>
          ))}
        </div>
      </div>

    </div>
    
  );
}