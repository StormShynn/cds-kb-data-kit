---
name: I_DOCUMENTINFORECORDDOCSTATUST
description: "Documentinforecorddocstatust"
app_component: CA-DMS
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cvlang` | `LANG(1)` | Language |
| `InternalDocumentStatus` | ✓ | |  | `dokst` | `CHAR(2)` | Document Status |
| `ExternalDocumentStatus` |  | |  | `stabk` | `CHAR(2)` | Status of a document (language-dependent) |
| `DocumentStatusName` |  | |  | `dostx` | `CHAR(16)` | Description of document status |
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
