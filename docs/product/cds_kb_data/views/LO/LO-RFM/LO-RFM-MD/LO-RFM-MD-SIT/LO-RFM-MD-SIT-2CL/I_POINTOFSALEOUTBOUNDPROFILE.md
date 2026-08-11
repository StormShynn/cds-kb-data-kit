---
name: I_POINTOFSALEOUTBOUNDPROFILE
description: "This CDS view enables you to provide a structured way to access point of sale outbound profile information stored in the database. You can use this view to retrieve the outbound profile key and related texts efficiently. The view enables you to analyze and manage outbound configuration for point of sale processes in your system. This CDS view provides the data to answer the following business questions: Which point of sale outbound profiles exist in the system? What is the unique key for each point of sale outbound profile? What are the descriptions or texts associated with each point of sale outbound profile? How are outbound profiles configured for point of sale processes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-RFM-MD-SIT-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POINTOFSALEOUTBOUNDPROFILE')/$value
semantic_en: "This CDS view enables you to provide a structured way to access point of sale outbound profile information stored in the database. You can use this view to retrieve the outbound profile key and related texts efficiently. The view enables you to analyze and manage outbound configuration for point of sale processes in your system. This CDS view provides the data to answer the following business questions: Which point of sale outbound profiles exist in the system? What is the unique key for each point of sale outbound profile? What are the descriptions or texts associated with each point of sale outbound profile? How are outbound profiles configured for point of sale processes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Point of Sale Outbound Profile — CDS view giao diện dựa trên twpfi."
keywords:
  - "point"
  - "sale"
  - "outbound"
  - "profile"
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
# I_POINTOFSALEOUTBOUNDPROFILE

**This CDS view enables you to provide a structured way to access point of sale outbound profile information stored in the database. You can use this view to retrieve the outbound profile key and related texts efficiently. The view enables you to analyze and manage outbound configuration for point of sale processes in your system. This CDS view provides the data to answer the following business questions: Which point of sale outbound profiles exist in the system? What is the unique key for each point of sale outbound profile? What are the descriptions or texts associated with each point of sale outbound profile? How are outbound profiles configured for point of sale processes? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-SIT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POINTOFSALEOUTBOUNDPROFILE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PointOfSaleOutboundProfile` | ✓ | |  | `kopro` | `CHAR(4)` | POS Outbound Profile |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PointOfSaleOutboundProfileT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POINTOFSALEOUTBOUNDPROFILE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POINTOFSALEOUTBOUNDPROFILE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPOSOUTBNDPRF'
@EndUserText.label: 'Point of Sale Outbound Profile'

@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@ObjectModel: {
    compositionRoot: true,
    representativeKey: 'PointOfSaleOutboundProfile',
    usageType: {
        serviceQuality: #A,
        sizeCategory: #S,
        dataClass: #CUSTOMIZING
   },
   resultSet.sizeCategory: #XS
}

define view I_PointOfSaleOutboundProfile
  as select from twpfi
  association [0..*] to I_PointOfSaleOutboundProfileT as _Text on $projection.PointOfSaleOutboundProfile = _Text.PointOfSaleOutboundProfile
{
      @ObjectModel.text.association: '_Text'
  key kopro   as PointOfSaleOutboundProfile,

      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text
}
```
