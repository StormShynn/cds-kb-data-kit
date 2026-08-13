---
name: D_PCLGSDCGETDAGDSEDIINFOITEMR
description: "D Pclgsdcgetdagdsediinfoitemr"
semantic_vi: "View D_PCLGSDCGETDAGDSEDIINFOITEMR hiển thị thông tin chi tiết về hàng hóa nguy hiểm EDI (Giao tiếp dữ liệu điện tử) ở cấp độ hàng hóa trong thành phần EHS-SUS-FND-PC. Nó được sử dụng để lấy dữ liệu chi tiết về thông tin EDI cho các mặt hàng cụ thể."
keywords:
  - "dangerous goods"
  - "edi"
  - "item-level"
  - "ehs-sus-fnd-pc"
  - "lob:other"
  - "component:ehs-sus-fnd-pc"
  - "electronic data interchange"
  - "hàng hóa nguy hiểm"
  - "giao tiếp dữ liệu điện tử"
  - "thông tin chi tiết"
semantic_en: "The D_PCLGSDCGETDAGDSEDIINFOITEMR CDS view exposes item-level information for Dangerous Goods EDI (Electronic Data Interchange) in the EHS-SUS-FND-PC component. It is used to retrieve detailed data about EDI information for specific items."
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
  - item-level
  - component:EHS-SUS-FND-PC
  - lob:Other
---
# D_PCLGSDCGETDAGDSEDIINFOITEMR

**D Pclgsdcgetdagdsediinfoitemr**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProdCmplncLogsDocumentItem` |  | |  | `ehfnd_log_doc_posnr` |  |  |
| `Product` |  | |  | `ehfnd_mat_id` |  |  |
| `DangerousGoodsEDIControllerTxt` |  | |  | `dangerousgoodsedicontrollertxt` |  |  |
| `DangerousGoodsEDIBasicInfoTxt` |  | |  | `dangerousgoodsedibasicinfotxt` |  |  |
| `DngrsGoodsEDIExtendedInfoTxt` |  | |  | `dngrsgoodsediextendedinfotxt` |  |  |
| `DngrsGdsEDIRlvtRegulationsTxt` |  | |  | `dngrsgdsedirlvtregulationstxt` |  |  |
| `_Root` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Item EDI R'
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
define abstract entity D_PCLgsDcGetDaGdsEDIInfoItemR
{
  ProdCmplncLogsDocumentItem     : ehfnd_log_doc_posnr; // Id of the corresponding item in the PCLD instance
  Product                        : ehfnd_mat_id;
  DangerousGoodsEDIControllerTxt : dangerousgoodsedicontrollertxt;
  DangerousGoodsEDIBasicInfoTxt  : dangerousgoodsedibasicinfotxt;
  DngrsGoodsEDIExtendedInfoTxt   : dngrsgoodsediextendedinfotxt;
  DngrsGdsEDIRlvtRegulationsTxt  : dngrsgdsedirlvtregulationstxt;
  _Root                          : association to parent D_PCLgsDcGetDngrsGoodsEDIInfoR;

}
```
