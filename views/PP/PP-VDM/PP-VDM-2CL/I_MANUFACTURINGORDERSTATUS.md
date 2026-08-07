---
name: I_MANUFACTURINGORDERSTATUS
description: "Manufacturingorderstatus"
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
  - status
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MANUFACTURINGORDERSTATUS

**Manufacturingorderstatus**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ManufacturingOrder` | ✓ | |  | `cast(aufk.OrderID as manufacturingorder preserving type)` |  |  |
| `StatusCode` | ✓ | |  |  |  |  |
| `StatusObject` |  | |  | `cast(jest.StatusObject as j_objnr preserving type)` |  |  |
| `StatusProfile` |  | |  |  |  |  |
| `IsUserStatus` |  | |  | `cast(jest.IsUserStatus as vdm_j_isuserstatus preserving type)` |  |  |
| `StatusIsActive` |  | |  | `cast(jest.StatusIsActive as vdm_j_statusisactive preserving type)` |  |  |
| `StatusIsInactive` |  | |  |  |  |  |
| `ManufacturingOrderCategory` |  | |  | `OrderCategory` |  |  |
| `_MfgOrderCategory` | | ✓ | | | | |
| `_ManufacturingOrder` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MfgOrderCategory` | `I_MfgOrderCategory` | [1..1] |
| `_ManufacturingOrder` | `I_ManufacturingOrder` | [1..1] |
| `_Text` | `I_ManufacturingOrderStatusText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.privilegedAssociations: ['_StatusObject']
@Analytics.dataCategory: #FACT
--@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'IMFGORDERSTATUS'
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XXL, dataClass: #MIXED}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Manufacturing Order Status'
-- CDS view for all system and user status of a manufacturing order

define view entity I_ManufacturingOrderStatus
    as select from I_OrderBasic         as aufk
       inner join  I_StatusObjectStatus as jest on jest.StatusObject = aufk.ObjectInternalID

    association [1..1] to I_MfgOrderCategory   as _MfgOrderCategory   on  $projection.ManufacturingOrderCategory = _MfgOrderCategory.ManufacturingOrderCategory
 -- to root/parent
    association [1..1] to I_ManufacturingOrder as _ManufacturingOrder on  $projection.ManufacturingOrder = _ManufacturingOrder.ManufacturingOrder
--  to child
    association [0..*] to I_ManufacturingOrderStatusText as _Text     on  $projection.ManufacturingOrder = _Text.ManufacturingOrder
                                                                      and $projection.StatusCode         = _Text.StatusCode
{
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderStdVH', element: 'ManufacturingOrder' } } ]
      @ObjectModel.text.association: '_Text'
  key cast(aufk.OrderID as manufacturingorder preserving type)          as ManufacturingOrder,
      @ObjectModel.foreignKey.association: '_StatusCode'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key jest.StatusCode,
 
      @ObjectModel.foreignKey.association: '_StatusObject'
      cast(jest.StatusObject as j_objnr preserving type)                as StatusObject,
      @ObjectModel.foreignKey.association: '_StatusProfile'
      jest.StatusProfile,
      cast(jest.IsUserStatus   as vdm_j_isuserstatus   preserving type) as IsUserStatus,
      cast(jest.StatusIsActive as vdm_j_statusisactive preserving type) as StatusIsActive,
      @Semantics.booleanIndicator 
      jest.StatusIsInactive,

      @ObjectModel.foreignKey.association: '_MfgOrderCategory'
      aufk.OrderCategory as ManufacturingOrderCategory,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT, #TO_COMPOSITION_PARENT]
      _ManufacturingOrder,
--    @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text,
      _MfgOrderCategory,
      jest._StatusObject,
      jest._StatusCode,
      jest._StatusProfile
}
where aufk.OrderCategory = '10'
   or aufk.OrderCategory = '40';
```
