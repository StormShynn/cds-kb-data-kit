---
name: I_UNITOFMEASURESTDVH
description: Unit of MeasureSTDVH
app_component: BC-SRV-ASF-UOM
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-ASF
  - interface-view
  - value-help
  - standard-value-help
  - unit-of-measure
  - component:BC-SRV-ASF-UOM
  - lob:Basis Components
---
# I_UNITOFMEASURESTDVH

**Unit of MeasureSTDVH**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ASF-UOM` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `UnitOfMeasure` | ✓ | |  |  |  |  |
| `UnitOfMeasureDimension` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IUNITOFMEASUREVH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Unit of Measure'
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'UnitOfMeasure'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Search.searchable: true

define view I_UnitOfMeasureStdVH as select from I_UnitOfMeasure 
{

   @Semantics.unitOfMeasure: true
   @ObjectModel.text.element:['UnitOfMeasureLongName']   
   key UnitOfMeasure,  

   @Search.defaultSearchElement: true
   @Search.ranking: #HIGH
   @Consumption.hidden: true
   _Text[ 1: Language = $session.system_language ].UnitOfMeasure_E,        
    
   @Search.defaultSearchElement: true 
   @Search.fuzzinessThreshold: 0.8    
   @Semantics.text:true 
   _Text[ 1: Language = $session.system_language ].UnitOfMeasureLongName,   

   @ObjectModel.text.element:['UnitOfMeasureDimensionName']   
   UnitOfMeasureDimension, 
 
   @Search.defaultSearchElement: true 
   @Search.fuzzinessThreshold: 0.8      
   @Semantics.text:true    
   _DimensionText[ 1: Language = $session.system_language ].UnitOfMeasureDimensionName
   
}
```
