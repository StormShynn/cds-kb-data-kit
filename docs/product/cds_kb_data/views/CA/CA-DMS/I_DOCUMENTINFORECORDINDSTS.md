---
name: I_DOCUMENTINFORECORDINDSTS
description: "Documentinforecordindsts"
app_component: CA-DMS
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_DOCUMENTINFORECORDINDSTS

**Documentinforecordindsts**

| Property | Value |
|---|---|
| App Component | `CA-DMS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DocumentInfoRecordDocNumber` | ✓ | |  |  |  |  |
| `DocumentInfoRecordDocType` | ✓ | |  |  |  |  |
| `DocumentInfoRecordDocVersion` | ✓ | |  |  |  |  |
| `DocumentInfoRecordDocPart` | ✓ | |  |  |  |  |
| `DocInfoRecdIsMarkedForDeletion` |  | |  |  |  |  |
| `IsDocInfoRecdStructure` |  | |  |  |  |  |
| `IsDocInfoRecdCreatedFromCAD` |  | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_DocumentInfoRecordIndStsT` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICVDOCINDSTS'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@EndUserText.label: 'Document Indicator Status'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_DocumentInfoRecordIndSts
  as select from I_DocumentInfoRecord as DocumentHeader

  association [0..1] to I_DocumentInfoRecordIndStsT as _Text on  $projection.DocumentInfoRecordDocNumber  = _Text.DocumentInfoRecordDocNumber
                                                             and $projection.DocumentInfoRecordDocType    = _Text.DocumentInfoRecordDocType
                                                             and $projection.DocumentInfoRecordDocVersion = _Text.DocumentInfoRecordDocVersion
                                                             and $projection.DocumentInfoRecordDocPart    = _Text.DocumentInfoRecordDocPart

{

  key DocumentHeader.DocumentInfoRecordDocNumber    as DocumentInfoRecordDocNumber,
  key DocumentHeader.DocumentInfoRecordDocType      as DocumentInfoRecordDocType,
  key DocumentHeader.DocumentInfoRecordDocVersion   as DocumentInfoRecordDocVersion,
  key DocumentHeader.DocumentInfoRecordDocPart      as DocumentInfoRecordDocPart,
  
      @EndUserText.label:'Deletion Indicator'
      DocumentHeader.DocInfoRecdIsMarkedForDeletion as DocInfoRecdIsMarkedForDeletion,

      @EndUserText.label:'Document Structure Indicator'
      DocumentHeader.IsDocInfoRecdStructure         as IsDocInfoRecdStructure,

      @EndUserText.label:'CAD Indicator'
      DocumentHeader.IsDocInfoRecdCreatedFromCAD    as IsDocInfoRecdCreatedFromCAD,

      // Associations
      _Text
      
}
```
