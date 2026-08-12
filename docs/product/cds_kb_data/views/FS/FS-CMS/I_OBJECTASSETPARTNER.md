---
name: I_OBJECTASSETPARTNER
description: "Object Asset Business Partner Details"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETPARTNER')/$value
semantic_en: "Object Asset Business Partner Details"
semantic_vi: "Object Asset Business Partner Details — CDS view giao diện dựa trên cms_ast_bp."
keywords:
  - "object"
  - "asset"
  - "business"
  - "partner"
  - "details"
  - "function"
  - "valid"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - bo:businesspartner
---
# I_OBJECTASSETPARTNER

**Object Asset Business Partner Details**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETPARTNER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ObjectAssetPartnerUUID` | ✓ | |  | `ast_bp_guid` | `RAW(16)` | GUID for Table CMS_AST_BP |
| `ObjectAssetUUID` |  | |  | `ast_guid` | `RAW(16)` | GUID for Table CMS_AST |
| `ObjectAssetPartnerID` |  | |  | `cast( bu_partnerid as cms_dte_bpid_vdm preserving type )` | `CHAR(32)` | Business Partner ID |
| `ObjectAssetPartnerFunction` |  | |  | `bpf` | `CHAR(6)` | Business Partner Function |
| `ObjectAssetPartnerValidFromDte` |  | |  | `vald_frm` | `DATS(8)` | Valid from Date |
| `ObjectAssetPartnerValidToDate` |  | |  | `vald_tll` | `DATS(8)` | Valid to Date |
| `ObjectAssetReferenceSystem` |  | | `_ObjectAssetData` | `ObjectAssetReferenceSystem` | `CHAR(6)` | Object System Reference ID |
| `LiquidationObjectRefSystem` |  | | `_LiquidationData` | `LiquidationObjectRefSystem` | `CHAR(6)` | Object System Reference ID for Liquidation |
| `InsuranceObjectCategory` |  | | `_InsuranceObjectData` | `InsuranceObjectCategory` | `CHAR(6)` | Object Category |
| `CollateralObjectCategory` |  | | `_CollateralInsurance` | `CollateralObjectCategory` | `CHAR(6)` | Object Category |
| `MovableObjectUUID` |  | | `_MovableObjectData` | `MovableObjectUUID` | `RAW(16)` | GUID for  CMS_MOVABLES |
| `RightsObjectUUID` |  | | `_RightsObjectData` | `RightsObjectUUID` | `RAW(16)` | Rights GUID |
| `_ObjectAssetData` | | ✓ | | | | |
| `_ObjectAssetDocument` | | ✓ | | | | |
| `_AssetAgreementLinkData` | | ✓ | | | | |
| `_LiquidationData` | | ✓ | | | | |
| `_InsuranceObjectData` | | ✓ | | | | |
| `_MovableObjectData` | | ✓ | | | | |
| `_ShipObjectData` | | ✓ | | | | |
| `_RightsObjectData` | | ✓ | | | | |
| `_InsuranceObjectMasterData` | | ✓ | | | | |
| `_CollateralInsurance` | | ✓ | | | | |
| `_MovableObjectMasterData` | | ✓ | | | | |
| `_RightsObjectMasterData` | | ✓ | | | | |
| `_CollateralObjectCalcData` | | ✓ | | | | |
| `_AgreementAssetCalcData` | | ✓ | | | | |
| `_ObjectAssetPartnerFunction` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ObjectAssetData` | `I_ObjectAssetData` | [0..1] |
| `_ObjectAssetDocument` | `I_ObjectAssetDocument` | [0..*] |
| `_AssetAgreementLinkData` | `I_AssetAgreementLinkData` | [0..*] |
| `_LiquidationData` | `I_LiquidationData` | [0..1] |
| `_InsuranceObjectData` | `I_InsuranceObjectData` | [0..1] |
| `_MovableObjectData` | `I_MovableObjectData` | [0..1] |
| `_ShipObjectData` | `I_ShipObjectData` | [0..*] |
| `_RightsObjectData` | `I_RightsObjectData` | [0..1] |
| `_InsuranceObjectMasterData` | `I_InsuranceObjectMasterData` | [0..1] |
| `_CollateralInsurance` | `I_CollateralInsurance` | [0..1] |
| `_MovableObjectMasterData` | `I_MovableObjectMasterData` | [0..1] |
| `_RightsObjectMasterData` | `I_RightsObjectMasterData` | [0..1] |
| `_CollateralObjectCalcData` | `I_CollateralObjectCalcData` | [0..1] |
| `_AgreementAssetCalcData` | `I_AgreementAssetCalcData` | [0..*] |
| `_ObjectAssetPartnerFunction` | `I_CollateralPartnerFunction` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETPARTNER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETPARTNER')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'IOBJASSETBP',
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
        serviceQuality: 'B',
        sizeCategory: 'L',
        dataClass: 'MASTER'
    },
    supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'ObjectAssetPartnerUUID'
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
        mapping: [ {
           table : 'CMS_AST_BP',
           role : #MAIN,
           viewElement : ['ObjectAssetPartnerUUID'],
           tableElement : ['AST_BP_GUID']
        } ]
    }
  }
}
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Object Asset Business Partner Details'
define view I_ObjectAssetPartner
  as select from cms_ast_bp
  association [0..1] to I_ObjectAssetData           as _ObjectAssetData            on  $projection.ObjectAssetUUID = _ObjectAssetData.ObjectAssetUUID
  association [0..*] to I_ObjectAssetDocument       as _ObjectAssetDocument        on  $projection.ObjectAssetUUID = _ObjectAssetDocument.ObjectAssetUUID
  association [0..*] to I_AssetAgreementLinkData    as _AssetAgreementLinkData     on  $projection.ObjectAssetUUID = _AssetAgreementLinkData.ObjectAssetUUID
  association [0..1] to I_LiquidationData           as _LiquidationData            on  $projection.ObjectAssetUUID = _LiquidationData.CollateralLiquidationUUID
  association [0..1] to I_InsuranceObjectData       as _InsuranceObjectData        on  $projection.ObjectAssetUUID = _InsuranceObjectData.InsuranceObjectUUID
  association [0..1] to I_MovableObjectData         as _MovableObjectData          on  $projection.ObjectAssetUUID = _MovableObjectData.MovableObjectUUID
  association [0..*] to I_ShipObjectData            as _ShipObjectData             on  $projection.ObjectAssetUUID = _ShipObjectData.ObjectAssetUUID
  association [0..1] to I_RightsObjectData          as _RightsObjectData           on  $projection.ObjectAssetUUID = _RightsObjectData.RightsObjectUUID
  association [0..1] to I_InsuranceObjectMasterData as _InsuranceObjectMasterData  on  $projection.ObjectAssetUUID = _InsuranceObjectMasterData.InsuranceObjectUUID
  association [0..1] to I_CollateralInsurance       as _CollateralInsurance        on  $projection.ObjectAssetUUID = _CollateralInsurance.CollateralInsuranceUUID
  association [0..1] to I_MovableObjectMasterData   as _MovableObjectMasterData    on  $projection.ObjectAssetUUID = _MovableObjectMasterData.MovableObjectUUID
  association [0..1] to I_RightsObjectMasterData    as _RightsObjectMasterData     on  $projection.ObjectAssetUUID = _RightsObjectMasterData.RightsObjectUUID
  association [0..1] to I_CollateralObjectCalcData  as _CollateralObjectCalcData   on  $projection.ObjectAssetUUID                    = _CollateralObjectCalcData.CollateralObjectUUID
                                                                                   and _CollateralObjectCalcData.CollateralObjectType = 'AST'
  association [0..*] to I_AgreementAssetCalcData    as _AgreementAssetCalcData     on  $projection.ObjectAssetUUID = _AgreementAssetCalcData.ObjectAssetUUID
  association [0..1] to I_CollateralPartnerFunction as _ObjectAssetPartnerFunction on  $projection.ObjectAssetPartnerFunction = _ObjectAssetPartnerFunction.CollateralPartnerFunction
{
  key ast_bp_guid                                              as ObjectAssetPartnerUUID,
      ast_guid                                                 as ObjectAssetUUID,
      cast( bu_partnerid as cms_dte_bpid_vdm preserving type ) as ObjectAssetPartnerID,
      @ObjectModel.foreignKey.association: '_ObjectAssetPartnerFunction'
      bpf                                                      as ObjectAssetPartnerFunction,
      vald_frm                                                 as ObjectAssetPartnerValidFromDte,
      vald_tll                                                 as ObjectAssetPartnerValidToDate,

      _ObjectAssetData.ObjectAssetReferenceSystem              as ObjectAssetReferenceSystem,
      _LiquidationData.LiquidationObjectRefSystem              as LiquidationObjectRefSystem,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'CollateralObjectCategory'
      _InsuranceObjectData.InsuranceObjectCategory             as InsuranceObjectCategory,
      _CollateralInsurance.CollateralObjectCategory            as CollateralObjectCategory,
      _MovableObjectData.MovableObjectUUID                     as MovableObjectUUID,
      _RightsObjectData.RightsObjectUUID                       as RightsObjectUUID,

      _ObjectAssetData,
      _ObjectAssetDocument,
      _AssetAgreementLinkData,
      _LiquidationData,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CollateralInsurance'
      _InsuranceObjectData,
      _MovableObjectData,
      _ShipObjectData,
      _RightsObjectData,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CollateralInsurance'
      _InsuranceObjectMasterData,
      _CollateralInsurance,
      _MovableObjectMasterData,
      _RightsObjectMasterData,
      _CollateralObjectCalcData,
      _AgreementAssetCalcData,
      _ObjectAssetPartnerFunction
}
```
