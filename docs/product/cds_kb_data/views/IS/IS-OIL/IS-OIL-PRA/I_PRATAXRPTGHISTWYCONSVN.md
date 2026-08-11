---
name: I_PRATAXRPTGHISTWYCONSVN
description: "PRA Tax Reporting Hist WY Conservation"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTWYCONSVN')/$value
semantic_en: "PRA Tax Reporting Hist WY Conservation"
semantic_vi: "PRA Tax Reporting Hist WY Conservation — CDS view giao diện dựa trên oiux6_wy_ctaxhst."
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
# I_PRATAXRPTGHISTWYCONSVN

**PRA Tax Reporting Hist WY Conservation**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTWYCONSVN')/$value) |

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
| `TaxRptgRvslOrBkgOrAdjmt` | ✓ | |  | `rev_book_adj_ind` | `CHAR(1)` | Tax 2.0 - Reversal/Booking/Reversal Adjustment/Adjustment |
| `ProducerOrPurchaserCode` |  | |  | `prod_purc_ind` | `CHAR(1)` | Producer or Purchaser |
| `UnitJointVenture` |  | |  | `unit_vname` | `CHAR(6)` | Joint Venture |
| `HasSeveranceTaxPaytOblgn` |  | |  | `pay_fl` | `CHAR(1)` | Tax Severance Tax Calculation Payment Obligations Types |
| `SeveranceTaxRptgType` |  | |  | `rpt_fl` | `CHAR(1)` | State Severance Tax Reporting Indicators |
| `BaseUnit` |  | |  | `uom` | `UNIT(3)` | Measurement unit |
| `CompanyCodeCurrency` |  | | `_CompanyCode` | `Currency` | `CUKY(5)` | Currency Key |
| `ReturnedProductRatio` |  | |  | `ret_lse_pc` | `DEC(6)` | Percent Returned to Lease |
| `County` |  | |  | `county` | `CHAR(3)` | Tax 2.0 - Wyoming County Identifier |
| `APIWellNumber` |  | |  | `api_well_number` | `CHAR(5)` | Tax 2.0 - Wyoming API Well Number |
| `WyomingTaxRptgSideTrackNmbr` |  | |  | `side_track_no` | `CHAR(2)` | Tax 2.0 - Wyoming Side Track Number |
| `Reservoir` |  | |  | `reservoir` | `CHAR(3)` | Tax 2.0 - Wyoming Reservoir |
| `TaxRptgGroupNumber` |  | |  | `rpt_grp_no` | `CHAR(5)` | Tax 2.0 - Wyoming Report Group Number |
| `GeologicFieldName` |  | |  | `field_name` | `CHAR(35)` | Tax 2.0 - Wyoming Field Name |
| `AgencyLeaseOrUnitName` |  | |  | `lease_unit_name` | `CHAR(35)` | Tax 2.0 - Wyoming Lease Unit Name / API |
| `EntityIsCompanyOperated` |  | |  | `operated_flag` | `CHAR(1)` | Tax 2.0 - Operated Flag |
| `District` |  | |  | `tax_district` | `NUMC(4)` | Tax 2.0 - Wyoming Tax District |
| `PlantName` |  | |  | `gas_plant_name` | `CHAR(35)` | Tax 2.0 - WY Gas Plant Name |
| `MasterDataRecordingLvl` |  | |  | `master_level` | `CHAR(1)` | Texas Master Data Level |
| `OperatorIDByAgency` |  | |  | `operator_id` | `CHAR(4)` | Tax 2.0 - Wyoming Operator ID |
| `OperatorName` |  | |  | `operator_name` | `CHAR(38)` | Tax 2.0 - Operator Name |
| `PurchaserName` |  | |  | `purchaser_name` | `CHAR(38)` | Tax 2.0 - Purchaser Name |
| `ProductType` |  | |  | `ogind` | `CHAR(1)` | Oil and Gas Indicator |
| `ValuationDocumentNumber` |  | |  | `doc_no` | `CHAR(20)` | Val. document number |
| `ValuationDocumentYear` |  | |  | `doc_year` | `NUMC(4)` | Document year |
| `Operator` |  | |  | `operator` | `CHAR(10)` | Master Record |
| `Purchaser` |  | |  | `purchaser` | `CHAR(10)` | Master Record |
| `CreatedByUser` |  | |  | `cast(oiu_cruser as fclm_bam_created_by)` | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  | `cast(oiu_timestamp as oiu_vdm_created_on_ts)` | `DEC(15)` | Created On Timestamp |
| `Country` |  | |  | `cast('US' as land1_gp )` | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` |  | |  | `cast( '49' as oiu_pri_geo_loc )` | `CHAR(2)` | Primary Geographical Location |
| `OriginTransaction` |  | |  | `cast( '/PRA/RP_WORKPLACE' as fqm_origin_trans_id )` | `CHAR(32)` | Source Transaction ID |
| `GrossVolInBaseUnit` |  | |  | `gross_vol` | `DEC(12)` | Gross Volume |
| `TaxableVolInBaseUnit` |  | |  | `tax_vol` | `DEC(12)` | Taxable Volume |
| `TaxableValInCoCodeCrcy` |  | |  | `tax_val` | `CURR(11)` | Taxable Value |
| `TaxExmptVolInBaseUnit` |  | |  | `exempt_vol` | `DEC(12)` | Exempt Volume |
| `GrossTaxAmtInCoCodeCrcy` |  | |  | `tax_amt` | `CURR(11)` | Tax Amount |
| `TaxReimbmtAmtInCoCodeCrcy` |  | |  | `tax_reimb` | `CURR(11)` | Tax Reimbursement |
| `WetGasLessResidueGasVolInMCF` |  | |  | `wet_less_res` | `DEC(12)` | Tax 2.0 - Wet Less Residue Volume (MCF) |
| `GrossSalesVolInBaseUnit` |  | |  | `blps_gross_vol` | `DEC(12)` | Tax 2.0 - Wyoming Before Lease Plant Split Gross Volume |
| `PlantProcgVolInBaseUnit` |  | |  | `plant_proc_vol` | `DEC(12)` | Tax 2.0 - Wyoming Plant Processing Volume |
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
| `_EntityIsCompanyOperated` | | ✓ | | | | |
| `_MasterDataRecordingLvl` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_PrimaryGeogrlLocation` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_ProducerOrPurchaserCode` | | ✓ | | | | |
| `_County` | | ✓ | | | | |
| `_ProductType` | | ✓ | | | | |
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
| `_EntityIsCompanyOperated` | `I_Indicator` | [0..1] |
| `_MasterDataRecordingLvl` | `I_PRATaxMstrDataRecgLvl` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_PrimaryGeogrlLocation` | `I_PrimaryGeogrlLocation` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_ProducerOrPurchaserCode` | `I_ProducerOrPurchaserCode` | [0..1] |
| `_County` | `I_SecondaryGeogrlLocation` | [0..1] |
| `_ProductType` | `I_PRATaxWYProductType` | [0..1] |
| `_ValuationDocumentYear` | `I_CalendarYear` | [0..1] |
| `_ValuationDocumentHdr` | `I_ValuationDocumentHdr` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTWYCONSVN')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTWYCONSVN')/$value)*

```abap
@EndUserText.label: 'PRA Tax Reporting Hist WY Conservation'
@Analytics.dataCategory: #CUBE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTXRPTGHWYC'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.sapObjectNodeType.name: 'PRAWyomingConsvnTaxRptgHist'
define view I_PRATaxRptgHistWYConsvn
  as select from oiux6_wy_ctaxhst
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
  association [0..1] to I_Indicator                   as _EntityIsCompanyOperated  on  $projection.EntityIsCompanyOperated = _EntityIsCompanyOperated.IndicatorValue
  association [0..1] to I_PRATaxMstrDataRecgLvl       as _MasterDataRecordingLvl   on  $projection.MasterDataRecordingLvl = _MasterDataRecordingLvl.MasterDataRecordingLvl
  association [0..1] to I_Country                     as _Country                  on  $projection.Country = _Country.Country
  association [0..1] to I_PrimaryGeogrlLocation       as _PrimaryGeogrlLocation    on  $projection.Country               = _PrimaryGeogrlLocation.Country
                                                                                   and $projection.PrimaryGeogrlLocation = _PrimaryGeogrlLocation.PrimaryGeogrlLocation
  association [0..1] to I_Currency                    as _Currency                 on  $projection.CompanyCodeCurrency = _Currency.Currency
  association [0..1] to I_UnitOfMeasure               as _UnitOfMeasure            on  $projection.BaseUnit = _UnitOfMeasure.UnitOfMeasure
  association [0..1] to I_ProducerOrPurchaserCode     as _ProducerOrPurchaserCode  on  $projection.ProducerOrPurchaserCode = _ProducerOrPurchaserCode.ProducerOrPurchaserCode
  association [0..1] to I_SecondaryGeogrlLocation     as _County                   on  $projection.Country               = _County.Country
                                                                                   and $projection.PrimaryGeogrlLocation = _County.PrimaryGeogrlLocation
                                                                                   and $projection.County                = _County.SecondaryGeogrlLocation
  association [0..1] to I_PRATaxWYProductType         as _ProductType              on  $projection.ProductType = _ProductType.ProductType
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
      @ObjectModel.foreignKey.association: '_ProducerOrPurchaserCode'
      prod_purc_ind                                                                              as ProducerOrPurchaserCode,
      @ObjectModel.foreignKey.association: '_UnitJointVenture'
      unit_vname                                                                                 as UnitJointVenture,
      @ObjectModel.foreignKey.association: '_HasSeveranceTaxPaytOblgn'
      pay_fl                                                                                     as HasSeveranceTaxPaytOblgn,
      @ObjectModel.foreignKey.association: '_SeveranceTaxRptgType'
      rpt_fl                                                                                     as SeveranceTaxRptgType,

      @Semantics.unitOfMeasure: true
      uom                                                                                        as BaseUnit,
      @Semantics.currencyCode: true
      _CompanyCode.Currency                                                                      as CompanyCodeCurrency,

      @DefaultAggregation: #SUM
      ret_lse_pc                                                                                 as ReturnedProductRatio,
      @ObjectModel.foreignKey.association: '_County'
      county                                                                                     as County,
      api_well_number                                                                            as APIWellNumber,
      side_track_no                                                                              as WyomingTaxRptgSideTrackNmbr,
      reservoir                                                                                  as Reservoir,
      rpt_grp_no                                                                                 as TaxRptgGroupNumber,
      field_name                                                                                 as GeologicFieldName,
      lease_unit_name                                                                            as AgencyLeaseOrUnitName,
      @ObjectModel.foreignKey.association: '_EntityIsCompanyOperated'
      operated_flag                                                                              as EntityIsCompanyOperated,
      tax_district                                                                               as District,
      gas_plant_name                                                                             as PlantName,
      @ObjectModel.foreignKey.association: '_MasterDataRecordingLvl'
      master_level                                                                               as MasterDataRecordingLvl,
      operator_id                                                                                as OperatorIDByAgency,
      operator_name                                                                              as OperatorName,
      purchaser_name                                                                             as PurchaserName,
      @ObjectModel.foreignKey.association: '_ProductType'
      ogind                                                                                      as ProductType,
      doc_no                                                                                     as ValuationDocumentNumber,
      @ObjectModel.foreignKey.association: '_ValuationDocumentYear'
      doc_year                                                                                   as ValuationDocumentYear,
      operator                                                                                   as Operator,
      purchaser                                                                                  as Purchaser,

      @Semantics.user.createdBy: true
      cast(oiu_cruser as fclm_bam_created_by)                                                    as CreatedByUser,
      //No FK relation or Check table in DB Table
      cast(oiu_timestamp as oiu_vdm_created_on_ts)                                               as CreationDateTime,

      // Added for FK relationship of field TaxClassification
      @ObjectModel.foreignKey.association: '_Country'
      cast('US' as land1_gp  )                                                                   as Country,
      // Added for FK relationship of field TaxClassification
      @ObjectModel.foreignKey.association: '_PrimaryGeogrlLocation'
      cast( '49' as oiu_pri_geo_loc  )                                                           as PrimaryGeogrlLocation,

      //needed to support authorization check
      cast( '/PRA/RP_WORKPLACE' as fqm_origin_trans_id )                                         as OriginTransaction,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      gross_vol                                                                                  as GrossVolInBaseUnit,
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
      tax_amt                                                                                    as GrossTaxAmtInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      tax_reimb                                                                                  as TaxReimbmtAmtInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      wet_less_res                                                                               as WetGasLessResidueGasVolInMCF,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      blps_gross_vol                                                                             as GrossSalesVolInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      plant_proc_vol                                                                             as PlantProcgVolInBaseUnit,

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
      _EntityIsCompanyOperated,
      _MasterDataRecordingLvl,
      _Country,
      _PrimaryGeogrlLocation,
      _Currency,
      _UnitOfMeasure,
      _ProducerOrPurchaserCode,
      _County,
      _ProductType,
      _ValuationDocumentHdr,
      _ValuationDocumentYear

}
```
