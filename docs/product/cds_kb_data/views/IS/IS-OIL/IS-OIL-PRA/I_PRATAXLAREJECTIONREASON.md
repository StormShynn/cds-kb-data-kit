---
name: I_PRATAXLAREJECTIONREASON
description: "PRA Tax Loiusiana Rejection Reason"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXLAREJECTIONREASON')/$value
semantic_en: "PRA Tax Loiusiana Rejection Reason"
semantic_vi: "PRA Tax Loiusiana Rejection Reason — CDS view giao diện dựa trên PRA Tax Loiusiana Rejection Reason."
keywords:
  - "pra"
  - "tax"
  - "loiusiana"
  - "rejection"
  - "reason"
tags:
  - IS
  - bo:salesorder
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRATAXLAREJECTIONREASON

**PRA Tax Loiusiana Rejection Reason**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXLAREJECTIONREASON')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RejectionReason` | ✓ | |  | `rej_cd` | `CHAR(2)` | Tax 2.0 LA - Reject Code |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PRATaxLARejectionReasonT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXLAREJECTIONREASON')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXLAREJECTIONREASON')/$value)*

```abap
@EndUserText.label: 'PRA Tax Loiusiana Rejection Reason'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTAXLAREJRSN'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'RejectionReason'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.sapObjectNodeType.name: 'PRALouisianaTaxRejectionReason'
define view I_PRATaxLARejectionReason
  as select from /pra/c_t9_rej
  association [0..*] to I_PRATaxLARejectionReasonT as _Text on $projection.RejectionReason = _Text.RejectionReason
{
      @ObjectModel.text.association: '_Text'
  key rej_cd as RejectionReason,
      _Text

}
```
