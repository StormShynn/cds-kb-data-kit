---
name: I_POINTOFSALEINBOUNDPROFILET
description: "This CDS view lets you access and manage point of sale inbound profile data. You can retrieve profile keys, their storage locations, and related texts, as well as navigate to associated settings for sales aggregation and sales-as-per-receipts processes. This helps you analyze and configure how inbound data from point of sale is handled in your system. This CDS view provides the data to answer the following business questions: Which point of sale inbound profiles exist in the system? What is the storage location assigned to each inbound profile, based on standard settings and sales aggregation or receipts settings? What multilingual descriptions or texts are available for each inbound profile? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-RFM-MD-SIT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POINTOFSALEINBOUNDPROFILET')/$value
semantic_en: "This CDS view lets you access and manage point of sale inbound profile data. You can retrieve profile keys, their storage locations, and related texts, as well as navigate to associated settings for sales aggregation and sales-as-per-receipts processes. This helps you analyze and configure how inbound data from point of sale is handled in your system. This CDS view provides the data to answer the following business questions: Which point of sale inbound profiles exist in the system? What is the storage location assigned to each inbound profile, based on standard settings and sales aggregation or receipts settings? What multilingual descriptions or texts are available for each inbound profile? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Point of Sale Inbound Profile Text — CDS view giao diện dựa trên twpist."
keywords:
  - "point"
  - "sale"
  - "inbound"
  - "profile"
  - "text"
  - "language"
  - "name"
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
---
# I_POINTOFSALEINBOUNDPROFILET

**This CDS view lets you access and manage point of sale inbound profile data. You can retrieve profile keys, their storage locations, and related texts, as well as navigate to associated settings for sales aggregation and sales-as-per-receipts processes. This helps you analyze and configure how inbound data from point of sale is handled in your system. This CDS view provides the data to answer the following business questions: Which point of sale inbound profiles exist in the system? What is the storage location assigned to each inbound profile, based on standard settings and sales aggregation or receipts settings? What multilingual descriptions or texts are available for each inbound profile? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-SIT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POINTOFSALEINBOUNDPROFILET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PointOfSaleInboundProfile` | ✓ | |  | `inpro` | `CHAR(4)` | POS Inbound Profile |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `PointOfSaleInboundProfileName` |  | |  | `prtxt` | `CHAR(20)` | Description |
| `_PointOfSaleInboundProfile` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PointOfSaleInboundProfile` | `I_PointOfSaleInboundProfile` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POINTOFSALEINBOUNDPROFILET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POINTOFSALEINBOUNDPROFILET')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPOSINBNDPRFT'
@EndUserText.label: 'Point of Sale Inbound Profile Text'

@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@ObjectModel: {
    dataCategory: #TEXT,
    representativeKey: 'PointOfSaleInboundProfile',
    usageType: {
        serviceQuality: #A,
        sizeCategory: #S,
        dataClass: #CUSTOMIZING
   }
}

define view I_PointOfSaleInboundProfileT
  as select from twpist
  association [1..1] to I_PointOfSaleInboundProfile as _PointOfSaleInboundProfile on $projection.PointOfSaleInboundProfile = _PointOfSaleInboundProfile.PointOfSaleInboundProfile
  association [0..1] to I_Language                  as _Language                  on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_PointOfSaleInboundProfile'
  key inpro   as PointOfSaleInboundProfile,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras   as Language,
      @Semantics.text: true
      prtxt   as PointOfSaleInboundProfileName,

      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _PointOfSaleInboundProfile,
      _Language
}
```
