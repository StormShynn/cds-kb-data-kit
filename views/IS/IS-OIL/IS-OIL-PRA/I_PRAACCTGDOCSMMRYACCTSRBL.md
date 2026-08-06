---
name: I_PRAACCTGDOCSMMRYACCTSRBL
description: Praacctgdocsmmryacctsrbl
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - IS
  - IS-OIL
  - IS-OIL-PRA
  - interface-view
  - component:IS-OIL-PRA
  - lob:Other
---
# I_PRAACCTGDOCSMMRYACCTSRBL

**Praacctgdocsmmryacctsrbl**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CompanyCode` | `cast ( bukrs as fis_bukrs preserving type )` |
| key `Remitter` | `remt_no` |
| key `AccountsReceivableJointVenture` | `ar_vname` |
| key `AcctsRblDivisionOfInterest` | `ar_doi_no` |
| key `AcctsRblMeasurementPt` | `ar_mp_no` |
| key `Product` | `pd_cd` |
| key `SalesDate` | `sale_dt` |
| `BalAmtAgeCode` | `age` |
| `CompanyCodeCurrency` | `_CompanyCode.Currency` |
| `AcctsRblStatus` | `status` |
| `StatusLastChangedByUser` | `status_user` |
| `WriteOffResponsibleUser` | `awo_user` |
| `AgingPeriod` | `cast(aging_period as /pra/aging_acct_perd)` |
| `GLAccountType` | `cast( 'AR' as oiuh_acctype)` |
| `BalAmtInCompanyCodeCrcy` | `cur_bal` |
| `ReceivableAmtInCoCodeCrcy` | `tot_recvbl` |
| `CashAmtInCoCodeCrcy` | `tot_cashbl` |
| `StatusAmtInCompanyCodeCrcy` | `orig_status_amt` |
| `WriteOffAmtInCoCodeCrcy` | `awo_amt` |
| `_CompanyCode` | *Association* |
| `_Remitter` | *Association* |
| `_AccountsRblJointVenture` | *Association* |
| `_AcctsRblDivisionOfInterest` | *Association* |
| `_AcctsRblMeasurementPt` | *Association* |
| `_Product` | *Association* |
| `_BalAmtAge` | *Association* |
| `_CompanyCodeCurrency` | *Association* |
| `_AcctsRblStatus` | *Association* |
| `_GLAccountType` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Remitter` | `I_Customer` | [0..1] |
| `_AccountsRblJointVenture` | `I_PRAJointVenture` | [0..1] |
| `_AcctsRblDivisionOfInterest` | `I_DivisionOfInterest` | [0..1] |
| `_AcctsRblMeasurementPt` | `I_MeasurementPoint` | [0..1] |
| `_Product` | `I_PRAProduct` | [0..1] |
| `_BalAmtAge` | `I_ARBalAmtAge` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [0..1] |
| `_AcctsRblStatus` | `I_PRAARStatus` | [0..1] |
| `_GLAccountType` | `I_PRAGLAccountType` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'PRA Acctg Document Summary AR'
@Analytics.dataCategory: #CUBE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVSMMRYAR'
@AccessControl.authorizationCheck: #CHECK

@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.sapObjectNodeType.name: 'PRAAcctgDocSmmryAcctRbl'
define view I_PRAAcctgDocSmmryAcctsRbl
  as select from /pra/ar_rec_bal
  association [0..1] to I_CompanyCode        as _CompanyCode                on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_Customer           as _Remitter                   on  $projection.Remitter = _Remitter.Customer
  association [0..1] to I_PRAJointVenture    as _AccountsRblJointVenture    on  $projection.CompanyCode                    = _AccountsRblJointVenture.CompanyCode
                                                                            and $projection.AccountsReceivableJointVenture = _AccountsRblJointVenture.PRAJointVenture
  association [0..1] to I_DivisionOfInterest as _AcctsRblDivisionOfInterest on  $projection.CompanyCode                    = _AcctsRblDivisionOfInterest.CompanyCode
                                                                            and $projection.AccountsReceivableJointVenture = _AcctsRblDivisionOfInterest.JointVenture
                                                                            and $projection.AcctsRblDivisionOfInterest     = _AcctsRblDivisionOfInterest.DivisionOfInterest
  association [0..1] to I_MeasurementPoint   as _AcctsRblMeasurementPt      on  $projection.AcctsRblMeasurementPt = _AcctsRblMeasurementPt.MeasurementPoint
  association [0..1] to I_PRAProduct         as _Product                    on  $projection.Product = _Product.Product
  association [0..1] to I_ARBalAmtAge        as _BalAmtAge                  on  $projection.BalAmtAgeCode = _BalAmtAge.BalAmtAgeCode
  association [0..1] to I_Currency           as _CompanyCodeCurrency        on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency
  association [0..1] to I_PRAARStatus        as _AcctsRblStatus             on  $projection.AcctsRblStatus = _AcctsRblStatus.AcctsRblStatus
  association [0..1] to I_PRAGLAccountType   as _GLAccountType              on  $projection.GLAccountType = _GLAccountType.GLAccountType
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key  cast ( bukrs as fis_bukrs preserving type ) as CompanyCode,
      @ObjectModel.foreignKey.association: '_Remitter'
  key remt_no                     as Remitter,
      @ObjectModel.foreignKey.association: '_AccountsRblJointVenture'
  key ar_vname                    as AccountsReceivableJointVenture,
      @ObjectModel.foreignKey.association: '_AcctsRblDivisionOfInterest'
  key ar_doi_no                   as AcctsRblDivisionOfInterest,
      @ObjectModel.foreignKey.association: '_AcctsRblMeasurementPt'
  key ar_mp_no                    as AcctsRblMeasurementPt,
      @ObjectModel.foreignKey.association: '_Product'
  key pd_cd                       as Product,
      @Semantics.businessDate.at: true
  key sale_dt                     as SalesDate,
      @ObjectModel.foreignKey.association: '_BalAmtAge'
      age                         as BalAmtAgeCode,
      @Semantics.currencyCode: true
      _CompanyCode.Currency       as CompanyCodeCurrency,
      @ObjectModel.foreignKey.association: '_AcctsRblStatus'
      status                      as AcctsRblStatus,
      @Semantics.user.lastChangedBy: true
      status_user                 as StatusLastChangedByUser,
      @Semantics.user.lastChangedBy: true
      awo_user                    as WriteOffResponsibleUser,
      @Semantics.businessDate.at: true
      //aging_period                as AgingPeriod, 
      cast(aging_period as /pra/aging_acct_perd) as AgingPeriod, 
      //    account type needed for auth check
      @ObjectModel.foreignKey.association: '_GLAccountType'
      cast( 'AR' as oiuh_acctype) as GLAccountType,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cur_bal                     as BalAmtInCompanyCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      tot_recvbl                  as ReceivableAmtInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      tot_cashbl                  as CashAmtInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      orig_status_amt             as StatusAmtInCompanyCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      awo_amt                     as WriteOffAmtInCoCodeCrcy,

      //    associations
      _CompanyCode,
      _Remitter,
      _Product,
      _AccountsRblJointVenture,
      _AcctsRblDivisionOfInterest,
      _AcctsRblMeasurementPt,
      _CompanyCodeCurrency,
      _BalAmtAge,
      _AcctsRblStatus,
      _GLAccountType
};
```
