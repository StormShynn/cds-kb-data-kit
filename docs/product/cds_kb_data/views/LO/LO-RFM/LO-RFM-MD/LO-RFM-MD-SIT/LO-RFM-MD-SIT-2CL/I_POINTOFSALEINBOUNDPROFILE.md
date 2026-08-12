---
name: I_POINTOFSALEINBOUNDPROFILE
description: "This CDS view lets you access and manage point of sale inbound profile data. You can retrieve profile keys, their storage locations, and related texts, as well as navigate to associated settings for sales aggregation and sales-as-per-receipts processes. This helps you analyze and configure how inbound data from point of sale is handled in your system. This CDS view provides the data to answer the following business questions: Which point of sale inbound profiles exist in the system? What is the storage location assigned to each inbound profile, based on standard settings and sales aggregation or receipts settings? What multilingual descriptions or texts are available for each inbound profile? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-RFM-MD-SIT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POINTOFSALEINBOUNDPROFILE')/$value
semantic_en: "This CDS view lets you access and manage point of sale inbound profile data. You can retrieve profile keys, their storage locations, and related texts, as well as navigate to associated settings for sales aggregation and sales-as-per-receipts processes. This helps you analyze and configure how inbound data from point of sale is handled in your system. This CDS view provides the data to answer the following business questions: Which point of sale inbound profiles exist in the system? What is the storage location assigned to each inbound profile, based on standard settings and sales aggregation or receipts settings? What multilingual descriptions or texts are available for each inbound profile? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Point of Sale Inbound Profile — CDS view giao diện dựa trên twpis."
keywords:
  - "point"
  - "sale"
  - "inbound"
  - "profile"
  - "storage"
  - "location"
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
# I_POINTOFSALEINBOUNDPROFILE

**This CDS view lets you access and manage point of sale inbound profile data. You can retrieve profile keys, their storage locations, and related texts, as well as navigate to associated settings for sales aggregation and sales-as-per-receipts processes. This helps you analyze and configure how inbound data from point of sale is handled in your system. This CDS view provides the data to answer the following business questions: Which point of sale inbound profiles exist in the system? What is the storage location assigned to each inbound profile, based on standard settings and sales aggregation or receipts settings? What multilingual descriptions or texts are available for each inbound profile? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-SIT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POINTOFSALEINBOUNDPROFILE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PointOfSaleInboundProfile` | ✓ | |  | `inpro` | `CHAR(4)` | POS Inbound Profile |
| `StorageLocation` |  | |  | `case when lgort != '' then lgort when _AggregatedSalesSettings.StorageLocation != '' then _AggregatedSalesSettings.StorageLocation when _SalesAsPerReceiptsSettings.StorageLocation != '' then _SalesAsPerReceiptsSettings.StorageLocation else lgort end` | `CHAR(4)` | Storage Location |
| `_Text` | | ✓ | | | | |
| `_AggregatedSalesSettings` | | ✓ | | | | |
| `_SalesAsPerReceiptsSettings` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PointOfSaleInboundProfileT` | [0..*] |
| `_AggregatedSalesSettings` | `I_POSInbAggrgdSalesSettings` | [0..1] |
| `_SalesAsPerReceiptsSettings` | `I_POSInbSlsAsPerRcptsSettings` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POINTOFSALEINBOUNDPROFILE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_POINTOFSALEINBOUNDPROFILE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPOSINBNDPRF'
@EndUserText.label: 'Point of Sale Inbound Profile'

@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@AccessControl: {
    authorizationCheck: #NOT_REQUIRED,
    personalData.blocking: #NOT_REQUIRED
}

@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@ObjectModel: {
    compositionRoot: true,
    representativeKey: 'PointOfSaleInboundProfile',
    usageType: {
        serviceQuality: #A,
        sizeCategory: #S,
        dataClass: #CUSTOMIZING
   },
   resultSet.sizeCategory: #XS
}

define view I_PointOfSaleInboundProfile
  as select from twpis

  association [0..*] to I_PointOfSaleInboundProfileT  as _Text                       on $projection.PointOfSaleInboundProfile = _Text.PointOfSaleInboundProfile
  association [0..1] to I_POSInbAggrgdSalesSettings   as _AggregatedSalesSettings    on $projection.PointOfSaleInboundProfile = _AggregatedSalesSettings.PointOfSaleInboundProfile
  association [0..1] to I_POSInbSlsAsPerRcptsSettings as _SalesAsPerReceiptsSettings on $projection.PointOfSaleInboundProfile = _SalesAsPerReceiptsSettings.PointOfSaleInboundProfile
{
      @ObjectModel.text.association: '_Text'
  key inpro as PointOfSaleInboundProfile,
  
      case
        when lgort != ''
          then lgort 
        when _AggregatedSalesSettings.StorageLocation != ''
          then  _AggregatedSalesSettings.StorageLocation
        when _SalesAsPerReceiptsSettings.StorageLocation != ''
          then _SalesAsPerReceiptsSettings.StorageLocation
        else lgort
       end as StorageLocation,

      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _AggregatedSalesSettings,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _SalesAsPerReceiptsSettings
}
```
