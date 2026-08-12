---
name: I_FINTRANSFLOWFIXSTATUSTEXT
description: "Fintransflowfixstatustext"
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
  - status
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_FINTRANSFLOWFIXSTATUSTEXT

**Fintransflowfixstatustext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `FinTransFlowFixingStatus` | ✓ | |  | `cast( dd07t.domvalue_l as tb_sbewebe )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `FinTransFlowFixingStatusName` |  | |  | `cast( dd07t.ddtext as tb_sbewebe_name preserving type )` |  |  |
| `_FixingStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FixingStatus` | `I_FinTransFlowFixingStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Fin Trans Flow Fixing Status - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #META
}
@Analytics.dataExtraction.enabled: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'FinTransFlowFixingStatus'
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_FinTransFlowFixStatusText
  as select from dd07t
  association [0..1] to I_FinTransFlowFixingStatus as _FixingStatus on $projection.FinTransFlowFixingStatus = _FixingStatus.FinTransFlowFixingStatus
  association [0..1] to I_Language                as _Language      on $projection.Language                  = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )       as Language, 
      @ObjectModel.foreignKey.association: '_FixingStatus'
      @ObjectModel.text.element: ['FinTransFlowFixingStatusName']
  key cast( dd07t.domvalue_l as tb_sbewebe )                  as FinTransFlowFixingStatus,
  
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                        as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as tb_sbewebe_name preserving type ) as FinTransFlowFixingStatusName,
      
      _FixingStatus,
      _Language
} 
where dd07t.domname  = 'T_SBEWEBE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
