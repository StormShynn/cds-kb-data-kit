---
name: C_SFTYDATASHTOUTPREQFDP_2
description: Safety Data Sheet Shipment Request
app_component: EHS-SUS-SDS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SFTYDATASHTOUTPREQFDP_2')/$value
semantic_en: Safety Data Sheet Shipment Request
tags:
  - EHS
  - component:EHS-SUS-SDS
  - consumption-view
  - EHS-SUS
  - EHS-SUS-SDS
  - metadata-only
---
# C_SFTYDATASHTOUTPREQFDP_2

**Safety Data Sheet Shipment Request**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-SDS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SFTYDATASHTOUTPREQFDP_2')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SftyDataShtOutpReqUUID` | `RAW(16)` | SDS Output Request UUID |
| `Customer` | `CHAR(10)` | Ship-To Party Customer |
| `SftyDataShtRcpntPty` | `CHAR(10)` | SDS Recipient (BP) |
| `SftyDataShtRcpntAddrID` | `CHAR(10)` | SDS Recipient Address |
| `ShipToPartyAddressID` | `CHAR(10)` | Ship-to Party Address |
| `ShipToPartyCountry` | `CHAR(3)` | Safety Data Sheet Ship-to Country/Region ID |
| `ShipToPartyRegion` | `CHAR(3)` | Safety Data Sheet Ship-to Region ID |
| `SftyDataShtShipmentDateTime` | `DEC(15)` | Shipment Date and Time for Safety Data Sheet |
| `SftyDataShtOutpDateTime` | `DEC(15)` | Output Date and Time of Safety Data Sheet |
| `SftyDataShtOutpReqStatus` | `CHAR(2)` | Status of Safety Data Sheet Output Request |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `SftyDataShtOutpReqNoteText` | `CHAR(500)` | Safety Data Sheet Manual Shipment Notes |
| `PCLgsDcMnllyOvrwrtnAddrUUID` | `RAW(16)` | Key of the Manually Overwritten Address for PCLD |
