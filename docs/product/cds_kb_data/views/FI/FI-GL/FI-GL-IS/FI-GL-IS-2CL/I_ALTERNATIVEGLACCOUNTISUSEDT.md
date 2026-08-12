---
name: I_ALTERNATIVEGLACCOUNTISUSEDT
description: "Alternative GL Account Is Used - Text"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ALTERNATIVEGLACCOUNTISUSEDT')/$value
semantic_en: "Alternative GL Account Is Used - Text"
semantic_vi: "Alternative GL Account Is Used - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "alternative"
  - "account"
  - "used"
  - "text"
  - "language"
  - "long"
tags:
  - FI
  - account
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
---
# I_ALTERNATIVEGLACCOUNTISUSEDT

**Alternative GL Account Is Used - Text**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ALTERNATIVEGLACCOUNTISUSEDT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AlternativeGLAccountIsUsed` | ✓ | |  | `cast ( domvalue_l as fis_disalteracct )` | `CHAR(1)` | Use Alternative Accounts |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `LongText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ALTERNATIVEGLACCOUNTISUSEDT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ALTERNATIVEGLACCOUNTISUSEDT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFIALTGLACCT'
@EndUserText.label: 'Alternative GL Account Is Used - Text'
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'AlternativeGLAccountIsUsed'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@Analytics.dataExtraction.enabled: true

define view I_AlternativeGLAccountIsUsedT
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{

  key cast ( domvalue_l as fis_disalteracct ) as AlternativeGLAccountIsUsed,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key ddlanguage as Language,
      @Semantics.text
      ddtext     as LongText,
      _Language
}
where
      domname  = 'FIS_DISALTERACCT'
  and as4local = 'A'
```
