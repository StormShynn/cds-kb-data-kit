---
name: I_PRAROYALTYRPTGHISTWY
description: "PRA Royalty Reporting History Wyoming"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAROYALTYRPTGHISTWY')/$value
semantic_en: "PRA Royalty Reporting History Wyoming"
semantic_vi: "PRA Royalty Reporting History Wyoming — CDS view giao diện dựa trên PRA Royalty Reporting History Wyoming."
keywords:
  - "pra"
  - "royalty"
  - "reporting"
  - "history"
  - "wyoming"
  - "company"
  - "code"
  - "sales"
  - "date"
  - "product"
  - "well"
  - "completion"
tags:
  - IS
  - bo:purchaseorder
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRAROYALTYRPTGHISTWY

**PRA Royalty Reporting History Wyoming**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAROYALTYRPTGHISTWY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `bukrs` | `CHAR(4)` | Company Code |
| `SalesDate` | ✓ | |  | `sales_dt` | `DATS(8)` | Sales Date / Month |
| `Product` | ✓ | |  | `pdcd` | `CHAR(3)` | Full three char. product code (Major and Detail Products) |
| `Well` | ✓ | |  | `wl_no` | `CHAR(15)` | Well ID number |
| `WellCompletion` | ✓ | |  | `wc_no` | `CHAR(5)` | Well Completion Number |
| `MeasurementPoint` | ✓ | |  | `mp_no` | `CHAR(20)` | Measurement point number |
| `JointVenture` | ✓ | |  | `vname` | `CHAR(6)` | Joint Venture |
| `DivisionOfInterest` | ✓ | |  | `doi_no` | `CHAR(5)` | Division of Interest (DOI) |
| `DeliveryNetwork` | ✓ | |  | `dn_no` | `CHAR(20)` | Delivery network number |
| `PRAContract` | ✓ | |  | `ct_no` | `CHAR(10)` | Contract Number |
| `VolumeType` | ✓ | |  | `vl_type_cd` | `CHAR(2)` | Volume type code |
| `UniqueOwnerReference` | ✓ | |  | `owner_identifier` | `CHAR(24)` | Royalty 2.0 - Owner Identifier |
| `TaxRptgRvslOrBkgOrAdjmt` | ✓ | |  | `rev_book_adj_ind` | `CHAR(1)` | Royalty 2.0 - WY - Reversal/Booking/Reversal Adjustment/Adjs |
| `UnitJointVenture` |  | |  | `unit_vname` | `CHAR(6)` | Joint Venture |
| `GLAccount` |  | |  | `acct_no` | `CHAR(10)` | G/L Account Number |
| `BaseUnit` |  | |  | `uom` | `UNIT(3)` | Measurement unit |
| `CompanyCodeCurrency` |  | | `_CompanyCode` | `Currency` | `CUKY(5)` | Currency Key |
| `OwnerPaymentStatus` |  | |  | `pay_cd` | `CHAR(2)` | Pay Code |
| `EntityIsCompanyOperated` |  | |  | `operated_fl` | `CHAR(1)` | Royalty 2.0 - WY - Operated Flag |
| `OperatorName` |  | |  | `operator_name` | `CHAR(38)` | Royalty 2.0 - WY - Operator Name |
| `ReportingAgencyLease` |  | |  | `state_lease_no` | `CHAR(15)` | Royalty 2.0 - Wyoming - State Lease Number |
| `ProductionSharingAgreement` |  | |  | `unique_id` | `CHAR(20)` | Royalty 2.0 - Wyoming - PSA |
| `EntityIsOnlyReported` |  | |  | `report_only` | `CHAR(1)` | Royalty 2.0 - WY - Report Only Flag |
| `OverrideOwnerOperatedType` |  | |  | `override_fl` | `CHAR(1)` | Royalty 2.0 - WY - Override Operated Flag |
| `ReferenceFieldText` |  | |  | `reference_field` | `CHAR(35)` | Royalty 2.0 - WY - Reference Field |
| `AlternateProdnSharingAgrmt` |  | |  | `alternate_psa` | `CHAR(20)` | Royalty 2.0 - Wyoming - Alternate PSA |
| `MasterDataRecordingLvl` |  | |  | `master_level` | `CHAR(1)` | Royalty 2.0 - WY - Master Level |
| `AgencyProduct` |  | |  | `wy_pdcd` | `NUMC(3)` | Royalty 2.0 - Wyoming - Product Code |
| `Company` |  | |  | `payer_code` | `NUMC(4)` | Royalty 2.0 - Wyoming - Payer Code |
| `AgencyReportType` |  | |  | `original_report` | `CHAR(1)` | Royalty 2.0 - WY - Original Report |
| `ValuationDocumentNumber` |  | |  | `doc_no` | `CHAR(20)` | Val. document number |
| `ValuationDocumentYear` |  | |  | `doc_year` | `NUMC(4)` | Document year |
| `CreatedByUser` |  | |  | `cast( oiu_cruser as fclm_bam_created_by )` | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  | `cast( oiu_timestamp as oiu_vdm_created_on_ts )` | `DEC(15)` | Created On Timestamp |
| `Country` |  | |  | `cast( 'US ' as land1_gp )` | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` |  | |  | `cast( '49' as oiu_pri_geo_loc )` | `CHAR(2)` | Primary Geographical Location |
| `OriginTransaction` |  | |  | `cast( '/PRA/RP_WORKPLACE' as fqm_origin_trans_id )` | `CHAR(32)` | Source Transaction ID |
| `TractAllocToLeaseRatio` |  | |  | `tract_alloc_lse` | `DEC(9)` | Royalty 2.0 - Wyoming - Tract Allocation to Lease |
| `RoyaltyRate` |  | |  | `royalty_rate` | `DEC(9)` | Royalty 2.0 - Wyoming - Royalty Rate |
| `AllocationPercent` |  | |  | `alloc_percent` | `DEC(9)` | Royalty 2.0 - Wyoming - Allocation Percent |
| `CalcTractAllocToLeaseRatio` |  | |  | `ctract_alloc_lse` | `DEC(9)` | Royalty 2.0 - Wyoming - Calculated Tract Allocation to Lease |
| `GrossVolInBaseUnit` |  | |  | `gr_qy` | `DEC(12)` | Gross Volume |
| `GrossValInCoCodeCrcy` |  | |  | `gr_am` | `CURR(11)` | Gross Value |
| `DdctnOrReimbmtAmtInCoCdCrcy` |  | |  | `ded_rmb_am` | `CURR(11)` | Deduction/Reimbursement Amount |
| `TaxReimbmtAmtInCoCodeCrcy` |  | |  | `tax_rmb_am` | `CURR(11)` | Tax Reimbursement Amount |
| `TranspMktgCostInCoCodeCrcy` |  | |  | `net_transp_am` | `CURR(11)` | Marketing Cost |
| `OtherMktgCostInCoCodeCrcy` |  | |  | `net_oth_mk_am` | `CURR(11)` | Marketing Cost |
| `MktgCost01InCoCodeCrcy` |  | |  | `mkt_cost_01` | `CURR(11)` | Marketing Cost |
| `MktgCost02InCoCodeCrcy` |  | |  | `mkt_cost_02` | `CURR(11)` | Marketing Cost |
| `MktgCost03InCoCodeCrcy` |  | |  | `mkt_cost_03` | `CURR(11)` | Marketing Cost |
| `MktgCost04InCoCodeCrcy` |  | |  | `mkt_cost_04` | `CURR(11)` | Marketing Cost |
| `MktgCost05InCoCodeCrcy` |  | |  | `mkt_cost_05` | `CURR(11)` | Marketing Cost |
| `MktgCost06InCoCodeCrcy` |  | |  | `mkt_cost_06` | `CURR(11)` | Marketing Cost |
| `MktgCost07InCoCodeCrcy` |  | |  | `mkt_cost_07` | `CURR(11)` | Marketing Cost |
| `MktgCost08InCoCodeCrcy` |  | |  | `mkt_cost_08` | `CURR(11)` | Marketing Cost |
| `MktgCost09InCoCodeCrcy` |  | |  | `mkt_cost_09` | `CURR(11)` | Marketing Cost |
| `MktgCost10InCoCodeCrcy` |  | |  | `mkt_cost_10` | `CURR(11)` | Marketing Cost |
| `OwnerGrossValInCoCodeCrcy` |  | |  | `txn_val_am` | `CURR(11)` | Royalty 2.0 - WY - Owner Gross Value |
| `NetRevenueInterestRatio` |  | |  | `own_int_decm_qy` | `DEC(9)` | Royalty 2.0 - Wyoming - Owner NRI |
| `JournalEntryTransacAmtVal` |  | |  | `trans_am` | `CURR(11)` | JE Transaction Amount |
| `JournalEntryTransacQtyVal` |  | |  | `trans_qy` | `DEC(12)` | JE Transaction Quantity |
| `HeatingValue` |  | |  | `btu_qy` | `DEC(7)` | BTU Quantity |
| `PressureBaseQty` |  | |  | `ps_base_qy` | `QUAN(13)` | Pressure Base |
| `APIGravityRatio` |  | |  | `grv_qy` | `DEC(6)` | Oil/gas density at standard/base conditions |
| `DisbursementDecimalRatio` |  | |  | `own_bal_decm_qy` | `DEC(9)` | Owner Disbursement (Balance) Decimal |
| `OwnerEnergyInMMBTU` |  | |  | `mmbtu_ovl_am` | `DEC(12)` | Owner MMBTU |
| `_CompanyCode` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_Well` | | ✓ | | | | |
| `_WellCompletion` | | ✓ | | | | |
| `_MeasurementPoint` | | ✓ | | | | |
| `_PRAJointVenture` | | ✓ | | | | |
| `_DivisionOfInterest` | | ✓ | | | | |
| `_DeliveryNetwork` | | ✓ | | | | |
| `_PRAContract` | | ✓ | | | | |
| `_VolumeType` | | ✓ | | | | |
| `_TaxRptgRvslOrBkgOrAdjmt` | | ✓ | | | | |
| `_UnitJointVenture` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_EntityIsCompanyOperated` | | ✓ | | | | |
| `_EntityIsOnlyReported` | | ✓ | | | | |
| `_OvrrdeOprtdType` | | ✓ | | | | |
| `_ProductType` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_PrimaryGeogrlLocation` | | ✓ | | | | |
| `_ValuationDocumentYear` | | ✓ | | | | |
| `_ValuationDocumentHdr` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Product` | `I_PRAProduct` | [0..1] |
| `_Well` | `I_Well` | [0..1] |
| `_WellCompletion` | `I_WellCompletion` | [0..1] |
| `_MeasurementPoint` | `I_MeasurementPoint` | [0..1] |
| `_PRAJointVenture` | `I_PRAJointVenture` | [0..1] |
| `_DivisionOfInterest` | `I_DivisionOfInterest` | [0..1] |
| `_DeliveryNetwork` | `I_DeliveryNetwork` | [0..1] |
| `_PRAContract` | `I_PRAContract` | [0..1] |
| `_VolumeType` | `I_VolumeType` | [0..1] |
| `_TaxRptgRvslOrBkgOrAdjmt` | `I_TaxRptgRvslOrBkgOrAdjmtCode` | [0..1] |
| `_UnitJointVenture` | `I_PRAJointVenture` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_EntityIsCompanyOperated` | `I_Indicator` | [0..1] |
| `_EntityIsOnlyReported` | `I_Indicator` | [0..1] |
| `_OvrrdeOprtdType` | `I_PRARoytyWYOvrrdeOprtdType` | [0..1] |
| `_ProductType` | `I_PRARoytyWYProductType` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_PrimaryGeogrlLocation` | `I_PrimaryGeogrlLocation` | [0..1] |
| `_ValuationDocumentYear` | `I_CalendarYear` | [0..1] |
| `_ValuationDocumentHdr` | `I_ValuationDocumentHdr` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAROYALTYRPTGHISTWY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAROYALTYRPTGHISTWY')/$value)*

```abap
@EndUserText.label: 'PRA Royalty Reporting History Wyoming'
@Analytics.dataCategory: #CUBE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVROYRPTGHWY'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.sapObjectNodeType.name: 'PRAWyomingRoyaltyRptgHistory'
define view I_PRARoyaltyRptgHistWY
  as select from /pra/r6_royhst
  association [0..1] to I_CompanyCode                 as _CompanyCode              on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_PRAProduct                  as _Product                  on  $projection.Product = _Product.Product
  association [0..1] to I_Well                        as _Well                     on  $projection.Well = _Well.Well
  association [0..1] to I_WellCompletion              as _WellCompletion           on  $projection.Well           = _WellCompletion.Well
                                                                                  and  $projection.WellCompletion = _WellCompletion.WellCompletion
  association [0..1] to I_MeasurementPoint            as _MeasurementPoint         on  $projection.MeasurementPoint = _MeasurementPoint.MeasurementPoint
  association [0..1] to I_PRAJointVenture             as _PRAJointVenture          on  $projection.CompanyCode  = _PRAJointVenture.CompanyCode
                                                                                  and  $projection.JointVenture = _PRAJointVenture.PRAJointVenture
  association [0..1] to I_DivisionOfInterest          as _DivisionOfInterest       on  $projection.CompanyCode        = _DivisionOfInterest.CompanyCode
                                                                                  and  $projection.JointVenture       = _DivisionOfInterest.JointVenture
                                                                                  and  $projection.DivisionOfInterest = _DivisionOfInterest.DivisionOfInterest
  association [0..1] to I_DeliveryNetwork             as _DeliveryNetwork          on  $projection.DeliveryNetwork = _DeliveryNetwork.DeliveryNetwork
  association [0..1] to I_PRAContract                 as _PRAContract              on  $projection.PRAContract = _PRAContract.PRAContract
  association [0..1] to I_VolumeType                  as _VolumeType               on  $projection.VolumeType = _VolumeType.VolumeType
  association [0..1] to I_TaxRptgRvslOrBkgOrAdjmtCode as _TaxRptgRvslOrBkgOrAdjmt  on  $projection.TaxRptgRvslOrBkgOrAdjmt = _TaxRptgRvslOrBkgOrAdjmt.TaxRptgRvslOrBkgOrAdjmt
  association [0..1] to I_PRAJointVenture             as _UnitJointVenture         on  $projection.CompanyCode      = _UnitJointVenture.CompanyCode
                                                                                  and  $projection.UnitJointVenture = _UnitJointVenture.PRAJointVenture
  association [0..1] to I_UnitOfMeasure               as _BaseUnit                 on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure
  association [0..1] to I_Currency                    as _Currency                 on  $projection.CompanyCodeCurrency = _Currency.Currency
  association [0..1] to I_Indicator                   as _EntityIsCompanyOperated  on  $projection.EntityIsCompanyOperated = _EntityIsCompanyOperated.IndicatorValue
  association [0..1] to I_Indicator                   as _EntityIsOnlyReported     on  $projection.EntityIsOnlyReported = _EntityIsOnlyReported.IndicatorValue
  association [0..1] to I_PRARoytyWYOvrrdeOprtdType   as _OvrrdeOprtdType          on  $projection.OverrideOwnerOperatedType = _OvrrdeOprtdType.OverrideOwnerOperatedType
  association [0..1] to I_PRARoytyWYProductType       as _ProductType              on  $projection.AgencyProduct = _ProductType.ProductType
  association [0..1] to I_Country                     as _Country                  on  $projection.Country = _Country.Country
  association [0..1] to I_PrimaryGeogrlLocation       as _PrimaryGeogrlLocation    on  $projection.Country               = _PrimaryGeogrlLocation.Country
                                                                                  and  $projection.PrimaryGeogrlLocation = _PrimaryGeogrlLocation.PrimaryGeogrlLocation
  association [0..1] to I_CalendarYear                as _ValuationDocumentYear    on  $projection.ValuationDocumentYear = _ValuationDocumentYear.CalendarYear
  association [0..1] to I_ValuationDocumentHdr        as _ValuationDocumentHdr     on  $projection.ValuationDocumentNumber = _ValuationDocumentHdr.ValuationDocumentNumber
                                                                                  and  $projection.ValuationDocumentYear = _ValuationDocumentHdr.ValuationDocumentYear

{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key bukrs                                                                                      as CompanyCode,
  key sales_dt                                                                                   as SalesDate,
      @ObjectModel.foreignKey.association: '_Product'
  key pdcd                                                                                       as Product,
      @ObjectModel.foreignKey.association: '_Well'
  key wl_no                                                                                      as Well,
      @ObjectModel.foreignKey.association: '_WellCompletion'
  key wc_no                                                                                      as WellCompletion,
      @ObjectModel.foreignKey.association: '_MeasurementPoint'
  key mp_no                                                                                      as MeasurementPoint,
      @ObjectModel.foreignKey.association: '_PRAJointVenture'
  key vname                                                                                      as JointVenture,
      @ObjectModel.foreignKey.association: '_DivisionOfInterest'
  key doi_no                                                                                     as DivisionOfInterest,
      @ObjectModel.foreignKey.association: '_DeliveryNetwork'
  key dn_no                                                                                      as DeliveryNetwork,
      @ObjectModel.foreignKey.association: '_PRAContract'
  key ct_no                                                                                      as PRAContract,
      @ObjectModel.foreignKey.association: '_VolumeType'
  key vl_type_cd                                                                                 as VolumeType,
  key owner_identifier                                                                           as UniqueOwnerReference,
      @ObjectModel.foreignKey.association: '_TaxRptgRvslOrBkgOrAdjmt'
  key rev_book_adj_ind                                                                           as TaxRptgRvslOrBkgOrAdjmt,
      @ObjectModel.foreignKey.association: '_UnitJointVenture'
      unit_vname                                                                                 as UnitJointVenture,
      acct_no                                                                                    as GLAccount,
      @Semantics.unitOfMeasure: true
      uom                                                                                        as BaseUnit,
      @Semantics.currencyCode: true
      _CompanyCode.Currency                                                                      as CompanyCodeCurrency,
      pay_cd                                                                                     as OwnerPaymentStatus,
      @ObjectModel.foreignKey.association: '_EntityIsCompanyOperated'
      operated_fl                                                                                as EntityIsCompanyOperated,
      operator_name                                                                              as OperatorName,
      state_lease_no                                                                             as ReportingAgencyLease,
      unique_id                                                                                  as ProductionSharingAgreement,
      @ObjectModel.foreignKey.association: '_EntityIsOnlyReported'
      report_only                                                                                as EntityIsOnlyReported,
      @ObjectModel.foreignKey.association: '_OvrrdeOprtdType'
      override_fl                                                                                as OverrideOwnerOperatedType,
      reference_field                                                                            as ReferenceFieldText,
      alternate_psa                                                                              as AlternateProdnSharingAgrmt,
      master_level                                                                               as MasterDataRecordingLvl,
      @ObjectModel.foreignKey.association: '_ProductType'
      wy_pdcd                                                                                    as AgencyProduct,
      payer_code                                                                                 as Company,
      original_report                                                                            as AgencyReportType,
      doc_no                                                                                     as ValuationDocumentNumber,
      @ObjectModel.foreignKey.association: '_ValuationDocumentYear'
      doc_year                                                                                   as ValuationDocumentYear,

      //adminstrative
      @Semantics.user.createdBy: true
      cast( oiu_cruser as fclm_bam_created_by )                                                  as CreatedByUser,
      cast( oiu_timestamp as oiu_vdm_created_on_ts )                                             as CreationDateTime,

      @ObjectModel.foreignKey.association: '_Country'
      cast( 'US ' as land1_gp )                                                                  as Country,
      @ObjectModel.foreignKey.association: '_PrimaryGeogrlLocation'
      cast( '49' as oiu_pri_geo_loc )                                                            as PrimaryGeogrlLocation,

      //needed to support authorization check
      cast( '/PRA/RP_WORKPLACE' as fqm_origin_trans_id )                                         as OriginTransaction,

      @DefaultAggregation: #SUM
      tract_alloc_lse                                                                            as TractAllocToLeaseRatio,
      @DefaultAggregation: #SUM
      royalty_rate                                                                               as RoyaltyRate,
      @DefaultAggregation: #SUM
      alloc_percent                                                                              as AllocationPercent,
      @DefaultAggregation: #SUM
      ctract_alloc_lse                                                                           as CalcTractAllocToLeaseRatio,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      gr_qy                                                                                      as GrossVolInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      gr_am                                                                                      as GrossValInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      ded_rmb_am                                                                                 as DdctnOrReimbmtAmtInCoCdCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      tax_rmb_am                                                                                 as TaxReimbmtAmtInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      net_transp_am                                                                              as TranspMktgCostInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      net_oth_mk_am                                                                              as OtherMktgCostInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      mkt_cost_01                                                                                as MktgCost01InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      mkt_cost_02                                                                                as MktgCost02InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      mkt_cost_03                                                                                as MktgCost03InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      mkt_cost_04                                                                                as MktgCost04InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      mkt_cost_05                                                                                as MktgCost05InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      mkt_cost_06                                                                                as MktgCost06InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      mkt_cost_07                                                                                as MktgCost07InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      mkt_cost_08                                                                                as MktgCost08InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      mkt_cost_09                                                                                as MktgCost09InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      mkt_cost_10                                                                                as MktgCost10InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      txn_val_am                                                                                 as OwnerGrossValInCoCodeCrcy,
      @DefaultAggregation: #SUM
      own_int_decm_qy                                                                            as NetRevenueInterestRatio,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      //@OData.v2.amount.noDecimalShift: true     "SA 3252783
      trans_am                                                                                   as JournalEntryTransacAmtVal,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      trans_qy                                                                                   as JournalEntryTransacQtyVal,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      btu_qy                                                                                     as HeatingValue,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      ps_base_qy                                                                                 as PressureBaseQty,
      @DefaultAggregation: #SUM
      grv_qy                                                                                     as APIGravityRatio,
      @DefaultAggregation: #SUM
      own_bal_decm_qy                                                                            as DisbursementDecimalRatio,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      mmbtu_ovl_am                                                                               as OwnerEnergyInMMBTU,

      _CompanyCode,
      _Product,
      _Well,
      _WellCompletion,
      _MeasurementPoint,
      _PRAJointVenture,
      _DivisionOfInterest,
      _DeliveryNetwork,
      _PRAContract,
      _VolumeType,
      _TaxRptgRvslOrBkgOrAdjmt,
      _UnitJointVenture,
      _BaseUnit,
      _Currency,
      _EntityIsCompanyOperated,
      _EntityIsOnlyReported,
      _OvrrdeOprtdType,
      _ProductType,
      _Country,
      _PrimaryGeogrlLocation,
      _ValuationDocumentHdr,
      _ValuationDocumentYear
};
```
