---
name: I_ASSETAGREEMENTLINKDATA
description: "Asset Agreement Link Details"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETAGREEMENTLINKDATA')/$value
semantic_en: "Asset Agreement Link Details"
semantic_vi: "Asset Agreement Link Details — CDS view giao diện dựa trên cms_chg."
keywords:
  - "asset"
  - "agreement"
  - "link"
  - "details"
  - "object"
  - "collateral"
  - "description"
  - "ranking"
  - "order"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_ASSETAGREEMENTLINKDATA

**Asset Agreement Link Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETAGREEMENTLINKDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AssetAgreementUUID` | ✓ | |  | `chg_guid` | `RAW(16)` | GUID for Table CMS_CHG |
| `ObjectAssetUUID` |  | |  | `ast_guid` | `RAW(16)` | GUID for Table CMS_AST |
| `CollateralAgreementUUID` |  | |  | `cag_guid` | `RAW(16)` | GUID for Table CMS_CAG |
| `AssetAgreementDescription` |  | |  | `description` | `CHAR(30)` | Description for Charges |
| `AssetAgreementRankingOrderVal` |  | |  | `ranking_order` | `NUMC(4)` | Ranking of a Collateral Agreement in an Asset |
| `AssetAgreementSequence` |  | |  | `sequence` | `NUMC(4)` | Sequence of an Asset in a Collateral agreement |
| `AssetAgreementRegisterNumber` |  | |  | `reg_entry_no` | `CHAR(32)` | Register Number |
| `AssetAgreementRegisterDate` |  | |  | `reg_date` | `DATS(8)` | Date on which the Land Charge was Registered |
| `AssetAgreementBPShareNumerator` |  | |  | `ast_part_nr` | `INT4(10)` | Numerator in Business Partner Share of Asset |
| `AssetAgreementBPShareDnmntr` |  | |  | `ast_part_dn` | `INT4(10)` | Denominator in the Business Partner Share of Asset |
| `AssetAgreementQuantity` |  | |  | `ast_qty` | `QUAN(13)` | Size of the Asset used as Charge |
| `AssetAgreementAmount` |  | |  | `ast_value` | `CURR(17)` | Amount of Asset used as Charge |
| `AssetAgreementAssessmentAmount` |  | |  | `asmt_amt` | `CURR(17)` | Assessment amount of a charge |
| `AssetAgreementAssessmentCrcy` |  | |  | `asmt_curr` | `CUKY(5)` | CMS_DTE_CHG_ASMT_CURR |
| `AssetAgreementAssessmentDate` |  | |  | `asmt_date` | `DATS(8)` | Date of assessment |
| `AssetAgreementValidFromDate` |  | |  | `cast( substring(valid_from, 2, 8 ) as cms_dte_date )` | `DATS(8)` | Date |
| `AssetAgreementValidToDate` |  | |  | `cast( substring(valid_to, 2, 8 ) as cms_dte_date )` | `DATS(8)` | Date |
| `ObjectAssetReferenceSystem` |  | | `_ObjectAssetData` | `ObjectAssetReferenceSystem` | `CHAR(6)` | Object System Reference ID |
| `ObjectAssetUnitOfMeasure` |  | | `_ObjectAssetData` | `ObjectAssetUnitOfMeasure` | `UNIT(3)` | Unit of Measure of Quantity |
| `ObjectAssetFinalCurrency` |  | | `_ObjectAssetData` | `ObjectAssetFinalCurrency` | `CUKY(5)` | Currency of the Final Asset Value |
| `_CollateralAgreementData` | | ✓ | | | | |
| `_AgreementPartner` | | ✓ | | | | |
| `_AgreementPortion` | | ✓ | | | | |
| `_AgreementSpecialArrangement` | | ✓ | | | | |
| `_AgreementTerminationAndCost` | | ✓ | | | | |
| `_CollateralAgreementRelshp` | | ✓ | | | | |
| `_ObjectAssetData` | | ✓ | | | | |
| `_ObjectAssetPartner` | | ✓ | | | | |
| `_ObjectAssetDocument` | | ✓ | | | | |
| `_CollateralObjectCalcData` | | ✓ | | | | |
| `_AgreementAssetCalcData` | | ✓ | | | | |
| `_AgreementRelshpCalcData` | | ✓ | | | | |
| `_AgreementPortionCalcData` | | ✓ | | | | |
| `_AgreementReceivableCalcData` | | ✓ | | | | |
| `_AssetAgreementAssessmentCrcy` | | ✓ | | | | |
| `_ObjectAssetFinalCurrency` | | ✓ | | | | |
| `_ObjectAssetUnitOfMeasure` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CollateralAgreementData` | `I_CollateralAgreementData` | [0..1] |
| `_AgreementPartner` | `I_AgreementPartner` | [0..*] |
| `_AgreementPortion` | `I_AgreementPortion` | [0..*] |
| `_AgreementSpecialArrangement` | `I_AgreementSpecialArrangement` | [0..*] |
| `_AgreementTerminationAndCost` | `I_AgreementTerminationAndCost` | [0..*] |
| `_CollateralAgreementRelshp` | `I_CollateralAgreementRelshp` | [0..*] |
| `_ObjectAssetData` | `I_ObjectAssetData` | [0..1] |
| `_ObjectAssetPartner` | `I_ObjectAssetPartner` | [0..*] |
| `_ObjectAssetDocument` | `I_ObjectAssetDocument` | [0..*] |
| `_CollateralObjectCalcData` | `I_CollateralObjectCalcData` | [0..*] |
| `_AgreementAssetCalcData` | `I_AgreementAssetCalcData` | [0..*] |
| `_AgreementRelshpCalcData` | `I_AgreementRelshpCalcData` | [0..*] |
| `_AgreementPortionCalcData` | `I_AgreementPortionCalcData` | [0..*] |
| `_AgreementReceivableCalcData` | `I_AgreementReceivableCalcData` | [0..*] |
| `_AssetAgreementAssessmentCrcy` | `I_Currency` | [0..1] |
| `_ObjectAssetFinalCurrency` | `I_Currency` | [0..1] |
| `_ObjectAssetUnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETAGREEMENTLINKDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETAGREEMENTLINKDATA')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'IASTCAGLINKDATA',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl:{
    authorizationCheck: #CHECK,
    personalData:{
        blocking: #BLOCKED_DATA_EXCLUDED
    }
}
@ObjectModel:{
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'L',
        dataClass: 'MASTER'
    },
    supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'AssetAgreementUUID'
}
@Metadata:{
    ignorePropagatedAnnotations: true,
    allowExtensions: true
}
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        mapping: [
         { table : 'CMS_CHG',
           role : #MAIN,
           viewElement : ['AssetAgreementUUID'],
           tableElement : ['CHG_GUID'] },
         { table : 'CMS_AST',
           role : #LEFT_OUTER_TO_ONE_JOIN,
           viewElement : ['ObjectAssetUUID'],
           tableElement : ['AST_GUID'] } ]
    }
  }
}
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Asset Agreement Link Details'
define view I_AssetAgreementLinkData
  as select from cms_chg
  association [0..1] to I_CollateralAgreementData     as _CollateralAgreementData      on  $projection.CollateralAgreementUUID = _CollateralAgreementData.CollateralAgreementUUID
  association [0..*] to I_AgreementPartner            as _AgreementPartner             on  $projection.CollateralAgreementUUID = _AgreementPartner.CollateralAgreementUUID
  association [0..*] to I_AgreementPortion            as _AgreementPortion             on  $projection.CollateralAgreementUUID = _AgreementPortion.CollateralAgreementUUID
  association [0..*] to I_AgreementSpecialArrangement as _AgreementSpecialArrangement  on  $projection.CollateralAgreementUUID = _AgreementSpecialArrangement.AgrmtSpecialArrangementRefUUID
  association [0..*] to I_AgreementTerminationAndCost as _AgreementTerminationAndCost  on  $projection.CollateralAgreementUUID = _AgreementTerminationAndCost.AgreementTermnAndCostLinkUUID
  association [0..*] to I_CollateralAgreementRelshp   as _CollateralAgreementRelshp    on  $projection.CollateralAgreementUUID = _CollateralAgreementRelshp.AgreementRelationshipSrceUUID
                                                                                       or  $projection.CollateralAgreementUUID = _CollateralAgreementRelshp.AgreementRelationshipDestUUID
  association [0..1] to I_ObjectAssetData             as _ObjectAssetData              on  $projection.ObjectAssetUUID = _ObjectAssetData.ObjectAssetUUID
  association [0..*] to I_ObjectAssetPartner          as _ObjectAssetPartner           on  $projection.ObjectAssetUUID = _ObjectAssetPartner.ObjectAssetUUID
  association [0..*] to I_ObjectAssetDocument         as _ObjectAssetDocument          on  $projection.ObjectAssetUUID = _ObjectAssetDocument.ObjectAssetUUID
  association [0..*] to I_CollateralObjectCalcData    as _CollateralObjectCalcData     on  (
                                                                                           $projection.CollateralAgreementUUID                = _CollateralObjectCalcData.CollateralObjectUUID
                                                                                           and _CollateralObjectCalcData.CollateralObjectType = 'CAG'
                                                                                         )
                                                                                       or  (
                                                                                           $projection.ObjectAssetUUID                        = _CollateralObjectCalcData.CollateralObjectUUID
                                                                                           and _CollateralObjectCalcData.CollateralObjectType = 'AST'
                                                                                         )
  association [0..*] to I_AgreementAssetCalcData      as _AgreementAssetCalcData       on  $projection.CollateralAgreementUUID = _AgreementAssetCalcData.CollateralAgreementUUID
                                                                                       and $projection.ObjectAssetUUID         = _AgreementAssetCalcData.ObjectAssetUUID
  association [0..*] to I_AgreementRelshpCalcData     as _AgreementRelshpCalcData      on  $projection.CollateralAgreementUUID = _AgreementRelshpCalcData.AgreementRelationshipSrceUUID
                                                                                       or  $projection.CollateralAgreementUUID = _AgreementRelshpCalcData.AgreementRelationshipDestUUID
  association [0..*] to I_AgreementPortionCalcData    as _AgreementPortionCalcData     on  $projection.CollateralAgreementUUID = _AgreementPortionCalcData.CollateralAgreementUUID
  association [0..*] to I_AgreementReceivableCalcData as _AgreementReceivableCalcData  on  $projection.CollateralAgreementUUID = _AgreementReceivableCalcData.CollateralAgreementUUID
  association [0..1] to I_Currency                    as _AssetAgreementAssessmentCrcy on  $projection.AssetAgreementAssessmentCrcy = _AssetAgreementAssessmentCrcy.Currency
  association [0..1] to I_Currency                    as _ObjectAssetFinalCurrency     on  $projection.ObjectAssetFinalCurrency = _ObjectAssetFinalCurrency.Currency
  association [0..1] to I_UnitOfMeasure               as _ObjectAssetUnitOfMeasure     on  $projection.ObjectAssetUnitOfMeasure = _ObjectAssetUnitOfMeasure.UnitOfMeasure

{
  key chg_guid                                             as AssetAgreementUUID,
      ast_guid                                             as ObjectAssetUUID,
      cag_guid                                             as CollateralAgreementUUID,
      description                                          as AssetAgreementDescription,
      ranking_order                                        as AssetAgreementRankingOrderVal,
      sequence                                             as AssetAgreementSequence,
      reg_entry_no                                         as AssetAgreementRegisterNumber,
      reg_date                                             as AssetAgreementRegisterDate,
      ast_part_nr                                          as AssetAgreementBPShareNumerator,
      ast_part_dn                                          as AssetAgreementBPShareDnmntr,
      @Semantics.quantity.unitOfMeasure: 'ObjectAssetUnitOfMeasure'
      ast_qty                                              as AssetAgreementQuantity,
      @Semantics.amount.currencyCode : 'ObjectAssetFinalCurrency'
      ast_value                                            as AssetAgreementAmount,
      @Semantics.amount.currencyCode: 'AssetAgreementAssessmentCrcy'
      asmt_amt                                             as AssetAgreementAssessmentAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_AssetAgreementAssessmentCrcy'
      asmt_curr                                            as AssetAgreementAssessmentCrcy,
      asmt_date                                            as AssetAgreementAssessmentDate,
      cast( substring(valid_from, 2, 8 ) as cms_dte_date ) as AssetAgreementValidFromDate,
      cast( substring(valid_to, 2, 8 ) as cms_dte_date )   as AssetAgreementValidToDate,

      _ObjectAssetData.ObjectAssetReferenceSystem          as ObjectAssetReferenceSystem,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ObjectAssetUnitOfMeasure'
      _ObjectAssetData.ObjectAssetUnitOfMeasure            as ObjectAssetUnitOfMeasure,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ObjectAssetFinalCurrency'
      _ObjectAssetData.ObjectAssetFinalCurrency            as ObjectAssetFinalCurrency,

      _CollateralAgreementData,
      _AgreementPartner,
      _AgreementPortion,
      _AgreementSpecialArrangement,
      _AgreementTerminationAndCost,
      _CollateralAgreementRelshp,
      _ObjectAssetData,
      _ObjectAssetPartner,
      _ObjectAssetDocument,
      _CollateralObjectCalcData,
      _AgreementAssetCalcData,
      _AgreementRelshpCalcData,
      _AgreementPortionCalcData,
      _AgreementReceivableCalcData,
      _AssetAgreementAssessmentCrcy,
      _ObjectAssetFinalCurrency,
      _ObjectAssetUnitOfMeasure
}
```
