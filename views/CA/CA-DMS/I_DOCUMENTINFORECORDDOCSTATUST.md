---
name: I_DOCUMENTINFORECORDDOCSTATUST
description: Documentinforecorddocstatust
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
  - status
  - component:CA-DMS
  - lob:Cross-Application Components
---
# I_DOCUMENTINFORECORDDOCSTATUST

**Documentinforecorddocstatust**

| Property | Value |
|---|---|
| App Component | `CA-DMS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cvlang` |  |  |
| `InternalDocumentStatus` | ✓ | |  | `dokst` |  |  |
| `ExternalDocumentStatus` |  | |  | `stabk` |  |  |
| `DocumentStatusName` |  | |  | `dostx` |  |  |
| `_DocStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DocStatus` | `I_DocumentInfoRecordDocStatus` | [0..*] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICVDOCSTATUST'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ClientHandling.type : #INHERITED
@ObjectModel.representativeKey: 'InternalDocumentStatus'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #M, dataClass: #CUSTOMIZING }
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #GENERIC
@AbapCatalog.buffering.numberOfKeyFields: #(001)
@EndUserText.label: 'Document Info Record Document Sts - Text'
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
define view I_DocumentInfoRecordDocStatusT
  as select from tdwst as status_text

  association [0..*] to I_DocumentInfoRecordDocStatus as _DocStatus on $projection.InternalDocumentStatus = _DocStatus.InternalDocumentStatus
  association [1..1] to I_Language                as _Language     on $projection.Language = _Language.Language

{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key status_text.cvlang as Language,
      @ObjectModel.text.element:['DocumentStatusName'] 
  key status_text.dokst as InternalDocumentStatus,
      @ObjectModel.text.element:['ExternalDocumentStatus']
      status_text.stabk as ExternalDocumentStatus,

      @Semantics.text: true
      status_text.dostx as DocumentStatusName,

      //Associations
      _Language,
      _DocStatus
      
}
```
