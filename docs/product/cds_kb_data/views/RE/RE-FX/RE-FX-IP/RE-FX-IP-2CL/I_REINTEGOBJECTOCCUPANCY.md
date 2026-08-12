---
name: I_REINTEGOBJECTOCCUPANCY
description: "Real Estate Integ Object Occupancy"
app_component: RE-FX-IP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJECTOCCUPANCY')/$value
semantic_en: "Real Estate Integ Object Occupancy"
semantic_vi: "Real Estate Integ Object Occupancy — CDS view giao diện dựa trên P_REIntegObjectOccpcyCalc2."
keywords:
  - "real"
  - "estate"
  - "integ"
  - "object"
  - "occupancy"
  - "status"
  - "contract"
  - "internal"
  - "number"
  - "company"
  - "code"
tags:
  - RE
  - component:RE-FX-IP-2CL
  - interface-view
  - RE-FX
  - RE-FX-IP
  - RE-FX-IP-2CL
---
# I_REINTEGOBJECTOCCUPANCY

**Real Estate Integ Object Occupancy**

| Property | Value |
|---|---|
| App Component | `RE-FX-IP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJECTOCCUPANCY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REIntegObjectStatusObject` |  | |  |  | `CHAR(22)` | Object Number |
| `REContractStatusObject` |  | |  |  | `CHAR(22)` | Object Number |
| `REIntegObjectInternalNumber` |  | |  |  | `CHAR(13)` | Internal Key of Real Estate Object |
| `REContractInternalNumber` |  | |  |  | `CHAR(13)` | Internal Key of Real Estate Object |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `RealEstateContract` |  | |  |  | `CHAR(13)` | Real Estate Contract Number |
| `REOccupancyFromDate` |  | |  |  | `DATS(8)` | Contract Start Date |
| `REOccupancyToDate` |  | |  |  | `DATS(8)` | Contract End Date |
| `REIntegObjectValidityStartDate` |  | |  |  | `DATS(8)` | Validity Start Date |
| `REIntegObjectValidityEndDate` |  | |  |  | `DATS(8)` | Validity End Date |
| `ContractStartDate` |  | |  |  | `DATS(8)` | Contract Start Date |
| `ContractEndDate` |  | |  |  | `DATS(8)` | Contract End Date |
| `REObjAssgmtValidityStartDate` |  | |  |  | `DATS(8)` | Validity Start Date |
| `REObjAssgmtValidityEndDate` |  | |  |  | `DATS(8)` | Validity End Date |
| `REObjectPossessionStartDate` |  | |  |  | `DATS(8)` | Date From Which the Object Is Made Available for Use |
| `REObjectPossessionEndDate` |  | |  |  | `DATS(8)` | Date Up to Which the Object Is Used |
| `IsVacant` |  | |  |  | `CHAR(1)` | Truth Value: True/False |
| `REContractIsActive` |  | |  |  | `CHAR(1)` | Truth Value: True/False |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJECTOCCUPANCY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJECTOCCUPANCY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IREINTOBJOCC'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Real Estate Integ Object Occupancy'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L

@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.preserveKey:true

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.supportedCapabilities:  [  #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE]

@Analytics:{
    dataExtraction: {
        enabled: true
    }
}

define view I_REIntegObjectOccupancy
  as select from P_REIntegObjectOccpcyCalc2
{
  REIntegObjectStatusObject,
  REContractStatusObject,
  REIntegObjectInternalNumber,
  REContractInternalNumber,
  CompanyCode,
  RealEstateContract,
  REOccupancyFromDate,
  REOccupancyToDate,
  REIntegObjectValidityStartDate,
  REIntegObjectValidityEndDate,
  ContractStartDate,
  ContractEndDate,
  REObjAssgmtValidityStartDate,
  REObjAssgmtValidityEndDate,
  REObjectPossessionStartDate,
  REObjectPossessionEndDate,
  IsVacant,
  REContractIsActive
  
}
union select from P_REIntegObjectOccpcyCalc8
{
  REIntegObjectStatusObject,
  ' ' as REContractStatusObject,
  REIntegObjectInternalNumber,
  ' ' as REContractInternalNumber,
  ' ' as CompanyCode,
  ' ' as RealEstateContract,
  REOccupancyFromDate,
  REOccupancyToDate,
  REIntegObjectValidityStartDate,
  REIntegObjectValidityEndDate,
  ' ' as ContractStartDate,
  ' ' as ContractEndDate,
  ' ' as REObjAssgmtValidityStartDate,
  ' ' as REObjAssgmtValidityEndDate,
  ' ' as REObjectPossessionStartDate,
  ' ' as REObjectPossessionEndDate,
  IsVacant,
  ' ' as REContractIsActive
}
```
