---
name: C_MAINTORDOBJECTLISTITEMDEX
description: "Maintenance Order Object List Item DEX"
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDOBJECTLISTITEMDEX')/$value
semantic_en: "Maintenance Order Object List Item DEX"
semantic_vi: "Maintenance Order Object List Item DEX — CDS view tiêu dùng (transactional data) dựa trên I_MaintenanceObjectListItem."
keywords:
  - "maintenance"
  - "order"
  - "object"
  - "list"
  - "item"
  - "dex"
  - "usage"
  - "code"
  - "notification"
tags:
  - PM
  - component:PM-WOC-MO-2CL
  - consumption-view
  - lob:plant maintenance
  - order
  - PM-WOC
  - PM-WOC-MO
  - PM-WOC-MO-2CL
---
# C_MAINTORDOBJECTLISTITEMDEX

**Maintenance Order Object List Item DEX**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDOBJECTLISTITEMDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceOrderObjectList` | ✓ | |  | `MaintenanceObjectList` | `INT8(19)` | Object list number |
| `MaintenanceObjectListItem` | ✓ | |  |  | `INT4(10)` | Object list counters |
| `MaintenanceOrder` |  | | `_MaintenanceOrder` | `MaintenanceOrder` | `CHAR(12)` | Order Number |
| `MaintenanceObjectListUsageCode` |  | |  |  | `CHAR(1)` | Object list usage |
| `MaintenanceNotification` |  | |  |  | `CHAR(12)` | Notification Number |
| `Equipment` |  | |  |  | `CHAR(18)` | Equipment Number |
| `Assembly` |  | |  |  | `CHAR(40)` | Assembly |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `SerialNumber` |  | |  |  | `CHAR(18)` | Serial Number |
| `UniqueItemIdentifier` |  | |  |  | `CHAR(72)` | Unique Item Identifier |
| `CreationDate` |  | |  |  | `DATS(8)` | Date |
| `MaintObjectListItemSequence` |  | |  |  | `CHAR(20)` | Object list sort field |
| `MaintObjListEntryIsProcessed` |  | |  |  | `CHAR(1)` | Checkbox |
| `_MaintenanceOrder` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaintenanceOrder` | `I_MaintenanceOrder` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDOBJECTLISTITEMDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDOBJECTLISTITEMDEX')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  personalData.blocking: #REQUIRED
//    privilegedAssociations: [ '_LOCATIONACCOUNTASSIGNMENT' ]
}

@EndUserText.label: 'Maintenance Order Object List Item DEX'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #CONSUMPTION

@ObjectModel: {
  usageType: {
    dataClass: #TRANSACTIONAL,
    sizeCategory: #XL,
    serviceQuality: #C
  },
   modelingPattern: #ANALYTICAL_FACT,
   sapObjectNodeType.name: 'MaintenanceOrderObjectListItem',
   supportedCapabilities: [ #EXTRACTION_DATA_SOURCE  ]
}

@Analytics: {
  internalName:#LOCAL,
//  dataCategory: #FACT,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
               mapping:[
                {
                    table: 'objk', role: #MAIN,
                    viewElement:  ['MaintenanceOrderObjectList', 'MaintenanceObjectListItem'],
                    tableElement: ['obknr', 'obzae']
                }
                ]
}
}
}

define view entity C_MaintOrdObjectListItemDEX
  as select from I_MaintenanceObjectListItem as ObjectListItem
  association [1..1] to I_MaintenanceOrder as _MaintenanceOrder on ObjectListItem.MaintenanceObjectList = _MaintenanceOrder.MaintenanceOrderObjectList
{
      /* start suppress warning shlporigin_not_inherited */
  key ObjectListItem.MaintenanceObjectList as MaintenanceOrderObjectList,
  key ObjectListItem.MaintenanceObjectListItem,
      _MaintenanceOrder.MaintenanceOrder,
      ObjectListItem.MaintenanceObjectListUsageCode,
      ObjectListItem.MaintenanceNotification,
      ObjectListItem.Equipment,
      ObjectListItem.Assembly,
      ObjectListItem.Material,
      ObjectListItem.SerialNumber,
      ObjectListItem.UniqueItemIdentifier,
      ObjectListItem.CreationDate,
      ObjectListItem.MaintObjectListItemSequence,
      @Semantics.booleanIndicator: true
      @EndUserText.label: 'Processing indicator'
      ObjectListItem.MaintObjListEntryIsProcessed,
      /* end suppress warning shlporigin_not_inherited */
      /*Associations*/
      _MaintenanceOrder
}
where
  MaintenanceObjectListUsageCode = 'A'
```
