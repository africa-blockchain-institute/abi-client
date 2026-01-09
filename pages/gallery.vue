<template>
    <div class="wrapper">
        <!-- hero section starts -->
        <Hero :title="hero.title" :desc="hero.desc" :image="hero.image" />
        <!-- hero section ends -->

        <div class="gallery">
            <div class="container">
                 <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936283/IMG_0942_xauvxq.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936244/IMG_6962_prjd2c.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936243/IMG_0878_qp9kdv.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936243/IMG_0882_igbaej.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936094/_MG_0344_uwcpn7.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936093/5Y6A2655_ramdqb.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936094/gallery-2.5e005f8_ocekx1.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936092/F2iENgTWUAAnox-_nad8du.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936092/DV5A2726_koztsf.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936091/DV5A2699_vs6tuc.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936090/DV5A2418_erhczm.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936091/DV5A2496_ug6bvr.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936090/DV5A2457_mtujbv.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936089/ALA_8934_e2j1av.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936089/5Y6A2396_i3cbmj.jpg" class="img-fluid" />
                        </div>
                    </div>
                    
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936086/ALA_8899_zumthj.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936087/ALA_8850_kgvij7.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936084/ALA_8726_esfmxm.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936082/5Y6A2248_iuwk7s.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936065/5Y6A1833_d2nt8f.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936075/5Y6A2351_om7c1u.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936068/5Y6A1735_dmojr1.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936062/5Y6A2284_dhcn2k.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936060/5Y6A2236_u6p2cs.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936054/5Y6A1821_dgikwt.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936054/5Y6A1471_bgmq1f.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936052/5Y6A1611_yhtkyr.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936051/5Y6A1331_hd9y4y.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936048/5Y6A1599_t75kpy.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936048/5Y6A1480_gsiqta.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936049/5Y6A1315_ffrm1t.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936041/5Y6A1436_fmakkx.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936042/5Y6A1270_s7qw4x.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936041/5Y6A1384_mdpwlj.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936040/5Y6A1421_jq5ix8.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936040/5Y6A1389_a3pzr4.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936039/5Y6A1377_iprlza.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936038/5Y6A1282_co565f.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936038/5Y6A1375_ymnd0r.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936037/5Y6A1359_tpimfc.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936034/5Y6A1312_zhh7me.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936035/5Y6A1259_s02z1j.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936034/5Y6A1234_zjofbz.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936027/0Q0A9614_y1gcxm.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936027/0Q0A9639_qurd0h.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936026/0Q0A9535_iqrjam.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936025/0Q0A8676_ttm6bg.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936025/0Q0A8779_dtpree.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936025/0Q0A8730_dqnk8f.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936024/0Q0A0320_s3n2of.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936023/0Q0A0043_ip6wtz.jpg" class="img-fluid" />
                        </div>
                    </div>
                    
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936023/0Q0A0076_agayvg.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936023/0Q0A0179_ys7i52.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936022/kai_studios_111_nrgodm.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936022/0Q0A0012_yxmrov.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936022/kai_studios_105_srsusp.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936021/kai_studios_104_kywzhd.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936019/kai_studios_10_vpmtdq.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936021/kai_studios_84_znvytd.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936019/_MGL7077_dlfog2.jpg" class="img-fluid" />
                        </div>
                    </div>
                    
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936018/_MGL6826_yjxik6.jpg" class="img-fluid" />
                        </div>
                    </div>
                    
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936018/_MG_2611_pj7epc.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936018/_MG_2577_pboicd.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936016/_MG_2555_idclnn.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936016/_MG_0320_uukpuf.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936016/_MG_2523_xzniq4.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936015/_MG_0115_jyqp0l.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936012/_MG_1936_mqfc7z.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936013/_MG_2021_bps79t.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936011/_MG_1932_visi68.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936014/_MG_2306_einhuh.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936015/_MG_0296_wcvamd.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936014/_MG_2416_o5jbvn.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936009/_MG_0519_yfdwgo.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936008/_MG_0290_xwx9tw.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936006/_MG_0345_mer4i5.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1767797195/AH9A0013_pdiqgv.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1767796898/0Q0A8830_azfqcg.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936027/0Q0A9879_h07lc0.jpg" class="img-fluid" />
                        </div>
                    </div>
                    
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936025/0Q0A8620_mbeypv.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936018/kai_studios_5_qfmrtx.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936089/DV5A2336_2_exajof.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1767975605/0Q0A9957_yh7prx.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936021/kai_studios_80_nvqoqj.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936097/20230802_130704_ls3fpg.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936024/0Q0A0172_uta8nz.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936008/_MG_0510_paluar.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1766936006/_MG_0355_ygll2o.jpg" class="img-fluid" />
                        </div>
                    </div>

                    <!--  -->
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1767975250/photo_5994796781050904074_y_rqti0e.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1767975228/RM1L5494_vpbshh.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1767975218/Picture_4_q2wylu.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1767975205/IMG_2290_vh93li.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1767975196/IMG_20231128_171000_q8jusc.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1767975137/unnamed_22_v8wj21.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1767975105/unnamed_14_c9ovt7.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1767975091/unnamed_11_kre847.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1767975080/unnamed_28_iakrw5.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1767975071/20231206_171229_ldxgiu.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1767975057/113_eyuvxq.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1767974993/unnamed_5_kgh39e.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1767965623/photo_5997081231205974534_y_y4ypyd.jpg" class="img-fluid" />
                        </div>
                    </div>
                    <div class="col gallery__list">
                        <div class="card">
                            <img src="https://res.cloudinary.com/dnteyhwjn/image/upload/v1767975316/unnamed_26_xzorky.jpg" class="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Hero from '~/components/reusable/Hero.vue';

    export default {
        head(){
            return{
                title: 'Gallery -  Africa Blockchain Institute',
                meta: [
                    {
                        name: 'Gallery',
                        content: 'Gallery'
                    }
                ],
            }
        },

        data(){
            return{
                hero:{
                    title: "Gallery",
                    image: "impact/gallery",
                    desc: "See photos from our events, workshops, and community engagements that showcase the vibrant ecosystem of blockchain innovation in Africa.",
                }
            }
        },

        components: {
            Hero,
        },
    }
</script>

<style lang="scss" scoped>
    .wrapper {
        .gallery {
            padding: 2rem 1rem;

            &__list {
                margin-bottom: 2rem;

                .card {
                    border: none;
                    border-radius: 0.5rem;
                    overflow: hidden;

                    img {
                        width: 100%;
                        height: auto;
                        border-radius: 0.5rem;
                    }
                }
            }
        }
    }


    // Medium devices (tablets, 767px and up)
    @media (min-width: 767px) {  }

    // Large devices (desktops, 991px and up)
    @media (min-width: 991px) {  }

    // XX-Large devices (larger desktops, 1439px and up)
    @media (min-width: 1439px) {  }
</style>