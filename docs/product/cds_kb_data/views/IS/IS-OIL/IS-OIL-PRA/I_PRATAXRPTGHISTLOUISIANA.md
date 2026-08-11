---
name: I_PRATAXRPTGHISTLOUISIANA
description: "PRA Tax Reporting History Louisiana"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTLOUISIANA')/$value
semantic_en: "PRA Tax Reporting History Louisiana"
semantic_vi: "PRA Tax Reporting History Louisiana — CDS view giao diện dựa trên PRA Tax Reporting History Louisiana."
keywords:
  - "pra"
  - "tax"
  - "reporting"
  - "history"
  - "louisiana"
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
# I_PRATAXRPTGHISTLOUISIANA

**PRA Tax Reporting History Louisiana**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTLOUISIANA')/$value) |

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
| `UnitJointVenture` |  | |  | `unit_vname` | `CHAR(6)` | Unit venture |
| `ProducerOrPurchaserCode` |  | |  | `prod_purc_ind` | `CHAR(1)` | Producer or Purchaser |
| `ProducerOrPurchaserNmbr` |  | |  | `cast (other_no as oiu_vdm_prod_purch_num )` | `CHAR(10)` | Producer/Purchaser Number |
| `HasSeveranceTaxPaytOblgn` |  | |  | `pay_fl` | `CHAR(1)` | Tax Severance Tax Calculation Payment Obligations Types |
| `SeveranceTaxRptgType` |  | |  | `rpt_fl` | `CHAR(1)` | State Severance Tax Reporting Indicators |
| `BaseUnit` |  | |  | `cast ( uom as oiu_meas_u )` | `UNIT(3)` | Measurement unit |
| `CompanyCodeCurrency` |  | | `_CompanyCode` | `Currency` | `CUKY(5)` | Currency Key |
| `ValuationDocumentNumber` |  | |  | `doc_no` | `CHAR(20)` | Val. document number |
| `ValuationDocumentYear` |  | |  | `doc_year` | `NUMC(4)` | Document year |
| `ReportingCompany` |  | |  | `rpt_company_no` | `CHAR(6)` | Tax 2.0 LA - Reporting Company Number |
| `TaxPayerIDByAgency` |  | |  | `revenue_acct_no` | `NUMC(10)` | Tax 2.0 LA - Tax ID |
| `MasterDataRecordingLvl` |  | |  | `master_level` | `CHAR(1)` | Texas Master Data Level |
| `ReportingAgencyLease` |  | |  | `lease_no` | `NUMC(6)` | Tax 2.0 LA - Lease Number |
| `LouisianaCounty` |  | |  | `parish` | `NUMC(2)` | Tax 2.0 LA - Parish |
| `Plant` |  | |  | `plant_id` | `CHAR(5)` | Tax 2.0 LA - Plant ID |
| `ReportingName` |  | |  | `reporting_name` | `CHAR(38)` | Tax 2.0 LA - Reporting Name |
| `GeologicField` |  | |  | `field_id` | `CHAR(4)` | Tax 2.0 LA - Field ID |
| `LouisianaTaxRptgProducerCode` |  | |  | `prod_cd` | `CHAR(6)` | Tax 2.0 LA - Producer Code |
| `EntityIsCompanyOperated` |  | |  | `operated_fl` | `CHAR(1)` | Operated flag |
| `LouisianaTaxRptgPurchaserCode` |  | |  | `other_cd` | `CHAR(6)` | Tax 2.0 LA - Producer/Transporter Code |
| `LouisianaTaxRptgKind` |  | |  | `kind_cd` | `NUMC(1)` | Tax 2.0 LA - Kind Code |
| `TaxRate` |  | |  | `tax_rate_cd` | `CHAR(2)` | Tax 2.0 LA - Tax Rate Code |
| `IsWellDeepOrHorizontal` |  | |  | `deep_or_horiz_wl` | `CHAR(1)` | Tax 2.0 LA - Deep or Horizontal Well |
| `RejectedOrSuspendedType` |  | |  | `rej_susp_ind` | `CHAR(1)` | Rejection-Suspension Status |
| `RejectionReason` |  | |  | `rej_cd` | `CHAR(2)` | Tax 2.0 LA - Reject Code |
| `PayerCodeByAgency` |  | |  | `taxpayer_cd` | `CHAR(6)` | Tax 2.0 LA - Taxpayer Code |
| `LastChangedByUser` |  | |  | `cast( change_user as fclm_bam_changed_by )` | `CHAR(12)` | Changed By |
| `ChangedDateTime` |  | |  | `cast( change_timestamp as oiu_vdm_changed_on_ts )` | `DEC(15)` | Changed On Timestamp |
| `Country` |  | |  | `cast('US' as land1_gp)` | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` |  | |  | `cast( '17' as oiu_pri_geo_loc )` | `CHAR(2)` | Primary Geographical Location |
| `GrossVolInBaseUnit` |  | |  | `gross_vol` | `QUAN(13)` | Total Gross Volume |
| `WetGasLessResidueGasVolInMCF` |  | |  | `wet_less_residue` | `QUAN(13)` | Wet-less-residue volume |
| `TaxExmptVolInBaseUnit` |  | |  | `exempt_vol` | `QUAN(13)` | Exempt Volume |
| `TaxableVolInBaseUnit` |  | |  | `tax_vol` | `QUAN(13)` | Taxable Volume |
| `GrossValInCoCodeCrcy` |  | |  | `gross_val` | `CURR(13)` | Gross value |
| `TaxExmpValInCoCodeCrcy` |  | |  | `exempt_val` | `CURR(13)` | Exempt Value |
| `MktgCostInCoCodeCrcy` |  | |  | `mkt_cost` | `CURR(11)` | Marketing Cost |
| `FixedMktgCostInCoCodeCrcy` |  | |  | `fixed_mkt_cost` | `CURR(11)` | Tax 2.0 LA - Fixed Marketing Cost |
| `MktgReimbmtCostInCoCodeCrcy` |  | |  | `mkt_cost_reimb` | `CURR(11)` | Marketing Cost Reimbursement |
| `TaxableValInCoCodeCrcy` |  | |  | `tax_val` | `CURR(13)` | Taxable Value |
| `SeveranceTaxAmtInCoCodeCrcy` |  | |  | `sv_tax_amt` | `CURR(11)` | Tax 2.0 LA - Severance Tax amount |
| `OilFldRestoreTxAmtInCoCdCrcy` |  | |  | `rf_tax_amt` | `CURR(11)` | Tax 2.0 LA - Oil Field Restoration Fee |
| `DelinquentTxAmtDueInCoCdCrcy` |  | |  | `interest` | `CURR(11)` | Tax 2.0 LA - Interest |
| `OriginTransaction` |  | |  | `cast( '/PRA/RP_WORKPLACE' as fqm_origin_trans_id )` | `CHAR(32)` | Source Transaction ID |
| `_CompanyCode` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_Well` | | ✓ | | | | |
| `_WellCompletion` | | ✓ | | | | |
| `_MeasurementPoint` | | ✓ | | | | |
| `_JointVenture` | | ✓ | | | | |
| `_DivisionOfInterest` | | ✓ | | | | |
| `_DeliveryNetwork` | | ✓ | | | | |
| `_PRAContract` | | ✓ | | | | |
| `_VolumeType` | | ✓ | | | | |
| `_TaxClassification` | | ✓ | | | | |
| `_TaxRptgRvslOrBkgOrAdjmt` | | ✓ | | | | |
| `_UnitJointVenture` | | ✓ | | | | |
| `_ProducerOrPurchaserCode` | | ✓ | | | | |
| `_HasSeveranceTaxPaytOblgn` | | ✓ | | | | |
| `_SeveranceTaxRptgType` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_MasterDataRecordingLvl` | | ✓ | | | | |
| `_LouisianaCounty` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_GeologicField` | | ✓ | | | | |
| `_EntityIsCompanyOperated` | | ✓ | | | | |
| `_LouisianaTaxRptgKind` | | ✓ | | | | |
| `_IsWellDeepOrHorizontal` | | ✓ | | | | |
| `_RejectedOrSuspendedType` | | ✓ | | | | |
| `_RejectionReason` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_PrimaryGeogrlLocation` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_Product` | `I_PRAProduct` | [0..1] |
| `_Well` | `I_Well` | [0..1] |
| `_WellCompletion` | `I_WellCompletion` | [0..1] |
| `_MeasurementPoint` | `I_MeasurementPoint` | [0..1] |
| `_JointVenture` | `I_PRAJointVenture` | [0..1] |
| `_DivisionOfInterest` | `I_DivisionOfInterest` | [0..1] |
| `_DeliveryNetwork` | `I_DeliveryNetwork` | [0..1] |
| `_PRAContract` | `I_PRAContract` | [0..1] |
| `_VolumeType` | `I_VolumeType` | [0..1] |
| `_TaxClassification` | `I_TaxClassification` | [0..1] |
| `_TaxRptgRvslOrBkgOrAdjmt` | `I_TaxRptgRvslOrBkgOrAdjmtCode` | [0..1] |
| `_UnitJointVenture` | `I_PRAJointVenture` | [0..1] |
| `_ProducerOrPurchaserCode` | `I_ProducerOrPurchaserCode` | [0..1] |
| `_HasSeveranceTaxPaytOblgn` | `I_Indicator` | [0..1] |
| `_SeveranceTaxRptgType` | `I_Indicator` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [0..1] |
| `_MasterDataRecordingLvl` | `I_PRATaxMstrDataRecgLvl` | [0..1] |
| `_LouisianaCounty` | `I_PRALouisianaCounty` | [0..1] |
| `_Plant` | `I_PRATAXLAPlant` | [0..1] |
| `_GeologicField` | `I_PRALAGeologicField` | [0..1] |
| `_EntityIsCompanyOperated` | `I_Indicator` | [0..1] |
| `_LouisianaTaxRptgKind` | `I_LouisianaTaxRptgKind` | [0..1] |
| `_IsWellDeepOrHorizontal` | `I_Indicator` | [0..1] |
| `_RejectedOrSuspendedType` | `I_PRATaxRejectSuspendInd` | [0..1] |
| `_RejectionReason` | `I_PRATaxLARejectionReason` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_PrimaryGeogrlLocation` | `I_PrimaryGeogrlLocation` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTLOUISIANA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTLOUISIANA')/$value)*

```abap
@EndUserText.label: 'PRA Tax Reporting History Louisiana'
@Analytics.dataCategory: #CUBE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTAXRPTGLA'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.sapObjectNodeType.name: 'PRALouisianaTaxRptgHist'
define view I_PRATaxRptgHistLouisiana
  as select from /pra/t9_taxhst
  association [0..1] to I_CompanyCode                 as _CompanyCode              on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_PRAProduct                  as _Product                  on  $projection.Product = _Product.Product
  association [0..1] to I_Well                        as _Well                     on  $projection.Well = _Well.Well
  association [0..1] to I_WellCompletion              as _WellCompletion           on  $projection.Well           = _WellCompletion.Well
                                                                                   and $projection.WellCompletion = _WellCompletion.WellCompletion
  association [0..1] to I_MeasurementPoint            as _MeasurementPoint         on  $projection.MeasurementPoint = _MeasurementPoint.MeasurementPoint
  association [0..1] to I_PRAJointVenture             as _JointVenture             on  $projection.CompanyCode  = _JointVenture.CompanyCode
                                                                                   and $projection.JointVenture = _JointVenture.PRAJointVenture
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
  association [0..1] to I_ProducerOrPurchaserCode     as _ProducerOrPurchaserCode  on  $projection.ProducerOrPurchaserCode = _ProducerOrPurchaserCode.ProducerOrPurchaserCode
  association [0..1] to I_Indicator                   as _HasSeveranceTaxPaytOblgn on  $projection.HasSeveranceTaxPaytOblgn = _HasSeveranceTaxPaytOblgn.IndicatorValue
  association [0..1] to I_Indicator                   as _SeveranceTaxRptgType     on  $projection.SeveranceTaxRptgType = _SeveranceTaxRptgType.IndicatorValue
  association [0..1] to I_Currency                    as _CompanyCodeCurrency      on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency
  association [0..1] to I_PRATaxMstrDataRecgLvl       as _MasterDataRecordingLvl   on  $projection.MasterDataRecordingLvl = _MasterDataRecordingLvl.MasterDataRecordingLvl
  association [0..1] to I_PRALouisianaCounty          as _LouisianaCounty          on  $projection.LouisianaCounty = _LouisianaCounty.LouisianaCounty
  association [0..1] to I_PRATAXLAPlant               as _Plant                    on  $projection.Plant = _Plant.Plant
  association [0..1] to I_PRALAGeologicField          as _GeologicField            on  $projection.GeologicField = _GeologicField.GeologicField
  association [0..1] to I_Indicator                   as _EntityIsCompanyOperated  on  $projection.EntityIsCompanyOperated = _EntityIsCompanyOperated.IndicatorValue
  association [0..1] to I_LouisianaTaxRptgKind        as _LouisianaTaxRptgKind     on  $projection.LouisianaTaxRptgKind = _LouisianaTaxRptgKind.LouisianaTaxRptgKind
  association [0..1] to I_Indicator                   as _IsWellDeepOrHorizontal   on  $projection.IsWellDeepOrHorizontal = _IsWellDeepOrHorizontal.IndicatorValue
  association [0..1] to I_PRATaxRejectSuspendInd      as _RejectedOrSuspendedType  on  $projection.RejectedOrSuspendedType = _RejectedOrSuspendedType.RejectedOrSuspendedType
  association [0..1] to I_PRATaxLARejectionReason     as _RejectionReason          on  $projection.RejectionReason = _RejectionReason.RejectionReason
  association [0..1] to I_Country                     as _Country                  on  $projection.Country = _Country.Country
  association [0..1] to I_PrimaryGeogrlLocation       as _PrimaryGeogrlLocation    on  $projection.Country               = _PrimaryGeogrlLocation.Country
                                                                                   and $projection.PrimaryGeogrlLocation = _PrimaryGeogrlLocation.PrimaryGeogrlLocation
  association [0..1] to I_UnitOfMeasure               as _BaseUnit                 on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure
{


       @ObjectModel.foreignKey.association: '_CompanyCode'
  key  cast ( bukrs as fis_bukrs preserving type )                               as CompanyCode,
  key  sales_dt                                                                  as SalesDate,
       @ObjectModel.foreignKey.association: '_Product'
  key  pdcd                                                                      as Product,
       @ObjectModel.foreignKey.association: '_Well'
  key  wl_no                                                                     as Well,
       @ObjectModel.foreignKey.association: '_WellCompletion'
  key  wc_no                                                                     as WellCompletion,
       @ObjectModel.foreignKey.association: '_MeasurementPoint'
  key  mp_no                                                                     as MeasurementPoint,
       @ObjectModel.foreignKey.association: '_JointVenture'
  key  vname                                                                     as JointVenture,
       @ObjectModel.foreignKey.association: '_DivisionOfInterest'
  key  doi_no                                                                    as DivisionOfInterest,
       @ObjectModel.foreignKey.association: '_DeliveryNetwork'
  key  dn_no                                                                     as DeliveryNetwork,
       @ObjectModel.foreignKey.association: '_PRAContract'
  key  ct_no                                                                     as PRAContract,
       @ObjectModel.foreignKey.association: '_VolumeType'
  key  vl_type_cd                                                                as VolumeType,
       @ObjectModel.foreignKey.association: '_TaxClassification'
  key  tax_cls                                                                   as TaxClassification,
       @ObjectModel.foreignKey.association: '_TaxRptgRvslOrBkgOrAdjmt'
  key  rev_book_adj_ind                                                          as TaxRptgRvslOrBkgOrAdjmt,
       @ObjectModel.foreignKey.association: '_UnitJointVenture'
       unit_vname                                                                as UnitJointVenture,
       @ObjectModel.foreignKey.association: '_ProducerOrPurchaserCode'
       prod_purc_ind                                                             as ProducerOrPurchaserCode,
       //No Association needed,
       cast (other_no  as oiu_vdm_prod_purch_num )                               as ProducerOrPurchaserNmbr,
       @ObjectModel.foreignKey.association: '_HasSeveranceTaxPaytOblgn'
       pay_fl                                                                    as HasSeveranceTaxPaytOblgn,
       @ObjectModel.foreignKey.association: '_SeveranceTaxRptgType'
       rpt_fl                                                                    as SeveranceTaxRptgType,
       @Semantics.unitOfMeasure: true
       cast ( uom as oiu_meas_u )                                                as BaseUnit,
       @Semantics.currencyCode: true
       _CompanyCode.Currency                                                     as CompanyCodeCurrency,
       //should be associated to ValuationDocumentHeader, but the associated view has composite key
       doc_no                                                                    as ValuationDocumentNumber,
       @Semantics.fiscal.year: true
       doc_year                                                                  as ValuationDocumentYear,
       rpt_company_no                                                            as ReportingCompany,
       revenue_acct_no                                                           as TaxPayerIDByAgency,
       @ObjectModel.foreignKey.association: '_MasterDataRecordingLvl'
       master_level                                                              as MasterDataRecordingLvl,
       lease_no                                                                  as ReportingAgencyLease,
       @ObjectModel.foreignKey.association: '_LouisianaCounty'
       parish                                                                    as LouisianaCounty,
       @ObjectModel.foreignKey.association: '_Plant'
       plant_id                                                                  as Plant,
       reporting_name                                                            as ReportingName,
       @ObjectModel.foreignKey.association: '_GeologicField'
       field_id                                                                  as GeologicField,
       //No Association created, at the  suite table we have a search help /PRA/H_T9_PTCXRF
       prod_cd                                                                   as LouisianaTaxRptgProducerCode,
       @ObjectModel.foreignKey.association: '_EntityIsCompanyOperated'
       operated_fl                                                               as EntityIsCompanyOperated,
       //No Association created, at the  suite table we have a search help /PRA/H_T9_PTCXRF
       other_cd                                                                  as LouisianaTaxRptgPurchaserCode,
       @ObjectModel.foreignKey.association: '_LouisianaTaxRptgKind'
       kind_cd                                                                   as LouisianaTaxRptgKind,
       //Domain View to be created on table /PRA/C_T9_TRC for association in this view, but the table has a composite key
       tax_rate_cd                                                               as TaxRate,
       @ObjectModel.foreignKey.association: '_IsWellDeepOrHorizontal'
       deep_or_horiz_wl                                                          as IsWellDeepOrHorizontal,
       @ObjectModel.foreignKey.association: '_RejectedOrSuspendedType'
       rej_susp_ind                                                              as RejectedOrSuspendedType,
       @ObjectModel.foreignKey.association: '_RejectionReason'
       rej_cd                                                                    as RejectionReason,
       //Domain has no values!
       taxpayer_cd                                                               as PayerCodeByAgency,
       @Semantics.user.lastChangedBy: true
       cast( change_user as fclm_bam_changed_by )                                as LastChangedByUser,
       cast( change_timestamp as oiu_vdm_changed_on_ts )                         as ChangedDateTime,

       // Added for FK relationship of field TaxClassification
       @ObjectModel.foreignKey.association: '_Country'
       cast('US' as land1_gp)                                                    as Country,
       // Added for FK relationship of field TaxClassification
       @ObjectModel.foreignKey.association: '_PrimaryGeogrlLocation'
       cast( '17' as oiu_pri_geo_loc )                                           as PrimaryGeogrlLocation,
       
       @DefaultAggregation: #SUM
       @Semantics.quantity.unitOfMeasure: 'BaseUnit'
       gross_vol                                                                 as GrossVolInBaseUnit,
       @DefaultAggregation: #SUM
       @Semantics.quantity.unitOfMeasure: 'BaseUnit'
       wet_less_residue                                                          as WetGasLessResidueGasVolInMCF,
       @DefaultAggregation: #SUM
       @Semantics.quantity.unitOfMeasure: 'BaseUnit'
       exempt_vol                                                                as TaxExmptVolInBaseUnit,
       @DefaultAggregation: #SUM
       @Semantics.quantity.unitOfMeasure: 'BaseUnit'
       tax_vol                                                                   as TaxableVolInBaseUnit,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       gross_val                                                                 as GrossValInCoCodeCrcy,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       exempt_val                                                                as TaxExmpValInCoCodeCrcy,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       mkt_cost                                                                  as MktgCostInCoCodeCrcy,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       fixed_mkt_cost                                                            as FixedMktgCostInCoCodeCrcy,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       mkt_cost_reimb                                                            as MktgReimbmtCostInCoCodeCrcy,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       tax_val                                                                   as TaxableValInCoCodeCrcy,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       sv_tax_amt                                                                as SeveranceTaxAmtInCoCodeCrcy,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       rf_tax_amt                                                                as OilFldRestoreTxAmtInCoCdCrcy,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
       interest                                                                  as DelinquentTxAmtDueInCoCdCrcy,

       //needed to support authorization check
       cast( '/PRA/RP_WORKPLACE' as fqm_origin_trans_id )                        as OriginTransaction,

       _CompanyCode,
       _Product,
       _Well,
       _WellCompletion,
       _MeasurementPoint,
       _JointVenture,
       _DivisionOfInterest,
       _DeliveryNetwork,
       _PRAContract,
       _VolumeType,
       _TaxClassification,
       _TaxRptgRvslOrBkgOrAdjmt,
       _UnitJointVenture,
       _ProducerOrPurchaserCode,
       _HasSeveranceTaxPaytOblgn,
       _SeveranceTaxRptgType,
       _CompanyCodeCurrency,
       _MasterDataRecordingLvl,
       _LouisianaCounty,
       _Plant,
       _GeologicField,
       _EntityIsCompanyOperated,
       _LouisianaTaxRptgKind,
       _IsWellDeepOrHorizontal,
       _RejectedOrSuspendedType,
       _RejectionReason,
       _Country,
       _PrimaryGeogrlLocation,
       _BaseUnit
};
```
