import { SpotlightProvider, spotlight } from '@mantine/spotlight';
import type { SpotlightAction } from '@mantine/spotlight';
import { IconSearch, IconUser, IconExclamationCircle, IconMap, IconUsersGroup } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

export function Spotlight() {
  const navigate = useNavigate()

  const actions: SpotlightAction[] = [
    {
      title: 'Characters',
      onTrigger: () => navigate('characters'),
      icon: <IconUser size="1.2rem" />,
    },
    {
      title: 'Locations',
      onTrigger: () => navigate('locations'),
      icon: <IconMap size="1.2rem" />,
    },
    {
      title: 'Quests',
      onTrigger: () => navigate('quests'),
      icon: <IconExclamationCircle size="1.2rem" />,
    },
    {
      title: 'Factions',
      onTrigger: () => navigate('factions'),
      icon: <IconUsersGroup size="1.2rem" />,
    },
  ];

  return (
    <SpotlightProvider
      actions={actions}
      searchIcon={<IconSearch size="1.2rem" />}
      searchPlaceholder="Search..."
      shortcut="mod + shift + space"
      nothingFoundMessage="Nothing found..."
    >
      <IconSearch aria-labelledby="Open Spotlight Search" className='cursor-pointer stroke-white' onClick={() => spotlight.open()} role="img" />
    </SpotlightProvider>
  );
}