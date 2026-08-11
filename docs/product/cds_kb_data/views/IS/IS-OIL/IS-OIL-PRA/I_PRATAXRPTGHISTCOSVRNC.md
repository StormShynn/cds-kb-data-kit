---
name: I_PRATAXRPTGHISTCOSVRNC
description: "PRA Tax Reporting History CO Severance"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTCOSVRNC')/$value
semantic_en: "PRA Tax Reporting History CO Severance"
semantic_vi: "PRA Tax Reporting History CO Severance — CDS view giao diện dựa trên PRA Tax Reporting History CO Severance."
keywords:
  - "pra"
  - "tax"
  - "reporting"
  - "history"
  - "severance"
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
# I_PRATAXRPTGHISTCOSVRNC

**PRA Tax Reporting History CO Severance**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTCOSVRNC')/$value) |

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
| `PRAOwner` | ✓ | |  | `owner_identifier` | `CHAR(14)` | Tax 2.0 CO - Owner Identifier |
| `TaxRptgRvslOrBkgOrAdjmt` | ✓ | |  | `rev_book_adj_ind` | `CHAR(1)` | Reversal/Booking/Adjustment |
| `FiscalPeriod` |  | |  | `acct_perd` | `ACCP(6)` | Tax 2.0 CO - Accounting Period |
| `UnitJointVenture` |  | |  | `unit_vname` | `CHAR(6)` | Joint Venture |
| `GLAccount` |  | |  | `saknr` | `CHAR(10)` | G/L Account Number |
| `CostCenter` |  | |  | `kostl` | `CHAR(10)` | Cost Center |
| `BaseUnit` |  | |  | `uom` | `UNIT(3)` | Base Unit of Measure |
| `CompanyCodeCurrency` |  | | `_CompanyCode` | `Currency` | `CUKY(5)` | Currency Key |
| `EntityIsTaxExempt` |  | |  | `exempt_flag` | `CHAR(1)` | Tax 2.0 CO - Exempt Flag |
| `ValuationDocumentNumber` |  | |  | `doc_no` | `CHAR(20)` | Val. document number |
| `ValuationDocumentYear` |  | |  | `doc_year` | `NUMC(4)` | Document year |
| `NetRevenueInterestRatio` |  | |  | `ownership_perc` | `CHAR(10)` | Tax 2.0 CO - Net Revenue Interest percent |
| `RevenueProcessCode` |  | |  | `rev_prcs_cd` | `CHAR(2)` | Revenue Process Code |
| `RejectedOrSuspendedType` |  | |  | `rej_susp_ind` | `CHAR(1)` | Rejection-Suspension Status |
| `RejectionReason` |  | |  | `rej_cd` | `CHAR(2)` | Tax 2.0 CO - Reject Code |
| `ColoradoAccountNumber` |  | |  | `co_acct_no` | `CHAR(10)` | Tax 2.0 CO Sev - Colorado Account Number |
| `ProductType` |  | |  | `oil_gas_ind` | `CHAR(1)` | Tax 2.0 CO - Oil/Gas Indicator |
| `SourceOfIncome` |  | |  | `source` | `CHAR(35)` | Tax 2.0 CO - Source of Income |
| `APIWellNumber` |  | |  | `api_number` | `CHAR(12)` | Tax 2.0 CO - API Number |
| `OwnerInterestCategory` |  | |  | `int_cat_cd` | `CHAR(1)` | Interest Category |
| `LastChangedByUser` |  | |  | `cast(change_user as fclm_bam_changed_by)` | `CHAR(12)` | Changed By |
| `ChangedDateTime` |  | |  | `cast(change_timestamp as oiu_vdm_changed_on_ts)` | `DEC(15)` | Changed On Timestamp |
| `Country` |  | |  | `cast('US' as land1_gp )` | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` |  | |  | `cast( '05' as oiu_pri_geo_loc )` | `CHAR(2)` | Primary Geographical Location |
| `OriginTransaction` |  | |  | `cast( '/PRA/RP_WORKPLACE' as fqm_origin_trans_id )` | `CHAR(32)` | Source Transaction ID |
| `TransacAmtInCoCodeCrcy` |  | |  | `trans_am` | `CURR(13)` | Tax 2.0 CO - Transaction Amount |
| `TransacQtyInBaseUnit` |  | |  | `trans_qy` | `DEC(13)` | Tax 2.0 CO - Transaction Quantity |
| `OwnerVolReducnInMCF` |  | |  | `pvr_am` | `QUAN(13)` | Tax 2.0 CO - PVR Amount |
| `MktgCost01InCoCodeCrcy` |  | |  | `cast(mkt_amt_1 as oiu_vdm_marketing_cost_1)` | `CURR(11)` | Marketing Cost |
| `MktgCost02InCoCodeCrcy` |  | |  | `cast(mkt_amt_2 as oiu_vdm_marketing_cost_2)` | `CURR(11)` | Marketing Cost 2 |
| `MktgCost03InCoCodeCrcy` |  | |  | `cast(mkt_amt_3 as oiu_vdm_marketing_cost_3)` | `CURR(11)` | Marketing Cost 3 |
| `MktgCost04InCoCodeCrcy` |  | |  | `cast(mkt_amt_4 as oiu_vdm_marketing_cost_4)` | `CURR(11)` | Marketing Cost 4 |
| `MktgCost05InCoCodeCrcy` |  | |  | `cast(mkt_amt_5 as oiu_vdm_marketing_cost_5)` | `CURR(11)` | Marketing Cost 5 |
| `MktgCost06InCoCodeCrcy` |  | |  | `cast(mkt_amt_6 as oiu_vdm_marketing_cost_6)` | `CURR(11)` | Marketing Cost 6 |
| `MktgCost07InCoCodeCrcy` |  | |  | `cast(mkt_amt_7 as oiu_vdm_marketing_cost_7)` | `CURR(11)` | Marketing Cost 7 |
| `MktgCost08InCoCodeCrcy` |  | |  | `cast(mkt_amt_8 as oiu_vdm_marketing_cost_8)` | `CURR(11)` | Marketing Cost 8 |
| `MktgCost09InCoCodeCrcy` |  | |  | `cast(mkt_amt_9 as oiu_vdm_marketing_cost_9)` | `CURR(11)` | Marketing Cost 9 |
| `MktgCost10InCoCodeCrcy` |  | |  | `cast(mkt_amt_10 as oiu_vdm_marketing_cost_10)` | `CURR(11)` | Marketing Cost 10 |
| `AdValoremTaxAmtInCoCodeCrcy` |  | |  | `av_tax_amt` | `CURR(11)` | Tax 2.0 CO - Ad Valorem Tax amount |
| `GrossVolInBaseUnit` |  | |  | `total_volume` | `QUAN(13)` | Total Gross Volume |
| `TranspCostInCoCodeCrcy` |  | |  | `transportation` | `CURR(13)` | Tax 2.0 CO - Transportation Cost |
| `ProcgAndMfgCostInCoCodeCrcy` |  | |  | `av_tax_amt` | `CURR(11)` | Tax 2.0 CO - Ad Valorem Tax amount |
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
| `_UnitJointVenture` | | ✓ | | | | |
| `_PRAGLAccount` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_TaxRptgRvslOrBkgOrAdjmt` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_EntityIsTaxExempt` | | ✓ | | | | |
| `_RevenueProcessCode` | | ✓ | | | | |
| `_RejectedOrSuspendedType` | | ✓ | | | | |
| `_RejectionReason` | | ✓ | | | | |
| `_ProductType` | | ✓ | | | | |
| `_OwnerInterestCategory` | | ✓ | | | | |
| `_PrimaryGeogrlLocation` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
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
| `_UnitJointVenture` | `I_PRAJointVenture` | [0..1] |
| `_PRAGLAccount` | `I_PRAGLAccount` | [0..1] |
| `_CostCenter` | `I_PRACostCenter` | [0..*] |
| `_TaxRptgRvslOrBkgOrAdjmt` | `I_TaxRptgRvslOrBkgOrAdjmtCode` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_EntityIsTaxExempt` | `I_Indicator` | [0..1] |
| `_RevenueProcessCode` | `I_PRATaxRevenueProcessCode` | [0..1] |
| `_RejectedOrSuspendedType` | `I_PRATaxRejectSuspendInd` | [0..1] |
| `_RejectionReason` | `I_PRATaxCORejectionReason` | [0..1] |
| `_ProductType` | `I_PRATaxCOProductType` | [0..1] |
| `_OwnerInterestCategory` | `I_OwnerInterestCategory` | [0..1] |
| `_PrimaryGeogrlLocation` | `I_PrimaryGeogrlLocation` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_ValuationDocumentYear` | `I_CalendarYear` | [0..1] |
| `_ValuationDocumentHdr` | `I_ValuationDocumentHdr` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTCOSVRNC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTCOSVRNC')/$value)*

```abap
@EndUserText.label: 'PRA Tax Reporting History CO Severance'
@Analytics.dataCategory: #CUBE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTXRPTGHCOS'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.sapObjectNodeType.name: 'PRAColoradoSvrncTaxRptgHist'
define view I_PRATaxRptgHistCOSvrnc
as select from /pra/ta_itaxhst
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
  association [0..1] to I_PRAJointVenture             as _UnitJointVenture         on  $projection.CompanyCode      = _UnitJointVenture.CompanyCode
                                                                                   and $projection.UnitJointVenture = _UnitJointVenture.PRAJointVenture
  association [0..1] to I_PRAGLAccount                as _PRAGLAccount             on  $projection.CompanyCode = _PRAGLAccount.CompanyCode
                                                                                   and $projection.GLAccount   = _PRAGLAccount.GLAccount

  association [0..*] to I_PRACostCenter               as _CostCenter               on  $projection.CompanyCode = _CostCenter.CompanyCode
                                                                                   and $projection.CostCenter  = _CostCenter.CostCenter
  association [0..1] to I_TaxRptgRvslOrBkgOrAdjmtCode as _TaxRptgRvslOrBkgOrAdjmt  on  $projection.TaxRptgRvslOrBkgOrAdjmt = _TaxRptgRvslOrBkgOrAdjmt.TaxRptgRvslOrBkgOrAdjmt
  association [0..1] to I_Country                     as _Country                  on  $projection.Country = _Country.Country
  association [0..1] to I_Indicator                   as _EntityIsTaxExempt        on  $projection.EntityIsTaxExempt = _EntityIsTaxExempt.IndicatorValue
  association [0..1] to I_PRATaxRevenueProcessCode    as _RevenueProcessCode       on  $projection.RevenueProcessCode = _RevenueProcessCode.RevenueProcessCode
  association [0..1] to I_PRATaxRejectSuspendInd      as _RejectedOrSuspendedType  on  $projection.RejectedOrSuspendedType = _RejectedOrSuspendedType.RejectedOrSuspendedType
  association [0..1] to I_PRATaxCORejectionReason     as _RejectionReason          on  $projection.RejectionReason = _RejectionReason.RejectionReason
  association [0..1] to I_PRATaxCOProductType         as _ProductType              on  $projection.ProductType = _ProductType.ProductType
  association [0..1] to I_OwnerInterestCategory       as _OwnerInterestCategory    on  $projection.OwnerInterestCategory = _OwnerInterestCategory.OwnerInterestCategory
  association [0..1] to I_PrimaryGeogrlLocation       as _PrimaryGeogrlLocation    on  $projection.Country               = _PrimaryGeogrlLocation.Country
                                                                                   and $projection.PrimaryGeogrlLocation = _PrimaryGeogrlLocation.PrimaryGeogrlLocation
  association [0..1] to I_Currency                    as _Currency                 on  $projection.CompanyCodeCurrency = _Currency.Currency
  association [0..1] to I_UnitOfMeasure               as _UnitOfMeasure            on  $projection.BaseUnit = _UnitOfMeasure.UnitOfMeasure
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
  key owner_identifier                                                                           as PRAOwner,
      @ObjectModel.foreignKey.association: '_TaxRptgRvslOrBkgOrAdjmt'
  key rev_book_adj_ind                                                                           as TaxRptgRvslOrBkgOrAdjmt,
      acct_perd                                                                                  as FiscalPeriod,
      @ObjectModel.foreignKey.association: '_UnitJointVenture'
      unit_vname                                                                                 as UnitJointVenture,
      @ObjectModel.foreignKey.association: '_PRAGLAccount'
      saknr                                                                                      as GLAccount,
      @ObjectModel.foreignKey.association: '_CostCenter'
      kostl                                                                                      as CostCenter,

      @Semantics.unitOfMeasure: true
      uom                                                                                        as BaseUnit,
      @Semantics.currencyCode: true
      _CompanyCode.Currency                                                                      as CompanyCodeCurrency,
      @ObjectModel.foreignKey.association: '_EntityIsTaxExempt'
      exempt_flag                                                                                as EntityIsTaxExempt,
      doc_no                                                                                     as ValuationDocumentNumber,
      @ObjectModel.foreignKey.association: '_ValuationDocumentYear'
      doc_year                                                                                   as ValuationDocumentYear,
      ownership_perc                                                                             as NetRevenueInterestRatio,
      @ObjectModel.foreignKey.association: '_RevenueProcessCode'
      rev_prcs_cd                                                                                as RevenueProcessCode,
      @ObjectModel.foreignKey.association: '_RejectedOrSuspendedType'
      rej_susp_ind                                                                               as RejectedOrSuspendedType,
      @ObjectModel.foreignKey.association: '_RejectionReason'
      rej_cd                                                                                     as RejectionReason,
      co_acct_no                                                                                 as ColoradoAccountNumber,
      @ObjectModel.foreignKey.association: '_ProductType'
      oil_gas_ind                                                                                as ProductType,
      source                                                                                     as SourceOfIncome,
      api_number                                                                                 as APIWellNumber,
      @ObjectModel.foreignKey.association: '_OwnerInterestCategory'
      int_cat_cd                                                                                 as OwnerInterestCategory,

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
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      trans_am                                                                                   as TransacAmtInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      trans_qy                                                                                   as TransacQtyInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      pvr_am                                                                                     as OwnerVolReducnInMCF,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast(mkt_amt_1 as oiu_vdm_marketing_cost_1)                                                as MktgCost01InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast(mkt_amt_2 as oiu_vdm_marketing_cost_2)                                                as MktgCost02InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast(mkt_amt_3 as oiu_vdm_marketing_cost_3)                                                as MktgCost03InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast(mkt_amt_4 as oiu_vdm_marketing_cost_4)                                                as MktgCost04InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast(mkt_amt_5 as oiu_vdm_marketing_cost_5)                                                as MktgCost05InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast(mkt_amt_6 as oiu_vdm_marketing_cost_6)                                                as MktgCost06InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast(mkt_amt_7 as oiu_vdm_marketing_cost_7)                                                as MktgCost07InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast(mkt_amt_8 as oiu_vdm_marketing_cost_8)                                                as MktgCost08InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast(mkt_amt_9 as oiu_vdm_marketing_cost_9)                                                as MktgCost09InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast(mkt_amt_10 as oiu_vdm_marketing_cost_10)                                              as MktgCost10InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      av_tax_amt                                                                                 as AdValoremTaxAmtInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      total_volume                                                                               as GrossVolInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      transportation                                                                             as TranspCostInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      av_tax_amt                                                                                 as ProcgAndMfgCostInCoCodeCrcy,

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
      _UnitJointVenture,
      _PRAGLAccount,
      _CostCenter,
      _TaxRptgRvslOrBkgOrAdjmt,
      _EntityIsTaxExempt,
      _RevenueProcessCode,
      _RejectedOrSuspendedType,
      _RejectionReason,
      _ProductType,
      _OwnerInterestCategory,
      _Country,
      _PrimaryGeogrlLocation,
      _Currency,
      _UnitOfMeasure,
      _ValuationDocumentHdr,
      _ValuationDocumentYear
}
```
