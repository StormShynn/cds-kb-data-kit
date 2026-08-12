---
name: I_OBJECTINSURANCELINKDATA
description: "Object Insurance Link Data"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTINSURANCELINKDATA')/$value
semantic_en: "Object Insurance Link Data"
semantic_vi: "Object Insurance Link Data — CDS view giao diện dựa trên cms_oms_ins_lnk."
keywords:
  - "object"
  - "insurance"
  - "link"
  - "data"
  - "reference"
  - "system"
  - "real"
  - "estate"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_OBJECTINSURANCELINKDATA

**Object Insurance Link Data**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTINSURANCELINKDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ObjectInsuranceLinkUUID` | ✓ | |  | `ins_lnk_guid` | `RAW(16)` | Insurance Link GUID |
| `ObjectReferenceUUID` |  | |  | `obj_ref_guid` | `RAW(16)` | Object reference GUID |
| `ObjectInsuranceReferenceUUID` |  | |  | `ins_ref_guid` | `RAW(16)` | Insurance Reference GUID |
| `InsuranceReferenceSystem` |  | |  | `ins_objsysid` | `CHAR(6)` | Object System Reference ID |
| `RealEstateUUID` |  | | `_RealEstateObjectData` | `RealEstateUUID` | `RAW(16)` | GUID for Real Estate Object |
| `CollateralRealEstateUUID` |  | | `_CollateralRealEstate` | `CollateralRealEstateUUID` | `RAW(16)` | GUID for Real Estate Object |
| `MovableObjectUUID` |  | | `_MovableObjectData` | `MovableObjectUUID` | `RAW(16)` | GUID for  CMS_MOVABLES |
| `ShipObjectUUID` |  | | `_ShipObjectData` | `ShipObjectUUID` | `RAW(16)` | Globally Unique Identifier |
| `RightsObjectUUID` |  | | `_RightsObjectData` | `RightsObjectUUID` | `RAW(16)` | Rights GUID |
| `_InsuranceObjectData` | | ✓ | | | | |
| `_RealEstateObjectData` | | ✓ | | | | |
| `_CollateralRealEstate` | | ✓ | | | | |
| `_MovableObjectData` | | ✓ | | | | |
| `_ShipObjectData` | | ✓ | | | | |
| `_RightsObjectData` | | ✓ | | | | |
| `_InsuranceObjectMasterData` | | ✓ | | | | |
| `_CollateralInsurance` | | ✓ | | | | |
| `_RealEstateObjectMasterData` | | ✓ | | | | |
| `_CollateralRealEstateMaster` | | ✓ | | | | |
| `_MovableObjectMasterData` | | ✓ | | | | |
| `_RightsObjectMasterData` | | ✓ | | | | |
| `_InsuranceReferenceSystem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InsuranceObjectData` | `I_InsuranceObjectData` | [0..1] |
| `_RealEstateObjectData` | `I_RealEstateObjectData` | [0..1] |
| `_CollateralRealEstate` | `I_CollateralRealEstate` | [0..1] |
| `_MovableObjectData` | `I_MovableObjectData` | [0..1] |
| `_ShipObjectData` | `I_ShipObjectData` | [0..1] |
| `_RightsObjectData` | `I_RightsObjectData` | [0..1] |
| `_InsuranceObjectMasterData` | `I_InsuranceObjectMasterData` | [0..1] |
| `_CollateralInsurance` | `I_CollateralInsurance` | [0..1] |
| `_RealEstateObjectMasterData` | `I_RealEstateObjectMasterData` | [0..1] |
| `_CollateralRealEstateMaster` | `I_CollateralRealEstateMaster` | [0..1] |
| `_MovableObjectMasterData` | `I_MovableObjectMasterData` | [0..1] |
| `_RightsObjectMasterData` | `I_RightsObjectMasterData` | [0..1] |
| `_InsuranceReferenceSystem` | `I_ObjectReferenceSystem` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTINSURANCELINKDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTINSURANCELINKDATA')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'IOBJINSLNKD',
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
        serviceQuality: 'C',
        sizeCategory: 'L',
        dataClass: 'TRANSACTIONAL'
    },
    supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'ObjectInsuranceLinkUUID'
}
@Metadata:{
    ignorePropagatedAnnotations: true,
    allowExtensions: true
}
@Analytics:{
    dataCategory: #CUBE,
    internalName: #LOCAL,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        mapping: [ {
           table : 'CMS_OMS_INS_LNK',
           role : #MAIN,
           viewElement : ['ObjectInsuranceLinkUUID'],
           tableElement : ['INS_LNK_GUID']
        } ]
    }
  }
}
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Object Insurance Link Data'
define view I_ObjectInsuranceLinkData
  as select from cms_oms_ins_lnk
  association [0..1] to I_InsuranceObjectData        as _InsuranceObjectData        on $projection.ObjectInsuranceReferenceUUID = _InsuranceObjectData.InsuranceObjectUUID
  association [0..1] to I_RealEstateObjectData       as _RealEstateObjectData       on $projection.ObjectReferenceUUID = _RealEstateObjectData.RealEstateUUID
  association [0..1] to I_CollateralRealEstate       as _CollateralRealEstate       on $projection.ObjectReferenceUUID = _CollateralRealEstate.CollateralRealEstateUUID
  association [0..1] to I_MovableObjectData          as _MovableObjectData          on $projection.ObjectReferenceUUID = _MovableObjectData.MovableObjectUUID
  association [0..1] to I_ShipObjectData             as _ShipObjectData             on $projection.ObjectReferenceUUID = _ShipObjectData.ShipObjectUUID
  association [0..1] to I_RightsObjectData           as _RightsObjectData           on $projection.ObjectReferenceUUID = _RightsObjectData.RightsObjectUUID
  association [0..1] to I_InsuranceObjectMasterData  as _InsuranceObjectMasterData  on $projection.ObjectInsuranceReferenceUUID = _InsuranceObjectMasterData.InsuranceObjectUUID
  association [0..1] to I_CollateralInsurance        as _CollateralInsurance        on $projection.ObjectInsuranceReferenceUUID = _CollateralInsurance.CollateralInsuranceUUID
  association [0..1] to I_RealEstateObjectMasterData as _RealEstateObjectMasterData on $projection.ObjectReferenceUUID = _RealEstateObjectMasterData.RealEstateUUID
  association [0..1] to I_CollateralRealEstateMaster as _CollateralRealEstateMaster on $projection.ObjectReferenceUUID = _CollateralRealEstateMaster.CollateralRealEstateUUID
  association [0..1] to I_MovableObjectMasterData    as _MovableObjectMasterData    on $projection.ObjectReferenceUUID = _MovableObjectMasterData.MovableObjectUUID
  association [0..1] to I_RightsObjectMasterData     as _RightsObjectMasterData     on $projection.ObjectReferenceUUID = _RightsObjectMasterData.RightsObjectUUID
  association [0..1] to I_ObjectReferenceSystem      as _InsuranceReferenceSystem   on $projection.InsuranceReferenceSystem = _InsuranceReferenceSystem.ObjectReferenceSystem
{
  key ins_lnk_guid                                   as ObjectInsuranceLinkUUID,
      obj_ref_guid                                   as ObjectReferenceUUID,
      ins_ref_guid                                   as ObjectInsuranceReferenceUUID,
      @ObjectModel.foreignKey.association: '_InsuranceReferenceSystem'
      ins_objsysid                                   as InsuranceReferenceSystem,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'CollateralRealEstateUUID'
      _RealEstateObjectData.RealEstateUUID           as RealEstateUUID,
      _CollateralRealEstate.CollateralRealEstateUUID as CollateralRealEstateUUID,
      _MovableObjectData.MovableObjectUUID           as MovableObjectUUID,
      _ShipObjectData.ShipObjectUUID                 as ShipObjectUUID,
      _RightsObjectData.RightsObjectUUID             as RightsObjectUUID,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CollateralInsurance'
      _InsuranceObjectData,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CollateralRealEstate'
      _RealEstateObjectData,
      _CollateralRealEstate,
      _MovableObjectData,
      _ShipObjectData,
      _RightsObjectData,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CollateralInsurance'
      _InsuranceObjectMasterData,
      _CollateralInsurance,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CollateralRealEstateMaster'
      _RealEstateObjectMasterData,
      _CollateralRealEstateMaster,
      _MovableObjectMasterData,
      _RightsObjectMasterData,
      _InsuranceReferenceSystem
}
```
