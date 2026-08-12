---
name: I_COLLATERALATTRIBINDTYPETEXT
description: "Collateral Attribute Indicator - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALATTRIBINDTYPETEXT')/$value
semantic_en: "Collateral Attribute Indicator - Text"
semantic_vi: "Collateral Attribute Indicator - Text — CDS view giao diện dựa trên tcms_att_id_ty_t."
keywords:
  - "collateral"
  - "attribute"
  - "indicator"
  - "text"
  - "type"
  - "language"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLATERALATTRIBINDTYPETEXT

**Collateral Attribute Indicator - Text**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALATTRIBINDTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralAttributeIndCat` | ✓ | |  | `indicator_id` | `CHAR(6)` | Attribute Indicator ID |
| `CollateralAttributeIndType` | ✓ | |  | `indicator_type` | `CHAR(6)` | Attribute Indicator Type |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language in which Description is Required |
| `CollateralAttributeIndTypeText` |  | |  | `name` | `CHAR(40)` | Name |
| `_Language` | | ✓ | | | | |
| `_CollateralAttributeIndCat` | | ✓ | | | | |
| `_CollateralAttributeIndType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CollateralAttributeIndCat` | `I_CollateralAttributeIndCat` | [0..1] |
| `_CollateralAttributeIndType` | `I_CollateralAttributeIndType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALATTRIBINDTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALATTRIBINDTYPETEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICOLATTIDTYPETXT',
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
    representativeKey: 'CollateralAttributeIndType'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Collateral Attribute Indicator - Text'
define view I_CollateralAttribIndTypeText
  as select from tcms_att_id_ty_t
  association [0..1] to I_Language                   as _Language                   on  $projection.Language = _Language.Language
  association [0..1] to I_CollateralAttributeIndCat  as _CollateralAttributeIndCat  on  $projection.CollateralAttributeIndCat = _CollateralAttributeIndCat.collateralattributeindcat
  association [0..1] to I_CollateralAttributeIndType as _CollateralAttributeIndType on  $projection.CollateralAttributeIndCat  = _CollateralAttributeIndType.collateralattributeindcat
                                                                                    and $projection.CollateralAttributeIndType = _CollateralAttributeIndType.CollateralAttributeIndType
{
      @ObjectModel.foreignKey.association: '_CollateralAttributeIndCat'
  key indicator_id   as CollateralAttributeIndCat,
      @ObjectModel.foreignKey.association: '_CollateralAttributeIndType'
  key indicator_type as CollateralAttributeIndType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language       as Language,
      @Semantics.text: true
      name           as CollateralAttributeIndTypeText,

      _Language,
      _CollateralAttributeIndCat,
      _CollateralAttributeIndType
}
```
