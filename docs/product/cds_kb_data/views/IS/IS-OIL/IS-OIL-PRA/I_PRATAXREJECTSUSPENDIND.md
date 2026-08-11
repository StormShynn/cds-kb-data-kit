---
name: I_PRATAXREJECTSUSPENDIND
description: "PRA Tax Reject Suspend Indicator"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXREJECTSUSPENDIND')/$value
semantic_en: "PRA Tax Reject Suspend Indicator"
semantic_vi: "PRA Tax Reject Suspend Indicator — CDS view giao diện dựa trên dd07l."
keywords:
  - "pra"
  - "tax"
  - "reject"
  - "suspend"
  - "indicator"
  - "rejected"
  - "suspended"
  - "type"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRATAXREJECTSUSPENDIND

**PRA Tax Reject Suspend Indicator**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXREJECTSUSPENDIND')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RejectedOrSuspendedType` | ✓ | |  | `cast (domvalue_l as oiux3_reject_suspend_ind )` | `CHAR(1)` | Rejection-Suspension Status |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PRATaxRejectSuspendIndT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXREJECTSUSPENDIND')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXREJECTSUSPENDIND')/$value)*

```abap
@EndUserText.label: 'PRA Tax Reject Suspend Indicator'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTAXRJSUSP'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'RejectedOrSuspendedType'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'PRATaxRejectSuspendIndicator'

define view I_PRATaxRejectSuspendInd
  as select from dd07l
  association [0..*] to I_PRATaxRejectSuspendIndT as _Text on $projection.RejectedOrSuspendedType = _Text.RejectedOrSuspendedType

{
      @ObjectModel.text.association: '_Text'
  key cast (domvalue_l as oiux3_reject_suspend_ind ) as RejectedOrSuspendedType,
      _Text
}
where
      domname  = 'OIUX3_REJECT_SUSPEND_IND'
  and as4local = 'A';
```
