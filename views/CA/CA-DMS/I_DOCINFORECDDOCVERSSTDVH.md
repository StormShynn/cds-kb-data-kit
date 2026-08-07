---
name: I_DOCINFORECDDOCVERSSTDVH
description: Docinforecddocversstdvh
app_component: CA-DMS
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-DMS
  - interface-view
  - value-help
  - standard-value-help
  - component:CA-DMS
  - lob:Cross-Application Components
---
# I_DOCINFORECDDOCVERSSTDVH

**Docinforecddocversstdvh**

| Property | Value |
|---|---|
| App Component | `CA-DMS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DocumentInfoRecordDocType` | ✓ | |  |  |  |  |
| `DocumentInfoRecordDocNumber` | ✓ | |  |  |  |  |
| `DocumentInfoRecordDocVersion` | ✓ | |  |  |  |  |
| `_DocType` | | ✓ | | | | |
| `_DocNumber` | | ✓ | | | | |

## Source Code

```abap
//GENERATED:003:GlBfhyJl7kU}e1}23kDJAW
@AbapCatalog.sqlViewName: 'ICVDOCVERS_VH'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #COMPOSITE
@ObjectModel.representativeKey: 'DocumentInfoRecordDocVersion'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #VALUE_HELP
@Search.searchable: true
@Consumption.ranked:true
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle: {
  contract: {
    type:#PUBLIC_LOCAL_API
  }
}
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@EndUserText.label: 'Document Info Record Document Version'
define view I_DocInfoRecdDocVersStdVH as select from I_DocumentInfoRecordDocVersion {
  @ObjectModel.foreignKey.association: '_DocType'
  @Search.defaultSearchElement: true
  @Search.ranking: #MEDIUM
  @Search.fuzzinessThreshold: 0.8
  key DocumentInfoRecordDocType,
  @ObjectModel.foreignKey.association: '_DocNumber'
  @Search.defaultSearchElement: true
  @Search.ranking: #MEDIUM
  @Search.fuzzinessThreshold: 0.8
  key DocumentInfoRecordDocNumber,
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  @Search.fuzzinessThreshold: 0.8
  key DocumentInfoRecordDocVersion,


  @Consumption.hidden: true
  _DocType,
  @Consumption.hidden: true
  _DocNumber
}
```
