---
name: I_PRATAXCOPRODUCTTYPE
description: "Tax Colorado Product Code"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXCOPRODUCTTYPE')/$value
semantic_en: "Tax Colorado Product Code"
semantic_vi: "Tax Colorado Product Code — CDS view giao diện dựa trên dd07l."
keywords:
  - "tax"
  - "colorado"
  - "product"
  - "code"
  - "type"
tags:
  - IS
  - bo:material
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - product
---
# I_PRATAXCOPRODUCTTYPE

**Tax Colorado Product Code**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXCOPRODUCTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductType` | ✓ | |  | `cast (domvalue_l as /pra/ta_product_cd )` | `CHAR(1)` | Product Cd |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PRATaxCOProductTypeT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXCOPRODUCTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXCOPRODUCTTYPE')/$value)*

```abap
@EndUserText.label: 'Tax Colorado Product Code'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTAXCOPRODTY'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'ProductType'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'PRAColoradoTaxProductCode'
define view I_PRATaxCOProductType
  as select from dd07l
  association [0..*] to I_PRATaxCOProductTypeT as _Text on $projection.ProductType = _Text.ProductType
{
      @ObjectModel.text.association: '_Text'
  key cast (domvalue_l as /pra/ta_product_cd ) as ProductType,
      _Text
}
where
      domname  = '/PRA/TA_PRODUCT_CD'
  and as4local = 'A';
```
