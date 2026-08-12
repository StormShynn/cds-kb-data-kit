---
name: I_PRATAXRPTGHISTWYGRSSPROD
description: "PRA Tax Reporting Hist WY Gross Prod Tax"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTWYGRSSPROD')/$value
semantic_en: "PRA Tax Reporting Hist WY Gross Prod Tax"
semantic_vi: "PRA Tax Reporting Hist WY Gross Prod Tax — CDS view giao diện dựa trên oiux7_wy_gtaxhst."
keywords:
  - "pra"
  - "tax"
  - "reporting"
  - "hist"
  - "gross"
  - "prod"
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
# I_PRATAXRPTGHISTWYGRSSPROD

**PRA Tax Reporting Hist WY Gross Prod Tax**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTWYGRSSPROD')/$value) |

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
| `TaxClassification` | ✓ | |  | `tax_cls` | `CHAR(4)` | Tax Class |
| `TaxTransacFormType` |  | |  | `form_type` | `CHAR(1)` | Tax 2.0 - Original / Amended / Unknown Indicator |
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
| `GeologicField` |  | |  | `field_name` | `CHAR(35)` | Tax 2.0 - Wyoming Field Name |
| `AgencyLeaseOrUnitName` |  | |  | `lease_unit_name` | `CHAR(35)` | Tax 2.0 - Wyoming Lease Unit Name / API |
| `EntityIsCompanyOperated` |  | |  | `operated_flag` | `CHAR(1)` | Tax 2.0 - Operated Flag |
| `District` |  | |  | `tax_district` | `NUMC(4)` | Tax 2.0 - Wyoming Tax District |
| `MasterDataRecordingLvl` |  | |  | `master_level` | `CHAR(1)` | Texas Master Data Level |
| `OperatorIDByAgency` |  | |  | `operator_id` | `CHAR(4)` | Tax 2.0 - Wyoming Operator ID |
| `TaxCode` |  | |  | `rate_code` | `CHAR(3)` | Tax 2.0 - Wyoming Rate Code |
| `ProductType` |  | |  | `ogind` | `CHAR(1)` | Oil and Gas Indicator |
| `ValuationDocumentNumber` |  | |  | `doc_no` | `CHAR(20)` | Val. document number |
| `ValuationDocumentYear` |  | |  | `doc_year` | `NUMC(4)` | Document year |
| `CreatedByUser` |  | |  | `cast( oiu_cruser as fclm_bam_created_by )` | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  | `cast( oiu_timestamp as oiu_vdm_created_on_ts )` | `DEC(15)` | Created On Timestamp |
| `Country` |  | |  | `cast( 'US ' as land1_gp )` | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` |  | |  | `cast( '49' as oiu_pri_geo_loc )` | `CHAR(2)` | Primary Geographical Location |
| `OriginTransaction` |  | |  | `cast( '/PRA/RP_WORKPLACE' as fqm_origin_trans_id )` | `CHAR(32)` | Source Transaction ID |
| `Plant` |  | |  | `plant_code` | `CHAR(3)` | Tax 2.0 - Wyoming Plant Code |
| `GrossVolInBaseUnit` |  | |  | `gross_vol` | `DEC(12)` | Gross Volume |
| `GrossValInCoCodeCrcy` |  | |  | `gross_val` | `CURR(11)` | Gross Value |
| `TaxableValInCoCodeCrcy` |  | |  | `tax_val` | `CURR(11)` | Taxable Value |
| `TaxExmptVal1InCoCdCrcy` |  | |  | `exempt_val_01` | `CURR(11)` | Exempt Value |
| `TaxExmptVal2InCoCdCrcy` |  | |  | `exempt_val_02` | `CURR(11)` | Exempt Value |
| `TaxExmptVal3InCoCdCrcy` |  | |  | `exempt_val_03` | `CURR(11)` | Exempt Value |
| `TaxExmptVal4InCoCdCrcy` |  | |  | `exempt_val_04` | `CURR(11)` | Exempt Value |
| `TaxExmptVal5InCoCdCrcy` |  | |  | `exempt_val_05` | `CURR(11)` | Exempt Value |
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
| `SeveranceTaxAmtInCoCodeCrcy` |  | |  | `sv_tax_amt` | `CURR(11)` | Tax 2.0 - Severance Tax Amount |
| `ArapahoTribeTaxAmtInCoCdCrcy` |  | |  | `sa_tax_amt` | `CURR(11)` | Tax 2.0 - Wyoming Shoshone Arapaho Tax Amount |
| `AdValoremTaxAmtInCoCodeCrcy` |  | |  | `av_tax_amt` | `CURR(11)` | Tax 2.0 - Wyoming Ad Valorem Tax Amount |
| `TaxPrevPaidAmtInCoCodeCrcy` |  | |  | `prev_tax_paid` | `CURR(11)` | Tax 2.0 - Previous Tax Paid |
| `TaxReimbmtAmtInCoCodeCrcy` |  | |  | `tax_reimb` | `CURR(11)` | Tax Reimbursement |
| `WetGasLessResidueGasVolInMCF` |  | |  | `wet_less_res` | `DEC(12)` | Tax 2.0 - Wet Less Residue Volume (MCF) |
| `GrossSalesVolInBaseUnit` |  | |  | `blps_gross_vol` | `DEC(12)` | Tax 2.0 - Wyoming Before Lease Plant Split Gross Volume |
| `GrossSalesValInCoCodeCrcy` |  | |  | `blps_gross_val` | `CURR(11)` | Tax 2.0 - Wyoming Before Lease Plant Split Gross Value |
| `TaxProcgAllwncAmtInCoCdCrcy` |  | |  | `plant_proc_allow` | `CURR(11)` | Tax 2.0 - Wyoming Plant Processing Allowance |
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
| `_TaxTransacFormType` | | ✓ | | | | |
| `_UnitJointVenture` | | ✓ | | | | |
| `_HasSeveranceTaxPaytOblgn` | | ✓ | | | | |
| `_SeveranceTaxRptgType` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_County` | | ✓ | | | | |
| `_EntityIsCompanyOperated` | | ✓ | | | | |
| `_MasterDataRecordingLvl` | | ✓ | | | | |
| `_TaxCode` | | ✓ | | | | |
| `_ProductType` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
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
| `_TaxTransacFormType` | `I_PRATaxWYTransFormType` | [0..1] |
| `_UnitJointVenture` | `I_PRAJointVenture` | [0..1] |
| `_HasSeveranceTaxPaytOblgn` | `I_Indicator` | [0..1] |
| `_SeveranceTaxRptgType` | `I_Indicator` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_County` | `I_SecondaryGeogrlLocation` | [0..1] |
| `_EntityIsCompanyOperated` | `I_Indicator` | [0..1] |
| `_MasterDataRecordingLvl` | `I_PRATaxMstrDataRecgLvl` | [0..1] |
| `_TaxCode` | `I_PRATaxWYRateCode` | [0..1] |
| `_ProductType` | `I_PRATaxWYProductType` | [0..1] |
| `_Plant` | `I_PRATaxWYPlantCode` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_PrimaryGeogrlLocation` | `I_PrimaryGeogrlLocation` | [0..1] |
| `_ValuationDocumentYear` | `I_CalendarYear` | [0..1] |
| `_ValuationDocumentHdr` | `I_ValuationDocumentHdr` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTWYGRSSPROD')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXRPTGHISTWYGRSSPROD')/$value)*

```abap
@EndUserText.label: 'PRA Tax Reporting Hist WY Gross Prod Tax'
@Analytics.dataCategory: #CUBE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTXRPTGHWYGP'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.sapObjectNodeType.name: 'PRAWyomingGrssProdTaxRptgHist'
define view I_PRATaxRptgHistWYGrssProd
  as select from oiux7_wy_gtaxhst
  association [0..1] to I_CompanyCode             as _CompanyCode              on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_PRAProduct              as _Product                  on  $projection.Product = _Product.Product
  association [0..1] to I_Well                    as _Well                     on  $projection.Well = _Well.Well
  association [0..1] to I_WellCompletion          as _WellCompletion           on  $projection.Well           = _WellCompletion.Well
                                                                               and $projection.WellCompletion = _WellCompletion.WellCompletion
  association [0..1] to I_MeasurementPoint        as _MeasurementPoint         on  $projection.MeasurementPoint = _MeasurementPoint.MeasurementPoint
  association [0..1] to I_PRAJointVenture         as _PRAJointVenture          on  $projection.CompanyCode  = _PRAJointVenture.CompanyCode
                                                                               and $projection.JointVenture = _PRAJointVenture.PRAJointVenture
  association [0..1] to I_DivisionOfInterest      as _DivisionOfInterest       on  $projection.CompanyCode        = _DivisionOfInterest.CompanyCode
                                                                               and $projection.JointVenture       = _DivisionOfInterest.JointVenture
                                                                               and $projection.DivisionOfInterest = _DivisionOfInterest.DivisionOfInterest
  association [0..1] to I_DeliveryNetwork         as _DeliveryNetwork          on  $projection.DeliveryNetwork = _DeliveryNetwork.DeliveryNetwork
  association [0..1] to I_PRAContract             as _PRAContract              on  $projection.PRAContract = _PRAContract.PRAContract
  association [0..1] to I_VolumeType              as _VolumeType               on  $projection.VolumeType = _VolumeType.VolumeType
  association [0..1] to I_TaxClassification       as _TaxClassification        on  $projection.Country               = _TaxClassification.Country
                                                                               and $projection.PrimaryGeogrlLocation = _TaxClassification.PrimaryGeogrlLocation
                                                                               and $projection.TaxClassification     = _TaxClassification.TaxClassification
  association [0..1] to I_PRATaxWYTransFormType   as _TaxTransacFormType       on  $projection.TaxTransacFormType = _TaxTransacFormType.TaxTransacFormType
  association [0..1] to I_PRAJointVenture         as _UnitJointVenture         on  $projection.CompanyCode      = _UnitJointVenture.CompanyCode
                                                                               and $projection.UnitJointVenture = _UnitJointVenture.PRAJointVenture
  association [0..1] to I_Indicator               as _HasSeveranceTaxPaytOblgn on  $projection.HasSeveranceTaxPaytOblgn = _HasSeveranceTaxPaytOblgn.IndicatorValue
  association [0..1] to I_Indicator               as _SeveranceTaxRptgType     on  $projection.SeveranceTaxRptgType = _SeveranceTaxRptgType.IndicatorValue
  association [0..1] to I_UnitOfMeasure           as _BaseUnit                 on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure
  association [0..1] to I_Currency                as _Currency                 on  $projection.CompanyCodeCurrency = _Currency.Currency
  association [0..1] to I_SecondaryGeogrlLocation as _County                   on  $projection.Country               = _County.Country
                                                                               and $projection.PrimaryGeogrlLocation = _County.PrimaryGeogrlLocation
                                                                               and $projection.County                = _County.SecondaryGeogrlLocation
  association [0..1] to I_Indicator               as _EntityIsCompanyOperated  on  $projection.EntityIsCompanyOperated = _EntityIsCompanyOperated.IndicatorValue
  association [0..1] to I_PRATaxMstrDataRecgLvl   as _MasterDataRecordingLvl   on  $projection.MasterDataRecordingLvl = _MasterDataRecordingLvl.MasterDataRecordingLvl
  //TaxCode
  association [0..1] to I_PRATaxWYRateCode        as _TaxCode                  on  $projection.TaxCode = _TaxCode.TaxCode
  //ProductType
  association [0..1] to I_PRATaxWYProductType     as _ProductType              on  $projection.ProductType = _ProductType.ProductType
  association [0..1] to I_PRATaxWYPlantCode       as _Plant                    on  $projection.Plant = _Plant.Plant
  association [0..1] to I_Country                 as _Country                  on  $projection.Country = _Country.Country
  association [0..1] to I_PrimaryGeogrlLocation   as _PrimaryGeogrlLocation    on  $projection.Country               = _PrimaryGeogrlLocation.Country
                                                                               and $projection.PrimaryGeogrlLocation = _PrimaryGeogrlLocation.PrimaryGeogrlLocation
  association [0..1] to I_CalendarYear            as _ValuationDocumentYear    on  $projection.ValuationDocumentYear = _ValuationDocumentYear.CalendarYear
  association [0..1] to I_ValuationDocumentHdr    as _ValuationDocumentHdr     on  $projection.ValuationDocumentNumber = _ValuationDocumentHdr.ValuationDocumentNumber
                                                                               and $projection.ValuationDocumentYear = _ValuationDocumentHdr.ValuationDocumentYear

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
      @ObjectModel.foreignKey.association: '_TaxClassification'
  key tax_cls                                                                                    as TaxClassification,
      @ObjectModel.foreignKey.association: '_TaxTransacFormType'
      form_type                                                                                  as TaxTransacFormType,
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
      field_name                                                                                 as GeologicField,
      lease_unit_name                                                                            as AgencyLeaseOrUnitName,
      operated_flag                                                                              as EntityIsCompanyOperated,
      tax_district                                                                               as District,
      @ObjectModel.foreignKey.association: '_MasterDataRecordingLvl'
      master_level                                                                               as MasterDataRecordingLvl,
      operator_id                                                                                as OperatorIDByAgency,
      @ObjectModel.foreignKey.association: '_TaxCode'
      rate_code                                                                                  as TaxCode,
      @ObjectModel.foreignKey.association: '_ProductType'
      ogind                                                                                      as ProductType,
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
      cast( '49' as oiu_pri_geo_loc )                                                            as PrimaryGeogrlLocation,

      //needed to support authorization check
      cast( '/PRA/RP_WORKPLACE' as fqm_origin_trans_id )                                         as OriginTransaction,

      //@ObjectModel.foreignKey.association: '_PlantCode'
      plant_code                                                                                 as Plant,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      gross_vol                                                                                  as GrossVolInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      gross_val                                                                                  as GrossValInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      tax_val                                                                                    as TaxableValInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      exempt_val_01                                                                              as TaxExmptVal1InCoCdCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      exempt_val_02                                                                              as TaxExmptVal2InCoCdCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      exempt_val_03                                                                              as TaxExmptVal3InCoCdCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      exempt_val_04                                                                              as TaxExmptVal4InCoCdCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      exempt_val_05                                                                              as TaxExmptVal5InCoCdCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      mkt_cost_01                                                                                as MktgCost01InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      mkt_cost_02                                                                                as MktgCost02InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      mkt_cost_03                                                                                as MktgCost03InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      mkt_cost_04                                                                                as MktgCost04InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      mkt_cost_05                                                                                as MktgCost05InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      mkt_cost_06                                                                                as MktgCost06InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      mkt_cost_07                                                                                as MktgCost07InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      mkt_cost_08                                                                                as MktgCost08InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      mkt_cost_09                                                                                as MktgCost09InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      mkt_cost_10                                                                                as MktgCost10InCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      mkt_cost_reimb                                                                             as MktgReimbmtCostInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      sv_tax_amt                                                                                 as SeveranceTaxAmtInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      sa_tax_amt                                                                                 as ArapahoTribeTaxAmtInCoCdCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      av_tax_amt                                                                                 as AdValoremTaxAmtInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      prev_tax_paid                                                                              as TaxPrevPaidAmtInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      tax_reimb                                                                                  as TaxReimbmtAmtInCoCodeCrcy,
      @DefaultAggregation: #SUM
      //@Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      wet_less_res                                                                               as WetGasLessResidueGasVolInMCF,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      blps_gross_vol                                                                             as GrossSalesVolInBaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      blps_gross_val                                                                             as GrossSalesValInCoCodeCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      plant_proc_allow                                                                           as TaxProcgAllwncAmtInCoCdCrcy,

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
      _TaxTransacFormType,
      _UnitJointVenture,
      _HasSeveranceTaxPaytOblgn,
      _SeveranceTaxRptgType,
      _BaseUnit,
      _Currency,
      _County,
      _EntityIsCompanyOperated,
      _MasterDataRecordingLvl,
      _TaxCode,
      _ProductType,
      _Plant,
      _Country,
      _PrimaryGeogrlLocation,
      _ValuationDocumentHdr,
      _ValuationDocumentYear
};
```
