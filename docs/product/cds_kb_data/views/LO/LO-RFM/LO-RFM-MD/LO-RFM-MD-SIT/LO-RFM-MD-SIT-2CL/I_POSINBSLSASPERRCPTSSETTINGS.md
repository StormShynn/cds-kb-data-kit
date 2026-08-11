---
name: I_POSINBSLSASPERRCPTSSETTINGS
description: "This CDS view enables you to query and report on the settings for point of sale inbound profiles, including storage location and goods movement types for sales and returns, integrate them into other applications, or use them as a data source for analytical or transactional processes in SAP S/4HANA. This CDS view provides the data to answer the following business questions: Which point of sale inbound profiles are configured in the system? What are the assigned storage locations for each point of sale inbound profile? Which goods movement types are set for sales and returns per receipt for each profile? How are specific store receipts processed with respect to sales and returns in logistics? How do settings differ between sales and return processes for various stores or profiles? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-RFM-MD-SIT-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POSINBSLSASPERRCPTSSETTINGS')/$value
semantic_en: "This CDS view enables you to query and report on the settings for point of sale inbound profiles, including storage location and goods movement types for sales and returns, integrate them into other applications, or use them as a data source for analytical or transactional processes in SAP S/4HANA. This CDS view provides the data to answer the following business questions: Which point of sale inbound profiles are configured in the system? What are the assigned storage locations for each point of sale inbound profile? Which goods movement types are set for sales and returns per receipt for each profile? How are specific store receipts processed with respect to sales and returns in logistics? How do settings differ between sales and return processes for various stores or profiles? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Settings for Sales as per Receipts in POS Inbound — CDS view giao diện dựa trên twpir."
keywords:
  - "settings"
  - "for"
  - "sales"
  - "per"
  - "receipts"
  - "pos"
  - "inbound"
  - "point"
  - "sale"
  - "profile"
  - "storage"
  - "location"
  - "goods"
  - "movement"
  - "type"
tags:
  - LO
  - bo:companycode
  - component:LO-RFM-MD-SIT-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-SIT
  - LO-RFM-MD-SIT-2CL
  - lob:logistics general
  - transaction
  - bo:purchaseorder
---
# I_POSINBSLSASPERRCPTSSETTINGS

**This CDS view enables you to query and report on the settings for point of sale inbound profiles, including storage location and goods movement types for sales and returns, integrate them into other applications, or use them as a data source for analytical or transactional processes in SAP S/4HANA. This CDS view provides the data to answer the following business questions: Which point of sale inbound profiles are configured in the system? What are the assigned storage locations for each point of sale inbound profile? Which goods movement types are set for sales and returns per receipt for each profile? How are specific store receipts processed with respect to sales and returns in logistics? How do settings differ between sales and return processes for various stores or profiles? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-SIT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POSINBSLSASPERRCPTSSETTINGS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PointOfSaleInboundProfile` | ✓ | |  | `inpro` | `CHAR(4)` | POS Inbound Profile |
| `StorageLocation` |  | |  | `lgort` | `CHAR(4)` | Storage Location |
| `SalesGoodsMovementType` |  | |  | `bwavk` | `CHAR(3)` | Movement type: Sale |
| `ReturnsGoodsMovementType` |  | |  | `bwart` | `CHAR(3)` | Movement type: return |
| `_PointOfSaleInboundProfile` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PointOfSaleInboundProfile` | `I_PointOfSaleInboundProfile` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POSINBSLSASPERRCPTSSETTINGS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POSINBSLSASPERRCPTSSETTINGS')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPOSINBSLSAPRSTS'
@EndUserText.label: 'Settings for Sales as per Receipts in POS Inbound'

@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true

@AccessControl: {
    authorizationCheck: #NOT_REQUIRED,
    personalData.blocking: #NOT_REQUIRED
}

@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@ObjectModel: {
    representativeKey: 'PointOfSaleInboundProfile',
    usageType: {
        serviceQuality: #A,
        sizeCategory: #S,
        dataClass: #CUSTOMIZING
   }
}

define view I_POSInbSlsAsPerRcptsSettings
  as select from twpir

  association [1..1] to I_PointOfSaleInboundProfile as _PointOfSaleInboundProfile on $projection.PointOfSaleInboundProfile = _PointOfSaleInboundProfile.PointOfSaleInboundProfile
{
      @ObjectModel.foreignKey.association: '_PointOfSaleInboundProfile'
  key inpro as PointOfSaleInboundProfile,

      lgort as StorageLocation,
      bwavk as SalesGoodsMovementType,
      bwart as ReturnsGoodsMovementType,

      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _PointOfSaleInboundProfile
}
```
