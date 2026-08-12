---
name: I_CONTROLRECIPE
description: "Control Recipe Header"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONTROLRECIPE')/$value
semantic_en: "Control Recipe Header"
semantic_vi: "Control Recipe Header — CDS view giao diện dựa trên coch."
keywords:
  - "control"
  - "recipe"
  - "header"
  - "plant"
  - "process"
  - "order"
  - "destination"
  - "type"
tags:
  - PP
  - component:PP-VDM-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-2CL
---
# I_CONTROLRECIPE

**Control Recipe Header**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONTROLRECIPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ControlRecipe` | ✓ | |  | `cast(coch.crid as pph_crid preserving type)` | `NUMC(18)` | Control Recipe |
| `Plant` |  | |  | `werk` | `CHAR(4)` | Plant |
| `ProcessOrder` |  | |  | `bid` | `CHAR(12)` | Process Order |
| `ControlRecipeDestination` |  | |  | `cast(coch.phseq as vdm_phseq preserving type)` | `CHAR(2)` | Control Recipe Destination |
| `ControlRecipeDestinationType` |  | |  | `cotyp` | `CHAR(1)` | Type of Control Recipe Destination |
| `ControlRecipeDestAddressName` |  | |  | `adres` | `CHAR(32)` | Address of the Control Recipe Destination |
| `ControlRecipeStatus` |  | |  | `cast(coch.crstat as vdm_crstat preserving type)` | `CHAR(5)` | Control Recipe Status |
| `ControlRecipeIsForTesting` |  | |  | `tstkz` | `CHAR(1)` | Indicator: Message or Control Recipe for Test Purposes |
| `ControlRecipeText` |  | |  | `ktxt` | `CHAR(40)` | Description |
| `Product` |  | |  | `cast(coch.matnr as productnumber preserving type)` | `CHAR(40)` | Product |
| `ProductName` |  | |  | `cast(coch.matxt as productdescription preserving type)` | `CHAR(40)` | Product Description |
| `Batch` |  | |  | `charg` | `CHAR(10)` | Batch Number |
| `InspectionLot` |  | |  | `prueflos` | `NUMC(12)` | Inspection Lot Number |
| `CreationDate` |  | |  | `andat` | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  | `anuzt` | `TIMS(6)` | Time when the record was created |
| `LastChangeDate` |  | |  | `aedat` | `DATS(8)` | Last Changed On |
| `ScheduledEarliestStartDate` |  | |  | `cast(coch.fsavd as pph_fsavd preserving type)` | `DATS(8)` | Earliest Scheduled Execution Start Date |
| `ScheduledEarliestStartTime` |  | |  | `cast(coch.fsavz as pph_fsavz preserving type)` | `TIMS(6)` | Earliest Scheduled Execution Start Time |
| `_Plant` | | ✓ | | | | |
| `_ProcessOrder` | | ✓ | | | | |
| `_ControlRecipeDestination` | | ✓ | | | | |
| `_ControlRecipeDestinationType` | | ✓ | | | | |
| `_ControlRecipeStatus` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_Batch` | | ✓ | | | | |
| `_InspectionLot` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |
| `_ProcessOrder` | `I_ManufacturingOrder` | [1..1] |
| `_ControlRecipeDestination` | `I_ControlRecipeDestination` | [1..1] |
| `_ControlRecipeDestinationType` | `I_ControlRecipeDestinationType` | [1..1] |
| `_ControlRecipeStatus` | `I_ControlRecipeStatus` | [1..1] |
| `_Product` | `I_Product` | [0..1] |
| `_Batch` | `I_Batch` | [0..1] |
| `_InspectionLot` | `I_InspectionLot` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONTROLRECIPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONTROLRECIPE')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@Analytics.dataCategory: #FACT
@Analytics.internalName: #LOCAL
@Analytics.technicalName: 'IPPCONTROLRECIPE'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #XL, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Control Recipe Header'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_ControlRecipe
  as select from coch as coch

  association [1..1] to I_Plant                        as _Plant                        on  $projection.Plant = _Plant.Plant
  association [1..1] to I_ManufacturingOrder           as _ProcessOrder                 on  $projection.ProcessOrder = _ProcessOrder.ManufacturingOrder  
  association [1..1] to I_ControlRecipeDestination     as _ControlRecipeDestination     on  $projection.Plant                    = _ControlRecipeDestination.Plant
                                                                                        and $projection.ControlRecipeDestination = _ControlRecipeDestination.ControlRecipeDestination
  association [1..1] to I_ControlRecipeDestinationType as _ControlRecipeDestinationType on  $projection.ControlRecipeDestinationType = _ControlRecipeDestinationType.ControlRecipeDestinationType
  association [1..1] to I_ControlRecipeStatus          as _ControlRecipeStatus          on  $projection.ControlRecipeStatus = _ControlRecipeStatus.ControlRecipeStatus
  association [0..1] to I_Product                      as _Product                      on  $projection.Product = _Product.Product
  association [0..1] to I_Batch                        as _Batch                        on  $projection.Plant   = _Batch.Plant
                                                                                        and $projection.Product = _Batch.Material
                                                                                        and $projection.Batch   = _Batch.Batch
  association [0..1] to I_InspectionLot                as _InspectionLot                on  $projection.InspectionLot = _InspectionLot.InspectionLot

{
      // Key
      @ObjectModel.text.element: ['ControlRecipeText']
  key cast(coch.crid  as pph_crid preserving type)   as ControlRecipe,

      // Assignments
      @Consumption.valueHelpDefinition: [ {entity: {name: 'I_PlantStdVH', element: 'Plant'}} ]
      @ObjectModel.foreignKey.association: '_Plant'
      coch.werk       as Plant,
--    @Consumption.valueHelpDefinition: [ {entity: {name: 'I_ProcessOrderStdVH', element: 'ProcessOrder'}} ]
      @ObjectModel.foreignKey.association: '_ProcessOrder'
      coch.bid        as ProcessOrder,
      @ObjectModel.foreignKey.association: '_ControlRecipeDestination'
      cast(coch.phseq as vdm_phseq preserving type)   as ControlRecipeDestination,
      @ObjectModel.foreignKey.association: '_ControlRecipeDestinationType'      
      coch.cotyp      as ControlRecipeDestinationType,
      coch.adres      as ControlRecipeDestAddressName,
      @ObjectModel.foreignKey.association: '_ControlRecipeStatus'      
      cast(coch.crstat as vdm_crstat preserving type) as ControlRecipeStatus,
      coch.tstkz      as ControlRecipeIsForTesting,
      @Semantics.text: true
      coch.ktxt       as ControlRecipeText,
      @Consumption.valueHelpDefinition: [ {entity: {name: 'I_ProductStdVH', element: 'Product'}} ]
      @ObjectModel.foreignKey.association: '_Product'
      @ObjectModel.text.element: ['ProductName']
      cast(coch.matnr as productnumber preserving type)      as Product,
      @Semantics.text: true
      cast(coch.matxt as productdescription preserving type) as ProductName,
      @Consumption.valueHelpDefinition: [ {entity: {name: 'I_BatchStdVH', element: 'Batch'}} ]
      @ObjectModel.foreignKey.association: '_Batch'      
      coch.charg      as Batch,
      @Consumption.valueHelpDefinition: [ {entity: {name: 'I_InspectionLotStdVH', element: 'InspectionLot'}} ]
      @ObjectModel.foreignKey.association: '_InspectionLot'      
      coch.prueflos   as InspectionLot,  

      // Admin
      @Semantics.systemDate.createdAt: true
      coch.andat      as CreationDate,
      @Semantics.systemTime.createdAt: true
      coch.anuzt      as CreationTime,
      @Semantics.systemDate.lastChangedAt: true
      coch.aedat      as LastChangeDate,

      // Date/Time
      cast(coch.fsavd as pph_fsavd preserving type) as ScheduledEarliestStartDate,
      cast(coch.fsavz as pph_fsavz preserving type) as ScheduledEarliestStartTime,

      // Associations
      _Plant,
      _ProcessOrder,
      _ControlRecipeDestination,
      _ControlRecipeDestinationType,
      _ControlRecipeStatus,
      _Product,
      _Batch,
      _InspectionLot
};
```
