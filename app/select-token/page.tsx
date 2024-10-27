import WalletButtons from "@/components/global/buttons";
import Cards from "@/pages/Page";

export default function selectPage() {
    return <div className="block">
        <div className="buttons">
            <WalletButtons />
        </div>
        <div className="cards pt-10">
            <Cards />
        </div>
    </div>
}