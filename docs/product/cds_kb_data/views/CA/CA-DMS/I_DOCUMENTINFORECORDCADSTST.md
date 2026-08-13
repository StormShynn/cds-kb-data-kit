---
name: I_DOCUMENTINFORECORDCADSTST
description: "Documentinforecordcadstst"
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
# I_DOCUMENTINFORECORDCADSTST

**Documentinforecordcadstst**

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
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `IsDocInfoRecdCreatedFromCAD` | ✓ | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `CADStatusDescription` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_DocumentInfoRecordCADSts` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DocumentInfoRecordCADSts` | `I_DocumentInfoRecordCADSts` | [0..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICVDOCCADSTSTEXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'IsDocInfoRecdCreatedFromCAD'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #L, dataClass: #META }
@EndUserText.label: 'Document Info Record CAD Status - Text'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

define view I_DocumentInfoRecordCADStsT
  as select from dd07t as Value
  association [0..1] to I_DocumentInfoRecordCADSts as _DocumentInfoRecordCADSts on $projection.IsDocInfoRecdCreatedFromCAD = _DocumentInfoRecordCADSts.IsDocInfoRecdCreatedFromCAD
  association [1..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'

  key Value.ddlanguage                    as Language,
    //key substring( Value.domvalue_l, 1, 1 ) as IsDocInfoRecdCreatedFromCAD, Remove substring due to redundancy. No impacts found in another functionallity
  key Value.domvalue_l                    as IsDocInfoRecdCreatedFromCAD,

      @Semantics.text: true
      @EndUserText.label:'CAD Status Description'

      ddtext                              as CADStatusDescription,
      --Association
      _Language,
      _DocumentInfoRecordCADSts

}
where
      Value.domname  = 'CV_VDM_DOC_CAD_FLAG'
  and Value.as4local = 'A'
```
