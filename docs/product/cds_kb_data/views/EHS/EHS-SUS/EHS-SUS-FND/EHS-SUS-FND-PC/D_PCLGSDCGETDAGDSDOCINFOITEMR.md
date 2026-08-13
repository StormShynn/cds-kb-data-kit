---
name: D_PCLGSDCGETDAGDSDOCINFOITEMR
description: "D Pclgsdcgetdagdsdocinfoitemr"
semantic_vi: "Chứa thông tin chi tiết về từng mặt hàng trong các tài liệu trong thành phần EHS-SUS-FND-PC, bao gồm chi tiết về vật liệu nguy hiểm và các thông số trọng lượng/tổng thể tích."
keywords:
  - "ehs"
  - "ehs-sus"
  - "ehs-sus-fnd"
  - "ehs-sus-fnd-pc"
  - "item-level"
  - "hazardous-material"
  - "weight"
  - "volume"
  - "gross-weight"
  - "gross-volume"
  - "component"
  - "lob-other"
semantic_en: "Exposes item-level information for documents in the EHS-SUS-FND-PC component, including hazardous material details and weight/volume measurements."
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
# D_PCLGSDCGETDAGDSDOCINFOITEMR

**D Pclgsdcgetdagdsdocinfoitemr**

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
| `DngrsGdsIsHazardousMaterial` |  | |  | `dngrsgdsishazardousmaterial` |  |  |
| `DngrsGdsIsGrossWeightCalcRlvt` |  | |  | `dngrsgdsisgrossweightcalcrlvt` |  |  |
| `DngrsGdsDescForDocumentsText` |  | |  | `dngrsgdsdescfordocumentstext` |  |  |
| `DangerousGoodNetMassQty` |  | |  | `dangerousgoodnetmassqty` |  |  |
| `DangerousGoodNetMassSAPUnit` |  | |  | `dangerousgoodnetmasssapunit` |  |  |
| `DangerousGoodNetMassISOUnit` |  | |  | `dangerousgoodnetmassisounit` |  |  |
| `GrossWeight` |  | |  | `ehfnd_gross_weight_val` |  |  |
| `GrossWeightUnit` |  | |  | `ehfnd_gross_weight_uom` |  |  |
| `GrossVolume` |  | |  | `ehfnd_gross_volume_val` |  |  |
| `GrossVolumeUnit` |  | |  | `ehfnd_gross_volume_uom` |  |  |
| `_Root` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Item Description R'
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
define abstract entity D_PCLgsDcGetDaGdsDocInfoItemR
{
  ProdCmplncLogsDocumentItem    : ehfnd_log_doc_posnr;           // Id of the corresponding item in the PCLD instance
  DngrsGdsIsHazardousMaterial   : dngrsgdsishazardousmaterial;   // abap_boolean Flag product is Dangerous Goods
  DngrsGdsIsGrossWeightCalcRlvt : dngrsgdsisgrossweightcalcrlvt; // abap_boolean Flag Product is Gross Weight Calculation relevant
  DngrsGdsDescForDocumentsText  : dngrsgdsdescfordocumentstext;  // string Concatenated texts with “new lines”
  @Semantics.quantity.unitOfMeasure: 'DangerousGoodNetMassSAPUnit'
  DangerousGoodNetMassQty       : dangerousgoodnetmassqty;       // dec11_4 Dangerous goods net mass
  DangerousGoodNetMassSAPUnit   : dangerousgoodnetmasssapunit;   // ehfnd_unit_code_nce Dangerous goods net mass SAP unit
  DangerousGoodNetMassISOUnit   : dangerousgoodnetmassisounit;   // isocd_unit Dangerous goods net mass ISO unit
  @Semantics.quantity.unitOfMeasure: 'GrossWeightUnit'
  GrossWeight                   : ehfnd_gross_weight_val;        // /scmtms/quantity Gross Weight Value
  GrossWeightUnit               : ehfnd_gross_weight_uom;        // meins Gross Weight Unit of Measure
  @Semantics.quantity.unitOfMeasure: 'GrossVolumeUnit'
  GrossVolume                   : ehfnd_gross_volume_val;        // /scmtms/quantity Gross Volume Value
  GrossVolumeUnit               : ehfnd_gross_volume_uom;        // meins Gross Volume Unit of Measure

  _Root                         : association to parent D_PCLgsDcGetDngrsGdsDocInfoR;
}
```
