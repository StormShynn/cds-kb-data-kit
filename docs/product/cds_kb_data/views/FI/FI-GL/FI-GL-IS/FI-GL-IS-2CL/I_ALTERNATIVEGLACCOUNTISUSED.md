---
name: I_ALTERNATIVEGLACCOUNTISUSED
description: "Alternative GL Account Is Used"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ALTERNATIVEGLACCOUNTISUSED')/$value
semantic_en: "Alternative GL Account Is Used"
semantic_vi: "Alternative GL Account Is Used — CDS view giao diện dựa trên dd07l."
keywords:
  - "alternative"
  - "account"
  - "used"
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
# I_ALTERNATIVEGLACCOUNTISUSED

**Alternative GL Account Is Used**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ALTERNATIVEGLACCOUNTISUSED')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AlternativeGLAccountIsUsed` | ✓ | |  | `cast ( domvalue_l as fis_disalteracct )` | `CHAR(1)` | Use Alternative Accounts |
| `_AlternativeGLAccountIsUsedT` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AlternativeGLAccountIsUsedT` | `I_AlternativeGLAccountIsUsedT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ALTERNATIVEGLACCOUNTISUSED')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ALTERNATIVEGLACCOUNTISUSED')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFIALTGLACC'
@EndUserText.label: 'Alternative GL Account Is Used'
@Analytics: {dataCategory: #DIMENSION, dataExtraction.enabled: true}
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'AlternativeGLAccountIsUsed'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]

define view I_AlternativeGLAccountIsUsed
  as select from dd07l
  association [0..*] to I_AlternativeGLAccountIsUsedT as _AlternativeGLAccountIsUsedT on $projection.AlternativeGLAccountIsUsed = _AlternativeGLAccountIsUsedT.AlternativeGLAccountIsUsed
{
      @ObjectModel.text.association: '_AlternativeGLAccountIsUsedT'
  key cast ( domvalue_l as fis_disalteracct ) as AlternativeGLAccountIsUsed,
      _AlternativeGLAccountIsUsedT
}
where
      domname  = 'FIS_DISALTERACCT'
  and as4local = 'A'
```
