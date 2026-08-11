---
name: I_AGREEMENTPORTION
description: "Agreement Portion Details"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPORTION')/$value
semantic_en: "Agreement Portion Details"
semantic_vi: "Agreement Portion Details — CDS view giao diện dựa trên cms_cag_por."
keywords:
  - "agreement"
  - "portion"
  - "details"
  - "collateral"
  - "amount"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGREEMENTPORTION

**Agreement Portion Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPORTION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgreementPortionUUID` | ✓ | |  | `cag_por_guid` | `RAW(16)` | GUID for Table CMS_CAG_POR |
| `CollateralAgreementUUID` |  | |  | `cag_guid` | `RAW(16)` | GUID for Table CMS_CAG |
| `AgreementPortionID` |  | |  | `portionid` | `NUMC(4)` | Identification of the Collateral Agreement Portion |
| `AgreementPortionAmount` |  | |  | `portion_value` | `CURR(17)` | Value of the Collateral Agreement Portion |
| `AgreementPortionAgreementPct` |  | |  | `pct_cagmt_value` | `DEC(10)` | Size of Collateral Agreement Portion in Collateral Agreement |
| `AgreementPortionBlockingType` |  | |  | `ind_blocking_typ` | `CHAR(2)` | Blocking Category for Collateral Agreement Portion |
| `AgreementPortionBlockingReason` |  | |  | `blocking_reason` | `CHAR(6)` | Portion Restriction |
| `AgreementPortionRefAgreementID` |  | |  | `ref_cagmtid` | `CHAR(40)` | Collateral Agreement ID based on another Colateral Agreement |
| `AgreementPortionRankingFactor` |  | |  | `priority_portion` | `NUMC(4)` | Specifies Ranking Ratio for Portion of Collateral Agreement |
| `AgreementPortionRblType` |  | |  | `ind_rbl_typ` | `CHAR(2)` | Indicator for Receivable Type |
| `AgreementPortionFileNumber` |  | |  | `file_num` | `CHAR(30)` | Serial Number of the Record in a Physical Location |
| `AgreementPortionAssgmtRole` |  | |  | `ind_asgmt` | `CHAR(2)` | Role in which Collateral Agreement Portion is Assigned |
| `AgreementPortionAssgmtDate` |  | |  | `asgmt_date` | `DATS(8)` | Date on which Collateral Agreement Portion is Assignment |
| `AgrmtPortnLndChrIntStrtDte` |  | |  | `int_start_date` | `DATS(8)` | Start Date for Land Charge Interest Calculation |
| `AgreementPortionValidFromDate` |  | |  | `valid_from` | `DATS(8)` | Date from which Collateral Agreement Portion Stands Valid |
| `AgreementPortionValidToDate` |  | |  | `valid_to` | `DATS(8)` | Date until which Collateral Agreement Portion Stands Valid |
| `ColltrlAgrmtAssessmentCrcy` |  | | `_CollateralAgreementData` | `ColltrlAgrmtAssessmentCrcy` | `CUKY(5)` | Currency of Assessment Value |
| `_CollateralAgreementData` | | ✓ | | | | |
| `_AgreementPortionPartner` | | ✓ | | | | |
| `_AgreementSpecialArrangement` | | ✓ | | | | |
| `_AgreementTerminationAndCost` | | ✓ | | | | |
| `_AgreementPortionRules` | | ✓ | | | | |
| `_AssetAgreementLinkData` | | ✓ | | | | |
| `_CollateralAgreementRelshp` | | ✓ | | | | |
| `_AgreementReceivableLinkData` | | ✓ | | | | |
| `_CollateralObjectCalcData` | | ✓ | | | | |
| `_AgreementAssetCalcData` | | ✓ | | | | |
| `_AgreementRelshpCalcData` | | ✓ | | | | |
| `_AgreementPortionCalcData` | | ✓ | | | | |
| `_AgreementReceivableCalcData` | | ✓ | | | | |
| `_AgreementPortionBlockingType` | | ✓ | | | | |
| `_AgreementPortionBlockingRsn` | | ✓ | | | | |
| `_AgreementPortionRblType` | | ✓ | | | | |
| `_AgreementPortionAssgmtRole` | | ✓ | | | | |
| `_ColltrlAgrmtAssessmentCrcy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CollateralAgreementData` | `I_CollateralAgreementData` | [0..1] |
| `_AgreementPortionPartner` | `I_AgreementPartner` | [0..*] |
| `_AgreementSpecialArrangement` | `I_AgreementSpecialArrangement` | [0..*] |
| `_AgreementTerminationAndCost` | `I_AgreementTerminationAndCost` | [0..*] |
| `_AgreementPortionRules` | `I_AgreementPortionRules` | [0..*] |
| `_AssetAgreementLinkData` | `I_AssetAgreementLinkData` | [0..*] |
| `_CollateralAgreementRelshp` | `I_CollateralAgreementRelshp` | [0..*] |
| `_AgreementReceivableLinkData` | `I_AgreementReceivableLinkData` | [0..*] |
| `_CollateralObjectCalcData` | `I_CollateralObjectCalcData` | [0..1] |
| `_AgreementAssetCalcData` | `I_AgreementAssetCalcData` | [0..*] |
| `_AgreementRelshpCalcData` | `I_AgreementRelshpCalcData` | [0..*] |
| `_AgreementPortionCalcData` | `I_AgreementPortionCalcData` | [0..1] |
| `_AgreementReceivableCalcData` | `I_AgreementReceivableCalcData` | [0..*] |
| `_AgreementPortionBlockingType` | `I_AgreementPortionBlockingType` | [0..1] |
| `_AgreementPortionBlockingRsn` | `I_AgreementPortionBlockingRsn` | [0..1] |
| `_AgreementPortionRblType` | `I_AgreementPortionRblType` | [0..1] |
| `_AgreementPortionAssgmtRole` | `I_AgreementPortionAssgmtRole` | [0..1] |
| `_ColltrlAgrmtAssessmentCrcy` | `I_Currency` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPORTION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPORTION')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICAGPORTIONDATA',
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
    representativeKey: 'AgreementPortionUUID'
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
        { table : 'CMS_CAG_POR',
          role : #MAIN,
          viewElement : ['AgreementPortionUUID'],
          tableElement : ['CAG_POR_GUID'] },
        { table : 'CMS_CAG',
          role : #LEFT_OUTER_TO_ONE_JOIN,
          viewElement : ['CollateralAgreementUUID'],
          tableElement : ['CAG_GUID'] }
        ]
    }
  }
}
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agreement Portion Details'
define view I_AgreementPortion
  as select from cms_cag_por
  association [0..1] to I_CollateralAgreementData      as _CollateralAgreementData      on  $projection.CollateralAgreementUUID = _CollateralAgreementData.CollateralAgreementUUID
  association [0..*] to I_AgreementPartner             as _AgreementPortionPartner      on  $projection.CollateralAgreementUUID = _AgreementPortionPartner.CollateralAgreementUUID
                                                                                        and $projection.AgreementPortionUUID    = _AgreementPortionPartner.AgreementPortionUUID
  association [0..*] to I_AgreementSpecialArrangement  as _AgreementSpecialArrangement  on  $projection.CollateralAgreementUUID = _AgreementSpecialArrangement.AgrmtSpecialArrangementRefUUID
                                                                                        or  $projection.AgreementPortionUUID    = _AgreementSpecialArrangement.AgrmtSpecialArrangementRefUUID
  association [0..*] to I_AgreementTerminationAndCost  as _AgreementTerminationAndCost  on  $projection.CollateralAgreementUUID = _AgreementTerminationAndCost.AgreementTermnAndCostLinkUUID
  association [0..*] to I_AgreementPortionRules        as _AgreementPortionRules        on  $projection.AgreementPortionUUID = _AgreementPortionRules.AgreementPortionUUID
  association [0..*] to I_AssetAgreementLinkData       as _AssetAgreementLinkData       on  $projection.CollateralAgreementUUID = _AssetAgreementLinkData.CollateralAgreementUUID
  association [0..*] to I_CollateralAgreementRelshp    as _CollateralAgreementRelshp    on  $projection.CollateralAgreementUUID = _CollateralAgreementRelshp.AgreementRelationshipSrceUUID
                                                                                        or  $projection.CollateralAgreementUUID = _CollateralAgreementRelshp.AgreementRelationshipDestUUID
  association [0..*] to I_AgreementReceivableLinkData  as _AgreementReceivableLinkData  on  $projection.AgreementPortionUUID = _AgreementReceivableLinkData.AgreementPortionUUID
  association [0..1] to I_CollateralObjectCalcData     as _CollateralObjectCalcData     on  $projection.CollateralAgreementUUID            = _CollateralObjectCalcData.CollateralObjectUUID
                                                                                        and _CollateralObjectCalcData.CollateralObjectType = 'CAG'
  association [0..*] to I_AgreementAssetCalcData       as _AgreementAssetCalcData       on  $projection.CollateralAgreementUUID = _AgreementAssetCalcData.CollateralAgreementUUID
  association [0..*] to I_AgreementRelshpCalcData      as _AgreementRelshpCalcData      on  $projection.CollateralAgreementUUID = _AgreementRelshpCalcData.AgreementRelationshipSrceUUID
                                                                                        or  $projection.CollateralAgreementUUID = _AgreementRelshpCalcData.AgreementRelationshipDestUUID
  association [0..1] to I_AgreementPortionCalcData     as _AgreementPortionCalcData     on  $projection.AgreementPortionUUID    = _AgreementPortionCalcData.AgreementPortionUUID
                                                                                        and $projection.CollateralAgreementUUID = _AgreementPortionCalcData.CollateralAgreementUUID
  association [0..*] to I_AgreementReceivableCalcData  as _AgreementReceivableCalcData  on  $projection.AgreementPortionUUID    = _AgreementReceivableCalcData.AgreementPortionUUID
                                                                                        and $projection.CollateralAgreementUUID = _AgreementReceivableCalcData.CollateralAgreementUUID
  association [0..1] to I_AgreementPortionBlockingType as _AgreementPortionBlockingType on  $projection.AgreementPortionBlockingType = _AgreementPortionBlockingType.AgreementPortionBlockingType
  association [0..1] to I_AgreementPortionBlockingRsn  as _AgreementPortionBlockingRsn  on  $projection.AgreementPortionBlockingReason = _AgreementPortionBlockingRsn.AgreementPortionBlockingReason
  association [0..1] to I_AgreementPortionRblType      as _AgreementPortionRblType      on  $projection.AgreementPortionRblType = _AgreementPortionRblType.AgreementPortionRblType
  association [0..1] to I_AgreementPortionAssgmtRole   as _AgreementPortionAssgmtRole   on  $projection.AgreementPortionAssgmtRole = _AgreementPortionAssgmtRole.AgreementPortionAssgmtRole
  association [0..1] to I_Currency                     as _ColltrlAgrmtAssessmentCrcy   on  $projection.ColltrlAgrmtAssessmentCrcy = _ColltrlAgrmtAssessmentCrcy.Currency
{
  key cag_por_guid                                        as AgreementPortionUUID,
      cag_guid                                            as CollateralAgreementUUID,
      portionid                                           as AgreementPortionID,
      @Semantics.amount.currencyCode: 'ColltrlAgrmtAssessmentCrcy'
      portion_value                                       as AgreementPortionAmount,
      pct_cagmt_value                                     as AgreementPortionAgreementPct,
      @ObjectModel.foreignKey.association: '_AgreementPortionBlockingType'
      ind_blocking_typ                                    as AgreementPortionBlockingType,
      @ObjectModel.foreignKey.association: '_AgreementPortionBlockingRsn'
      blocking_reason                                     as AgreementPortionBlockingReason,
      ref_cagmtid                                         as AgreementPortionRefAgreementID,
      priority_portion                                    as AgreementPortionRankingFactor,
      @ObjectModel.foreignKey.association: '_AgreementPortionRblType'
      ind_rbl_typ                                         as AgreementPortionRblType,
      file_num                                            as AgreementPortionFileNumber,
      @ObjectModel.foreignKey.association: '_AgreementPortionAssgmtRole'
      ind_asgmt                                           as AgreementPortionAssgmtRole,
      asgmt_date                                          as AgreementPortionAssgmtDate,
      int_start_date                                      as AgrmtPortnLndChrIntStrtDte,
      valid_from                                          as AgreementPortionValidFromDate,
      valid_to                                            as AgreementPortionValidToDate,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlAgrmtAssessmentCrcy'
      _CollateralAgreementData.ColltrlAgrmtAssessmentCrcy as ColltrlAgrmtAssessmentCrcy,

      _CollateralAgreementData,
      _AgreementPortionPartner,
      _AgreementSpecialArrangement,
      _AgreementTerminationAndCost,
      _AgreementPortionRules,
      _AssetAgreementLinkData,
      _CollateralAgreementRelshp,
      _AgreementReceivableLinkData,
      _CollateralObjectCalcData,
      _AgreementAssetCalcData,
      _AgreementRelshpCalcData,
      _AgreementPortionCalcData,
      _AgreementReceivableCalcData,
      _AgreementPortionBlockingType,
      _AgreementPortionBlockingRsn,
      _AgreementPortionRblType,
      _AgreementPortionAssgmtRole,
      _ColltrlAgrmtAssessmentCrcy
}
```
