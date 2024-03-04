import { formatDistanceToNow, parseISO } from 'date-fns';

export const formatTimeAgo = (dateString: string) => {
    const isoDateString = dateString
        .replace(' ', 'T')
        .replace(/\s/g, '')
        .replace('+0000', '+00:00');
    const date = parseISO(isoDateString);
    return formatDistanceToNow(date, { addSuffix: true });
};
