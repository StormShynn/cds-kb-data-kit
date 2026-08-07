---
name: I_SERIALNUMBERSTOCKSEGMENT
description: Serial NumberSTOCKSEGMENT
app_component: LO-MD-SN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-SN
  - interface-view
  - serial-number
  - component:LO-MD-SN-2CL
  - lob:Logistics General
---
# I_SERIALNUMBERSTOCKSEGMENT

**Serial NumberSTOCKSEGMENT**

| Property | Value |
|---|---|
| App Component | `LO-MD-SN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Material` | ✓ | |  |  |  |  |
| `SerialNumber` | ✓ | |  |  |  |  |
| `Equipment` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `SalesOrderItem` |  | |  |  |  |  |
| `InventorySpecialStockType` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `InventoryStockType` |  | |  |  |  |  |
| `StockOwner` |  | |  |  |  |  |

## Source Code

```abap
@EndUserText.label: 'Serial Number Stock Segment'
 
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK 
@AccessControl.personalData.blocking: #REQUIRED 
@ObjectModel.representativeKey: 'SerialNumber'
@Analytics.technicalName: 'ISERNUMSTOCKSEG'
@ObjectModel.semanticKey:  [ 'Material', 'SerialNumber' ] 
@ObjectModel.supportedCapabilities: [
  #SQL_DATA_SOURCE,
  #CDS_MODELING_DATA_SOURCE,
  #CDS_MODELING_ASSOCIATION_TARGET,
  #ANALYTICAL_DIMENSION
]

@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L

@Analytics: {dataCategory: #DIMENSION }

@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

define view entity I_SerialNumberStockSegment 
as select from I_EquipmentStockSegment as ess
  inner join I_Equipment as e
    on ess.Equipment = e.Equipment
{
  @ObjectModel.foreignKey.association: '_Material'
  key e.Material,
  
  key e.SerialNumber,
  
  @ObjectModel.foreignKey.association: '_Equipment'
  ess.Equipment,
         
  @ObjectModel.foreignKey.association: '_Plant'
  ess.Plant,   
  
  @ObjectModel.foreignKey.association: '_StorageLocation'
  ess.StorageLocation, 
     
  @ObjectModel.foreignKey.association: '_Customer'
  @Consumption.valueHelpDefinition: [
    { entity:  { name:    'I_Customer_VH',
                 element: 'Customer' }
    }]
  ess.Customer, 
  
  @ObjectModel.foreignKey.association: '_Supplier'
  @Consumption.valueHelpDefinition: [
    { entity:  { name:    'I_Supplier_VH',
                 element: 'Supplier' }
    }]
  ess.Supplier,  
  
  @ObjectModel.foreignKey.association: '_SalesOrder'
  @Consumption.valueHelpDefinition: [
    { entity:  { name:    'I_SalesOrderStdVH',
                 element: 'SalesOrder' }
    }]
  ess.SalesOrder, 
  
  @ObjectModel.foreignKey.association: '_SalesOrderItem'
  @Consumption.valueHelpDefinition: [
    { entity:  { name:    'I_SalesOrderItemStdVH',
                 element: 'SalesOrderItem' },
      additionalBinding: [{ localElement: 'SalesOrder',
                            element: 'SalesOrder' }]
    }]
  ess.SalesOrderItem,  
  
  @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
  ess.InventorySpecialStockType,
    
  @ObjectModel.foreignKey.association: '_WBSElementByInternalKey'
  @Consumption.valueHelpDefinition: [
    { entity:  { name:    'I_WBSElmntByIntKeyStdVH',
                 element: 'WBSElementInternalID' }
    }]
  ess.WBSElementInternalID, 
  
  ess.Batch,     
  ess.InventoryStockType,    
  ess.StockOwner,
    
  // associations
  e._Material,
  ess._Equipment,
  ess._Plant,
  ess._StorageLocation,
  ess._SalesOrder,
  ess._SalesOrderItem,
  ess._Customer,
  ess._CustomerCompanyByPlant,
  ess._Supplier,
  ess._SupplierCompanyByPlant,
  ess._InventoryStockType,
  ess._InventorySpecialStockType,
  ess._WBSElementByInternalKey
}
```
