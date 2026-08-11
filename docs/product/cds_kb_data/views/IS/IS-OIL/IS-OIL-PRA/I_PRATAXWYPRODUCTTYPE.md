---
name: I_PRATAXWYPRODUCTTYPE
description: "PRA Tax WY Product Type"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXWYPRODUCTTYPE')/$value
semantic_en: "PRA Tax WY Product Type"
semantic_vi: "PRA Tax WY Product Type — CDS view giao diện dựa trên dd07l."
keywords:
  - "pra"
  - "tax"
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
# I_PRATAXWYPRODUCTTYPE

**PRA Tax WY Product Type**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXWYPRODUCTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductType` | ✓ | |  | `cast (domvalue_l as oiurep_oil_gas_ind )` | `CHAR(1)` | Oil and Gas Indicator |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PRATaxWYProductTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXWYPRODUCTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXWYPRODUCTTYPE')/$value)*

```abap
@EndUserText.label: 'PRA Tax WY Product Type'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVPRODUCTTYPE'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'ProductType'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'PRAWyomingTaxProductType'

define view I_PRATaxWYProductType
  as select from dd07l
  association [0..*] to I_PRATaxWYProductTypeText as _Text on $projection.ProductType = _Text.ProductType
{
      @ObjectModel.text.association: '_Text'
  key cast (domvalue_l as oiurep_oil_gas_ind ) as ProductType,
      _Text
}
where
      domname  = 'OIUREP_OIL_GAS_IND'
  and as4local = 'A';
```
