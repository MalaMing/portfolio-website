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
            className="w-full h-[180px] md:h-[230px] lg:h-[280px] xl:h-[330px] 2xl:h-[380px] 3xl:h-[430px] 4xl:h-[480px] rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        >
        </iframe>
    );
}