---
name: I_POSINBAGGRGDSALESSETTINGS
description: "This CDS view provides you with aggregated settings for point of sale inbound profiles. You can use this view to retrieve the storage location, sales goods movement type, and returns goods movement type assigned to each point of sale inbound profile. This information helps you manage and analyze the logistical configuration for sales and returns processed through the point of sale system. This CDS view provides the data to answer the following business questions: Which point of sale inbound profiles are defined in your system? What storage location is assigned to each point of sale inbound profile? What sales goods movement type is used for a particular profile? What returns goods movement type is set for a specific point of sale inbound profile? How are sales and returns logistic settings configured at each point of sale? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-RFM-MD-SIT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POSINBAGGRGDSALESSETTINGS')/$value
semantic_en: "This CDS view provides you with aggregated settings for point of sale inbound profiles. You can use this view to retrieve the storage location, sales goods movement type, and returns goods movement type assigned to each point of sale inbound profile. This information helps you manage and analyze the logistical configuration for sales and returns processed through the point of sale system. This CDS view provides the data to answer the following business questions: Which point of sale inbound profiles are defined in your system? What storage location is assigned to each point of sale inbound profile? What sales goods movement type is used for a particular profile? What returns goods movement type is set for a specific point of sale inbound profile? How are sales and returns logistic settings configured at each point of sale? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Settings for Aggregated Sales in POS Inbound — CDS view giao diện dựa trên twpiv."
keywords:
  - "settings"
  - "for"
  - "aggregated"
  - "sales"
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
  - "returns"
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
  - bo:purchaseorder
---
# I_POSINBAGGRGDSALESSETTINGS

**This CDS view provides you with aggregated settings for point of sale inbound profiles. You can use this view to retrieve the storage location, sales goods movement type, and returns goods movement type assigned to each point of sale inbound profile. This information helps you manage and analyze the logistical configuration for sales and returns processed through the point of sale system. This CDS view provides the data to answer the following business questions: Which point of sale inbound profiles are defined in your system? What storage location is assigned to each point of sale inbound profile? What sales goods movement type is used for a particular profile? What returns goods movement type is set for a specific point of sale inbound profile? How are sales and returns logistic settings configured at each point of sale? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-SIT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POSINBAGGRGDSALESSETTINGS')/$value) |

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

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POSINBAGGRGDSALESSETTINGS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POSINBAGGRGDSALESSETTINGS')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPOSINBAGRSLSSTS'
@EndUserText.label: 'Settings for Aggregated Sales in POS Inbound'

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

define view I_POSInbAggrgdSalesSettings
  as select from twpiv

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
