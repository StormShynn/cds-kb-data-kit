---
name: D_PCLGSDCGETDNGRSGOODSEDIINFOP
description: "D Pclgsdcgetdngrsgoodsediinfop"
semantic_vi: "View D_PCLGSDCGETDNGRSGOODSEDIINFOP hiển thị dữ liệu nhật ký tuân thủ về hàng hóa nhận, bao gồm UUID của tài liệu và thông tin liên quan. Nó được sử dụng để truy cập và xử lý nhật ký tuân thủ về hàng hóa nhận trong thành phần EHS-SUS-FND-PC."
keywords:
  - "compliance log"
  - "nhật ký tuân thủ"
  - "goods received"
  - "hàng hóa nhận"
  - "document uuid"
  - "uuid của tài liệu"
  - "ehs-sus-fnd-pc"
  - "thành phần ehs-sus-fnd-pc"
  - "sap cds view"
  - "view dữ liệu cds sap"
semantic_en: "The D_PCLGSDCGETDNGRSGOODSEDIINFOP view exposes compliance log data for goods received, including document UUIDs and related information. It is used to access and process goods receipt compliance logs in the EHS-SUS-FND-PC component."
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
# D_PCLGSDCGETDNGRSGOODSEDIINFOP

**D Pclgsdcgetdngrsgoodsediinfop**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProdCmplncLogsDocumentUUID` |  | |  | `ehfnd_log_doc_uuid` |  |  |
| `D_PCLGSDCGETDAGDSEDIINFOITEMP` |  | |  | `_Items : composition [0..*] of D_PCLGSDCGETDAGDSEDIINFOITEMP` |  |  |

## Source Code

```abap
@EndUserText.label: 'PCLD DG Get EDI Informtion Parameter'
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
define root abstract entity D_PCLgsDcGetDngrsGoodsEDIInfoP
{
  ProdCmplncLogsDocumentUUID : ehfnd_log_doc_uuid;
  _Items                      : composition [0..*] of D_PCLGSDCGETDAGDSEDIINFOITEMP;

}
```
