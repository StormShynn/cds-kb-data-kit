---
name: I_PRATAXRPTGHISTORYNEWMEXICO
description: "PRA Tax Reporting History New Mexico"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTORYNEWMEXICO')/$value
semantic_en: "PRA Tax Reporting History New Mexico"
semantic_vi: "PRA Tax Reporting History New Mexico — CDS view giao diện dựa trên oiux8_nm_taxhst."
keywords:
  - "pra"
  - "tax"
  - "reporting"
  - "history"
  - "new"
  - "mexico"
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
# I_PRATAXRPTGHISTORYNEWMEXICO

**PRA Tax Reporting History New Mexico**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTORYNEWMEXICO')/$value) |

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
| `NewMexicoTaxRptgSuffix` | ✓ | |  | `suffix` | `CHAR(5)` | Tax 2.0 - New Mexico Suffix for School Dist Code |
| `TaxRptgRvslOrBkgOrAdjmt` | ✓ | |  | `rev_book_adj_ind` | `CHAR(1)` | Tax 2.0 - NM Reversal/Booking/Reversal Adjustment/Adjustment |
| `UnitJointVenture` |  | |  | `cast(unit_vname as oiu_vdm_unit_venture preserving type)` | `CHAR(6)` | Unit Venture |
| `HasSeveranceTaxPaytOblgn` |  | |  | `pay_fl` | `CHAR(1)` | Tax Severance Tax Calculation Payment Obligations Types |
| `SeveranceTaxRptgType` |  | |  | `rpt_fl` | `CHAR(1)` | State Severance Tax Reporting Indicators |
| `BaseUnit` |  | |  | `uom` | `UNIT(3)` | Measurement unit |
| `CompanyCodeCurrency` |  | | `_CompanyCode` | `Currency` | `CUKY(5)` | Currency Key |
| `ReturnedProductRatio` |  | |  | `cast(ret_lse_pc as oiu_vdm_returned_product_ratio)` | `CHAR(12)` | Returned Product Ratio |
| `ProductionUnitNumber` |  | |  | `pun` | `NUMC(7)` | Tax 2.0 - NM - PUN |
| `EntityIsAffectedByAudit` |  | |  | `aff_by_audit` | `CHAR(1)` | Tax 2.0 - NM - Affected By Audit Flag (TC 55) |
| `MasterDataRecordingLvl` |  | |  | `master_level` | `CHAR(1)` | Texas Master Data Level |
| `OperatorOrPurchaserCode` |  | |  | `oper_purch_ind` | `CHAR(1)` | Tax 2.0 - NM - Operator/Purchaser Indicator |
| `TaxRate` |  | |  | `spec_tax_rate_cd` | `CHAR(3)` | Tax 2.0 - NM - Special Tax Rate Code |
| `ProductType` |  | |  | `nm_product_code` | `CHAR(2)` | Tax 2.0 - NM - Product Code |
| `EntityAffiliationCode` |  | |  | `affiliation_code` | `CHAR(2)` | Tax 2.0 - NM - Affilication Code |
| `TransactionCode` |  | |  | `transaction_code` | `CHAR(2)` | Tax 2.0 - NM - Transaction Code |
| `ReportingIDByAgency` |  | |  | `ogrid` | `CHAR(11)` | Tax 2.0 - New Mexico Oil & Gas Reporting ID |
| `ValuationDocumentNumber` |  | |  | `doc_no` | `CHAR(20)` | Val. document number |
| `ValuationDocumentYear` |  | |  | `doc_year` | `NUMC(4)` | Document year |
| `Country` |  | |  | `cast('US' as land1_gp )` | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` |  | |  | `cast( '30' as oiu_pri_geo_loc )` | `CHAR(2)` | Primary Geographical Location |
| `CreatedByUser` |  | |  | `cast( oiu_cruser as fclm_bam_created_by)` | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  | `cast(oiu_timestamp as oiu_vdm_created_on_ts)` | `DEC(15)` | Created On Timestamp |
| `GrossVolInBaseUnit` |  | |  | `gross_vol` | `DEC(12)` | Gross Volume |
| `GrossValInCoCodeCrcy` |  | |  | `gross_val` | `CURR(11)` | Gross Value |
| `TaxableVolInBaseUnit` |  | |  | `tax_vol` | `DEC(12)` | Taxable Volume |
| `TaxableValInCoCodeCrcy` |  | |  | `tax_val` | `CURR(11)` | Taxable Value |
| `TaxExmptVolInBaseUnit` |  | |  | `exempt_vol` | `DEC(12)` | Exempt Volume |
| `TaxExmptValInCoCodeCrcy` |  | |  | `exempt_val` | `CURR(11)` | Exempt Value |
| `MktgCost01InCoCodeCrcy` |  | |  | `cast(mkt_cost_01 as oiu_vdm_marketing_cost_1)` | `CURR(11)` | Marketing Cost |
| `MktgCost02InCoCodeCrcy` |  | |  | `cast(mkt_cost_02 as oiu_vdm_marketing_cost_2)` | `CURR(11)` | Marketing Cost 2 |
| `MktgCost03InCoCodeCrcy` |  | |  | `cast(mkt_cost_03 as oiu_vdm_marketing_cost_3)` | `CURR(11)` | Marketing Cost 3 |
| `MktgCost04InCoCodeCrcy` |  | |  | `cast(mkt_cost_04 as oiu_vdm_marketing_cost_4)` | `CURR(11)` | Marketing Cost 4 |
| `MktgCost05InCoCodeCrcy` |  | |  | `cast(mkt_cost_05 as oiu_vdm_marketing_cost_5)` | `CURR(11)` | Marketing Cost 5 |
| `MktgCost06InCoCodeCrcy` |  | |  | `cast(mkt_cost_06 as oiu_vdm_marketing_cost_6)` | `CURR(11)` | Marketing Cost 6 |
| `MktgCost07InCoCodeCrcy` |  | |  | `cast(mkt_cost_07 as oiu_vdm_marketing_cost_7)` | `CURR(11)` | Marketing Cost 7 |
| `MktgCost08InCoCodeCrcy` |  | |  | `cast(mkt_cost_08 as oiu_vdm_marketing_cost_8)` | `CURR(11)` | Marketing Cost 8 |
| `MktgCost09InCoCodeCrcy` |  | |  | `cast(mkt_cost_09 as oiu_vdm_marketing_cost_9)` | `CURR(11)` | Marketing Cost 9 |
| `MktgCost10InCoCodeCrcy` |  | |  | `cast(mkt_cost_10 as oiu_vdm_marketing_cost_10)` | `CURR(11)` | Marketing Cost 10 |
| `MktgReimbmtCost1InCoCdCrcy` |  | |  | `cast(mkt_cost_reimb01 as oiu_vdm_mktg_cost_reimb_1)` | `CURR(11)` | Marketing Reimbmt Cost 1 |
| `MktgReimbmtCost2InCoCdCrcy` |  | |  | `cast(mkt_cost_reimb02 as oiu_vdm_mktg_cost_reimb_2)` | `CURR(11)` | Marketing Reimbmt Cost 2 |
| `MktgReimbmtCost3InCoCdCrcy` |  | |  | `cast(mkt_cost_reimb03 as oiu_vdm_mktg_cost_reimb_3)` | `CURR(11)` | Marketing Reimbmt Cost 3 |
| `MktgReimbmtCost4InCoCdCrcy` |  | |  | `cast(mkt_cost_reimb04 as oiu_vdm_mktg_cost_reimb_4)` | `CURR(11)` | Marketing Reimbmt Cost 4 |
| `MktgReimbmtCost5InCoCdCrcy` |  | |  | `cast(mkt_cost_reimb05 as oiu_vdm_mktg_cost_reimb_5)` | `CURR(11)` | Marketing Reimbmt Cost 5 |
| `MktgReimbmtCost6InCoCdCrcy` |  | |  | `cast(mkt_cost_reimb06 as oiu_vdm_mktg_cost_reimb_6)` | `CURR(11)` | Marketing Reimbmt Cost 6 |
| `MktgReimbmtCost7InCoCdCrcy` |  | |  | `cast(mkt_cost_reimb07 as oiu_vdm_mktg_cost_reimb_7)` | `CURR(11)` | Marketing Reimbmt Cost 7 |
| `MktgReimbmtCost8InCoCdCrcy` |  | |  | `cast(mkt_cost_reimb08 as oiu_vdm_mktg_cost_reimb_8)` | `CURR(11)` | Marketing Reimbmt Cost 8 |
| `MktgReimbmtCost9InCoCdCrcy` |  | |  | `cast(mkt_cost_reimb09 as oiu_vdm_mktg_cost_reimb_9)` | `CURR(11)` | Marketing Reimbmt Cost 9 |
| `MktgReimbmtCost10InCoCdCrcy` |  | |  | `cast(mkt_cost_reimb10 as oiu_vdm_mktg_cost_reimb_10)` | `CURR(11)` | Marketing Reimbmt Cost 10 |
| `SeveranceTaxAmtInCoCodeCrcy` |  | |  | `sv_tax_amt` | `CURR(11)` | Tax 2.0 - NM - Severance Tax Amount |
| `ConservationTaxAmtInCoCdCrcy` |  | |  | `cn_tax_amt` | `CURR(11)` | Tax 2.0 - NM - Conservation Tax Amount |
| `EmergcySchoolTxAmtInCoCdCrcy` |  | |  | `es_tax_amt` | `CURR(11)` | Tax 2.0 - NM - Emergency School Tax Amount |
| `AdValoremTaxAmtInCoCodeCrcy` |  | |  | `av_tax_amt` | `CURR(11)` | Tax 2.0 - NM - Ad Valorem Tax Amount |
| `TaxReimbmtAmtInCoCodeCrcy` |  | |  | `tax_reimb` | `CURR(11)` | Tax Reimbursement |
| `GrossSalesVolInBaseUnit` |  | |  | `blps_gross_vol` | `DEC(12)` | Tax 2.0 - NM Before Lease Plant Split Gross Volume |
| `GrossSalesValInCoCodeCrcy` |  | |  | `blps_gross_val` | `CURR(11)` | Tax 2.0 - NM Before Lease Plant Split Gross Value |
| `TaxProcgAllwncAmtInCoCdCrcy` |  | |  | `plant_proc_allow` | `CURR(11)` | Tax 2.0 - NM Plant Processing Allowance |
| `OriginTransaction` |  | |  | `cast( '/PRA/RP_WORKPLACE' as fqm_origin_trans_id )` | `CHAR(32)` | Source Transaction ID |
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
| `_TaxClassification` | | ✓ | | | | |
| `_TaxRptgRvslOrBkgOrAdjmt` | | ✓ | | | | |
| `_UnitJointVenture` | | ✓ | | | | |
| `_HasSeveranceTaxPaytOblgn` | | ✓ | | | | |
| `_SeveranceTaxRptgType` | | ✓ | | | | |
| `_EntityIsAffectedByAudit` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_MasterDataRecordingLvl` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_PrimaryGeogrlLocation` | | ✓ | | | | |
| `_OperatorOrPurchaserCode` | | ✓ | | | | |
| `_NMProductType` | | ✓ | | | | |
| `_NMEntityAffiliationCode` | | ✓ | | | | |
| `_NMTransactionCode` | | ✓ | | | | |

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
| `_TaxClassification` | `I_TaxClassification` | [0..1] |
| `_TaxRptgRvslOrBkgOrAdjmt` | `I_TaxRptgRvslOrBkgOrAdjmtCode` | [0..1] |
| `_UnitJointVenture` | `I_PRAJointVenture` | [0..1] |
| `_HasSeveranceTaxPaytOblgn` | `I_Indicator` | [0..1] |
| `_SeveranceTaxRptgType` | `I_Indicator` | [0..1] |
| `_EntityIsAffectedByAudit` | `I_Indicator` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_MasterDataRecordingLvl` | `I_PRATaxMstrDataRecgLvl` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_PrimaryGeogrlLocation` | `I_PrimaryGeogrlLocation` | [0..1] |
| `_OperatorOrPurchaserCode` | `I_PRAOperatorOrPurchaserCode` | [0..1] |
| `_NMProductType` | `I_PRATaxNMProductType` | [0..1] |
| `_NMEntityAffiliationCode` | `I_PRATaxNMEntityAffiliationCd` | [0..1] |
| `_NMTransactionCode` | `I_PRATaxNMTransactionCode` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTORYNEWMEXICO')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTORYNEWMEXICO')/$value)*

```abap
@EndUserText.label: 'PRA Tax Reporting History New Mexico'
@Analytics.dataCategory: #CUBE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTAXRPTGHISTNM'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

//@ObjectModel.representativeKey: ''

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.sapObjectNodeType.name: 'PRANewMexicoTaxRptgHist'

define view I_PRATaxRptgHistoryNewMexico
  as select from oiux8_nm_taxhst
  association [0..1] to I_CompanyCode                 as _CompanyCode              on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_PRAProduct                  as _Product                  on  $projection.Product = _Product.Product
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
  association [0..1] to I_TaxRptgRvslOrBkgOrAdjmtCode as _TaxRptgRvslOrBkgOrAdjmt  on  $projection.TaxRptgRvslOrBkgOrAdjmt = _TaxRptgRvslOrBkgOrAdjmt.TaxRptgRvslOrBkgOrAdjmt
  association [0..1] to I_PRAJointVenture             as _UnitJointVenture         on  $projection.CompanyCode      = _UnitJointVenture.CompanyCode
                                                                                   and $projection.UnitJointVenture = _UnitJointVenture.PRAJointVenture
  association [0..1] to I_Indicator                   as _HasSeveranceTaxPaytOblgn on  $projection.HasSeveranceTaxPaytOblgn = _HasSeveranceTaxPaytOblgn.IndicatorValue
  association [0..1] to I_Indicator                   as _SeveranceTaxRptgType     on  $projection.SeveranceTaxRptgType = _SeveranceTaxRptgType.IndicatorValue
  association [0..1] to I_Indicator                   as _EntityIsAffectedByAudit  on  $projection.EntityIsAffectedByAudit = _EntityIsAffectedByAudit.IndicatorValue

  association [0..1] to I_Currency                    as _Currency                 on  $projection.CompanyCodeCurrency = _Currency.Currency
  association [0..1] to I_UnitOfMeasure               as _UnitOfMeasure            on  $projection.BaseUnit = _UnitOfMeasure.UnitOfMeasure
  association [0..1] to I_PRATaxMstrDataRecgLvl       as _MasterDataRecordingLvl   on  $projection.MasterDataRecordingLvl = _MasterDataRecordingLvl.MasterDataRecordingLvl
  association [0..1] to I_Country                     as _Country                  on  $projection.Country = _Country.Country
  association [0..1] to I_PrimaryGeogrlLocation       as _PrimaryGeogrlLocation    on  $projection.Country               = _PrimaryGeogrlLocation.Country
                                                                                   and $projection.PrimaryGeogrlLocation = _PrimaryGeogrlLocation.PrimaryGeogrlLocation

  association [0..1] to I_PRAOperatorOrPurchaserCode  as _OperatorOrPurchaserCode  on  $projection.OperatorOrPurchaserCode = _OperatorOrPurchaserCode.OperatorOrPurchaserCode
  association [0..1] to I_PRATaxNMProductType         as _NMProductType            on  $projection.ProductType = _NMProductType.ProductType
  association [0..1] to I_PRATaxNMEntityAffiliationCd as _NMEntityAffiliationCode  on  $projection.EntityAffiliationCode = _NMEntityAffiliationCode.EntityAffiliationCode
  association [0..1] to I_PRATaxNMTransactionCode     as _NMTransactionCode        on  $projection.TransactionCode = _NMTransactionCode.TransactionCode

{
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key cast(bukrs as fis_bukrs preserving type )                                                  as CompanyCode,
      @Semantics.businessDate.at: true
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
      @ObjectModel.foreignKey.association: '_TaxClassification'
  key tax_cls                                                                                    as TaxClassification,
      //No relations in DB table, No CDS views
  key suffix                                                                                     as NewMexicoTaxRptgSuffix,
      @ObjectModel.foreignKey.association: '_TaxRptgRvslOrBkgOrAdjmt'
  key oiux8_nm_taxhst.rev_book_adj_ind                                                           as TaxRptgRvslOrBkgOrAdjmt,
      @ObjectModel.foreignKey.association: '_UnitJointVenture '
      cast(unit_vname as oiu_vdm_unit_venture preserving type)                                   as UnitJointVenture,
      @ObjectModel.foreignKey.association: '_HasSeveranceTaxPaytOblgn'
      oiux8_nm_taxhst.pay_fl                                                                     as HasSeveranceTaxPaytOblgn,
      @ObjectModel.foreignKey.association: '_SeveranceTaxRptgType'
      oiux8_nm_taxhst.rpt_fl                                                                     as SeveranceTaxRptgType,
      @Semantics.unitOfMeasure: true
      uom                                                                                        as BaseUnit,
      @Semantics.currencyCode: true
      _CompanyCode.Currency                                                                      as CompanyCodeCurrency,
      //No relations in DB table
      cast(ret_lse_pc as oiu_vdm_returned_product_ratio)                                         as ReturnedProductRatio,
      //No relations in DB table
      pun                                                                                        as ProductionUnitNumber,
      @ObjectModel.foreignKey.association: '_EntityIsAffectedByAudit'
      aff_by_audit                                                                               as EntityIsAffectedByAudit,
      @ObjectModel.foreignKey.association: '_MasterDataRecordingLvl'
      master_level                                                                               as MasterDataRecordingLvl,
      @ObjectModel.foreignKey.association: '_OperatorOrPurchaserCode'
      oper_purch_ind                                                                             as OperatorOrPurchaserCode,
      spec_tax_rate_cd                                                                           as TaxRate,
      @ObjectModel.foreignKey.association: '_NMProductType'
      nm_product_code                                                                            as ProductType,
      @ObjectModel.foreignKey.association: '_NMEntityAffiliationCode'
      oiux8_nm_taxhst.affiliation_code                                                           as EntityAffiliationCode,
      @ObjectModel.foreignKey.association: '_NMTransactionCode'
      transaction_code                                                                           as TransactionCode,
      ogrid                                                                                      as ReportingIDByAgency,
      //No relations in DB table
      doc_no                                                                                     as ValuationDocumentNumber,
      @Semantics.fiscal.year: true
      doc_year                                                                                   as ValuationDocumentYear,

      // Added for FK relationship of field TaxClassification
      @ObjectModel.foreignKey.association: '_Country'
      cast('US' as land1_gp  )                                                                   as Country,
      // Added for FK relationship of field TaxClassification
      @ObjectModel.foreignKey.association: '_PrimaryGeogrlLocation'
      cast( '30' as oiu_pri_geo_loc  )                                                           as PrimaryGeogrlLocation,

      @Semantics.user.createdBy: true
      cast( oiu_cruser as fclm_bam_created_by)                                                   as CreatedByUser,
      cast(oiu_timestamp as oiu_vdm_created_on_ts)                                               as CreationDateTime,


      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      gross_vol                                                                                  as GrossVolInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      gross_val                                                                                  as GrossValInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      tax_vol                                                                                    as TaxableVolInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      tax_val                                                                                    as TaxableValInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      exempt_vol                                                                                 as TaxExmptVolInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      exempt_val                                                                                 as TaxExmptValInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast(mkt_cost_01 as oiu_vdm_marketing_cost_1)                                              as MktgCost01InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast(mkt_cost_02 as oiu_vdm_marketing_cost_2)                                              as MktgCost02InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast(mkt_cost_03 as oiu_vdm_marketing_cost_3)                                              as MktgCost03InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast(mkt_cost_04 as oiu_vdm_marketing_cost_4)                                              as MktgCost04InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast(mkt_cost_05 as oiu_vdm_marketing_cost_5)                                              as MktgCost05InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast(mkt_cost_06 as oiu_vdm_marketing_cost_6)                                              as MktgCost06InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast(mkt_cost_07 as oiu_vdm_marketing_cost_7)                                              as MktgCost07InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast(mkt_cost_08 as oiu_vdm_marketing_cost_8)                                              as MktgCost08InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast(mkt_cost_09 as oiu_vdm_marketing_cost_9)                                              as MktgCost09InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast(mkt_cost_10 as oiu_vdm_marketing_cost_10)                                             as MktgCost10InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast(mkt_cost_reimb01 as oiu_vdm_mktg_cost_reimb_1)                                        as MktgReimbmtCost1InCoCdCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast(mkt_cost_reimb02 as oiu_vdm_mktg_cost_reimb_2)                                        as MktgReimbmtCost2InCoCdCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast(mkt_cost_reimb03 as oiu_vdm_mktg_cost_reimb_3)                                        as MktgReimbmtCost3InCoCdCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast(mkt_cost_reimb04 as oiu_vdm_mktg_cost_reimb_4)                                        as MktgReimbmtCost4InCoCdCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast(mkt_cost_reimb05 as oiu_vdm_mktg_cost_reimb_5)                                        as MktgReimbmtCost5InCoCdCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast(mkt_cost_reimb06 as oiu_vdm_mktg_cost_reimb_6)                                        as MktgReimbmtCost6InCoCdCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast(mkt_cost_reimb07 as oiu_vdm_mktg_cost_reimb_7)                                        as MktgReimbmtCost7InCoCdCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast(mkt_cost_reimb08 as oiu_vdm_mktg_cost_reimb_8)                                        as MktgReimbmtCost8InCoCdCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast(mkt_cost_reimb09 as oiu_vdm_mktg_cost_reimb_9)                                        as MktgReimbmtCost9InCoCdCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast(mkt_cost_reimb10 as oiu_vdm_mktg_cost_reimb_10)                                       as MktgReimbmtCost10InCoCdCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      sv_tax_amt                                                                                 as SeveranceTaxAmtInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cn_tax_amt                                                                                 as ConservationTaxAmtInCoCdCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      es_tax_amt                                                                                 as EmergcySchoolTxAmtInCoCdCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      av_tax_amt                                                                                 as AdValoremTaxAmtInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      tax_reimb                                                                                  as TaxReimbmtAmtInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      blps_gross_vol                                                                             as GrossSalesVolInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      blps_gross_val                                                                             as GrossSalesValInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      plant_proc_allow                                                                           as TaxProcgAllwncAmtInCoCdCrcy,

      //needed to support authorization check
      cast( '/PRA/RP_WORKPLACE' as fqm_origin_trans_id )                                         as OriginTransaction,

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
      _TaxClassification,
      _TaxRptgRvslOrBkgOrAdjmt,
      _UnitJointVenture,
      _HasSeveranceTaxPaytOblgn,
      _SeveranceTaxRptgType,
      _Currency,
      _UnitOfMeasure,
      _MasterDataRecordingLvl,
      _Country,
      _PrimaryGeogrlLocation,
      _EntityIsAffectedByAudit,
      _OperatorOrPurchaserCode,
      _NMProductType,
      _NMEntityAffiliationCode,
      _NMTransactionCode

} ;
```
