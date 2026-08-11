---
name: I_PRATAXNMPRODUCTTYPE
description: "Tax New Mexico Product Type"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXNMPRODUCTTYPE')/$value
semantic_en: "Tax New Mexico Product Type"
semantic_vi: "Tax New Mexico Product Type — CDS view giao diện dựa trên dd07l."
keywords:
  - "tax"
  - "new"
  - "mexico"
  - "product"
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
# I_PRATAXNMPRODUCTTYPE

**Tax New Mexico Product Type**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXNMPRODUCTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductType` | ✓ | |  | `cast (domvalue_l as oiux8_nm_product_code )` | `CHAR(2)` | Tax 2.0 - NM - Product Code |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PRATaxNMProductTypeT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXNMPRODUCTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXNMPRODUCTTYPE')/$value)*

```abap
@EndUserText.label: 'Tax New Mexico Product Type'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTAXNMPRODTP'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'ProductType'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'PRANewMexicoTaxProductType'

define view I_PRATaxNMProductType
  as select from dd07l
  association [0..*] to I_PRATaxNMProductTypeT as _Text on $projection.ProductType = _Text.ProductType
{
      @ObjectModel.text.association: '_Text'
  key cast (domvalue_l as oiux8_nm_product_code ) as ProductType,
      _Text
}
where
      domname  = 'OIUX8_NM_PRODUCT_CODE'
  and as4local = 'A';
```
