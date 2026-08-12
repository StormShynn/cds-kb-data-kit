---
name: I_DOCUMENTINFORECORDLBTRYOFFCT
description: "Documentinforecordlbtryoffct"
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
# I_DOCUMENTINFORECORDLBTRYOFFCT

**Documentinforecordlbtryoffct**

| Property | Value |
|---|---|
| App Component | `CA-DMS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `LaboratoryOrDesignOffice` | ✓ | |  | `labor` |  |  |
| `LaboratoryOrDesignOfficeName` |  | |  | `lbtxt` |  |  |
| `_Language` | | ✓ | | | | |
| `_LabOffice` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_LabOffice` | `I_DocumentInfoRecordLbtryOffc` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICVDOCLBTRYOFFCT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'LaboratoryOrDesignOffice'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #M, dataClass: #CUSTOMIZING }
@EndUserText.label: 'Document Info Record Lbtry Office - Text'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #GENERIC
@AbapCatalog: {
  buffering: {
    numberOfKeyFields: 001
  }
}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@Search.searchable: true
define view I_DocumentInfoRecordLbtryOffcT
  as select from t024x

  association [0..1] to I_Language                    as _Language  on $projection.Language = _Language.Language
  association [0..1] to I_DocumentInfoRecordLbtryOffc as _LabOffice on $projection.LaboratoryOrDesignOffice = _LabOffice.LaboratoryOrDesignOffice
{

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras               as Language,

      @ObjectModel.text.element: 'LaboratoryOrDesignOfficeName'
  key labor               as LaboratoryOrDesignOffice,

      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      @EndUserText.label:'Document Structure Lab Office Name'
      lbtxt               as LaboratoryOrDesignOfficeName,

      // Associations
      _Language,
      _LabOffice
      
}
```
