---
name: I_CASHPOOLHEADERACCTASSGMT
description: "Cashpoolheaderacctassgmt"
app_component: FIN-FSCM-CLM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CLM
  - interface-view
  - header-level
  - component:FIN-FSCM-CLM-2CL
  - lob:Other
---
# I_CASHPOOLHEADERACCTASSGMT

**Cashpoolheaderacctassgmt**

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
| `CreatedByUser` |  | |  | `CashPoolCreatedByUser` |  |  |
| `LastChangedByUser` |  | |  | `CashPoolLastChangedByUser` |  |  |
| `CreationDateTime` |  | |  | `CashPoolCreationDateTime` |  |  |
| `LocalLastChangeDateTime` |  | |  | `CashPoolLastChangeDateTime` |  |  |
| `CashPoolSrvcPrvdr` |  | |  |  |  |  |
| `_BankAccount` | | ✓ | | | | |
| `_IsDeletedText` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICPLHDASMT'
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Cash Pool Header Account Assignment'
@ObjectModel.representativeKey: 'CashPoolAssignment'
@VDM.viewType: #BASIC
@AbapCatalog.preserveKey:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #M,
  dataClass: #MASTER
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]  
define view  I_CashPoolHeaderAcctAssgmt as
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
        CashPoolCreatedByUser      as CreatedByUser,
        CashPoolLastChangedByUser  as LastChangedByUser,
        CashPoolCreationDateTime   as CreationDateTime,
        CashPoolLastChangeDateTime as LocalLastChangeDateTime,
        CashPoolSrvcPrvdr,
        
        _BankAccount,      
        _IsDeletedText        
                    
  }
  where CashPoolAssgmtIsHeadBkAcct  = 'X';
```
