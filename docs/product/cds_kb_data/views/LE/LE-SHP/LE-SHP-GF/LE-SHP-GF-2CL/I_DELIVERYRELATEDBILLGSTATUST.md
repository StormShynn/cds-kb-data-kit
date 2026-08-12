---
name: I_DELIVERYRELATEDBILLGSTATUST
description: "Deliveryrelatedbillgstatust"
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - delivery
  - status
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_DELIVERYRELATEDBILLGSTATUST

**Deliveryrelatedbillgstatust**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DeliveryRelatedBillingStatus` | ✓ | |  | `statu` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `DeliveryRelatedBillgStatusDesc` |  | |  | `bezei` |  |  |
| `_DeliveryRelatedBillingStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DeliveryRelatedBillingStatus` | `I_DeliveryRelatedBillgStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@Analytics.dataExtraction.enabled: false
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'DeliveryRelatedBillingStatus'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Delivery Related Billing Status - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDDELRELBILLSTT'
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]

define view I_DeliveryRelatedBillgStatusT
as select from tvbst

association [0..1] to I_DeliveryRelatedBillgStatus as _DeliveryRelatedBillingStatus on $projection.DeliveryRelatedBillingStatus = _DeliveryRelatedBillingStatus.DeliveryRelatedBillingStatus
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_DeliveryRelatedBillingStatus'
    key statu as DeliveryRelatedBillingStatus,

    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text: true
    bezei as DeliveryRelatedBillgStatusDesc,
    
    _DeliveryRelatedBillingStatus,
    _Language
} 
where (tvbst.tbnam = 'LIPS') and  (tvbst.fdnam = 'FKSTA');
```
