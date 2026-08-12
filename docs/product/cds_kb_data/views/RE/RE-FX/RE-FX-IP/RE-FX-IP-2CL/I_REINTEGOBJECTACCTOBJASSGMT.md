---
name: I_REINTEGOBJECTACCTOBJASSGMT
description: "Real Estate IO Accounting Object Assgmt"
app_component: RE-FX-IP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJECTACCTOBJASSGMT')/$value
semantic_en: "Real Estate IO Accounting Object Assgmt"
semantic_vi: "Real Estate IO Accounting Object Assgmt — CDS view giao diện dựa trên I_REObjectAssgmt."
keywords:
  - "real"
  - "estate"
  - "accounting"
  - "object"
  - "assgmt"
  - "internal"
  - "number"
  - "validity"
  - "start"
  - "date"
  - "status"
  - "source"
tags:
  - RE
  - account
  - component:RE-FX-IP-2CL
  - interface-view
  - RE-FX
  - RE-FX-IP
  - RE-FX-IP-2CL
---
# I_REINTEGOBJECTACCTOBJASSGMT

**Real Estate IO Accounting Object Assgmt**

| Property | Value |
|---|---|
| App Component | `RE-FX-IP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJECTACCTOBJASSGMT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InternalRealEstateNumber` | ✓ | | `_REIntegrationObject` | `InternalRealEstateNumber` | `CHAR(13)` | Internal Key of Real Estate Object |
| `REAccountingObject` | ✓ | | `_REObjectAssignment` | `REStatusObjectTarget` | `CHAR(22)` | Object Number |
| `ValidityStartDate` | ✓ | | `_REObjectAssignment` | `ValidityStartDate` | `DATS(8)` | Validity Start Date |
| `ValidityEndDate` |  | | `_REObjectAssignment` | `ValidityEndDate` | `DATS(8)` | Validity End Date |
| `REStatusObjectSource` |  | | `_REObjectAssignment` | `REStatusObjectSource` | `CHAR(22)` | Object Number |
| `CompanyCode` |  | | `_REAccountingObject` | `CompanyCode` | `CHAR(4)` | Company Code |
| `REAccountingObjectType` |  | | `_REAccountingObject` | `REAccountingObjectType` | `CHAR(2)` | Object Type |
| `REOnlyInfoAssgmt` |  | | `_REObjectAssignment` | `REOnlyInfoAssgmt` | `CHAR(1)` | Informational Assignment |
| `REIsLeadingObject` |  | | `_REObjectAssignment` | `REIsLeadingObject` | `CHAR(1)` | Leading object Indicator |
| `REIntegObjSpaceGroupType` |  | | `_REIntegrationObject` | `REIntegObjSpaceGroupType` | `CHAR(4)` | Group Type |
| `REParentIntegObjectType` |  | | `_REIntegrationObject` | `REParentIntegObjectType` | `CHAR(4)` | Parent Object Type |
| `REParentIntegObjectExternalID` |  | | `_REIntegrationObject` | `REParentIntegObjectExternalID` | `CHAR(45)` | Parent External Identification |
| `CostCenter` |  | | `_REAccountingObject` | `CostCenter` | `CHAR(10)` | Cost Center |
| `InternalOrder` |  | | `_REAccountingObject` | `InternalOrder` | `CHAR(12)` | Internal Order |
| `OrderType` |  | | `_REAccountingObject` | `OrderType` | `CHAR(4)` | Order Type |
| `ControllingArea` |  | | `_REAccountingObject` | `ControllingArea` | `CHAR(4)` | Controlling Area |
| `ProfitCenter` |  | | `_REAccountingObject` | `ProfitCenter` | `CHAR(10)` | Profit Center |
| `_REAccountingObject` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_REObjectTypeDetails` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_InternalOrder` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REIntegrationObject` | `I_REIntegrationObjectBasicData` | [1..1] |
| `_REAccountingObject` | `I_REControllingObject` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_REObjectTypeDetails` | `I_REObjectTypeDetails` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJECTACCTOBJASSGMT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJECTACCTOBJASSGMT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IREINTOBJACCASS'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED 
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
//@ObjectModel.representativeKey: 'InternalRealEstateNumber'
@ObjectModel.semanticKey: ['InternalRealEstateNumber']
@VDM.viewType: #COMPOSITE

@ObjectModel.supportedCapabilities:  [  #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE]
                                        
@Metadata.ignorePropagatedAnnotations: true                                        

@Analytics:{
    dataExtraction: {
        enabled: true
    }
}

//@Search.searchable: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.preserveKey:true
@EndUserText.label: 'Real Estate IO Accounting Object Assgmt'

define view I_REIntegObjectAcctObjAssgmt
//  as select from I_REIntegrationObject as _REIntegrationObject
//    inner join   I_REObjectAssgmt      as _REObjectAssignment on(
//      _REObjectAssignment.REStatusObjectSource       = _REIntegrationObject.REStatusObject
//      and _REObjectAssignment.REObjectAssignmentType = 'IO'
//    )
//    inner join   I_REControllingObject  as _REAccountingObject on _REAccountingObject.REAccountingObject = _REObjectAssignment.REStatusObjectTarget

as select from I_REObjectAssgmt      as _REObjectAssignment
//  association [0..*] to I_REObjectAssgmt      as _REObjectAssignment  on $projection.REStatusObject = _REObjectAssignment.REStatusObjectSource    
  association [1..1] to I_REIntegrationObjectBasicData  as _REIntegrationObject on _REObjectAssignment.REStatusObjectSource = _REIntegrationObject.REStatusObject
  association [1..1] to I_REControllingObject           as _REAccountingObject  on _REObjectAssignment.REStatusObjectTarget = _REAccountingObject.REAccountingObject 
  association [1..1] to I_CompanyCode                   as _CompanyCode         on _REAccountingObject.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_REObjectTypeDetails           as _REObjectTypeDetails on _REObjectAssignment.REStatusObjectTarget = _REObjectTypeDetails.REStatusObject
//  association [1..1] to I_REAccountingObject  as _REAccountingObject on _REAccountingObject.REAccountingObject = _REObjectAssignment.REStatusObjectTarget
{
  key  _REIntegrationObject.InternalRealEstateNumber,
  key  _REObjectAssignment.REStatusObjectTarget as REAccountingObject,
  key  _REObjectAssignment.ValidityStartDate    as ValidityStartDate,
       _REObjectAssignment.ValidityEndDate      as ValidityEndDate,
       _REObjectAssignment.REStatusObjectSource,
       @ObjectModel.foreignKey.association: '_CompanyCode'
       _REAccountingObject.CompanyCode,
       _REAccountingObject.REAccountingObjectType,
//       CompanyCode,
       _REObjectAssignment.REOnlyInfoAssgmt,
       _REObjectAssignment.REIsLeadingObject,
       _REIntegrationObject.REIntegObjSpaceGroupType,
       _REIntegrationObject.REParentIntegObjectType,
       _REIntegrationObject.REParentIntegObjectExternalID,       
//       _CostCenter.ControllingArea,
       _REAccountingObject.CostCenter,
       _REAccountingObject.InternalOrder,
       _REAccountingObject.OrderType,
       _REAccountingObject.ControllingArea,
       _REAccountingObject.ProfitCenter,
//       _REObjectAssignment._CostCenter.CostCenter,
//       _REObjectAssignment._InternalOrder.InternalOrder,
//       _REObjectAssignment._InternalOrder.OrderType,
//       coalesce (_REObjectAssignment._WBSElement.ControllingArea, _REObjectAssignment._CostCenter.ControllingArea) as ControllingArea,
//       _REObjectAssignment._WBSElement.ProfitCenter,
       
       _CompanyCode,
       _CostCenter,
       _InternalOrder,
       _WBSElement,
       _REAccountingObject,

       _REObjectTypeDetails

}
where REObjectAssignmentType = 'IO'
and _REIntegrationObject.InternalRealEstateNumber like 'J5%'
```
