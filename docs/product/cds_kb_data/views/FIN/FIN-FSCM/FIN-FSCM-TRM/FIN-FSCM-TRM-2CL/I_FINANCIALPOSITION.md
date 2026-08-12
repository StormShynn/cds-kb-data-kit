---
name: I_FINANCIALPOSITION
description: "Financialposition"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
# I_FINANCIALPOSITION

**Financialposition**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialPosition` | ✓ | |  | `fin_pos` |  |  |
| `FinancialPositionName` |  | |  | `fin_pos_name` |  |  |
| `FinancialPositionGroup` |  | |  | `fin_pos_grp` |  |  |
| `FinancialPositionDataSource` |  | |  | `datasource` |  |  |
| `FinPositionAssetLiabilityCode` |  | |  |  |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `FinancialPositionGroupDef` | `I_FinancialPositionGroup` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
@ObjectModel.representativeKey: 'FinancialPosition'
@Analytics.technicalName: 'IFSFINPOS'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.sapObjectNodeType.name: 'FinancialPosition'
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@Analytics: {dataCategory: #DIMENSION, dataExtraction.enabled: true}
@EndUserText.label: 'Financial Status Financial Position'
@Metadata.ignorePropagatedAnnotations:true 
define view entity I_FinancialPosition
  as select from ftr_fp_def               as FinancialPositionDef
 
    association[0..1] to I_FinancialPositionGroup as FinancialPositionGroupDef on FinancialPositionDef.fin_pos_grp = FinancialPositionGroupDef.FinancialPositionGroup

{    
      @ObjectModel.text.element: [ 'FinancialPositionName']
  key FinancialPositionDef.fin_pos                                  as FinancialPosition,
      @Semantics.text: true
      FinancialPositionDef.fin_pos_name                             as FinancialPositionName,
      FinancialPositionDef.fin_pos_grp                              as FinancialPositionGroup,
      FinancialPositionDef.datasource                               as FinancialPositionDataSource,
      FinancialPositionGroupDef.FinPositionAssetLiabilityCode       as FinPositionAssetLiabilityCode
}
```
