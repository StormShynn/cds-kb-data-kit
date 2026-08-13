---
name: D_PCLGSDCGETDNGRSGOODSEDIINFOR
description: "D Pclgsdcgetdngrsgoodsediinfor"
semantic_vi: "View D_PCLGSDCGETDNGRSGOODSEDIINFOR hiển thị dữ liệu nhật ký tuân thủ liên quan đến thông tin EDI hàng hóa, có thể được sử dụng để theo dõi và phân tích nhật ký tuân thủ cho các giao dịch EDI hàng hóa."
keywords:
  - "compliance log"
  - "goods edi"
  - "đơn hàng"
  - "nhật ký tuân thủ"
  - "edi"
  - "hàng hóa"
  - "sustainability"
  - "sustainability compliance"
  - "sustainability log"
  - "sustainability data"
semantic_en: "The D_PCLGSDCGETDNGRSGOODSEDIINFOR view exposes compliance log data related to goods EDI information, which can be used to track and analyze compliance logs for goods EDI transactions."
app_component: EHS-SUS-FND-PC
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EHS
  - EHS-SUS
  - EHS-SUS-FND
  - component:EHS-SUS-FND-PC
  - lob:Other
---
# D_PCLGSDCGETDNGRSGOODSEDIINFOR

**D Pclgsdcgetdngrsgoodsediinfor**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProdCmplncLogsDocument` |  | |  | `ehfnd_log_doc_number` |  |  |
| `D_PCLgsDcGetDaGdsEDIInfoItemR` |  | |  | `_ItemInformation : composition [0..*] of D_PCLgsDcGetDaGdsEDIInfoItemR` |  |  |

## Source Code

```abap
@EndUserText.label: 'DG Document EDI R'
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
define root abstract entity D_PCLgsDcGetDngrsGoodsEDIInfoR
{
  ProdCmplncLogsDocument : ehfnd_log_doc_number; // Logistics Document Number
  _ItemInformation       : composition [0..*] of D_PCLgsDcGetDaGdsEDIInfoItemR;

}
```
