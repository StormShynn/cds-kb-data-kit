---
name: I_AGREEMENTPARTNER
description: "Agreement Business Partner Relationship"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPARTNER')/$value
semantic_en: "Agreement Business Partner Relationship"
semantic_vi: "Agreement Business Partner Relationship — CDS view giao diện dựa trên cms_cag_bp."
keywords:
  - "agreement"
  - "business"
  - "partner"
  - "relationship"
  - "collateral"
  - "portion"
  - "function"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - bo:businesspartner
---
# I_AGREEMENTPARTNER

**Agreement Business Partner Relationship**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPARTNER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgreementPartnerUUID` | ✓ | |  | `cag_bp_guid` | `RAW(16)` | GUID for Table CMS_CAG_BP |
| `CollateralAgreementUUID` |  | |  | `cag_guid` | `RAW(16)` | GUID for Table CMS_CAG |
| `AgreementPortionUUID` |  | |  | `cag_por_guid` | `RAW(16)` | GUID for Table CMS_CAG_POR |
| `AgreementPartnerID` |  | |  | `cast( bu_partnerid as cms_dte_bpid_vdm preserving type )` | `CHAR(32)` | Business Partner ID |
| `AgreementPartnerFunction` |  | |  | `bpf` | `CHAR(6)` | Business Partner Function |
| `AgreementPartnerSignDate` |  | |  | `sign_date` | `DATS(8)` | Date on which Business Partner Signs an Agreement |
| `AgrmtPartnerAgrmtDisclosureDte` |  | |  | `disclosure_date` | `DATS(8)` | Date on which Business Partner is disclosed an agreement |
| `_CollateralAgreementData` | | ✓ | | | | |
| `_AgreementPortion` | | ✓ | | | | |
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
| `_AgreementPartnerFunction` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CollateralAgreementData` | `I_CollateralAgreementData` | [0..1] |
| `_AgreementPortion` | `I_AgreementPortion` | [0..1] |
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
| `_AgreementPartnerFunction` | `I_CollateralPartnerFunction` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPARTNER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPARTNER')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICAGPARTNER',
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
    representativeKey: 'AgreementPartnerUUID'
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
@EndUserText.label: 'Agreement Business Partner Relationship'
define view I_AgreementPartner
  as select from cms_cag_bp
  association [0..1] to I_CollateralAgreementData     as _CollateralAgreementData     on  $projection.CollateralAgreementUUID = _CollateralAgreementData.CollateralAgreementUUID
  association [0..1] to I_AgreementPortion            as _AgreementPortion            on  $projection.AgreementPortionUUID = _AgreementPortion.AgreementPortionUUID
  association [0..*] to I_AgreementSpecialArrangement as _AgreementSpecialArrangement on  $projection.CollateralAgreementUUID = _AgreementSpecialArrangement.AgrmtSpecialArrangementRefUUID
                                                                                      or  $projection.AgreementPortionUUID    = _AgreementSpecialArrangement.AgrmtSpecialArrangementRefUUID
  association [0..*] to I_AgreementTerminationAndCost as _AgreementTerminationAndCost on  $projection.CollateralAgreementUUID = _AgreementTerminationAndCost.AgreementTermnAndCostLinkUUID
                                                                                      or  $projection.AgreementPartnerUUID    = _AgreementTerminationAndCost.AgreementTermnAndCostLinkUUID
  association [0..*] to I_AgreementPortionRules       as _AgreementPortionRules       on  $projection.AgreementPortionUUID = _AgreementPortionRules.AgreementPortionUUID
  association [0..*] to I_AssetAgreementLinkData      as _AssetAgreementLinkData      on  $projection.CollateralAgreementUUID = _AssetAgreementLinkData.CollateralAgreementUUID
  association [0..*] to I_CollateralAgreementRelshp   as _CollateralAgreementRelshp   on  $projection.CollateralAgreementUUID = _CollateralAgreementRelshp.AgreementRelationshipSrceUUID
                                                                                      or  $projection.CollateralAgreementUUID = _CollateralAgreementRelshp.AgreementRelationshipDestUUID
  association [0..*] to I_AgreementReceivableLinkData as _AgreementReceivableLinkData on  $projection.AgreementPortionUUID = _AgreementReceivableLinkData.AgreementPortionUUID
  association [0..1] to I_CollateralObjectCalcData    as _CollateralObjectCalcData    on  $projection.CollateralAgreementUUID            = _CollateralObjectCalcData.CollateralObjectUUID
                                                                                      and _CollateralObjectCalcData.CollateralObjectType = 'CAG'
  association [0..*] to I_AgreementAssetCalcData      as _AgreementAssetCalcData      on  $projection.CollateralAgreementUUID = _AgreementAssetCalcData.CollateralAgreementUUID
  association [0..*] to I_AgreementRelshpCalcData     as _AgreementRelshpCalcData     on  $projection.CollateralAgreementUUID = _AgreementRelshpCalcData.AgreementRelationshipSrceUUID
                                                                                      or  $projection.CollateralAgreementUUID = _AgreementRelshpCalcData.AgreementRelationshipDestUUID
  association [0..1] to I_AgreementPortionCalcData    as _AgreementPortionCalcData    on  $projection.AgreementPortionUUID    = _AgreementPortionCalcData.AgreementPortionUUID
                                                                                      and $projection.CollateralAgreementUUID = _AgreementPortionCalcData.CollateralAgreementUUID
  association [0..*] to I_AgreementReceivableCalcData as _AgreementReceivableCalcData on  $projection.AgreementPortionUUID    = _AgreementReceivableCalcData.AgreementPortionUUID
                                                                                      and $projection.CollateralAgreementUUID = _AgreementReceivableCalcData.CollateralAgreementUUID
  association [0..1] to I_CollateralPartnerFunction   as _AgreementPartnerFunction    on  $projection.AgreementPartnerFunction = _AgreementPartnerFunction.CollateralPartnerFunction
{
  key cag_bp_guid                                              as AgreementPartnerUUID,
      cag_guid                                                 as CollateralAgreementUUID,
      cag_por_guid                                             as AgreementPortionUUID,
      cast( bu_partnerid as cms_dte_bpid_vdm preserving type ) as AgreementPartnerID,
      @ObjectModel.foreignKey.association: '_AgreementPartnerFunction'
      bpf                                                      as AgreementPartnerFunction,
      sign_date                                                as AgreementPartnerSignDate,
      disclosure_date                                          as AgrmtPartnerAgrmtDisclosureDte,

      _CollateralAgreementData,
      _AgreementPortion,
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
      _AgreementPartnerFunction
}
```
