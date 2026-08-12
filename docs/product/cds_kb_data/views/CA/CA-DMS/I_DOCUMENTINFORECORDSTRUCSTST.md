---
name: I_DOCUMENTINFORECORDSTRUCSTST
description: "Documentinforecordstrucstst"
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
# I_DOCUMENTINFORECORDSTRUCSTST

**Documentinforecordstrucstst**

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
| `IsDocInfoRecordStructure` | ✓ | |  | `domvalue_l` |  |  |
| `DocInfoRecdStrucDescription` |  | |  | `ddtext` |  |  |
| `_DocumentInfoRecordStrucSts` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DocumentInfoRecordStrucSts` | `I_DocumentInfoRecordStrucSts` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICVDOCSTRUCSTST'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #COMPOSITE
@ObjectModel.representativeKey: 'IsDocInfoRecordStructure'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #L, dataClass: #META }
@EndUserText.label: 'Document Info Record Struc Status - Text'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

define view I_DocumentInfoRecordStrucStsT
  as select from dd07t as Value

  association [0..1] to I_DocumentInfoRecordStrucSts as _DocumentInfoRecordStrucSts on $projection.IsDocInfoRecordStructure = _DocumentInfoRecordStrucSts.IsDocInfoRecordStructure
  association [0..1] to I_Language                   as _Language                   on $projection.Language = _Language.Language

{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                    as Language,

      @ObjectModel.foreignKey.association: '_DocumentInfoRecordStrucSts'
  //key substring( domvalue_l, 1, 1 ) as IsDocInfoRecordStructure, Remove substring due to redundancy. No impacts found in another functionallity
  key domvalue_l as IsDocInfoRecordStructure,

      @Semantics.text: true
      @EndUserText.label:'Document Structure Status Description'
      @EndUserText.quickInfo: 'Document Structure Status Description'
      ddtext                        as DocInfoRecdStrucDescription,

      //Associations
      _DocumentInfoRecordStrucSts,
      _Language
      
}
where
      domname  = 'CV_VDM_DOC_STRUCTURE'
  and as4local = 'A'
```
