---
name: I_REINTEGOBJECTOBJECT2SPACEGRP
description: "Real Estate Integ Object to Space Group"
app_component: RE-FX-IP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJECTOBJECT2SPACEGRP')/$value
semantic_en: "Real Estate Integ Object to Space Group"
semantic_vi: "Real Estate Integ Object to Space Group — CDS view giao diện dựa trên I_REIntegObjectRltnValidity."
keywords:
  - "real"
  - "estate"
  - "integ"
  - "object"
  - "space"
  - "group"
  - "internal"
  - "number"
  - "lvl0"
  - "lvl3"
  - "validity"
  - "date"
  - "start"
  - "external"
tags:
  - RE
  - component:RE-FX-IP-2CL
  - interface-view
  - RE-FX
  - RE-FX-IP
  - RE-FX-IP-2CL
---
# I_REINTEGOBJECTOBJECT2SPACEGRP

**Real Estate Integ Object to Space Group**

| Property | Value |
|---|---|
| App Component | `RE-FX-IP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJECTOBJECT2SPACEGRP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InternalRealEstateNumberLvl0` | ✓ | | `_REIntegObjLvl0` | `InternalRealEstateNumber` | `CHAR(13)` | Internal Key of Real Estate Object |
| `InternalRealEstateNumberLvl3` | ✓ | | `_REIntegObjectSubObjValidity` | `InternalRealEstateNumberLvl3` | `CHAR(13)` | Internal Key of Real Estate Object |
| `ValidityEndDate` | ✓ | | `_REIntegObjectRelation` | `ValidityEndDate` | `DATS(8)` | Validity End Date |
| `ValidityStartDate` |  | | `_REIntegObjectRelation` | `ValidityStartDate` | `DATS(8)` | Validity Start Date |
| `RealEstateExternalIDLvl0` |  | | `_REIntegObjLvl0` | `RealEstateExternalID` | `CHAR(45)` | External Identification |
| `InternalRealEstateNumberLvl1` |  | | `_REIntegObjectSubObjValidity` | `InternalRealEstateNumberLvl1` | `CHAR(13)` | Internal Key of Real Estate Object |
| `InternalRealEstateNumberLvl2` |  | | `_REIntegObjectSubObjValidity` | `InternalRealEstateNumberLvl2` | `CHAR(13)` | Internal Key of Real Estate Object |
| `RealEstateExternalIDLvl1` |  | | `_REIntegObjectSubObjValidity` | `RealEstateExternalIDLvl1` | `CHAR(45)` | External Identification |
| `RealEstateExternalIDLvl2` |  | | `_REIntegObjectSubObjValidity` | `RealEstateExternalIDLvl2` | `CHAR(45)` | External Identification |
| `RealEstateExternalIDLvl3` |  | | `_REIntegObjectSubObjValidity` | `RealEstateExternalIDLvl3` | `CHAR(45)` | External Identification |
| `ValidityStartDateLvl0` |  | | `_REIntegObjLvl0` | `ValidityStartDate` | `DATS(8)` | Validity Start Date |
| `ValidityEndDateLvl0` |  | | `_REIntegObjLvl0` | `ValidityEndDate` | `DATS(8)` | Validity End Date |
| `ValidityStartDateLvl1` |  | | `_REIntegObjectSubObjValidity` | `ValidityStartDateLvl1` | `DATS(8)` | Validity Start Date |
| `ValidityEndDateLvl1` |  | | `_REIntegObjectSubObjValidity` | `ValidityEndDateLvl1` | `DATS(8)` | Validity End Date |
| `ValidityStartDateLvl2` |  | | `_REIntegObjectSubObjValidity` | `ValidityStartDateLvl2` | `DATS(8)` | Validity Start Date |
| `ValidityEndDateLvl2` |  | | `_REIntegObjectSubObjValidity` | `ValidityEndDateLvl2` | `DATS(8)` | Validity End Date |
| `ValidityStartDateLvl3` |  | | `_REIntegObjectSubObjValidity` | `ValidityStartDateLvl3` | `DATS(8)` | Validity Start Date |
| `ValidityEndDateLvl3` |  | | `_REIntegObjectSubObjValidity` | `ValidityEndDateLvl3` | `DATS(8)` | Validity End Date |
| `InternalRealEstateNumberRltn` |  | | `_REIntegObjectRelation` | `InternalRealEstateNumberRltn` | `CHAR(13)` | Internal Object Number (Relation) |
| `REIsObjectRelationPartial` |  | | `_REIntegObjectRelation` | `REIsObjectRelationPartial` | `CHAR(1)` | Partial Object Relation Indicator |
| `REInternalNumberForUseEnable` |  | | `_REIntegObjLvl0` | `REInternalNumberForUseEnable` | `CHAR(13)` | Internal Object Number (Enable Use) |
| `REIntegObjSpaceGroupType` |  | | `_REIntegObjLvl0` | `REIntegObjSpaceGroupType` | `CHAR(4)` | Group Type |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJECTOBJECT2SPACEGRP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJECTOBJECT2SPACEGRP')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IREINTOBJOBJ2GRP'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Real Estate Integ Object to Space Group'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L
@Analytics.dataCategory: #CUBE
@Analytics.internalName:#LOCAL
//@ObjectModel.dataCategory: #VALUE_HELP

//@ObjectModel.representativeKey: ['REContractType']

@ObjectModel.supportedCapabilities:  [  #CDS_MODELING_ASSOCIATION_TARGET,
                                        #EXTRACTION_DATA_SOURCE,
                                        #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE]
                                        
@Metadata.ignorePropagatedAnnotations: true                                        

@Analytics:{
    dataExtraction: {
        enabled: true
    }
}

@VDM.viewType: #COMPOSITE
//@Search.searchable: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.preserveKey:true
@Metadata.allowExtensions:true

define view I_REIntegObjectObject2SpaceGrp
  as select from I_REIntegObjectRltnValidity   as _REIntegObjectRelation
    inner join   I_REIntegrationObject         as _REIntegObjLvl0              on _REIntegObjectRelation.InternalRealEstateNumber = _REIntegObjLvl0.InternalRealEstateNumber
    inner join   I_REIntegObjectSubObjValidity as _REIntegObjectSubObjValidity on _REIntegObjectRelation.InternalRealEstateNumberRltn = _REIntegObjectSubObjValidity.InternalRealEstateNumberLvl3
{
  key      _REIntegObjLvl0.InternalRealEstateNumber                  as InternalRealEstateNumberLvl0,
  key      _REIntegObjectSubObjValidity.InternalRealEstateNumberLvl3 as InternalRealEstateNumberLvl3,
  key      _REIntegObjectRelation.ValidityEndDate,
           _REIntegObjectRelation.ValidityStartDate,
           _REIntegObjLvl0.RealEstateExternalID                      as RealEstateExternalIDLvl0,
           _REIntegObjectSubObjValidity.InternalRealEstateNumberLvl1 as InternalRealEstateNumberLvl1,
           _REIntegObjectSubObjValidity.InternalRealEstateNumberLvl2 as InternalRealEstateNumberLvl2,
           _REIntegObjectSubObjValidity.RealEstateExternalIDLvl1     as RealEstateExternalIDLvl1,
           _REIntegObjectSubObjValidity.RealEstateExternalIDLvl2     as RealEstateExternalIDLvl2,
           _REIntegObjectSubObjValidity.RealEstateExternalIDLvl3     as RealEstateExternalIDLvl3,
           _REIntegObjLvl0.ValidityStartDate                         as ValidityStartDateLvl0,
           _REIntegObjLvl0.ValidityEndDate                           as ValidityEndDateLvl0,
           _REIntegObjectSubObjValidity.ValidityStartDateLvl1        as ValidityStartDateLvl1,
           _REIntegObjectSubObjValidity.ValidityEndDateLvl1          as ValidityEndDateLvl1,
           _REIntegObjectSubObjValidity.ValidityStartDateLvl2        as ValidityStartDateLvl2,
           _REIntegObjectSubObjValidity.ValidityEndDateLvl2          as ValidityEndDateLvl2,
           _REIntegObjectSubObjValidity.ValidityStartDateLvl3        as ValidityStartDateLvl3,
           _REIntegObjectSubObjValidity.ValidityEndDateLvl3          as ValidityEndDateLvl3,
           _REIntegObjectRelation.InternalRealEstateNumberRltn       as InternalRealEstateNumberRltn,
           _REIntegObjectRelation.REIsObjectRelationPartial,
           _REIntegObjLvl0.REInternalNumberForUseEnable,
           _REIntegObjLvl0.REIntegObjSpaceGroupType
}
union select from I_REIntegObjectRltnValidity   as _REIntegObjectRelation
  inner join      I_REIntegrationObject         as _REIntegObjLvl0              on _REIntegObjectRelation.InternalRealEstateNumber = _REIntegObjLvl0.InternalRealEstateNumber
  inner join      I_REIntegObjectSubObjValidity as _REIntegObjectSubObjValidity on _REIntegObjectRelation.InternalRealEstateNumberRltn = _REIntegObjectSubObjValidity.InternalRealEstateNumberLvl2
{
  key      _REIntegObjLvl0.InternalRealEstateNumber                  as InternalRealEstateNumberLvl0,
  key      _REIntegObjectSubObjValidity.InternalRealEstateNumberLvl3 as InternalRealEstateNumberLvl3,
  key      _REIntegObjectRelation.ValidityEndDate,
           _REIntegObjectRelation.ValidityStartDate,
           _REIntegObjLvl0.RealEstateExternalID                      as RealEstateExternalIDLvl0,
           _REIntegObjectSubObjValidity.InternalRealEstateNumberLvl1 as InternalRealEstateNumberLvl1,
           _REIntegObjectSubObjValidity.InternalRealEstateNumberLvl2 as InternalRealEstateNumberLvl2,
           _REIntegObjectSubObjValidity.RealEstateExternalIDLvl1     as RealEstateExternalIDLvl1,
           _REIntegObjectSubObjValidity.RealEstateExternalIDLvl2     as RealEstateExternalIDLvl2,
           _REIntegObjectSubObjValidity.RealEstateExternalIDLvl3     as RealEstateExternalIDLvl3,
           _REIntegObjLvl0.ValidityStartDate                         as ValidityStartDateLvl0,
           _REIntegObjLvl0.ValidityEndDate                           as ValidityEndDateLvl0,
           _REIntegObjectSubObjValidity.ValidityStartDateLvl1        as ValidityStartDateLvl1,
           _REIntegObjectSubObjValidity.ValidityEndDateLvl1          as ValidityEndDateLvl1,
           _REIntegObjectSubObjValidity.ValidityStartDateLvl2        as ValidityStartDateLvl2,
           _REIntegObjectSubObjValidity.ValidityEndDateLvl2          as ValidityEndDateLvl2,
           _REIntegObjectSubObjValidity.ValidityStartDateLvl3        as ValidityStartDateLvl3,
           _REIntegObjectSubObjValidity.ValidityEndDateLvl3          as ValidityEndDateLvl3,
           _REIntegObjectRelation.InternalRealEstateNumberRltn       as InternalRealEstateNumberRltn,
           _REIntegObjectRelation.REIsObjectRelationPartial,
           _REIntegObjLvl0.REInternalNumberForUseEnable,
           _REIntegObjLvl0.REIntegObjSpaceGroupType
}
where
  _REIntegObjectSubObjValidity.InternalRealEstateNumberLvl3 like 'J5%'          

union select from I_REIntegObjectRltnValidity   as _REIntegObjectRelation
  inner join      I_REIntegrationObject         as _REIntegObjLvl0              on _REIntegObjectRelation.InternalRealEstateNumber = _REIntegObjLvl0.InternalRealEstateNumber
  inner join      I_REIntegObjectSubObjValidity as _REIntegObjectSubObjValidity on _REIntegObjectRelation.InternalRealEstateNumberRltn = _REIntegObjectSubObjValidity.InternalRealEstateNumberLvl1
{
  key      _REIntegObjLvl0.InternalRealEstateNumber                  as InternalRealEstateNumberLvl0,
  key      _REIntegObjectSubObjValidity.InternalRealEstateNumberLvl3 as InternalRealEstateNumberLvl3,
  key      _REIntegObjectRelation.ValidityEndDate,
           _REIntegObjectRelation.ValidityStartDate,
           _REIntegObjLvl0.RealEstateExternalID                      as RealEstateExternalIDLvl0,
           _REIntegObjectSubObjValidity.InternalRealEstateNumberLvl1 as InternalRealEstateNumberLvl1,
           _REIntegObjectSubObjValidity.InternalRealEstateNumberLvl2 as InternalRealEstateNumberLvl2,
           _REIntegObjectSubObjValidity.RealEstateExternalIDLvl1     as RealEstateExternalIDLvl1,
           _REIntegObjectSubObjValidity.RealEstateExternalIDLvl2     as RealEstateExternalIDLvl2,
           _REIntegObjectSubObjValidity.RealEstateExternalIDLvl3     as RealEstateExternalIDLvl3,
           _REIntegObjLvl0.ValidityStartDate                         as ValidityStartDateLvl0,
           _REIntegObjLvl0.ValidityEndDate                           as ValidityEndDateLvl0,
           _REIntegObjectSubObjValidity.ValidityStartDateLvl1        as ValidityStartDateLvl1,
           _REIntegObjectSubObjValidity.ValidityEndDateLvl1          as ValidityEndDateLvl1,
           _REIntegObjectSubObjValidity.ValidityStartDateLvl2        as ValidityStartDateLvl2,
           _REIntegObjectSubObjValidity.ValidityEndDateLvl2          as ValidityEndDateLvl2,
           _REIntegObjectSubObjValidity.ValidityStartDateLvl3        as ValidityStartDateLvl3,
           _REIntegObjectSubObjValidity.ValidityEndDateLvl3          as ValidityEndDateLvl3,
           _REIntegObjectRelation.InternalRealEstateNumberRltn       as InternalRealEstateNumberRltn,
           _REIntegObjectRelation.REIsObjectRelationPartial,
           _REIntegObjLvl0.REInternalNumberForUseEnable,
           _REIntegObjLvl0.REIntegObjSpaceGroupType
}
where
  _REIntegObjectSubObjValidity.InternalRealEstateNumberLvl3 like 'J5%'
```
