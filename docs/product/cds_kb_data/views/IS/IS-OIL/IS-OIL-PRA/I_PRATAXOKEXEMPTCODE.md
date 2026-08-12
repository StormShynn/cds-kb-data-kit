---
name: I_PRATAXOKEXEMPTCODE
description: "Tax 2 0 OKGP Exempt Codes"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXOKEXEMPTCODE')/$value
semantic_en: "Tax 2 0 OKGP Exempt Codes"
semantic_vi: "Tax 2 0 OKGP Exempt Codes — CDS view giao diện dựa trên oiut5_excd."
keywords:
  - "tax"
  - "okgp"
  - "exempt"
  - "codes"
  - "code"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRATAXOKEXEMPTCODE

**Tax 2 0 OKGP Exempt Codes**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXOKEXEMPTCODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TaxExemptCode` | ✓ | |  | `exempt_code` | `NUMC(2)` | Tax 2.0 OKGP - Exempt Code |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PRATaxOKExemptCodesT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXOKEXEMPTCODE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXOKEXEMPTCODE')/$value)*

```abap
@EndUserText.label: 'Tax 2 0 OKGP Exempt Codes'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTAXOKEXMPCD'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'TaxExemptCode'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.sapObjectNodeType.name: 'PRAOklahomaTaxExemptCode'

define view I_PRATaxOKExemptCode
  as select from oiut5_excd
  association [0..*] to I_PRATaxOKExemptCodesT as _Text on $projection.TaxExemptCode = _Text.TaxExemptCode

{
      @ObjectModel.text.association: '_Text'
  key exempt_code as TaxExemptCode,
      _Text
}
```
