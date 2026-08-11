---
name: C_SFTYDATASHTOUTPREQFDP_2
description: "Safety Data Sheet Shipment Request"
app_component: EHS-SUS-SDS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SFTYDATASHTOUTPREQFDP_2')/$value
semantic_en: "Safety Data Sheet Shipment Request"
semantic_vi: "Safety Data Sheet Shipment Request — CDS view tiêu dùng (transactional data) dựa trên I_SftyDataShtOutpReq."
keywords:
  - "safety"
  - "data"
  - "sheet"
  - "shipment"
  - "request"
  - "sfty"
  - "outp"
  - "customer"
  - "rcpnt"
  - "addr"
  - "ship"
  - "party"
  - "address"
tags:
  - EHS
  - component:EHS-SUS-SDS
  - consumption-view
  - EHS-SUS
  - EHS-SUS-SDS
---
# C_SFTYDATASHTOUTPREQFDP_2

**Safety Data Sheet Shipment Request**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-SDS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SFTYDATASHTOUTPREQFDP_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SftyDataShtOutpReqUUID` | ✓ | |  |  | `RAW(16)` | SDS Output Request UUID |
| `Customer` |  | |  |  | `CHAR(10)` | Ship-To Party Customer |
| `SftyDataShtRcpntPty` |  | |  |  | `CHAR(10)` | SDS Recipient (BP) |
| `SftyDataShtRcpntAddrID` |  | |  |  | `CHAR(10)` | SDS Recipient Address |
| `ShipToPartyAddressID` |  | |  |  | `CHAR(10)` | Ship-to Party Address |
| `ShipToPartyCountry` |  | |  |  | `CHAR(3)` | Safety Data Sheet Ship-to Country/Region ID |
| `ShipToPartyRegion` |  | |  |  | `CHAR(3)` | Safety Data Sheet Ship-to Region ID |
| `SftyDataShtShipmentDateTime` |  | |  |  | `DEC(15)` | Shipment Date and Time for Safety Data Sheet |
| `SftyDataShtOutpDateTime` |  | |  |  | `DEC(15)` | Output Date and Time of Safety Data Sheet |
| `SftyDataShtOutpReqStatus` |  | |  |  | `CHAR(2)` | Status of Safety Data Sheet Output Request |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `SftyDataShtOutpReqNoteText` |  | |  |  | `CHAR(500)` | Safety Data Sheet Manual Shipment Notes |
| `PCLgsDcMnllyOvrwrtnAddrUUID` |  | |  |  | `RAW(16)` | Key of the Manually Overwritten Address for PCLD |
| `_OutputItem` | | ✓ | | | | |
| `_SalesOrg` | | ✓ | | | | |
| `_RecipientParty` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_BusinessPartnerCustomer` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_OutputItem` | `I_SftyDataShtOutpReqItemEnhcd` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SFTYDATASHTOUTPREQFDP_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SFTYDATASHTOUTPREQFDP_2')/$value)*

```abap
@EndUserText.label: 'Safety Data Sheet Shipment Request'

@AbapCatalog:
{
  sqlViewName: 'CSDSORFDP2',
  compiler.compareFilter: true,
  preserveKey: true
}

@AccessControl:
{
  authorizationCheck: #CHECK,
  personalData.blocking: #REQUIRED
}

@VDM:
{ 
  viewType: #CONSUMPTION,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel:
{
  usageType:
  {
    dataClass: #TRANSACTIONAL,
    sizeCategory: #L,
    serviceQuality: #B
  },
  representativeKey: 'SftyDataShtOutpReqUUID',
  supportedCapabilities: [#OUTPUT_FORM_DATA_PROVIDER],
  modelingPattern: #OUTPUT_FORM_DATA_PROVIDER
}

@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true 


define view C_SftyDataShtOutpReqFDP_2
  as select from I_SftyDataShtOutpReq

  association [1..*] to I_SftyDataShtOutpReqItemEnhcd as _OutputItem on $projection.SftyDataShtOutpReqUUID = _OutputItem.SftyDataShtOutpReqUUID
  {

  key  SftyDataShtOutpReqUUID,
  
       Customer,
       SftyDataShtRcpntPty,
       SftyDataShtRcpntAddrID,
       ShipToPartyAddressID,
       ShipToPartyCountry,
       ShipToPartyRegion,
       SftyDataShtShipmentDateTime,
       SftyDataShtOutpDateTime,
       SftyDataShtOutpReqStatus,
       SalesOrganization,
       SftyDataShtOutpReqNoteText,
       PCLgsDcMnllyOvrwrtnAddrUUID,

       
       -- associations
       _OutputItem,
       _SalesOrg,
      _RecipientParty,
      _BusinessPartner,  
      _BusinessPartnerCustomer
}
```
