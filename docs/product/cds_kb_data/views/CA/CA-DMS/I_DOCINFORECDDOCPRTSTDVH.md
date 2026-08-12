---
name: I_DOCINFORECDDOCPRTSTDVH
description: "Docinforecddocprtstdvh"
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
# I_DOCINFORECDDOCPRTSTDVH

**Docinforecddocprtstdvh**

| Property | Value |
|---|---|
| App Component | `CA-DMS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DocumentInfoRecordDocType` | ✓ | |  |  | `CHAR(3)` | Document Type |
| `DocumentInfoRecordDocNumber` | ✓ | |  |  | `CHAR(25)` | Document Number |
| `DocumentInfoRecordDocVersion` | ✓ | |  |  | `CHAR(2)` | Document Version |
| `DocumentInfoRecordDocPart` | ✓ | |  |  | `CHAR(3)` | Document Part |
| `_DocType` | | ✓ | | | | |
| `_DocNumber` | | ✓ | | | | |
| `_DocVersion` | | ✓ | | | | |

## Source Code

```abap
//GENERATED:003:GlBfhyJl7kU}e1}23kDJAW
@AbapCatalog.sqlViewName: 'ICVDOCPRT_VH'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #COMPOSITE
@Search.searchable: true
@Consumption.ranked:true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'DocumentInfoRecordDocPart'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle: {
  contract: {
    type:#PUBLIC_LOCAL_API
  },
  status: #DEPRECATED,
  successor: 'I_DocumentInfoRecordDocPrtVH'
}
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@EndUserText.label: 'Document Info Record Document Part'
define view I_DocInfoRecdDocPrtStdVH as select from I_DocumentInfoRecordDocPrt {
  @ObjectModel.foreignKey.association: '_DocType'
  @Search.defaultSearchElement: true
  @Search.ranking: #LOW
  key DocumentInfoRecordDocType,
  @ObjectModel.foreignKey.association: '_DocNumber'
  @Search.defaultSearchElement: true
  @Search.ranking: #LOW
  key DocumentInfoRecordDocNumber,
  @ObjectModel.foreignKey.association: '_DocVersion'
  @Search.defaultSearchElement: true
  @Search.ranking: #LOW
  key DocumentInfoRecordDocVersion,
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  key DocumentInfoRecordDocPart,


  @Consumption.hidden: true
  _DocType,
  @Consumption.hidden: true
  _DocNumber,
  @Consumption.hidden: true
  _DocVersion
}
```
