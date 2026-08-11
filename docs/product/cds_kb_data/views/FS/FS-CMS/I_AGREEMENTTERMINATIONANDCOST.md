---
name: I_AGREEMENTTERMINATIONANDCOST
description: "Agreement Termination and Cost Details"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTTERMINATIONANDCOST')/$value
semantic_en: "Agreement Termination and Cost Details"
semantic_vi: "Agreement Termination and Cost Details — CDS view giao diện dựa trên cms_cag_trmcst."
keywords:
  - "agreement"
  - "termination"
  - "and"
  - "cost"
  - "details"
  - "agrmt"
  - "termn"
  - "link"
  - "type"
  - "date"
  - "right"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGREEMENTTERMINATIONANDCOST

**Agreement Termination and Cost Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTTERMINATIONANDCOST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgrmtTerminationAndCostUUID` | ✓ | |  | `trmcst_guid` | `RAW(16)` | GUID for Table CMS_CAG_TRMCST |
| `AgreementTermnAndCostLinkUUID` |  | |  | `link_guid` | `RAW(16)` | Link Guid for table CMS_CAG_TRMCST |
| `AgreementCostType` |  | |  | `cost_typ` | `CHAR(6)` | Cost Type of the Pool Agreement |
| `AgreementCostDueDate` |  | |  | `cost_due_date` | `DATS(8)` | Date by which the Compensation Amount must be Paid |
| `AgreementTermnRightType` |  | |  | `term_right_typ` | `CHAR(6)` | Termination Right Type |
| `AgreementTerminationReason` |  | |  | `term_reason` | `CHAR(6)` | Termination Type |
| `AgrmtTerminationPossibleDate` |  | |  | `first_term_date` | `DATS(8)` | First possible date of Termination by business partner |
| `AgreementTerminationNoticeDate` |  | |  | `term_notice_date` | `DATS(8)` | Date on which Termination Notice is sent by Business Partner |
| `AgrmtTermnAndCostAmt` |  | |  | `amount` | `CURR(17)` | Amount |
| `AgrmtTermnAndCostCrcy` |  | |  | `currency` | `CUKY(5)` | Currency |
| `AgrmtTermnAndCostFrqcyUnit` |  | |  | `unit_freq` | `CHAR(2)` | The unit for period of  frequency |
| `AgrmtTermnAndCostFrqcyPeriod` |  | |  | `period_freq` | `NUMC(4)` | Period of  frequency |
| `_CollateralAgreementData` | | ✓ | | | | |
| `_AgreementPortion` | | ✓ | | | | |
| `_AgreementPartner` | | ✓ | | | | |
| `_AgreementSpecialArrangement` | | ✓ | | | | |
| `_AssetAgreementLinkData` | | ✓ | | | | |
| `_CollateralAgreementRelshp` | | ✓ | | | | |
| `_CollateralObjectCalcData` | | ✓ | | | | |
| `_AgreementAssetCalcData` | | ✓ | | | | |
| `_AgreementRelshpCalcData` | | ✓ | | | | |
| `_AgreementPortionCalcData` | | ✓ | | | | |
| `_AgreementReceivableCalcData` | | ✓ | | | | |
| `_AgreementCostType` | | ✓ | | | | |
| `_AgreementTermnRightType` | | ✓ | | | | |
| `_AgreementTerminationReason` | | ✓ | | | | |
| `_AgrmtTermnAndCostCrcy` | | ✓ | | | | |
| `_AgrmtTermnAndCostFrqcyUnit` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CollateralAgreementData` | `I_CollateralAgreementData` | [0..1] |
| `_AgreementPortion` | `I_AgreementPortion` | [0..*] |
| `_AgreementPartner` | `I_AgreementPartner` | [0..1] |
| `_AgreementSpecialArrangement` | `I_AgreementSpecialArrangement` | [0..*] |
| `_AssetAgreementLinkData` | `I_AssetAgreementLinkData` | [0..*] |
| `_CollateralAgreementRelshp` | `I_CollateralAgreementRelshp` | [0..*] |
| `_CollateralObjectCalcData` | `I_CollateralObjectCalcData` | [0..1] |
| `_AgreementAssetCalcData` | `I_AgreementAssetCalcData` | [0..*] |
| `_AgreementRelshpCalcData` | `I_AgreementRelshpCalcData` | [0..*] |
| `_AgreementPortionCalcData` | `I_AgreementPortionCalcData` | [0..*] |
| `_AgreementReceivableCalcData` | `I_AgreementReceivableCalcData` | [0..*] |
| `_AgreementCostType` | `I_AgreementCostType` | [0..1] |
| `_AgreementTermnRightType` | `I_AgreementTermnRightType` | [0..1] |
| `_AgreementTerminationReason` | `I_CollateralAttributeIndType` | [0..1] |
| `_AgrmtTermnAndCostCrcy` | `I_Currency` | [0..1] |
| `_AgrmtTermnAndCostFrqcyUnit` | `I_AgreementFrequencyUnit` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTTERMINATIONANDCOST')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTTERMINATIONANDCOST')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICAGTRMANDCST',
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
    representativeKey: 'AgrmtTerminationAndCostUUID'
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
            automatic: true
    }
  }
}
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agreement Termination and Cost Details'
define view I_AgreementTerminationAndCost
  as select from cms_cag_trmcst
  association [0..1] to I_CollateralAgreementData     as _CollateralAgreementData     on  $projection.AgreementTermnAndCostLinkUUID = _CollateralAgreementData.CollateralAgreementUUID
  association [0..*] to I_AgreementPortion            as _AgreementPortion            on  $projection.AgreementTermnAndCostLinkUUID = _AgreementPortion.CollateralAgreementUUID
  association [0..1] to I_AgreementPartner            as _AgreementPartner            on  $projection.AgreementTermnAndCostLinkUUID = _AgreementPartner.AgreementPartnerUUID
  association [0..*] to I_AgreementSpecialArrangement as _AgreementSpecialArrangement on  $projection.AgreementTermnAndCostLinkUUID = _AgreementSpecialArrangement.AgrmtSpecialArrangementRefUUID
  association [0..*] to I_AssetAgreementLinkData      as _AssetAgreementLinkData      on  $projection.AgreementTermnAndCostLinkUUID = _AssetAgreementLinkData.CollateralAgreementUUID
  association [0..*] to I_CollateralAgreementRelshp   as _CollateralAgreementRelshp   on  $projection.AgreementTermnAndCostLinkUUID = _CollateralAgreementRelshp.AgreementRelationshipSrceUUID
                                                                                      or  $projection.AgreementTermnAndCostLinkUUID = _CollateralAgreementRelshp.AgreementRelationshipDestUUID
  association [0..1] to I_CollateralObjectCalcData    as _CollateralObjectCalcData    on  $projection.AgreementTermnAndCostLinkUUID      = _CollateralObjectCalcData.CollateralObjectUUID
                                                                                      and _CollateralObjectCalcData.CollateralObjectType = 'CAG'
  association [0..*] to I_AgreementAssetCalcData      as _AgreementAssetCalcData      on  $projection.AgreementTermnAndCostLinkUUID = _AgreementAssetCalcData.CollateralAgreementUUID
  association [0..*] to I_AgreementRelshpCalcData     as _AgreementRelshpCalcData     on  $projection.AgreementTermnAndCostLinkUUID = _AgreementRelshpCalcData.AgreementRelationshipSrceUUID
                                                                                      or  $projection.AgreementTermnAndCostLinkUUID = _AgreementRelshpCalcData.AgreementRelationshipDestUUID
  association [0..*] to I_AgreementPortionCalcData    as _AgreementPortionCalcData    on  $projection.AgreementTermnAndCostLinkUUID = _AgreementPortionCalcData.CollateralAgreementUUID
  association [0..*] to I_AgreementReceivableCalcData as _AgreementReceivableCalcData on  $projection.AgreementTermnAndCostLinkUUID = _AgreementReceivableCalcData.CollateralAgreementUUID
  association [0..1] to I_AgreementCostType           as _AgreementCostType           on  $projection.AgreementCostType = _AgreementCostType.AgreementCostType
  association [0..1] to I_AgreementTermnRightType     as _AgreementTermnRightType     on  $projection.AgreementTermnRightType = _AgreementTermnRightType.AgreementTermnRightType
  association [0..1] to I_CollateralAttributeIndType  as _AgreementTerminationReason  on  $projection.AgreementTerminationReason                = _AgreementTerminationReason.CollateralAttributeIndType
                                                                                      and _AgreementTerminationReason.CollateralAttributeIndCat = 'CAG002'
  association [0..1] to I_Currency                    as _AgrmtTermnAndCostCrcy       on  $projection.AgrmtTermnAndCostCrcy = _AgrmtTermnAndCostCrcy.Currency
  association [0..1] to I_AgreementFrequencyUnit      as _AgrmtTermnAndCostFrqcyUnit  on  $projection.AgrmtTermnAndCostFrqcyUnit = _AgrmtTermnAndCostFrqcyUnit.AgreementFrequencyUnit
{
  key trmcst_guid      as AgrmtTerminationAndCostUUID,
      link_guid        as AgreementTermnAndCostLinkUUID,
      @ObjectModel.foreignKey.association: '_AgreementCostType'
      cost_typ         as AgreementCostType,
      cost_due_date    as AgreementCostDueDate,
      @ObjectModel.foreignKey.association: '_AgreementTermnRightType'
      term_right_typ   as AgreementTermnRightType,
      @ObjectModel.foreignKey.association: '_AgreementTerminationReason'
      term_reason      as AgreementTerminationReason,
      first_term_date  as AgrmtTerminationPossibleDate,
      term_notice_date as AgreementTerminationNoticeDate,
      @Semantics.amount.currencyCode: 'AgrmtTermnAndCostCrcy'
      amount           as AgrmtTermnAndCostAmt,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_AgrmtTermnAndCostCrcy'
      currency         as AgrmtTermnAndCostCrcy,
      @ObjectModel.foreignKey.association: '_AgrmtTermnAndCostFrqcyUnit'
      unit_freq        as AgrmtTermnAndCostFrqcyUnit,
      period_freq      as AgrmtTermnAndCostFrqcyPeriod,

      _CollateralAgreementData,
      _AgreementPortion,
      _AgreementPartner,
      _AgreementSpecialArrangement,
      _AssetAgreementLinkData,
      _CollateralAgreementRelshp,
      _CollateralObjectCalcData,
      _AgreementAssetCalcData,
      _AgreementRelshpCalcData,
      _AgreementPortionCalcData,
      _AgreementReceivableCalcData,
      _AgreementCostType,
      _AgreementTermnRightType,
      _AgreementTerminationReason,
      _AgrmtTermnAndCostCrcy,
      _AgrmtTermnAndCostFrqcyUnit
}
```
