---
name: I_SUPPLYDEMANDITEMTP
description: Supplydemanditemtp
app_component: PP-FIO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - interface-view
  - transactional-processing
  - item-level
  - component:PP-FIO-2CL
  - lob:Manufacturing
---
# I_SUPPLYDEMANDITEMTP

**Supplydemanditemtp**

| Property | Value |
|---|---|
| App Component | `PP-FIO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `RowIndex` | `RowIndex` |
| `Material` | `Material` |
| `MRPPlant` | `MRPPlant` |
| `MRPArea` | `MRPArea` |
| `MRPPlanningSegmentType` | `MRPPlanningSegmentType` |
| `MRPPlanningSegment` | `MRPPlanningSegment` |
| `MaterialShortageDefinition` | `MaterialShortageDefinition` |
| `MRPElementSupplyAggregation` | `MRPElementSupplyAggregation` |
| `MRPElementDemandAggregation` | `MRPElementDemandAggregation` |
| `MaterialExternalID` | `MaterialExternalID` |
| `MRPElement` | `MRPElement` |
| `MRPElementItem` | `MRPElementItem` |
| `MRPElementScheduleLine` | `MRPElementScheduleLine` |
| `MRPElementCategory` | `MRPElementCategory` |
| `MRPElementCategoryShortName` | `MRPElementCategoryShortName` |
| `MRPElementAvailyOrRqmtDate` | `MRPElementAvailyOrRqmtDate` |
| `SupplyEndDate` | `SupplyEndDate` |
| `SupplyStartDate` | `SupplyStartDate` |
| `RequirementMRPDate` | `RequirementMRPDate` |
| `MRPAvailableQuantity` | `MRPAvailableQuantity` |
| `MRPElementOpenQuantity` | `MRPElementOpenQuantity` |
| `MRPElementQuantityIsFirm` | `MRPElementQuantityIsFirm` |
| `MRPElementDocumentType` | `MRPElementDocumentType` |
| `StorageLocation` | `, useAsTemplate: true, additionalBinding: [{ element: 'Plant', localElement: 'MRPPlant' } ] }] } StorageLocation` |
| `Assembly` | `Assembly` |
| `ProductionVersion` | `, useAsTemplate: true, additionalBinding: [{ element: 'Product', localElement: 'Material' }, { element: 'Plant', localElement: 'MRPPlant' } ] }] } ProductionVersion` |
| `SourceMRPElement` | `SourceMRPElement` |
| `SourceMRPElement_2` | `SourceMRPElement_2` |
| `SourceMRPElementItem` | `SourceMRPElementItem` |
| `SourceMRPElementScheduleLine` | `SourceMRPElementScheduleLine` |
| `SourceMRPElementCategory` | `SourceMRPElementCategory` |
| `MRPElementBusinessPartner` | `MRPElementBusinessPartner` |
| `MRPElementBusinessPartnerName` | `MRPElementBusinessPartnerName` |
| `MRPElementBusinessPartnerType` | `MRPElementBusinessPartnerType` |
| `MaterialBaseUnit` | `MaterialBaseUnit` |
| `UnitOfMeasureCommercialName` | `UnitOfMeasureCommercialName` |
| `TargetQuantityUnitDisplayDcmls` | `TargetQuantityUnitDisplayDcmls` |
| `TargetQuantityUnitDcmls` | `TargetQuantityUnitDcmls` |
| `MaterialBaseUnitDesc` | `MaterialBaseUnitDesc` |
| `UnitOfMeasureName` | `UnitOfMeasureName` |
| `MRPElementIsReleased` | `MRPElementIsReleased` |
| `MRPElementIsPartiallyDelivered` | `MRPElementIsPartiallyDelivered` |
| `MRPRequestStatus` | `MRPRequestStatus` |
| `MRPRequestSupplierResponse` | `MRPRequestSupplierResponse` |
| `MRPAvailability` | `MRPAvailability` |
| `MRPEvaluationHorizonInDays` | `MRPEvaluationHorizonInDays` |
| `MaterialSafetyStockQty` | `MaterialSafetyStockQty` |
| `MRPElementDocumentTypeName` | `MRPElementDocumentTypeName` |
| `MRPElementCategoryGroup` | `MRPElementCategoryGroup` |
| `MRPElementCategoryGroupName` | `MRPElementCategoryGroupName` |
| `SupplyIsInThePast` | `SupplyIsInThePast` |
| `NumberOfAggregatedMRPElements` | `NumberOfAggregatedMRPElements` |
| `ProductionPlant` | `ProductionPlant` |
| `PlanningPlant` | `PlanningPlant` |
| `ExceptionMessageNumber` | `ExceptionMessageNumber` |
| `ExceptionMessageText` | `ExceptionMessageText` |
| `ExceptionMessageNumber2` | `ExceptionMessageNumber2` |
| `ExceptionMessageText2` | `ExceptionMessageText2` |
| `MRPElementReschedulingDate` | `MRPElementReschedulingDate` |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Supply and Demand Item - TP'
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: { usageType: { sizeCategory: #L, serviceQuality: #C, dataClass:#MIXED } }
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER, #UI_PROVIDER_PROJECTION_SOURCE]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'MaterialSupplyAndDemandView'
define root view entity I_SupplyDemandItemTP
  provider contract transactional_interface
  as projection on R_SupplyDemandItemTP
{
  key RowIndex,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductStdVH', element: 'Product' }, useAsTemplate: true } ]
      Material,
      @Consumption.valueHelpDefinition: [{entity:{name:'I_PlantStdVH' , element: 'Plant'}, useAsTemplate: true }]
      @EndUserText.label: 'MRP Plant'
      MRPPlant,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MRPAreaVH', element: 'MRPArea' }, useAsTemplate: true  } ]
      MRPArea,

      MRPPlanningSegmentType,
      MRPPlanningSegment,

      @Consumption.valueHelpDefinition: [ { entity: { name: 'C_MaterialShortageDefinition', element: 'MaterialShortageDefinition' }, useAsTemplate: true  } ]
      MaterialShortageDefinition,
      MRPElementSupplyAggregation,
      MRPElementDemandAggregation,
      MaterialExternalID,
      MRPElement,
      MRPElementItem,
      MRPElementScheduleLine,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MRPElementCategoryText', element: 'MRPElementCategory' }, useAsTemplate: true  } ]
      MRPElementCategory,
      MRPElementCategoryShortName,
      MRPElementAvailyOrRqmtDate,
      SupplyEndDate,
      SupplyStartDate,
      RequirementMRPDate,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      MRPAvailableQuantity,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      MRPElementOpenQuantity,
      MRPElementQuantityIsFirm,
      MRPElementDocumentType,
      @Consumption: {
          valueHelpDefinition: [
          {   entity: { name: 'I_StorageLocationStdVH', element: 'StorageLocation' },
              useAsTemplate: true,
              additionalBinding: [{ element: 'Plant', localElement: 'MRPPlant' } ]
          }]
      }
      StorageLocation,
      Assembly,
      @Consumption: {
          valueHelpDefinition: [
          {   entity: { name: 'I_ProductionVersionBasicStdVH', element: 'ProductionVersion' },
              useAsTemplate: true,
              additionalBinding: [{ element: 'Product', localElement: 'Material' }, 
                                  { element: 'Plant', localElement: 'MRPPlant' } ]
          }]
      }
      ProductionVersion,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'SourceMRPElement_2'
      SourceMRPElement,
      SourceMRPElement_2,
      SourceMRPElementItem,
      SourceMRPElementScheduleLine,
      SourceMRPElementCategory,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BusinessPartnerVH', element: 'BusinessPartner' }, useAsTemplate: true  } ]
      @ObjectModel.text.element: [ 'MRPElementBusinessPartnerName' ]
      MRPElementBusinessPartner,
      MRPElementBusinessPartnerName,
      MRPElementBusinessPartnerType,
      MaterialBaseUnit,
      UnitOfMeasureCommercialName,
      TargetQuantityUnitDisplayDcmls,
      TargetQuantityUnitDcmls,
      MaterialBaseUnitDesc,
      UnitOfMeasureName,
      @Semantics.booleanIndicator
      MRPElementIsReleased,
      @Semantics.booleanIndicator
      MRPElementIsPartiallyDelivered,
      MRPRequestStatus,
      MRPRequestSupplierResponse,
      MRPAvailability,
      MRPEvaluationHorizonInDays,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      MaterialSafetyStockQty,
      MRPElementDocumentTypeName,
      
      MRPElementCategoryGroup,
      MRPElementCategoryGroupName,
      @Semantics.booleanIndicator
      SupplyIsInThePast,
      NumberOfAggregatedMRPElements,

      @Consumption.valueHelpDefinition: [{entity:{name:'I_PlantStdVH' , element: 'Plant'}, useAsTemplate: true }]
      @EndUserText.label: 'Production Plant'
      ProductionPlant,
      @Consumption.valueHelpDefinition: [{entity:{name:'I_PlantStdVH' , element: 'Plant'}, useAsTemplate: true }]
      @EndUserText.label: 'Planning Plant'
      PlanningPlant,
      
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MRPExceptionMessage', element: 'MRPExceptionMessageNumber' }, useAsTemplate: true  } ]
      @EndUserText.label: 'Exception Message Number'
      ExceptionMessageNumber,
      ExceptionMessageText,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MRPExceptionMessage', element: 'MRPExceptionMessageNumber' }, useAsTemplate: true  } ]
      @EndUserText.label: 'Exception Message Number 2'
      ExceptionMessageNumber2,
      ExceptionMessageText2,
      MRPElementReschedulingDate
}
```
