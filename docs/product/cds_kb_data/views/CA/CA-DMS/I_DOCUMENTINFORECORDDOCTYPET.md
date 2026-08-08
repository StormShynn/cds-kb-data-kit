---
name: I_DOCUMENTINFORECORDDOCTYPET
description: "Documentinforecorddoctypet"
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
# I_DOCUMENTINFORECORDDOCTYPET

**Documentinforecorddoctypet**

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
| `Language` | ✓ | |  | `cvlang` |  |  |
| `DocumentTypeDescription` |  | |  | `dartxt` |  |  |
| `_DocType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DocType` | `I_DocumentInfoRecordDocType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICVDOCTYPETEXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'DocumentInfoRecordDocType'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #M, dataClass: #CUSTOMIZING }
@EndUserText.label: 'Document Info Record Document Type - Txt'
@Search.searchable: true
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #GENERIC
@AbapCatalog.buffering.numberOfKeyFields: 001
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
define view I_DocumentInfoRecordDocTypeT
  as select from tdwat

  association [0..1] to I_DocumentInfoRecordDocType as _DocType  on $projection.DocumentInfoRecordDocType = _DocType.DocumentInfoRecordDocType

  association [0..1] to I_Language                  as _Language on $projection.Language = _Language.Language
{      
  key tdwat.dokar   as DocumentInfoRecordDocType,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key tdwat.cvlang  as Language,
      
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      @Semantics.text: true
      tdwat.dartxt  as DocumentTypeDescription,

      // Associations
      _DocType,
      _Language
      
}
```
