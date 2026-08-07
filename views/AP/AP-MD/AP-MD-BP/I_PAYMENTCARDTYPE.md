---
name: I_PAYMENTCARDTYPE
description: "Paymentcardtype"
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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PaymentCardType` | ✓ | |  | `ccins` | `CHAR(4)` | Payment Card Type |
| `PaymentCardNumber` | ✓ | |  | `ccnum` | `CHAR(25)` | Payment cards: Card number |
| `ValidityDate` |  | |  | `datab` | `DATS(8)` | Payment cards: Valid from |
| `ValidityEndDate` |  | |  | `datbi` | `DATS(8)` | Payment Cards: Valid To |
| `CardHolder` |  | |  | `ccname` | `CHAR(40)` | Payment Cards: Name of Cardholder |
| `PaymentCardCategory` |  | |  | `cctyp` | `CHAR(2)` | Payment cards: Card category |
| `CardIssuingBank` |  | |  | `issbank` | `CHAR(40)` | Payment cards: Issuing bank |
| `CardIssueDate` |  | |  | `ausgdat` | `DATS(8)` | Payment Cards: Date of Issue |
| `PaymentCardLock` |  | |  | `cclock` | `CHAR(2)` | Payment Cards: Reason for Payment Card Lock |
| `MaskedCardNumber` |  | |  | `masked_id` | `CHAR(25)` | Masked Payment Card Number ( Digital Payment ) |

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
