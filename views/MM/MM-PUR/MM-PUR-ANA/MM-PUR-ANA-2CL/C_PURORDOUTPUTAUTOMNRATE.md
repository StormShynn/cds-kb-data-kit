---
name: C_PURORDOUTPUTAUTOMNRATE
description: PO Output Automn & non Automn percentage
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PURORDOUTPUTAUTOMNRATE')/$value
semantic_en: PO Output Automn & non Automn percentage
tags:
  - MM
  - bo:purchaseorder
  - component:MM-PUR-ANA-2CL
  - consumption-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-ANA
  - MM-PUR-ANA-2CL
  - metadata-only
---
# C_PURORDOUTPUTAUTOMNRATE

**PO Output Automn & non Automn percentage**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PURORDOUTPUTAUTOMNRATE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrder` |  | |  |  | `CHAR(10)` | Purchase Order Number |
| `POOutputMessageItemID` |  | |  |  | `NUMC(6)` | Output Request Item ID |
| `POOutputChannel` |  | |  |  | `CHAR(5)` | Output Channel |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `POOutputChannelManualUniqueID` |  | |  |  | `CHAR(14)` | Text field length 14 |
| `POOutputChannelAutomnUniqueID` |  | |  |  | `CHAR(14)` | Text field length 14 |
| `PurchaseOrderOutputIsAutomated` |  | |  |  | `CHAR(1)` | Is Automated |
| `NmbrOfPOOutputItems` |  | |  |  | `INT4(10)` |  |
| `NmbrOfPurchaseOrdersPrinted` |  | |  |  | `INT4(10)` | Number of Purchase Orders - Printed |
| `NmbrOfPurchaseOrdersEmailed` |  | |  |  | `INT4(10)` | Number of Purchase Orders Mailed |
| `NmbrOfPurOrdersOutputAsXML` |  | |  |  | `INT4(10)` | Number of Purchase Orders with Output as XML |
| `NmbrOfPurOrdersOutputAsIDOC` |  | |  |  | `INT4(10)` | Number of Purchase Orders with Output as IDOC |
| `NmbrOfPurOrdersOutputAsEDI` |  | |  |  | `INT4(10)` | Number of Purchase Orders with Output as EDI |
| `NmbrOfPurOrdsWithAutomnOutput` |  | |  |  | `INT4(10)` |  |
| `NmbrOfPurOrdsWithNonAutomnOutp` |  | |  |  | `INT4(10)` |  |
| `POOutputAutomationPercent` |  | |  |  | `DEC(15)` |  |
| `POOutputNonAutomnPercent` |  | |  |  | `DEC(15)` |  |
