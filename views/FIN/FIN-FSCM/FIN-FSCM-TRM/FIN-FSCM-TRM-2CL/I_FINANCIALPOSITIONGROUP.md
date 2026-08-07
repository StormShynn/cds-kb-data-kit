---
name: I_FINANCIALPOSITIONGROUP
description: "Financialpositiongroup"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_FINANCIALPOSITIONGROUP

**Financialpositiongroup**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialPositionGroup` | ✓ | |  | `fin_pos_grp` |  |  |
| `FinancialPositionGroupName` |  | |  | `fin_pos_grp_name` |  |  |
| `FinPositionAssetLiabilityCode` |  | |  | `asset_or_lblty` |  |  |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
@ObjectModel.representativeKey: 'FinancialPositionGroup'
@Analytics.technicalName: 'IFSFINPOSGRP'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.sapObjectNodeType.name: 'FinancialPositionGroup'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@AccessControl.authorizationCheck: #NOT_REQUIRED

@VDM.viewType: #BASIC
@Analytics: {dataCategory: #DIMENSION, dataExtraction.enabled: true}
@EndUserText.label: 'Financial Status Financial Position Grp'
@Metadata.ignorePropagatedAnnotations:true
define view entity I_FinancialPositionGroup
  as select from ftr_fp_grp_def as FinancialPositionGroupDef
 
{ 
   
      @ObjectModel.text.element: [ 'FinancialPositionGroupName']
  key FinancialPositionGroupDef.fin_pos_grp       as FinancialPositionGroup,
      @Semantics.text: true
      FinancialPositionGroupDef.fin_pos_grp_name  as FinancialPositionGroupName,
      FinancialPositionGroupDef.asset_or_lblty    as FinPositionAssetLiabilityCode

}
```
