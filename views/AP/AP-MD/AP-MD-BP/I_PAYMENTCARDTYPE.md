---
name: I_PAYMENTCARDTYPE
description: Paymentcardtype
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
# I_PAYMENTCARDTYPE

**Paymentcardtype**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PaymentCardType` | ✓ | |  | `ccins` |
| `PaymentCardNumber` | ✓ | |  | `ccnum` |
| `ValidityDate` |  | |  | `datab` |
| `ValidityEndDate` |  | |  | `datbi` |
| `CardHolder` |  | |  | `ccname` |
| `PaymentCardCategory` |  | |  | `cctyp` |
| `CardIssuingBank` |  | |  | `issbank` |
| `CardIssueDate` |  | |  | `ausgdat` |
| `PaymentCardLock` |  | |  | `cclock` |
| `MaskedCardNumber` |  | |  | `masked_id` |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPAYCARDTYPE'
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Core View for table CCARD'
@VDM.viewType: #BASIC
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
define view I_Paymentcardtype
  as select from ccard
{

  key ccins     as PaymentCardType,
  key ccnum     as PaymentCardNumber,
      datab     as ValidityDate,
      datbi     as ValidityEndDate,
      ccname    as CardHolder,
      cctyp     as PaymentCardCategory,
      issbank   as CardIssuingBank,
      ausgdat   as CardIssueDate,
      cclock    as PaymentCardLock,
      masked_id as MaskedCardNumber
}
```
