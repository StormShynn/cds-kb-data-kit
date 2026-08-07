---
name: I_CASHPOOLSUBACCTASSGMT
description: Cashpoolsubacctassgmt
app_component: FIN-FSCM-CLM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CLM
  - interface-view
  - component:FIN-FSCM-CLM-2CL
  - lob:Other
---
# I_CASHPOOLSUBACCTASSGMT

**Cashpoolsubacctassgmt**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CashPoolAssignment` | ✓ | |  |  |  |  |
| `CashPoolAssignmentText` |  | |  |  |  |  |
| `CashPool` |  | |  |  |  |  |
| `CashPoolAssgmtIsHeadBkAcct` |  | |  |  |  |  |
| `CashPoolAssgmtIsDeleted` |  | |  |  |  |  |
| `CashPoolAssgmtValdtyStrtDte` |  | |  |  |  |  |
| `CashPoolAssgmtValdtyEndDte` |  | |  |  |  |  |
| `BankAccountInternalID` |  | |  |  |  |  |
| `PaymentMethod` |  | |  |  |  |  |
| `TargetBalanceAmount` |  | |  |  |  |  |
| `MinTransferAmount` |  | |  |  |  |  |
| `MaxTransferAmount` |  | |  |  |  |  |
| `Note` |  | |  |  |  |  |
| `CreatedByUser` |  | |  | `CashPoolCreatedByUser` |  |  |
| `LastChangedByUser` |  | |  | `CashPoolLastChangedByUser` |  |  |
| `CreationDateTime` |  | |  | `CashPoolCreationDateTime` |  |  |
| `LocalLastChangeDateTime` |  | |  | `CashPoolLastChangeDateTime` |  |  |
| `BankAccountCurrency` |  | | `_BankAccount` | `BankAccountCurrency` |  |  |
| `_BankAccount` | | ✓ | | | | |
| `_IsDeletedText` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICPLSUBASMT'
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Cash Pool Subaccount Assignment'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.preserveKey:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'CashPoolAssignment'
@VDM.viewType: #BASIC
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #S,
  dataClass: #MIXED
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]  
define view I_CashPoolSubAcctAssgmt as 
  select from  I_CashPoolAssgmtBasic           
  {
    key CashPoolAssignment,
        CashPoolAssignmentText,
        CashPool,
        CashPoolAssgmtIsHeadBkAcct,
        CashPoolAssgmtIsDeleted,        
        CashPoolAssgmtValdtyStrtDte,
        CashPoolAssgmtValdtyEndDte,
        BankAccountInternalID,
        PaymentMethod,
     @Semantics.amount.currencyCode : 'BankAccountCurrency'        
        TargetBalanceAmount,
     @Semantics.amount.currencyCode : 'BankAccountCurrency'   
        MinTransferAmount,
     @Semantics.amount.currencyCode : 'BankAccountCurrency'   
        MaxTransferAmount,
        Note,
        CashPoolCreatedByUser      as CreatedByUser,
        CashPoolLastChangedByUser  as LastChangedByUser,
        CashPoolCreationDateTime   as CreationDateTime,
        CashPoolLastChangeDateTime as LocalLastChangeDateTime,
        _BankAccount.BankAccountCurrency as BankAccountCurrency,       
        _BankAccount,
        _IsDeletedText
  }
  where CashPoolAssgmtIsHeadBkAcct  <> 'X'
    and CashPoolAssgmtIsDeleted <> 'Y';
```
