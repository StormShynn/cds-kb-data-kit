---
name: I_TAXPBLBALAMTAGE
description: "Tax Payable Balance Amount Age"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TAXPBLBALAMTAGE')/$value
semantic_en: "Tax Payable Balance Amount Age"
semantic_vi: "Tax Payable Balance Amount Age — CDS view giao diện dựa trên dd07l."
keywords:
  - "tax"
  - "payable"
  - "balance"
  - "amount"
  - "age"
  - "code"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_TAXPBLBALAMTAGE

**Tax Payable Balance Amount Age**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TAXPBLBALAMTAGE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BalAmtAgeCode` | ✓ | |  | `cast (domvalue_l as oiux4_age )` | `CHAR(3)` | Taxes Payable Write-off Age |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TaxPblBalAmtAgeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TAXPBLBALAMTAGE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TAXPBLBALAMTAGE')/$value)*

```abap
@EndUserText.label: 'Tax Payable Balance Amount Age'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTPBALAMTAGE'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'BalAmtAgeCode'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'PRATaxPayableBalanceAmtAge'

define view I_TaxPblBalAmtAge
  as select from dd07l
  association [0..*] to I_TaxPblBalAmtAgeText as _Text on $projection.BalAmtAgeCode = _Text.BalAmtAgeCode
{
      @ObjectModel.text.association: '_Text'
  key cast (domvalue_l as oiux4_age ) as BalAmtAgeCode,
      _Text
}
where
      domname  = 'OIUX4_AGE'
  and as4local = 'A';
```
