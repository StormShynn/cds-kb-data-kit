---
name: I_PRATAXRPTGHISTORYND
description: "PRA Tax Reporting History North Dakota"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTORYND')/$value
semantic_en: "PRA Tax Reporting History North Dakota"
semantic_vi: "PRA Tax Reporting History North Dakota — CDS view giao diện dựa trên PRA Tax Reporting History North Dakota."
keywords:
  - "pra"
  - "tax"
  - "reporting"
  - "history"
  - "north"
  - "dakota"
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
# I_PRATAXRPTGHISTORYND

**PRA Tax Reporting History North Dakota**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTORYND')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  | `cast ( bukrs as fis_bukrs preserving type )` | `CHAR(4)` | Company Code |
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
| `TaxRptgRvslOrBkgOrAdjmt` | ✓ | |  | `rev_book_adj_ind` | `CHAR(1)` | Reversal/Booking/Adjustment |
| `ProducerOrPurchaserCode` |  | |  | `prod_purc_ind` | `CHAR(1)` | Producer or Purchaser |
| `UnitJointVenture` |  | |  | `unit_vname` | `CHAR(6)` | Joint Venture |
| `HasSeveranceTaxPaytOblgn` |  | |  | `pay_fl` | `CHAR(1)` | Tax Severance Tax Calculation Payment Obligations Types |
| `SeveranceTaxRptgType` |  | |  | `rpt_fl` | `CHAR(1)` | State Severance Tax Reporting Indicators |
| `BaseUnit` |  | |  | `uom` | `UNIT(3)` | Measurement unit |
| `CompanyCodeCurrency` |  | | `_CompanyCode` | `Currency` | `CUKY(5)` | Currency Key |
| `NorthDakotaTaxExmpWellType` |  | |  | `well_code` | `CHAR(2)` | Tax 2.0: ND Well Code |
| `NorthDakotaPostalAreaCode` |  | |  | `posting_code` | `CHAR(4)` | Tax 2.0: ND Posting Code |
| `APIWellNumber` |  | |  | `api_number` | `CHAR(8)` | Tax 2.0 ND API Number |
| `APIWellName` |  | |  | `api_name` | `CHAR(35)` | Tax 2.0 North Dakota API Name |
| `APIGravityRatio` |  | |  | `oil_gravity` | `DEC(3)` | Tax 2.0 : ND Oil Gravity |
| `ProducerOrPurchaserNmbr` |  | |  | `other_no` | `CHAR(10)` | Customer / Vendor Number |
| `FederalIDByAgency` |  | |  | `oth_fed_id_no_1` | `NUMC(9)` | Tax 2.0: Federal ID Number |
| `TaxPayerIDByAgency` |  | |  | `taxpayer_number` | `CHAR(9)` | Tax 2.0 ND Taxpayer Number |
| `Reservoir` |  | |  | `pool_code` | `CHAR(3)` | Tax 2.0: ND Pool Code |
| `ValuationDocumentNumber` |  | |  | `doc_no` | `CHAR(20)` | Val. document number |
| `ValuationDocumentYear` |  | |  | `doc_year` | `NUMC(4)` | Document year |
| `CreatedByUser` |  | |  | `cast(oiu_cruser as fclm_bam_created_by)` | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  | `cast(oiu_timestamp as oiu_vdm_created_on_ts)` | `DEC(15)` | Created On Timestamp |
| `Country` |  | |  | `cast('US' as land1_gp)` | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` |  | |  | `cast( '33' as oiu_pri_geo_loc )` | `CHAR(2)` | Primary Geographical Location |
| `OriginTransaction` |  | |  | `cast( '/PRA/RP_WORKPLACE' as fqm_origin_trans_id )` | `CHAR(32)` | Source Transaction ID |
| `OilVolumeInBarrels` |  | |  | `brl_oil_pur_sld` | `DEC(13)` | Tax 2.0 - ND Barrels Of Oil Purchased or Sold |
| `OilValueInCoCodeCrcy` |  | |  | `val_oil_pur_sld` | `CURR(13)` | Tax 2.0 - ND Oil Value Purchased Or Sold |
| `TaxExmpValInCoCodeCrcy` |  | |  | `exempt_value` | `CURR(13)` | Tax 2.0 ND Ex Val Pur/Sold |
| `TaxableOilValInCoCodeCrcy` |  | |  | `tax_value_oil` | `CURR(13)` | Tax 2.0 - ND Oil Taxable Value |
| `ProdnTaxDueAmtInCoCodeCrcy` |  | |  | `pr_tax_due` | `CURR(13)` | Tax 2.0 - ND Production Tax Due |
| `ProdnTxPrevPaidAmtInCoCdCrcy` |  | |  | `pr_tax_prev` | `CURR(13)` | Tax 2.0 - ND Tax Previously Paid |
| `ProdnTaxOthPaidAmtInCoCdCrcy` |  | |  | `pr_tax_others` | `CURR(13)` | Tax 2.0 ND Production Tax Paid By Others |
| `ProdnTaxPaidAmtInCoCodeCrcy` |  | |  | `pr_tax_paid` | `CURR(13)` | Tax 2.0 - ND Production Tax Paid By Report |
| `ExtractnTxDueAmtInCoCodeCrcy` |  | |  | `ex_tax_due` | `CURR(13)` | Tax 2.0 - ND Extraction Tax Due |
| `ExtractnTxPrevAmtInCoCdCrcy` |  | |  | `ex_tax_prev` | `CURR(13)` | Tax 2.0 - ND Extraction Tax Previously Paid |
| `ExtractnTaxOthAmtInCoCdCrcy` |  | |  | `ex_tax_others` | `CURR(13)` | Tax 2.0 - ND Extraction Tax Paid By Others |
| `ExtractnTaxPaidAmtInCoCdCrcy` |  | |  | `ex_tax_paid` | `CURR(13)` | Tax 2.0 - ND Extraction Tax Paid By Report |
| `AddlValInCoCodeCrcy` |  | |  | `additional_val` | `CURR(6)` | Tax 2.0 : ND Additional Value |
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
| `MktgReimbmtCostInCoCodeCrcy` |  | |  | `mkt_cost_reimb` | `CURR(11)` | Marketing Cost Reimbursement |
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
| `_ProducerOrPurchaserCode` | | ✓ | | | | |
| `_UnitJointVenture` | | ✓ | | | | |
| `_HasSeveranceTaxPaytOblgn` | | ✓ | | | | |
| `_SeveranceTaxRptgType` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_NorthDakotaTaxExmpWellType` | | ✓ | | | | |
| `_NorthDakotaPostalAreaCode` | | ✓ | | | | |
| `_Reservoir` | | ✓ | | | | |
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
| `_TaxClassification` | `I_TaxClassification` | [0..1] |
| `_TaxRptgRvslOrBkgOrAdjmt` | `I_TaxRptgRvslOrBkgOrAdjmtCode` | [0..1] |
| `_ProducerOrPurchaserCode` | `I_ProducerOrPurchaserCode` | [0..1] |
| `_UnitJointVenture` | `I_JointVenture` | [0..1] |
| `_HasSeveranceTaxPaytOblgn` | `I_Indicator` | [0..1] |
| `_SeveranceTaxRptgType` | `I_Indicator` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [0..1] |
| `_NorthDakotaTaxExmpWellType` | `I_PRATaxNDExmpWellType` | [0..1] |
| `_NorthDakotaPostalAreaCode` | `I_PRATaxNDPostalAreaCode` | [0..1] |
| `_Reservoir` | `I_PRATaxNDReservoir` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_PrimaryGeogrlLocation` | `I_PrimaryGeogrlLocation` | [0..1] |
| `_ValuationDocumentYear` | `I_CalendarYear` | [0..1] |
| `_ValuationDocumentHdr` | `I_ValuationDocumentHdr` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTORYND')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTORYND')/$value)*

```abap
@EndUserText.label: 'PRA Tax Reporting History North Dakota'
@Analytics.dataCategory: #CUBE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTAXRPTGHISTND'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

//@ObjectModel.representativeKey: ''

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.sapObjectNodeType.name: 'PRANorthDakotaTaxRptgHist'
define view I_PRATaxRptgHistoryND
  as select from /pra/nd_taxhst
  association [0..1] to I_CompanyCode                 as _CompanyCode                on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_PRAProduct                  as _Product                    on  $projection.Product = _Product.Product
  association [0..1] to I_Well                        as _Well                       on  $projection.Well = _Well.Well
  association [0..1] to I_WellCompletion              as _WellCompletion             on  $projection.Well           = _WellCompletion.Well
                                                                                     and $projection.WellCompletion = _WellCompletion.WellCompletion
  association [0..1] to I_MeasurementPoint            as _MeasurementPoint           on  $projection.MeasurementPoint = _MeasurementPoint.MeasurementPoint
  association [0..1] to I_PRAJointVenture             as _PRAJointVenture            on  $projection.CompanyCode  = _PRAJointVenture.CompanyCode
                                                                                     and $projection.JointVenture = _PRAJointVenture.PRAJointVenture
  association [0..1] to I_DivisionOfInterest          as _DivisionOfInterest         on  $projection.CompanyCode        = _DivisionOfInterest.CompanyCode
                                                                                     and $projection.JointVenture       = _DivisionOfInterest.JointVenture
                                                                                     and $projection.DivisionOfInterest = _DivisionOfInterest.DivisionOfInterest
  association [0..1] to I_DeliveryNetwork             as _DeliveryNetwork            on  $projection.DeliveryNetwork = _DeliveryNetwork.DeliveryNetwork
  association [0..1] to I_PRAContract                 as _PRAContract                on  $projection.PRAContract = _PRAContract.PRAContract
  association [0..1] to I_VolumeType                  as _VolumeType                 on  $projection.VolumeType = _VolumeType.VolumeType
  association [0..1] to I_TaxClassification           as _TaxClassification          on  $projection.Country               = _TaxClassification.Country
                                                                                     and $projection.PrimaryGeogrlLocation = _TaxClassification.PrimaryGeogrlLocation
                                                                                     and $projection.TaxClassification     = _TaxClassification.TaxClassification
  association [0..1] to I_TaxRptgRvslOrBkgOrAdjmtCode as _TaxRptgRvslOrBkgOrAdjmt    on  $projection.TaxRptgRvslOrBkgOrAdjmt = _TaxRptgRvslOrBkgOrAdjmt.TaxRptgRvslOrBkgOrAdjmt
  association [0..1] to I_ProducerOrPurchaserCode     as _ProducerOrPurchaserCode    on  $projection.ProducerOrPurchaserCode = _ProducerOrPurchaserCode.ProducerOrPurchaserCode
  association [0..1] to I_JointVenture                as _UnitJointVenture           on  $projection.CompanyCode      = _UnitJointVenture.CompanyCode
                                                                                     and $projection.UnitJointVenture = _UnitJointVenture.JointVenture
  association [0..1] to I_Indicator                   as _HasSeveranceTaxPaytOblgn   on  $projection.HasSeveranceTaxPaytOblgn = _HasSeveranceTaxPaytOblgn.IndicatorValue
  association [0..1] to I_Indicator                   as _SeveranceTaxRptgType       on  $projection.SeveranceTaxRptgType = _SeveranceTaxRptgType.IndicatorValue
  association [0..1] to I_UnitOfMeasure               as _BaseUnit                   on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure
  association [0..1] to I_Currency                    as _CompanyCodeCurrency        on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency
  association [0..1] to I_PRATaxNDExmpWellType        as _NorthDakotaTaxExmpWellType on  $projection.NorthDakotaTaxExmpWellType = _NorthDakotaTaxExmpWellType.NorthDakotaTaxExmpWellType
  association [0..1] to I_PRATaxNDPostalAreaCode      as _NorthDakotaPostalAreaCode  on  $projection.NorthDakotaPostalAreaCode = _NorthDakotaPostalAreaCode.NorthDakotaPostalAreaCode
  association [0..1] to I_PRATaxNDReservoir           as _Reservoir                  on  $projection.Reservoir = _Reservoir.Reservoir
  association [0..1] to I_Country                     as _Country                    on  $projection.Country = _Country.Country
  association [0..1] to I_PrimaryGeogrlLocation       as _PrimaryGeogrlLocation      on  $projection.Country               = _PrimaryGeogrlLocation.Country
                                                                                     and $projection.PrimaryGeogrlLocation = _PrimaryGeogrlLocation.PrimaryGeogrlLocation
  association [0..1] to I_CalendarYear                as _ValuationDocumentYear      on  $projection.ValuationDocumentYear = _ValuationDocumentYear.CalendarYear
  association [0..1] to I_ValuationDocumentHdr        as _ValuationDocumentHdr       on  $projection.ValuationDocumentNumber = _ValuationDocumentHdr.ValuationDocumentNumber 
                                                                                     and $projection.ValuationDocumentYear = _ValuationDocumentHdr.ValuationDocumentYear

{
       @ObjectModel.foreignKey.association:'_CompanyCode'
  key  cast ( bukrs as fis_bukrs preserving type )                               as CompanyCode,
  key  sales_dt                                                                  as SalesDate,
       @ObjectModel.foreignKey.association:'_Product'
  key  pdcd                                                                      as Product,
       @ObjectModel.foreignKey.association:'_Well'
  key  wl_no                                                                     as Well,
       @ObjectModel.foreignKey.association:'_WellCompletion'
  key  wc_no                                                                     as WellCompletion,
       @ObjectModel.foreignKey.association:'_MeasurementPoint'
  key  mp_no                                                                     as MeasurementPoint,
       @ObjectModel.foreignKey.association:'_PRAJointVenture'
  key  vname                                                                     as JointVenture,
       @ObjectModel.foreignKey.association:'_DivisionOfInterest'
  key  doi_no                                                                    as DivisionOfInterest,
       @ObjectModel.foreignKey.association:'_DeliveryNetwork'
  key  dn_no                                                                     as DeliveryNetwork,
       @ObjectModel.foreignKey.association:'_PRAContract'
  key  ct_no                                                                     as PRAContract,
       @ObjectModel.foreignKey.association:'_VolumeType'
  key  vl_type_cd                                                                as VolumeType,
       @ObjectModel.foreignKey.association:'_TaxClassification'
  key  tax_cls                                                                   as TaxClassification,
       @ObjectModel.foreignKey.association:'_TaxRptgRvslOrBkgOrAdjmt'
  key  rev_book_adj_ind                                                          as TaxRptgRvslOrBkgOrAdjmt,
       @ObjectModel.foreignKey.association:'_ProducerOrPurchaserCode'
       prod_purc_ind                                                             as ProducerOrPurchaserCode,
       @ObjectModel.foreignKey.association:'_UnitJointVenture'
       unit_vname                                                                as UnitJointVenture,
       @ObjectModel.foreignKey.association: '_HasSeveranceTaxPaytOblgn'
       pay_fl                                                                    as HasSeveranceTaxPaytOblgn, 
       @ObjectModel.foreignKey.association: '_SeveranceTaxRptgType'
       rpt_fl                                                                    as SeveranceTaxRptgType, 
       @Semantics.unitOfMeasure: true
       uom                                                                       as BaseUnit,
       @Semantics.currencyCode: true
       _CompanyCode.Currency                                                     as CompanyCodeCurrency,
       @ObjectModel.foreignKey.association:'_NorthDakotaTaxExmpWellType'
       well_code                                                                 as NorthDakotaTaxExmpWellType, 
       @ObjectModel.foreignKey.association:'_NorthDakotaPostalAreaCode'
       posting_code                                                              as NorthDakotaPostalAreaCode, 
       api_number                                                                as APIWellNumber,
       api_name                                                                  as APIWellName,
       @DefaultAggregation: #SUM
       oil_gravity                                                               as APIGravityRatio, 
       other_no                                                                  as ProducerOrPurchaserNmbr,
       oth_fed_id_no_1                                                           as FederalIDByAgency,
       taxpayer_number                                                           as TaxPayerIDByAgency,
       @ObjectModel.foreignKey.association:'_Reservoir'
       pool_code                                                                 as Reservoir, 
       doc_no                                                                    as ValuationDocumentNumber,
       @ObjectModel.foreignKey.association: '_ValuationDocumentYear'
       doc_year                                                                  as ValuationDocumentYear,
       @Semantics.user.createdBy: true
       cast(oiu_cruser as fclm_bam_created_by)                                   as CreatedByUser,
       //No FK relation or Check table in DB Table
       cast(oiu_timestamp as oiu_vdm_created_on_ts)                              as CreationDateTime,
       // Added for FK relationship of field TaxClassification
       @ObjectModel.foreignKey.association: '_Country'
       cast('US' as land1_gp)                                                    as Country,
       // Added for FK relationship of field TaxClassification
       @ObjectModel.foreignKey.association: '_PrimaryGeogrlLocation'
       cast( '33' as oiu_pri_geo_loc )                                           as PrimaryGeogrlLocation,
       
       //needed to support authorization check
       cast( '/PRA/RP_WORKPLACE' as fqm_origin_trans_id )                        as OriginTransaction,
       
       //Measures
       @DefaultAggregation: #SUM
       @Semantics.quantity.unitOfMeasure: 'BaseUnit'
       brl_oil_pur_sld                                                           as OilVolumeInBarrels,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       val_oil_pur_sld                                                           as OilValueInCoCodeCrcy,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       exempt_value                                                              as TaxExmpValInCoCodeCrcy,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       tax_value_oil                                                             as TaxableOilValInCoCodeCrcy,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       pr_tax_due                                                                as ProdnTaxDueAmtInCoCodeCrcy,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       pr_tax_prev                                                               as ProdnTxPrevPaidAmtInCoCdCrcy,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       pr_tax_others                                                             as ProdnTaxOthPaidAmtInCoCdCrcy,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       pr_tax_paid                                                               as ProdnTaxPaidAmtInCoCodeCrcy,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       ex_tax_due                                                                as ExtractnTxDueAmtInCoCodeCrcy,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       ex_tax_prev                                                               as ExtractnTxPrevAmtInCoCdCrcy,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       ex_tax_others                                                             as ExtractnTaxOthAmtInCoCdCrcy,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       ex_tax_paid                                                               as ExtractnTaxPaidAmtInCoCdCrcy,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       additional_val                                                            as AddlValInCoCodeCrcy,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       mkt_cost_01                                                               as MktgCost01InCoCodeCrcy,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       mkt_cost_02                                                               as MktgCost02InCoCodeCrcy,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       mkt_cost_03                                                               as MktgCost03InCoCodeCrcy,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       mkt_cost_04                                                               as MktgCost04InCoCodeCrcy,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       mkt_cost_05                                                               as MktgCost05InCoCodeCrcy,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       mkt_cost_06                                                               as MktgCost06InCoCodeCrcy,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       mkt_cost_07                                                               as MktgCost07InCoCodeCrcy,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       mkt_cost_08                                                               as MktgCost08InCoCodeCrcy,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       mkt_cost_09                                                               as MktgCost09InCoCodeCrcy,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       mkt_cost_10                                                               as MktgCost10InCoCodeCrcy,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       mkt_cost_reimb                                                            as MktgReimbmtCostInCoCodeCrcy,
       
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
       _ProducerOrPurchaserCode,
       _UnitJointVenture,
       _HasSeveranceTaxPaytOblgn,
       _SeveranceTaxRptgType,
       _BaseUnit,
       _CompanyCodeCurrency,
       _NorthDakotaTaxExmpWellType,
       _NorthDakotaPostalAreaCode,
       _Reservoir,
       _Country,
       _PrimaryGeogrlLocation,
      _ValuationDocumentHdr,
      _ValuationDocumentYear
};
```
