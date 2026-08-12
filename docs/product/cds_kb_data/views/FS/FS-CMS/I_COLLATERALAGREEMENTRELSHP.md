---
name: I_COLLATERALAGREEMENTRELSHP
description: "Agreement Relationship Details"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALAGREEMENTRELSHP')/$value
semantic_en: "Agreement Relationship Details"
semantic_vi: "Agreement Relationship Details — CDS view giao diện dựa trên cms_rel."
keywords:
  - "agreement"
  - "relationship"
  - "details"
  - "type"
  - "srce"
  - "agrmt"
  - "relshp"
  - "secdry"
  - "dest"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLATERALAGREEMENTRELSHP

**Agreement Relationship Details**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALAGREEMENTRELSHP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgreementRelationshipUUID` | ✓ | |  | `rel_guid` | `RAW(16)` | GUID for Table CMS_REL |
| `AgreementRelationshipType` |  | |  | `rel_typ` | `CHAR(6)` | Relationship type |
| `AgreementRelationshipSrceUUID` |  | |  | `source_guid` | `RAW(16)` | Relationship Source GUID |
| `AgrmtRelshpSrceSecdryUUID` |  | |  | `src_sec_guid` | `RAW(16)` | Relationship Source Secondary GUID |
| `AgreementRelationshipDestUUID` |  | |  | `destination_guid` | `RAW(16)` | Relationship destination GUID |
| `AgrmtRelshpValidFromDate` |  | |  | `cast( substring(valid_from, 2, 8 ) as cms_dte_date )` | `DATS(8)` | Date |
| `AgrmtRelshpValidToDate` |  | |  | `cast( substring(valid_to, 2, 8 ) as cms_dte_date )` | `DATS(8)` | Date |
| `AgrmtRelshpRankValue` |  | |  | `rel_rank` | `NUMC(4)` | Relationship Rank-Order of the source linked to destination |
| `AgrmtRelshpPriorityValue` |  | |  | `rel_priority` | `NUMC(4)` | Priority of a Relationship |
| `AgreementRelationshipCalcType` |  | |  | `calc_typ` | `CHAR(6)` | Calculation type for relations of collateral agreements |
| `AgreementRelationshipObject` |  | |  | `rel_obj` | `CHAR(6)` | Relationship Object |
| `_CollateralAgreementData` | | ✓ | | | | |
| `_AgreementPortion` | | ✓ | | | | |
| `_AgreementPartner` | | ✓ | | | | |
| `_AgreementSpecialArrangement` | | ✓ | | | | |
| `_AgreementTerminationAndCost` | | ✓ | | | | |
| `_AssetAgreementLinkData` | | ✓ | | | | |
| `_CollateralObjectCalcData` | | ✓ | | | | |
| `_AgreementAssetCalcData` | | ✓ | | | | |
| `_AgreementRelshpCalcData` | | ✓ | | | | |
| `_AgreementPortionCalcData` | | ✓ | | | | |
| `_AgreementReceivableCalcData` | | ✓ | | | | |
| `_AgreementRelationshipType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CollateralAgreementData` | `I_CollateralAgreementData` | [0..*] |
| `_AgreementPortion` | `I_AgreementPortion` | [0..*] |
| `_AgreementPartner` | `I_AgreementPartner` | [0..*] |
| `_AgreementSpecialArrangement` | `I_AgreementSpecialArrangement` | [0..*] |
| `_AgreementTerminationAndCost` | `I_AgreementTerminationAndCost` | [0..*] |
| `_AssetAgreementLinkData` | `I_AssetAgreementLinkData` | [0..*] |
| `_CollateralObjectCalcData` | `I_CollateralObjectCalcData` | [0..*] |
| `_AgreementAssetCalcData` | `I_AgreementAssetCalcData` | [0..*] |
| `_AgreementRelshpCalcData` | `I_AgreementRelshpCalcData` | [0..1] |
| `_AgreementPortionCalcData` | `I_AgreementPortionCalcData` | [0..*] |
| `_AgreementReceivableCalcData` | `I_AgreementReceivableCalcData` | [0..*] |
| `_AgreementRelationshipType` | `I_AgreementRelationshipType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALAGREEMENTRELSHP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALAGREEMENTRELSHP')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICAGREL',
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
    representativeKey: 'AgreementRelationshipUUID'
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
@EndUserText.label: 'Agreement Relationship Details'
define view I_CollateralAgreementRelshp
  as select from cms_rel
  association [0..*] to I_CollateralAgreementData     as _CollateralAgreementData     on  $projection.AgreementRelationshipSrceUUID = _CollateralAgreementData.CollateralAgreementUUID
                                                                                      or  $projection.AgreementRelationshipDestUUID = _CollateralAgreementData.CollateralAgreementUUID
  association [0..*] to I_AgreementPortion            as _AgreementPortion            on  $projection.AgreementRelationshipSrceUUID = _AgreementPortion.CollateralAgreementUUID
                                                                                      or  $projection.AgreementRelationshipDestUUID = _AgreementPortion.CollateralAgreementUUID
  association [0..*] to I_AgreementPartner            as _AgreementPartner            on  $projection.AgreementRelationshipSrceUUID = _AgreementPartner.CollateralAgreementUUID
                                                                                      or  $projection.AgreementRelationshipDestUUID = _AgreementPartner.CollateralAgreementUUID
  association [0..*] to I_AgreementSpecialArrangement as _AgreementSpecialArrangement on  $projection.AgreementRelationshipSrceUUID = _AgreementSpecialArrangement.AgrmtSpecialArrangementRefUUID
                                                                                      or  $projection.AgreementRelationshipDestUUID = _AgreementSpecialArrangement.AgrmtSpecialArrangementRefUUID
  association [0..*] to I_AgreementTerminationAndCost as _AgreementTerminationAndCost on  $projection.AgreementRelationshipSrceUUID = _AgreementTerminationAndCost.AgreementTermnAndCostLinkUUID
                                                                                      or  $projection.AgreementRelationshipDestUUID = _AgreementTerminationAndCost.AgreementTermnAndCostLinkUUID
  association [0..*] to I_AssetAgreementLinkData      as _AssetAgreementLinkData      on  $projection.AgreementRelationshipSrceUUID = _AssetAgreementLinkData.CollateralAgreementUUID
                                                                                      or  $projection.AgreementRelationshipDestUUID = _AssetAgreementLinkData.CollateralAgreementUUID
  association [0..*] to I_CollateralObjectCalcData    as _CollateralObjectCalcData    on  (
                                                                                          $projection.AgreementRelationshipSrceUUID    = _CollateralObjectCalcData.CollateralObjectUUID
                                                                                          or $projection.AgreementRelationshipDestUUID = _CollateralObjectCalcData.CollateralObjectUUID
                                                                                        )
                                                                                      and _CollateralObjectCalcData.CollateralObjectType = 'CAG'
  association [0..*] to I_AgreementAssetCalcData      as _AgreementAssetCalcData      on  $projection.AgreementRelationshipSrceUUID = _AgreementAssetCalcData.CollateralAgreementUUID
                                                                                      or  $projection.AgreementRelationshipDestUUID = _AgreementAssetCalcData.CollateralAgreementUUID
  association [0..1] to I_AgreementRelshpCalcData     as _AgreementRelshpCalcData     on  $projection.AgreementRelationshipUUID = _AgreementRelshpCalcData.AgreementRelationshipUUID
  association [0..*] to I_AgreementPortionCalcData    as _AgreementPortionCalcData    on  $projection.AgreementRelationshipSrceUUID = _AgreementPortionCalcData.CollateralAgreementUUID
                                                                                      or  $projection.AgreementRelationshipDestUUID = _AgreementPortionCalcData.CollateralAgreementUUID
  association [0..*] to I_AgreementReceivableCalcData as _AgreementReceivableCalcData on  $projection.AgreementRelationshipSrceUUID = _AgreementReceivableCalcData.CollateralAgreementUUID
                                                                                      or  $projection.AgreementRelationshipDestUUID = _AgreementReceivableCalcData.CollateralAgreementUUID
  association [0..1] to I_AgreementRelationshipType   as _AgreementRelationshipType   on  $projection.AgreementRelationshipType = _AgreementRelationshipType.AgreementRelationshipType

{
  key rel_guid                                             as AgreementRelationshipUUID,
      @ObjectModel.foreignKey.association: '_AgreementRelationshipType'
      rel_typ                                              as AgreementRelationshipType,
      source_guid                                          as AgreementRelationshipSrceUUID,
      src_sec_guid                                         as AgrmtRelshpSrceSecdryUUID,
      destination_guid                                     as AgreementRelationshipDestUUID,
      cast( substring(valid_from, 2, 8 ) as cms_dte_date ) as AgrmtRelshpValidFromDate,
      cast( substring(valid_to, 2, 8 ) as cms_dte_date )   as AgrmtRelshpValidToDate,
      rel_rank                                             as AgrmtRelshpRankValue,
      rel_priority                                         as AgrmtRelshpPriorityValue,
      calc_typ                                             as AgreementRelationshipCalcType,
      rel_obj                                              as AgreementRelationshipObject,

      _CollateralAgreementData,
      _AgreementPortion,
      _AgreementPartner,
      _AgreementSpecialArrangement,
      _AgreementTerminationAndCost,
      _AssetAgreementLinkData,
      _CollateralObjectCalcData,
      _AgreementAssetCalcData,
      _AgreementRelshpCalcData,
      _AgreementPortionCalcData,
      _AgreementReceivableCalcData,
      _AgreementRelationshipType
}
```
