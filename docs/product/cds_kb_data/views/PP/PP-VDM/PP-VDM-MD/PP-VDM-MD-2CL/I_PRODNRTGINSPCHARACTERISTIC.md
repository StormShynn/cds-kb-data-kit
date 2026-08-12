---
name: I_PRODNRTGINSPCHARACTERISTIC
description: "Inspection characteristic of prodn rtg"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNRTGINSPCHARACTERISTIC')/$value
semantic_en: "Inspection characteristic of prodn rtg"
semantic_vi: "Inspection characteristic of prodn rtg — CDS view giao diện dựa trên I_BOOCharacteristic."
keywords:
  - "inspection"
  - "characteristic"
  - "prodn"
  - "rtg"
  - "bill"
  - "operations"
  - "type"
  - "production"
  - "routing"
  - "group"
  - "version"
tags:
  - PP
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
---
# I_PRODNRTGINSPCHARACTERISTIC

**Inspection characteristic of prodn rtg**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNRTGINSPCHARACTERISTIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfOperationsType` | ✓ | |  |  | `CHAR(1)` | Task List Type |
| `ProductionRoutingGroup` | ✓ | |  | `BillOfOperationsGroup` | `CHAR(8)` | Key for Task List Group |
| `ProductionRoutingOpIntID` | ✓ | |  | `BOOOperationInternalID` | `NUMC(8)` | Number of the Task List Node |
| `BOOCharacteristic` | ✓ | |  |  | `NUMC(4)` | Inspection Characteristic Number |
| `BillOfOperationsVersion` |  | |  |  | `CHAR(4)` | Routing Version |
| `_BillOfOperationsGroup` | | ✓ | | | | |
| `_BillOfOperationsType` | | ✓ | | | | |
| `_BOOOperationInternalID` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNRTGINSPCHARACTERISTIC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNRTGINSPCHARACTERISTIC')/$value)*

```abap
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'BOOCharacteristic'
@ObjectModel.usageType: { serviceQuality: #B, sizeCategory: #M, dataClass: #MASTER }
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Inspection characteristic of prodn rtg'
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE,#ANALYTICAL_DIMENSION]
@Search.searchable: true
@Metadata.allowExtensions:true

define view entity I_ProdnRtgInspCharacteristic as select from I_BOOCharacteristic
{
  @ObjectModel.foreignKey.association: '_BillOfOperationsType'
  key BillOfOperationsType,
  @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
  @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key BillOfOperationsGroup as ProductionRoutingGroup,
  @ObjectModel.foreignKey.association: '_BOOOperationInternalID'
  key BOOOperationInternalID as ProductionRoutingOpIntID,
  key BOOCharacteristic,
  BillOfOperationsVersion,
  /* Associations */
  _BillOfOperationsGroup,
  _BillOfOperationsType,
  _BOOOperationInternalID
}
where BillOfOperationsType = 'N'
```
