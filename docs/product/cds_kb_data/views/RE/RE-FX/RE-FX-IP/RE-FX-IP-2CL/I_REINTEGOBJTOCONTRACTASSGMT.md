---
name: I_REINTEGOBJTOCONTRACTASSGMT
description: "Integration Object Contract Assignment"
app_component: RE-FX-IP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJTOCONTRACTASSGMT')/$value
semantic_en: "Integration Object Contract Assignment"
semantic_vi: "Integration Object Contract Assignment — CDS view giao diện dựa trên I_REObjectAssgmt."
keywords:
  - "integration"
  - "object"
  - "contract"
  - "assignment"
  - "status"
  - "source"
  - "type"
  - "company"
  - "code"
  - "real"
  - "estate"
  - "validity"
  - "start"
  - "date"
  - "value"
tags:
  - RE
  - component:RE-FX-IP-2CL
  - contract
  - interface-view
  - RE-FX
  - RE-FX-IP
  - RE-FX-IP-2CL
---
# I_REINTEGOBJTOCONTRACTASSGMT

**Integration Object Contract Assignment**

| Property | Value |
|---|---|
| App Component | `RE-FX-IP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJTOCONTRACTASSGMT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REStatusObjectSource` | ✓ | |  | `REStatusObjectTarget` | `CHAR(22)` | Object Number |
| `REObjectAssignmentType` | ✓ | |  |  | `CHAR(2)` | Type of Object Assignment |
| `CompanyCode` | ✓ | | `_REContract` | `CompanyCode` | `CHAR(4)` | Company Code |
| `RealEstateContract` | ✓ | | `_REContract` | `RealEstateContract` | `CHAR(13)` | Real Estate Contract Number |
| `ValidityStartEndDateValue` | ✓ | |  | `cast(concat(ValidityStartDate, ValidityEndDate ) as recadateperiod)` | `CHAR(16)` | Date from to (RAP Key) |
| `InternalRealEstateNumber` | ✓ | | `_REObjectTypeDetails` | `InternalRealEstateNumber` | `CHAR(13)` | Internal Key of Real Estate Object |
| `ValidityStartDate` |  | |  | `case when _REObjectAssgmt.ValidityStartDate > _REContract.ContractStartDate then cast( coalesce(ValidityStartDate, '00000000') as rebdvdmvalidfrom ) when _REObjectTypeDetails._REIntegrationObject.ValidityStartDate > _REContract.ContractStartDate then _REObjectTypeDetails._REIntegrationObject.ValidityStartDate else _REContract.ContractStartDate end` | `DATS(8)` | Contract Start Date |
| `REStatusObjectTarget` |  | |  | `REStatusObjectSource` | `CHAR(22)` | Object Number |
| `ValidityEndDate` |  | |  | `case when _REObjectAssgmt.ValidityEndDate < _REContract.ContractEndDate then cast( coalesce(ValidityEndDate, '99991231') as rebdvdmvalidto ) when _REObjectTypeDetails._REIntegrationObject.ValidityEndDate < _REContract.ContractEndDate then _REObjectTypeDetails._REIntegrationObject.ValidityEndDate else _REContract.ContractEndDate end` | `DATS(8)` | Contract End Date |
| `REOnlyInfoAssgmt` |  | |  |  | `CHAR(1)` | Informational Assignment |
| `REStatusObjectSourceIsArchived` |  | |  |  | `CHAR(1)` | Source Object Was Archived |
| `REGenerationType` |  | |  |  | `CHAR(1)` | Generation Type Functional Location |
| `REIsMainAsset` |  | |  |  | `CHAR(1)` | Asset Is Leading Asset |
| `REAssignmentHasMultiple` |  | |  |  | `CHAR(1)` | Generated Entry for Multiple Assignment |
| `REObjectPossessionStartDate` |  | |  |  | `DATS(8)` | Date From Which the Object Is Made Available for Use |
| `REObjectPossessionEndDate` |  | |  |  | `DATS(8)` | Date Up to Which the Object Is Used |
| `_REContract` | | ✓ | | | | |
| `_REObjectTypeDetails` | | ✓ | | | | |
| `_REObjectAssignmentType` | | ✓ | | | | |
| `_REGenerationType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REContract` | `I_REContract` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJTOCONTRACTASSGMT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REINTEGOBJTOCONTRACTASSGMT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IREINTCONT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Integration Object Contract Assignment'

@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L

//@ObjectModel.representativeKey: ['REStatusObjectSource']

@ObjectModel.supportedCapabilities:  [  #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE]
                                        
@Metadata.ignorePropagatedAnnotations: true                                        

@Analytics:{
    dataExtraction: {
        enabled: true
    }
}

@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE

define view I_REIntegObjToContractAssgmt 
  as select from I_REObjectAssgmt 
//  I_REObjectAssgmtHier 
  as _REObjectAssgmt
  
//  association [1..1] to I_REIntegrationObject as _REIntegrationObject on $projection.internalrealestatenumber = _REIntegrationObject.InternalRealEstateNumber
  association [1..1] to I_REContract          as _REContract          on  $projection.REStatusObjectTarget      = _REContract.REStatusObject
  
  {
  key REStatusObjectTarget                                                as REStatusObjectSource,
  key REObjectAssignmentType,
  key _REContract.CompanyCode,
  key _REContract.RealEstateContract,
  key cast(concat(ValidityStartDate, ValidityEndDate ) as recadateperiod) as ValidityStartEndDateValue,
  key _REObjectTypeDetails.InternalRealEstateNumber,
      @Semantics.businessDate.from: true
      case when _REObjectAssgmt.ValidityStartDate > _REContract.ContractStartDate then cast( coalesce(ValidityStartDate, '00000000') as rebdvdmvalidfrom )
           when _REObjectTypeDetails._REIntegrationObject.ValidityStartDate > _REContract.ContractStartDate then _REObjectTypeDetails._REIntegrationObject.ValidityStartDate
           else _REContract.ContractStartDate
      end                                                                 as ValidityStartDate,
      REStatusObjectSource                                                as REStatusObjectTarget,

      @Semantics.businessDate.to: true                                        
      case when _REObjectAssgmt.ValidityEndDate < _REContract.ContractEndDate then cast( coalesce(ValidityEndDate, '99991231') as rebdvdmvalidto )
           when _REObjectTypeDetails._REIntegrationObject.ValidityEndDate < _REContract.ContractEndDate then _REObjectTypeDetails._REIntegrationObject.ValidityEndDate
           else _REContract.ContractEndDate
      end                                                                 as ValidityEndDate,
      REOnlyInfoAssgmt,
      REStatusObjectSourceIsArchived,
      REGenerationType,
      REIsMainAsset,
      REAssignmentHasMultiple,
      REObjectPossessionStartDate,
      REObjectPossessionEndDate,
//      REGroupNumber,
//      REObjectGroupName,      
      
      _REObjectTypeDetails,
      _REObjectAssignmentType,
      _REGenerationType,
      _REContract._CompanyCode,
      _REContract
//      _REIntegrationObject
}
where
      REStatusObjectTarget like 'J5%'
  and REStatusObjectSource like 'IS%'
```
