---
name: I_PRATAXRPTGHISTORYKANSAS
description: "PRA Tax Reporting History Kansas"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTORYKANSAS')/$value
semantic_en: "PRA Tax Reporting History Kansas"
semantic_vi: "PRA Tax Reporting History Kansas — CDS view giao diện dựa trên PRA Tax Reporting History Kansas."
keywords:
  - "pra"
  - "tax"
  - "reporting"
  - "history"
  - "kansas"
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
# I_PRATAXRPTGHISTORYKANSAS

**PRA Tax Reporting History Kansas**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTORYKANSAS')/$value) |

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
| `TaxExmpCertNmbr` |  | |  | `certificate_no` | `CHAR(3)` | Exemption Certificate Number |
| `ValuationDocumentNumber` |  | |  | `doc_no` | `CHAR(20)` | Val. document number |
| `ValuationDocumentYear` |  | |  | `doc_year` | `NUMC(4)` | Document year |
| `OperatorOrPurchaserCode` |  | |  | `oper_purc_ind` | `CHAR(1)` | Tax Reporting: Kansas Operator and Purchaser Indicators |
| `UnitJointVenture` |  | |  | `cast(unit_vname as oiu_vdm_unit_venture preserving type)` | `CHAR(6)` | Unit Venture |
| `HasSeveranceTaxPaytOblgn` |  | |  | `pay_fl` | `CHAR(1)` | Tax Severance Tax Calculation Payment Obligations Types |
| `SeveranceTaxRptgType` |  | |  | `rpt_fl` | `CHAR(1)` | State Severance Tax Reporting Indicators |
| `CompanyCodeCurrency` |  | | `_CompanyCode` | `Currency` | `CUKY(5)` | Currency Key |
| `BaseUnit` |  | |  | `uom` | `UNIT(3)` | Measurement unit |
| `ReportingAgencyLease` |  | |  | `lease_number` | `CHAR(7)` | Kansas Lease Number |
| `TaxExemptCode` |  | |  | `exm_proc_flag` | `CHAR(1)` | Tax Reporting - Kansas Exemption |
| `CreatedByUser` |  | |  | `cast(oiu_cruser as fclm_bam_created_by)` | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  | `cast(oiu_timestamp as oiu_vdm_created_on_ts)` | `DEC(15)` | Created On Timestamp |
| `Country` |  | |  | `cast('US' as land1_gp)` | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` |  | |  | `cast( '15' as oiu_pri_geo_loc )` | `CHAR(2)` | Primary Geographical Location |
| `OriginTransaction` |  | |  | `cast( '/PRA/RP_WORKPLACE' as fqm_origin_trans_id )` | `CHAR(32)` | Source Transaction ID |
| `GrossVolInBaseUnit` |  | |  | `gross_vol` | `DEC(13)` | Gross Volume |
| `GrossValInCoCodeCrcy` |  | |  | `gross_val` | `CURR(11)` | Gross Value |
| `TaxableVolInBaseUnit` |  | |  | `tax_vol` | `DEC(13)` | Taxable Volume |
| `TaxableValInCoCodeCrcy` |  | |  | `tax_val` | `CURR(11)` | Taxable Value |
| `TaxExmptVolInBaseUnit` |  | |  | `exempt_vol` | `DEC(13)` | Exempt Volume |
| `TaxExmptValInCoCodeCrcy` |  | |  | `exempt_val` | `CURR(11)` | Exempt Value |
| `WetGasLessResidueGasVolInMCF` |  | |  | `wlr_vol` | `DEC(13)` | Tax 2.0 Kansas Wetgas Less Residue |
| `TaxAssmtValInCoCodeCrcy` |  | |  | `kcc_ass_due` | `CURR(11)` | KCC Assessment Value |
| `SeveranceTaxAmtInCoCodeCrcy` |  | |  | `sev_tax_due` | `CURR(11)` | Taxable Liability |
| `MktgCostInCoCodeCrcy` |  | |  | `mkt_cost` | `CURR(11)` | Marketing Cost |
| `MktgReimbmtCostInCoCodeCrcy` |  | |  | `mkt_cost_reimb` | `CURR(11)` | Marketing Cost Reimbursement |
| `TaxReimbmtAmtInCoCodeCrcy` |  | |  | `tax_reimb` | `CURR(11)` | Tax Reimbursement |
| `_CompanyCode` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_Well` | | ✓ | | | | |
| `_WellCompletion` | | ✓ | | | | |
| `_MeasurementPoint` | | ✓ | | | | |
| `_PRAJointVenture` | | ✓ | | | | |
| `_UnitJointVenture` | | ✓ | | | | |
| `_DivisionOfInterest` | | ✓ | | | | |
| `_DeliveryNetwork` | | ✓ | | | | |
| `_PRAContract` | | ✓ | | | | |
| `_VolumeType` | | ✓ | | | | |
| `_TaxClassification` | | ✓ | | | | |
| `_TaxRptgRvslOrBkgOrAdjmt` | | ✓ | | | | |
| `_OperatorOrPurchaserCode` | | ✓ | | | | |
| `_HasSeveranceTaxPaytOblgn` | | ✓ | | | | |
| `_SeveranceTaxRptgType` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_ReportingAgencyLease` | | ✓ | | | | |
| `_TaxExemptCode` | | ✓ | | | | |
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
| `_UnitJointVenture` | `I_PRAJointVenture` | [0..1] |
| `_DivisionOfInterest` | `I_DivisionOfInterest` | [0..1] |
| `_DeliveryNetwork` | `I_DeliveryNetwork` | [0..1] |
| `_PRAContract` | `I_PRAContract` | [0..1] |
| `_VolumeType` | `I_VolumeType` | [0..1] |
| `_TaxClassification` | `I_TaxClassification` | [0..1] |
| `_TaxRptgRvslOrBkgOrAdjmt` | `I_TaxRptgRvslOrBkgOrAdjmtCode` | [0..1] |
| `_OperatorOrPurchaserCode` | `I_PRAOperatorOrPurchaserCode` | [0..1] |
| `_HasSeveranceTaxPaytOblgn` | `I_Indicator` | [0..1] |
| `_SeveranceTaxRptgType` | `I_Indicator` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_ReportingAgencyLease` | `I_PRATaxKansasLease` | [0..1] |
| `_TaxExemptCode` | `I_PRATaxKansasExmptType` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_PrimaryGeogrlLocation` | `I_PrimaryGeogrlLocation` | [0..1] |
| `_ValuationDocumentYear` | `I_CalendarYear` | [0..1] |
| `_ValuationDocumentHdr` | `I_ValuationDocumentHdr` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTORYKANSAS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTORYKANSAS')/$value)*

```abap
@EndUserText.label: 'PRA Tax Reporting History Kansas'
@Analytics.dataCategory: #CUBE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTAXRPTGHISTKS'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

//@ObjectModel.representativeKey: ''

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.sapObjectNodeType.name: 'PRAKansasTaxRptgHist'

define view I_PRATaxRptgHistoryKansas
  as select from /pra/ks_taxhst
  association [0..1] to I_CompanyCode                 as _CompanyCode              on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_PRAProduct                  as _Product                  on  $projection.Product = _Product.Product
  association [0..1] to I_Well                        as _Well                     on  $projection.Well = _Well.Well
  association [0..1] to I_WellCompletion              as _WellCompletion           on  $projection.Well           = _WellCompletion.Well
                                                                                   and $projection.WellCompletion = _WellCompletion.WellCompletion
  association [0..1] to I_MeasurementPoint            as _MeasurementPoint         on  $projection.MeasurementPoint = _MeasurementPoint.MeasurementPoint
  association [0..1] to I_PRAJointVenture             as _PRAJointVenture          on  $projection.CompanyCode  = _PRAJointVenture.CompanyCode
                                                                                   and $projection.JointVenture = _PRAJointVenture.PRAJointVenture
  association [0..1] to I_PRAJointVenture             as _UnitJointVenture         on  $projection.CompanyCode      = _UnitJointVenture.CompanyCode
                                                                                   and $projection.UnitJointVenture = _UnitJointVenture.PRAJointVenture
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
  association [0..1] to I_PRAOperatorOrPurchaserCode  as _OperatorOrPurchaserCode  on  $projection.OperatorOrPurchaserCode = _OperatorOrPurchaserCode.OperatorOrPurchaserCode
  association [0..1] to I_Indicator                   as _HasSeveranceTaxPaytOblgn on  $projection.HasSeveranceTaxPaytOblgn = _HasSeveranceTaxPaytOblgn.IndicatorValue
  association [0..1] to I_Indicator                   as _SeveranceTaxRptgType     on  $projection.SeveranceTaxRptgType = _SeveranceTaxRptgType.IndicatorValue
  association [0..1] to I_Currency                     as _Currency                on  $projection.CompanyCodeCurrency = _Currency.Currency
  association [0..1] to I_UnitOfMeasure               as _UnitOfMeasure            on  $projection.BaseUnit = _UnitOfMeasure.UnitOfMeasure
  association [0..1] to I_PRATaxKansasLease           as _ReportingAgencyLease     on  $projection.ReportingAgencyLease = _ReportingAgencyLease.ReportingAgencyLease
  association [0..1] to I_PRATaxKansasExmptType       as _TaxExemptCode            on  $projection.TaxExemptCode = _TaxExemptCode.TaxExemptCode
  association [0..1] to I_Country                     as _Country                  on  $projection.Country = _Country.Country
  association [0..1] to I_PrimaryGeogrlLocation       as _PrimaryGeogrlLocation    on  $projection.Country               = _PrimaryGeogrlLocation.Country
                                                                                   and $projection.PrimaryGeogrlLocation = _PrimaryGeogrlLocation.PrimaryGeogrlLocation
  association [0..1] to I_CalendarYear                as _ValuationDocumentYear    on  $projection.ValuationDocumentYear = _ValuationDocumentYear.CalendarYear
  association [0..1] to I_ValuationDocumentHdr        as _ValuationDocumentHdr     on  $projection.ValuationDocumentNumber = _ValuationDocumentHdr.ValuationDocumentNumber 
                                                                                   and $projection.ValuationDocumentYear = _ValuationDocumentHdr.ValuationDocumentYear

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
      @ObjectModel.foreignKey.association: '_TaxRptgRvslOrBkgOrAdjmt'
  key rev_book_adj_ind                                                          as TaxRptgRvslOrBkgOrAdjmt,

      certificate_no                                                            as TaxExmpCertNmbr,
      doc_no                                                                    as ValuationDocumentNumber,
      @ObjectModel.foreignKey.association: '_ValuationDocumentYear'
      doc_year                                                                  as ValuationDocumentYear,
      @ObjectModel.foreignKey.association: '_OperatorOrPurchaserCode'
      oper_purc_ind                                                             as OperatorOrPurchaserCode,
      @ObjectModel.foreignKey.association: '_UnitJointVenture'
      cast(unit_vname as oiu_vdm_unit_venture preserving type)                  as UnitJointVenture,
      @ObjectModel.foreignKey.association: '_HasSeveranceTaxPaytOblgn'
      pay_fl                                                                    as HasSeveranceTaxPaytOblgn,
      @ObjectModel.foreignKey.association: '_SeveranceTaxRptgType'
      rpt_fl                                                                    as SeveranceTaxRptgType,

      @Semantics.currencyCode: true
      _CompanyCode.Currency                                                     as CompanyCodeCurrency,
      @Semantics.unitOfMeasure: true
      uom                                                                       as BaseUnit,

      @ObjectModel.foreignKey.association: '_ReportingAgencyLease'
      lease_number                                                              as ReportingAgencyLease,
      @ObjectModel.foreignKey.association: '_TaxExemptCode'
      exm_proc_flag                                                             as TaxExemptCode,

      @Semantics.user.createdBy: true
      cast(oiu_cruser as fclm_bam_created_by)                                   as CreatedByUser,
      cast(oiu_timestamp  as oiu_vdm_created_on_ts)                             as CreationDateTime,
      // Added for FK relationship of field TaxClassification
      @ObjectModel.foreignKey.association: '_Country'
      cast('US' as land1_gp)                                                    as Country,
      // Added for FK relationship of field TaxClassification
      @ObjectModel.foreignKey.association: '_PrimaryGeogrlLocation'
      cast( '15' as oiu_pri_geo_loc )                                           as PrimaryGeogrlLocation,

      //needed to support authorization check
      cast( '/PRA/RP_WORKPLACE' as fqm_origin_trans_id )                        as OriginTransaction,

      //Measures
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
      exempt_vol                                                                as TaxExmptVolInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      exempt_val                                                                as TaxExmptValInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      wlr_vol                                                                   as WetGasLessResidueGasVolInMCF,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      kcc_ass_due                                                               as TaxAssmtValInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      sev_tax_due                                                               as SeveranceTaxAmtInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      mkt_cost                                                                  as MktgCostInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      mkt_cost_reimb                                                            as MktgReimbmtCostInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      tax_reimb                                                                 as TaxReimbmtAmtInCoCodeCrcy,

      _CompanyCode,
      _Well,
      _WellCompletion,
      _MeasurementPoint,
      _PRAJointVenture,
      _DivisionOfInterest,
      _DeliveryNetwork,
      _PRAContract,
      _TaxClassification,
      _Product,
      _TaxRptgRvslOrBkgOrAdjmt,
      _OperatorOrPurchaserCode,
      _UnitJointVenture,
      _VolumeType,
      _HasSeveranceTaxPaytOblgn,
      _SeveranceTaxRptgType,
      _UnitOfMeasure,
      _Currency,
      _ReportingAgencyLease,
      _TaxExemptCode,
      _Country,
      _PrimaryGeogrlLocation,
      _ValuationDocumentHdr,
      _ValuationDocumentYear

}
```
