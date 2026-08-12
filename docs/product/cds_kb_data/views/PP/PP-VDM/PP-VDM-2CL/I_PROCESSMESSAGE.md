---
name: I_PROCESSMESSAGE
description: "Process Message Header"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROCESSMESSAGE')/$value
semantic_en: "Process Message Header"
semantic_vi: "Process Message Header — CDS view giao diện dựa trên comh."
keywords:
  - "process"
  - "message"
  - "header"
  - "plant"
  - "order"
  - "category"
  - "processing"
  - "status"
tags:
  - PP
  - component:PP-VDM-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-2CL
---
# I_PROCESSMESSAGE

**Process Message Header**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROCESSMESSAGE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProcessMessage` | ✓ | |  | `msid` | `NUMC(18)` | Number of the Process Message |
| `Plant` |  | |  | `werk` | `CHAR(4)` | Plant |
| `ProcessOrder` |  | |  | `cast(comh.aufnr as co_bord preserving type)` | `CHAR(12)` | Process Order Number |
| `ProcessMessageCategory` |  | |  | `mscla` | `CHAR(8)` | Process Message Category |
| `ProcessMessageProcessingStatus` |  | |  | `errkz` | `CHAR(1)` | Processing Status of the Process Message/the Control Recipe |
| `ProcessMessageIsForTesting` |  | |  | `tstkz` | `CHAR(1)` | Indicator: Message or Control Recipe for Test Purposes |
| `ProcessMessageSenderName` |  | |  | `source` | `CHAR(32)` | Sender of the process message |
| `CreationDate` |  | |  | `sedat` | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  | `seuzt` | `TIMS(6)` | Time when the record was created |
| `_Plant` | | ✓ | | | | |
| `_ProcessOrder` | | ✓ | | | | |
| `_ProcessMessageCategory` | | ✓ | | | | |
| `_ProcessMessageDestination` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |
| `_ProcessOrder` | `I_ManufacturingOrder` | [1..1] |
| `_ProcessMessageCategory` | `I_ProcessMessageCategory` | [1..1] |
| `_ProcessMessageDestination` | `I_ProcessMessageDestination` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROCESSMESSAGE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROCESSMESSAGE')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@Analytics.dataCategory: #FACT
@Analytics.internalName: #LOCAL
@Analytics.technicalName: 'IPROCMESSAGE'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #XL, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Process Message Header'

define view entity I_ProcessMessage
  as select from comh as comh

  association [1..1] to I_Plant                     as _Plant                     on  $projection.Plant = _Plant.Plant
  association [1..1] to I_ManufacturingOrder        as _ProcessOrder              on  $projection.ProcessOrder = _ProcessOrder.ManufacturingOrder
  association [1..1] to I_ProcessMessageCategory    as _ProcessMessageCategory    on  $projection.Plant                  = _ProcessMessageCategory.Plant
                                                                                  and $projection.ProcessMessageCategory = _ProcessMessageCategory.ProcessMessageCategory
  association [0..*] to I_ProcessMessageDestination as _ProcessMessageDestination on  $projection.ProcessMessage = _ProcessMessageDestination.ProcessMessage
{
      // Key
  key comh.msid       as ProcessMessage,

      // Assignments
      @Consumption.valueHelpDefinition: [ {entity: {name: 'I_PlantStdVH', element: 'Plant'}} ]
      @ObjectModel.foreignKey.association: '_Plant'
      comh.werk       as Plant,
--    @Consumption.valueHelpDefinition: [ {entity: {name: 'I_ProcessOrderStdVH', element: 'ProcessOrder'}} ]
      @ObjectModel.foreignKey.association: '_ProcessOrder'
      cast(comh.aufnr as co_bord preserving type) as ProcessOrder,
      @ObjectModel.foreignKey.association: '_ProcessMessageCategory'      
      comh.mscla      as ProcessMessageCategory,
--    @Consumption.valueHelpDefinition: [ {entity: {name: 'I_ProcessMessageProcgStatusVH', element: 'ProcessMessageProcessingStatus'}} ]
      comh.errkz      as ProcessMessageProcessingStatus,
      comh.tstkz      as ProcessMessageIsForTesting,
      comh.source     as ProcessMessageSenderName,

      // Admin
      @Semantics.systemDate.createdAt: true
      comh.sedat      as CreationDate,
      @Semantics.systemTime.createdAt: true
      comh.seuzt      as CreationTime,

      // Associations
      _Plant,
      _ProcessOrder,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _ProcessMessageDestination,
      _ProcessMessageCategory
};
```
