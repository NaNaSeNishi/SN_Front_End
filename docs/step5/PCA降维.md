---
sidebar_position: 1
---

# PCA降维

将词频矩阵数据分成三维，保存到X_pca_frame中

```
new_pca = PCA(n_components = 3)
#将设置了维数的模型作用到标准化后的数据集并输出查看
X_pca = new_pca.fit_transform(countvector)
X_pca_frame = pd.DataFrame(X_pca,columns=['pca_1','pca_2','pca_3'])
X_pca_frame.head(5)

```

