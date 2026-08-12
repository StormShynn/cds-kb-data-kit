---
name: I_SITEPOINTOFSALE
description: "This CDS view allows you to access information related to a site’s point of sale. This CDS view provides the data to answer the following business questions: Which site customers are assigned as sites in the retail system? What are the outbound and inbound point of sale profiles linked to each site? Which currency is used by the individual point of sale systems? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-RFM-MD-SIT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEPOINTOFSALE')/$value
semantic_en: "This CDS view allows you to access information related to a site’s point of sale. This CDS view provides the data to answer the following business questions: Which site customers are assigned as sites in the retail system? What are the outbound and inbound point of sale profiles linked to each site? Which currency is used by the individual point of sale systems? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Site Point of Sale — CDS view giao diện dựa trên wrf1."
keywords:
  - "site"
  - "point"
  - "sale"
  - "customer"
  - "outbound"
  - "profile"
  - "inbound"
  - "currency"
tags:
  - LO
  - bo:businesspartner
  - component:LO-RFM-MD-SIT-2CL
  - customer
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-SIT
  - LO-RFM-MD-SIT-2CL
  - lob:logistics general
  - bo:plant
---
# I_SITEPOINTOFSALE

**This CDS view allows you to access information related to a site’s point of sale. This CDS view provides the data to answer the following business questions: Which site customers are assigned as sites in the retail system? What are the outbound and inbound point of sale profiles linked to each site? Which currency is used by the individual point of sale systems? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-SIT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEPOINTOFSALE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SiteCustomer` | ✓ | |  | `locnr` | `CHAR(10)` | Customer Number |
| `PointOfSaleOutboundProfile` |  | |  | `kopro` | `CHAR(4)` | POS Outbound Profile |
| `PointOfSaleInboundProfile` |  | |  | `inpro` | `CHAR(4)` | POS Inbound Profile |
| `PointOfSaleCurrency` |  | |  | `posws` | `CUKY(5)` | Currency of POS Systems |
| `_PointOfSaleOutboundProfile` | | ✓ | | | | |
| `_PointOfSaleInboundProfile` | | ✓ | | | | |
| `_Site` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PointOfSaleOutboundProfile` | `I_PointOfSaleOutboundProfile` | [0..1] |
| `_PointOfSaleInboundProfile` | `I_PointOfSaleInboundProfile` | [0..1] |
| `_Site` | `I_Site` | [1..1] |
| `_Customer` | `I_Customer` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEPOINTOFSALE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEPOINTOFSALE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ISITEPOINTOFSALE'
@EndUserText.label: 'Site Point of Sale'

@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@AccessControl: {
    authorizationCheck: #CHECK,
    personalData.blocking: #NOT_REQUIRED
}

@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@ObjectModel: {
    representativeKey: 'SiteCustomer',
    usageType: {
        serviceQuality: #A,
        sizeCategory: #M,
        dataClass: #MASTER
   }
}
@ObjectModel.sapObjectNodeType.name : 'RetailSitePointOfSale'
define view I_SitePointOfSale
  as select from wrf1
  association [0..1] to I_PointOfSaleOutboundProfile as _PointOfSaleOutboundProfile on $projection.PointOfSaleOutboundProfile = _PointOfSaleOutboundProfile.PointOfSaleOutboundProfile
  association [0..1] to I_PointOfSaleInboundProfile  as _PointOfSaleInboundProfile  on $projection.PointOfSaleInboundProfile = _PointOfSaleInboundProfile.PointOfSaleInboundProfile
  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ]  } */
  association [1..1] to I_Site                       as _Site                       on $projection.SiteCustomer = _Site.SiteCustomer
  association [1..1] to I_Customer                   as _Customer                   on $projection.SiteCustomer = _Customer.Customer
{
      @ObjectModel.foreignKey.association: '_Customer'
  key locnr         as SiteCustomer,

      @ObjectModel.foreignKey.association: '_PointOfSaleOutboundProfile'
      kopro         as PointOfSaleOutboundProfile,
      @ObjectModel.foreignKey.association: '_PointOfSaleInboundProfile'
      inpro         as PointOfSaleInboundProfile,
      posws         as PointOfSaleCurrency,

      _PointOfSaleOutboundProfile,
      _PointOfSaleInboundProfile,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _Site,
      _Customer
}
```
