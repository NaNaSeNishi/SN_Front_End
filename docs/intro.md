---
sidebar_position: 1
---

# 项目简介

### 项目主题

本任务主要进行以日本排放核废水事件为主题的社交媒体文本评论数据爬服、分析与可视化。

### 实现步骤

本实验遵从数据挖掘的一般流程，首先对数据进行读取，常规的探索后，进行数据降维操作，随后直接选择sklearn模块中的KMeans算法进行建模，通过轮廓系数对KMeans算法进行K值调优，选择最优的K值进行模型训练，最后通过统计分析对聚类结果进行画像分析，从而明确每一类的特征。

### 项目成员
常锴

### 项目分工
| **任务**                     | **简述**                                                  | **负责人** | **软件环境** | **开发环境** |
| ---------------------------- | --------------------------------------------------------- | ---------- | ------------ | ------------ |
| 社交媒体爬虫代码             | process_0_get_weibo_data.py  process_1_data_merge.py      | 陈世纬     |              |              |
| 社交媒体数据爬取             |                                                           | 全员       |              |              |
|                              |                                                           |            |              |              |
| 丁香园……                     |                                                           |            |              |              |
|                              |                                                           |            |              |              |
| 社交媒体数据预处理与存储     | process_2_deduplicate_cutword_savetodb.py                 | 陈世纬     |              |              |
| 社交媒体评论词频分析与可视化 | process_3_frequency_importance.py  process_4_wordcloud.py | 陈世纬     |              |              |
| 社交媒体聚类训练与结果分析   | process_5_pca_cluster.py                                  | 胡先宇     |              |              |
|                              |                                                           |            |              |              |
|                              |                                                           |            |              |              |