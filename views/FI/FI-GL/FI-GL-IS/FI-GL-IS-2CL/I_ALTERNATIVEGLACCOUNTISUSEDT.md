---
name: I_ALTERNATIVEGLACCOUNTISUSEDT
description: "Alternative GL Account Is Used - Text"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
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
