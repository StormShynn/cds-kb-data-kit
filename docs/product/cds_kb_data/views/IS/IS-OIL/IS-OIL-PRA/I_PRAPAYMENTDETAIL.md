---
name: I_PRAPAYMENTDETAIL
description: "PRA Payment Detail"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAPAYMENTDETAIL')/$value
semantic_en: "PRA Payment Detail"
semantic_vi: "PRA Payment Detail — CDS view giao diện dựa trên PRA Payment Detail."
keywords:
  - "pra"
  - "payment"
  - "detail"
  - "process"
  - "reference"
  - "owner"
  - "joint"
  - "venture"
  - "division"
  - "interest"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - payment
---
# I_PRAPAYMENTDETAIL

**PRA Payment Detail**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAPAYMENTDETAIL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProcessRun` | ✓ | |  | `run_id` | `NUMC(10)` | Proc 2.0 - Run ID |
| `PaymentReference` | ✓ | |  | `cast( check_no as oiu_vdm_check_number )` | `CHAR(13)` | Check Number |
| `PRAOwner` | ✓ | |  | `own_no` | `CHAR(10)` | PRA owner |
| `JointVenture` | ✓ | |  | `vname` | `CHAR(6)` | Joint Venture |
| `DivisionOfInterest` | ✓ | |  | `doi_no` | `CHAR(5)` | Division of Interest (DOI) |
| `Well` | ✓ | |  | `wl_no` | `CHAR(15)` | Well ID number |
| `WellCompletion` | ✓ | |  | `wc_no` | `CHAR(5)` | Well Completion Number |
| `OwnerInterestType` | ✓ | |  | `cast( substring(own_int_type_seq, 1, 2) as oiu_part_int_type)` | `CHAR(2)` | Participant Interest Type |
| `OwnerInterestSequence` | ✓ | |  | `cast( right(own_int_type_seq, 2) as oiu_own_isq_no)` | `CHAR(2)` | Owner Interest Sequence Number |
| `SalesDate` | ✓ | |  | `sale_dt` | `DATS(8)` | Sales Date / Month |
| `Product` | ✓ | |  | `pd_cd` | `CHAR(3)` | Full three char. product code (Major and Detail Products) |
| `DisbursementDecimalRatio` | ✓ | |  | `disb_decimal` | `CHAR(10)` | Payment Processing - Disbursement decimal |
| `GLAccount` | ✓ | |  | `saknr` | `CHAR(10)` | G/L Account Number |
| `RecordType` | ✓ | |  | `record_type` | `CHAR(1)` | Payment Processing - Record Type |
| `CompanyCode` |  | |  | `cast ( bukrs as fis_bukrs preserving type )` | `CHAR(4)` | Company Code |
| `FiscalPeriod` |  | |  | `cast (acct_period as oiu_vdm_fis_period preserving type)` | `ACCP(6)` | Fiscal Period |
| `DeliveryNetwork` |  | |  | `dn_no` | `CHAR(20)` | Delivery network number |
| `Country` |  | |  | `cast( land1 as land1_gp preserving type )` | `CHAR(3)` | Country/Region Key |
| `Region` |  | |  | `regio` | `CHAR(3)` | Region (State, Province, County) |
| `County` |  | |  | `counc` | `CHAR(3)` | County Code |
| `UnitJointVenture` |  | |  | `unit_vname` | `CHAR(6)` | Unit venture |
| `SuspenseReason` |  | |  | `sus_rsn_cd` | `CHAR(3)` | Suspense Reason Code |
| `PriorPeriodAdjustmentReason` |  | |  | `ppa_rsn_cd` | `CHAR(2)` | Prior Period Adjustment Reason Code |
| `CalculationBasis` |  | |  | `aes_cd` | `CHAR(1)` | Actual, Entitlement, Settlement Codes |
| `PaymentDetailRejectionRsn` |  | |  | `dtl_rej_cd` | `CHAR(3)` | Payment Processing - Detail Level Reject Code |
| `PaymentDate` |  | |  | `check_dt` | `DATS(8)` | Check Date |
| `JntIntrstBilgVenture` |  | |  | `jva_name` | `CHAR(6)` | JIB  Venture |
| `JointVentureEquityType` |  | |  | `etype` | `CHAR(3)` | Equity Type |
| `JointVentureEquityGroup` |  | |  | `egrup` | `CHAR(3)` | Equity Group |
| `OriginTransaction` |  | |  | `cast( '/PRA/PP_WORKPLACE' as fqm_origin_trans_id )` | `CHAR(32)` | Source Transaction ID |
| `CreatedByUser` |  | |  | `cast( oiu_cruser as fclm_bam_created_by )` | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  | `cast( oiu_timestamp as oiu_vdm_created_on_ts )` | `DEC(15)` | Created On Timestamp |
| `CompanyCodeCurrency` |  | | `_CompanyCode` | `Currency` | `CUKY(5)` | Currency Key |
| `NetRevenueInterestRatio` |  | |  | `nri_decimal` | `DEC(9)` | Net Revenue Interest Percent |
| `HeatingValue` |  | |  | `heat_val` | `QUAN(13)` | Heating value |
| `VolumeUnit` |  | |  | `cast( vol_uom as /pra/vol_uom )` | `UNIT(3)` | Volume Base Unit of Measure |
| `EnergyUnit` |  | |  | `cast( energy_uom as /pra/energy_uom )` | `UNIT(3)` | Energy Base Unit Of Measure |
| `HeatingValUnit` |  | |  | `cast( heat_val_uom as /pra/heating_uom )` | `UNIT(3)` | Heating Unit Of Measure |
| `GrossVolInVolUnit` |  | |  | `gross_vol` | `QUAN(13)` | Total Gross Volume |
| `GrossAmount` |  | |  | `gross_val` | `CURR(13)` | Gross value |
| `OwnerGrossAmount` |  | |  | `owner_gross_val` | `CURR(13)` | Owner Gross Value |
| `OwnerNetAmount` |  | |  | `net_val` | `CURR(13)` | Owner Net Value |
| `OwnerNetVolInVolUnit` |  | |  | `net_vol` | `QUAN(13)` | Owner Net Volume |
| `GrossEnergyInEnergyUnit` |  | |  | `gross_energy` | `QUAN(13)` | Gross Energy |
| `OwnerEnergyInEnergyUnit` |  | |  | `owner_energy` | `QUAN(13)` | Owner Energy |
| `GrossMarketingCost` |  | |  | `gross_tot_mkt` | `CURR(15)` | Gross marketing costs |
| `GrossTaxAmount` |  | |  | `gross_tot_taxes` | `CURR(15)` | Gross Tax |
| `TotalMarketingAmt` |  | |  | `owner_tot_mkt` | `CURR(15)` | Total owner marketing cost |
| `OwnerTaxAmount` |  | |  | `owner_tot_taxes` | `CURR(15)` | Owner tax |
| `TotalDeductionAmt` |  | |  | `owner_tot_other` | `CURR(15)` | Total Owner Other Deducts |
| `GrossLessDeductionAmt` |  | |  | `grs_less_tax_mkt` | `CURR(13)` | Gross value less deductions |
| `WeightedNetPrice` |  | |  | `price` | `CURR(15)` | Price |
| `_CompanyCode` | | ✓ | | | | |
| `_ProcessRun` | | ✓ | | | | |
| `_PaymentHeader` | | ✓ | | | | |
| `_PRAOwner` | | ✓ | | | | |
| `_OwnerInterestType` | | ✓ | | | | |
| `_PRAJointVenture` | | ✓ | | | | |
| `_DivisionOfInterest` | | ✓ | | | | |
| `_Well` | | ✓ | | | | |
| `_WellCompletion` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_PRAGLAccount` | | ✓ | | | | |
| `_RecordType` | | ✓ | | | | |
| `_DeliveryNetwork` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_County` | | ✓ | | | | |
| `_UnitJointVenture` | | ✓ | | | | |
| `_SuspenseReason` | | ✓ | | | | |
| `_PriorPeriodAdjustmentReason` | | ✓ | | | | |
| `_CalculationBasis` | | ✓ | | | | |
| `_PaymentDtlRejectionRsn` | | ✓ | | | | |
| `_JntIntrstBilgVenture` | | ✓ | | | | |
| `_JointVentureEquityType` | | ✓ | | | | |
| `_VolumeUnit` | | ✓ | | | | |
| `_EnergyUnit` | | ✓ | | | | |
| `_HeatingValUnit` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_ProcessRun` | `I_ProcessRun` | [0..1] |
| `_PaymentHeader` | `I_PRAPaymentHeaderAttribute` | [0..1] |
| `_PRAOwner` | `I_PRAOwner` | [0..1] |
| `_OwnerInterestType` | `I_OwnerInterestType` | [0..1] |
| `_PRAJointVenture` | `I_PRAJointVenture` | [0..1] |
| `_DivisionOfInterest` | `I_DivisionOfInterest` | [0..1] |
| `_Well` | `I_Well` | [0..1] |
| `_WellCompletion` | `I_WellCompletion` | [0..1] |
| `_Product` | `I_PRAProduct` | [0..1] |
| `_PRAGLAccount` | `I_PRAGLAccount` | [0..1] |
| `_RecordType` | `I_PaymentRecordType` | [0..1] |
| `_DeliveryNetwork` | `I_DeliveryNetwork` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_Region` | `I_Region` | [0..1] |
| `_County` | `I_PRACounty` | [0..1] |
| `_UnitJointVenture` | `I_PRAJointVenture` | [0..1] |
| `_SuspenseReason` | `I_SuspenseReason` | [0..1] |
| `_PriorPeriodAdjustmentReason` | `I_PriorPeriodAdjustmentReason` | [0..1] |
| `_CalculationBasis` | `I_Calculationbasis` | [0..1] |
| `_PaymentDtlRejectionRsn` | `I_PaymentDtlRejectionRsn` | [0..1] |
| `_JntIntrstBilgVenture` | `I_JointVenture` | [0..1] |
| `_JointVentureEquityType` | `I_JointVentureEquityType` | [0..1] |
| `_VolumeUnit` | `I_UnitOfMeasure` | [0..1] |
| `_EnergyUnit` | `I_UnitOfMeasure` | [0..1] |
| `_HeatingValUnit` | `I_UnitOfMeasure` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [0..1] |
| `_CreatedByUser` | `I_User` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAPAYMENTDETAIL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAPAYMENTDETAIL')/$value)*

```abap
@EndUserText.label: 'PRA Payment Detail'
@Analytics.dataCategory: #CUBE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVPAYMENTDTL'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.sapObjectNodeType.name: 'PRAPaymentDetail'
define view I_PRAPaymentDetail
  as select from /pra/pp_chk_dtl
  association [0..1] to I_CompanyCode                 as _CompanyCode                 on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_ProcessRun                  as _ProcessRun                  on  $projection.ProcessRun = _ProcessRun.ProcessRun
  association [0..1] to I_PRAPaymentHeaderAttribute   as _PaymentHeader               on  $projection.ProcessRun       = _PaymentHeader.ProcessRun
                                                                                      and $projection.PaymentReference = _PaymentHeader.PaymentReference
  association [0..1] to I_PRAOwner                    as _PRAOwner                    on  $projection.PRAOwner = _PRAOwner.PRAOwner
  association [0..1] to I_OwnerInterestType           as _OwnerInterestType           on  $projection.OwnerInterestType = _OwnerInterestType.OwnerInterestType
  association [0..1] to I_PRAJointVenture             as _PRAJointVenture             on  $projection.CompanyCode  = _PRAJointVenture.CompanyCode
                                                                                      and $projection.JointVenture = _PRAJointVenture.PRAJointVenture
  association [0..1] to I_DivisionOfInterest          as _DivisionOfInterest          on  $projection.CompanyCode        = _DivisionOfInterest.CompanyCode
                                                                                      and $projection.JointVenture       = _DivisionOfInterest.JointVenture
                                                                                      and $projection.DivisionOfInterest = _DivisionOfInterest.DivisionOfInterest
  association [0..1] to I_Well                        as _Well                        on  $projection.Well = _Well.Well
  association [0..1] to I_WellCompletion              as _WellCompletion              on  $projection.Well           = _WellCompletion.Well
                                                                                      and $projection.WellCompletion = _WellCompletion.WellCompletion
  association [0..1] to I_PRAProduct                  as _Product                     on  $projection.Product = _Product.Product
  association [0..1] to I_PRAGLAccount                as _PRAGLAccount                on  $projection.CompanyCode = _PRAGLAccount.CompanyCode
                                                                                      and $projection.GLAccount   = _PRAGLAccount.GLAccount
  association [0..1] to I_PaymentRecordType           as _RecordType                  on  $projection.RecordType = _RecordType.RecordType
  //  association [0..1] to I_PRAFiscalPeriod             as _FiscalPeriod                on  $projection.CompanyCode  = _FiscalPeriod.CompanyCode
  //                                                                                      and $projection.FiscalPeriod = _FiscalPeriod.FiscalPeriod
  association [0..1] to I_DeliveryNetwork             as _DeliveryNetwork             on  $projection.DeliveryNetwork = _DeliveryNetwork.DeliveryNetwork
  association [0..1] to I_Country                     as _Country                     on  $projection.Country = _Country.Country
  association [0..1] to I_Region                      as _Region                      on  $projection.Country = _Region.Country
                                                                                      and $projection.Region  = _Region.Region
  association [0..1] to I_PRACounty                   as _County                      on  $projection.Country = _County.Country
                                                                                      and $projection.Region  = _County.Region
                                                                                      and $projection.County  = _County.County
  association [0..1] to I_PRAJointVenture             as _UnitJointVenture            on  $projection.CompanyCode      = _UnitJointVenture.CompanyCode
                                                                                      and $projection.UnitJointVenture = _UnitJointVenture.PRAJointVenture
  association [0..1] to I_SuspenseReason              as _SuspenseReason              on  $projection.SuspenseReason = _SuspenseReason.SuspenseReason
  association [0..1] to I_PriorPeriodAdjustmentReason as _PriorPeriodAdjustmentReason on  $projection.PriorPeriodAdjustmentReason = _PriorPeriodAdjustmentReason.PriorPeriodAdjustmentReason
  association [0..1] to I_Calculationbasis            as _CalculationBasis            on  $projection.CalculationBasis = _CalculationBasis.CalculationBasis
  association [0..1] to I_PaymentDtlRejectionRsn      as _PaymentDtlRejectionRsn      on  $projection.PaymentDetailRejectionRsn = _PaymentDtlRejectionRsn.PaymentDetailRejectionRsn
  association [0..1] to I_JointVenture                as _JntIntrstBilgVenture        on  $projection.CompanyCode          = _JntIntrstBilgVenture.CompanyCode
                                                                                      and $projection.JntIntrstBilgVenture = _JntIntrstBilgVenture.JointVenture
  association [0..1] to I_JointVentureEquityType      as _JointVentureEquityType      on  $projection.CompanyCode            = _JointVentureEquityType.CompanyCode
                                                                                      and $projection.JointVentureEquityType = _JointVentureEquityType.JointVentureEquityType
  //association [0..1] to I_JointVentureEquityGroup     as _JointVentureEquityGroup     on  $projection.CompanyCode             = _JointVentureEquityGroup.CompanyCode
  //                                                                                    and $projection.JointVenture            = _JointVentureEquityGroup.JointVenture
  //                                                                                    and $projection.JointVentureEquityGroup = _JointVentureEquityGroup.JointVentureEquityGroup
  association [0..1] to I_UnitOfMeasure               as _VolumeUnit                  on  $projection.VolumeUnit = _VolumeUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _EnergyUnit                  on  $projection.EnergyUnit = _EnergyUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _HeatingValUnit              on  $projection.HeatingValUnit = _HeatingValUnit.UnitOfMeasure
  association [0..1] to I_Currency                    as _CompanyCodeCurrency         on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency
  association [0..1] to I_User                        as _CreatedByUser               on  $projection.CreatedByUser = _CreatedByUser.UserID
{
      @ObjectModel.foreignKey.association: '_ProcessRun'
  key run_id                                                        as ProcessRun,
      @ObjectModel.foreignKey.association: '_PaymentHeader'
  key cast( check_no as oiu_vdm_check_number )                      as PaymentReference,
      @ObjectModel.foreignKey.association: '_PRAOwner'
  key own_no                                                        as PRAOwner,
      @ObjectModel.foreignKey.association: '_PRAJointVenture'
  key vname                                                         as JointVenture,
      @ObjectModel.foreignKey.association: '_DivisionOfInterest'
  key doi_no                                                        as DivisionOfInterest,
      @ObjectModel.foreignKey.association: '_Well'
  key wl_no                                                         as Well,
      @ObjectModel.foreignKey.association: '_WellCompletion'
  key wc_no                                                         as WellCompletion,
      @ObjectModel.foreignKey.association: '_OwnerInterestType'
  key cast( substring(own_int_type_seq, 1, 2) as oiu_part_int_type) as OwnerInterestType,
  key cast( right(own_int_type_seq, 2) as oiu_own_isq_no)           as OwnerInterestSequence,
      @Semantics.businessDate.at: true
  key sale_dt                                                       as SalesDate,
      @ObjectModel.foreignKey.association: '_Product'
  key pd_cd                                                         as Product,
  key disb_decimal                                                  as DisbursementDecimalRatio,
      @ObjectModel.foreignKey.association: '_PRAGLAccount'
  key saknr                                                         as GLAccount,
      @ObjectModel.foreignKey.association: '_RecordType'
  key record_type                                                   as RecordType,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      //bukrs                                                         as CompanyCode,
      cast ( bukrs as fis_bukrs preserving type )                   as CompanyCode,
      // @ObjectModel.foreignKey.association: '_FiscalPeriod'
      cast (acct_period as oiu_vdm_fis_period preserving type)      as FiscalPeriod,
      @ObjectModel.foreignKey.association: '_DeliveryNetwork'
      dn_no                                                         as DeliveryNetwork,
      @ObjectModel.foreignKey.association: '_Country'
      cast( land1 as land1_gp preserving type )                     as Country,
      @ObjectModel.foreignKey.association: '_Region'
      regio                                                         as Region,
      @ObjectModel.foreignKey.association: '_County'
      counc                                                         as County,
      @ObjectModel.foreignKey.association: '_UnitJointVenture'
      unit_vname                                                    as UnitJointVenture,
      @ObjectModel.foreignKey.association: '_SuspenseReason'
      sus_rsn_cd                                                    as SuspenseReason,
      @ObjectModel.foreignKey.association: '_PriorPeriodAdjustmentReason'
      ppa_rsn_cd                                                    as PriorPeriodAdjustmentReason,
      @ObjectModel.foreignKey.association: '_CalculationBasis'
      aes_cd                                                        as CalculationBasis,
      @ObjectModel.foreignKey.association: '_PaymentDtlRejectionRsn'
      dtl_rej_cd                                                    as PaymentDetailRejectionRsn,
      @Semantics.businessDate.at: true
      check_dt                                                      as PaymentDate,
      // @ObjectModel.foreignKey.association: ''
      // resp_area                                           as AreaOfResponsibility,
      @ObjectModel.foreignKey.association: '_JntIntrstBilgVenture'
      jva_name                                                      as JntIntrstBilgVenture,
      @ObjectModel.foreignKey.association: '_JointVentureEquityType'
      etype                                                         as JointVentureEquityType,
      //@ObjectModel.foreignKey.association: '_JointVentureEquityGroup'
      egrup                                                         as JointVentureEquityGroup,

      //needed to support authorization check
      cast( '/PRA/PP_WORKPLACE' as fqm_origin_trans_id )            as OriginTransaction,

      //adminstrative
      @Semantics.user.createdBy: true
      cast( oiu_cruser as fclm_bam_created_by )                     as CreatedByUser,
      cast( oiu_timestamp as oiu_vdm_created_on_ts )                as CreationDateTime,

      // currencies
      @Semantics.currencyCode: true
      _CompanyCode.Currency                                 as CompanyCodeCurrency,

      // numeric attributes (change from sum)
      @DefaultAggregation: #SUM
      nri_decimal                                                   as NetRevenueInterestRatio,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'HeatingValUnit'
      heat_val                                                      as HeatingValue,

      // uoms
      @Semantics.unitOfMeasure: true
      cast( vol_uom as /pra/vol_uom )                               as VolumeUnit,
      @Semantics.unitOfMeasure: true
      cast( energy_uom as /pra/energy_uom )                         as EnergyUnit,
      @Semantics.unitOfMeasure: true
      cast( heat_val_uom  as /pra/heating_uom )                     as HeatingValUnit,

      // measures
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'VolumeUnit'
      gross_vol                                                     as GrossVolInVolUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      gross_val                                                     as GrossAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      owner_gross_val                                               as OwnerGrossAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      net_val                                                       as OwnerNetAmount,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'VolumeUnit'
      net_vol                                                       as OwnerNetVolInVolUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'EnergyUnit'
      gross_energy                                                  as GrossEnergyInEnergyUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'EnergyUnit'
      owner_energy                                                  as OwnerEnergyInEnergyUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      gross_tot_mkt                                                 as GrossMarketingCost,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      gross_tot_taxes                                               as GrossTaxAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      owner_tot_mkt                                                 as TotalMarketingAmt,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      owner_tot_taxes                                               as OwnerTaxAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      owner_tot_other                                               as TotalDeductionAmt,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      grs_less_tax_mkt                                              as GrossLessDeductionAmt,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      price                                                         as WeightedNetPrice,

      //associations
      _CompanyCode,
      _ProcessRun,
      _PaymentHeader,
      _PRAOwner,
      _OwnerInterestType,
      _PRAJointVenture,
      _DivisionOfInterest,
      _Well,
      _WellCompletion,
      _Product,
      _PRAGLAccount,
      _RecordType,
      // _FiscalPeriod,
      _DeliveryNetwork,
      _Country,
      _Region,
      _County,
      _UnitJointVenture,
      _SuspenseReason,
      _PriorPeriodAdjustmentReason,
      _CalculationBasis,
      _PaymentDtlRejectionRsn,
      _JntIntrstBilgVenture,
      _JointVentureEquityType,
      //_JointVentureEquityGroup,
      _VolumeUnit,
      _EnergyUnit,
      _HeatingValUnit,
      _CompanyCodeCurrency,
      _CreatedByUser

}  ;
```
