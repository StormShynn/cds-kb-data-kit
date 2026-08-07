---
name: I_RPTVMFGPRODCOSTCTRLGORDER
description: Rptvmfgprodcostctrlgorder
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_RPTVMFGPRODCOSTCTRLGORDER

**Rptvmfgprodcostctrlgorder**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `OrderID` | ✓ | |  |  |
| `OrderDescription` |  | |  | `cast(pcc.OrderDescription as pph_auftext preserving type)` |
| `OrderType` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `CreationDate` |  | |  |  |
| `LastChangedByUser` |  | |  |  |
| `LastChangeDate` |  | |  |  |
| `IsMarkedForDeletion` |  | |  |  |
| `IsStatisticalOrder` |  | |  |  |
| `ReferenceOrder` |  | |  |  |
| `ObjectInternalID` |  | |  |  |
| `Currency` |  | |  |  |
| `BaseUnit` |  | |  |  |
| `Plant` |  | |  |  |
| `ProductionProcess` |  | |  | `cast(pcc.ProductionProcess as fco_production_process preserving type)` |
| `ControllingArea` |  | |  |  |
| `CompanyCode` |  | |  |  |
| `BusinessArea` |  | |  |  |
| `ProfitCenter` |  | |  |  |
| `CostCenter` |  | |  |  |
| `ResponsibleCostCenter` |  | |  |  |
| `RequestingCostCenter` |  | |  | `cast(pcc.RequestingCostCenter as fco_io_ps_akstl preserving type)` |
| `FunctionalArea` |  | |  |  |
| `ActualCostsCostingVariant` |  | |  |  |
| `PlannedCostsCostingVariant` |  | |  |  |
| `_BaseUnit` | | ✓ | | |
| `_Currency` | | ✓ | | |
| `_OrderItem` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_OrderItem` | `I_RptvMfgProdCostCtrlgOrdItem` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.dataCategory: #FACT
--@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.sapObjectNodeType.name: 'RepetitiveManufacturingPCC'
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #MIXED}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Product Cost Controlling Order in Repetitive Manufacturing'

define view entity I_RptvMfgProdCostCtrlgOrder
    as select from I_ProductCostCtrlgOrder as pcc

    association [0..1] to I_UnitOfMeasure               as _BaseUnit  on $projection.BaseUnit = _BaseUnit.UnitOfMeasure
    association [0..1] to I_Currency                    as _Currency  on $projection.Currency = _Currency.Currency
--  to child
    association [0..*] to I_RptvMfgProdCostCtrlgOrdItem as _OrderItem on $projection.OrderID = _OrderItem.OrderID
--  to extension
--  association [1..1] to E_ProductCostCtrlgOrder       as _Extension on $projection.OrderID = _Extension.OrderID

{
      @ObjectModel.text.element: ['OrderDescription']
  key pcc.OrderID,

      @Semantics.text
      cast(pcc.OrderDescription as pph_auftext preserving type)            as OrderDescription,

      @ObjectModel.foreignKey.association: '_OrderType'
      pcc.OrderType,

      // Admin data
      @Semantics.user.createdBy: true
      pcc.CreatedByUser,
      @Semantics.systemDate.createdAt: true
      pcc.CreationDate,
      @Semantics.user.lastChangedBy: true
      pcc.LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      pcc.LastChangeDate,

      // Attributes
      pcc.IsMarkedForDeletion,
      pcc.IsStatisticalOrder,

      //Assignments
      pcc.ReferenceOrder,
      pcc.ObjectInternalID,
      pcc.Currency,
      pcc.BaseUnit,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_PlantStdVH', element: 'Plant' } } ]
      pcc.Plant,
      cast(pcc.ProductionProcess as fco_production_process preserving type) as ProductionProcess,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ControllingAreaStdVH', element: 'ControllingArea' } } ]
      pcc.ControllingArea,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' } } ]
      pcc.CompanyCode,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BusinessAreaStdVH', element: 'BusinessArea' } } ]
      pcc.BusinessArea,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProfitCenterStdVH', element: 'ProfitCenter' } } ]
      pcc.ProfitCenter,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CostCenterStdVH', element: 'CostCenter' } } ]
      pcc.CostCenter, 
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CostCenterStdVH', element: 'CostCenter' } } ]
      pcc.ResponsibleCostCenter,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_CostCenterStdVH', element: 'CostCenter' } } ]
      cast(pcc.RequestingCostCenter as fco_io_ps_akstl preserving type)    as RequestingCostCenter,  
      pcc.FunctionalArea,
      pcc.ActualCostsCostingVariant,
      pcc.PlannedCostsCostingVariant,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _OrderItem,
      _BaseUnit,
      _Currency,
      pcc._OrderType,
      pcc._ControllingArea,
      pcc._CompanyCode

}
where pcc.OrderCategory = '05';  //REM only
```
