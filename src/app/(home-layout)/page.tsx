'use client';
import { AboveFold, CardSession } from '@/components';
import Conllection from '@/components/sliders/collections';
import Arrivals from '@/layouts/home/arrivals';
import CollectionSession from '@/layouts/home/collections';
import Sales from '@/layouts/home/sales';

export default function Home() {
    return (
        <section>
            <AboveFold />
            <CollectionSession />
            <Arrivals />
            <Sales />

            <CardSession title="COLLECTIONS">
                <Conllection />
            </CardSession>
        </section>
    );
}
