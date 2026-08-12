---
name: I_DOCUMENTINFORECORDCADSTS
description: "Documentinforecordcadsts"
app_component: CA-DMS
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_DOCUMENTINFORECORDCADSTS

**Documentinforecordcadsts**

| Property | Value |
|---|---|
| App Component | `CA-DMS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IsDocInfoRecdCreatedFromCAD` | ✓ | |  | `substring( Domval.domvalue_l, 1, 1 )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_DocumentInfoRecordCADStsT` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICVDOCCADSTS'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics: { dataCategory: #DIMENSION }
@Metadata.allowExtensions: true
@ObjectModel.representativeKey: 'IsDocInfoRecdCreatedFromCAD'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #M, dataClass: #META }
@EndUserText.label: 'Document Info Record CAD Status'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]

define view I_DocumentInfoRecordCADSts
  as select from dd07l as Domval
  association [0..*] to I_DocumentInfoRecordCADStsT as _Text on $projection.IsDocInfoRecdCreatedFromCAD = _Text.IsDocInfoRecdCreatedFromCAD
{
  @Semantics.booleanIndicator:true
  key substring( Domval.domvalue_l, 1, 1 )  as  IsDocInfoRecdCreatedFromCAD,
      --Association
      _Text
      
}
where
      Domval.domname  = 'CV_VDM_DOC_CAD_FLAG'
  and Domval.as4local = 'A'
```
