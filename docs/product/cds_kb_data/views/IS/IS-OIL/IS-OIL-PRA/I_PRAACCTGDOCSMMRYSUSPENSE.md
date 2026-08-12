---
name: I_PRAACCTGDOCSMMRYSUSPENSE
description: "PRA Acctg Document Summary Suspense"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCTGDOCSMMRYSUSPENSE')/$value
semantic_en: "PRA Acctg Document Summary Suspense"
semantic_vi: "PRA Acctg Document Summary Suspense — CDS view giao diện dựa trên PRA Acctg Document Summary Suspense."
keywords:
  - "pra"
  - "acctg"
  - "document"
  - "summary"
  - "suspense"
  - "owner"
  - "interest"
  - "type"
  - "sequence"
  - "joint"
  - "venture"
  - "division"
tags:
  - IS
  - component:IS-OIL-PRA
  - document
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRAACCTGDOCSMMRYSUSPENSE

**PRA Acctg Document Summary Suspense**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCTGDOCSMMRYSUSPENSE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PRAOwner` | ✓ | |  | `own_no` | `CHAR(10)` | PRA owner |
| `OwnerInterestType` | ✓ | |  | `cast( substring(own_int_type_seq, 1, 2) as oiu_part_int_type)` | `CHAR(2)` | Participant Interest Type |
| `OwnerInterestSequence` | ✓ | |  | `cast( right(own_int_type_seq, 2) as oiu_own_isq_no)` | `CHAR(2)` | Owner Interest Sequence Number |
| `JointVenture` | ✓ | |  | `vname` | `CHAR(6)` | Joint Venture |
| `DivisionOfInterest` | ✓ | |  | `doi_no` | `CHAR(5)` | Division of Interest (DOI) |
| `Well` | ✓ | |  | `wl_no` | `CHAR(15)` | Well ID number |
| `WellCompletion` | ✓ | |  | `wc_no` | `CHAR(5)` | Well Completion Number |
| `SalesDate` | ✓ | |  | `sale_dt` | `DATS(8)` | Sales Date / Month |
| `Product` | ✓ | |  | `pd_cd` | `CHAR(3)` | Full three char. product code (Major and Detail Products) |
| `DisbursementDecimalRatio` | ✓ | |  | `disb_decimal` | `CHAR(10)` | Payment Processing - Disbursement decimal |
| `GLAccount` | ✓ | |  | `saknr` | `CHAR(10)` | G/L Account Number |
| `RecordType` | ✓ | |  | `record_type` | `CHAR(1)` | Payment Processing - Record Type |
| `CompanyCodeCurrency` | ✓ | |  | `waers` | `CUKY(5)` | Currency Key |
| `GLAccountType` |  | | `_PRAGLChartOfAccounts` | `GLAccountType` | `CHAR(2)` | Account Type |
| `UnitJointVenture` |  | |  | `unit_vname` | `CHAR(6)` | Unit venture |
| `OwnerIsJntIntrstBilgEnabled` |  | |  | `jib_flag` | `CHAR(1)` | Job Interest Billing Indicator |
| `FiscalPeriod` |  | |  | `cast (acct_period as oiu_vdm_fis_period preserving type)` | `ACCP(6)` | Fiscal Period |
| `Country` |  | |  | `cast( land1 as land1_gp preserving type )` | `CHAR(3)` | Country/Region Key |
| `Region` |  | |  | `regio` | `CHAR(3)` | Region (State, Province, County) |
| `County` |  | |  | `counc` | `CHAR(3)` | County Code |
| `CompanyCode` |  | |  | `cast ( bukrs as fis_bukrs preserving type)` | `CHAR(4)` | Company Code |
| `DeliveryNetwork` |  | |  | `dn_no` | `CHAR(20)` | Delivery network number |
| `CalculationBasis` |  | |  | `aes_cd` | `CHAR(1)` | Actual, Entitlement, Settlement Codes |
| `SuspenseReason` |  | |  | `sus_rsn_cd` | `CHAR(3)` | Suspense Reason Code |
| `PriorPeriodAdjustmentReason` |  | |  | `ppa_rsn_cd` | `CHAR(2)` | Prior Period Adjustment Reason Code |
| `PaymentCycle` |  | |  | `future_pay_fl` | `CHAR(1)` | Payment Processing - Future Pay Flag |
| `VolumeUnit` |  | |  | `cast( vol_uom as oiu_vdm_volume_unit)` | `UNIT(3)` | Volume Unit |
| `EnergyUnit` |  | |  | `cast( energy_uom as oiu_vdm_energy_unit)` | `UNIT(3)` | Energy Unit |
| `GrossVolInVolUnit` |  | |  | `gross_vol` | `QUAN(13)` | Total Gross Volume |
| `GrossEnergyInEnergyUnit` |  | |  | `gross_energy` | `QUAN(13)` | Gross Energy |
| `GrossAmount` |  | |  | `gross_val` | `CURR(13)` | Gross value |
| `NetRevenueInterestRatio` |  | |  | `nri_decimal` | `DEC(9)` | Net Revenue Interest Percent |
| `OwnerNetVolInVolUnit` |  | |  | `net_vol` | `QUAN(13)` | Owner Net Volume |
| `OwnerEnergyInEnergyUnit` |  | |  | `owner_energy` | `QUAN(13)` | Owner Energy |
| `OwnerGrossAmount` |  | |  | `owner_gross_val` | `CURR(13)` | Owner Gross Value |
| `OwnerNetAmount` |  | |  | `net_val` | `CURR(13)` | Owner Net Value |
| `_PRAOwner` | | ✓ | | | | |
| `_OwnerInterestType` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_PRAJointVenture` | | ✓ | | | | |
| `_UnitJointVenture` | | ✓ | | | | |
| `_DivisionOfInterest` | | ✓ | | | | |
| `_PRAGLAccount` | | ✓ | | | | |
| `_PRAPaytRecordType` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_VolumeUnit` | | ✓ | | | | |
| `_EnergyUnit` | | ✓ | | | | |
| `_DeliveryNetwork` | | ✓ | | | | |
| `_Well` | | ✓ | | | | |
| `_WellCompletion` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_County` | | ✓ | | | | |
| `_CalculationBasis` | | ✓ | | | | |
| `_PriorPeriodAdjustmentReason` | | ✓ | | | | |
| `_SuspenseReason` | | ✓ | | | | |
| `_PRAPaymentCycle` | | ✓ | | | | |
| `_OwnerIsJntIntrstBilgEnabled` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PRAGLChartOfAccounts` | `P_PRAGLChartOfAccounts` | [0..1] |
| `_PRAOwner` | `I_PRAOwner` | [0..1] |
| `_OwnerInterestType` | `I_OwnerInterestType` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_PRAJointVenture` | `I_PRAJointVenture` | [0..1] |
| `_UnitJointVenture` | `I_PRAJointVenture` | [0..1] |
| `_DivisionOfInterest` | `I_DivisionOfInterest` | [0..1] |
| `_PRAGLAccount` | `I_PRAGLAccount` | [0..1] |
| `_PRAPaytRecordType` | `I_PRAPaytRecordType` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [0..1] |
| `_VolumeUnit` | `I_UnitOfMeasure` | [0..1] |
| `_EnergyUnit` | `I_UnitOfMeasure` | [0..1] |
| `_DeliveryNetwork` | `I_DeliveryNetwork` | [0..1] |
| `_Well` | `I_Well` | [0..1] |
| `_WellCompletion` | `I_WellCompletion` | [0..1] |
| `_Product` | `I_PRAProduct` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_Region` | `I_Region` | [0..1] |
| `_County` | `I_PRACounty` | [0..1] |
| `_CalculationBasis` | `I_Calculationbasis` | [0..1] |
| `_PriorPeriodAdjustmentReason` | `I_PriorPeriodAdjustmentReason` | [0..1] |
| `_SuspenseReason` | `I_SuspenseReason` | [0..1] |
| `_PRAPaymentCycle` | `I_PRAPaymentCycle` | [0..1] |
| `_OwnerIsJntIntrstBilgEnabled` | `I_Indicator` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCTGDOCSMMRYSUSPENSE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCTGDOCSMMRYSUSPENSE')/$value)*

```abap
@EndUserText.label: 'PRA Acctg Document Summary Suspense'
@Analytics.dataCategory: #CUBE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVSMMRYSUSPENSE'
@AccessControl.authorizationCheck: #CHECK

@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.sapObjectNodeType.name: 'PRAAcctgDocSmmrySuspense'
define view I_PRAAcctgDocSmmrySuspense
  as select from /pra/pp_sus_sum
  // below private view used to limit view complexity (no other joins) for retrieving account type as required for authorization check
  association [0..1] to P_PRAGLChartOfAccounts        as _PRAGLChartOfAccounts        on  $projection.CompanyCode = _PRAGLChartOfAccounts.CompanyCode
                                                                                      and $projection.GLAccount   = _PRAGLChartOfAccounts.GLAccount
  //
  association [0..1] to I_PRAOwner                    as _PRAOwner                    on  $projection.PRAOwner = _PRAOwner.PRAOwner
  association [0..1] to I_OwnerInterestType           as _OwnerInterestType           on  $projection.OwnerInterestType = _OwnerInterestType.OwnerInterestType
  association [0..1] to I_CompanyCode                 as _CompanyCode                 on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_PRAJointVenture             as _PRAJointVenture             on  $projection.CompanyCode  = _PRAJointVenture.CompanyCode
                                                                                      and $projection.JointVenture = _PRAJointVenture.PRAJointVenture
  association [0..1] to I_PRAJointVenture             as _UnitJointVenture            on  $projection.CompanyCode      = _UnitJointVenture.CompanyCode
                                                                                      and $projection.UnitJointVenture = _UnitJointVenture.PRAJointVenture
  association [0..1] to I_DivisionOfInterest          as _DivisionOfInterest          on  $projection.CompanyCode        = _DivisionOfInterest.CompanyCode
                                                                                      and $projection.JointVenture       = _DivisionOfInterest.JointVenture
                                                                                      and $projection.DivisionOfInterest = _DivisionOfInterest.DivisionOfInterest
  association [0..1] to I_PRAGLAccount                as _PRAGLAccount                on  $projection.CompanyCode = _PRAGLAccount.CompanyCode
                                                                                      and $projection.GLAccount   = _PRAGLAccount.GLAccount
  association [0..1] to I_PRAPaytRecordType           as _PRAPaytRecordType           on  $projection.RecordType = _PRAPaytRecordType.RecordType
  association [0..1] to I_Currency                    as _CompanyCodeCurrency         on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency
  association [0..1] to I_UnitOfMeasure               as _VolumeUnit                  on  $projection.VolumeUnit = _VolumeUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _EnergyUnit                  on  $projection.EnergyUnit = _EnergyUnit.UnitOfMeasure
  association [0..1] to I_DeliveryNetwork             as _DeliveryNetwork             on  $projection.DeliveryNetwork = _DeliveryNetwork.DeliveryNetwork
  association [0..1] to I_Well                        as _Well                        on  $projection.Well = _Well.Well
  association [0..1] to I_WellCompletion              as _WellCompletion              on  $projection.Well           = _WellCompletion.Well
                                                                                      and $projection.WellCompletion = _WellCompletion.WellCompletion
  association [0..1] to I_PRAProduct                  as _Product                     on  $projection.Product = _Product.Product
  association [0..1] to I_Country                     as _Country                     on  $projection.Country = _Country.Country
  association [0..1] to I_Region                      as _Region                      on  $projection.Country = _Region.Country
                                                                                      and $projection.Region  = _Region.Region
  association [0..1] to I_PRACounty                   as _County                      on  $projection.Country = _County.Country
                                                                                      and $projection.Region  = _County.Region
                                                                                      and $projection.County  = _County.County
  association [0..1] to I_Calculationbasis            as _CalculationBasis            on  $projection.CalculationBasis = _CalculationBasis.CalculationBasis
  association [0..1] to I_PriorPeriodAdjustmentReason as _PriorPeriodAdjustmentReason on  $projection.PriorPeriodAdjustmentReason = _PriorPeriodAdjustmentReason.PriorPeriodAdjustmentReason
  association [0..1] to I_SuspenseReason              as _SuspenseReason              on  $projection.SuspenseReason = _SuspenseReason.SuspenseReason
  association [0..1] to I_PRAPaymentCycle             as _PRAPaymentCycle             on  $projection.PaymentCycle = _PRAPaymentCycle.PaymentCycle
  association [0..1] to I_Indicator                   as _OwnerIsJntIntrstBilgEnabled on  $projection.OwnerIsJntIntrstBilgEnabled = _OwnerIsJntIntrstBilgEnabled.IndicatorValue

{
      @ObjectModel.foreignKey.association: '_PRAOwner'
  key own_no                                                        as PRAOwner,
      @ObjectModel.foreignKey.association: '_OwnerInterestType'
  key cast( substring(own_int_type_seq, 1, 2) as oiu_part_int_type) as OwnerInterestType,
  key cast( right(own_int_type_seq, 2) as oiu_own_isq_no)           as OwnerInterestSequence,
      @ObjectModel.foreignKey.association: '_PRAJointVenture'
  key vname                                                         as JointVenture,
      @ObjectModel.foreignKey.association: '_DivisionOfInterest'
  key doi_no                                                        as DivisionOfInterest,
      @ObjectModel.foreignKey.association: '_Well'
  key wl_no                                                         as Well,
      @ObjectModel.foreignKey.association: '_WellCompletion'
  key wc_no                                                         as WellCompletion,
      @Semantics.businessDate.at: true
  key sale_dt                                                       as SalesDate,
      @ObjectModel.foreignKey.association: '_Product'
  key pd_cd                                                         as Product,
  key disb_decimal                                                  as DisbursementDecimalRatio,
      @ObjectModel.foreignKey.association: '_PRAGLAccount'
  key saknr                                                         as GLAccount,
      @ObjectModel.foreignKey.association: '_PRAPaytRecordType'
  key record_type                                                   as RecordType,
      @Semantics.currencyCode: true
  key waers                                                         as CompanyCodeCurrency,

      //    account type needed for auth check
      _PRAGLChartOfAccounts.GLAccountType,

      //    other attributes
      @ObjectModel.foreignKey.association: '_UnitJointVenture'
      unit_vname                                                    as UnitJointVenture,
      @ObjectModel.foreignKey.association: '_OwnerIsJntIntrstBilgEnabled'
      jib_flag                                                      as OwnerIsJntIntrstBilgEnabled,
//    add fiscal period association when accp field can be used in models
      cast (acct_period as oiu_vdm_fis_period preserving type)      as FiscalPeriod,
      @ObjectModel.foreignKey.association: '_Country'
      cast( land1 as land1_gp preserving type )                     as Country,
      @ObjectModel.foreignKey.association: '_Region'
      regio                                                         as Region,
      @ObjectModel.foreignKey.association: '_County'
      counc                                                         as County,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      //bukrs                                                         as CompanyCode,
      cast ( bukrs as fis_bukrs preserving type)                    as CompanyCode,
      @ObjectModel.foreignKey.association: '_DeliveryNetwork'
      dn_no                                                         as DeliveryNetwork,
      @ObjectModel.foreignKey.association: '_CalculationBasis'
      aes_cd                                                        as CalculationBasis,
      @ObjectModel.foreignKey.association: '_SuspenseReason'
      sus_rsn_cd                                                    as SuspenseReason,
      @ObjectModel.foreignKey.association: '_PriorPeriodAdjustmentReason'
      ppa_rsn_cd                                                    as PriorPeriodAdjustmentReason,
      @ObjectModel.foreignKey.association: '_PRAPaymentCycle'
      future_pay_fl                                                 as PaymentCycle,

      //    currencies and units
      @Semantics.unitOfMeasure: true
      cast( vol_uom as oiu_vdm_volume_unit)                         as VolumeUnit,
      @Semantics.unitOfMeasure: true
      cast( energy_uom as oiu_vdm_energy_unit)                      as EnergyUnit,

      //    gross amounts
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'VolumeUnit'
      gross_vol                                                     as GrossVolInVolUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'EnergyUnit'
      gross_energy                                                  as GrossEnergyInEnergyUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      gross_val                                                     as GrossAmount,

      //    net amounts
      @DefaultAggregation: #SUM
      nri_decimal                                                   as NetRevenueInterestRatio,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'VolumeUnit'
      net_vol                                                       as OwnerNetVolInVolUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'EnergyUnit'
      owner_energy                                                  as OwnerEnergyInEnergyUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      owner_gross_val                                               as OwnerGrossAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      net_val                                                       as OwnerNetAmount,

      //    associations
      _PRAOwner,
      _OwnerInterestType,
      _CompanyCode,
      _PRAJointVenture,
      _DivisionOfInterest,
      _UnitJointVenture,
      _OwnerIsJntIntrstBilgEnabled,
      _Well,
      _WellCompletion,
      _Product,
      _PRAGLAccount,
      _PRAPaytRecordType,
      _CompanyCodeCurrency,
      _VolumeUnit,
      _EnergyUnit,
      _DeliveryNetwork,
      _CalculationBasis,
      _PRAPaymentCycle,
      _PriorPeriodAdjustmentReason,
      _SuspenseReason,
      _Country,
      _Region,
      _County
};
```
