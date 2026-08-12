---
name: I_CASHPOOLSUBACCTASSGMT
description: "Cashpoolsubacctassgmt"
app_component: FIN-FSCM-CLM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
