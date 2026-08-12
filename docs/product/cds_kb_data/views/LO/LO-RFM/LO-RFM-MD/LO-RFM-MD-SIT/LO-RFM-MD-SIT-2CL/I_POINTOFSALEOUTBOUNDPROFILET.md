---
name: I_POINTOFSALEOUTBOUNDPROFILET
description: "This CDS view enables you to provide a structured way to access point of sale outbound profile information stored in the database. You can use this view to retrieve the outbound profile key and related texts efficiently. The view enables you to analyze and manage outbound configuration for point of sale processes in your system. This CDS view provides the data to answer the following business questions: Which point of sale outbound profiles exist in the system? What is the unique key for each point of sale outbound profile? What are the descriptions or texts associated with each point of sale outbound profile? How are outbound profiles configured for point of sale processes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-RFM-MD-SIT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POINTOFSALEOUTBOUNDPROFILET')/$value
semantic_en: "This CDS view enables you to provide a structured way to access point of sale outbound profile information stored in the database. You can use this view to retrieve the outbound profile key and related texts efficiently. The view enables you to analyze and manage outbound configuration for point of sale processes in your system. This CDS view provides the data to answer the following business questions: Which point of sale outbound profiles exist in the system? What is the unique key for each point of sale outbound profile? What are the descriptions or texts associated with each point of sale outbound profile? How are outbound profiles configured for point of sale processes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Point of Sale Outbound Profile Text — CDS view giao diện dựa trên twpfit."
keywords:
  - "point"
  - "sale"
  - "outbound"
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
# I_POINTOFSALEOUTBOUNDPROFILET

**This CDS view enables you to provide a structured way to access point of sale outbound profile information stored in the database. You can use this view to retrieve the outbound profile key and related texts efficiently. The view enables you to analyze and manage outbound configuration for point of sale processes in your system. This CDS view provides the data to answer the following business questions: Which point of sale outbound profiles exist in the system? What is the unique key for each point of sale outbound profile? What are the descriptions or texts associated with each point of sale outbound profile? How are outbound profiles configured for point of sale processes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-SIT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POINTOFSALEOUTBOUNDPROFILET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PointOfSaleOutboundProfile` | ✓ | |  | `kopro` | `CHAR(4)` | POS Outbound Profile |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `PointOfSaleOutboundProfileName` |  | |  | `vtext` | `CHAR(20)` | Description |
| `_PointOfSaleOutboundProfile` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PointOfSaleOutboundProfile` | `I_PointOfSaleOutboundProfile` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POINTOFSALEOUTBOUNDPROFILET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POINTOFSALEOUTBOUNDPROFILET')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPOSOUTBNDPRFT'
@EndUserText.label: 'Point of Sale Outbound Profile Text'

@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@ObjectModel: {
    dataCategory: #TEXT,
    representativeKey: 'PointOfSaleOutboundProfile',
    usageType: {
        serviceQuality: #A,
        sizeCategory: #S,
        dataClass: #CUSTOMIZING
   }
}

define view I_PointOfSaleOutboundProfileT
  as select from twpfit
  association [1..1] to I_PointOfSaleOutboundProfile as _PointOfSaleOutboundProfile on $projection.PointOfSaleOutboundProfile = _PointOfSaleOutboundProfile.PointOfSaleOutboundProfile
  association [0..1] to I_Language                   as _Language                   on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_PointOfSaleOutboundProfile'
  key kopro   as PointOfSaleOutboundProfile,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras   as Language,
      @Semantics.text: true
      vtext   as PointOfSaleOutboundProfileName,

      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _PointOfSaleOutboundProfile,
      _Language
}
```
