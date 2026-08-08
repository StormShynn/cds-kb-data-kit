---
name: I_OUTGOINGCHECK
description: "Outgoingcheck"
app_component: FI-FIO-AP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - interface-view
  - component:FI-FIO-AP-2CL
  - lob:Finance
---
# I_OUTGOINGCHECK

**Outgoingcheck**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PaymentCompanyCode` | ✓ | |  |  |  |  |
| `HouseBank` | ✓ | |  |  |  |  |
| `HouseBankAccount` | ✓ | |  |  |  |  |
| `PaymentMethod` | ✓ | |  |  |  |  |
| `OutgoingCheque` | ✓ | |  |  |  |  |
| `IsIntercompanyPayment` |  | |  |  |  |  |
| `ChequeIsManuallyIssued` |  | |  |  |  |  |
| `ChequebookFirstCheque` |  | |  |  |  |  |
| `PaymentDocument` |  | |  |  |  |  |
| `ChequePaymentDate` |  | |  |  |  |  |
| `PaymentCurrency` |  | |  |  |  |  |
| `PaidAmountInPaytCurrency` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `PaymentDocPrintDate` |  | |  |  |  |  |
| `PaymentDocPrintTime` |  | |  |  |  |  |
| `ChequePrintDateTime` |  | |  |  |  |  |
| `PaymentDocPrintedByUser` |  | |  |  |  |  |
| `ChequeEncashmentDate` |  | |  |  |  |  |
| `ChequeLastExtractDate` |  | |  |  |  |  |
| `ChequeLastExtractDateTime` |  | |  |  |  |  |
| `PayeeTitle` |  | |  |  |  |  |
| `PayeeName` |  | |  |  |  |  |
| `PayeeAdditionalName` |  | |  |  |  |  |
| `PayeePostalCode` |  | |  |  |  |  |
| `PayeeCityName` |  | |  |  |  |  |
| `PayeeStreet` |  | |  |  |  |  |
| `PayeePOBox` |  | |  |  |  |  |
| `PayeePOBoxPostalCode` |  | |  |  |  |  |
| `PayeePOBoxCityName` |  | |  |  |  |  |
| `Country` |  | |  |  |  |  |
| `Region` |  | |  |  |  |  |
| `ChequeVoidReason` |  | |  |  |  |  |
| `ChequeVoidedDate` |  | |  |  |  |  |
| `ChequeVoidedByUser` |  | |  |  |  |  |
| `ChequeIsCashed` |  | |  |  |  |  |
| `CashDiscountAmount` |  | |  |  |  |  |
| `FiscalYear` |  | |  |  |  |  |
| `ChequeType` |  | |  |  |  |  |
| `VoidedChequeUsage` |  | |  |  |  |  |
| `ChequeStatus` |  | |  |  |  |  |
| `ChequeIssuingType` |  | |  |  |  |  |
| `BankName` |  | | `_HouseBank._Bank` | `BankName` |  |  |
| `CompanyCodeCountry` |  | | `_Company` | `Country` |  |  |
| `CompanyCodeName` |  | | `_Company` | `CompanyCodeName` |  |  |
| `_Company` | | ✓ | | | | |
| `_HouseBank` | | ✓ | | | | |
| `_VoidReason` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Company` | `I_CompanyCode` | [0..1] |
| `_HouseBank` | `I_Housebank` | [0..1] |
| `_VoidReason` | `I_APVoidReasonText` | [1..*] |
| `_Country` | `I_Country` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Outgoing Cheque'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IOUTGOINGCHECK'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ClientHandling.algorithm: #SESSION_VARIABLE 
@AccessControl.personalData.blocking: #REQUIRED
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]

define view I_OutgoingCheck
as select from P_OutgoingCheck
association [0..1] to I_CompanyCode as _Company on _Company.CompanyCode = $projection.PaymentCompanyCode
association [0..1] to I_Housebank as _HouseBank on _HouseBank.CompanyCode = $projection.PaymentCompanyCode and 
                                                          _HouseBank.HouseBank = $projection.HouseBank                                               
association [1..*] to I_APVoidReasonText as _VoidReason on _VoidReason.ChequeVoidReason = $projection.ChequeVoidReason 
association [0..1] to I_Country as _Country on  _Country.Country =  $projection.Country
association [0..1] to I_Supplier as _Supplier  on  $projection.Supplier = _Supplier.Supplier
{
  key PaymentCompanyCode,
  key HouseBank,
  key HouseBankAccount,
  key PaymentMethod, 
  key OutgoingCheque,
  IsIntercompanyPayment,
  ChequeIsManuallyIssued,
  ChequebookFirstCheque,
  PaymentDocument,
  ChequePaymentDate,
  PaymentCurrency,
  @Semantics.amount.currencyCode: 'PaymentCurrency'
  PaidAmountInPaytCurrency,
  Supplier,
  PaymentDocPrintDate,
  PaymentDocPrintTime,
  ChequePrintDateTime,
  PaymentDocPrintedByUser,
  ChequeEncashmentDate,
  ChequeLastExtractDate,
  ChequeLastExtractDateTime,
  PayeeTitle,
  PayeeName,
  PayeeAdditionalName,
  PayeePostalCode,
  PayeeCityName,
  PayeeStreet,
  PayeePOBox,
  PayeePOBoxPostalCode,
  PayeePOBoxCityName,
  Country,
  Region,
  ChequeVoidReason,
  ChequeVoidedDate,
  ChequeVoidedByUser,
  ChequeIsCashed,
  @Semantics.amount.currencyCode: 'PaymentCurrency'
  CashDiscountAmount,
  FiscalYear,
  ChequeType,
  VoidedChequeUsage,
  ChequeStatus ,
  ChequeIssuingType,
  _HouseBank._Bank.BankName,
  _Company.Country as CompanyCodeCountry,
  _Company.CompanyCodeName,
  _Country,
  _Company,
  _Supplier,
  _VoidReason,
  _HouseBank
}
```
