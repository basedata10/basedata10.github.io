Search.setIndex({docnames:["RNA/diffgene","RNA/index","RNA/quantify","baseq/BAM","baseq/CNV","baseq/Drops","baseq/SNV","baseq/Tools","baseq/fastq","guidance/click","guidance/docrules","guidance/jupyter","guidance/rsts","guidance/test","guidance/value","index","support/Excel","support/PPT","support/callcmd","support/multiprocess","support/pandas","support/plots"],envversion:53,filenames:["RNA/diffgene.rst","RNA/index.rst","RNA/quantify.rst","baseq/BAM.rst","baseq/CNV.rst","baseq/Drops.rst","baseq/SNV.rst","baseq/Tools.rst","baseq/fastq.rst","guidance/click.rst","guidance/docrules.rst","guidance/jupyter.rst","guidance/rsts.rst","guidance/test.rst","guidance/value.rst","index.rst","support/Excel.rst","support/PPT.rst","support/callcmd.rst","support/multiprocess.rst","support/pandas.rst","support/plots.rst"],objects:{"baseq.align":{bowtie2:[4,0,0,"-"]},"baseq.align.bowtie2":{bowtie2_sort:[4,1,1,""]},"baseq.bam":{BAMTYPE:[3,2,1,""]},"baseq.bam.BAMTYPE":{get_columns:[3,3,1,""],get_reads:[3,3,1,""],read_counts:[3,3,1,""],region_bed_depth:[3,3,1,""],region_depth:[3,3,1,""],stats_bam:[3,3,1,""],stats_bases:[3,3,1,""],stats_duplicates:[3,3,1,""],stats_region_coverage:[3,3,1,""]},"baseq.cnv":{bincount:[4,0,0,"-"],normalize:[4,0,0,"-"],segment:[4,0,0,"-"]},"baseq.cnv.bincount":{counting:[4,1,1,""]},"baseq.cnv.normalize":{normalize:[4,1,1,""]},"baseq.cnv.plots":{genome:[4,0,0,"-"],region:[4,0,0,"-"]},"baseq.cnv.plots.genome":{plot_genome:[4,1,1,""],plot_genome_multiple:[4,1,1,""]},"baseq.cnv.plots.region":{plot_region:[4,1,1,""]},"baseq.cnv.segment":{CBS:[4,1,1,""]},"baseq.drops":{run_star:[5,0,0,"-"],tag_gene:[5,0,0,"-"],whitelist:[5,0,0,"-"]},"baseq.drops.apa.UTR":{scan_utr:[5,1,1,""]},"baseq.drops.apa.genes":{scan_genes:[5,1,1,""]},"baseq.drops.apa.samples":{APA_usage:[5,1,1,""]},"baseq.drops.apa.scaner":{scan:[5,1,1,""]},"baseq.drops.barcode":{count:[5,0,0,"-"],split:[5,0,0,"-"],stats:[5,0,0,"-"]},"baseq.drops.barcode.count":{count_barcodes:[5,1,1,""],extract_barcode:[5,1,1,""]},"baseq.drops.barcode.split":{getUMI:[5,1,1,""],split:[5,1,1,""]},"baseq.drops.barcode.stats":{valid_barcode:[5,1,1,""]},"baseq.drops.run_star":{run_multiple:[5,1,1,""]},"baseq.drops.tag_gene":{tagging_reads:[5,1,1,""]},"baseq.drops.whitelist":{read_whitelist:[5,1,1,""],whitelist_check:[5,1,1,""]},"baseq.fastq":{quality:[8,0,0,"-"],sample_file:[8,0,0,"-"],split_barcode:[8,0,0,"-"]},"baseq.fastq.quality":{quality:[8,1,1,""]},"baseq.fastq.sample_file":{check_sample_files:[8,1,1,""],list_fastq_files:[8,1,1,""]},"baseq.fastq.split_barcode":{split_barcode:[8,1,1,""]},"baseq.snv":{gatk:[6,0,0,"-"]},"baseq.snv.gatk":{alignment:[6,1,1,""],bqsr:[6,1,1,""],create_pon:[6,1,1,""],mutect2:[6,1,1,""],run_callvar:[6,1,1,""],run_markdup:[6,1,1,""],selectvar:[6,1,1,""]},"baseq.snv.qc":{enrich:[6,0,0,"-"]},"baseq.snv.qc.enrich":{quality_control:[6,1,1,""]},"baseq.snv.vcf":{GATK:[6,0,0,"-"]},"baseq.snv.vcf.GATK":{vcf_stats:[6,1,1,""]},"baseq.utils":{runcommand:[18,0,0,"-"]},"baseq.utils.runcommand":{run_generator:[18,1,1,""],run_it:[18,1,1,""]},baseq:{cnv:[4,0,0,"-"],drops:[5,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method"},terms:{"1000bp":5,"1000m":[],"100k":3,"100x":3,"10x":[3,5,10],"10x_1":5,"1bp":5,"30x":3,"500kb":4,"50x":3,"\u4e00\u4e2a\u597d\u7684\u51fd\u6570\u6587\u6863\u5f00\u9700\u8981\u4e86\u89e3\u5176\u89c4\u8303\u548c\u8981\u6c42":[10,12],"\u4e00\u822c\u4f7f\u7528agg\u6e32\u67d3\u5668":[],"\u4e00\u822c\u63a8\u8350\u5982\u4e0b\u8bbe\u8ba1":12,"\u4e0a\u56fe\u5305\u542b\u4e86\u4e00\u4e2a\u5b8c\u6574\u7684\u5e38\u89c1\u6570\u636e\u5904\u7406\u6d41\u7a0b":20,"\u4e0a\u9762\u5b9a\u4e49\u4e86\u4e00\u4e2a\u53d1\u9001email\u7684\u547d\u4ee4":9,"\u4e0b\u9762\u7684\u4e00\u4e9b\u89c4\u5219\u4f1a\u5e2e\u52a9\u4f60\u5199\u51fa\u66f4\u597d\u7684\u6587\u6863":10,"\u4e0d\u540c\u5c42\u6b21\u7684\u7ae0\u8282\u7531\u4e0b\u9762\u7684\u7b26\u53f7\u4e32\u8fdb\u884c\u533a\u5206":12,"\u4e3a\u5206\u9694\u7b26":20,"\u4e3e\u4e2a\u4f8b\u5b50":10,"\u4ee3\u7801":17,"\u4ee3\u7801\u6587\u6863":[],"\u4ee5\u524d\u6210\u4e3aipython":11,"\u4ee5\u53ca":[10,12],"\u4ee5\u53ca\u5171\u4eab\u53ef\u91cd\u590d\u6027\u7684\u5de5\u4f5c":11,"\u4ee5\u53ca\u53d8\u6362\u65b9\u5f0f":20,"\u4ee5\u53ca\u80fd\u5426\u88ab\u5feb\u901f\u7684\u66f4\u65b0\u8fed\u4ee3":13,"\u4ef7\u503c":[],"\u4efb\u52a1\u961f\u5217\u6309\u7167\u987a\u5e8f\u8fdb\u5165\u7ebf\u7a0b\u6c60\u4e2d\u7a7a\u95f2\u7684worker\u4e2d\u8fdb\u884c\u5904\u7406":19,"\u4f46\u662f\u4e5f\u662f\u6700\u91cd\u8981\u7684\u6240\u5728":13,"\u4f46\u662f\u5bf9\u4e8e\u751f\u4fe1\u8f6f\u4ef6\u6765\u8bf4":13,"\u4f7f\u7528":[],"\u4f7f\u7528\u5982\u4e0b\u65b9\u5f0f\u751f\u6210\u6587\u6863":10,"\u4f7f\u7528\u65b9\u5f0f":[],"\u4f7f\u7528\u7ebf\u7a0b\u6c60":19,"\u4f7f\u7528\u884c\u5217\u7684\u4f4d\u7f6e":20,"\u4f7f\u7528\u8fdb\u7a0b\u6c60":19,"\u4f7f\u7528agg\u6e32\u67d3\u5668":[],"\u4f7f\u7528pycharm\u7684\u8fdc\u7aef\u89e3\u91ca\u5668\u529f\u80fd":13,"\u4f8b\u5982":[],"\u4f8b\u5982\u5982\u4e0b\u7684\u573a\u666f":19,"\u4fdd\u5b58":21,"\u4fdd\u5b58\u6570\u636e\u6846":20,"\u5168\u9762\u7684\u63cf\u8ff0\u4e00\u4e2a\u51fd\u6570\u7684\u529f\u80fd":10,"\u5173\u4e8e\u5728python\u4e2d\u4f7f\u7528":17,"\u5173\u4e8e\u5728python\u4e2d\u8bfb\u53d6\u548c\u751f\u6210excel":16,"\u51c6\u786e":10,"\u51fd\u6570\u6587\u6863\u7684\u793a\u4f8b":10,"\u5206\u6790\u6570\u636e":11,"\u5206\u7ec4":20,"\u5217\u540d\u4ee5\u53ca\u5bbd\u5ea6":12,"\u5217\u8868":[],"\u5217\u8868\u5305\u62ec\u6709\u5e8f\u5217\u8868\u548c\u65e0\u5e8f\u5217\u8868":[],"\u521b\u5efa\u591a\u4e2asheet":16,"\u521d\u59cb\u5316":21,"\u524d\u540e\u6709\u7a7a\u683c":12,"\u52a0\u901f\u8f6f\u4ef6\u7684\u8fd0\u884c\u901f\u5ea6":19,"\u52a0\u91cd":12,"\u5305\u64cd\u4f5cexcel":16,"\u53c2\u8003":12,"\u53c2\u8003sphinx\u7684":[],"\u53d1\u5e03\u683c\u5f0f\u4e5f\u6bd4\u8f83\u7075\u6d3b":11,"\u53e6\u8d77\u4e00\u884c\u4ee5":[],"\u53e6\u8d77\u4e00\u884c\u8bb0\u5f55\u94fe\u63a5\u7684\u5185\u5bb9":12,"\u53ef\u4ee5\u5145\u5206\u53d1\u6325\u786c\u4ef6\u591a\u6838\u591a\u7ebf\u7a0b\u7684\u5904\u7406\u80fd\u529b":19,"\u53ef\u4ee5\u53c2\u8003google\u7684\u51fd\u6570\u6587\u6863":[10,12],"\u53ef\u4ee5\u5728\u4e00\u4e2a\u7b80\u5355\u7684\u7b14\u8bb0\u672c\u4e2d\u8f7b\u677e\u5206\u4eab\u4ee3\u7801":11,"\u53ef\u4ee5\u5728\u547d\u4ee4\u884c\u4e2d":9,"\u53ef\u4ee5\u6307\u5b9a\u6807\u9898":12,"\u53ef\u4ee5\u65e0\u7f1d\u96c6\u6210\u5230\u4f7f\u7528matplotlib\u7684\u4ee3\u7801\u4e2d":21,"\u53ef\u89c6\u5316":20,"\u53f3\u4e0a":21,"\u5408\u5e76\u548c\u8f6c\u6362":20,"\u540c\u65f6\u7edf\u8ba1\u4e00\u4e2abam\u6587\u4ef6\u5728\u591a\u4e2a\u4f4d\u70b9\u7684\u8986\u76d6\u6df1\u5ea6":19,"\u547d\u4ee4\u7684\u8fd4\u56de\u503c\u76f4\u63a5\u6253\u5370\u5230\u7ec8\u7aef":18,"\u547d\u4ee4\u884c":[],"\u547d\u4ee4\u884c\u547d\u4ee4":[],"\u54c8\u54c8\u54c8\u54c8\u54c8\u79ef\u6781":[],"\u56e0\u4e3a\u5bf9\u4e8e\u8f6f\u4ef6":13,"\u56fe\u50cf":[],"\u56fe\u6807\u4ee5\u53ca\u8bf4\u660e":11,"\u5728\u4efb\u4f55\u8def\u5f84\u4e0b\u5bf9\u4e8e\u51fd\u6570\u8fdb\u884c\u8c03\u7528":9,"\u5728\u670d\u52a1\u5668\u4e0a":[],"\u5728matplotlib\u7684\u57fa\u7840\u4e0a\u8fdb\u884c\u5f00\u53d1":21,"\u5728rst\u4e2d":12,"\u57fa\u56e0\u5b9a\u91cf\u6216\u8005\u4efb\u4f55\u5176\u4ed6\u7684":[],"\u57fa\u56e0\u5b9a\u91cf\u6216\u8005\u4efb\u4f55\u8f6f\u4ef6":19,"\u589e\u52a0\u5bf9\u4e8e\u4ee3\u7801\u7684\u4fe1\u5fc3":13,"\u591a\u7ebf\u7a0b\u65e0\u9700\u590d\u5236\u5f53\u524d\u8fdb\u7a0b\u7684\u5185\u5b58":19,"\u591a\u7ebf\u7a0b\u65e0\u9700\u91cd\u5f00\u8fdb\u7a0b":[],"\u591a\u8fdb\u7a0b\u542f\u52a8\u8f83\u6162":19,"\u5927\u5c0f\u4e3a10x10":21,"\u5b83\u4eec\u76f4\u63a5\u5173\u7cfb\u4e86\u4ee3\u7801\u662f\u5426\u53ef\u9760":13,"\u5b8c\u5584\u4ee5\u53ca\u534f\u4f5c":[10,12],"\u5b9e\u73b0\u65b9\u5f0f\u4ee5\u53ca\u8c03\u7528\u65b9\u6cd5":10,"\u5bf9\u4e8e\u591a\u4e2a\u4efb\u52a1":19,"\u5bf9\u4e8e\u591a\u4e2a\u6837\u672c\u540c\u65f6\u8fdb\u884c\u6bd4\u5bf9":19,"\u5bf9\u4e8e\u5927\u91cf\u4efb\u52a1":19,"\u5bf9\u4e8eclick":10,"\u5bfc\u5165":21,"\u5bfc\u5165\u5305":21,"\u5c01\u88c5\u6210\u4e3a\u4e86":18,"\u5c1a\u5f85\u5b8c\u6210":[],"\u5d4c\u5165\u5185\u5bb9":11,"\u5de6\u4e0a":21,"\u5e38\u89c1\u6d41\u7a0b":[],"\u5e38\u89c1\u7684python\u7ed8\u56fe\u5e93\u662f":21,"\u5e38\u89c1\u7c7b\u578b":[],"\u5e76\u4e14\u505a\u5230\u51e0\u4e4e\u5b9e\u65f6\u7684\u5f00\u53d1\u6d4b\u8bd5\u5faa\u73af":13,"\u5e76\u884c\u5904\u7406":15,"\u5e76\u884c\u5904\u7406\u4e3b\u8981\u5305\u62ec\u591a\u7ebf\u7a0b\u548c\u591a\u8fdb\u7a0b":19,"\u5e93\u7684\u6587\u6863":[10,12],"\u5f00\u53d1\u54f2\u5b66":[],"\u5f00\u53d1\u6587\u6863":[],"\u5f00\u53d1\u7406\u5ff5":15,"\u5f88\u5728\u5728\u5f00\u53d1\u73af\u5883\u4e0b\u8fdb\u884c\u5b8c\u6574\u7684\u6d4b\u8bd5":[],"\u5f88\u96be\u5728\u5f00\u53d1\u73af\u5883\u4e0b\u8fdb\u884c\u5b8c\u6574\u7684\u6d4b\u8bd5":13,"\u5fc5\u987b\u5728\u4e0a\u9762\u548c\u4e0b\u9762\u52a0\u4e00\u4e2a\u7a7a\u884c":[],"\u5feb\u901f\u5165\u624b":17,"\u5feb\u901f\u7684\u5bf9\u4e8e\u5c0f\u529f\u80fd\u7684\u6539\u8fdb\u8fdb\u884c\u6d4b\u8bd5":13,"\u6211\u4eec\u4e00\u822c\u5efa\u7acb\u548c\u7ef4\u62a4\u591a\u4e2a\u7b49\u5f85\u63a5\u53d7\u548c\u6267\u884c\u4efb\u52a1\u7684\u8fdb\u7a0b\u6216\u8005\u7ebf\u7a0b":19,"\u6211\u4eec\u4f7f\u7528":16,"\u6211\u4eec\u4f7f\u7528click\u5e93\u5c06\u51fd\u6570\u5c01\u88c5\u6210\u547d\u4ee4":9,"\u6211\u4eec\u4f7f\u7528sphinx\u5e2e\u52a9\u6253\u5305\u751f\u6210\u6587\u6863":12,"\u6211\u4eec\u4f7f\u7528subprocess\u8fd0\u884c\u7cfb\u7edf\u547d\u4ee4":18,"\u6211\u4eec\u53ef\u4ee5\u53c2\u8003":[10,12],"\u6211\u4eec\u76ee\u524d\u4f7f\u7528\u5982\u4e0b\u65b9\u5f0f\u76f4\u63a5\u4f7f\u7528\u8fdc\u7a0b\u670d\u52a1\u5668\u4f5c\u4e3a\u6d4b\u8bd5\u7aef":13,"\u6253\u5305\u4e00\u4e2a\u51fd\u6570\u7684\u8bf4\u660e\u6587\u6863":10,"\u6253\u5305\u4e00\u4e2a\u6a21\u5757\u7684\u8bf4\u660e\u6587\u6863":10,"\u6253\u5305\u4e00\u4e2a\u7c7b\u7684\u8bf4\u660e\u6587\u6863":10,"\u63a8\u8350\u4f7f\u7528csv":12,"\u64cd\u4f5c\u65b9\u6cd5":20,"\u6548\u679c":[],"\u6559\u7a0b":[16,17],"\u6563\u70b9\u56fe":21,"\u6570\u636e":11,"\u6570\u636e\u548c\u5e73\u53f0\u7684\u4f9d\u8d56\u8f83\u9ad8":13,"\u6570\u636e\u5904\u7406\u5927\u90e8\u5206\u662f\u5728\u548c\u6570\u636e\u6846\u6253\u4ea4\u9053":20,"\u6570\u636e\u6846":[],"\u6570\u636e\u6846\u4e2d\u5f88\u591a\u5904\u7406\u6d89\u53ca\u5230\u6570\u636e\u7684\u884c\u4e4b\u95f4\u7684\u5206\u7ec4":20,"\u6570\u636e\u6846\u64cd\u4f5c":15,"\u6570\u636e\u6846\u7ecf\u8fc7\u7b5b\u9009":20,"\u6587\u6863\u4e3a":12,"\u6587\u6863\u4f1a\u5e2e\u52a9\u4ee3\u7801\u7684\u5f00\u53d1":[10,12],"\u6587\u6863\u548c\u6d4b\u8bd5\u662f\u8f6f\u4ef6\u5f00\u53d1\u4e2d\u6700\u5bb9\u6613\u88ab\u5ffd\u7565\u7684\u5730\u65b9":13,"\u6587\u6863\u683c\u5f0f":15,"\u6587\u6863\u89c4\u8303":15,"\u6587\u6863_":12,"\u65b9\u4fbf\u5f00\u53d1\u548c\u6d4b\u8bd5":9,"\u662f\u4e00\u4e2a\u7b14\u8bb0\u672c":11,"\u662f\u4e00\u79cd\u975e\u5e38\u6210\u719f\u7684\u5bf9\u4e8e\u7ec6\u80de\u6216\u8005\u7ec4\u7ec7\u7684\u57fa\u56e0\u8868\u8fbe\u8fdb\u884c\u5b9a\u91cf\u7684\u6280\u672f":1,"\u66f4\u5bb9\u6613\u4e0a\u624b":21,"\u6807\u51c6\u5e93":[],"\u683c\u5f0f":12,"\u683c\u5f0f\u4ee5\u53ca\u5176\u4ed6":16,"\u6b65\u9aa4\u5305\u62ec":21,"\u6ce8\u610f":12,"\u6ce8\u610f\u5fc5\u987b\u6709\u4e00\u4e2a\u7a7a\u884c\u5728\u4e0a\u9762":12,"\u6ce8\u610f\u6307\u4ee4\u4e0a\u9700\u8981\u7a7a\u884c":12,"\u6d4b\u8bd5":[],"\u6d4b\u8bd5\u4e0e\u5feb\u901f\u5f00\u53d1":15,"\u6e05\u695a":10,"\u6e90\u4ee3\u7801":18,"\u6e90\u7801":[10,12],"\u70b9\u51fb\u67e5\u770b\u6559\u7a0b":21,"\u719f\u6089\u6570\u636e\u6846\u7684\u8bfb\u5199":20,"\u751f\u6210":[15,20],"\u751f\u6210\u8868\u683c\u7684\u7b80\u5355\u65b9\u5f0f":12,"\u7684\u4f7f\u7528\u6a21\u5f0f\u5982\u4e0b":9,"\u7684\u5185\u5bb9":[],"\u7684\u8bf4\u660e":12,"\u76f4\u5230\u6240\u6709\u4efb\u52a1\u7684\u7ed3\u675f":19,"\u76f4\u65b9\u56fe":21,"\u76f8\u6bd4\u800c\u8a00":19,"\u79f0\u4e4b\u4e3a\u7ebf":19,"\u7a0b\u5e8f\u5927\u91cf\u6d89\u53ca\u5230\u8c03\u7528\u8f6f\u4ef6":18,"\u7a7a\u5fc3\u5706":21,"\u7ae0\u8282":[],"\u7ae0\u8282\u4e0b\u9762\u5e94\u8be5\u52a0\u4e0a\u4e0d\u77ed\u4e8e\u6807\u9898\u7684\u7b26\u53f7\u4e32":12,"\u7ae0\u8282\u662f\u5206\u5c42\u6b21\u7684":12,"\u7ae0\u8282\u7684\u6807\u5b9a\u786e\u5b9a\u4e86\u9875\u9762\u7684\u6846\u67b6":12,"\u7b49\u7b49":11,"\u7b80\u5316\u4e86\u8c03\u7528\u65b9\u5f0f":21,"\u7b80\u5355\u4e3a\u4e0a":14,"\u7cfb\u7edf\u8d44\u6e90\u5360\u7528\u5c0f":19,"\u7ebf\u7a0b\u95f4\u5171\u4eab\u5185\u5b58":19,"\u7ed3\u6784\u63a7\u5236":[],"\u7ed3\u679c\u7b49\u9700\u8981\u6ee1\u8db3\u4e00\u5b9a\u7684\u89c4\u8303":10,"\u7ed8\u5236":21,"\u7ed8\u52362x2\u7684\u56fe":21,"\u7ed8\u5236\u4ee5\u53ca\u4fdd\u5b58":21,"\u7ed8\u5236\u591a\u5e45\u56fe":21,"\u7ed8\u56fe":15,"\u80fd\u591f\u4f7f\u7528\u66f4\u5c11\u7684\u4ee3\u7801\u5feb\u901f\u5b9e\u73b0\u5927\u90e8\u5206\u5e38\u89c1\u7684\u64cd\u4f5c":20,"\u80fd\u591f\u53ca\u65e9\u53d1\u73b0\u95ee\u9898":13,"\u8303\u4f8b":[10,12],"\u84dd\u8272\u8fb9\u7ebf":21,"\u89c4\u8303":14,"\u89c4\u8303_":[],"\u8bbe\u8ba1\u5230\u5f88\u591a\u6b65\u9aa4":[],"\u8bf4\u660e_":[],"\u8bfb\u53d6\u548c\u751f\u6210ppt":17,"\u8bfb\u53d6\u8def\u5f84":20,"\u8c03\u7528\u65b9\u5f0f":18,"\u8f6c\u6362":20,"\u8f6c\u6362\u6210\u4e3a\u4e00\u4e2a\u65b0\u7684\u6570\u636e\u6846":20,"\u8f6f\u4ef6\u547d\u4ee4\u5316":15,"\u8f6f\u4ef6\u8c03\u7528":15,"\u8fd4\u56de\u4e00\u4e9b\u7ed3\u679c":[],"\u8fd9\u4e2a\u7b14\u8bb0\u672c\u53ef\u4ee5\u7f16\u5199\u548c\u6267\u884c\u4ee3\u7801":11,"\u8fd9\u662f\u4e00\u4e2acsv\u8868\u683c":[],"\u8fd9\u662f\u7b2c\u4e00\u6b65":[],"\u8fd9\u907f\u514d\u4e86\u5b83\u4eec\u88ab\u9891\u7e41\u521b\u5efa\u548c\u9500\u6bc1\u7684\u5f00\u9500":19,"\u8fdb\u7a0b\u6c60":19,"\u9002\u7528\u4e8e\u884c\u5217\u540d\u79f0\u8fdb\u884c\u53d6\u503c":20,"\u901a\u8fc7\u5982\u4e0b\u65b9\u5f0f\u8c03\u7528":9,"\u94fe\u63a5":[],"\u94fe\u63a5\u6587\u5b57\u672b\u5c3e\u52a0":12,"\u963f\u65af\u987f\u770b\u4e86\u98ce\u666f\u5361\u6d1b\u65af\u5c31\u5730\u65b9\u5361\u6d1b\u65af\u7b49\u53d1":[],"\u963f\u65af\u987f\u94fe\u63a5\u53d1\u5362\u5361\u65af\u7684\u5bb6":[],"\u9664\u4e86\u4e86\u89e3rst\u7684\u8bed\u6cd5\u683c\u5f0f":[10,12],"\u9700\u8981\u5728\u4e0a\u9762\u548c\u4e0b\u9762\u52a0\u4e00\u4e2a\u7a7a\u884c":12,"\u9ed8\u8ba4\u4e3acsv\u7684":20,"_\u89c4\u8303":[],"_\u8bf4\u660e":[],"_\u94fe\u63a5":[],"boolean":[],"break":[],"case":14,"class":[],"dataframe\u6709\u4e24\u79cd\u4e3b\u8981\u7684selction\u7684\u65b9\u5f0f":20,"default":[5,6,9,10],"final":[],"function":[6,8,10,14],"google\u7684python\u4ee3\u7801":14,"import":[4,5,9,16,17,18,19,21],"int":[3,5,10],"new":5,"pandas\u4e3a\u4e4b\u5b9a\u4e49\u4e86\u4e00\u5957\u5b8c\u6574\u7684":20,"pandas\u4e3a\u4e4b\u5b9a\u4e49\u4e86\u4e00\u5957\u5b8c\u6574\u7684\u64cd\u4f5c\u65b9\u6cd5":[],"python\u4e2d\u4e3b\u6d41\u7684\u6570\u636e\u6846\u64cd\u4f5c\u5305\u662f":20,"return":[3,5,6,8,10,18],"rst\u4f7f\u7528\u65b9\u6cd5":[],"rst\u8bed\u6cd5":[],"run_cmd\u51fd\u6570":18,"true":[3,5,6,9,10,12,16,18,21],"try":18,"while":3,Added:[],Adding:17,CBS:[],For:[3,5],POS:3,THE:5,TLS:[],The:[1,3,4,5,6,8,9,10,14],Their:[],Then:6,These:[],Use:[3,17],Used:[],Using:6,Yes:6,_python:[],_rst:12,_sphinx:[],_static:12,_textfram:17,aasdfasdfasd:[],about:6,absolut:4,absoult:6,absstart:4,abund:5,accept:10,accord:[4,5,10],activ:[],add:6,add_format:16,add_paragraph:17,add_pictur:17,add_slid:17,add_worksheet:16,added:6,adding:[],addit:[],adenel:[],administr:[],adsfasdf:[],adsfk:[],affect:[],afsfsdf:[],after:5,against:6,agg:21,aggreg:[4,5],aim:6,ajsdlf:[],aklsdfj:[],aksdf:[],aksdfj:[],aksldjf:[],albatross:12,align:[1,6],alksdf:[],all:[3,5,6,10,14],allel:6,allow:[],also:[4,6],altern:[],alwai:14,an_example_pypi_project:15,anaconda2:4,analysi:6,ani:10,annot:6,annotationm:5,anoth:[],apa:5,apa_sample_usag:[],apa_sitefil:5,apa_usag:5,apalist:[],api:14,append:19,appli:[5,6],applic:[],apply_async:19,applybqsr:6,appropri:[],apt:[],arbitrari:10,arch:[],archiv:[],arg:[5,10],argument:10,arial:16,around:[],arrai:[],artifactu:6,ascii:3,asd:0,asdf:0,asdfadsf:[],asdfasd:0,asdfasdf:[],asdfasdfasdfasdfasdfasdfasdfasdfasdf:[],asdfasdlf:[],asdfjk:[],asdfjlkasdjf:[],asdfkl:[],asdjf:[],asdjfljaslkdfj:[],asdjflkajsdfklajsdf:4,asdk:[],asdkf:[],asdkfj:[],asdklf:[],asdl:[],asdlfashdf:[],asdlfjalskdfjlaskdjf:4,askdfjkalsdf:[],askdfl:[],askdjflkasdfj:[],askdjflkasjdf:[],askdlfj:[],asldfjlkasjdfasldkfjalksjdf:[],assembl:6,atcgatcgatcgactaaattttttt:5,attach:7,attack:[],attch:[7,9],attribut:[],attributeerror:10,autoclass:[],autofunct:[],automat:[],automodul:[],avail:[],avoid:[],axi:[],b37:6,bai:6,bam:[4,5,6,10,15],bam_read_count:[],bamfil:[3,4,5,6],bampath:[3,6],bamtyp:[3,10],barcod:10,barcode_correct_filt:[],barcode_count:[5,10],barcode_fil:8,barcode_mutate_last:5,barcode_split:[],barcode_stat:[],barcode_str:8,base64:8,base:[3,4,5,6,8,10],basemat:4,baseplot:16,baseq:[0,2,3,4,5,6,7,8,9,10,18],baserecalibr:6,basic:8,bc_dir:5,bc_stat:[5,10],bc_white:5,bcfile:[],bcstat:[5,10],bdfl:[],becaus:[],bed:[3,6],bedfil:3,been:[],befor:6,begin:10,benfield:[],better:[10,12,14],between:[],bia:6,biasindex:16,bin:21,bin_count:[],bincounts_norm:4,binid:4,bioinformat:8,bisect:4,bitwis:3,blank_slide_layout:17,blinker:[],block:[10,12],body_shap:17,bold:16,bone:12,book:16,bool:[5,10],both:[4,6],bowti:4,bowtie2:4,bowtie2_index:4,bowtie2_sort:4,bqsr:6,bqsrbam:6,branch:[],brief:3,browser:7,bug:[],bugfix:[],build:[5,16],bulk:4,bullet:[12,17],bullet_slide_layout:17,bundl:6,bwa:[4,6],call:[5,6,18],caller:[],callset:6,can:4,cannot:6,captur:6,cbs:4,cbs_path:4,cell:[4,5],cell_typ:[],cellbarcod:5,cellrang:5,celltyp:5,cento:[],cert:[],certain:6,certif:[],chang:[],check:[3,5,6,8],check_sample_fil:8,chr1:3,chr:[3,4,5],chrn:3,chrome:[],chromesom:3,chromosom:3,cigar:3,cli:[9,10],click:[],client:9,close:[16,19],cluster:[],cmd:[10,18],cnv:15,cnv_plot_:4,cnv_ref_hg19:4,cnvsampl:4,code:[10,12],col:3,colidx:3,colleagu:[],colon:10,column:[3,4,6,16],com:[],come:6,command:[4,6,9,18],comment:20,common:6,commonli:0,commun:[],compat:[],complet:18,complex:4,config:5,connect:[],consist:6,construct:[],contain:[3,4,5,6],content:[4,6,8],context_set:9,continu:[],contributor:[],control:[],convolut:[],convolv:[],cooki:[],copi:4,cordasco:[],core:1,cori:[],correct:6,correl:[],correspond:[],cou:[],could:7,coulmn:[],count:[0,1,4,6,16],count_barcod:5,covari:6,coverag:[3,6],coverg:3,creat:[6,14],create_pon:6,crit:[],criteria:6,crunchi:12,csv:[5,9,20],ctx:9,custom:[],dafalut:6,dai:[],data:[4,19,20],data_funct:19,databas:4,datafram:[8,16],date:[],debian:[],decis:[],def:[9,10,12,18],defin:[6,9],delight:[],delimit:6,densiti:21,depend:[],deprec:[],depth:[3,6],descript:[3,4,10,12],deseq2:1,deseq:0,deseq_rep2:0,design:[4,6],detail:6,detect:4,determin:[5,10],develop:[3,7,14],deviat:4,dfgdfgdfdfg:[],dfgdfgdfgdf:[],dfgdfgdfgdfgdfgdf:[],dfgdfgdfgdfgfdgdfgdfgdf:[],dfgdgd:[],dfgsgfd:[],dict:[6,9],dictionari:[],die:[],diff:[],diff_power_analysi:0,differ:[1,6],differenti:1,diffexpress:0,dir:5,direct:[],directli:2,directori:[6,8],disabl:6,disable_dup_filt:6,discount:4,discret:[],discuss:[],disregard:14,distribut:[],distro:[],distrup:6,diverg:6,djflasdf:[],dkf:[],dlfk:[],dna:4,dnacopi:4,doc:[12,15],docstr:5,doctest:5,document:[5,10,12,15],docutil:12,doe:[],done:[],dotenv:[],download:[4,6,7],downstream:6,drop:[5,10],dropseq2:[],dropseq:[5,10],dropsrna:15,dsahboard:11,dsfsdfsddsfsd:[],dsfsdfsdfsdfsdfsd:[],dup_ratio:6,duplic:[3,6],dynabin:4,dynam:[],dynamic_bin:4,dynamic_bin_fil:4,dynamicbin:4,dystonia:[],each:[4,5,10],edgecolor:21,effici:[],either:[],els:14,email:9,email_send:9,emperor:[],emphas:12,enabl:[],encich:[],end:[3,5,6],engin:16,enrich:3,enrich_qc:[],ensur:[],enter:7,enumer:16,environ:[],equal:10,error:18,escap:[],essenti:[],estim:4,even:[],event:[],everyon:14,everyth:14,exampl:[5,6,10],example_gener:[],excel:[15,20],excelwrit:16,except:[10,18],exclud:4,exe:[],exist:3,exit:18,exp:1,expect:[],experi:4,express:1,ext:[],extens:[],extern:10,extract:[5,8],extract_barcod:5,facecolor:21,fals:[3,5,6,10,12,16],fast:[],faster:[],fastq1:[],fastq2:[],fastq:[4,15],fastq_basecontent_qu:16,fastq_path:8,fdsf:[],featur:[],fedora:[],fetch:[],fftconvolv:[],fghf:[],fghfghfg:[],field:3,figsiz:21,figur:[4,8,21],file:[3,4,5,6,8,9,10],filter:[4,5,10],filtervcf:6,find:17,first:[3,5,6,10,17],fit:14,fjlaksjdf:[],flag:3,flagstat:3,flask:[],folder:[8,18],follow:10,folsdfsdlow:[],font_nam:16,font_siz:16,fork:[],form:6,format:[5,6,8,10,16,18],format_head:16,format_main:16,found:[],fourier:[],fq1:[4,5,6,8],fq2:[4,5,6,8],fqs:8,framework:[],frequenc:6,frog:12,from:[3,4,5,6,8,9,17,18,19],frozen:[],functin:6,fundement:8,gannet:12,gatk:[],gc_content_imag:4,gencod:5,gene:5,gener:[0,2,4,5,6,8,18],genom:[3,5,6],genotypevcf:6,genrat:[],genreat:5,germlin:6,get:[3,5,18,19],get_column:3,get_read:3,getumi:5,github:[4,10,12],gnomad:6,gnu:[],goe:[],good:[],googl:[],gpf:4,graphclust:[],greatli:[],group:[0,9],group_compar:0,gt_01:[6,16],gt_11:[6,16],guidelin:[],guido:[],hahhaahhah:[],handler:3,haplotyp:6,haplotypecal:6,has:12,have:[],header:[3,12,20],heatmap:5,height:17,hello:[7,9,17],help:[6,7,9,10,12],help_option_nam:9,here:[6,17],here_:[],hg19:4,hg37:6,hg38:[2,6],hgfhfg:[],high:4,highlight:12,hist:21,how:[5,6],html:[11,12],http:[5,12,15],httpbin:5,httsdfsdp:[],human:[],hyperlink:10,ian:[],idx:16,ignor:14,illustr:5,iloc:20,imag:[4,12],img_path:17,immedi:[],implement:[],inch:17,includ:10,indel:6,indent:10,independ:[],index:[4,6],indic:[4,6],indrop:[5,10],infer:4,infil:4,info:[6,9,18],infom:6,infor:3,inforamt:4,inform:[],initi:3,inject:[],input:[6,12],insert_imag:16,instal:[],instead:[],integr:[],interest:12,interfac:10,interv:6,introduct:6,invad:[],ipynb:11,irk:[],isn:6,item:12,its:6,itsdanger:[],itself:[],jinja:[],join:19,jpeg:12,json:6,jsonhash:[],judgement:[],jupyt:15,kalsd:[],kas:[],kei:5,kenneth:[],kept:[],keyword:10,ksdf:[],kwarg:10,label:[],laksdfl:[],languag:[],lasdf:[],lasdkf:[],lasdkfl:[],lasjdf:[],last:[5,10],latest:[],layout:17,left:17,leftmost:3,len:5,length:[3,4,5,10],level:[4,6,10,17],lib:[],librari:14,like:[3,7,10],linalg:[],line:[6,7,10,12],linear:[],link:[],linux:[],list:[3,5,6,8,10,12,18],list_fastq_fil:8,list_i:21,list_x:21,listen:14,liter:[10,12],lka:[],loc:20,local:6,logest:5,longer:[],low:[4,6],lowess:[],lrrr:[],mac:[],mad:4,made:[],maf:[6,16],mai:10,make:[],manag:[],mani:[],manipul:[],map:[3,4,6],map_ratio:6,mapping_ratio:3,mapq:3,mark:6,markdupl:6,markedbam:6,marker:[],markup:[],markupsaf:[],master:[],match:[3,6,10],mate:3,matplotlib:15,matter:14,max:[],max_cel:5,maxcel:[],maxlin:8,mean:3,mean_depth:[3,6,16],meaningless:[],meanqual:16,median:4,member:10,merg:[],merit:[],messag:[7,9],method:5,metric:6,mgt:18,million:[],min_depth:[5,6],min_read:5,minimum:[],minor:6,minread:[],mirror:[],mismatch:5,mismatch_bc:5,mismatch_read:5,miss:[],mix:[],mkdir:[],mnt:4,mode:6,modern:[],modul:[3,10],module_level_funct:10,monti:17,more:6,most:3,mous:[],mpl:21,multi:[],multipl:[4,6,7,9,10,21],multiprocess:19,multithread:3,must:[],mutat:[5,10],mutate_last_bas:5,mutect2:6,muu:[],myproject:[],n504:6,n504_marked_bqsr:6,n505:6,n505_marked_bqsr:6,n506:6,n506_marked_bqsr:6,n509:6,n509_marked_bqsr:6,n510:6,n510_marked_bqsr:6,nai:14,name22:[],name:[3,4,5,6,8,10,18],ndarrai:[],necessari:6,need:[],nest:10,net:12,newer:[],next:3,nois:4,none:[10,21],norm:4,norm_by_gc:[4,21],norm_by_gc_ploidi:4,normal:[6,21],normal_marked_bqsr:6,normalbam:6,normalize_gc:[],normalize_gc_pi:[],normalnam:6,normbincount:4,notebook:11,now:12,nph:[],number:[3,4,5,6,12],numer:[],obj:10,object:[3,5],observ:3,obviou:10,offici:[],older:[],omicron:[],one:12,onli:6,open:14,oper:[],opinion:14,option:[5,9,10,16],order:6,org:[5,15],other:[10,12],otherwis:[5,10],out:[4,12],outdir:8,outfil:[4,6],outpath:5,output:[4,5,6,10,12],overlap:3,packag:15,pacman:[],page:16,pair:6,pallet:[],panda:20,panel:[3,6],para1:19,para2:19,paragraph:[10,12],parallel:5,param1:[5,10],param2:[5,10],param:10,paramet:[3,5,10],pars:3,part:4,pass:9,pass_context:9,path:[3,5,6,8,20],path_out:4,pct_10x:[3,6],pct_30x:6,pdf:11,peak:5,pem:[],pep:[],per:4,perform:[3,6],persei:[],philosophi:[],phred:3,pic:17,picard:6,pip:15,pipelin:[0,5],placehold:17,plagu:[],plan:[],pleas:6,ploidi:4,plot:21,plot_genom:4,plot_genome_multipl:4,plot_region:4,plotgenom:4,plt:21,pnext:3,png:[4,17,21],poli:[],poly1d:[],polymul:[],polynomi:[],pon:6,pool:[3,19],posit:[3,4,5],ppt:15,pptx:17,practic:[],predefin:4,prefer:[],prepar:16,present:17,print:[5,9,12,16,18],problem:[],process:[4,6,19],produc:[],product:[],prog:10,project:15,prompt:[],properi:3,protect:[],protocol:[5,10],provid:7,proxi:[],prs:17,pull:[],put:[],pyguid:[],pypi:[],pyplot:21,python27:[],python2:[],python3:[],python:[10,12,15,17],python_:[],qcpage:16,qname:3,qual:3,qualiti:3,quality_control:6,qualityplot:16,quantifi:1,quantiti:12,queri:3,question:5,quisi:1,rais:10,randomli:3,rang:16,rate:3,ratio:[3,4,5],raw:[4,5,6],rawvcf:6,read:[3,4,6,10],read_count:3,read_whitelist:5,readgroup:6,reads_map:3,reads_tot:3,recalbr:6,recalibr:6,recommand:6,recommend:[],recov:[],recruit:6,reduc:4,ref:[3,4,12],refer:[3,6],reflect:3,region:[3,6],region_bed_depth:3,region_depth:3,regress:[],reitz:[],relat:[],releas:[],relev:10,reload:[],render:[],report:[5,16],repositori:[],repres:[],req:5,request:[5,10,12,14],requir:[3,6,10],resourc:6,respect:6,respons:5,restrict:6,restructuredtext:[10,12],result:[3,5,16,19],retain:5,return222:[],returnsass:5,review:[],rhel:[],rigel:[],rippl:12,rna:[0,2,15],rna_:[],rname:3,rnaseq:1,rnext:3,round:16,row:3,rscript:[],rst:15,rst_:12,rtype:[],run:[4,5,7,9,18],run_align:[],run_bqsr:6,run_bwa:6,run_callvar:6,run_cmd:18,run_gener:18,run_it:18,run_markdup:6,run_multipl:5,run_mutect2:6,run_pipelin:4,run_selectvar:6,run_star:5,run_star_multipl:5,runcommand:18,runpip:[],rusult:[],sai:[],same:4,samfil:4,sampl:[2,3,4,5,6,16],sample01:6,sample1:6,sample_fil:8,sample_list:6,sampledir:8,samplefil:8,samplenam:[6,8],samtool:[3,4],save:[3,16,17],savefig:21,sayer:14,scale:3,scan:5,scan_gen:5,scan_genom:[],scan_utr:5,scanapa:[],scaner:5,scatter:21,scipi:[],score:6,script:[],sdfasdfj:4,sdfsdf:[],seaborn:21,second:[5,6,10,12],secondari:14,section:[10,12],secur:[],see:[6,7],seek:[],segment:3,select:[3,6],selectvar:6,selectvari:6,selectvcf:6,self:3,semant:[],send_mail:9,sene:[],sep:20,seq1:5,seq:[3,5,15],sequenc:[3,4,5,6],serak:[],serv:7,server:[],session:[],set:[],set_column:16,set_font_nam:16,set_font_s:16,set_row:16,shall:3,shape:17,sheet_nam:16,shell:18,short_help:9,should:[3,5,6,7,10],show:[5,10],sign:[],signal:[],similar:5,simplejson:[],simplic:14,simplifi:6,singl:[4,6],site:6,size:4,skip:3,skp1:[],slide:[11,17],slide_layout:17,slip:[],small:[],snp:6,sns:21,snv:15,soft:4,solv:[],somat:6,some:[],some_funct:12,sometim:[],sort:4,sourc:[3,4,5,6,8,18],sourceforg:12,span:10,specif:[],specifi:[6,10],speed:[],sphinx:12,sphinx_:[],split:10,split_16:[],split_barcod:8,ssl:[],stabl:[],standard:[],star:[3,5],start:[3,4,5],stat:[3,4,8],stats_bam:3,stats_bas:3,stats_dupl:3,stats_read:[],stats_region_coverag:3,step:[5,6],ster:6,stick:12,str:[5,10,16],stream:[],string:3,style:[],styleguid:[],subject:[7,9],subplot:21,subprocess:18,subsampl:8,subsequ:17,subtitl:17,success:[5,10],sudo:[],suffix:8,suitabl:3,sum:4,support:10,sys:[9,18],system:[],systemat:6,t504:6,t504_marked_bqsr:6,t505:6,t505_marked_bqsr:6,t506:6,t506_marked_bqsr:6,t509:6,t509_marked_bqsr:6,t510:6,t510_marked_bqsr:6,tab:6,tabl:[0,5,6,20],tag:6,tag_gen:5,tagging_read:5,tar:[],task:1,technic:4,templat:3,test:[6,17],text:[12,17],text_fram:17,than:14,thank:9,thei:10,them:[],thi:[2,4,5,6,10,12,15],thre:5,thread:[4,5,6],threadpool:19,throughput:4,time:[],titl:17,title_shap:17,title_slide_layout:17,tlen:3,tn5_s1:4,to_csv:20,to_excel:[16,20],todo:[3,4],toeplitz:[],too:12,took:12,tool:[9,15],toolkit:4,top:[3,17],top_million_read:[],topread:5,total:[4,6],total_read:5,tpm:[0,2],transform:5,treat:12,triag:[],truth:17,tsv:[4,8,20],tumor:6,tumor_marked_bqsr:6,tumorbam:6,tumornam:6,tupl:[],tutori:[],two:[4,6,12],txt:[0,2,4,5,6,7,9,10,20],type:[3,5,10],uasg:[4,5],ubuntu:[],umi:5,understand:[10,12],uniqu:4,untrust:[],updat:[],url:5,usag:[3,4,5,6],usah:[],use:[4,5,14,21],used:[0,6],user:4,uses:[6,12],using:[3,4,6],usual:6,util:[9,17,18],utr:5,valid:[5,10],valid_barcod:5,valu:[5,18],valueerror:10,vari:[],variabl:10,variant:6,variantfiltr:6,variou:6,vcf:16,vcf_stat:[6,16],vcffile:6,vcfpath:6,venv:[],veri:0,verifi:[],version:3,via:6,view:[3,4],vii:[],virtual:[],virtualenv:[],visit:7,visual:3,wai:[],want:[],watchdog:[],welcom:15,well:[],werkzeug:[],what:[],wheather:5,when:[],where:6,whether:[5,10],which:[5,6],whitelist:[5,10],whitelist_check:5,whitelistdir:5,whole:[],width:12,window:[],within:[],word:[],work:[],workbook:16,workdir:5,world:[7,9,17],would:12,wouldn:12,write:[5,8,10,16],writefil:8,writer:16,written:5,wsgi:[],www:[],x_offset:16,x_scale:16,xls:20,xlsx:16,xlsxwriter:16,xlsxwriter_:[],xxxx:[5,10],y_offset:16,y_scale:16,year:[],you:[6,7,10,12],your:[7,9,10,12],yum:[],zero:3,zhangxiannian:4,zim:[]},titles:["Different Exp:","RNA-Seq","Quantify:","BAM","CNV","DropsRNA","SNV","Tools","Fastq","\u8f6f\u4ef6\u547d\u4ee4\u5316","\u6587\u6863\u89c4\u8303","Jupyter","\u6587\u6863\u683c\u5f0f/rst","\u6d4b\u8bd5\u4e0e\u5feb\u901f\u5f00\u53d1","\u5f00\u53d1\u7406\u5ff5","Basic of beiseq","\u751f\u6210 Excel","\u751f\u6210 PPT","\u8f6f\u4ef6\u8c03\u7528","\u5e76\u884c\u5904\u7406","\u6570\u636e\u6846\u64cd\u4f5c","\u7ed8\u56fe Matplotlib"],titleterms:{"10x":[],"\u4e0e":[],"\u4e0epandas\u7ed3\u5408":[],"\u4ee3\u7801":12,"\u4ee3\u7801\u6587\u6863":10,"\u4ee3\u7801\u89c4\u8303":14,"\u4ef7\u503c":14,"\u4f7f\u7528\u65b9\u5f0f":19,"\u5199\u5165\u4ee5\u53ca\u4fdd\u5b58":17,"\u5199\u5165cell\u4ee5\u53ca\u4fdd\u5b58":16,"\u5217\u8868":12,"\u521b\u5efa":[16,17],"\u521b\u5efa\u591a\u4e2asheet":[],"\u540c\u6b65\u4ee3\u7801\u5230\u8fdc\u7aef":13,"\u547d\u4ee4\u884c":[],"\u547d\u4ee4\u884c\u547d\u4ee4":[],"\u56fe\u50cf":12,"\u56fe\u7247":17,"\u591a\u7ebf\u7a0b":[],"\u5bfc\u5165\u5305":[],"\u5e38\u89c1\u6d41\u7a0b":21,"\u5e38\u89c1\u7c7b\u578b":21,"\u5e76\u884c\u5904\u7406":19,"\u5f00\u53d1\u54f2\u5b66":[],"\u5f00\u53d1\u6587\u6863":[],"\u5f00\u53d1\u7406\u5ff5":14,"\u63d2\u5165\u81ea\u52a8\u6587\u6863":10,"\u6570\u636e\u6846\u64cd\u4f5c":20,"\u6587\u5b57\u683c\u5f0f":12,"\u6587\u6863\u683c\u5f0f":12,"\u6587\u6863\u89c4\u8303":10,"\u6807\u51c6\u5e93":[],"\u6d4b\u8bd5":[],"\u6d4b\u8bd5\u4e0e\u5feb\u901f\u5f00\u53d1":13,"\u751f\u6210":[16,17],"\u76f4\u63a5\u8c03\u7528":18,"\u7ae0\u8282":12,"\u7ed3\u6784\u63a7\u5236":21,"\u7ed8\u56fe":21,"\u83b7\u53d6\u8fd4\u56de\u503c":18,"\u8868\u683c":12,"\u8f6f\u4ef6\u547d\u4ee4\u5316":9,"\u8f6f\u4ef6\u8c03\u7528":18,"\u94fe\u63a5":12,"\u9875\u9762":17,"class":3,"function":[3,5],"import":[],"pandas\u6570\u636e\u6846":16,"rst\u4f7f\u7528\u65b9\u6cd5":[],"rst\u8bed\u6cd5":12,CBS:4,For:15,The:[],Using:9,activ:[],adenel:5,align:[2,4,5],altern:5,analysi:[],apa:[],apa_pipelin:[],apa_reverse_strand_ev:[],apa_sample_usag:[],apa_scan_genom:[],apa_scan_region:[],api:[4,8,15,18],autoclass:10,autofunct:10,automodul:10,bam:3,bamtyp:[],barcod:[5,8],barcode22:[],barcode_count:[],barcode_filt:[],barcode_split:[],barcode_split_fast:[],baseq:[],basic:15,beiseq:15,bin:4,bincount:4,click:[9,10],cmd:[],cnv:4,command:[10,15],compon:[],config:4,control:[4,6],correct:5,count:[2,5],creat:[],csv:12,cufflink:2,delight:[],depend:[],deseq2:0,deseq:[],design:[3,5],develop:15,diff:1,differ:0,distro:[],doc:[],drop:[],dropseq2:[],dropseq:[],dropsrna:5,dynam:4,edg:[],email:7,enrich:6,environ:[],exampl:[],excel:16,exp:0,express:[],extract:[],fastq:8,featurecount:2,file:7,filter:6,flask:[],format:[],frozen:[],gatk:6,gene:1,genom:4,get_celltype_barcod:[],group:20,guidanc:15,hello:[],hisat:2,imag:[],index:[],indrop:[],instal:15,interfac:[],jupyt:11,knowledg:15,lib:[],librari:[],linux:[],list:[],live:[],manag:[],manipul:[],matplotlib:21,multi:[],normal:4,option:[],packag:[],panda:[],philosophi:[],pipelin:4,plot:4,poli:5,ppt:17,process:[],python:14,qualiti:[4,6,8],quantif:1,quantifi:2,question:[],quisi:2,read:[5,20],reads_tag:[],refer:[],region:4,result:4,rna:1,rst:12,run:6,run_pip:[],salmon:2,sampl:8,save:20,segment:4,select:20,semant:[],sene:7,seq:1,server:7,snv:6,split:[5,8],standard:[],star:2,stat:[5,6],style:[],tabl:12,tag:5,task:[],todo:[],tool:7,total:[],type:[],usag:[7,8],valu:[],vcf:6,version:[],virtual:[],virtualenv:[],visual:4,welcom:[],whole:4,world:[],write:[]}})