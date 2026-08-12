---
name: I_MRPMASTERDATAISSUESOURCE
description: "Mrpmasterdataissuesource"
app_component: PP-MRP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-MRP
  - interface-view
  - component:PP-MRP-2CL
  - lob:Manufacturing
---
# I_MRPMASTERDATAISSUESOURCE

**Mrpmasterdataissuesource**

| Property | Value |
|---|---|
| App Component | `PP-MRP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MRPMasterDataIssueSource` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as pph_source_of_issue preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_MRPMasterDataIssueSourceText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IMRPMDI'
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'MRPMasterDataIssueSource'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.sapObjectNodeType.name: 'MRPMasterDataIssueSource'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #META}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Source of an MRP Master Data Issue'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_MRPMasterDataIssueSource
  as select from dd07l
  association [0..*] to I_MRPMasterDataIssueSourceText as _Text on $projection.MRPMasterDataIssueSource = _Text.MRPMasterDataIssueSource
{
      @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 1 ) as pph_source_of_issue preserving type ) as MRPMasterDataIssueSource,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      domvalue_l                                                                    as DomainValue,
  
      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text
}
where
      domname  = 'PPH_MRP_KIND'
  and as4local = 'A'
  and as4vers  = '0000';
```
