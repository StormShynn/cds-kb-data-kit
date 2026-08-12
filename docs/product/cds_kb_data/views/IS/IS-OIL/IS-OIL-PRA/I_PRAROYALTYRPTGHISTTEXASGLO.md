---
name: I_PRAROYALTYRPTGHISTTEXASGLO
description: "PRA Royalty Reporting History Texas GLO"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAROYALTYRPTGHISTTEXASGLO')/$value
semantic_en: "PRA Royalty Reporting History Texas GLO"
semantic_vi: "PRA Royalty Reporting History Texas GLO — CDS view giao diện dựa trên PRA Royalty Reporting History Texas GLO."
keywords:
  - "pra"
  - "royalty"
  - "reporting"
  - "history"
  - "texas"
  - "glo"
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
# I_PRAROYALTYRPTGHISTTEXASGLO

**PRA Royalty Reporting History Texas GLO**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAROYALTYRPTGHISTTEXASGLO')/$value) |

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
| `TaxRptgRvslOrBkgOrAdjmt` | ✓ | |  | `rev_book_adj_ind` | `CHAR(1)` | Royalty 2.0 - TX - Reversal/Booking/Reversal Adjustment/Adjs |
| `UnitJointVenture` |  | |  | `unit_vname` | `CHAR(6)` | Joint Venture |
| `GLAccount` |  | |  | `acct_no` | `CHAR(10)` | G/L Account Number |
| `CostCenter` |  | |  | `chv_rpt_cd` | `CHAR(10)` | Template cost center |
| `BaseUnit` |  | |  | `uom` | `UNIT(3)` | Measurement unit |
| `CompanyCodeCurrency` |  | | `_CompanyCode` | `Currency` | `CUKY(5)` | Currency Key |
| `OwnerPaymentStatus` |  | |  | `pay_cd` | `CHAR(2)` | Pay Code |
| `Purchaser` |  | |  | `pu_no` | `CHAR(10)` | Purchaser Number |
| `IsAffiliatedSale` |  | |  | `affiliated_sale` | `CHAR(1)` | Royalty 2.0 - TX GLO - Affiliated Sale Indicator |
| `AgencyReportType` |  | |  | `original_report` | `CHAR(1)` | Royalty 2.0 - TX GLOTAMU - Original Report |
| `AgencyGasDispositionType` |  | |  | `gas_disp_code` | `NUMC(2)` | Royalty 2.0 - TX GLO/TAMU - Royalty Gas Disposition Code |
| `MasterDataRecordingLvl` |  | |  | `master_level` | `CHAR(1)` | Royalty 2.0 - TX GLO - Master Level |
| `RailRoadCommsnMstrDataRecgLvl` |  | |  | `rrc_level` | `CHAR(1)` | Royalty 2.0 - TX GLO - RRC Master Level |
| `PurchaserIDByAgency` |  | |  | `purchaser_id` | `NUMC(11)` | Royalty 2.0 - Texas GLO/TAMU - Purchaser ID |
| `OperatorIDByAgency` |  | |  | `operator_id` | `CHAR(10)` | Royalty 2.0 - TX GLO - Operator ID |
| `ReportingAgencyLease` |  | |  | `glo_lease` | `NUMC(6)` | Royalty 2.0 - TX GLO/TAMU Lease |
| `UnitNumberByAgency` |  | |  | `glo_unit_no` | `CHAR(5)` | Royalty 2.0 - Texas GLO/TAMU - Unit Number |
| `JointVentureIsUnit` |  | |  | `unit_vname_flag` | `CHAR(1)` | Roy 2.0 - Texas GLO/TAMU - Unit Venture |
| `TexasRailRoadCommsnDistrict` |  | |  | `rrc_district_no` | `CHAR(2)` | Royalty 2.0 - TX GLO/TAMU - District Number |
| `TexasRailRoadCommsnOilLease` |  | |  | `rrc_oil_lease_no` | `CHAR(5)` | Royalty 2.0 - TX GLO/TAMU - RRC Oil Lease Number |
| `TexasRailRoadCommsnGasWell` |  | |  | `rrc_gas_well_id` | `CHAR(6)` | Royalty 2.0 - TX GLO/TAMU - RRC Gas Well ID |
| `TexasRailRoadCommsnDrillPermit` |  | |  | `rrc_drill_permit` | `CHAR(6)` | Royalty 2.0 - TX GLO/TAMU - RRC Drilling Permit |
| `TexasRailRoadCommsnFieldName` |  | |  | `rrc_field_name` | `CHAR(32)` | Royalty 2.0 - TX GLO/TAMU - RRC Field Name |
| `TexasRailRoadCommsnLeaseName` |  | |  | `rrc_lease_name` | `CHAR(32)` | Royalty 2.0 - TX GLO/TAMU - RRC Lease Name |
| `PropertyAliasName` |  | |  | `prop_alias_name` | `CHAR(32)` | Royalty 2.0 - TX GLO/TAMU - Property Alias Name |
| `Operator` |  | |  | `operator_no` | `CHAR(10)` | Operator Number |
| `AgencyPayOrReportType` |  | |  | `pay_report_flag` | `CHAR(1)` | Royalty 2.0 - TX GLO/TAMU - Pay/Report Flag |
| `ValuationDocumentNumber` |  | |  | `doc_no` | `CHAR(20)` | Val. document number |
| `ValuationDocumentYear` |  | |  | `doc_year` | `NUMC(4)` | Document year |
| `CreatedByUser` |  | |  | `cast( oiu_cruser as fclm_bam_created_by )` | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  | `cast( oiu_timestamp as oiu_vdm_created_on_ts )` | `DEC(15)` | Created On Timestamp |
| `Country` |  | |  | `cast( 'US ' as land1_gp )` | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` |  | |  | `cast( '42' as oiu_pri_geo_loc )` | `CHAR(2)` | Primary Geographical Location |
| `OriginTransaction` |  | |  | `cast( '/PRA/RP_WORKPLACE' as fqm_origin_trans_id )` | `CHAR(32)` | Source Transaction ID |
| `AgencyNetRevenueInterestRatio` |  | |  | `royalty_decimal` | `DEC(9)` | Royalty 2.0 - Texas GLO - Royalty Decimal |
| `AllocationPercent` |  | |  | `alloc_percent` | `DEC(9)` | Royalty 2.0 - TX GLO/TAMU - Allocation Percent |
| `TractParticipationFactor` |  | |  | `tract_part_fact` | `DEC(9)` | Royalty 2.0 - Texas GLO - Tract Participation Factor |
| `PressureBaseQty` |  | |  | `ps_base_qy` | `QUAN(13)` | Pressure Base |
| `APIGravityRatio` |  | |  | `grv_qy` | `DEC(6)` | Oil/gas density at standard/base conditions |
| `NetRevenueInterestRatio` |  | |  | `own_int_decm_qy` | `DEC(9)` | Royalty 2.0 - TX GLO - Owner NRI |
| `DisbursementDecimalRatio` |  | |  | `own_bal_decm_qy` | `DEC(9)` | Owner Disbursement (Balance) Decimal |
| `GrossVolInBaseUnit` |  | |  | `gr_qy` | `DEC(12)` | Gross Volume |
| `GrossValInCoCodeCrcy` |  | |  | `gr_am` | `CURR(11)` | Gross Value |
| `OwnerGrossValInCoCodeCrcy` |  | |  | `txn_val_am` | `CURR(11)` | Royalty 2.0 - TX GLO - Owner Gross Value |
| `JournalEntryTransacAmtVal` |  | |  | `trans_am` | `CURR(11)` | JE Transaction Amount |
| `JournalEntryTransacQtyVal` |  | |  | `trans_qy` | `DEC(12)` | JE Transaction Quantity |
| `OwnerEnergyInMMBTU` |  | |  | `mmbtu_ovl_am` | `DEC(12)` | Owner MMBTU |
| `GrossVolReducnInMCF` |  | |  | `plt_vl_gred_am` | `DEC(12)` | Gross Plant Volume Reduction amount |
| `OwnerVolReducnInMCF` |  | |  | `plt_vl_ored_am` | `DEC(12)` | Owner  Plant Volume Reduction amount |
| `DdctnOrReimbmtAmtInCoCdCrcy` |  | |  | `ded_rmb_am` | `CURR(11)` | Deduction/Reimbursement Amount |
| `TranspMktgCostInCoCodeCrcy` |  | |  | `net_transp_am` | `CURR(11)` | Marketing Cost |
| `OtherMktgCostInCoCodeCrcy` |  | |  | `net_oth_mk_am` | `CURR(11)` | Marketing Cost |
| `TaxReimbmtAmtInCoCodeCrcy` |  | |  | `tax_rmb_am` | `CURR(11)` | Tax Reimbursement Amount |
| `HeatingValue` |  | |  | `btu_qy` | `DEC(7)` | BTU Quantity |
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
| `_PRAGLAccount` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_Purchaser` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_IsAffiliatedSale` | | ✓ | | | | |
| `_AgencyReportType` | | ✓ | | | | |
| `_AgencyGasDispositionType` | | ✓ | | | | |
| `_JointVentureIsUnit` | | ✓ | | | | |
| `_AgencyPayOrReportType` | | ✓ | | | | |
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
| `_PRAGLAccount` | `I_PRAGLAccount` | [0..1] |
| `_CostCenter` | `I_PRACostCenter` | [0..*] |
| `_Purchaser` | `I_Customer` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_IsAffiliatedSale` | `I_Indicator` | [0..1] |
| `_AgencyReportType` | `I_PRARoytyTXGLOAgencyRptType` | [0..1] |
| `_AgencyGasDispositionType` | `I_PRARoytyTXGLOGasDsposType` | [0..1] |
| `_JointVentureIsUnit` | `I_Indicator` | [0..1] |
| `_AgencyPayOrReportType` | `I_AgencyPayOrReportType` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_PrimaryGeogrlLocation` | `I_PrimaryGeogrlLocation` | [0..1] |
| `_ValuationDocumentYear` | `I_CalendarYear` | [0..1] |
| `_ValuationDocumentHdr` | `I_ValuationDocumentHdr` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAROYALTYRPTGHISTTEXASGLO')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAROYALTYRPTGHISTTEXASGLO')/$value)*

```abap
@EndUserText.label: 'PRA Royalty Reporting History Texas GLO'
@Analytics.dataCategory: #CUBE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVROYRPTGHTXG'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.sapObjectNodeType.name: 'PRATexasRoyaltyRptgHistory'
define view I_PRARoyaltyRptgHistTexasGLO
  as select from /pra/r3_royhst
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
  association [0..1] to I_PRAGLAccount                as _PRAGLAccount             on  $projection.CompanyCode = _PRAGLAccount.CompanyCode
                                                                                  and  $projection.GLAccount   = _PRAGLAccount.GLAccount
  association [0..*] to I_PRACostCenter               as _CostCenter               on  $projection.CompanyCode = _CostCenter.CompanyCode
                                                                                  and  $projection.CostCenter  = _CostCenter.CostCenter
  association [0..1] to I_Customer                    as _Purchaser                on  $projection.Purchaser = _Purchaser.Customer
  association [0..1] to I_UnitOfMeasure               as _BaseUnit                 on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure
  association [0..1] to I_Currency                    as _Currency                 on  $projection.CompanyCodeCurrency = _Currency.Currency
  association [0..1] to I_Indicator                   as _IsAffiliatedSale         on  $projection.IsAffiliatedSale = _IsAffiliatedSale.IndicatorValue
  association [0..1] to I_PRARoytyTXGLOAgencyRptType  as _AgencyReportType         on  $projection.AgencyReportType = _AgencyReportType.AgencyReportType
  association [0..1] to I_PRARoytyTXGLOGasDsposType   as _AgencyGasDispositionType on  $projection.AgencyGasDispositionType = _AgencyGasDispositionType.AgencyGasDispositionType

  association [0..1] to I_Indicator                   as _JointVentureIsUnit       on  $projection.JointVentureIsUnit = _JointVentureIsUnit.IndicatorValue
  association [0..1] to I_AgencyPayOrReportType       as _AgencyPayOrReportType    on  $projection.AgencyPayOrReportType = _AgencyPayOrReportType.AgencyPayOrReportType
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
      @ObjectModel.foreignKey.association: '_PRAGLAccount'
      acct_no                                                                                    as GLAccount,
      @ObjectModel.foreignKey.association: '_CostCenter'
      chv_rpt_cd                                                                                 as CostCenter,
      @Semantics.unitOfMeasure: true
      uom                                                                                        as BaseUnit,
      @Semantics.currencyCode: true
      _CompanyCode.Currency                                                                      as CompanyCodeCurrency,
      pay_cd                                                                                     as OwnerPaymentStatus,
      @ObjectModel.foreignKey.association: '_Purchaser'
      pu_no                                                                                      as Purchaser,
      @ObjectModel.foreignKey.association: '_IsAffiliatedSale'
      affiliated_sale                                                                            as IsAffiliatedSale,
      @ObjectModel.foreignKey.association: '_AgencyReportType'
      original_report                                                                            as AgencyReportType,
      @ObjectModel.foreignKey.association: '_AgencyGasDispositionType'
      gas_disp_code                                                                              as AgencyGasDispositionType,
      master_level                                                                               as MasterDataRecordingLvl,
      rrc_level                                                                                  as RailRoadCommsnMstrDataRecgLvl,
      purchaser_id                                                                               as PurchaserIDByAgency,
      operator_id                                                                                as OperatorIDByAgency,
      glo_lease                                                                                  as ReportingAgencyLease,
      glo_unit_no                                                                                as UnitNumberByAgency,
      @ObjectModel.foreignKey.association: '_JointVentureIsUnit'
      unit_vname_flag                                                                            as JointVentureIsUnit,
      rrc_district_no                                                                            as TexasRailRoadCommsnDistrict,
      rrc_oil_lease_no                                                                           as TexasRailRoadCommsnOilLease,
      rrc_gas_well_id                                                                            as TexasRailRoadCommsnGasWell,
      rrc_drill_permit                                                                           as TexasRailRoadCommsnDrillPermit,
      rrc_field_name                                                                             as TexasRailRoadCommsnFieldName,
      rrc_lease_name                                                                             as TexasRailRoadCommsnLeaseName,
      prop_alias_name                                                                            as PropertyAliasName,
      operator_no                                                                                as Operator,
      @ObjectModel.foreignKey.association: '_AgencyPayOrReportType'
      pay_report_flag                                                                            as AgencyPayOrReportType,
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
      cast( '42' as oiu_pri_geo_loc )                                                            as PrimaryGeogrlLocation,

      //needed to support authorization check
      cast( '/PRA/RP_WORKPLACE' as fqm_origin_trans_id )                                         as OriginTransaction,

      @DefaultAggregation: #SUM
      royalty_decimal                                                                            as AgencyNetRevenueInterestRatio,
      @DefaultAggregation: #SUM
      alloc_percent                                                                              as AllocationPercent,
      @DefaultAggregation: #SUM
      tract_part_fact                                                                            as TractParticipationFactor,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      ps_base_qy                                                                                 as PressureBaseQty,
      @DefaultAggregation: #SUM
      grv_qy                                                                                     as APIGravityRatio,
      @DefaultAggregation: #SUM
      own_int_decm_qy                                                                            as NetRevenueInterestRatio,
      @DefaultAggregation: #SUM
      own_bal_decm_qy                                                                            as DisbursementDecimalRatio,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      gr_qy                                                                                      as GrossVolInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      gr_am                                                                                      as GrossValInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      txn_val_am                                                                                 as OwnerGrossValInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      //@OData.v2.amount.noDecimalShift: true     "SA 3252783
      trans_am                                                                                   as JournalEntryTransacAmtVal,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      trans_qy                                                                                   as JournalEntryTransacQtyVal,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      mmbtu_ovl_am                                                                               as OwnerEnergyInMMBTU,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @OData.v2.amount.noDecimalShift: true
      plt_vl_gred_am                                                                             as GrossVolReducnInMCF,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      plt_vl_ored_am                                                                             as OwnerVolReducnInMCF,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      ded_rmb_am                                                                                 as DdctnOrReimbmtAmtInCoCdCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      net_transp_am                                                                              as TranspMktgCostInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      net_oth_mk_am                                                                              as OtherMktgCostInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      tax_rmb_am                                                                                 as TaxReimbmtAmtInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      btu_qy                                                                                     as HeatingValue,

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
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _PRAGLAccount,
      _CostCenter,
      _Purchaser,
      _IsAffiliatedSale,
      _AgencyReportType,
      _AgencyGasDispositionType,
      _BaseUnit,
      _Currency,
      _JointVentureIsUnit,
      _AgencyPayOrReportType,
      _Country,
      _PrimaryGeogrlLocation,
      _ValuationDocumentHdr,
      _ValuationDocumentYear
};
```
