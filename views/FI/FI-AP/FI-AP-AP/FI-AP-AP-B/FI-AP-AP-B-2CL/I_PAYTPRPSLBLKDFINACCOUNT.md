---
name: I_PAYTPRPSLBLKDFINACCOUNT
description: Paytprpslblkdfinaccount
app_component: FI-AP-AP-B-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-AP
  - FI-AP-AP
  - interface-view
  - component:FI-AP-AP-B-2CL
  - lob:Finance
---
# I_PAYTPRPSLBLKDFINACCOUNT

**Paytprpslblkdfinaccount**

| Property | Value |
|---|---|
| App Component | `FI-AP-AP-B-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `FinancialAccountType` | `cast(koart as farp_koart preserving type )` |
| key `CompanyCode` | `cast(bukrs as fis_bukrs preserving type )` |
| key `BlockedFinancialAccount` | `cast(konko as farp_blocked_acc preserving type )` |
| key `PaymentRunDate` | `laufd` |
| key `PaymentRunID` | `cast(laufi as farp_laufi preserving type )` |
| `ConsideredSpecialGLCodes` | `umskl` |
| `_CompanyCode` | *Association* |
| `_FinancialAccountType` | *Association* |
| `_Supplier` | *Association* |
| `_Customer` | *Association* |
| `_PaymentProposalPayment` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_FinancialAccountType` | `I_FinancialAccountType` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_PaymentProposalPayment` | `I_PaymentProposalPayment` | [0..*] |

## Source Code

```abap
@AbapCatalog: {
    sqlViewName: 'IPPBLKDACCT',
    compiler.compareFilter: true,
    preserveKey: true
    }
@EndUserText.label: 'Payment Proposal Blocked Fin Account'
@AccessControl: {
    authorizationCheck: #CHECK,
    personalData.blocking: #('TRANSACTIONAL_DATA'),
    privilegedAssociations:  [ '_CompanyCode', '_Supplier', '_Customer' ]
    }
@ObjectModel: {
//    representativeKey: 'BlockedAccount',
    usageType.serviceQuality: #B,
    usageType.dataClass: #TRANSACTIONAL,
    usageType.sizeCategory: #S,

    modelingPattern: #NONE,
    supportedCapabilities: [
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #CDS_MODELING_DATA_SOURCE,
                             #SQL_DATA_SOURCE
                             //#EXTRACTION_DATA_SOURCE,
                             ]
    }
@ClientHandling: {
    algorithm: #SESSION_VARIABLE
    }
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
//@Analytics: {
//    dataCategory: #FACT,
    //dataExtraction.enabled: true,
//    internalName: #LOCAL
//   }
@Metadata: {
  ignorePropagatedAnnotations: true
  //allowExtensions: true
  }



define view I_PaytPrpslBlkdFinAccount
  as select from regus
  association [0..1] to I_CompanyCode            as _CompanyCode            on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_FinancialAccountType   as _FinancialAccountType   on  $projection.FinancialAccountType = _FinancialAccountType.FinancialAccountType
  association [0..1] to I_Supplier               as _Supplier               on  $projection.BlockedFinancialAccount = _Supplier.Supplier
                                                                            and FinancialAccountType       = 'K'
  association [0..1] to I_Customer               as _Customer               on  $projection.BlockedFinancialAccount = _Customer.Customer
                                                                            and FinancialAccountType       = 'D'
  association [0..*] to I_PaymentProposalPayment as _PaymentProposalPayment on  $projection.PaymentRunID         = _PaymentProposalPayment.PaymentRunID
                                                                            and $projection.PaymentRunDate       = _PaymentProposalPayment.PaymentRunDate
                                                                            and $projection.FinancialAccountType = _PaymentProposalPayment.FinancialAccountType
                                                                            and (
                                                                               $projection.BlockedFinancialAccount        = _PaymentProposalPayment.Supplier
                                                                               or $projection.BlockedFinancialAccount     = _PaymentProposalPayment.Customer
                                                                             )

{
      @ObjectModel.foreignKey.association: '_FinancialAccountType'
  key cast(koart as farp_koart  preserving type )      as FinancialAccountType,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key cast(bukrs as fis_bukrs preserving type )        as CompanyCode,
  key cast(konko as farp_blocked_acc preserving type ) as BlockedFinancialAccount,
      @Semantics.businessDate.at: true
  key laufd                                            as PaymentRunDate,
  key cast(laufi as farp_laufi preserving type )       as PaymentRunID,
      umskl                                            as ConsideredSpecialGLCodes,
      _CompanyCode,
      _FinancialAccountType,
      _Supplier,
      _Customer,
      _PaymentProposalPayment
}
```
