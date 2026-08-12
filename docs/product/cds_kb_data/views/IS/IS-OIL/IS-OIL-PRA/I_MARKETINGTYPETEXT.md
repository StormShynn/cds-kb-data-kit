---
name: I_MARKETINGTYPETEXT
description: "Marketing Type - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MARKETINGTYPETEXT')/$value
semantic_en: "Marketing Type - Text"
semantic_vi: "Marketing Type - Text — CDS view giao diện dựa trên oiu_cm_mkct_tx."
keywords:
  - "marketing"
  - "type"
  - "text"
  - "major"
  - "product"
  - "language"
  - "name"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_MARKETINGTYPETEXT

**Marketing Type - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MARKETINGTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MajorProduct` | ✓ | |  | `majpd_cd` | `CHAR(1)` | Major product code |
| `MarketingType` | ✓ | |  | `mk_type_cd` | `CHAR(2)` | Marketing type code |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `MarketingTypeName` |  | |  | `mk_type_de` | `CHAR(50)` | Marketing Cost Type Description |
| `_MajorProduct` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MajorProduct` | `I_MajorProduct` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MARKETINGTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MARKETINGTYPETEXT')/$value)*

```abap
@EndUserText.label: 'Marketing Type - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVMKTGTYPET'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'MarketingType'

@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #CUSTOMIZING

define view I_MarketingTypeText
  as select from oiu_cm_mkct_tx
  association [0..1] to I_MajorProduct as _MajorProduct on $projection.MajorProduct = _MajorProduct.MajorProduct
{
      @ObjectModel.foreignKey.association: '_MajorProduct'
  key majpd_cd       as MajorProduct,
  key mk_type_cd     as MarketingType,
      @Semantics.language
  key spras          as Language,
      @Semantics.text
      mk_type_de     as MarketingTypeName,
      _MajorProduct
}
```
