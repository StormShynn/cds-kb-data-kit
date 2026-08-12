---
name: I_REINTEGRATIONOBJECT
description: "Real Estate Integration Object"
app_component: RE-FX-IP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGRATIONOBJECT')/$value
semantic_en: "Real Estate Integration Object"
semantic_vi: "Real Estate Integration Object — CDS view giao diện dựa trên I_REIntegrationObjectBasicData."
keywords:
  - "real"
  - "estate"
  - "integration"
  - "object"
  - "internal"
  - "number"
  - "external"
  - "status"
  - "type"
tags:
  - RE
  - component:RE-FX-IP-2CL
  - interface-view
  - RE-FX
  - RE-FX-IP
  - RE-FX-IP-2CL
---
# I_REINTEGRATIONOBJECT

**Real Estate Integration Object**

| Property | Value |
|---|---|
| App Component | `RE-FX-IP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGRATIONOBJECT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InternalRealEstateNumber` | ✓ | |  |  | `CHAR(13)` | Internal Key of Real Estate Object |
| `RealEstateExternalID` |  | |  |  | `CHAR(45)` | External Identification |
| `REStatusObject` |  | |  |  | `CHAR(22)` | Object Number |
| `REIntegrationObjectNumber` |  | |  |  | `CHAR(20)` | Real Estate Object Number |
| `REIntegrationObjectType` |  | |  |  | `CHAR(4)` | Object Type |
| `REIntegObjectCtrlgObjectType` |  | |  |  | `CHAR(1)` | Controlling Object Type |
| `REIntegrationObjectName` |  | |  |  | `CHAR(30)` | Object Name (Short) |
| `REIntegObjectLongName` |  | |  |  | `CHAR(250)` | Object Name (Long) |
| `ValidityStartDate` |  | |  | `cast( _REIntegObjectValidity.ValidityStartDate as rebdvdmvalidfrom preserving type )` | `DATS(8)` | Validity Start Date |
| `ValidityEndDate` |  | |  | `cast( _REIntegObjectValidity.ValidityEndDate as rebdvdmvalidto preserving type )` | `DATS(8)` | Validity End Date |
| `REIntegObjSpaceGroupType` |  | |  |  | `CHAR(4)` | Group Type |
| `RESpaceGroupUsageType` |  | |  |  | `CHAR(4)` | Group Usage Type |
| `RESpaceGrpEnableUseType` |  | |  |  | `CHAR(4)` | Usage Enablement Type |
| `REInternalNumberForUseEnable` |  | |  |  | `CHAR(13)` | Internal Object Number (Enable Use) |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `REParentIntegObjectType` |  | |  |  | `CHAR(4)` | Parent Object Type |
| `REParentIntegObjectExternalID` |  | |  |  | `CHAR(45)` | Parent External Identification |
| `REAreaUnit` |  | |  |  | `UNIT(3)` | Area Unit |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Entered By |
| `CreationDate` |  | |  |  | `DATS(8)` | First Entered On |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Creation |
| `RESourceOfCreation` |  | |  |  | `CHAR(10)` | Source of Initial Entry |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Employee ID |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Edited On |
| `LastChangeTime` |  | |  |  | `TIMS(6)` | Last Edited At |
| `RESourceOfChange` |  | |  |  | `CHAR(10)` | Editing Source |
| `Responsible` |  | |  |  | `CHAR(12)` | Person Responsible |
| `REAuthorizationGroup` |  | |  |  | `CHAR(40)` | Authorization Group |
| `_REIntegObjectValidity` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_ChangedByUser` | | ✓ | | | | |
| `_ResponsibleUser` | | ✓ | | | | |
| `_UnitOfMeasureArea` | | ✓ | | | | |
| `_REAuthorizationGroup` | | ✓ | | | | |
| `_REIntegObjectType` | | ✓ | | | | |
| `_REIntegObjCtrlgObjType` | | ✓ | | | | |
| `_REParentIntegObjectType` | | ✓ | | | | |
| `_REIntegObjSpaceGroupType` | | ✓ | | | | |
| `_RESpaceGroupUsageType` | | ✓ | | | | |
| `_RESpaceGrpEnableUseType` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_REKeyAssgmt` | | ✓ | | | | |
| `_StatusObject` | | ✓ | | | | |
| `_StatusObjectStatus` | | ✓ | | | | |
| `_REObjectAddress` | | ✓ | | | | |
| `_REIntegObjectOccupancy` | | ✓ | | | | |
| `_REIntegObjToContractAssgmt` | | ✓ | | | | |
| `_REIntegrationObjSubObj` | | ✓ | | | | |
| `_REParentIntegrationObject` | | ✓ | | | | |
| `_REUseEnableIntegrationObject` | | ✓ | | | | |
| `_REIntegrationObjectRelation` | | ✓ | | | | |
| `_REIntegObjectRelationPartial` | | ✓ | | | | |
| `_REPartnerAssgmt` | | ✓ | | | | |
| `_REObjectAssgmt` | | ✓ | | | | |
| `_REReminderRule` | | ✓ | | | | |
| `_REMeasurement` | | ✓ | | | | |
| `_REIntegObjectAcctObjAssgmt` | | ✓ | | | | |
| `_REIntegrationObjectTimeline` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REIntegObjectValidity` | `I_REIntegObjectValidity` | [1..1] |
| `_Extension` | `E_REIntegrationObject` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGRATIONOBJECT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGRATIONOBJECT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IREINTOBJECT'

@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Real Estate Integration Object'
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.representativeKey: 'InternalRealEstateNumber'
@ObjectModel.semanticKey: ['RealEstateExternalID']
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L

@Analytics.internalName:#LOCAL
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}

@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #EXTRACTION_DATA_SOURCE,
                                        #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY      ]

@Metadata.ignorePropagatedAnnotations: true

@Metadata.allowExtensions: true

@VDM.viewType: #COMPOSITE

define view I_REIntegrationObject
  as select from I_REIntegrationObjectBasicData

  association [1..1] to I_REIntegObjectValidity as _REIntegObjectValidity on $projection.InternalRealEstateNumber = _REIntegObjectValidity.InternalRealEstateNumber

  //  extensibility
  association [1..1] to E_REIntegrationObject   as _Extension             on $projection.InternalRealEstateNumber = _Extension.InternalRealEstateNumber
{
  key InternalRealEstateNumber,
      RealEstateExternalID,
      @ObjectModel.foreignKey.association: '_StatusObject'
      REStatusObject,
      REIntegrationObjectNumber,
      @ObjectModel.foreignKey.association: '_REIntegObjectType'
      REIntegrationObjectType,
      @ObjectModel.foreignKey.association: '_REIntegObjCtrlgObjType'
      REIntegObjectCtrlgObjectType,
      REIntegrationObjectName,
      REIntegObjectLongName,
      @Semantics.businessDate.from: true
      cast( _REIntegObjectValidity.ValidityStartDate as rebdvdmvalidfrom preserving type ) as ValidityStartDate,
      @Semantics.businessDate.to: true
      cast( _REIntegObjectValidity.ValidityEndDate as rebdvdmvalidto preserving type )     as ValidityEndDate,
      @ObjectModel.foreignKey.association: '_REIntegObjSpaceGroupType'
      REIntegObjSpaceGroupType,
      @ObjectModel.foreignKey.association: '_RESpaceGroupUsageType'
      RESpaceGroupUsageType,
      @ObjectModel.foreignKey.association: '_RESpaceGrpEnableUseType'
      RESpaceGrpEnableUseType,
      @ObjectModel.foreignKey.association: '_REUseEnableIntegrationObject'
      REInternalNumberForUseEnable,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode,
      @ObjectModel.foreignKey.association: '_REParentIntegObjectType'
      REParentIntegObjectType,
      REParentIntegObjectExternalID,
      @ObjectModel.foreignKey.association: '_UnitOfMeasureArea'
      REAreaUnit,
      CreatedByUser,
      CreationDate,
      CreationTime,
      RESourceOfCreation,
      LastChangedByUser,
      LastChangeDate,
      LastChangeTime,
      RESourceOfChange,
      Responsible,
      @ObjectModel.foreignKey.association: '_REAuthorizationGroup'
      REAuthorizationGroup,

      _CreatedByUser,
      _ChangedByUser,
      _ResponsibleUser,
      _UnitOfMeasureArea,
      _REAuthorizationGroup,
      _REIntegObjectType,
      _REIntegObjCtrlgObjType,
      _REParentIntegObjectType,
      _REIntegObjSpaceGroupType,
      _RESpaceGroupUsageType,
      _RESpaceGrpEnableUseType,
      _CompanyCode,
      _REKeyAssgmt,
      _StatusObject,
      _StatusObjectStatus,
      _REObjectAddress,
      _REIntegObjectOccupancy,
      _REIntegObjToContractAssgmt,
      _REIntegrationObjSubObj,

      _REParentIntegrationObject,
      _REUseEnableIntegrationObject,
      _REIntegrationObjectRelation,
      _REIntegObjectRelationPartial,
      _REPartnerAssgmt,
      _REObjectAssgmt,
      _REReminderRule,
      _REMeasurement,
      _REIntegObjectAcctObjAssgmt,
      _REIntegrationObjectTimeline,
      _REIntegObjectValidity

}
```
