---
name: I_ONRRRPTGHISTORYPRADETAILS
description: "ONRR Reporting History PRA Details"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRRPTGHISTORYPRADETAILS')/$value
semantic_en: "ONRR Reporting History PRA Details"
semantic_vi: "ONRR Reporting History PRA Details — CDS view giao diện dựa trên ONRR Reporting History PRA Details."
keywords:
  - "onrr"
  - "reporting"
  - "history"
  - "pra"
  - "details"
  - "sales"
  - "date"
  - "company"
  - "code"
  - "joint"
  - "venture"
  - "division"
  - "interest"
  - "well"
tags:
  - IS
  - bo:purchaseorder
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_ONRRRPTGHISTORYPRADETAILS

**ONRR Reporting History PRA Details**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRRPTGHISTORYPRADETAILS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDate` | ✓ | |  | `sale_dt` | `DATS(8)` | Sales Date / Month |
| `CompanyCode` | ✓ | |  | `cast ( bukrs as fis_bukrs )` | `CHAR(4)` | Company Code |
| `JointVenture` | ✓ | |  | `vname` | `CHAR(6)` | Joint Venture |
| `DivisionOfInterest` | ✓ | |  | `doi_no` | `CHAR(5)` | Division of Interest (DOI) |
| `Well` | ✓ | |  | `wl_no` | `CHAR(15)` | Well ID number |
| `WellCompletion` | ✓ | |  | `wc_no` | `CHAR(5)` | Well Completion Number |
| `PRAContract` | ✓ | |  | `vbeln` | `CHAR(10)` | Contract Number |
| `VolumeType` | ✓ | |  | `vl_type_cd` | `CHAR(2)` | Volume Type Code |
| `Product` | ✓ | |  | `pd_cd` | `CHAR(3)` | Full three char. product code (Major and Detail Products) |
| `PRAOwner` | ✓ | |  | `own_no` | `CHAR(10)` | PRA owner |
| `GLAccount` | ✓ | |  | `saknr` | `CHAR(10)` | G/L Account Number |
| `CostCenter` | ✓ | |  | `kostl` | `CHAR(10)` | Cost Center |
| `ONRRBusinessTransactionType` | ✓ | |  | `prdt_line_type` | `CHAR(1)` | ONRR-2014 - PRA Detail Line Type |
| `ProcessRun` |  | |  | `run_id` | `NUMC(10)` | Proc 2.0 - Run ID |
| `AgencyReportType` |  | |  | `ac_ind` | `CHAR(1)` | Proc 2.0 - Amended/Current Indicator |
| `PriorPeriodAdjustmentReason` |  | |  | `ppa_rsn_cd` | `CHAR(2)` | Prior Period Adjustment Reason Code |
| `VolumeUnit` |  | |  | `cast ( vol_uom as /pra/vol_uom )` | `UNIT(3)` | Volume Base Unit of Measure |
| `EnergyUnit` |  | |  | `cast (energy_uom as /pra/energy_uom )` | `UNIT(3)` | Energy Base Unit Of Measure |
| `Currency` |  | |  | `waers` | `CUKY(5)` | Currency Key |
| `DeliveryNetwork` |  | |  | `dn_no` | `CHAR(20)` | Delivery network number |
| `MasterDataRecordingLvl` |  | |  | `master_level` | `CHAR(1)` | ONRR-2014 - Master Level |
| `ONRRLease` |  | |  | `lease_no` | `CHAR(25)` | ONRR-2014 - Lease Number |
| `ONRRAgreement` |  | |  | `agreement_no` | `CHAR(25)` | ONRR-2014 - Agreement Number |
| `ONRRPayerCode` |  | |  | `payor_cd` | `NUMC(5)` | ONRR-2014 - Payor Code |
| `IsCompensatoryRoyalty` |  | |  | `comp_royalty_fl` | `CHAR(1)` | ONRR-2014 - Compensatory Royalty Flag |
| `IsSection6LeaseOverride` |  | |  | `section_6_lse_fl` | `CHAR(1)` | ONRR-2014 - Section 6 Lease Flag |
| `IsShallowWaterRoyaltyRelieved` |  | |  | `roy_relief_sh_fl` | `CHAR(1)` | ONRR-2014 - Royalty Relief - Shallow Flag |
| `IsDeepWaterRoyaltyRelieved` |  | |  | `roy_relief_dp_fl` | `CHAR(1)` | ONRR-2014 - Royalty Relief - Deep Flag |
| `IsRptgAtAPIWellLvl` |  | |  | `report_api_wl_fl` | `CHAR(1)` | ONRR-2014 - Report API Well Flag |
| `AllocationPercent` |  | |  | `alloc_percent` | `DEC(9)` | ONRR-2014 - Allocation Percent |
| `OverrideRoyaltyRate` |  | |  | `ovr_royalty_rate` | `DEC(9)` | ONRR-2014 - Override Royalty Rate |
| `ONRRLessorType` |  | |  | `lessor_cd` | `CHAR(1)` | ONRR-2014 - Lessor Code |
| `TribalOrAllotteeLeaseType` |  | |  | `tribal_allottee` | `CHAR(1)` | ONRR-2014 - Tribal / Allottee Indicator |
| `RoyaltyPaytDistributeeType` |  | |  | `distributee_cd` | `NUMC(3)` | ONRR-2014 - Distributee Code |
| `OnOrOffShoreLeaseSale` |  | |  | `on_off_shore_ind` | `CHAR(1)` | ONRR-2014 - On-Shore/Off-Shore Indicator |
| `IndianIndexZone` |  | |  | `index_zone` | `CHAR(3)` | ONRR-2014 - Index Zone |
| `ONRRLeaseName` |  | |  | `lease_name` | `CHAR(20)` | ONRR-2014 - Lease Name |
| `IsSection6Lease` |  | |  | `sect6_fl` | `CHAR(1)` | Section 6 |
| `HasTransactionCode37` |  | |  | `trans37_fl` | `CHAR(1)` | Transaction 37 |
| `HasTransactionCode38` |  | |  | `trans38_fl` | `CHAR(1)` | Transaction 38 |
| `ONRRSalesType` |  | |  | `sales_type_cd` | `CHAR(4)` | ONRR-2014 - Sales Type Code |
| `APIWellNumber` |  | |  | `api_well_no` | `CHAR(15)` | ONRR-2014 - API Well Number |
| `ONRRReportedProduct` |  | |  | `product_cd` | `CHAR(2)` | ONRR-2014 - Product Code |
| `ONRRReportedTransType` |  | |  | `transaction_cd` | `CHAR(2)` | ONRR-2014 - Transaction Code |
| `RoyaltyRate` |  | |  | `roy_rate` | `CHAR(10)` | ONRR-2014 - Royalty Rate |
| `ONRRPaymentMethod` |  | |  | `pay_method_cd` | `CHAR(1)` | ONRR-2014 - Payment Method Code |
| `ONRRReportStatus` |  | |  | `status` | `CHAR(1)` | ONRR-2014 - Status |
| `ONRROverrideAdjmtReason` |  | |  | `ovr_adj_cd` | `NUMC(2)` | ONRR-2014 - Override Adjustment Code |
| `IsRejectOverridden` |  | |  | `ovr_reject_fl` | `CHAR(1)` | ONRR-2014 - Override Reject Flag |
| `OverrideDocument` |  | |  | `ovr_pad_no` | `CHAR(8)` | ONRR-2014 - Override Payor Assigned Document Number |
| `FutureRptHasRoyaltyDueAdjmt` |  | |  | `ry_due_adj_ps_fl` | `CHAR(1)` | ONRR-2014:  Persist Royalty Due Adjustment |
| `SalesFigureIsToBeRecalculated` |  | |  | `recalculate_fl` | `CHAR(1)` | ONRR-2014:  Recalculate Sales Vol/Val |
| `CreatedByUser` |  | |  | `cast( oiu_cruser as fclm_bam_created_by )` | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  | `cast( oiu_timestamp as oiu_vdm_created_on_ts )` | `DEC(15)` | Created On Timestamp |
| `OriginTransaction` |  | |  | `cast( '/PRA/FP_WORKPLACE' as fqm_origin_trans_id )` | `CHAR(32)` | Source Transaction ID |
| `OwnerNetAmount` |  | |  | `net_val` | `CURR(13)` | Owner Net Value |
| `OwnerNetVolInVolUnit` |  | |  | `net_vol` | `QUAN(13)` | Owner Net Volume |
| `OwnerGrossAmount` |  | |  | `owner_gross_val` | `CURR(13)` | Owner Gross Value |
| `OwnerEnergyInEnergyUnit` |  | |  | `owner_energy` | `QUAN(13)` | Owner Energy |
| `GrossAmount` |  | |  | `gross_val` | `CURR(13)` | Gross value |
| `GrossVolInVolUnit` |  | |  | `gross_vol` | `QUAN(13)` | Total Gross Volume |
| `GrossEnergyInEnergyUnit` |  | |  | `gross_energy` | `QUAN(13)` | Gross Energy |
| `TranspAllwncDeductAdjmtAmt` |  | |  | `trans_deduct_adj` | `CURR(13)` | ONRR-2014 - Transportation Allowance Deduction Adjustment |
| `ProcgAllwncDeductAdjmtAmt` |  | |  | `proc_deduct_adj` | `CURR(13)` | ONRR-2014 - Processing Allowance Deduction Adjustment |
| `RoyaltyDueAdjustmentAmount` |  | |  | `royalty_due_adj` | `CURR(13)` | ONRR-2014 - Royalty Due Adjustment |
| `TranspAllwncDeductAmt` |  | |  | `transportation` | `CURR(13)` | ONRR-2014 - Transportation Allowance Deduction |
| `ProcgAllwncDeductAmt` |  | |  | `processing` | `CURR(13)` | ONRR-2014 - Processing Allowance Deduction |
| `TaxAmount` |  | |  | `tax` | `CURR(13)` | ONRR-2014 - Tax |
| `TaxReimbursementAmount` |  | |  | `tax_reimburse` | `CURR(13)` | ONRR-2014 - Tax Reimbursement |
| `MarketingReimbursementAmount` |  | |  | `mkt_reimburse` | `CURR(13)` | ONRR-2014 - Marketing Reimbursement |
| `_CompanyCode` | | ✓ | | | | |
| `_PRAJointVenture` | | ✓ | | | | |
| `_DivisionOfInterest` | | ✓ | | | | |
| `_Well` | | ✓ | | | | |
| `_WellCompletion` | | ✓ | | | | |
| `_PRAContract` | | ✓ | | | | |
| `_VolumeType` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_PRAOwner` | | ✓ | | | | |
| `_GLAccount` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_PriorPeriodAdjustmentReason` | | ✓ | | | | |
| `_ONRRBusinessTransactionType` | | ✓ | | | | |
| `_ProcessRun` | | ✓ | | | | |
| `_AgencyReportType` | | ✓ | | | | |
| `_VolumeUnit` | | ✓ | | | | |
| `_EnergyUnit` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_DeliveryNetwork` | | ✓ | | | | |
| `_MasterDataRecordingLvl` | | ✓ | | | | |
| `_ONRRPayerCode` | | ✓ | | | | |
| `_IsCompensatoryRoyalty` | | ✓ | | | | |
| `_IsSection6LeaseOverride` | | ✓ | | | | |
| `_IsShallowWaterRoyaltyRelieved` | | ✓ | | | | |
| `_IsDeepWaterRoyaltyRelieved` | | ✓ | | | | |
| `_IsRptgAtAPIWellLvl` | | ✓ | | | | |
| `_ONRRLessorType` | | ✓ | | | | |
| `_TribalOrAllotteeLeaseType` | | ✓ | | | | |
| `_RoyaltyPaytDistributeeType` | | ✓ | | | | |
| `_OnOrOffShoreLeaseSale` | | ✓ | | | | |
| `_IndianIndexZone` | | ✓ | | | | |
| `_IsSection6Lease` | | ✓ | | | | |
| `_HasTransactionCode37` | | ✓ | | | | |
| `_HasTransactionCode38` | | ✓ | | | | |
| `_ONRRSalesType` | | ✓ | | | | |
| `_ONRRReportedProduct` | | ✓ | | | | |
| `_ONRRReportedTransType` | | ✓ | | | | |
| `_ONRRPaymentMethod` | | ✓ | | | | |
| `_ONRRReportStatus` | | ✓ | | | | |
| `_ONRROverrideAdjmtReason` | | ✓ | | | | |
| `_IsRejectOverridden` | | ✓ | | | | |
| `_FutureRptHasRoyaltyDueAdjmt` | | ✓ | | | | |
| `_SalesFigureIsToBeRecalculated` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_PRAJointVenture` | `I_PRAJointVenture` | [0..1] |
| `_DivisionOfInterest` | `I_DivisionOfInterest` | [0..1] |
| `_Well` | `I_Well` | [0..1] |
| `_WellCompletion` | `I_WellCompletion` | [0..1] |
| `_PRAContract` | `I_PRAContract` | [0..1] |
| `_VolumeType` | `I_VolumeType` | [0..1] |
| `_Product` | `I_PRAProduct` | [0..1] |
| `_PRAOwner` | `I_PRAOwner` | [0..1] |
| `_GLAccount` | `I_PRAGLAccount` | [0..1] |
| `_CostCenter` | `I_PRACostCenter` | [0..*] |
| `_PriorPeriodAdjustmentReason` | `I_PriorPeriodAdjustmentReason` | [0..1] |
| `_ONRRBusinessTransactionType` | `I_ONRRBusinessTransType` | [0..1] |
| `_ProcessRun` | `I_PRAONRRProcessRun` | [0..1] |
| `_AgencyReportType` | `I_AgencyReportType` | [0..1] |
| `_VolumeUnit` | `I_UnitOfMeasure` | [0..1] |
| `_EnergyUnit` | `I_UnitOfMeasure` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_DeliveryNetwork` | `I_DeliveryNetwork` | [0..1] |
| `_MasterDataRecordingLvl` | `I_PRAMasterDataRecordingLevel` | [0..1] |
| `_ONRRPayerCode` | `I_ONRRPayerCode` | [0..1] |
| `_IsCompensatoryRoyalty` | `I_Indicator` | [0..1] |
| `_IsSection6LeaseOverride` | `I_Indicator` | [0..1] |
| `_IsShallowWaterRoyaltyRelieved` | `I_Indicator` | [0..1] |
| `_IsDeepWaterRoyaltyRelieved` | `I_Indicator` | [0..1] |
| `_IsRptgAtAPIWellLvl` | `I_Indicator` | [0..1] |
| `_ONRRLessorType` | `I_PRAONRRLessorType` | [0..1] |
| `_TribalOrAllotteeLeaseType` | `I_TribalAllotteeLeaseType` | [0..1] |
| `_RoyaltyPaytDistributeeType` | `I_RoyaltyPaytDistributeeType` | [0..1] |
| `_OnOrOffShoreLeaseSale` | `I_OnOffShoreLeaseSale` | [0..1] |
| `_IndianIndexZone` | `I_IndianIndexZone` | [0..1] |
| `_IsSection6Lease` | `I_Indicator` | [0..1] |
| `_HasTransactionCode37` | `I_Indicator` | [0..1] |
| `_HasTransactionCode38` | `I_Indicator` | [0..1] |
| `_ONRRSalesType` | `I_PRAONRRSalesType` | [0..1] |
| `_ONRRReportedProduct` | `I_ONRRRepProd` | [0..1] |
| `_ONRRReportedTransType` | `I_ONRRRepTransType` | [0..1] |
| `_ONRRPaymentMethod` | `I_ONRRPayMeth` | [0..1] |
| `_ONRRReportStatus` | `I_ONRRReportStatus` | [0..1] |
| `_ONRROverrideAdjmtReason` | `I_ONRROverAdjmtReason` | [0..1] |
| `_IsRejectOverridden` | `I_Indicator` | [0..1] |
| `_FutureRptHasRoyaltyDueAdjmt` | `I_Indicator` | [0..1] |
| `_SalesFigureIsToBeRecalculated` | `I_Indicator` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRRPTGHISTORYPRADETAILS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRRPTGHISTORYPRADETAILS')/$value)*

```abap
@EndUserText.label: 'ONRR Reporting History PRA Details'
@Analytics.dataCategory: #CUBE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVONRRRRHPRA'
@AccessControl.authorizationCheck: #CHECK

@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.sapObjectNodeType.name: 'ONRRHistoryPRADetails'

define view I_ONRRRptgHistoryPRADetails

  as select from /pra/fp_prdt_hst
  association [0..1] to I_CompanyCode                 as _CompanyCode                   on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_PRAJointVenture             as _PRAJointVenture               on  $projection.CompanyCode  = _PRAJointVenture.CompanyCode
                                                                                        and $projection.JointVenture = _PRAJointVenture.PRAJointVenture
  association [0..1] to I_DivisionOfInterest          as _DivisionOfInterest            on  $projection.CompanyCode        = _DivisionOfInterest.CompanyCode
                                                                                        and $projection.JointVenture       = _DivisionOfInterest.JointVenture
                                                                                        and $projection.DivisionOfInterest = _DivisionOfInterest.DivisionOfInterest
  association [0..1] to I_Well                        as _Well                          on  $projection.Well = _Well.Well
  association [0..1] to I_WellCompletion              as _WellCompletion                on  $projection.Well           = _WellCompletion.Well
                                                                                        and $projection.WellCompletion = _WellCompletion.WellCompletion
  association [0..1] to I_PRAContract                 as _PRAContract                   on  $projection.PRAContract = _PRAContract.PRAContract
  association [0..1] to I_VolumeType                  as _VolumeType                    on  $projection.VolumeType = _VolumeType.VolumeType
  association [0..1] to I_PRAProduct                  as _Product                       on  $projection.Product = _Product.Product
  association [0..1] to I_PRAOwner                    as _PRAOwner                      on  $projection.PRAOwner = _PRAOwner.PRAOwner
  association [0..1] to I_PRAGLAccount                as _GLAccount                     on  $projection.CompanyCode = _GLAccount.CompanyCode
                                                                                        and $projection.GLAccount   = _GLAccount.GLAccount
  association [0..*] to I_PRACostCenter               as _CostCenter                    on  $projection.CompanyCode = _CostCenter.CompanyCode
                                                                                        and $projection.CostCenter  = _CostCenter.CostCenter
  association [0..1] to I_PriorPeriodAdjustmentReason as _PriorPeriodAdjustmentReason   on  $projection.PriorPeriodAdjustmentReason = _PriorPeriodAdjustmentReason.PriorPeriodAdjustmentReason
  association [0..1] to I_ONRRBusinessTransType       as _ONRRBusinessTransactionType   on  $projection.ONRRBusinessTransactionType = _ONRRBusinessTransactionType.ONRRBusinessTransactionType
  association [0..1] to I_PRAONRRProcessRun           as _ProcessRun                    on  $projection.ProcessRun = _ProcessRun.ProcessRun
  association [0..1] to I_AgencyReportType            as _AgencyReportType              on  $projection.AgencyReportType = _AgencyReportType.AgencyReportType
  association [0..1] to I_UnitOfMeasure               as _VolumeUnit                    on  $projection.VolumeUnit = _VolumeUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _EnergyUnit                    on  $projection.EnergyUnit = _EnergyUnit.UnitOfMeasure
  association [0..1] to I_Currency                    as _Currency                      on  $projection.Currency = _Currency.Currency
  association [0..1] to I_DeliveryNetwork             as _DeliveryNetwork               on  $projection.DeliveryNetwork = _DeliveryNetwork.DeliveryNetwork
  association [0..1] to I_PRAMasterDataRecordingLevel as _MasterDataRecordingLvl        on  $projection.MasterDataRecordingLvl = _MasterDataRecordingLvl.MasterDataRecordingLvl
  association [0..1] to I_ONRRPayerCode               as _ONRRPayerCode                 on  $projection.ONRRPayerCode = _ONRRPayerCode.ONRRPayerCode
  association [0..1] to I_Indicator                   as _IsCompensatoryRoyalty         on  $projection.IsCompensatoryRoyalty = _IsCompensatoryRoyalty.IndicatorValue
  association [0..1] to I_Indicator                   as _IsSection6LeaseOverride       on  $projection.IsSection6LeaseOverride = _IsSection6LeaseOverride.IndicatorValue
  association [0..1] to I_Indicator                   as _IsShallowWaterRoyaltyRelieved on  $projection.IsShallowWaterRoyaltyRelieved = _IsShallowWaterRoyaltyRelieved.IndicatorValue
  association [0..1] to I_Indicator                   as _IsDeepWaterRoyaltyRelieved    on  $projection.IsDeepWaterRoyaltyRelieved = _IsDeepWaterRoyaltyRelieved.IndicatorValue
  association [0..1] to I_Indicator                   as _IsRptgAtAPIWellLvl            on  $projection.IsRptgAtAPIWellLvl = _IsRptgAtAPIWellLvl.IndicatorValue
  association [0..1] to I_PRAONRRLessorType           as _ONRRLessorType                on  $projection.ONRRLessorType = _ONRRLessorType.ONRRLessorType
  association [0..1] to I_TribalAllotteeLeaseType     as _TribalOrAllotteeLeaseType     on  $projection.TribalOrAllotteeLeaseType = _TribalOrAllotteeLeaseType.TribalOrAllotteeLeaseType
  association [0..1] to I_RoyaltyPaytDistributeeType  as _RoyaltyPaytDistributeeType    on  $projection.RoyaltyPaytDistributeeType = _RoyaltyPaytDistributeeType.RoyaltyPaytDistributeeType
  association [0..1] to I_OnOffShoreLeaseSale         as _OnOrOffShoreLeaseSale         on  $projection.OnOrOffShoreLeaseSale = _OnOrOffShoreLeaseSale.OnOrOffShoreLeaseSale
  association [0..1] to I_IndianIndexZone             as _IndianIndexZone               on  $projection.IndianIndexZone = _IndianIndexZone.IndianIndexZone
  association [0..1] to I_Indicator                   as _IsSection6Lease               on  $projection.IsSection6Lease = _IsSection6Lease.IndicatorValue
  association [0..1] to I_Indicator                   as _HasTransactionCode37          on  $projection.HasTransactionCode37 = _HasTransactionCode37.IndicatorValue
  association [0..1] to I_Indicator                   as _HasTransactionCode38          on  $projection.HasTransactionCode38 = _HasTransactionCode38.IndicatorValue
  association [0..1] to I_PRAONRRSalesType            as _ONRRSalesType                 on  $projection.ONRRSalesType = _ONRRSalesType.ONRRSalesType
  association [0..1] to I_ONRRRepProd                 as _ONRRReportedProduct           on  $projection.ONRRReportedProduct = _ONRRReportedProduct.ONRRReportedProduct
  association [0..1] to I_ONRRRepTransType            as _ONRRReportedTransType         on  $projection.ONRRReportedTransType = _ONRRReportedTransType.ONRRReportedTransType
  association [0..1] to I_ONRRPayMeth                 as _ONRRPaymentMethod             on  $projection.ONRRPaymentMethod = _ONRRPaymentMethod.ONRRPaymentMethod
  association [0..1] to I_ONRRReportStatus            as _ONRRReportStatus              on  $projection.ONRRReportStatus = _ONRRReportStatus.ONRRReportStatus
  association [0..1] to I_ONRROverAdjmtReason         as _ONRROverrideAdjmtReason       on  $projection.ONRROverrideAdjmtReason = _ONRROverrideAdjmtReason.ONRROverrideAdjmtReason
  association [0..1] to I_Indicator                   as _IsRejectOverridden            on  $projection.IsRejectOverridden = _IsRejectOverridden.IndicatorValue
  association [0..1] to I_Indicator                   as _FutureRptHasRoyaltyDueAdjmt   on  $projection.FutureRptHasRoyaltyDueAdjmt = _FutureRptHasRoyaltyDueAdjmt.IndicatorValue
  association [0..1] to I_Indicator                   as _SalesFigureIsToBeRecalculated on  $projection.SalesFigureIsToBeRecalculated = _SalesFigureIsToBeRecalculated.IndicatorValue
{
  key sale_dt                                                                                                            as SalesDate,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key cast ( bukrs as fis_bukrs )                                                                                        as CompanyCode,
      @ObjectModel.foreignKey.association: '_PRAJointVenture'
  key vname                                                                                                              as JointVenture,
      @ObjectModel.foreignKey.association: '_DivisionOfInterest'
  key doi_no                                                                                                             as DivisionOfInterest,
      @ObjectModel.foreignKey.association: '_Well'
  key wl_no                                                                                                              as Well,
      @ObjectModel.foreignKey.association: '_WellCompletion'
  key wc_no                                                                                                              as WellCompletion,
      @ObjectModel.foreignKey.association: '_PRAContract'
  key vbeln                                                                                                              as PRAContract,
      @ObjectModel.foreignKey.association: '_VolumeType'
  key vl_type_cd                                                                                                         as VolumeType,
      @ObjectModel.foreignKey.association: '_Product'
  key pd_cd                                                                                                              as Product,
      @ObjectModel.foreignKey.association: '_PRAOwner'
  key own_no                                                                                                             as PRAOwner,
      @ObjectModel.foreignKey.association: '_GLAccount'
  key saknr                                                                                                              as GLAccount,
      @ObjectModel.foreignKey.association: '_CostCenter'
  key kostl                                                                                                              as CostCenter,
      @ObjectModel.foreignKey.association: '_ONRRBusinessTransactionType'
  key prdt_line_type                                                                                                     as ONRRBusinessTransactionType,
      run_id                                                                                                             as ProcessRun, // in the table we have a foreign key association with header table OIUE2_RUN_HDR
      @ObjectModel.foreignKey.association: '_AgencyReportType'
      ac_ind                                                                                                             as AgencyReportType,
      @ObjectModel.foreignKey.association: '_PriorPeriodAdjustmentReason'
      ppa_rsn_cd                                                                                                         as PriorPeriodAdjustmentReason,
      @Semantics.unitOfMeasure: true
      cast ( vol_uom as /pra/vol_uom )                                                                                   as VolumeUnit,
      @Semantics.unitOfMeasure: true
      cast (energy_uom as /pra/energy_uom )                                                                              as EnergyUnit,
      @Semantics.currencyCode: true
      waers                                                                                                              as Currency,
      @ObjectModel.foreignKey.association: '_DeliveryNetwork'
      dn_no                                                                                                              as DeliveryNetwork,
      @ObjectModel.foreignKey.association: '_MasterDataRecordingLvl'
      master_level                                                                                                       as MasterDataRecordingLvl,
      lease_no                                                                                                           as ONRRLease, // Check table at /PRA/FP_LEASE
      agreement_no                                                                                                       as ONRRAgreement, // Check Table at /PRA/FP_AGREE
      @ObjectModel.foreignKey.association: '_ONRRPayerCode'
      payor_cd                                                                                                           as ONRRPayerCode,
      @ObjectModel.foreignKey.association: '_IsCompensatoryRoyalty'
      comp_royalty_fl                                                                                                    as IsCompensatoryRoyalty,
      @ObjectModel.foreignKey.association: '_IsSection6LeaseOverride'
      section_6_lse_fl                                                                                                   as IsSection6LeaseOverride,
      @ObjectModel.foreignKey.association: '_IsShallowWaterRoyaltyRelieved'
      roy_relief_sh_fl                                                                                                   as IsShallowWaterRoyaltyRelieved,
      @ObjectModel.foreignKey.association: '_IsDeepWaterRoyaltyRelieved'
      roy_relief_dp_fl                                                                                                   as IsDeepWaterRoyaltyRelieved,
      @ObjectModel.foreignKey.association: '_IsRptgAtAPIWellLvl'
      report_api_wl_fl                                                                                                   as IsRptgAtAPIWellLvl,
      @DefaultAggregation: #SUM
      alloc_percent                                                                                                      as AllocationPercent,
      @DefaultAggregation: #SUM
      ovr_royalty_rate                                                                                                   as OverrideRoyaltyRate,
      @ObjectModel.foreignKey.association: '_ONRRLessorType'
      lessor_cd                                                                                                          as ONRRLessorType,
      @ObjectModel.foreignKey.association: '_TribalOrAllotteeLeaseType'
      tribal_allottee                                                                                                    as TribalOrAllotteeLeaseType,
      @ObjectModel.foreignKey.association: '_RoyaltyPaytDistributeeType'
      distributee_cd                                                                                                     as RoyaltyPaytDistributeeType, // Domain View to be created || Check table /PRA/C_FP_DIS_CD
      @ObjectModel.foreignKey.association: '_OnOrOffShoreLeaseSale'
      on_off_shore_ind                                                                                                   as OnOrOffShoreLeaseSale,
      @ObjectModel.foreignKey.association: '_IndianIndexZone'
      index_zone                                                                                                         as IndianIndexZone,
      lease_name                                                                                                         as ONRRLeaseName,
      @ObjectModel.foreignKey.association:'_IsSection6Lease'
      sect6_fl                                                                                                           as IsSection6Lease,
      @ObjectModel.foreignKey.association:'_HasTransactionCode37'
      trans37_fl                                                                                                         as HasTransactionCode37,
      @ObjectModel.foreignKey.association:'_HasTransactionCode38'
      trans38_fl                                                                                                         as HasTransactionCode38,
      @ObjectModel.foreignKey.association:'_ONRRSalesType'
      sales_type_cd                                                                                                      as ONRRSalesType, // Check table OIUREP_SALESTY
      api_well_no                                                                                                        as APIWellNumber, //Do we need to add this to list of projections?
      @ObjectModel.foreignKey.association: '_ONRRReportedProduct'
      product_cd                                                                                                         as ONRRReportedProduct,
      @ObjectModel.foreignKey.association: '_ONRRReportedTransType'
      transaction_cd                                                                                                     as ONRRReportedTransType,
      roy_rate                                                                                                           as RoyaltyRate,
      @ObjectModel.foreignKey.association: '_ONRRPaymentMethod'
      pay_method_cd                                                                                                      as ONRRPaymentMethod,
      @ObjectModel.foreignKey.association: '_ONRRReportStatus'
      status                                                                                                             as ONRRReportStatus,
      @ObjectModel.foreignKey.association: '_ONRROverrideAdjmtReason'
      ovr_adj_cd                                                                                                         as ONRROverrideAdjmtReason,
      @ObjectModel.foreignKey.association: '_IsRejectOverridden'
      ovr_reject_fl                                                                                                      as IsRejectOverridden,
      ovr_pad_no                                                                                                         as OverrideDocument,
      @ObjectModel.foreignKey.association: '_FutureRptHasRoyaltyDueAdjmt'
      ry_due_adj_ps_fl                                                                                                   as FutureRptHasRoyaltyDueAdjmt,
      @ObjectModel.foreignKey.association: '_SalesFigureIsToBeRecalculated'
      recalculate_fl                                                                                                     as SalesFigureIsToBeRecalculated,
      //adminstrative
      @Semantics.user.createdBy: true
      cast( oiu_cruser as fclm_bam_created_by )                                                                          as CreatedByUser,
      cast( oiu_timestamp as oiu_vdm_created_on_ts )                                                                     as CreationDateTime,
      //needed to support authorization check
      cast( '/PRA/FP_WORKPLACE' as fqm_origin_trans_id )                                                                 as OriginTransaction,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'Currency'
      net_val                                                                                                            as OwnerNetAmount,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'VolumeUnit'
      net_vol                                                                                                            as OwnerNetVolInVolUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'Currency'
      owner_gross_val                                                                                                    as OwnerGrossAmount,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'EnergyUnit'
      owner_energy                                                                                                       as OwnerEnergyInEnergyUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'Currency'
      gross_val                                                                                                          as GrossAmount,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'VolumeUnit'
      gross_vol                                                                                                          as GrossVolInVolUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'EnergyUnit'
      gross_energy                                                                                                       as GrossEnergyInEnergyUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'Currency'
      trans_deduct_adj                                                                                                   as TranspAllwncDeductAdjmtAmt,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'Currency'
      proc_deduct_adj                                                                                                    as ProcgAllwncDeductAdjmtAmt,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'Currency'
      royalty_due_adj                                                                                                    as RoyaltyDueAdjustmentAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'Currency'
      transportation                                                                                                     as TranspAllwncDeductAmt,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'Currency'
      processing                                                                                                         as ProcgAllwncDeductAmt,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'Currency'
      tax                                                                                                                as TaxAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'Currency'
      tax_reimburse                                                                                                      as TaxReimbursementAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'Currency'
      mkt_reimburse                                                                                                      as MarketingReimbursementAmount,
      _CompanyCode,
      _PRAJointVenture,
      _DivisionOfInterest,
      _Well,
      _WellCompletion,
      _PRAContract,
      _VolumeType,
      _Product,
      _PRAOwner,
      _GLAccount,
      _CostCenter,
      _PriorPeriodAdjustmentReason,
      _ONRRBusinessTransactionType,
      _ProcessRun,
      _AgencyReportType,
      _VolumeUnit,
      _EnergyUnit,
      _Currency,
      _DeliveryNetwork,
      _MasterDataRecordingLvl,
      _ONRRPayerCode,
      _IsCompensatoryRoyalty,
      _IsSection6LeaseOverride,
      _IsShallowWaterRoyaltyRelieved,
      _IsDeepWaterRoyaltyRelieved,
      _IsRptgAtAPIWellLvl,
      _ONRRLessorType,
      _TribalOrAllotteeLeaseType,
      _RoyaltyPaytDistributeeType,
      _OnOrOffShoreLeaseSale,
      _IndianIndexZone,
      _IsSection6Lease,
      _HasTransactionCode37,
      _HasTransactionCode38,
      _ONRRSalesType,
      _ONRRReportedProduct,
      _ONRRReportedTransType,
      _ONRRPaymentMethod,
      _ONRRReportStatus,
      _ONRROverrideAdjmtReason,
      _IsRejectOverridden,
      _FutureRptHasRoyaltyDueAdjmt,
      _SalesFigureIsToBeRecalculated

};
```
