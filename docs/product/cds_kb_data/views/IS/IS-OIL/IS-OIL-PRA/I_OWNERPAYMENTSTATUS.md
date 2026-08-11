---
name: I_OWNERPAYMENTSTATUS
description: "Owner Payment Status"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OWNERPAYMENTSTATUS')/$value
semantic_en: "Owner Payment Status"
semantic_vi: "Owner Payment Status — CDS view giao diện dựa trên dd07l."
keywords:
  - "owner"
  - "payment"
  - "status"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - payment
---
# I_OWNERPAYMENTSTATUS

**Owner Payment Status**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OWNERPAYMENTSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OwnerPaymentStatus` | ✓ | |  | `cast (domvalue_l as oiu_pay_cd )` | `CHAR(2)` | Pay Code |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_OwnerPaymentStatusText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OWNERPAYMENTSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OWNERPAYMENTSTATUS')/$value)*

```abap
@EndUserText.label: 'Owner Payment Status'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVOWNPAY'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'OwnerPaymentStatus'

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'PRAOwnerPaymentStatus'
define view I_OwnerPaymentStatus
  as select from dd07l
  association [0..*] to I_OwnerPaymentStatusText as _Text on $projection.OwnerPaymentStatus = _Text.OwnerPaymentStatus
{
      @ObjectModel.text.association: '_Text'
  key cast (domvalue_l as oiu_pay_cd ) as OwnerPaymentStatus,
      _Text
}
where
      domname  = 'OIU_PAY_CD'
  and as4local = 'A';
```
