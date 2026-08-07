---
name: D_PCLGSDCGETDNGRSGDSDOCINFOR
description: D Pclgsdcgetdngrsgdsdocinfor
app_component: EHS-SUS-FND-PC
software_component: SAPSCORE
release_state: released
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
# D_PCLGSDCGETDNGRSGDSDOCINFOR

**D Pclgsdcgetdngrsgdsdocinfor**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OutputScenario` |  | |  | `ehdgm_output_scenario` |  |  |
| `ProdCmplncLogsDocument` |  | |  | `ehfnd_log_doc_number` |  |  |
| `D_PCLgsDcGetDaGdsDocInfoItemR` |  | |  | `_ItemInformation : composition [0..*] of D_PCLgsDcGetDaGdsDocInfoItemR` |  |  |
| `D_PCLgsDcGetDaGdsDocInfoGroupR` |  | |  | `_GroupingDescription : composition [0..*] of D_PCLgsDcGetDaGdsDocInfoGroupR` |  |  |
| `DangerousGoodsEUADRPointText` |  | |  | `dangerousgoodseuadrpointtext` |  |  |
| `DangerousGoodsRIDPointText` |  | |  | `dangerousgoodsridpointtext` |  |  |
| `DngrsGdsEUADRQtyExmpIsPossible` |  | |  | `dngrsgdseuadrqtyexmpispossible` |  |  |
| `DngrsGdsRIDQtyExmpIsPossible` |  | |  | `dngrsgdsridqtyexmpispossible` |  |  |
| `D_PCLgsDcGetDaGdsDocInfoPointR` |  | |  | `_PointsPerCategory : composition [0..*] of D_PCLgsDcGetDaGdsDocInfoPointR` |  |  |
| `DngrsGdsInLimitedQuantitiesQty` |  | |  | `dngrsgdsinlimitedquantitiesqty` |  |  |
| `DngrsGdsInLimitedQtySAPUnit` |  | |  | `dngrsgdsinlimitedqtysapunit` |  |  |
| `DngrsGdsInLimitedQtyISOUnit` |  | |  | `dngrsgdsinlimitedqtyisounit` |  |  |
| `DngrsGdsInExceptedQtyValue` |  | |  | `dngrsgdsinexceptedqtyvalue` |  |  |
| `GrossWeight` |  | |  | `ehfnd_gross_weight_val` |  |  |
| `GrossWeightUnit` |  | |  | `ehfnd_gross_weight_uom` |  |  |
| `GrossVolume` |  | |  | `ehfnd_gross_volume_val` |  |  |
| `GrossVolumeUnit` |  | |  | `ehfnd_gross_volume_uom` |  |  |

## Source Code

```abap
@EndUserText.label: 'DG Document Info R'
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
define root abstract entity D_PCLgsDcGetDngrsGdsDocInfoR
{
  OutputScenario                 : ehdgm_output_scenario;                                // Output scenario, e.g. 'S_TM_IMO_C'
  ProdCmplncLogsDocument         : ehfnd_log_doc_number;                                 // Logistics Document Number
  _ItemInformation               : composition [0..*] of D_PCLgsDcGetDaGdsDocInfoItemR;  // ttyp Description for each item
  _GroupingDescription           : composition [0..*] of D_PCLgsDcGetDaGdsDocInfoGroupR; // ttyp Grouping information
  DangerousGoodsEUADRPointText   : dangerousgoodseuadrpointtext;                         // Sum of all 1.1.3.6 points for regulation ADR
  DangerousGoodsRIDPointText     : dangerousgoodsridpointtext;                           // Sum of all 1.1.3.6 points for regulation RID
  DngrsGdsEUADRQtyExmpIsPossible : dngrsgdseuadrqtyexmpispossible;                       // abap_boolean Is ADR 1.1.3.6 Exemption possible
  DngrsGdsRIDQtyExmpIsPossible   : dngrsgdsridqtyexmpispossible;                         // abap_boolean Is RID 1.1.3.6 Exemption possible
  _PointsPerCategory             : composition [0..*] of D_PCLgsDcGetDaGdsDocInfoPointR; // ttyp Table containing the 1.1.3.6 information (1000 Point Rule)
  @Semantics.quantity.unitOfMeasure: 'DngrsGdsInLimitedQtySAPUnit'
  DngrsGdsInLimitedQuantitiesQty : dngrsgdsinlimitedquantitiesqty;                       // dec11_4 Dangerous Goods in Limited Quantities (Gross Weight)
  DngrsGdsInLimitedQtySAPUnit    : dngrsgdsinlimitedqtysapunit;                          // ehfnd_unit_code_nce Dangerous Goods in Limited Quantities (Gross Weight) SAP Unit - KG
  DngrsGdsInLimitedQtyISOUnit    : dngrsgdsinlimitedqtyisounit;                          // isocd_unit Dangerous Goods in Limited Quantities (Gross Weight) ISO Unit - KG
  DngrsGdsInExceptedQtyValue     : dngrsgdsinexceptedqtyvalue;                           // int4 Dangerous Goods in Excepted Quantities – the number of packages of all items that have enclosure variant “EQ”
  @Semantics.quantity.unitOfMeasure: 'GrossWeightUnit'
  GrossWeight                   : ehfnd_gross_weight_val;                                // /scmtms/quantity Gross Weight Value
  GrossWeightUnit               : ehfnd_gross_weight_uom;                                // meins Gross Weight Unit of Measure
  @Semantics.quantity.unitOfMeasure: 'GrossVolumeUnit'
  GrossVolume                   : ehfnd_gross_volume_val;                                // /scmtms/quantity Gross Volume Value
  GrossVolumeUnit               : ehfnd_gross_volume_uom;                                // meins Gross Volume Unit of Measure
}
```
