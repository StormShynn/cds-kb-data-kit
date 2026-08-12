---
name: I_OBJECTASSETTYPE
description: "Asset Type"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETTYPE')/$value
semantic_en: "Asset Type"
semantic_vi: "Asset Type — CDS view giao diện dựa trên tcms_ast_typ."
keywords:
  - "asset"
  - "type"
  - "object"
  - "category"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_OBJECTASSETTYPE

**Asset Type**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ObjectAssetType` | ✓ | |  | `ast_typ` | `CHAR(6)` | Asset Type |
| `ObjectAssetCategory` |  | |  | `categoryid` | `CHAR(6)` | Asset Category Identification No |
| `_Text` | | ✓ | | | | |
| `_ObjectAssetCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ObjectAssetTypeText` | [0..*] |
| `_ObjectAssetCategory` | `I_ObjectAssetCategory` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETTYPE')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'IOBJASTTYP',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'S',
        dataClass: 'CUSTOMIZING'
    },
    supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'ObjectAssetType'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Asset Type'
define view I_ObjectAssetType
  as select from tcms_ast_typ
  association [0..*] to I_ObjectAssetTypeText as _Text                on $projection.ObjectAssetType = _Text.ObjectAssetType
  association [0..1] to I_ObjectAssetCategory as _ObjectAssetCategory on $projection.ObjectAssetCategory = _ObjectAssetCategory.ObjectAssetCategory
{
      @ObjectModel.text.association: '_Text'
  key ast_typ    as ObjectAssetType,
      @ObjectModel.foreignKey.association: '_ObjectAssetCategory'
      categoryid as ObjectAssetCategory,

      _Text,
      _ObjectAssetCategory
}
```
