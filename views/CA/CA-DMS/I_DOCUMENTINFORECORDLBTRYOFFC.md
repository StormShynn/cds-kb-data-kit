---
name: I_DOCUMENTINFORECORDLBTRYOFFC
description: Documentinforecordlbtryoffc
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
# I_DOCUMENTINFORECORDLBTRYOFFC

**Documentinforecordlbtryoffc**

| Property | Value |
|---|---|
| App Component | `CA-DMS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `LaboratoryOrDesignOffice` | ✓ | |  | `labor` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_DocumentInfoRecordLbtryOffcT` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICVDOCLBTRYOFFC'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics: { dataCategory: #DIMENSION }
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'LaboratoryOrDesignOffice'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #M, dataClass: #CUSTOMIZING }
@EndUserText.label: 'Document Info Record Laboratory Office'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #GENERIC
@AbapCatalog.buffering.numberOfKeyFields: 001
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@Search.searchable: true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION , #CDS_MODELING_ASSOCIATION_TARGET , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
define view I_DocumentInfoRecordLbtryOffc
  as select from t024l

  association [0..*] to I_DocumentInfoRecordLbtryOffcT as _Text on $projection.LaboratoryOrDesignOffice = _Text.LaboratoryOrDesignOffice

{
      @Search.defaultSearchElement: true
      @ObjectModel.text.association: '_Text'
  key t024l.labor as LaboratoryOrDesignOffice,

      // Associations
      _Text
      
}
```
