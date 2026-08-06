---
name: I_APCHECKBOOK
description: Apcheckbook
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
# I_APCHECKBOOK

**Apcheckbook**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PaymentCompanyCode` | `cb.PaymentCompanyCode` |
| key `HouseBank` | `cb.HouseBank` |
| key `HouseBankAccount` | `cb.HouseBankAccount` |
| key `Chequebook` | `cb.Chequebook` |
| `ChequebookFirstCheque` | `cb.ChequebookFirstCheque` |
| `ChequebookLastCheque` | `cb.ChequebookLastCheque` |
| `NextChequebook` | `cb.NextChequebook` |
| `LastAssignedCheque` | `cb.LastAssignedCheque` |
| `ChequebookName` | `cb.ChequebookName` |
| `ChequebookIsNonSequential` | `cb.ChequebookIsNonSequential` |
| `ChequebookPurchaseDate` | `case cb.ChequebookPurchaseDate when '' then cast ( ' ' as abap.dats ) else cast ( cb.ChequebookPurchaseDate as abap.dats ) end` |
| `ChequebookPaymentMethodList` | `cb.ChequebookPaymentMethodList` |
| `ChequebookMinimalChequeCount` | `cb.ChequebookMinimalChequeCount` |
| `ChequebookPurchaser` | `cb.ChequebookPurchaser` |
| `ChequebookCreatedByUser` | `cb.ChequebookCreatedByUser` |
| `ChequebookCreationDate` | `cb.ChequebookCreationDate` |
| `ChequebookCreationTime` | `cb.ChequebookCreationTime` |
| `ChequeType` | `cb.ChequeType` |
| `ChequebookStatus` | `cast( ' ' as abap.char(10))` |
| `BankAccountName` | `_HouseBankAccount.HouseBankAccountDescription` |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_HouseBankAccount` | `I_HouseBankAccountText` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Cheque book'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IAPCHECKBOOK'
@AccessControl.authorizationCheck:#CHECK
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ClientHandling.algorithm: #SESSION_VARIABLE 
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA') 
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]

define view I_APCheckbook
  as select from P_APCheckbook as cb

 // association [0..1] to I_CompanyCode      as _Company          on  _Company.CompanyCode = $projection.PaymentCompanyCode
 // association [0..1] to I_HouseBankAccount as _HouseBankAccount on  _HouseBankAccount.CompanyCode      = $projection.PaymentCompanyCode
                                                               // and _HouseBankAccount.HouseBank        = $projection.HouseBank
                                                                //and _HouseBankAccount.HouseBankAccount = $projection.HouseBankAccount
association [0..1] to I_HouseBankAccountText as _HouseBankAccount on _HouseBankAccount.CompanyCode = $projection.PaymentCompanyCode
                                                               and _HouseBankAccount.HouseBank = $projection.HouseBank
                                                               and _HouseBankAccount.HouseBankAccount = $projection.HouseBankAccount
                                                               and _HouseBankAccount.Language = $session.system_language
{
  key cb.PaymentCompanyCode,
  key cb.HouseBank,
  key cb.HouseBankAccount,
  key cb.Chequebook,
      cb.ChequebookFirstCheque,
      cb.ChequebookLastCheque,
      cb.NextChequebook,
      cb.LastAssignedCheque,
      cb.ChequebookName,
      cb.ChequebookIsNonSequential,
      case cb.ChequebookPurchaseDate
        when '' then cast ( ' ' as abap.dats )
        else cast ( cb.ChequebookPurchaseDate as abap.dats )
      end                                         as ChequebookPurchaseDate,
      cb.ChequebookPaymentMethodList,
      cb.ChequebookMinimalChequeCount,
      cb.ChequebookPurchaser,
      cb.ChequebookCreatedByUser,
      cb.ChequebookCreationDate,
      cb.ChequebookCreationTime,
      cb.ChequeType,
      //_Company.CompanyCodeName                    as CompanyName,
      //_Company.Country                            as Country,
      //_HouseBankAccount._HouseBank._Bank.BankName as HouseBankName,
      //_HouseBankAccount.BankAccount               as BankAccount,
      cast( '          ' as abap.char(10))        as ChequebookStatus ,
      _HouseBankAccount.HouseBankAccountDescription as BankAccountName
}
```
