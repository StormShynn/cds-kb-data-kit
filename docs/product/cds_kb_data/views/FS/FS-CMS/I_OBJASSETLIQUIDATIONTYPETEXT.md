---
name: I_OBJASSETLIQUIDATIONTYPETEXT
description: "Object Asset Liquidation Type - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJASSETLIQUIDATIONTYPETEXT')/$value
semantic_en: "Object Asset Liquidation Type - Text"
semantic_vi: "Object Asset Liquidation Type - Text — CDS view giao diện dựa trên tcms_ast_ltyp_t."
keywords:
  - "object"
  - "asset"
  - "liquidation"
  - "type"
  - "text"
  - "language"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_OBJASSETLIQUIDATIONTYPETEXT

**Object Asset Liquidation Type - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJASSETLIQUIDATIONTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ObjectAssetLiquidationType` | ✓ | |  | `liqd_typ` | `CHAR(6)` | Liquidation Type |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language in which Description is Required |
| `ObjAssetLiquidationTypeText` |  | |  | `name` | `CHAR(40)` | Liquidation Type Name in the specified Language |
| `_Language` | | ✓ | | | | |
| `_ObjectAssetLiquidationType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ObjectAssetLiquidationType` | `I_ObjectAssetLiquidationType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJASSETLIQUIDATIONTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJASSETLIQUIDATIONTYPETEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'IOBJASTLIQTYPTXT',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
    dataCategory: #TEXT,
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'S',
        dataClass: 'CUSTOMIZING'
    },
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'ObjectAssetLiquidationType'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Object Asset Liquidation Type - Text'
define view I_ObjAssetLiquidationTypeText
  as select from tcms_ast_ltyp_t
  association [0..1] to I_Language                   as _Language                   on $projection.Language = _Language.Language
  association [0..1] to I_ObjectAssetLiquidationType as _ObjectAssetLiquidationType on $projection.ObjectAssetLiquidationType = _ObjectAssetLiquidationType.ObjectAssetLiquidationType
{
      @ObjectModel.foreignKey.association: '_ObjectAssetLiquidationType'
  key liqd_typ as ObjectAssetLiquidationType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language as Language,
      @Semantics.text: true
      name     as ObjAssetLiquidationTypeText,

      _Language,
      _ObjectAssetLiquidationType
}
```
