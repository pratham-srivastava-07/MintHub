// src/global.d.ts
interface Window {
    solana: {
        connect: () => Promise<{ publicKey: { toString: () => string } }>;
        disconnect?: () => Promise<void>; // Optional, if you want to support disconnection
        // Add other Phantom wallet methods if needed
    };
}
