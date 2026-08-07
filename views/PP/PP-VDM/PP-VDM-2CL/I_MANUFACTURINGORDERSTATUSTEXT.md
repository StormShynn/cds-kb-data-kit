---
name: I_MANUFACTURINGORDERSTATUSTEXT
description: Manufacturingorderstatustext
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
  - text-view
  - text
  - status
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MANUFACTURINGORDERSTATUSTEXT

**Manufacturingorderstatustext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ManufacturingOrder` | ✓ | |  |  |  |  |
| `StatusCode` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  | `cast(text.Language as spras preserving type)` |  |  |
| `StatusProfile` |  | |  |  |  |  |
| `StatusShortName` |  | |  | `cast(text.StatusShortName as vdm_pp_jtxt04 preserving type)` |  |  |
| `StatusName` |  | |  | `cast(text.StatusName as vdm_pp_jtxt30 preserving type)` |  |  |
| `_ManufacturingOrderStatus` | | ✓ | | | | |
| `_ManufacturingOrder` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ManufacturingOrderStatus` | `I_ManufacturingOrderStatus` | [1..1] |
| `_ManufacturingOrder` | `I_ManufacturingOrder` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.ignorePropagatedAnnotations: true 
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IMFGORDERSTSTEXT'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'StatusCode'
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XXL, dataClass: #MIXED}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Manufacturing Order Status - Text'

define view entity I_ManufacturingOrderStatusText
    as select from I_ManufacturingOrderStatus as stat
      inner join   I_StatusCodeText           as text on  text.StatusCode    = stat.StatusCode 
                                                      and text.StatusProfile = stat.StatusProfile

--  to parent
    association [1..1] to I_ManufacturingOrderStatus as _ManufacturingOrderStatus on  $projection.ManufacturingOrder = _ManufacturingOrderStatus.ManufacturingOrder
                                                                                  and $projection.StatusCode         = _ManufacturingOrderStatus.StatusCode
--  to root                                                      
    association [1..1] to I_ManufacturingOrder       as _ManufacturingOrder       on  $projection.ManufacturingOrder = _ManufacturingOrder.ManufacturingOrder
{
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgOrderStdVH', element: 'ManufacturingOrder' } } ]
      @ObjectModel.foreignKey.association: '_ManufacturingOrder'
  key stat.ManufacturingOrder,
--    @ObjectModel.foreignKey.association: '_StatusCode'
      @ObjectModel.text.element: ['StatusShortName','StatusName']
  key stat.StatusCode,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast(text.Language as spras preserving type)                as Language,
--    @ObjectModel.foreignKey.association: '_StatusProfile'
      stat.StatusProfile,

      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(text.StatusShortName as vdm_pp_jtxt04 preserving type) as StatusShortName,
      @Semantics.text: true
      cast(text.StatusName      as vdm_pp_jtxt30 preserving type) as StatusName,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT]
      _ManufacturingOrder,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]
      _ManufacturingOrderStatus,
      text._Language
};
```
