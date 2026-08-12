---
name: I_FINTRANSFLOWCATEGORYTEXT
description: "Fintransflowcategorytext"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - text-view
  - text
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_FINTRANSFLOWCATEGORYTEXT

**Fintransflowcategorytext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `FinTransFlowCategory` | ✓ | |  | `cast( sbktyp as ftr_flow_category preserving type )` |  |  |
| `FinTransFlowCategoryName` |  | |  | `xbktyp` |  |  |
| `_Language` | | ✓ | | | | |
| `_FlowCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_FlowCategory` | `I_FinTransFlowCategory` | [0..1] |

## Source Code

```abap
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'IFTFLOWCATT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Fin Transaction Flow Category - Text'
@ObjectModel.dataCategory: #TEXT 
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.representativeKey: 'FinTransFlowCategory'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@Metadata.ignorePropagatedAnnotations: true 
@VDM.viewType: #BASIC
define view I_FinTransFlowCategoryText 
  as select from at07t
  association [0..1] to I_Language             as _Language     on $projection.Language = _Language.Language
  association [0..1] to I_FinTransFlowCategory as _FlowCategory on $projection.FinTransFlowCategory = _FlowCategory.FinTransFlowCategory
{
  @Semantics.language: true
  @ObjectModel.foreignKey.association: '_Language'
  key spras  as Language,
  @ObjectModel.foreignKey.association: '_FlowCategory'
  key cast( sbktyp as ftr_flow_category preserving type ) as FinTransFlowCategory,
  
  @Semantics.text: true
  xbktyp     as FinTransFlowCategoryName,
  
  _Language,
  _FlowCategory
}
where sbkklas = '1'
```
