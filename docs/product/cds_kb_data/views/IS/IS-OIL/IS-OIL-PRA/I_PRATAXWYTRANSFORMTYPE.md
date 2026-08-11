---
name: I_PRATAXWYTRANSFORMTYPE
description: "PRA Tax WY Transaction Form Type"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXWYTRANSFORMTYPE')/$value
semantic_en: "PRA Tax WY Transaction Form Type"
semantic_vi: "PRA Tax WY Transaction Form Type — CDS view giao diện dựa trên dd07l."
keywords:
  - "pra"
  - "tax"
  - "transaction"
  - "form"
  - "type"
  - "transac"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - transaction
---
# I_PRATAXWYTRANSFORMTYPE

**PRA Tax WY Transaction Form Type**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXWYTRANSFORMTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TaxTransacFormType` | ✓ | |  | `cast (domvalue_l as oiux6_orig_amended_unknown_ind )` | `CHAR(1)` | Tax 2.0 - Original / Amended / Unknown Indicator |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PRATaxWYTransFormTypeT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXWYTRANSFORMTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXWYTRANSFORMTYPE')/$value)*

```abap
@EndUserText.label: 'PRA Tax WY Transaction Form Type'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTAXTRFORMTYP'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'TaxTransacFormType'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'PRAWyomingTaxTransFormType'

define view I_PRATaxWYTransFormType
  as select from dd07l
  association [0..*] to I_PRATaxWYTransFormTypeT as _Text on $projection.TaxTransacFormType = _Text.TaxTransacFormType
{
      @ObjectModel.text.association: '_Text'
  key cast (domvalue_l as oiux6_orig_amended_unknown_ind ) as TaxTransacFormType,
      _Text
}
where
      domname  = 'OIUX6_ORIG_AMENDED_UNKNOWN_IND'
  and as4local = 'A';
```
