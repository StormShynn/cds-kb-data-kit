---
name: I_FINTRANSFLOWFIXINGSTATUS
description: Fintransflowfixingstatus
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
  - status
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_FINTRANSFLOWFIXINGSTATUS

**Fintransflowfixingstatus**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinTransFlowFixingStatus` | ✓ | |  | `cast( dd07l.domvalue_l as tb_sbewebe )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_FinTransFlowFixStatusText` | [0..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Fin Trans Flow Fixing Status'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #META
}
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@Analytics.internalName: #LOCAL
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'FinTransFlowFixingStatus'
@ObjectModel.resultSet.sizeCategory: #XS
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.sapObjectNodeType.name: 'FinTransFlowFixingStatus'
define view entity I_FinTransFlowFixingStatus
  as select from dd07l
    association [0..*] to I_FinTransFlowFixStatusText as _Text on $projection.FinTransFlowFixingStatus = _Text.FinTransFlowFixingStatus
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as tb_sbewebe ) as FinTransFlowFixingStatus,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                       as DomainValue,

      _Text
}
where
      dd07l.domname  = 'T_SBEWEBE'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
