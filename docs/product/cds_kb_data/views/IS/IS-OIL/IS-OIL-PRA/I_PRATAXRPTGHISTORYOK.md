---
name: I_PRATAXRPTGHISTORYOK
description: "PRA Tax Reporting History Oklahoma"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTORYOK')/$value
semantic_en: "PRA Tax Reporting History Oklahoma"
semantic_vi: "PRA Tax Reporting History Oklahoma — CDS view giao diện dựa trên oiut5_taxhstp."
keywords:
  - "pra"
  - "tax"
  - "reporting"
  - "history"
  - "oklahoma"
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
# I_PRATAXRPTGHISTORYOK

**PRA Tax Reporting History Oklahoma**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTORYOK')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `cast(bukrs as fis_bukrs preserving type )` | `CHAR(4)` | Company Code |
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
| `TaxClassification` | ✓ | |  | `tax_cls` | `CHAR(4)` | Tax Class |
| `ProductionUnitNumber` | ✓ | |  | `pun` | `NUMC(14)` | Tax 2.0 - OKGP15 - Production Unit Number |
| `TaxRptgRvslOrBkgOrAdjmt` | ✓ | |  | `rev_book_adj_ind` | `CHAR(1)` | Tax 2.0 - Reversal/Booking/Reversal Adjustment/Adjustment |
| `AllocationRatio` |  | |  | `cast(alloc_percent as oiu_vdm_allocation_percentage)` | `CHAR(18)` | Tax 2.0 - Allocation Percentage |
| `ProducerOrPurchaserCode` |  | |  | `prod_purc_ind` | `CHAR(1)` | Producer or Purchaser |
| `UnitJointVenture` |  | |  | `cast(unit_vname as oiu_vdm_unit_venture preserving type)` | `CHAR(6)` | Unit Venture |
| `HasSeveranceTaxPaytOblgn` |  | |  | `pay_fl` | `CHAR(1)` | Tax Severance Tax Calculation Payment Obligations Types |
| `SeveranceTaxRptgType` |  | |  | `rpt_fl` | `CHAR(1)` | State Severance Tax Reporting Indicators |
| `Country` |  | |  | `cast('US' as land1_gp)` | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` |  | |  | `cast( '35' as oiu_pri_geo_loc )` | `CHAR(2)` | Primary Geographical Location |
| `BaseUnit` |  | |  | `uom` | `UNIT(3)` | Measurement unit |
| `CompanyCodeCurrency` |  | | `_CompanyCode` | `Currency` | `CUKY(5)` | Currency Key |
| `TaxRate` |  | |  | `cast(val_tax_rat as oiu_vdm_val_tax_rat)` | `CHAR(14)` | Value tax rate |
| `ProducerOrPurchaserNmbr` |  | |  | `cast(other_party as oiu_vdm_producer_purchaser)` | `CHAR(10)` | Producer/Purchaser |
| `ValuationDocumentNumber` |  | |  | `doc_no` | `CHAR(20)` | Val. document number |
| `ValuationDocumentYear` |  | |  | `doc_year` | `NUMC(4)` | Document year |
| `TaxExemptCode1` |  | |  | `exempt_code_1` | `NUMC(2)` | Tax 2.0 OKGP - Entity Type 01 Exempt Code |
| `TaxExemptCode2` |  | |  | `exempt_code_2` | `NUMC(2)` | Tax 2.0 OKGP - Entity Type 02 Exempt Code |
| `TaxExemptCode3` |  | |  | `exempt_code_3` | `NUMC(2)` | Tax 2.0 OKGP - Entity Type 03 Exempt Code |
| `TaxExemptCode4` |  | |  | `exempt_code_4` | `NUMC(2)` | Tax 2.0 OKGP - Entity Type 04 Exempt Code |
| `TaxExemptCode5` |  | |  | `exempt_code_5` | `NUMC(2)` | Tax 2.0 OKGP - Entity Type 05 Exempt Code |
| `MasterDataRecordingLvl` |  | |  | `master_level` | `CHAR(1)` | Tax 2.0 - Master Level |
| `ExtProducerOrPurchaserNmbr` |  | |  | `prod_purch_no` | `NUMC(5)` | Tax 2.0 - Oklahoma Producer/Purchaser Number |
| `ProductType` |  | |  | `ok_product_code` | `NUMC(1)` | Tax 2.0 - Oklahoma Product Code |
| `TaxPayerIDByAgency` |  | |  | `taxpayer_number` | `NUMC(5)` | Tax 2.0 - Oklahoma Taxpayer Number |
| `ReportingCompany` |  | |  | `fein_ssn` | `NUMC(9)` | Tax 2.0 - FEIN/SSN |
| `ProductionDate` |  | |  | `production_date` | `ACCP(6)` | Tax 2.0 OK - Production Date (YYYYMM) |
| `CreatedByUser` |  | |  | `cast(oiu_cruser as fclm_bam_created_by)` | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  | `cast(oiu_timestamp as oiu_vdm_created_on_ts)` | `DEC(15)` | Created On Timestamp |
| `GrossVolInBaseUnit` |  | |  | `gross_vol` | `DEC(12)` | Gross Volume |
| `GrossValInCoCodeCrcy` |  | |  | `gross_val` | `CURR(11)` | Gross Value |
| `TaxableVolInBaseUnit` |  | |  | `tax_vol` | `DEC(12)` | Taxable Volume |
| `TaxableValInCoCodeCrcy` |  | |  | `tax_val` | `CURR(11)` | Taxable Value |
| `TaxExmptVol1InBaseUnit` |  | |  | `exe_enttype1_vol` | `DEC(12)` | Tax 2.0 - Exempt Entity Type 1 Volume |
| `TaxExmptVal1InCoCdCrcy` |  | |  | `exe_enttype1_val` | `CURR(11)` | Tax 2.0 - Exempt Entity Type 1 Value |
| `TaxExmptVol2InBaseUnit` |  | |  | `exe_enttype2_vol` | `DEC(12)` | Tax 2.0 - Exempt Entity Type 2 Volume |
| `TaxExmptVal2InCoCdCrcy` |  | |  | `exe_enttype2_val` | `CURR(11)` | Tax 2.0 - Exempt Entity Type 2 Value |
| `TaxExmptVol3InBaseUnit` |  | |  | `exe_enttype3_vol` | `DEC(12)` | Tax 2.0 - Exempt Entity Type 3 Volume |
| `TaxExmptVal3InCoCdCrcy` |  | |  | `exe_enttype3_val` | `CURR(11)` | Tax 2.0 - Exempt Entity Type 3 Value |
| `TaxExmptVol4InBaseUnit` |  | |  | `exe_enttype4_vol` | `DEC(12)` | Tax 2.0 - Exempt Entity Type 4 Volume |
| `TaxExmptVal4InCoCdCrcy` |  | |  | `exe_enttype4_val` | `CURR(11)` | Tax 2.0 - Exempt Entity Type 4 Value |
| `TaxExmptVol5InBaseUnit` |  | |  | `exe_enttype5_vol` | `DEC(12)` | Tax 2.0 - Exempt Entity Type 5 Volume |
| `TaxExmptVal5InCoCdCrcy` |  | |  | `exe_enttype5_val` | `CURR(11)` | Tax 2.0 - Exempt Entity Type 5 Value |
| `EnhncdOilRcvryVolInBaseUnit` |  | |  | `eor_vol` | `QUAN(13)` | EOR Volume |
| `EnhncdOilRcvryValInCoCdCrcy` |  | |  | `eor_val` | `CURR(15)` | EOR Value |
| `MktgCostInCoCodeCrcy` |  | |  | `mkt_cost` | `CURR(11)` | Marketing Cost |
| `MktgReimbmtCostInCoCodeCrcy` |  | |  | `mkt_cost_reimb` | `CURR(11)` | Marketing Cost Reimbursement |
| `GrossProdnTaxAmtInCoCodeCrcy` |  | |  | `gp_tax_amt` | `CURR(11)` | Tax 2.0 - Gross Production Tax Amount |
| `PetroleumExcsTxAmtInCoCdCrcy` |  | |  | `pe_tax_amt` | `CURR(11)` | Tax 2.0 - Petroleum Excise Tax Amount |
| `RevolvingFundTxAmtInCoCdCrcy` |  | |  | `rf_tax_amt` | `CURR(11)` | Tax 2.0 - Revolving Fund Tax  Amount |
| `MarginProdgTxAmtInCoCdCrcy` |  | |  | `mp_tax_amt` | `CURR(11)` | Tax 2.0 - Marginally Producing Tax Amount |
| `KoiwaTribeTaxAmtInCoCodeCrcy` |  | |  | `kw_tax_amt` | `CURR(11)` | Tax 2.0 - Kiowa Tax Amount |
| `ArapahoTribeTaxAmtInCoCdCrcy` |  | |  | `cast(ca_tax_amt as oiu_vdm_shoshone_arapaho_tax)` | `CURR(11)` | Shoshone Arapaho Tax |
| `OriginTransaction` |  | |  | `cast( '/PRA/RP_WORKPLACE' as fqm_origin_trans_id )` | `CHAR(32)` | Source Transaction ID |
| `_CompanyCode` | | ✓ | | | | |
| `_Well` | | ✓ | | | | |
| `_WellCompletion` | | ✓ | | | | |
| `_MeasurementPoint` | | ✓ | | | | |
| `_PRAJointVenture` | | ✓ | | | | |
| `_DivisionOfInterest` | | ✓ | | | | |
| `_DeliveryNetwork` | | ✓ | | | | |
| `_PRAContract` | | ✓ | | | | |
| `_VolumeType` | | ✓ | | | | |
| `_TaxClassification` | | ✓ | | | | |
| `_HasSeveranceTaxPaytOblgn` | | ✓ | | | | |
| `_SeveranceTaxRptgType` | | ✓ | | | | |
| `_UnitJointVenture` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_PrimaryGeogrlLocation` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_TaxExemptCode1` | | ✓ | | | | |
| `_TaxExemptCode2` | | ✓ | | | | |
| `_TaxExemptCode3` | | ✓ | | | | |
| `_TaxExemptCode4` | | ✓ | | | | |
| `_TaxExemptCode5` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_TaxRptgRvslOrBkgOrAdjmt` | | ✓ | | | | |
| `_ProducerOrPurchaserCode` | | ✓ | | | | |
| `_MasterDataRecordingLvl` | | ✓ | | | | |
| `_ProductType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Well` | `I_Well` | [0..1] |
| `_WellCompletion` | `I_WellCompletion` | [0..1] |
| `_MeasurementPoint` | `I_MeasurementPoint` | [0..1] |
| `_PRAJointVenture` | `I_PRAJointVenture` | [0..1] |
| `_DivisionOfInterest` | `I_DivisionOfInterest` | [0..1] |
| `_DeliveryNetwork` | `I_DeliveryNetwork` | [0..1] |
| `_PRAContract` | `I_PRAContract` | [0..1] |
| `_VolumeType` | `I_VolumeType` | [0..1] |
| `_TaxClassification` | `I_TaxClassification` | [0..1] |
| `_HasSeveranceTaxPaytOblgn` | `I_Indicator` | [0..1] |
| `_SeveranceTaxRptgType` | `I_Indicator` | [0..1] |
| `_UnitJointVenture` | `I_PRAJointVenture` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_PrimaryGeogrlLocation` | `I_PrimaryGeogrlLocation` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_TaxExemptCode1` | `I_PRATaxOKExemptCode` | [0..1] |
| `_TaxExemptCode2` | `I_PRATaxOKExemptCode` | [0..1] |
| `_TaxExemptCode3` | `I_PRATaxOKExemptCode` | [0..1] |
| `_TaxExemptCode4` | `I_PRATaxOKExemptCode` | [0..1] |
| `_TaxExemptCode5` | `I_PRATaxOKExemptCode` | [0..1] |
| `_Product` | `I_PRAProduct` | [0..1] |
| `_TaxRptgRvslOrBkgOrAdjmt` | `I_TaxRptgRvslOrBkgOrAdjmtCode` | [0..1] |
| `_ProducerOrPurchaserCode` | `I_ProducerOrPurchaserCode` | [0..1] |
| `_MasterDataRecordingLvl` | `I_PRATaxMstrDataRecgLvl` | [0..1] |
| `_ProductType` | `I_PRATaxOkProductType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTORYOK')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTORYOK')/$value)*

```abap
@EndUserText.label: 'PRA Tax Reporting History Oklahoma'
@Analytics.dataCategory: #CUBE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTAXRPTGHISTOK'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

//@ObjectModel.representativeKey: ''

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.sapObjectNodeType.name: 'PRAOklahomaTaxRptgHist'

define view I_PRATaxRptgHistoryOK
  as select from oiut5_taxhstp

  association [0..1] to I_CompanyCode                 as _CompanyCode              on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_Well                        as _Well                     on  $projection.Well = _Well.Well
  association [0..1] to I_WellCompletion              as _WellCompletion           on  $projection.Well           = _WellCompletion.Well
                                                                                   and $projection.WellCompletion = _WellCompletion.WellCompletion
  association [0..1] to I_MeasurementPoint            as _MeasurementPoint         on  $projection.MeasurementPoint = _MeasurementPoint.MeasurementPoint
  association [0..1] to I_PRAJointVenture             as _PRAJointVenture          on  $projection.CompanyCode  = _PRAJointVenture.CompanyCode
                                                                                   and $projection.JointVenture = _PRAJointVenture.PRAJointVenture
  association [0..1] to I_DivisionOfInterest          as _DivisionOfInterest       on  $projection.CompanyCode        = _DivisionOfInterest.CompanyCode
                                                                                   and $projection.JointVenture       = _DivisionOfInterest.JointVenture
                                                                                   and $projection.DivisionOfInterest = _DivisionOfInterest.DivisionOfInterest
  association [0..1] to I_DeliveryNetwork             as _DeliveryNetwork          on  $projection.DeliveryNetwork = _DeliveryNetwork.DeliveryNetwork
  association [0..1] to I_PRAContract                 as _PRAContract              on  $projection.PRAContract = _PRAContract.PRAContract
  association [0..1] to I_VolumeType                  as _VolumeType               on  $projection.VolumeType = _VolumeType.VolumeType
  association [0..1] to I_TaxClassification           as _TaxClassification        on  $projection.Country               = _TaxClassification.Country
                                                                                   and $projection.PrimaryGeogrlLocation = _TaxClassification.PrimaryGeogrlLocation
                                                                                   and $projection.TaxClassification     = _TaxClassification.TaxClassification
  association [0..1] to I_Indicator                   as _HasSeveranceTaxPaytOblgn on  $projection.HasSeveranceTaxPaytOblgn = _HasSeveranceTaxPaytOblgn.IndicatorValue
  association [0..1] to I_Indicator                   as _SeveranceTaxRptgType     on  $projection.SeveranceTaxRptgType = _SeveranceTaxRptgType.IndicatorValue
  association [0..1] to I_PRAJointVenture             as _UnitJointVenture         on  $projection.CompanyCode      = _UnitJointVenture.CompanyCode
                                                                                   and $projection.UnitJointVenture = _UnitJointVenture.PRAJointVenture
  association [0..1] to I_Country                     as _Country                  on  $projection.Country = _Country.Country
  association [0..1] to I_PrimaryGeogrlLocation       as _PrimaryGeogrlLocation    on  $projection.Country               = _PrimaryGeogrlLocation.Country
                                                                                   and $projection.PrimaryGeogrlLocation = _PrimaryGeogrlLocation.PrimaryGeogrlLocation
  association [0..1] to I_Currency                    as _Currency                 on  $projection.CompanyCodeCurrency = _Currency.Currency
  association [0..1] to I_UnitOfMeasure               as _UnitOfMeasure            on  $projection.BaseUnit = _UnitOfMeasure.UnitOfMeasure


  association [0..1] to I_PRATaxOKExemptCode          as _TaxExemptCode1           on  $projection.TaxExemptCode1 = _TaxExemptCode1.TaxExemptCode
  association [0..1] to I_PRATaxOKExemptCode          as _TaxExemptCode2           on  $projection.TaxExemptCode2 = _TaxExemptCode2.TaxExemptCode
  association [0..1] to I_PRATaxOKExemptCode          as _TaxExemptCode3           on  $projection.TaxExemptCode3 = _TaxExemptCode3.TaxExemptCode
  association [0..1] to I_PRATaxOKExemptCode          as _TaxExemptCode4           on  $projection.TaxExemptCode4 = _TaxExemptCode4.TaxExemptCode
  association [0..1] to I_PRATaxOKExemptCode          as _TaxExemptCode5           on  $projection.TaxExemptCode5 = _TaxExemptCode5.TaxExemptCode
  association [0..1] to I_PRAProduct                  as _Product                  on  $projection.Product = _Product.Product

  association [0..1] to I_TaxRptgRvslOrBkgOrAdjmtCode as _TaxRptgRvslOrBkgOrAdjmt  on  $projection.TaxRptgRvslOrBkgOrAdjmt = _TaxRptgRvslOrBkgOrAdjmt.TaxRptgRvslOrBkgOrAdjmt
  association [0..1] to I_ProducerOrPurchaserCode     as _ProducerOrPurchaserCode  on  $projection.ProducerOrPurchaserCode = _ProducerOrPurchaserCode.ProducerOrPurchaserCode
  association [0..1] to I_PRATaxMstrDataRecgLvl       as _MasterDataRecordingLvl   on  $projection.MasterDataRecordingLvl = _MasterDataRecordingLvl.MasterDataRecordingLvl
  association [0..1] to I_PRATaxOkProductType         as _ProductType              on  $projection.ProductType = _ProductType.ProductType



{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key cast(bukrs as fis_bukrs preserving type )                                 as CompanyCode,
      @Semantics.businessDate.at: true
  key sales_dt                                                                  as SalesDate,
      @ObjectModel.foreignKey.association: '_Product'
  key pdcd                                                                      as Product,
      @ObjectModel.foreignKey.association: '_Well'
  key wl_no                                                                     as Well,
      @ObjectModel.foreignKey.association: '_WellCompletion'
  key wc_no                                                                     as WellCompletion,
      @ObjectModel.foreignKey.association: '_MeasurementPoint'
  key mp_no                                                                     as MeasurementPoint,
      @ObjectModel.foreignKey.association: '_PRAJointVenture'
  key vname                                                                     as JointVenture,
      @ObjectModel.foreignKey.association: '_DivisionOfInterest'
  key doi_no                                                                    as DivisionOfInterest,
      @ObjectModel.foreignKey.association: '_DeliveryNetwork'
  key dn_no                                                                     as DeliveryNetwork,
      @ObjectModel.foreignKey.association: '_PRAContract'
  key ct_no                                                                     as PRAContract,
      @ObjectModel.foreignKey.association: '_VolumeType'
  key vl_type_cd                                                                as VolumeType,
      @ObjectModel.foreignKey.association: '_TaxClassification'
  key tax_cls                                                                   as TaxClassification,
      //No FK relation or Check table in DB Table
  key pun                                                                       as ProductionUnitNumber,
      @ObjectModel.foreignKey.association: '_TaxRptgRvslOrBkgOrAdjmt'
  key rev_book_adj_ind                                                          as TaxRptgRvslOrBkgOrAdjmt,
      //No FK relation or Check table in DB Table
      cast(alloc_percent as oiu_vdm_allocation_percentage)                      as AllocationRatio,
      @ObjectModel.foreignKey.association: '_ProducerOrPurchaserCode'
      prod_purc_ind                                                             as ProducerOrPurchaserCode,
      @ObjectModel.foreignKey.association: '_UnitJointVenture'
      cast(unit_vname as oiu_vdm_unit_venture preserving type)                  as UnitJointVenture,
      @ObjectModel.foreignKey.association: '_HasSeveranceTaxPaytOblgn'
      pay_fl                                                                    as HasSeveranceTaxPaytOblgn,
      @ObjectModel.foreignKey.association: '_SeveranceTaxRptgType'
      rpt_fl                                                                    as SeveranceTaxRptgType,


      // Added for FK relationship of field TaxClassification
     @ObjectModel.foreignKey.association: '_Country'
      cast('US' as land1_gp)                                                    as Country,
      // Added for FK relationship of field TaxClassification
     @ObjectModel.foreignKey.association: '_PrimaryGeogrlLocation'
      cast( '35' as oiu_pri_geo_loc )                                           as PrimaryGeogrlLocation,


      @Semantics.unitOfMeasure: true
      uom                                                                       as BaseUnit,
      @Semantics.currencyCode: true
      _CompanyCode.Currency                                                     as CompanyCodeCurrency,


      //No FK relation or Check table in DB Table
      cast(val_tax_rat as oiu_vdm_val_tax_rat)                                  as TaxRate,
      //No FK relation or Check table in DB Table
      cast(other_party as oiu_vdm_producer_purchaser)                           as ProducerOrPurchaserNmbr,
      //No FK relation or Check table in DB Table
      doc_no                                                                    as ValuationDocumentNumber,
      @Semantics.fiscal.year: true
      doc_year                                                                  as ValuationDocumentYear,
      @ObjectModel.foreignKey.association: '_TaxExemptCode1'
      exempt_code_1                                                             as TaxExemptCode1,
      @ObjectModel.foreignKey.association: '_TaxExemptCode2'
      exempt_code_2                                                             as TaxExemptCode2,
      @ObjectModel.foreignKey.association: '_TaxExemptCode3'
      exempt_code_3                                                             as TaxExemptCode3,
      @ObjectModel.foreignKey.association: '_TaxExemptCode4'
      exempt_code_4                                                             as TaxExemptCode4,
      @ObjectModel.foreignKey.association: '_TaxExemptCode5'
      exempt_code_5                                                             as TaxExemptCode5,
      @ObjectModel.foreignKey.association: '_MasterDataRecordingLvl'
      master_level                                                              as MasterDataRecordingLvl,
      prod_purch_no                                                             as ExtProducerOrPurchaserNmbr,
      @ObjectModel.foreignKey.association: '_ProductType'
      ok_product_code                                                           as ProductType,
      //No FK relation or Check table in DB Table
      taxpayer_number                                                           as TaxPayerIDByAgency,
      //No FK relation or Check table in DB Table
      fein_ssn                                                                  as ReportingCompany,
      @Semantics.calendar.yearMonth: true
      production_date                                                           as ProductionDate,



      @Semantics.user.createdBy: true
      cast(oiu_cruser as fclm_bam_created_by)                                   as CreatedByUser,
      //No FK relation or Check table in DB Table
      cast(oiu_timestamp as oiu_vdm_created_on_ts)                              as CreationDateTime,



      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      gross_vol                                                                 as GrossVolInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      gross_val                                                                 as GrossValInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      tax_vol                                                                   as TaxableVolInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      tax_val                                                                   as TaxableValInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      exe_enttype1_vol                                                          as TaxExmptVol1InBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      exe_enttype1_val                                                          as TaxExmptVal1InCoCdCrcy,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      exe_enttype2_vol                                                          as TaxExmptVol2InBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      exe_enttype2_val                                                          as TaxExmptVal2InCoCdCrcy,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      exe_enttype3_vol                                                          as TaxExmptVol3InBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      exe_enttype3_val                                                          as TaxExmptVal3InCoCdCrcy,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      exe_enttype4_vol                                                          as TaxExmptVol4InBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      exe_enttype4_val                                                          as TaxExmptVal4InCoCdCrcy,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      exe_enttype5_vol                                                          as TaxExmptVol5InBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      exe_enttype5_val                                                          as TaxExmptVal5InCoCdCrcy,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      eor_vol                                                                   as EnhncdOilRcvryVolInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      eor_val                                                                   as EnhncdOilRcvryValInCoCdCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      mkt_cost                                                                  as MktgCostInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      mkt_cost_reimb                                                            as MktgReimbmtCostInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      gp_tax_amt                                                                as GrossProdnTaxAmtInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      pe_tax_amt                                                                as PetroleumExcsTxAmtInCoCdCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      rf_tax_amt                                                                as RevolvingFundTxAmtInCoCdCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      mp_tax_amt                                                                as MarginProdgTxAmtInCoCdCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      kw_tax_amt                                                                as KoiwaTribeTaxAmtInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast(ca_tax_amt as oiu_vdm_shoshone_arapaho_tax)                          as ArapahoTribeTaxAmtInCoCdCrcy,

      //needed to support authorization check
      cast( '/PRA/RP_WORKPLACE' as fqm_origin_trans_id )                        as OriginTransaction,

      _CompanyCode,
      _Well,
      _WellCompletion,
      _MeasurementPoint,
      _PRAJointVenture,
      _DivisionOfInterest,
      _DeliveryNetwork,
      _PRAContract,
      _TaxClassification,
      _UnitJointVenture,
      _VolumeType,
      _HasSeveranceTaxPaytOblgn,
      _SeveranceTaxRptgType,
      _UnitOfMeasure,
      _Currency,
      _Country,
      _PrimaryGeogrlLocation,

      _TaxRptgRvslOrBkgOrAdjmt,
      _ProducerOrPurchaserCode,
      _MasterDataRecordingLvl,
      _ProductType,
      _TaxExemptCode1,
      _TaxExemptCode2,
      _TaxExemptCode3,
      _TaxExemptCode4,
      _TaxExemptCode5,
      _Product

};
```
