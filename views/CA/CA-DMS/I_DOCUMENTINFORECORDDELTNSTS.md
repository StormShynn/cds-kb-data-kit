---
name: I_DOCUMENTINFORECORDDELTNSTS
description: Documentinforecorddeltnsts
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
# I_DOCUMENTINFORECORDDELTNSTS

**Documentinforecorddeltnsts**

| Property | Value |
|---|---|
| App Component | `CA-DMS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `DocInfoRecdIsMarkedForDeletion` | ✓ | |  | `substring( Domval.domvalue_l, 1, 1 )` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_DocumentInfoRecordDeltnStsT` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICVDOCDELTNSTS'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics: { dataCategory: #DIMENSION }
@Metadata.allowExtensions: true
@ObjectModel.representativeKey: 'DocInfoRecdIsMarkedForDeletion'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #M, dataClass: #META }
@EndUserText.label: 'Document Info Record Delete Status'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_DocumentInfoRecordDeltnSts
  as select from dd07l as Domval
  association [0..*] to I_DocumentInfoRecordDeltnStsT as _Text on $projection.DocInfoRecdIsMarkedForDeletion = _Text.DocInfoRecdIsMarkedForDeletion
{
     
      @EndUserText.label: 'Deletion Indicator'
      @ObjectModel.text.association: '_Text'
      @Semantics.booleanIndicator:true
  key substring( Domval.domvalue_l, 1, 1 )  as  DocInfoRecdIsMarkedForDeletion,
  @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      --Association
      _Text
}
where
      domname  = 'CV_VDM_DOC_DELETION_FLAG'
  and as4local = 'A'
```
