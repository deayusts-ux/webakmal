export default function BentoStory() {
    return (
        <div className="glass-panel-dark rounded-[32px] col-span-1 md:col-span-2 p-8 flex flex-col justify-start relative overflow-hidden group min-h-[200px]">
            <div className="relative z-10">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">auto_stories</span>
                    A Short Story About Myself
                </h2>
                <div className="prose prose-invert prose-sm max-w-none text-slate-300 font-light leading-relaxed">
                    <p>
                        "Halo nama ku Akmal Faiz di Google sih artinya sempurna tapi ya aku tidak merasa begitu. Aku lahir pada 18 Februari 2009 orang sih banyak yang kaget yah karna aku sudah kelas 12 tetapi umur ku masih 16 hehehe. Hobi ku belajar hal baru ntah itu apalah pokonya dan suka bermain basket ataupun game sekalipun. Aku anak bungsu di keluarga ku, kami 4 bersaudara, 3 cowo 1 cewe.
                    </p>
                    <p className="mt-4">
                        Ngomong-ngomong aku adalah anak SMK dan aku juga mengambil jurusan akuntansi, di sekolah aku murid yang biasa biasa saja di bidang akademik tetapi aku sangat mahir di bilang nonakademik dan begitulah cerita singkat ku makasiii udah mau baca kwkwkwk gabut aja ini tengah malem."
                    </p>
                </div>
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
        </div>
    );
}
