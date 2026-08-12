---
name: I_ALTERNATIVEGLACCOUNTISUSED
description: "Alternative GL Account Is Used"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
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
