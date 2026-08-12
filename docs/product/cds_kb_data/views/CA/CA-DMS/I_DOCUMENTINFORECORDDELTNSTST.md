---
name: I_DOCUMENTINFORECORDDELTNSTST
description: "Documentinforecorddeltnstst"
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `DocInfoRecdIsMarkedForDeletion` | ✓ | |  | `domvalue_l` |  |  |
| `DeleteStatusDescription` |  | |  | `ddtext` |  |  |
| `_DocumentInfoRecordDeltnSts` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

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
