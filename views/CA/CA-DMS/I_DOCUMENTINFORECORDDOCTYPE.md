---
name: I_DOCUMENTINFORECORDDOCTYPE
description: Documentinforecorddoctype
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
  - document
  - component:CA-DMS
  - lob:Cross-Application Components
---
# I_DOCUMENTINFORECORDDOCTYPE

**Documentinforecorddoctype**

| Property | Value |
|---|---|
| App Component | `CA-DMS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DocumentInfoRecordDocType` | ✓ | |  | `dokar` |  |  |
| `ConfigDeprecationCode` |  | |  | `configdeprecationcode` |  |  |
| `DocInfoRecdNumberAssignType` |  | |  | `numvg` |  |  |
| `DocInfoRecdInternalNumberRange` |  | |  | `inumnr` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_DocumentInfoRecordDocTypeT` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICVDOCTYPE'
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Document Info Record Document Type'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics: { dataCategory: #DIMENSION }
@VDM.viewType: #BASIC
@ObjectModel.compositionRoot:true 
@ObjectModel.representativeKey: 'DocumentInfoRecordDocType'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.sapObjectNodeType.name: 'DocumentInfoRecordDocType'
@Search.searchable: true
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AbapCatalog.buffering.numberOfKeyFields: 000
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@Metadata.allowExtensions: true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION , #CDS_MODELING_ASSOCIATION_TARGET , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

define view I_DocumentInfoRecordDocType
  as select from tdwa

  association [0..*] to I_DocumentInfoRecordDocTypeT as _Text on $projection.DocumentInfoRecordDocType = _Text.DocumentInfoRecordDocType

{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      @ObjectModel.text.association: '_Text'
  key tdwa.dokar  as DocumentInfoRecordDocType,
  
      configdeprecationcode as ConfigDeprecationCode,
      numvg as DocInfoRecdNumberAssignType,
      inumnr as DocInfoRecdInternalNumberRange,
      
      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text
      
}
```
