---
name: I_OBJECTASSETDOCUMENT
description: "Object Asset Document Details"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETDOCUMENT')/$value
semantic_en: "Object Asset Document Details"
semantic_vi: "Object Asset Document Details — CDS view giao diện dựa trên cms_ast_doc."
keywords:
  - "object"
  - "asset"
  - "document"
  - "details"
  - "reference"
  - "number"
  - "type"
  - "date"
tags:
  - FS
  - component:FS-CMS
  - document
  - FS-CMS
  - interface-view
---
# I_OBJECTASSETDOCUMENT

**Object Asset Document Details**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETDOCUMENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ObjectAssetDocUUID` | ✓ | |  | `ast_doc_guid` | `RAW(16)` | GUID for Table CMS_AST_DOC |
| `ObjectAssetUUID` |  | |  | `ast_guid` | `RAW(16)` | GUID for Table CMS_AST |
| `ObjectAssetDocReferenceNumber` |  | |  | `doc_referenceid` | `CHAR(64)` | Reference Document ID |
| `ObjectAssetDocType` |  | |  | `doc_type` | `CHAR(6)` | Document Type |
| `ObjectAssetDocDate` |  | |  | `doc_date` | `DATS(8)` | Document Date |
| `ObjectAssetDocPhysicalLocation` |  | |  | `physical_locn` | `CHAR(6)` | Physical Location of Document |
| `ObjectAssetDocValidFromDate` |  | |  | `cast( substring(valid_from, 2, 8 ) as cms_dte_date )` | `DATS(8)` | Date |
| `ObjectAssetDocValidToDate` |  | |  | `cast( substring(valid_to, 2, 8 ) as cms_dte_date )` | `DATS(8)` | Date |
| `ObjectAssetReferenceSystem` |  | | `_ObjectAssetData` | `ObjectAssetReferenceSystem` | `CHAR(6)` | Object System Reference ID |
| `LiquidationObjectRefSystem` |  | | `_LiquidationData` | `LiquidationObjectRefSystem` | `CHAR(6)` | Object System Reference ID for Liquidation |
| `InsuranceObjectCategory` |  | | `_InsuranceObjectData` | `InsuranceObjectCategory` | `CHAR(6)` | Object Category |
| `CollateralObjectCategory` |  | | `_CollateralInsurance` | `CollateralObjectCategory` | `CHAR(6)` | Object Category |
| `MovableObjectUUID` |  | | `_MovableObjectData` | `MovableObjectUUID` | `RAW(16)` | GUID for  CMS_MOVABLES |
| `RightsObjectUUID` |  | | `_RightsObjectData` | `RightsObjectUUID` | `RAW(16)` | Rights GUID |
| `_ObjectAssetData` | | ✓ | | | | |
| `_ObjectAssetPartner` | | ✓ | | | | |
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
| `_ObjectAssetDocType` | | ✓ | | | | |
| `_ObjectAssetDocPhysicalLoc` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ObjectAssetData` | `I_ObjectAssetData` | [0..1] |
| `_ObjectAssetPartner` | `I_ObjectAssetPartner` | [0..*] |
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
| `_ObjectAssetDocType` | `I_CollateralDocumentType` | [0..1] |
| `_ObjectAssetDocPhysicalLoc` | `I_CollateralAttributeIndType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETDOCUMENT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTASSETDOCUMENT')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'IOBJASSETDOC',
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
    representativeKey: 'ObjectAssetDocUUID'
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
           table : 'CMS_AST_DOC',
           role : #MAIN,
           viewElement : ['ObjectAssetDocUUID'],
           tableElement : ['AST_DOC_GUID']
        } ]
    }
  }
}
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Object Asset Document Details'
define view I_ObjectAssetDocument
  as select from cms_ast_doc
  association [0..1] to I_ObjectAssetData            as _ObjectAssetData           on  $projection.ObjectAssetUUID = _ObjectAssetData.ObjectAssetUUID
  association [0..*] to I_ObjectAssetPartner         as _ObjectAssetPartner        on  $projection.ObjectAssetUUID = _ObjectAssetPartner.ObjectAssetUUID
  association [0..*] to I_AssetAgreementLinkData     as _AssetAgreementLinkData    on  $projection.ObjectAssetUUID = _AssetAgreementLinkData.ObjectAssetUUID
  association [0..1] to I_LiquidationData            as _LiquidationData           on  $projection.ObjectAssetUUID = _LiquidationData.CollateralLiquidationUUID
  association [0..1] to I_InsuranceObjectData        as _InsuranceObjectData       on  $projection.ObjectAssetUUID = _InsuranceObjectData.InsuranceObjectUUID
  association [0..1] to I_MovableObjectData          as _MovableObjectData         on  $projection.ObjectAssetUUID = _MovableObjectData.MovableObjectUUID
  association [0..*] to I_ShipObjectData             as _ShipObjectData            on  $projection.ObjectAssetUUID = _ShipObjectData.ObjectAssetUUID
  association [0..1] to I_RightsObjectData           as _RightsObjectData          on  $projection.ObjectAssetUUID = _RightsObjectData.RightsObjectUUID
  association [0..1] to I_InsuranceObjectMasterData  as _InsuranceObjectMasterData on  $projection.ObjectAssetUUID = _InsuranceObjectMasterData.InsuranceObjectUUID
  association [0..1] to I_CollateralInsurance        as _CollateralInsurance       on  $projection.ObjectAssetUUID = _CollateralInsurance.CollateralInsuranceUUID
  association [0..1] to I_MovableObjectMasterData    as _MovableObjectMasterData   on  $projection.ObjectAssetUUID = _MovableObjectMasterData.MovableObjectUUID
  association [0..1] to I_RightsObjectMasterData     as _RightsObjectMasterData    on  $projection.ObjectAssetUUID = _RightsObjectMasterData.RightsObjectUUID
  association [0..1] to I_CollateralObjectCalcData   as _CollateralObjectCalcData  on  $projection.ObjectAssetUUID                    = _CollateralObjectCalcData.CollateralObjectUUID
                                                                                   and _CollateralObjectCalcData.CollateralObjectType = 'AST'
  association [0..*] to I_AgreementAssetCalcData     as _AgreementAssetCalcData    on  $projection.ObjectAssetUUID = _AgreementAssetCalcData.ObjectAssetUUID
  association [0..1] to I_CollateralDocumentType     as _ObjectAssetDocType        on  $projection.ObjectAssetDocType = _ObjectAssetDocType.CollateralDocumentType
  association [0..1] to I_CollateralAttributeIndType as _ObjectAssetDocPhysicalLoc on  $projection.ObjectAssetDocPhysicalLocation           = _ObjectAssetDocPhysicalLoc.CollateralAttributeIndType
                                                                                   and _ObjectAssetDocPhysicalLoc.CollateralAttributeIndCat = 'DOC001'
{
  key ast_doc_guid                                         as ObjectAssetDocUUID,
      ast_guid                                             as ObjectAssetUUID,
      doc_referenceid                                      as ObjectAssetDocReferenceNumber,
      @ObjectModel.foreignKey.association: '_ObjectAssetDocType'
      doc_type                                             as ObjectAssetDocType,
      doc_date                                             as ObjectAssetDocDate,
      @ObjectModel.foreignKey.association: '_ObjectAssetDocPhysicalLoc'
      physical_locn                                        as ObjectAssetDocPhysicalLocation,
      cast( substring(valid_from, 2, 8 ) as cms_dte_date ) as ObjectAssetDocValidFromDate,
      cast( substring(valid_to, 2, 8 ) as cms_dte_date )   as ObjectAssetDocValidToDate,

      _ObjectAssetData.ObjectAssetReferenceSystem          as ObjectAssetReferenceSystem,
      _LiquidationData.LiquidationObjectRefSystem          as LiquidationObjectRefSystem,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'CollateralObjectCategory'
      _InsuranceObjectData.InsuranceObjectCategory         as InsuranceObjectCategory,
      _CollateralInsurance.CollateralObjectCategory        as CollateralObjectCategory,
      _MovableObjectData.MovableObjectUUID                 as MovableObjectUUID,
      _RightsObjectData.RightsObjectUUID                   as RightsObjectUUID,

      _ObjectAssetData,
      _ObjectAssetPartner,
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
      _ObjectAssetDocType,
      _ObjectAssetDocPhysicalLoc
}
```
