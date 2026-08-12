---
name: I_PRAACCTGDOCSMMRYFEDPYBL
description: "PRA Acctg Document Summary Federal Pybl"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCTGDOCSMMRYFEDPYBL')/$value
semantic_en: "PRA Acctg Document Summary Federal Pybl"
semantic_vi: "PRA Acctg Document Summary Federal Pybl — CDS view giao diện dựa trên PRA Acctg Document Summary Federal Pybl."
keywords:
  - "pra"
  - "acctg"
  - "document"
  - "summary"
  - "federal"
  - "pybl"
  - "sales"
  - "date"
  - "company"
  - "code"
  - "joint"
  - "venture"
  - "division"
  - "interest"
  - "well"
tags:
  - IS
  - component:IS-OIL-PRA
  - document
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRAACCTGDOCSMMRYFEDPYBL

**PRA Acctg Document Summary Federal Pybl**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCTGDOCSMMRYFEDPYBL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDate` | ✓ | |  | `sale_dt` | `DATS(8)` | Sales Date / Month |
| `CompanyCode` | ✓ | |  | `cast ( bukrs as fis_bukrs preserving type )` | `CHAR(4)` | Company Code |
| `JointVenture` | ✓ | |  | `vname` | `CHAR(6)` | Joint Venture |
| `DivisionOfInterest` | ✓ | |  | `doi_no` | `CHAR(5)` | Division of Interest (DOI) |
| `Well` | ✓ | |  | `wl_no` | `CHAR(15)` | Well ID number |
| `WellCompletion` | ✓ | |  | `wc_no` | `CHAR(5)` | Well Completion Number |
| `PRAContract` | ✓ | |  | `vbeln` | `CHAR(10)` | Contract Number |
| `VolumeType` | ✓ | |  | `vl_type_cd` | `CHAR(2)` | Volume Type Code |
| `Product` | ✓ | |  | `pd_cd` | `CHAR(3)` | Full three char. product code (Major and Detail Products) |
| `PRAOwner` | ✓ | |  | `own_no` | `CHAR(10)` | PRA owner |
| `GLAccount` | ✓ | |  | `saknr` | `CHAR(10)` | G/L Account Number |
| `CostCenter` | ✓ | |  | `kostl` | `CHAR(10)` | Cost Center |
| `GLAccountType` |  | | `_PRAGLChartOfAccounts` | `GLAccountType` | `CHAR(2)` | Account Type |
| `PriorPeriodAdjustmentReason` |  | |  | `ppa_rsn_cd` | `CHAR(2)` | Prior Period Adjustment Reason Code |
| `DeliveryNetwork` |  | |  | `dn_no` | `CHAR(20)` | Delivery network number |
| `ProcessingException` |  | |  | `disposition_cd` | `CHAR(1)` | ONRR-2014 - Disposition Code |
| `ExceptionReason` |  | |  | `reason_cd` | `CHAR(4)` | ONRR-2014 - Reason Code |
| `VolumeUnit` |  | |  | `cast( vol_uom as oiu_vdm_volume_unit)` | `UNIT(3)` | Volume Unit |
| `EnergyUnit` |  | |  | `cast( energy_uom as oiu_vdm_energy_unit)` | `UNIT(3)` | Energy Unit |
| `CompanyCodeCurrency` |  | |  | `waers` | `CUKY(5)` | Currency Key |
| `GrossVolInVolUnit` |  | |  | `gross_vol` | `QUAN(13)` | Total Gross Volume |
| `GrossEnergyInEnergyUnit` |  | |  | `gross_energy` | `QUAN(13)` | Gross Energy |
| `GrossAmount` |  | |  | `gross_val` | `CURR(13)` | Gross value |
| `OwnerNetVolInVolUnit` |  | |  | `net_vol` | `QUAN(13)` | Owner Net Volume |
| `OwnerEnergyInEnergyUnit` |  | |  | `owner_energy` | `QUAN(13)` | Owner Energy |
| `OwnerGrossAmount` |  | |  | `owner_gross_val` | `CURR(13)` | Owner Gross Value |
| `OwnerNetAmount` |  | |  | `net_val` | `CURR(13)` | Owner Net Value |
| `_PRAOwner` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_PRAJointVenture` | | ✓ | | | | |
| `_DivisionOfInterest` | | ✓ | | | | |
| `_PRAGLAccount` | | ✓ | | | | |
| `_PRAContract` | | ✓ | | | | |
| `_VolumeType` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_VolumeUnit` | | ✓ | | | | |
| `_EnergyUnit` | | ✓ | | | | |
| `_DeliveryNetwork` | | ✓ | | | | |
| `_Well` | | ✓ | | | | |
| `_WellCompletion` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_PriorPeriodAdjustmentReason` | | ✓ | | | | |
| `_ExceptionReason` | | ✓ | | | | |
| `_ProcessingException` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PRAGLChartOfAccounts` | `P_PRAGLChartOfAccounts` | [0..1] |
| `_PRAOwner` | `I_PRAOwner` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_PRAJointVenture` | `I_PRAJointVenture` | [0..1] |
| `_DivisionOfInterest` | `I_DivisionOfInterest` | [0..1] |
| `_PRAGLAccount` | `I_PRAGLAccount` | [0..1] |
| `_PRAContract` | `I_PRAContract` | [0..1] |
| `_VolumeType` | `I_VolumeType` | [0..1] |
| `_CostCenter` | `I_PRACostCenter` | [0..*] |
| `_CompanyCodeCurrency` | `I_Currency` | [0..1] |
| `_VolumeUnit` | `I_UnitOfMeasure` | [0..1] |
| `_EnergyUnit` | `I_UnitOfMeasure` | [0..1] |
| `_DeliveryNetwork` | `I_DeliveryNetwork` | [0..1] |
| `_Well` | `I_Well` | [0..1] |
| `_WellCompletion` | `I_WellCompletion` | [0..1] |
| `_Product` | `I_PRAProduct` | [0..1] |
| `_PriorPeriodAdjustmentReason` | `I_PriorPeriodAdjustmentReason` | [0..1] |
| `_ExceptionReason` | `I_ONRRExceptionReason` | [0..1] |
| `_ProcessingException` | `I_ONRRProcessingException` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCTGDOCSMMRYFEDPYBL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCTGDOCSMMRYFEDPYBL')/$value)*

```abap
@EndUserText.label: 'PRA Acctg Document Summary Federal Pybl'
@Analytics.dataCategory: #CUBE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVSMMRYFEDPYBL'
@AccessControl.authorizationCheck: #CHECK

@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.sapObjectNodeType.name: 'PRAFederalPayableBalance'

define view I_PRAAcctgDocSmmryFedPybl
  as select from /pra/fp_pay_sum
  // below private view used to limit view complexity (no other joins) for retrieving account type as required for authorization check
  association [0..1] to P_PRAGLChartOfAccounts        as _PRAGLChartOfAccounts        on  $projection.CompanyCode = _PRAGLChartOfAccounts.CompanyCode
                                                                                      and $projection.GLAccount   = _PRAGLChartOfAccounts.GLAccount
  //
  association [0..1] to I_PRAOwner                    as _PRAOwner                    on  $projection.PRAOwner = _PRAOwner.PRAOwner
  association [0..1] to I_CompanyCode                 as _CompanyCode                 on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_PRAJointVenture             as _PRAJointVenture             on  $projection.CompanyCode  = _PRAJointVenture.CompanyCode
                                                                                      and $projection.JointVenture = _PRAJointVenture.PRAJointVenture
  association [0..1] to I_DivisionOfInterest          as _DivisionOfInterest          on  $projection.CompanyCode        = _DivisionOfInterest.CompanyCode
                                                                                      and $projection.JointVenture       = _DivisionOfInterest.JointVenture
                                                                                      and $projection.DivisionOfInterest = _DivisionOfInterest.DivisionOfInterest
  association [0..1] to I_PRAGLAccount                as _PRAGLAccount                on  $projection.CompanyCode = _PRAGLAccount.CompanyCode
                                                                                      and $projection.GLAccount   = _PRAGLAccount.GLAccount
  association [0..1] to I_PRAContract                 as _PRAContract                 on  $projection.PRAContract = _PRAContract.PRAContract
  association [0..1] to I_VolumeType                  as _VolumeType                  on  $projection.VolumeType = _VolumeType.VolumeType
  association [0..*] to I_PRACostCenter               as _CostCenter                  on  $projection.CompanyCode = _CostCenter.CompanyCode
                                                                                      and $projection.CostCenter  = _CostCenter.CostCenter

  association [0..1] to I_Currency                    as _CompanyCodeCurrency         on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency
  association [0..1] to I_UnitOfMeasure               as _VolumeUnit                  on  $projection.VolumeUnit = _VolumeUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure               as _EnergyUnit                  on  $projection.EnergyUnit = _EnergyUnit.UnitOfMeasure
  association [0..1] to I_DeliveryNetwork             as _DeliveryNetwork             on  $projection.DeliveryNetwork = _DeliveryNetwork.DeliveryNetwork
  association [0..1] to I_Well                        as _Well                        on  $projection.Well = _Well.Well
  association [0..1] to I_WellCompletion              as _WellCompletion              on  $projection.Well           = _WellCompletion.Well
                                                                                      and $projection.WellCompletion = _WellCompletion.WellCompletion
  association [0..1] to I_PRAProduct                  as _Product                     on  $projection.Product = _Product.Product
  association [0..1] to I_PriorPeriodAdjustmentReason as _PriorPeriodAdjustmentReason on  $projection.PriorPeriodAdjustmentReason = _PriorPeriodAdjustmentReason.PriorPeriodAdjustmentReason
  association [0..1] to I_ONRRExceptionReason         as _ExceptionReason             on  $projection.ExceptionReason = _ExceptionReason.ExceptionReason
  association [0..1] to I_ONRRProcessingException as _ProcessingException on $projection.ProcessingException = _ProcessingException.ProcessingException
{
      @Semantics.businessDate.at: true
  key sale_dt                                                       as SalesDate,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key  cast ( bukrs as fis_bukrs preserving type )                  as CompanyCode,
      @ObjectModel.foreignKey.association: '_PRAJointVenture'
  key vname                                                         as JointVenture,
      @ObjectModel.foreignKey.association: '_DivisionOfInterest'
  key doi_no                                                        as DivisionOfInterest,
      @ObjectModel.foreignKey.association: '_Well'
  key wl_no                                                         as Well,
      @ObjectModel.foreignKey.association: '_WellCompletion'
  key wc_no                                                         as WellCompletion,
      @ObjectModel.foreignKey.association: '_PRAContract'
  key vbeln                                                         as PRAContract,
      @ObjectModel.foreignKey.association: '_VolumeType'
  key vl_type_cd                                                    as VolumeType,
      @ObjectModel.foreignKey.association: '_Product'
  key pd_cd                                                         as Product,
      @ObjectModel.foreignKey.association: '_PRAOwner'
  key own_no                                                        as PRAOwner,
      @ObjectModel.foreignKey.association: '_PRAGLAccount'
  key saknr                                                         as GLAccount,
      @ObjectModel.foreignKey.association: '_CostCenter'
  key kostl                                                         as CostCenter,

      //    account type needed for auth check
      _PRAGLChartOfAccounts.GLAccountType,

      //    other attributes
      @ObjectModel.foreignKey.association: '_PriorPeriodAdjustmentReason'
      ppa_rsn_cd                                                    as PriorPeriodAdjustmentReason,
      @ObjectModel.foreignKey.association: '_DeliveryNetwork'
      dn_no                                                         as DeliveryNetwork,
      @ObjectModel.foreignKey.association: '_ProcessingException'
      disposition_cd                                                as ProcessingException,
      @ObjectModel.foreignKey.association: '_ExceptionReason'
      reason_cd                                                     as ExceptionReason,


      //    currencies and units
      @Semantics.unitOfMeasure: true
      cast( vol_uom as oiu_vdm_volume_unit)                         as VolumeUnit,
      @Semantics.unitOfMeasure: true
      cast( energy_uom as oiu_vdm_energy_unit)                      as EnergyUnit,
      @Semantics.currencyCode: true
      waers                                                         as CompanyCodeCurrency,

      //    gross amounts
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'VolumeUnit'
      gross_vol                                                     as GrossVolInVolUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'EnergyUnit'
      gross_energy                                                  as GrossEnergyInEnergyUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      gross_val                                                     as GrossAmount,

      //    net amounts
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'VolumeUnit'
      net_vol                                                       as OwnerNetVolInVolUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'EnergyUnit'
      owner_energy                                                  as OwnerEnergyInEnergyUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      owner_gross_val                                               as OwnerGrossAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      net_val                                                       as OwnerNetAmount,

      //    associations
      _PRAOwner,
      _PRAContract,
      _VolumeType,
      _CostCenter,
      _CompanyCode,
      _PRAJointVenture,
      _DivisionOfInterest,
      _Well,
      _WellCompletion,
      _Product,
      _PRAGLAccount,
      _CompanyCodeCurrency,
      _VolumeUnit,
      _EnergyUnit,
      _DeliveryNetwork,
      _PriorPeriodAdjustmentReason,
      _ExceptionReason,
      _ProcessingException
};
```
