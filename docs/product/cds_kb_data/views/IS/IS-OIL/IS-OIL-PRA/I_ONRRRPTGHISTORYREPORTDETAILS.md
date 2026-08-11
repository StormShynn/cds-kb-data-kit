---
name: I_ONRRRPTGHISTORYREPORTDETAILS
description: "ONRR Reporting History Report Details"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRRPTGHISTORYREPORTDETAILS')/$value
semantic_en: "ONRR Reporting History Report Details"
semantic_vi: "ONRR Reporting History Report Details — CDS view giao diện dựa trên ONRR Reporting History Report Details."
keywords:
  - "onrr"
  - "reporting"
  - "history"
  - "report"
  - "details"
  - "payer"
  - "code"
  - "lessor"
  - "type"
  - "lease"
  - "well"
  - "number"
  - "agreement"
tags:
  - IS
  - bo:purchaseorder
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_ONRRRPTGHISTORYREPORTDETAILS

**ONRR Reporting History Report Details**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRRPTGHISTORYREPORTDETAILS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ONRRPayerCode` | ✓ | |  | `payor_cd` | `NUMC(5)` | ONRR-2014 - Payor Code |
| `ONRRLessorType` | ✓ | |  | `lessor_cd` | `CHAR(1)` | ONRR-2014 - Lessor Code |
| `ONRRLease` | ✓ | |  | `lease_no` | `CHAR(25)` | ONRR-2014 - Lease Number |
| `APIWellNumber` | ✓ | |  | `api_well_no` | `CHAR(15)` | ONRR-2014 - API Well Number |
| `ONRRAgreement` | ✓ | |  | `agreement_no` | `CHAR(25)` | ONRR-2014 - Agreement Number |
| `ONRRReportedProduct` | ✓ | |  | `product_cd` | `CHAR(2)` | ONRR-2014 - Product Code |
| `ONRRSalesType` | ✓ | |  | `sales_type_cd` | `CHAR(4)` | ONRR-2014 - Sales Type Code |
| `SalesDate` | ✓ | |  | `sale_dt` | `DATS(8)` | Sales Date / Month |
| `ONRRReportedTransType` | ✓ | |  | `transaction_cd` | `CHAR(2)` | ONRR-2014 - Transaction Code |
| `RoyaltyRate` | ✓ | |  | `roy_rate` | `CHAR(10)` | ONRR-2014 - Royalty Rate |
| `ONRRPaymentMethod` | ✓ | |  | `pay_method_cd` | `CHAR(1)` | ONRR-2014 - Payment Method Code |
| `ONRRReportedRefTransType` | ✓ | |  | `ref_trans_cd` | `CHAR(2)` | ONRR-2014 - Reference Transaction Code |
| `ONRRBusinessTransactionType` | ✓ | |  | `line_type` | `CHAR(1)` | ONRR-2014 - Line Type |
| `ProcessRun` |  | |  | `run_id` | `NUMC(10)` | Proc 2.0 - Run ID |
| `PayerAssignedDocument` |  | |  | `pad_no` | `CHAR(8)` | ONRR-2014 - Payor Assigned Document Number |
| `PayerAssignedDocumentItem` |  | |  | `line_no` | `NUMC(6)` | ONRR-2014 - Line Number |
| `ONRRAdjmtReason` |  | |  | `adjustment_cd` | `NUMC(2)` | ONRR-2014 - Adjustment Code |
| `SalesYearMonth` |  | |  | `cast (sales_month as oiu_vdm_fis_period preserving type)` | `ACCP(6)` | Fiscal Period |
| `RoyaltyPaytDistributeeType` |  | |  | `distributee_cd` | `NUMC(3)` | ONRR-2014 - Distributee Code |
| `TribalOrAllotteeLeaseType` |  | |  | `tribal_allottee` | `CHAR(1)` | ONRR-2014 - Tribal / Allottee Indicator |
| `IndianIndexZone` |  | |  | `index_zone` | `CHAR(3)` | ONRR-2014 - Index Zone |
| `RefPayerAssignedDocument` |  | |  | `cast (ref_pad_no as oiu_vdm_ref_payor_assnd_doc_no )` | `CHAR(8)` | ONRR- Ref Payor Assigned Document Number |
| `RefPayerAssignedDocumentItem` |  | |  | `cast (ref_line_no as oiu_vdm_ref_payor_assnd_doc_ln )` | `NUMC(6)` | ONRR-Ref Payor Assigned Document Line Number |
| `VolumeUnit` |  | |  | `cast (vol_uom as /pra/vol_uom )` | `UNIT(3)` | Volume Base Unit of Measure |
| `EnergyUnit` |  | |  | `cast (energy_uom as /pra/energy_uom )` | `UNIT(3)` | Energy Base Unit Of Measure |
| `Currency` |  | |  | `waers` | `CUKY(5)` | Currency Key |
| `CompanyCode` |  | |  | `bukrs` | `CHAR(4)` | Company Code |
| `AgencyReportType` |  | |  | `rpdt_ac_ind` | `CHAR(1)` | Proc 2.0 - Amended/Current Indicator |
| `ONRRLeaseName` |  | |  | `lease_name` | `CHAR(20)` | ONRR-2014 - Lease Name |
| `HeatingValUnit` |  | |  | `cast ( heat_val_uom as /pra/heating_uom)` | `UNIT(3)` | Heating Unit Of Measure |
| `ONRRReportStatus` |  | |  | `status` | `CHAR(1)` | ONRR-2014 - Status |
| `AgencyReportIsManual` |  | |  | `manual_2014_fl` | `CHAR(1)` | ONRR-2014 - Manual 2014 Flag |
| `IsRejectOverridden` |  | |  | `ovr_reject_fl` | `CHAR(1)` | ONRR-2014 - Override Reject Flag |
| `OverrideDocument` |  | |  | `ovr_pad_no` | `CHAR(8)` | ONRR-2014 - Override Payor Assigned Document Number |
| `ONRROverrideAdjmtReason` |  | |  | `ovr_adj_cd` | `NUMC(2)` | ONRR-2014 - Override Adjustment Code |
| `SalesFigureIsToBeRecalculated` |  | |  | `recalculate_fl` | `CHAR(1)` | ONRR-2014:  Recalculate Sales Vol/Val |
| `FutureRptHasRoyaltyDueAdjmt` |  | |  | `ry_due_adj_ps_fl` | `CHAR(1)` | ONRR-2014:  Persist Royalty Due Adjustment |
| `IsManualReversal` |  | |  | `manual_rev_fl` | `CHAR(1)` | ONRR-2014 - Manual Reversal Flag |
| `CreatedByUser` |  | |  | `cast( oiu_cruser as fclm_bam_created_by )` | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  | `cast( oiu_timestamp as oiu_vdm_created_on_ts )` | `DEC(15)` | Created On Timestamp |
| `OriginTransaction` |  | |  | `cast( '/PRA/FP_WORKPLACE' as fqm_origin_trans_id )` | `CHAR(32)` | Source Transaction ID |
| `LeaseSalesVolumeInVolUnit` |  | |  | `sales_vol` | `QUAN(13)` | ONRR-2014 - Sales Volume |
| `LeaseGasEnergyInEnergyUnit` |  | |  | `gas_energy` | `QUAN(13)` | ONRR-2014 - Gas Energy |
| `ReportedSalesValue` |  | |  | `sales_val` | `CURR(13)` | ONRR-2014 - Sales Value |
| `GrossRoyaltyAmount` |  | |  | `roy_prior_allow` | `CURR(13)` | ONRR-2014 - Royalty Value Prior To Allowance |
| `TranspAllwncDeductAmt` |  | |  | `transportation` | `CURR(13)` | ONRR-2014 - Transportation Allowance Deduction |
| `ProcgAllwncDeductAmt` |  | |  | `processing` | `CURR(13)` | ONRR-2014 - Processing Allowance Deduction |
| `NetRoyaltyAmount` |  | |  | `roy_less_allow` | `CURR(13)` | ONRR-2014 - Royalty Value Less Allowance |
| `HeatingValue` |  | |  | `heat_val` | `QUAN(13)` | Heating value |
| `AgencyReportedPrice` |  | |  | `price` | `DEC(9)` | ONRR-2014 - Price |
| `IndianIndexPrice` |  | |  | `index_price` | `DEC(9)` | ONRR-2014 - Index Price |
| `TranspAllwncDeductAdjmtAmt` |  | |  | `trans_deduct_adj` | `CURR(13)` | ONRR-2014 - Transportation Allowance Deduction Adjustment |
| `ProcgAllwncDeductAdjmtAmt` |  | |  | `proc_deduct_adj` | `CURR(13)` | ONRR-2014 - Processing Allowance Deduction Adjustment |
| `RoyaltyDueAdjustmentAmount` |  | |  | `royalty_due_adj` | `CURR(13)` | ONRR-2014 - Royalty Due Adjustment |
| `_ONRRPayerCode` | | ✓ | | | | |
| `_ONRRLessorType` | | ✓ | | | | |
| `_ONRRReportedProduct` | | ✓ | | | | |
| `_ONRRSalesType` | | ✓ | | | | |
| `_ONRRReportedTransType` | | ✓ | | | | |
| `_ONRRPaymentMethod` | | ✓ | | | | |
| `_ONRRReportedRefTransType` | | ✓ | | | | |
| `_ONRRAdjmtReason` | | ✓ | | | | |
| `_RoyaltyPaytDistributeeType` | | ✓ | | | | |
| `_TribalOrAllotteeLeaseType` | | ✓ | | | | |
| `_IndianIndexZone` | | ✓ | | | | |
| `_VolumeUnit` | | ✓ | | | | |
| `_EnergyUnit` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_AgencyReportType` | | ✓ | | | | |
| `_HeatingValUnit` | | ✓ | | | | |
| `_ONRRReportStatus` | | ✓ | | | | |
| `_AgencyReportIsManual` | | ✓ | | | | |
| `_IsRejectOverridden` | | ✓ | | | | |
| `_ONRROverrideAdjmtReason` | | ✓ | | | | |
| `_SalesFigureIsToBeRecalculated` | | ✓ | | | | |
| `_FutureRptHasRoyaltyDueAdjmt` | | ✓ | | | | |
| `_IsManualReversal` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ONRRPayerCode` | `I_ONRRPayerCode` | [0..1] |
| `_ONRRLessorType` | `I_PRAONRRLessorType` | [0..1] |
| `_ONRRReportedProduct` | `I_ONRRRepProd` | [0..1] |
| `_ONRRSalesType` | `I_PRAONRRSalesType` | [0..1] |
| `_ONRRReportedTransType` | `I_ONRRRepTransType` | [0..1] |
| `_ONRRPaymentMethod` | `I_ONRRPayMeth` | [0..1] |
| `_ONRRReportedRefTransType` | `I_ONRRRepTransType` | [0..1] |
| `_ONRRAdjmtReason` | `I_ONRROverAdjmtReason` | [0..1] |
| `_RoyaltyPaytDistributeeType` | `I_RoyaltyPaytDistributeeType` | [0..1] |
| `_TribalOrAllotteeLeaseType` | `I_TribalAllotteeLeaseType` | [0..1] |
| `_IndianIndexZone` | `I_IndianIndexZone` | [0..1] |
| `_VolumeUnit` | `I_UnitOfMeasure` | [0..1] |
| `_EnergyUnit` | `I_UnitOfMeasure` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_AgencyReportType` | `I_AgencyReportType` | [0..1] |
| `_HeatingValUnit` | `I_UnitOfMeasure` | [0..1] |
| `_ONRRReportStatus` | `I_ONRRReportStatus` | [0..1] |
| `_AgencyReportIsManual` | `I_Indicator` | [0..1] |
| `_IsRejectOverridden` | `I_Indicator` | [0..1] |
| `_ONRROverrideAdjmtReason` | `I_ONRROverAdjmtReason` | [0..1] |
| `_SalesFigureIsToBeRecalculated` | `I_Indicator` | [0..1] |
| `_FutureRptHasRoyaltyDueAdjmt` | `I_Indicator` | [0..1] |
| `_IsManualReversal` | `I_Indicator` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRRPTGHISTORYREPORTDETAILS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRRPTGHISTORYREPORTDETAILS')/$value)*

```abap
@EndUserText.label: 'ONRR Reporting History Report Details'
@Analytics.dataCategory: #CUBE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IONRRRHISREPDET'
@AccessControl.authorizationCheck: #CHECK

@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.sapObjectNodeType.name: 'ONRRHistoryReportDetails'

define view I_ONRRRptgHistoryReportDetails
  as select from /pra/fp_rpdt_hst 
  association [0..1] to I_ONRRPayerCode              as _ONRRPayerCode                 on $projection.ONRRPayerCode = _ONRRPayerCode.ONRRPayerCode
  association [0..1] to I_PRAONRRLessorType          as _ONRRLessorType                on $projection.ONRRLessorType = _ONRRLessorType.ONRRLessorType
  association [0..1] to I_ONRRRepProd                as _ONRRReportedProduct           on $projection.ONRRReportedProduct = _ONRRReportedProduct.ONRRReportedProduct
  association [0..1] to I_PRAONRRSalesType           as _ONRRSalesType                 on $projection.ONRRSalesType = _ONRRSalesType.ONRRSalesType
  association [0..1] to I_ONRRRepTransType           as _ONRRReportedTransType         on $projection.ONRRReportedTransType = _ONRRReportedTransType.ONRRReportedTransType
  association [0..1] to I_ONRRPayMeth                as _ONRRPaymentMethod             on $projection.ONRRPaymentMethod = _ONRRPaymentMethod.ONRRPaymentMethod
  association [0..1] to I_ONRRRepTransType           as _ONRRReportedRefTransType      on $projection.ONRRReportedRefTransType = _ONRRReportedRefTransType.ONRRReportedTransType
  association [0..1] to I_ONRROverAdjmtReason        as _ONRRAdjmtReason               on $projection.ONRRAdjmtReason = _ONRRAdjmtReason.ONRROverrideAdjmtReason
  association [0..1] to I_RoyaltyPaytDistributeeType as _RoyaltyPaytDistributeeType    on $projection.RoyaltyPaytDistributeeType = _RoyaltyPaytDistributeeType.RoyaltyPaytDistributeeType
  association [0..1] to I_TribalAllotteeLeaseType    as _TribalOrAllotteeLeaseType     on $projection.TribalOrAllotteeLeaseType = _TribalOrAllotteeLeaseType.TribalOrAllotteeLeaseType
  association [0..1] to I_IndianIndexZone            as _IndianIndexZone               on $projection.IndianIndexZone = _IndianIndexZone.IndianIndexZone
  association [0..1] to I_UnitOfMeasure              as _VolumeUnit                    on $projection.VolumeUnit = _VolumeUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure              as _EnergyUnit                    on $projection.EnergyUnit = _EnergyUnit.UnitOfMeasure
  association [0..1] to I_Currency                   as _Currency                      on $projection.Currency = _Currency.Currency
  association [0..1] to I_CompanyCode                as _CompanyCode                   on $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_AgencyReportType           as _AgencyReportType              on $projection.AgencyReportType = _AgencyReportType.AgencyReportType
  association [0..1] to I_UnitOfMeasure              as _HeatingValUnit                on $projection.HeatingValUnit = _HeatingValUnit.UnitOfMeasure
  association [0..1] to I_ONRRReportStatus           as _ONRRReportStatus              on $projection.ONRRReportStatus = _ONRRReportStatus.ONRRReportStatus
  association [0..1] to I_Indicator                  as _AgencyReportIsManual          on $projection.AgencyReportIsManual = _AgencyReportIsManual.IndicatorValue
  association [0..1] to I_Indicator                  as _IsRejectOverridden            on $projection.IsRejectOverridden = _IsRejectOverridden.IndicatorValue
  association [0..1] to I_ONRROverAdjmtReason        as _ONRROverrideAdjmtReason       on $projection.ONRROverrideAdjmtReason = _ONRROverrideAdjmtReason.ONRROverrideAdjmtReason
  association [0..1] to I_Indicator                  as _SalesFigureIsToBeRecalculated on $projection.SalesFigureIsToBeRecalculated = _SalesFigureIsToBeRecalculated.IndicatorValue
  association [0..1] to I_Indicator                  as _FutureRptHasRoyaltyDueAdjmt   on $projection.FutureRptHasRoyaltyDueAdjmt = _FutureRptHasRoyaltyDueAdjmt.IndicatorValue
  association [0..1] to I_Indicator                  as _IsManualReversal              on $projection.IsManualReversal = _IsManualReversal.IndicatorValue
{
      @ObjectModel.foreignKey.association: '_ONRRPayerCode'
  key payor_cd                                                                                                                                as ONRRPayerCode,
      @ObjectModel.foreignKey.association: '_ONRRLessorType'
  key lessor_cd                                                                                                                               as ONRRLessorType,
  key lease_no                                                                                                                                as ONRRLease,
  key api_well_no                                                                                                                             as APIWellNumber,
  key agreement_no                                                                                                                            as ONRRAgreement,
      @ObjectModel.foreignKey.association: '_ONRRReportedProduct'
  key product_cd                                                                                                                              as ONRRReportedProduct,
      @ObjectModel.foreignKey.association: '_ONRRSalesType'
  key sales_type_cd                                                                                                                           as ONRRSalesType,
  key sale_dt                                                                                                                                 as SalesDate,
      @ObjectModel.foreignKey.association: '_ONRRReportedTransType'
  key transaction_cd                                                                                                                          as ONRRReportedTransType,
  key roy_rate                                                                                                                                as RoyaltyRate,
      @ObjectModel.foreignKey.association: '_ONRRPaymentMethod'
  key pay_method_cd                                                                                                                           as ONRRPaymentMethod,
      @ObjectModel.foreignKey.association: '_ONRRReportedRefTransType'
  key ref_trans_cd                                                                                                                            as ONRRReportedRefTransType,
      //@ObjectModel.foreignKey.association: '_ONRRBusinessTransactionType'
  key line_type                                                                                                                               as ONRRBusinessTransactionType, //Domain View to be created, doubt on naming of the view and the field name as we already have exact same name with different data type
      run_id                                                                                                                                  as ProcessRun,
      pad_no                                                                                                                                  as PayerAssignedDocument,
      line_no                                                                                                                                 as PayerAssignedDocumentItem,
      @ObjectModel.foreignKey.association: '_ONRRAdjmtReason'
      adjustment_cd                                                                                                                           as ONRRAdjmtReason,
      //Data type 'ACCP'
      cast (sales_month as oiu_vdm_fis_period preserving type)                                                                                                as SalesYearMonth,
      @ObjectModel.foreignKey.association: '_RoyaltyPaytDistributeeType'
      distributee_cd                                                                                                                          as RoyaltyPaytDistributeeType,
      @ObjectModel.foreignKey.association: '_TribalOrAllotteeLeaseType'
      tribal_allottee                                                                                                                         as TribalOrAllotteeLeaseType,
      @ObjectModel.foreignKey.association: '_IndianIndexZone'
      index_zone                                                                                                                              as IndianIndexZone,
      cast (ref_pad_no as oiu_vdm_ref_payor_assnd_doc_no )                                                                                                                            as RefPayerAssignedDocument,
      cast (ref_line_no   as oiu_vdm_ref_payor_assnd_doc_ln   )                                                                                                                       as RefPayerAssignedDocumentItem,
      //@ObjectModel.foreignKey.association: '_VolumeUnit'
      @Semantics.unitOfMeasure: true
      cast (vol_uom as /pra/vol_uom  )                                                                                                        as VolumeUnit,
      //@ObjectModel.foreignKey.association: '_EnergyUnit'
      @Semantics.unitOfMeasure: true
      cast (energy_uom as /pra/energy_uom )                                                                                                   as EnergyUnit,
      //@ObjectModel.foreignKey.association: '_Currency'
      @Semantics.currencyCode: true
      waers                                                                                                                                   as Currency,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      bukrs                                                                                                                                   as CompanyCode,
      @ObjectModel.foreignKey.association: '_AgencyReportType'
      rpdt_ac_ind                                                                                                                             as AgencyReportType,
      lease_name                                                                                                                              as ONRRLeaseName,
      //@ObjectModel.foreignKey.association: '_HeatingValUnit'
      @Semantics.unitOfMeasure: true
      cast ( heat_val_uom as /pra/heating_uom)                                                                                                as HeatingValUnit,
      @ObjectModel.foreignKey.association: '_ONRRReportStatus'
      status                                                                                                                                  as ONRRReportStatus,
      @ObjectModel.foreignKey.association: '_AgencyReportIsManual'
      manual_2014_fl                                                                                                                          as AgencyReportIsManual,
      @ObjectModel.foreignKey.association: '_IsRejectOverridden'
      ovr_reject_fl                                                                                                                           as IsRejectOverridden,
      ovr_pad_no                                                                                                                              as OverrideDocument,
      @ObjectModel.foreignKey.association: '_ONRROverrideAdjmtReason'
      ovr_adj_cd                                                                                                                              as ONRROverrideAdjmtReason,
      @ObjectModel.foreignKey.association: '_SalesFigureIsToBeRecalculated'
      recalculate_fl                                                                                                                          as SalesFigureIsToBeRecalculated,
      @ObjectModel.foreignKey.association: '_FutureRptHasRoyaltyDueAdjmt'
      ry_due_adj_ps_fl                                                                                                                        as FutureRptHasRoyaltyDueAdjmt,
      @ObjectModel.foreignKey.association: '_IsManualReversal'
      manual_rev_fl                                                                                                                           as IsManualReversal,
      //adminstrative
      @Semantics.user.createdBy: true
      cast( oiu_cruser as fclm_bam_created_by )                                                                                               as CreatedByUser,
      cast( oiu_timestamp as oiu_vdm_created_on_ts )                                                                                          as CreationDateTime,
      cast( '/PRA/FP_WORKPLACE' as fqm_origin_trans_id )                                                                                      as OriginTransaction,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'VolumeUnit'
      sales_vol                                                                                                                               as LeaseSalesVolumeInVolUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'EnergyUnit'
      gas_energy                                                                                                                              as LeaseGasEnergyInEnergyUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'Currency'
      sales_val                                                                                                                               as ReportedSalesValue,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'Currency'
      roy_prior_allow                                                                                                                         as GrossRoyaltyAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'Currency'
      transportation                                                                                                                          as TranspAllwncDeductAmt,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'Currency'
      processing                                                                                                                              as ProcgAllwncDeductAmt,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'Currency'
      roy_less_allow                                                                                                                          as NetRoyaltyAmount,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'HeatingValUnit'
      heat_val                                                                                                                                as HeatingValue,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'Currency'
      @OData.v2.amount.noDecimalShift:true
      price                                                                                                                                   as AgencyReportedPrice,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'Currency'
      @OData.v2.amount.noDecimalShift:true
      index_price                                                                                                                             as IndianIndexPrice,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'Currency'
      trans_deduct_adj                                                                                                                        as TranspAllwncDeductAdjmtAmt,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'Currency'
      proc_deduct_adj                                                                                                                         as ProcgAllwncDeductAdjmtAmt,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'Currency'
      royalty_due_adj                                                                                                                         as RoyaltyDueAdjustmentAmount,
      _ONRRPayerCode,
      _ONRRLessorType,
      _ONRRReportedProduct,
      _ONRRSalesType,
      _ONRRReportedTransType,
      _ONRRPaymentMethod,
      _ONRRReportedRefTransType,
      _ONRRAdjmtReason,
      _RoyaltyPaytDistributeeType,
      _TribalOrAllotteeLeaseType,
      _IndianIndexZone,
      _VolumeUnit,
      _EnergyUnit,
      _Currency,
      _CompanyCode,
      _AgencyReportType,
      _HeatingValUnit,
      _ONRRReportStatus,
      _AgencyReportIsManual,
      _IsRejectOverridden,
      _ONRROverrideAdjmtReason,
      _SalesFigureIsToBeRecalculated,
      _FutureRptHasRoyaltyDueAdjmt,
      _IsManualReversal
};
```
