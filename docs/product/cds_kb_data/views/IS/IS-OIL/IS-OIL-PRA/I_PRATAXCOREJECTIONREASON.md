---
name: I_PRATAXCOREJECTIONREASON
description: "PRA Tax Colorado Rejection Reason"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXCOREJECTIONREASON')/$value
semantic_en: "PRA Tax Colorado Rejection Reason"
semantic_vi: "PRA Tax Colorado Rejection Reason — CDS view giao diện dựa trên PRA Tax Colorado Rejection Reason."
keywords:
  - "pra"
  - "tax"
  - "colorado"
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
# I_PRATAXCOREJECTIONREASON

**PRA Tax Colorado Rejection Reason**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXCOREJECTIONREASON')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RejectionReason` | ✓ | |  | `rej_cd` | `CHAR(2)` | Tax 2.0 CO - Reject Code |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PRATaxCORejectionReasonT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXCOREJECTIONREASON')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXCOREJECTIONREASON')/$value)*

```abap
@EndUserText.label: 'PRA Tax Colorado Rejection Reason'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTAXCOREJRSN'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'RejectionReason'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.sapObjectNodeType.name: 'PRAColoradoTaxRejectionReason'
define view I_PRATaxCORejectionReason
  as select from /pra/c_ta_irej
  association [0..*] to I_PRATaxCORejectionReasonT as _Text on $projection.RejectionReason = _Text.RejectionReason
{
      @ObjectModel.text.association: '_Text'
  key rej_cd as RejectionReason,
      _Text

}
```
