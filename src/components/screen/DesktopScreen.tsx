"use client";

interface DesktopScreenProps {
    videoSrc?: string;
}

export default function DesktopScreen({ videoSrc }: DesktopScreenProps) {
    const getEmbedUrl = (url: string) => {
        if (!url) return '';
        
        let embedUrl = '';
        
        if (url.includes('youtu.be/')) {
            const videoId = url.split('youtu.be/')[1].split('?')[0];
            embedUrl = `https://www.youtube.com/embed/${videoId}`;
        } else if (url.includes('youtube.com/embed/')) {
            embedUrl = url;
        } else {
            embedUrl = url;
        }
        
        const separator = embedUrl.includes('?') ? '&' : '?';
        return `${embedUrl}${separator}autoplay=1&mute=1&loop=1&controls=0`;
    };

    return (
        <iframe
            src={getEmbedUrl(videoSrc || '')}
            title="Project demo video"
            className="w-full h-45 md:h-57.5 lg:h-70 xl:h-82.5 2xl:h-95 3xl:h-[430px] 4xl:h-[480px] rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
        >
        </iframe>
    );
}