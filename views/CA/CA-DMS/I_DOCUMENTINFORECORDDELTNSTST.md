---
name: I_DOCUMENTINFORECORDDELTNSTST
description: Documentinforecorddeltnstst
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
# I_DOCUMENTINFORECORDDELTNSTST

**Documentinforecorddeltnstst**

| Property | Value |
|---|---|
| App Component | `CA-DMS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` |
| `DocInfoRecdIsMarkedForDeletion` | ✓ | |  | `domvalue_l` |
| `DeleteStatusDescription` |  | |  | `ddtext` |
| `_DocumentInfoRecordDeltnSts` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DocumentInfoRecordDeltnSts` | `I_DocumentInfoRecordDeltnSts` | [1..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICVDOCDELSTSTEXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'DocInfoRecdIsMarkedForDeletion'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #L, dataClass: #META }
@EndUserText.label: 'Delete Status Description - Text'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

define view I_DocumentInfoRecordDeltnStsT
  as select from dd07t as Value
  association [1..1] to I_DocumentInfoRecordDeltnSts as _DocumentInfoRecordDeltnSts on $projection.DocInfoRecdIsMarkedForDeletion = _DocumentInfoRecordDeltnSts.DocInfoRecdIsMarkedForDeletion
  association [1..1] to I_Language                   as _Language                   on $projection.Language = _Language.Language
{

       @Semantics.language
  key  ddlanguage                    as  Language,

       @EndUserText.label:'Deletion Flag'
       @ObjectModel.foreignKey.association:'_DocumentInfoRecordDeltnSts'
       //key  substring( domvalue_l, 1, 1 ) as  DocInfoRecdIsMarkedForDeletion, Remove substring due to redundancy. No impacts found in another functionallity
  key  domvalue_l                    as  DocInfoRecdIsMarkedForDeletion,

       @Semantics.text
       @EndUserText.label:'Delete Status Description'
       ddtext                        as  DeleteStatusDescription,

       //Associations
       _DocumentInfoRecordDeltnSts,
       _Language
}
where
      domname  = 'CV_VDM_DOC_DELETION_FLAG'
  and as4local = 'A'
```
