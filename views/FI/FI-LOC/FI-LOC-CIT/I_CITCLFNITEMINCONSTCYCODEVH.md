---
name: I_CITCLFNITEMINCONSTCYCODEVH
description: Citclfniteminconstcycodevh
app_component: FI-LOC-CIT
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-CIT
  - interface-view
  - value-help
  - item-level
  - component:FI-LOC-CIT
  - lob:Finance
---
# I_CITCLFNITEMINCONSTCYCODEVH

**Citclfniteminconstcycodevh**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CIT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CITClassfctnItemInconstcyCode` | ✓ | |  | `cast(dd07l.domvalue_l as ficite_amnt_inconsistency)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICITCLITMINCVH'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'CIT Item Inconsistency Code'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'CITClassfctnItemInconstcyCode'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #VALUE_HELP_PROVIDER]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define root view I_CITClfnItemInconstcyCodeVH
  as select from dd07l
  composition [0..*] of I_CITClfnItemInconstcyCodeText as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as ficite_amnt_inconsistency) as CITClassfctnItemInconstcyCode,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                                    as DomainValue,
      _Text
}
where
      dd07l.domname  = 'FICITE_AMNT_INCONSISTENCY'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
