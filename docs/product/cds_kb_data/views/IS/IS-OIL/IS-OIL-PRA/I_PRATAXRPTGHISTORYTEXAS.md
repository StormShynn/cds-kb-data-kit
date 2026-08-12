---
name: I_PRATAXRPTGHISTORYTEXAS
description: "PRA Tax Reporting History Texas"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTORYTEXAS')/$value
semantic_en: "PRA Tax Reporting History Texas"
semantic_vi: "PRA Tax Reporting History Texas — CDS view giao diện dựa trên oiux3_tx_taxhst."
keywords:
  - "pra"
  - "tax"
  - "reporting"
  - "history"
  - "texas"
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
# I_PRATAXRPTGHISTORYTEXAS

**PRA Tax Reporting History Texas**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTORYTEXAS')/$value) |

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
| `SeveranceTaxType` | ✓ | |  | `tax_type` | `CHAR(2)` | Severance Tax Type |
| `TierTaxType` | ✓ | |  | `tier_tax_ind` | `CHAR(1)` | Tier Tax |
| `TaxRptgRvslOrBkgOrAdjmt` | ✓ | |  | `rev_book_adj_ind` | `CHAR(1)` | Reversal/Booking/Adjustment |
| `ProducerOrPurchaserCode` |  | |  | `prod_purc_ind` | `CHAR(1)` | Producer or Purchaser |
| `UnitJointVenture` |  | |  | `cast( unit_vname as /pra/unit_vname preserving type )` | `CHAR(6)` | Unit Venture |
| `HasSeveranceTaxPaytOblgn` |  | |  | `pay_fl` | `CHAR(1)` | Tax Severance Tax Calculation Payment Obligations Types |
| `SeveranceTaxRptgType` |  | |  | `rpt_fl` | `CHAR(1)` | State Severance Tax Reporting Indicators |
| `APIWellNumber` |  | |  | `api_well_number` | `CHAR(8)` | API Well Number |
| `TexasCounty` |  | |  | `county` | `NUMC(3)` | Texas County Identifier |
| `ReportingAgencyLease` |  | |  | `lease_number` | `CHAR(7)` | Texas Lease Number |
| `OnOrOffLeaseSale` |  | |  | `off_lease_cd` | `CHAR(1)` | Texas On-/Off-Lease Sale Code |
| `MasterDataRecordingLvl` |  | |  | `master_level` | `CHAR(1)` | Texas Master Data Level |
| `OtherPartyTaxPayerIDByAgency` |  | |  | `other_party_no` | `CHAR(11)` | Texas Taxpayer Number of Other Party |
| `ProducerOrPurchaserNmbr` |  | |  | `cast(other_party as oiu_vdm_producer_purchaser preserving type )` | `CHAR(10)` | Producer/Purchaser |
| `CommodityType` |  | |  | `commodity_type` | `CHAR(3)` | Texas Commodity Type |
| `TaxExmpType` |  | |  | `exemption_type` | `NUMC(2)` | Texas Exemption Type |
| `TaxPayerIDByAgency` |  | |  | `taxpayer_number` | `NUMC(11)` | Texas Taxpayer Number |
| `TaxPayerName` |  | |  | `taxpayer_name` | `CHAR(100)` | Taxpayer Name |
| `CreatedByUser` |  | |  | `cast( oiu_cruser as fclm_bam_created_by )` | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  | `cast( oiu_timestamp as oiu_vdm_created_on_ts )` | `DEC(15)` | Created On Timestamp |
| `NumberOfItems` |  | |  | `cast( 1 as oiu_vdm_no_of_items )` | `INT4(10)` | Number of Items |
| `Country` |  | |  | `cast( 'US ' as land1_gp )` | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` |  | |  | `cast( '42' as oiu_pri_geo_loc )` | `CHAR(2)` | Primary Geographical Location |
| `OriginTransaction` |  | |  | `cast( '/PRA/RP_WORKPLACE' as fqm_origin_trans_id )` | `CHAR(32)` | Source Transaction ID |
| `BaseUnit` |  | |  | `uom` | `UNIT(3)` | Measurement unit |
| `CompanyCodeCurrency` |  | | `_CompanyCode` | `Currency` | `CUKY(5)` | Currency Key |
| `APIGravityRatio` |  | |  | `gravity` | `DEC(3)` | Gravity |
| `TransacVolInBaseUnit` |  | |  | `lease_gross_vol` | `DEC(12)` | Lease Gross Volume |
| `GrossVolInBaseUnit` |  | |  | `gross_vol` | `DEC(12)` | Gross Volume |
| `GrossValInCoCodeCrcy` |  | |  | `gross_val` | `CURR(11)` | Gross Value |
| `TaxableVolInBaseUnit` |  | |  | `tax_vol` | `DEC(12)` | Taxable Volume |
| `TaxableValInCoCodeCrcy` |  | |  | `tax_val` | `CURR(11)` | Taxable Value |
| `TaxExmptVolInBaseUnit` |  | |  | `exempt_vol` | `DEC(12)` | Exempt Volume |
| `TaxExmptValInCoCodeCrcy` |  | |  | `exempt_val` | `CURR(11)` | Exempt Value |
| `MktgCostInCoCodeCrcy` |  | |  | `mkt_cost` | `CURR(11)` | Marketing Cost |
| `MktgReimbmtCostInCoCodeCrcy` |  | |  | `mkt_cost_reimb` | `CURR(11)` | Marketing Cost Reimbursement |
| `GrossTaxAmtInCoCodeCrcy` |  | |  | `tax_amt` | `CURR(11)` | Tax Amount |
| `TaxReimbmtAmtInCoCodeCrcy` |  | |  | `tax_reimb` | `CURR(11)` | Tax Reimbursement |
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
| `_SeveranceTaxType` | | ✓ | | | | |
| `_TierTaxType` | | ✓ | | | | |
| `_TaxRptgRvslOrBkgOrAdjmt` | | ✓ | | | | |
| `_UnitJointVenture` | | ✓ | | | | |
| `_TexasCounty` | | ✓ | | | | |
| `_ReportingAgencyLease` | | ✓ | | | | |
| `_OnOrOffLeaseSale` | | ✓ | | | | |
| `_MasterDataRecordingLvl` | | ✓ | | | | |
| `_CommodityType` | | ✓ | | | | |
| `_ProducerOrPurchaserCode` | | ✓ | | | | |
| `_HasSeveranceTaxPaytOblgn` | | ✓ | | | | |
| `_SeveranceTaxRptgType` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_PrimaryGeogrlLocation` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |

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
| `_SeveranceTaxType` | `I_SeveranceTaxType` | [0..1] |
| `_TierTaxType` | `I_PRATierTaxType` | [0..1] |
| `_TaxRptgRvslOrBkgOrAdjmt` | `I_TaxRptgRvslOrBkgOrAdjmtCode` | [0..1] |
| `_UnitJointVenture` | `I_PRAJointVenture` | [0..1] |
| `_TexasCounty` | `I_PRATaxTexasCounty` | [0..1] |
| `_ReportingAgencyLease` | `I_PRATaxTXLease` | [0..1] |
| `_OnOrOffLeaseSale` | `I_PRATaxOnOrOffLeaseSale` | [0..1] |
| `_MasterDataRecordingLvl` | `I_PRATaxMstrDataRecgLvl` | [0..1] |
| `_CommodityType` | `I_PRATaxTXCommodityType` | [0..1] |
| `_ProducerOrPurchaserCode` | `I_ProducerOrPurchaserCode` | [0..1] |
| `_HasSeveranceTaxPaytOblgn` | `I_Indicator` | [0..1] |
| `_SeveranceTaxRptgType` | `I_Indicator` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_PrimaryGeogrlLocation` | `I_PrimaryGeogrlLocation` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTORYTEXAS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTORYTEXAS')/$value)*

```abap
@EndUserText.label: 'PRA Tax Reporting History Texas'
@Analytics.dataCategory: #CUBE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTAXHISTTX'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.sapObjectNodeType.name: 'PRATexasTaxRptgHist'

define view I_PRATaxRptgHistoryTexas 
  as select from oiux3_tx_taxhst
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
  association [0..1] to I_SeveranceTaxType            as _SeveranceTaxType         on  $projection.Country               = _SeveranceTaxType.Country
                                                                                   and $projection.PrimaryGeogrlLocation = _SeveranceTaxType.PrimaryGeogrlLocation
                                                                                   and $projection.SeveranceTaxType      = _SeveranceTaxType.SeveranceTaxType
  association [0..1] to I_PRATierTaxType              as _TierTaxType              on  $projection.TierTaxType = _TierTaxType.TierTaxType
  association [0..1] to I_TaxRptgRvslOrBkgOrAdjmtCode as _TaxRptgRvslOrBkgOrAdjmt  on  $projection.TaxRptgRvslOrBkgOrAdjmt = _TaxRptgRvslOrBkgOrAdjmt.TaxRptgRvslOrBkgOrAdjmt
  association [0..1] to I_PRAJointVenture             as _UnitJointVenture         on  $projection.CompanyCode      = _UnitJointVenture.CompanyCode
                                                                                   and $projection.UnitJointVenture = _UnitJointVenture.PRAJointVenture
  association [0..1] to I_PRATaxTexasCounty           as _TexasCounty              on  $projection.TexasCounty = _TexasCounty.TexasCounty
  association [0..1] to I_PRATaxTXLease               as _ReportingAgencyLease     on  $projection.ReportingAgencyLease = _ReportingAgencyLease.ReportingAgencyLease
  association [0..1] to I_PRATaxOnOrOffLeaseSale      as _OnOrOffLeaseSale         on  $projection.OnOrOffLeaseSale = _OnOrOffLeaseSale.OnOrOffLeaseSale
  association [0..1] to I_PRATaxMstrDataRecgLvl       as _MasterDataRecordingLvl   on  $projection.MasterDataRecordingLvl = _MasterDataRecordingLvl.MasterDataRecordingLvl
  association [0..1] to I_PRATaxTXCommodityType       as _CommodityType            on  $projection.CommodityType = _CommodityType.CommodityType
  association [0..1] to I_ProducerOrPurchaserCode     as _ProducerOrPurchaserCode  on  $projection.ProducerOrPurchaserCode = _ProducerOrPurchaserCode.ProducerOrPurchaserCode
  association [0..1] to I_Indicator                   as _HasSeveranceTaxPaytOblgn on  $projection.HasSeveranceTaxPaytOblgn = _HasSeveranceTaxPaytOblgn.IndicatorValue
  association [0..1] to I_Indicator                   as _SeveranceTaxRptgType     on  $projection.SeveranceTaxRptgType = _SeveranceTaxRptgType.IndicatorValue
  association [0..1] to I_Country                     as _Country                  on  $projection.Country = _Country.Country
  association [0..1] to I_PrimaryGeogrlLocation       as _PrimaryGeogrlLocation    on  $projection.Country               = _PrimaryGeogrlLocation.Country
                                                                                   and $projection.PrimaryGeogrlLocation = _PrimaryGeogrlLocation.PrimaryGeogrlLocation
  association [0..1] to I_UnitOfMeasure               as _BaseUnit                 on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure
  association [0..1] to I_Currency                    as _CompanyCodeCurrency      on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency
{
       @ObjectModel.foreignKey.association: '_CompanyCode'
  key  cast ( bukrs as fis_bukrs preserving type )                      as CompanyCode,
       @Semantics.businessDate.at: true
  key  sales_dt                                                         as SalesDate,
       @ObjectModel.foreignKey.association: '_Product'
  key  pdcd                                                             as Product,
       @ObjectModel.foreignKey.association: '_Well'
  key  wl_no                                                            as Well,
       @ObjectModel.foreignKey.association: '_WellCompletion'
  key  wc_no                                                            as WellCompletion,
       @ObjectModel.foreignKey.association: '_MeasurementPoint'
  key  mp_no                                                            as MeasurementPoint,
       @ObjectModel.foreignKey.association: '_PRAJointVenture'
  key  vname                                                            as JointVenture,
       @ObjectModel.foreignKey.association: '_DivisionOfInterest'
  key  doi_no                                                           as DivisionOfInterest,
       @ObjectModel.foreignKey.association: '_DeliveryNetwork'
  key  dn_no                                                            as DeliveryNetwork,
       @ObjectModel.foreignKey.association: '_PRAContract'
  key  ct_no                                                            as PRAContract,
       @ObjectModel.foreignKey.association: '_VolumeType'
  key  vl_type_cd                                                       as VolumeType,
       @ObjectModel.foreignKey.association: '_TaxClassification'
  key  tax_cls                                                          as TaxClassification,
       @ObjectModel.foreignKey.association: '_SeveranceTaxType'
  key  tax_type                                                         as SeveranceTaxType,
       @ObjectModel.foreignKey.association: '_TierTaxType'
  key  tier_tax_ind                                                     as TierTaxType,
       @ObjectModel.foreignKey.association: '_TaxRptgRvslOrBkgOrAdjmt'
  key  rev_book_adj_ind                                                 as TaxRptgRvslOrBkgOrAdjmt,
       @ObjectModel.foreignKey.association: '_ProducerOrPurchaserCode'
       prod_purc_ind                                                    as ProducerOrPurchaserCode,
       @ObjectModel.foreignKey.association: '_UnitJointVenture'
       cast( unit_vname as /pra/unit_vname  preserving type )           as UnitJointVenture,
       @ObjectModel.foreignKey.association: '_HasSeveranceTaxPaytOblgn'
       pay_fl                                                           as HasSeveranceTaxPaytOblgn,
       @ObjectModel.foreignKey.association: '_SeveranceTaxRptgType'
       rpt_fl                                                           as SeveranceTaxRptgType,
       // no association, agency reference id
       api_well_number                                                  as APIWellNumber,
       // OIUX3_TX_CNTXRF has sec geo field on db key, and is not available here
       // it appears ddic is not correct, so showing as fk on this key only
       @ObjectModel.foreignKey.association: '_TexasCounty'
       county                                                           as TexasCounty,
       @ObjectModel.foreignKey.association: '_ReportingAgencyLease'
       lease_number                                                     as ReportingAgencyLease,
       @ObjectModel.foreignKey.association: '_OnOrOffLeaseSale'
       off_lease_cd                                                     as OnOrOffLeaseSale,
       @ObjectModel.foreignKey.association: '_MasterDataRecordingLvl'
       master_level                                                     as MasterDataRecordingLvl,
       // no association, agency reference id
       other_party_no                                                   as OtherPartyTaxPayerIDByAgency,
       // no association, agency reference id
       cast(other_party as oiu_vdm_producer_purchaser preserving type ) as ProducerOrPurchaserNmbr,
       @ObjectModel.foreignKey.association: '_CommodityType'
       commodity_type                                                   as CommodityType,
       // no association, agency reference id
       exemption_type                                                   as TaxExmpType,
       // no association, agency reference id
       taxpayer_number                                                  as TaxPayerIDByAgency,
       // no association, agency reference id
       taxpayer_name                                                    as TaxPayerName,

       //adminstrative
       @Semantics.user.createdBy: true
       cast( oiu_cruser as fclm_bam_created_by )                        as CreatedByUser,
       cast( oiu_timestamp as oiu_vdm_created_on_ts )                   as CreationDateTime,

       @DefaultAggregation: #SUM
       cast( 1 as oiu_vdm_no_of_items )                                 as NumberOfItems,



       //   hard code below to get tax class and type
       //   this table is for US Texas scenarios only
       @ObjectModel.foreignKey.association: '_Country'
       cast( 'US ' as land1_gp )                                        as Country,
       @ObjectModel.foreignKey.association: '_PrimaryGeogrlLocation'
       cast( '42' as oiu_pri_geo_loc )                                  as PrimaryGeogrlLocation,

       //needed to support authorization check
       cast( '/PRA/RP_WORKPLACE' as fqm_origin_trans_id )               as OriginTransaction,

       //UOMs and Currencies
       @Semantics.unitOfMeasure: true
       uom                                                              as BaseUnit,
       @Semantics.currencyCode: true
       _CompanyCode.Currency                                            as CompanyCodeCurrency,

       // Numeric attributes
       // individual characteristics where no default aggregation should occur
       // no uom (ratio)
       @DefaultAggregation: #SUM
       gravity                                                          as APIGravityRatio,

       // Measures
       @DefaultAggregation: #SUM
       @Semantics.quantity.unitOfMeasure: 'BaseUnit'
       lease_gross_vol                                                  as TransacVolInBaseUnit,
       @DefaultAggregation: #SUM
       @Semantics.quantity.unitOfMeasure: 'BaseUnit'
       gross_vol                                                        as GrossVolInBaseUnit,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       gross_val                                                        as GrossValInCoCodeCrcy,
       @DefaultAggregation: #SUM
       @Semantics.quantity.unitOfMeasure: 'BaseUnit'
       tax_vol                                                          as TaxableVolInBaseUnit,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       tax_val                                                          as TaxableValInCoCodeCrcy,
       @DefaultAggregation: #SUM
       @Semantics.quantity.unitOfMeasure: 'BaseUnit'
       exempt_vol                                                       as TaxExmptVolInBaseUnit,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       exempt_val                                                       as TaxExmptValInCoCodeCrcy,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       mkt_cost                                                         as MktgCostInCoCodeCrcy,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       mkt_cost_reimb                                                   as MktgReimbmtCostInCoCodeCrcy,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       tax_amt                                                          as GrossTaxAmtInCoCodeCrcy,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       tax_reimb                                                        as TaxReimbmtAmtInCoCodeCrcy,
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
       _SeveranceTaxType,
       _TierTaxType,
       _TaxRptgRvslOrBkgOrAdjmt,
       _TexasCounty,
       _ReportingAgencyLease,
       _OnOrOffLeaseSale,
       _MasterDataRecordingLvl,
       _CommodityType,
       _ProducerOrPurchaserCode,
       _UnitJointVenture,
       _HasSeveranceTaxPaytOblgn,
       _SeveranceTaxRptgType,
       _Country,
       _PrimaryGeogrlLocation,
       _BaseUnit,
       _CompanyCodeCurrency
};
```
