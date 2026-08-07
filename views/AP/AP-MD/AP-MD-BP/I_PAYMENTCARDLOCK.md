---
name: I_PAYMENTCARDLOCK
description: Paymentcardlock
app_component: AP-MD-BP
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - payment
  - component:AP-MD-BP
  - lob:Other
---
# I_PAYMENTCARDLOCK

**Paymentcardlock**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PaymentCardLock` | ✓ | |  | `cclock` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PaymentCardLockText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPAYCARDLOCK'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'View for Payment Card Lock'

@AbapCatalog.preserveKey: true
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER

define view I_PaymentCardLock
  as select from tb035
 association [0..*] to I_PaymentCardLockText as _Text on $projection.PaymentCardLock = _Text.PaymentCardLock
{

  @ObjectModel.text.association: '_Text'
  key cclock as PaymentCardLock,

  _Text


}
```
