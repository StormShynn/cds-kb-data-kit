---
name: I_CUSTPROJSLSORDITEMWORKPCKG
description: Custprojslsorditemworkpckg
app_component: SD-SLS-PBS
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-PBS
  - interface-view
  - item-level
  - component:SD-SLS-PBS
  - lob:Sales & Distribution
---
# I_CUSTPROJSLSORDITEMWORKPCKG

**Custprojslsorditemworkpckg**

| Property | Value |
|---|---|
| App Component | `SD-SLS-PBS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerProject` | ✓ | |  |  |  |  |
| `SalesOrderItem` | ✓ | |  |  |  |  |
| `WorkPackage` | ✓ | |  |  |  |  |
| `WorkPackageName` |  | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `WorkPackageStartDate` |  | |  |  |  |  |
| `WorkPackageEndDate` |  | |  |  |  |  |
| `WorkPackageUUID` |  | |  |  |  |  |
| `SalesOrderType` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `_CustProjSlsOrdItem` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_CustomerProject` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustProjSlsOrdItem` | `I_CustProjSlsOrdItem` | [1..1] |
| `_SalesOrderItem` | `I_SalesOrderItem` | [1..1] |
| `_CustomerProject` | `I_CustomerProject` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICUSTPROJSOIWP'
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@ObjectModel: {
   representativeKey: 'WorkPackage',
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #C,
     sizeCategory:   #L
   },
   supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
}
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'SO Item Wrk Pckgs for Customer Project'
define view I_CustProjSlsOrdItemWorkPckg
  as select from I_CustProjSlsOrdItem as CustProjSlsOrdItem
    inner join   I_WorkPackage        as WorkPackage on  CustProjSlsOrdItem.SalesOrder     = WorkPackage.SalesOrder
                                                     and CustProjSlsOrdItem.SalesOrderItem = WorkPackage.SalesOrderItem

  association [1..1] to I_CustProjSlsOrdItem  as _CustProjSlsOrdItem      on $projection.CustomerProject = _CustProjSlsOrdItem.CustomerProject
                                                                          and $projection.SalesOrderItem = _CustProjSlsOrdItem.SalesOrderItem
  
  association [1..1] to I_SalesOrderItem      as _SalesOrderItem          on $projection.SalesOrder      = _SalesOrderItem.SalesOrder
                                                                          and $projection.SalesOrderItem = _SalesOrderItem.SalesOrderItem                                                                  
                                                                          
  association [1..1] to I_CustomerProject     as _CustomerProject         on $projection.CustomerProject = _CustomerProject.CustomerProject
  
{
      @Consumption.valueHelpDefinition: [
            { entity:  { name:    'I_CustomerProjectVH',
                         element: 'CustomerProject' }
            }]
      @ObjectModel.foreignKey.association: '_CustomerProject'
  key CustProjSlsOrdItem.CustomerProject,

      @ObjectModel.foreignKey.association: '_SalesOrderItem'
  key CustProjSlsOrdItem.SalesOrderItem,

      @ObjectModel.text.element: 'WorkPackageName'
  key WorkPackage.WorkPackage,

      @Semantics.text: true
      WorkPackage.WorkPackageName,

      @ObjectModel.foreignKey.association: '_SalesOrder'
      CustProjSlsOrdItem.SalesOrder,

      WorkPackage.WorkPackageStartDate,

      WorkPackage.WorkPackageEndDate,
      
      WorkPackage.WorkPackageUUID,
      
      // For Access control
      @Consumption.hidden: true
      CustProjSlsOrdItem.SalesOrderType,
      //_SalesOrder.SalesOrderType,
      @Consumption.hidden: true
      CustProjSlsOrdItem.OrganizationDivision,
      @Consumption.hidden: true
      CustProjSlsOrdItem.SalesOrganization,
      @Consumption.hidden: true
      CustProjSlsOrdItem.DistributionChannel,

      //Association
      _CustomerProject,
      _CustProjSlsOrdItem,
      _SalesOrderItem,
      CustProjSlsOrdItem._SalesOrder
}
```
