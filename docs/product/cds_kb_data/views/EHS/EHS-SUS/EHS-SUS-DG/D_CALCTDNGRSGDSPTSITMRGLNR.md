---
name: D_CALCTDNGRSGDSPTSITMRGLNR
description: "D Calctdngrsgdsptsitmrglnr"
semantic_vi: "View D Calctdngrsgdsptsitmrglnr hiển thị dữ liệu tính toán cho điểm vận chuyển hàng nguy hiểm, bao gồm yêu cầu tuân thủ và yếu tố lượng. Nó được sử dụng để xác định các loại vận chuyển và điểm vận chuyển có liên quan cho hàng nguy hiểm."
keywords:
  - "dangerous goods"
  - "hàng nguy hiểm"
  - "transport point"
  - "điểm vận chuyển"
  - "compliance requirement"
  - "yêu cầu tuân thủ"
  - "calculation data"
  - "dữ liệu tính toán"
  - "sap ehs"
  - "ehs sus dg"
semantic_en: "The D Calctdngrsgdsptsitmrglnr view exposes calculation data for dangerous goods transport points, including compliance requirements and quantity factors. It is used to determine the relevant transport categories and points for dangerous goods."
app_component: EHS-SUS-DG
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EHS
  - EHS-SUS
  - EHS-SUS-DG
  - component:EHS-SUS-DG
  - lob:Other
---
# D_CALCTDNGRSGDSPTSITMRGLNR

**D Calctdngrsgdsptsitmrglnr**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-DG` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ComplianceRequirement` |  | |  | `ehfnd_req_identifier` |  |  |
| `DangerousGoodsTransportCat` |  | |  | `dangerousgoodstransportcat` |  |  |
| `DangerousGoodsQtyFactorText` |  | |  | `dangerousgoodsqtyfactortext` |  |  |
| `DangerousGoodsPointText` |  | |  | `dangerousgoodspointtext` |  |  |
| `_Item` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Calculate Dngrs Gds Pts Itm Regulation R'
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
define abstract entity D_CalctDngrsGdsPtsItmRglnR
{
  ComplianceRequirement       : ehfnd_req_identifier;
  DangerousGoodsTransportCat  : dangerousgoodstransportcat;
  DangerousGoodsQtyFactorText : dangerousgoodsqtyfactortext;
  DangerousGoodsPointText     : dangerousgoodspointtext;
  _Item                       : association to parent D_CalctDngrsGoodsPointsItemR;
}
```
