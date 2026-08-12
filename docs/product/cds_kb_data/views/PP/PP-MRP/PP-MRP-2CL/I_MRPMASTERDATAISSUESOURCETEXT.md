---
name: I_MRPMASTERDATAISSUESOURCETEXT
description: "Mrpmasterdataissuesourcetext"
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
  - text-view
  - text
  - component:PP-MRP-2CL
  - lob:Manufacturing
---
# I_MRPMASTERDATAISSUESOURCETEXT

**Mrpmasterdataissuesourcetext**

| Property | Value |
|---|---|
| App Component | `PP-MRP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MRPMasterDataIssueSource` | ✓ | |  | `cast( substring( domvalue_l, 1, 1 ) as pph_source_of_issue preserving type )` |  |  |
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `MRPMasterDataIssueSourceName` |  | |  | `cast( ddtext as ddtext preserving type )` |  |  |
| `_MRPMasterDataIssueSource` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MRPMasterDataIssueSource` | `I_MRPMasterDataIssueSource` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IMRPMDIT'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'MRPMasterDataIssueSource'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #META}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Source of an MRP Master Data Issue - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_MRPMasterDataIssueSourceText
  as select from dd07t
  association [1..1] to I_MRPMasterDataIssueSource as _MRPMasterDataIssueSource on $projection.MRPMasterDataIssueSource = _MRPMasterDataIssueSource.MRPMasterDataIssueSource  
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_MRPMasterDataIssueSource'  
      @ObjectModel.text.element: ['MRPMasterDataIssueSourceName']
  key cast( substring( domvalue_l, 1, 1 ) as pph_source_of_issue preserving type ) as MRPMasterDataIssueSource,
      @ObjectModel.foreignKey.association: '_Language'    
      @Semantics.language: true
  key cast( ddlanguage as spras preserving type)                                   as Language,
      @Analytics.hidden: true
      @Consumption.hidden: true
      domvalue_l                                                                   as DomainValue,
      @Semantics.text: true
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.7}
      cast( ddtext as ddtext preserving type )                                     as MRPMasterDataIssueSourceName,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]                   
      _MRPMasterDataIssueSource,
      _Language
}
where domname  = 'PPH_MRP_KIND'
  and as4local = 'A'
  and as4vers  = '0000';
```
