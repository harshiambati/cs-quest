import { SkyRider } from './icons.jsx';

// picks up src/assets/rider if present; otherwise uses the built-in rider

const custom = import.meta.glob('./assets/rider.{png,svg,webp,gif,jpg}' , {
    eager: true,
    query: '?url',
    import: 'default',
});

const customUrl = Object.values(custom)[0];

export default function Rider() {
    if(!customUrl) return <SkyRider />;
    return (
        <img 
            src = {customUrl}
            alt="flyingAppa"
            style={{display: 'block', 
                    height: 80, 
                    width: 'auto',
                    maxWidth: 200, 
                    objectFit: 'contain'
                }}
        />
    );
}