---
name: I_AGREEMENTSPECIALARRANGEMENT
description: "Agreement Special Arrangement Details"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTSPECIALARRANGEMENT')/$value
semantic_en: "Agreement Special Arrangement Details"
semantic_vi: "Agreement Special Arrangement Details — CDS view giao diện dựa trên cms_cag_sa."
keywords:
  - "agreement"
  - "special"
  - "arrangement"
  - "details"
  - "agrmt"
  - "arrgmt"
  - "type"
  - "spcl"
  - "procg"
  - "status"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGREEMENTSPECIALARRANGEMENT

**Agreement Special Arrangement Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTSPECIALARRANGEMENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgrmtSpecialArrangementUUID` | ✓ | |  | `cag_sa_guid` | `RAW(16)` | Primary key for CMS_CAG_SA |
| `AgrmtSpecialArrangementRefUUID` |  | |  | `ref_guid` | `RAW(16)` | Link Key for CMS_CAG_SA |
| `AgreementSpecialArrgmtType` |  | |  | `sa_type` | `CHAR(6)` | Special Arrangement Type |
| `AgreementSpecialArrangementID` |  | |  | `sa_id` | `CHAR(40)` | Special Arrangement ID |
| `AgrmtSpclArrgmtProcgStatus` |  | |  | `proc_stat` | `CHAR(2)` | Processing Status of Special Arrangement |
| `AgrmtSpclArrgmtLegalStatus` |  | |  | `legal_stat` | `CHAR(2)` | Special Arrangement Legal Status |
| `AgrmtSpclArrgmtValidFromDate` |  | |  | `valid_from` | `DATS(8)` | Date from which Special Arrangement Stands Valid |
| `AgrmtSpclArrgmtValidToDate` |  | |  | `valid_to` | `DATS(8)` | Date from which Special Arrangement Stands Valid |
| `AgrmtSpclArrgmtNominalAmount` |  | |  | `nom_value` | `CURR(17)` | Special Arrangement Nominal Value |
| `AgrmtSpclArrgmtNominalCurrency` |  | |  | `nom_value_curr` | `CUKY(5)` | Currency of Special Arrangement: Nominal Value |
| `AgrmtSpclArrgmtAssessmentAmt` |  | |  | `asmt_amt` | `CURR(17)` | Special Arrangement Assessment Amount |
| `AgrmtSpclArrgmtAssessmentCrcy` |  | |  | `asmt_amt_curr` | `CUKY(5)` | Currency of Special Arrangement: Assessment Amount |
| `AgrmtSpclArrgmtBankCountry` |  | |  | `bank_ctry` | `CHAR(3)` | Bank Country/Region Key |
| `AgrmtSpclArrgmtBankKey` |  | |  | `bank_key` | `CHAR(15)` | Bank Keys |
| `AgrmtSpclArrgmtBankAcctNmbr` |  | |  | `bank_acct` | `CHAR(35)` | Bank account number |
| `AgrmtSpclArrgmtPurchaseID` |  | |  | `ref_agmt_id` | `CHAR(40)` | Pruchase Agreement ID of a Special Arrangement |
| `AgrmtSpclArrgmtPurchaseDate` |  | |  | `ref_agmt_date` | `DATS(8)` | Purchase Agreement Date of Special Arrangement |
| `AgrmtSpclArrgmtDescription` |  | |  | `description` | `CHAR(30)` | Description for Special Arrangement |
| `_CollateralAgreementData` | | ✓ | | | | |
| `_AgreementPortion` | | ✓ | | | | |
| `_AgreementPartner` | | ✓ | | | | |
| `_AgreementTerminationAndCost` | | ✓ | | | | |
| `_AssetAgreementLinkData` | | ✓ | | | | |
| `_CollateralAgreementRelshp` | | ✓ | | | | |
| `_AgreementReceivableLinkData` | | ✓ | | | | |
| `_CollateralObjectCalcData` | | ✓ | | | | |
| `_AgreementAssetCalcData` | | ✓ | | | | |
| `_AgreementRelshpCalcData` | | ✓ | | | | |
| `_AgreementPortionCalcData` | | ✓ | | | | |
| `_AgreementReceivableCalcData` | | ✓ | | | | |
| `_AgreementSpecialArrgmtType` | | ✓ | | | | |
| `_AgrmtSpclArrgmtProcgStatus` | | ✓ | | | | |
| `_AgrmtSpclArrgmtLegalStatus` | | ✓ | | | | |
| `_AgrmtSpclArrgmtNominalCrcy` | | ✓ | | | | |
| `_AgrmtSpclArrgmtAssessmentCrcy` | | ✓ | | | | |
| `_AgrmtSpclArrgmtBankCountry` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CollateralAgreementData` | `I_CollateralAgreementData` | [0..1] |
| `_AgreementPortion` | `I_AgreementPortion` | [0..1] |
| `_AgreementPartner` | `I_AgreementPartner` | [0..*] |
| `_AgreementTerminationAndCost` | `I_AgreementTerminationAndCost` | [0..*] |
| `_AssetAgreementLinkData` | `I_AssetAgreementLinkData` | [0..*] |
| `_CollateralAgreementRelshp` | `I_CollateralAgreementRelshp` | [0..*] |
| `_AgreementReceivableLinkData` | `I_AgreementReceivableLinkData` | [0..*] |
| `_CollateralObjectCalcData` | `I_CollateralObjectCalcData` | [0..1] |
| `_AgreementAssetCalcData` | `I_AgreementAssetCalcData` | [0..*] |
| `_AgreementRelshpCalcData` | `I_AgreementRelshpCalcData` | [0..*] |
| `_AgreementPortionCalcData` | `I_AgreementPortionCalcData` | [0..*] |
| `_AgreementReceivableCalcData` | `I_AgreementReceivableCalcData` | [0..*] |
| `_AgreementSpecialArrgmtType` | `I_AgreementSpecialArrgmtType` | [0..1] |
| `_AgrmtSpclArrgmtProcgStatus` | `I_AgrmtSpclArrgmtProcgSts` | [0..1] |
| `_AgrmtSpclArrgmtLegalStatus` | `I_AgrmtSpclArrgmtLglSts` | [0..1] |
| `_AgrmtSpclArrgmtNominalCrcy` | `I_Currency` | [0..1] |
| `_AgrmtSpclArrgmtAssessmentCrcy` | `I_Currency` | [0..1] |
| `_AgrmtSpclArrgmtBankCountry` | `I_Country` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTSPECIALARRANGEMENT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTSPECIALARRANGEMENT')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICAGSA',
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
    representativeKey: 'AgrmtSpecialArrangementUUID'
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
@EndUserText.label: 'Agreement Special Arrangement Details'
define view I_AgreementSpecialArrangement
  as select from cms_cag_sa
  association [0..1] to I_CollateralAgreementData     as _CollateralAgreementData       on  $projection.AgrmtSpecialArrangementRefUUID = _CollateralAgreementData.CollateralAgreementUUID
  association [0..1] to I_AgreementPortion            as _AgreementPortion              on  $projection.AgrmtSpecialArrangementRefUUID = _AgreementPortion.AgreementPortionUUID
  association [0..*] to I_AgreementPartner            as _AgreementPartner              on  $projection.AgrmtSpecialArrangementRefUUID = _AgreementPartner.CollateralAgreementUUID
                                                                                        or  $projection.AgrmtSpecialArrangementRefUUID = _AgreementPartner.AgreementPortionUUID
  association [0..*] to I_AgreementTerminationAndCost as _AgreementTerminationAndCost   on  $projection.AgrmtSpecialArrangementRefUUID = _AgreementTerminationAndCost.AgreementTermnAndCostLinkUUID
  association [0..*] to I_AssetAgreementLinkData      as _AssetAgreementLinkData        on  $projection.AgrmtSpecialArrangementRefUUID = _AssetAgreementLinkData.CollateralAgreementUUID
  association [0..*] to I_CollateralAgreementRelshp   as _CollateralAgreementRelshp     on  $projection.AgrmtSpecialArrangementRefUUID = _CollateralAgreementRelshp.AgreementRelationshipSrceUUID
                                                                                        or  $projection.AgrmtSpecialArrangementRefUUID = _CollateralAgreementRelshp.AgreementRelationshipDestUUID
  association [0..*] to I_AgreementReceivableLinkData as _AgreementReceivableLinkData   on  $projection.AgrmtSpecialArrangementRefUUID = _AgreementReceivableLinkData.AgreementPortionUUID
  association [0..1] to I_CollateralObjectCalcData    as _CollateralObjectCalcData      on  $projection.AgrmtSpecialArrangementRefUUID     = _CollateralObjectCalcData.CollateralObjectUUID
                                                                                        and _CollateralObjectCalcData.CollateralObjectType = 'CAG'
  association [0..*] to I_AgreementAssetCalcData      as _AgreementAssetCalcData        on  $projection.AgrmtSpecialArrangementRefUUID = _AgreementAssetCalcData.CollateralAgreementUUID
  association [0..*] to I_AgreementRelshpCalcData     as _AgreementRelshpCalcData       on  $projection.AgrmtSpecialArrangementRefUUID = _AgreementRelshpCalcData.AgreementRelationshipSrceUUID
                                                                                        or  $projection.AgrmtSpecialArrangementRefUUID = _AgreementRelshpCalcData.AgreementRelationshipDestUUID
  association [0..*] to I_AgreementPortionCalcData    as _AgreementPortionCalcData      on  $projection.AgrmtSpecialArrangementRefUUID = _AgreementPortionCalcData.AgreementPortionUUID
  association [0..*] to I_AgreementReceivableCalcData as _AgreementReceivableCalcData   on  $projection.AgrmtSpecialArrangementRefUUID = _AgreementReceivableCalcData.AgreementPortionUUID
  association [0..1] to I_AgreementSpecialArrgmtType  as _AgreementSpecialArrgmtType    on  $projection.AgreementSpecialArrgmtType = _AgreementSpecialArrgmtType.AgreementSpecialArrgmtType
  association [0..1] to I_AgrmtSpclArrgmtProcgSts     as _AgrmtSpclArrgmtProcgStatus    on  $projection.AgrmtSpclArrgmtProcgStatus = _AgrmtSpclArrgmtProcgStatus.AgrmtSpclArrgmtProcgStatus
  association [0..1] to I_AgrmtSpclArrgmtLglSts       as _AgrmtSpclArrgmtLegalStatus    on  $projection.AgrmtSpclArrgmtLegalStatus = _AgrmtSpclArrgmtLegalStatus.AgrmtSpclArrgmtLegalStatus
  association [0..1] to I_Currency                    as _AgrmtSpclArrgmtNominalCrcy    on  $projection.AgrmtSpclArrgmtNominalCurrency = _AgrmtSpclArrgmtNominalCrcy.Currency
  association [0..1] to I_Currency                    as _AgrmtSpclArrgmtAssessmentCrcy on  $projection.AgrmtSpclArrgmtAssessmentCrcy = _AgrmtSpclArrgmtAssessmentCrcy.Currency
  association [0..1] to I_Country                     as _AgrmtSpclArrgmtBankCountry    on  $projection.AgrmtSpclArrgmtBankCountry = _AgrmtSpclArrgmtBankCountry.Country
{
  key cag_sa_guid    as AgrmtSpecialArrangementUUID,
      ref_guid       as AgrmtSpecialArrangementRefUUID,
      @ObjectModel.foreignKey.association: '_AgreementSpecialArrgmtType'
      sa_type        as AgreementSpecialArrgmtType,
      sa_id          as AgreementSpecialArrangementID,
      @ObjectModel.foreignKey.association: '_AgrmtSpclArrgmtProcgStatus'
      proc_stat      as AgrmtSpclArrgmtProcgStatus,
      @ObjectModel.foreignKey.association: '_AgrmtSpclArrgmtLegalStatus'
      legal_stat     as AgrmtSpclArrgmtLegalStatus,
      valid_from     as AgrmtSpclArrgmtValidFromDate,
      valid_to       as AgrmtSpclArrgmtValidToDate,
      @Semantics.amount.currencyCode: 'AgrmtSpclArrgmtNominalCurrency'
      nom_value      as AgrmtSpclArrgmtNominalAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_AgrmtSpclArrgmtNominalCrcy'
      nom_value_curr as AgrmtSpclArrgmtNominalCurrency,
      @Semantics.amount.currencyCode: 'AgrmtSpclArrgmtAssessmentCrcy'
      asmt_amt       as AgrmtSpclArrgmtAssessmentAmt,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_AgrmtSpclArrgmtAssessmentCrcy'
      asmt_amt_curr  as AgrmtSpclArrgmtAssessmentCrcy,
      @ObjectModel.foreignKey.association: '_AgrmtSpclArrgmtBankCountry'
      bank_ctry      as AgrmtSpclArrgmtBankCountry,
      bank_key       as AgrmtSpclArrgmtBankKey,
      bank_acct      as AgrmtSpclArrgmtBankAcctNmbr,
      ref_agmt_id    as AgrmtSpclArrgmtPurchaseID,
      ref_agmt_date  as AgrmtSpclArrgmtPurchaseDate,
      description    as AgrmtSpclArrgmtDescription,

      _CollateralAgreementData,
      _AgreementPortion,
      _AgreementPartner,
      _AgreementTerminationAndCost,
      _AssetAgreementLinkData,
      _CollateralAgreementRelshp,
      _AgreementReceivableLinkData,
      _CollateralObjectCalcData,
      _AgreementAssetCalcData,
      _AgreementRelshpCalcData,
      _AgreementPortionCalcData,
      _AgreementReceivableCalcData,
      _AgreementSpecialArrgmtType,
      _AgrmtSpclArrgmtProcgStatus,
      _AgrmtSpclArrgmtLegalStatus,
      _AgrmtSpclArrgmtNominalCrcy,
      _AgrmtSpclArrgmtAssessmentCrcy,
      _AgrmtSpclArrgmtBankCountry

}
```
