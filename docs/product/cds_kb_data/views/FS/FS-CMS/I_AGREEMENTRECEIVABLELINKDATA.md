---
name: I_AGREEMENTRECEIVABLELINKDATA
description: "Agreement Receivable Link Details"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRECEIVABLELINKDATA')/$value
semantic_en: "Agreement Receivable Link Details"
semantic_vi: "Agreement Receivable Link Details — CDS view giao diện dựa trên cms_cag_rbl."
keywords:
  - "agreement"
  - "receivable"
  - "link"
  - "details"
  - "portion"
  - "collateral"
  - "credit"
  - "system"
  - "valid"
  - "date"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGREEMENTRECEIVABLELINKDATA

**Agreement Receivable Link Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRECEIVABLELINKDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgreementReceivableUUID` | ✓ | |  | `cag_rbl_guid` | `RAW(16)` | GUID for Table CMS_CAG_RBL |
| `AgreementPortionUUID` |  | |  | `cag_por_guid` | `RAW(16)` | GUID for Table CMS_CAG_POR |
| `CollateralRblCreditSystem` |  | |  | `creditsystem` | `CHAR(3)` | Credit System |
| `CollateralReceivableID` |  | |  | `rbl_id` | `CHAR(64)` | Receivable ID |
| `AgreementRblLinkValidFromDate` |  | |  | `cast( substring(valid_from, 2, 8 ) as cms_dte_date )` | `DATS(8)` | Date |
| `AgreementRblLinkValidToDate` |  | |  | `cast( substring(valid_to, 2, 8 ) as cms_dte_date )` | `DATS(8)` | Date |
| `AgreementRblPriorityVal` |  | |  | `priority` | `NUMC(4)` | Priority of the Collateral Agreement - Receivable Link |
| `AgreementRblRankingClassVal` |  | |  | `ranking_class` | `NUMC(4)` | Ranking Class of the Collateral Agreement - Receivable Link |
| `AgreementReceivableLinkType` |  | |  | `ind_link_typ` | `CHAR(2)` | Indicator for Manually or Automatic Links |
| `AgreementTemporaryColltrlSign` |  | |  | `ind_tran_coll` | `CHAR(2)` | Indicates if Collateral Agreement is a Temporary Collateral |
| `AgreementRblSecuredAmount` |  | |  | `rbl_amt` | `CURR(17)` | Secured Receivable Amount |
| `AgreementRblSecuredCurrency` |  | |  | `rbl_curr` | `CUKY(5)` | Currency of the Receivable  Amounts Specified in the Link |
| `AgreementReceivablePercent` |  | |  | `rbl_pct` | `DEC(10)` | Percentage of the Receivable |
| `AgreementReceivablePortion` |  | |  | `rbl_portion` | `CHAR(2)` | Portion of the Receivable |
| `AgreementRblMiddlePortnRefAmt` |  | |  | `ref_rbl_amt` | `CURR(17)` | Reference Amount of Receivable for Middle Portion |
| `AgreementRblMiddlePortnRefPct` |  | |  | `ref_rbl_pct` | `DEC(10)` | Reference Percentage of Receivable for Middle Portion |
| `AgreementRblComponentType` |  | |  | `component_type` | `CHAR(3)` | CComponent Type of a Receivable |
| `AgreementRblLinkEnteredBy` |  | |  | `created_by` | `CHAR(12)` | Login ID of the User who created the Record |
| `AgreementRblLinkEnteredDteTme` |  | |  | `created_at` | `DEC(15)` | Creation Timestamp |
| `AgreementRblLinkLastChangedBy` |  | |  | `changed_by` | `CHAR(12)` | Last Changed By |
| `AgreementRblLinkLastChgdDteTme` |  | |  | `changed_at` | `DEC(15)` | Change Timestamp |
| `_AgreementPortion` | | ✓ | | | | |
| `_AgreementPartner` | | ✓ | | | | |
| `_AgreementPortionRules` | | ✓ | | | | |
| `_AgreementSpecialArrangement` | | ✓ | | | | |
| `_ReceivableData` | | ✓ | | | | |
| `_CollateralObjectCalcData` | | ✓ | | | | |
| `_AgreementPortionCalcData` | | ✓ | | | | |
| `_AgreementReceivableCalcData` | | ✓ | | | | |
| `_CollateralRblCreditSystem` | | ✓ | | | | |
| `_AgreementRblSecuredCurrency` | | ✓ | | | | |
| `_AgreementReceivablePortion` | | ✓ | | | | |
| `_AgreementRblComponentType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AgreementPortion` | `I_AgreementPortion` | [0..1] |
| `_AgreementPartner` | `I_AgreementPartner` | [0..*] |
| `_AgreementPortionRules` | `I_AgreementPortionRules` | [0..*] |
| `_AgreementSpecialArrangement` | `I_AgreementSpecialArrangement` | [0..*] |
| `_ReceivableData` | `I_ReceivableData` | [0..*] |
| `_CollateralObjectCalcData` | `I_CollateralObjectCalcData` | [0..*] |
| `_AgreementPortionCalcData` | `I_AgreementPortionCalcData` | [0..*] |
| `_AgreementReceivableCalcData` | `I_AgreementReceivableCalcData` | [0..1] |
| `_CollateralRblCreditSystem` | `I_CollateralRblCreditSystem` | [0..1] |
| `_AgreementRblSecuredCurrency` | `I_Currency` | [0..1] |
| `_AgreementReceivablePortion` | `I_AgreementReceivablePortion` | [0..1] |
| `_AgreementRblComponentType` | `I_AgreementRblComponentType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRECEIVABLELINKDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRECEIVABLELINKDATA')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICAGRBLLINKDATA',
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
    representativeKey: 'AgreementReceivableUUID'
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
@EndUserText.label: 'Agreement Receivable Link Details'
define view I_AgreementReceivableLinkData
  as select from cms_cag_rbl
  association [0..1] to I_AgreementPortion            as _AgreementPortion            on  $projection.AgreementPortionUUID = _AgreementPortion.AgreementPortionUUID
  association [0..*] to I_AgreementPartner            as _AgreementPartner            on  $projection.AgreementPortionUUID = _AgreementPartner.AgreementPortionUUID
  association [0..*] to I_AgreementPortionRules       as _AgreementPortionRules       on  $projection.AgreementPortionUUID = _AgreementPortionRules.AgreementPortionUUID
  association [0..*] to I_AgreementSpecialArrangement as _AgreementSpecialArrangement on  $projection.AgreementPortionUUID = _AgreementSpecialArrangement.AgrmtSpecialArrangementRefUUID
  association [0..*] to I_ReceivableData              as _ReceivableData              on  $projection.CollateralRblCreditSystem = _ReceivableData.CollateralRblCreditSystem
                                                                                      and $projection.CollateralReceivableID    = _ReceivableData.CollateralReceivableID
  association [0..*] to I_CollateralObjectCalcData    as _CollateralObjectCalcData    on  $projection.CollateralRblCreditSystem          = _CollateralObjectCalcData.CollateralRblCreditSystem
                                                                                      and $projection.CollateralReceivableID             = _CollateralObjectCalcData.CollateralReceivableID
                                                                                      and _CollateralObjectCalcData.CollateralObjectType = 'RBL'
  association [0..*] to I_AgreementPortionCalcData    as _AgreementPortionCalcData    on  $projection.AgreementPortionUUID = _AgreementPortionCalcData.AgreementPortionUUID
  association [0..1] to I_AgreementReceivableCalcData as _AgreementReceivableCalcData on  $projection.AgreementReceivableUUID = _AgreementReceivableCalcData.AgreementReceivableUUID
  association [0..1] to I_CollateralRblCreditSystem   as _CollateralRblCreditSystem   on  $projection.CollateralRblCreditSystem = _CollateralRblCreditSystem.CollateralRblCreditSystem
  association [0..1] to I_Currency                    as _AgreementRblSecuredCurrency on  $projection.AgreementRblSecuredCurrency = _AgreementRblSecuredCurrency.Currency
  association [0..1] to I_AgreementReceivablePortion  as _AgreementReceivablePortion  on  $projection.AgreementReceivablePortion = _AgreementReceivablePortion.AgreementReceivablePortion
  association [0..1] to I_AgreementRblComponentType   as _AgreementRblComponentType   on  $projection.AgreementRblComponentType = _AgreementRblComponentType.AgreementRblComponentType
{
  key cag_rbl_guid                                         as AgreementReceivableUUID,
      cag_por_guid                                         as AgreementPortionUUID,
      @ObjectModel.foreignKey.association: '_CollateralRblCreditSystem'
      creditsystem                                         as CollateralRblCreditSystem,
      rbl_id                                               as CollateralReceivableID,
      cast( substring(valid_from, 2, 8 ) as cms_dte_date ) as AgreementRblLinkValidFromDate,
      cast( substring(valid_to, 2, 8 ) as cms_dte_date )   as AgreementRblLinkValidToDate,
      priority                                             as AgreementRblPriorityVal,
      ranking_class                                        as AgreementRblRankingClassVal,
      ind_link_typ                                         as AgreementReceivableLinkType,
      ind_tran_coll                                        as AgreementTemporaryColltrlSign,
      @Semantics.amount.currencyCode: 'AgreementRblSecuredCurrency'
      rbl_amt                                              as AgreementRblSecuredAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_AgreementRblSecuredCurrency'
      rbl_curr                                             as AgreementRblSecuredCurrency,
      rbl_pct                                              as AgreementReceivablePercent,
      @ObjectModel.foreignKey.association: '_AgreementReceivablePortion'
      rbl_portion                                          as AgreementReceivablePortion,
      @Semantics.amount.currencyCode: 'AgreementRblSecuredCurrency'
      ref_rbl_amt                                          as AgreementRblMiddlePortnRefAmt,
      ref_rbl_pct                                          as AgreementRblMiddlePortnRefPct,
      @ObjectModel.foreignKey.association: '_AgreementRblComponentType'
      component_type                                       as AgreementRblComponentType,
      created_by                                           as AgreementRblLinkEnteredBy,
      created_at                                           as AgreementRblLinkEnteredDteTme,
      changed_by                                           as AgreementRblLinkLastChangedBy,
      changed_at                                           as AgreementRblLinkLastChgdDteTme,

      _AgreementPortion,
      _AgreementPartner,
      _AgreementPortionRules,
      _AgreementSpecialArrangement,
      _ReceivableData,
      _CollateralObjectCalcData,
      _AgreementPortionCalcData,
      _AgreementReceivableCalcData,
      _CollateralRblCreditSystem,
      _AgreementRblSecuredCurrency,
      _AgreementReceivablePortion,
      _AgreementRblComponentType
}
```
