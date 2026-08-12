---
name: I_PRATAXRPTGHISTCOCONSVN
description: "PRA Tax Reporting Hist CO Conservation"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTCOCONSVN')/$value
semantic_en: "PRA Tax Reporting Hist CO Conservation"
semantic_vi: "PRA Tax Reporting Hist CO Conservation — CDS view giao diện dựa trên PRA Tax Reporting Hist CO Conservation."
keywords:
  - "pra"
  - "tax"
  - "reporting"
  - "hist"
  - "conservation"
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
# I_PRATAXRPTGHISTCOCONSVN

**PRA Tax Reporting Hist CO Conservation**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTCOCONSVN')/$value) |

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
| `TaxRptgRvslOrBkgOrAdjmt` | ✓ | |  | `rev_book_adj_ind` | `CHAR(1)` | Reversal/Booking/Adjustment |
| `UnitJointVenture` |  | |  | `unit_vname` | `CHAR(6)` | Unit Venture |
| `ProducerOrPurchaserCode` |  | |  | `prod_purc_ind` | `CHAR(1)` | Producer or Purchaser |
| `ProducerOrPurchaserNmbr` |  | |  | `other_no` | `CHAR(10)` | Customer / Vendor Number |
| `HasSeveranceTaxPaytOblgn` |  | |  | `pay_fl` | `CHAR(1)` | Tax Severance Tax Calculation Payment Obligations Types |
| `SeveranceTaxRptgType` |  | |  | `rpt_fl` | `CHAR(1)` | State Severance Tax Reporting Indicators |
| `BaseUnit` |  | |  | `uom` | `UNIT(3)` | Base Unit of Measure |
| `CompanyCodeCurrency` |  | | `_CompanyCode` | `Currency` | `CUKY(5)` | Currency Key |
| `ValuationDocumentNumber` |  | |  | `doc_no` | `CHAR(20)` | Val. document number |
| `ValuationDocumentYear` |  | |  | `doc_year` | `NUMC(4)` | Document year |
| `RejectedOrSuspendedType` |  | |  | `rej_susp_ind` | `CHAR(1)` | Rejection-Suspension Status |
| `RejectionReason` |  | |  | `rej_cd` | `CHAR(2)` | Tax 2.0 CO - Reject Code |
| `TaxPayerIDByAgency` |  | |  | `operator_no` | `NUMC(6)` | OGCC Payor |
| `ProductCodeByAgency` |  | |  | `product_cd` | `CHAR(1)` | Product Cd |
| `TaxRate` |  | |  | `levy_rate` | `DEC(7)` | Levy Rate |
| `LastChangedByUser` |  | |  | `cast(change_user as fclm_bam_changed_by)` | `CHAR(12)` | Changed By |
| `ChangedDateTime` |  | |  | `cast(change_timestamp as oiu_vdm_changed_on_ts)` | `DEC(15)` | Changed On Timestamp |
| `Country` |  | |  | `cast('US' as land1_gp )` | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` |  | |  | `cast( '05' as oiu_pri_geo_loc )` | `CHAR(2)` | Primary Geographical Location |
| `OriginTransaction` |  | |  | `cast( '/PRA/RP_WORKPLACE' as fqm_origin_trans_id )` | `CHAR(32)` | Source Transaction ID |
| `GrossVolInBaseUnit` |  | |  | `gross_vol` | `QUAN(13)` | Total Gross Volume |
| `GrossValInCoCodeCrcy` |  | |  | `gross_val` | `CURR(13)` | Gross value |
| `TaxExmptVal1InCoCdCrcy` |  | |  | `exempt_val_1` | `CURR(11)` | Charitable exempt value |
| `TaxExmptVal2InCoCdCrcy` |  | |  | `exempt_val_2` | `CURR(11)` | Federal entity exempt value |
| `TaxExmptVal3InCoCdCrcy` |  | |  | `exempt_val_3` | `CURR(11)` | US Indian exempt value |
| `TaxExmptVal4InCoCdCrcy` |  | |  | `exempt_val_4` | `CURR(11)` | State entity exempt value |
| `TaxExmptVal5InCoCdCrcy` |  | |  | `exempt_val_5` | `CURR(11)` | Other entity exempt value |
| `WetGasLessResidueGasVolInMCF` |  | |  | `wet_less_residue` | `QUAN(13)` | Wet-less-residue volume |
| `TaxExmptVolInBaseUnit` |  | |  | `exempt_vol` | `QUAN(13)` | Exempt Volume |
| `TaxableVolInBaseUnit` |  | |  | `tax_vol` | `QUAN(13)` | Taxable Volume |
| `MktgCostInCoCodeCrcy` |  | |  | `mkt_cost` | `CURR(11)` | Marketing Cost |
| `FixedMktgCostInCoCodeCrcy` |  | |  | `fixed_mkt_cost` | `CURR(11)` | Fixed Marketing Cost |
| `MktgReimbmtCostInCoCodeCrcy` |  | |  | `mkt_cost_reimb` | `CURR(11)` | Marketing Cost Reimbursement |
| `TaxableValInCoCodeCrcy` |  | |  | `tax_val` | `CURR(13)` | Taxable Value |
| `ConservationTaxAmtInCoCdCrcy` |  | |  | `cn_tax_amt` | `CURR(11)` | Conservation Tax Amount |
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
| `_UnitJointVenture` | | ✓ | | | | |
| `_HasSeveranceTaxPaytOblgn` | | ✓ | | | | |
| `_SeveranceTaxRptgType` | | ✓ | | | | |
| `_TaxRptgRvslOrBkgOrAdjmt` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_RejectedOrSuspendedType` | | ✓ | | | | |
| `_RejectionReason` | | ✓ | | | | |
| `_ProductType` | | ✓ | | | | |
| `_PrimaryGeogrlLocation` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_ProducerOrPurchaserCode` | | ✓ | | | | |
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
| `_UnitJointVenture` | `I_PRAJointVenture` | [0..1] |
| `_HasSeveranceTaxPaytOblgn` | `I_Indicator` | [0..1] |
| `_SeveranceTaxRptgType` | `I_Indicator` | [0..1] |
| `_TaxRptgRvslOrBkgOrAdjmt` | `I_TaxRptgRvslOrBkgOrAdjmtCode` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_RejectedOrSuspendedType` | `I_PRATaxRejectSuspendInd` | [0..1] |
| `_RejectionReason` | `I_PRATaxCORejectionReason` | [0..1] |
| `_ProductType` | `I_PRATaxCOProductType` | [0..1] |
| `_PrimaryGeogrlLocation` | `I_PrimaryGeogrlLocation` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_ProducerOrPurchaserCode` | `I_ProducerOrPurchaserCode` | [0..1] |
| `_ValuationDocumentYear` | `I_CalendarYear` | [0..1] |
| `_ValuationDocumentHdr` | `I_ValuationDocumentHdr` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTCOCONSVN')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTCOCONSVN')/$value)*

```abap
@EndUserText.label: 'PRA Tax Reporting Hist CO Conservation'
@Analytics.dataCategory: #CUBE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTXRPTGHCOC'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.sapObjectNodeType.name: 'PRAColoradoConsvnTaxRptgHist'
define view I_PRATaxRptgHistCOConsvn
as select from /pra/ta_taxhst
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
  association [0..1] to I_PRAJointVenture             as _UnitJointVenture         on  $projection.CompanyCode      = _UnitJointVenture.CompanyCode
                                                                                   and $projection.UnitJointVenture = _UnitJointVenture.PRAJointVenture
  association [0..1] to I_Indicator                   as _HasSeveranceTaxPaytOblgn on  $projection.HasSeveranceTaxPaytOblgn = _HasSeveranceTaxPaytOblgn.IndicatorValue
  association [0..1] to I_Indicator                   as _SeveranceTaxRptgType     on  $projection.SeveranceTaxRptgType = _SeveranceTaxRptgType.IndicatorValue
  association [0..1] to I_TaxRptgRvslOrBkgOrAdjmtCode as _TaxRptgRvslOrBkgOrAdjmt  on  $projection.TaxRptgRvslOrBkgOrAdjmt = _TaxRptgRvslOrBkgOrAdjmt.TaxRptgRvslOrBkgOrAdjmt
  association [0..1] to I_Country                     as _Country                  on  $projection.Country = _Country.Country
  association [0..1] to I_PRATaxRejectSuspendInd      as _RejectedOrSuspendedType  on  $projection.RejectedOrSuspendedType = _RejectedOrSuspendedType.RejectedOrSuspendedType
  association [0..1] to I_PRATaxCORejectionReason     as _RejectionReason          on  $projection.RejectionReason = _RejectionReason.RejectionReason
  association [0..1] to I_PRATaxCOProductType         as _ProductType              on  $projection.ProductCodeByAgency = _ProductType.ProductType
  association [0..1] to I_PrimaryGeogrlLocation       as _PrimaryGeogrlLocation    on  $projection.Country               = _PrimaryGeogrlLocation.Country
                                                                                   and $projection.PrimaryGeogrlLocation = _PrimaryGeogrlLocation.PrimaryGeogrlLocation
  association [0..1] to I_Currency                    as _Currency                 on  $projection.CompanyCodeCurrency = _Currency.Currency
  association [0..1] to I_UnitOfMeasure               as _UnitOfMeasure            on  $projection.BaseUnit = _UnitOfMeasure.UnitOfMeasure
  association [0..1] to I_ProducerOrPurchaserCode     as _ProducerOrPurchaserCode  on  $projection.ProducerOrPurchaserCode = _ProducerOrPurchaserCode.ProducerOrPurchaserCode
  association [0..1] to I_CalendarYear                as _ValuationDocumentYear    on  $projection.ValuationDocumentYear = _ValuationDocumentYear.CalendarYear
  association [0..1] to I_ValuationDocumentHdr        as _ValuationDocumentHdr     on  $projection.ValuationDocumentNumber = _ValuationDocumentHdr.ValuationDocumentNumber
                                                                                   and $projection.ValuationDocumentYear = _ValuationDocumentHdr.ValuationDocumentYear
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
      @ObjectModel.foreignKey.association: '_TaxRptgRvslOrBkgOrAdjmt'
  key rev_book_adj_ind                                                                           as TaxRptgRvslOrBkgOrAdjmt,
      @ObjectModel.foreignKey.association: '_UnitJointVenture'
      unit_vname                                                                                 as UnitJointVenture,
      @ObjectModel.foreignKey.association: '_ProducerOrPurchaserCode'
      prod_purc_ind                                                                              as ProducerOrPurchaserCode,
      other_no                                                                                   as ProducerOrPurchaserNmbr,
      @ObjectModel.foreignKey.association: '_HasSeveranceTaxPaytOblgn'
      pay_fl                                                                                     as HasSeveranceTaxPaytOblgn,
      @ObjectModel.foreignKey.association: '_SeveranceTaxRptgType'
      rpt_fl                                                                                     as SeveranceTaxRptgType,

      @Semantics.unitOfMeasure: true
      uom                                                                                        as BaseUnit,
      @Semantics.currencyCode: true
      _CompanyCode.Currency                                                                      as CompanyCodeCurrency,
      doc_no                                                                                     as ValuationDocumentNumber,
      @ObjectModel.foreignKey.association: '_ValuationDocumentYear'
      doc_year                                                                                   as ValuationDocumentYear,
      @ObjectModel.foreignKey.association: '_RejectedOrSuspendedType'
      rej_susp_ind                                                                               as RejectedOrSuspendedType,
      @ObjectModel.foreignKey.association: '_RejectionReason'
      rej_cd                                                                                     as RejectionReason,
      operator_no                                                                                as TaxPayerIDByAgency,
      @ObjectModel.foreignKey.association: '_ProductType'
      product_cd                                                                                 as ProductCodeByAgency,
      @DefaultAggregation: #SUM
      levy_rate                                                                                  as TaxRate,

      @Semantics.user.lastChangedBy: true
      cast(change_user as fclm_bam_changed_by)                                                   as LastChangedByUser,
      //No FK relation or Check table in DB Table
      cast(change_timestamp as oiu_vdm_changed_on_ts)                                            as ChangedDateTime,

      // Added for FK relationship of field TaxClassification
      @ObjectModel.foreignKey.association: '_Country'
      cast('US' as land1_gp  )                                                                   as Country,
      // Added for FK relationship of field TaxClassification
      @ObjectModel.foreignKey.association: '_PrimaryGeogrlLocation'
      cast( '05' as oiu_pri_geo_loc  )                                                           as PrimaryGeogrlLocation,

      //needed to support authorization check
      cast( '/PRA/RP_WORKPLACE' as fqm_origin_trans_id )                                         as OriginTransaction,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      gross_vol                                                                                  as GrossVolInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      gross_val                                                                                  as GrossValInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      exempt_val_1                                                                               as TaxExmptVal1InCoCdCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      exempt_val_2                                                                               as TaxExmptVal2InCoCdCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      exempt_val_3                                                                               as TaxExmptVal3InCoCdCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      exempt_val_4                                                                               as TaxExmptVal4InCoCdCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      exempt_val_5                                                                               as TaxExmptVal5InCoCdCrcy,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      wet_less_residue                                                                           as WetGasLessResidueGasVolInMCF,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      exempt_vol                                                                                 as TaxExmptVolInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      tax_vol                                                                                    as TaxableVolInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      mkt_cost                                                                                   as MktgCostInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      fixed_mkt_cost                                                                             as FixedMktgCostInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      mkt_cost_reimb                                                                             as MktgReimbmtCostInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      tax_val                                                                                    as TaxableValInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cn_tax_amt                                                                                 as ConservationTaxAmtInCoCdCrcy,

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
      _UnitJointVenture,
      _HasSeveranceTaxPaytOblgn,
      _SeveranceTaxRptgType,
      _TaxRptgRvslOrBkgOrAdjmt,
      _RejectedOrSuspendedType,
      _RejectionReason,
      _ProductType,
      _Country,
      _PrimaryGeogrlLocation,
      _Currency,
      _UnitOfMeasure,
      _ProducerOrPurchaserCode,
      _ValuationDocumentHdr,
      _ValuationDocumentYear
}
```
