---
name: I_TRANSPCHARGETYPE
description: This CDS view is a basic view used to retrieve charge types of charge lines in freight documents. A charge type is the classification of a charge line that the system can use to calculate transportation charges for a charge line, for example base rate, surcharge, or a discount. A charge type can result in a positive or negative for a charge line. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: TM-MD-CM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPCHARGETYPE')/$value
semantic_en: This CDS view is a basic view used to retrieve charge types of charge lines in freight documents. A charge type is the classification of a charge line that the system can use to calculate transportation charges for a charge line, for example base rate, surcharge, or a discount. A charge type can result in a positive or negative for a charge line. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - TM
  - bo:companycode
  - component:TM-MD-CM-2CL
  - document
  - interface-view
  - TM-MD
  - TM-MD-CM
  - TM-MD-CM-2CL
  - metadata-only
---
# I_TRANSPCHARGETYPE

**This CDS view is a basic view used to retrieve charge types of charge lines in freight documents. A charge type is the classification of a charge line that the system can use to calculate transportation charges for a charge line, for example base rate, surcharge, or a discount. A charge type can result in a positive or negative for a charge line. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `TM-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPCHARGETYPE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `TranspChargeType` | `CHAR(15)` | Charge Type |
| `TranspChargeIsDependent` | `CHAR(1)` | Dependent Charge Type |
| `TranspRateSignType` | `CHAR(1)` | Positive/Negative |
| `TransportationRateValueType` | `CHAR(1)` | Value Type |
| `TranspChargeTypeIsInactive` | `CHAR(1)` | Inactive Charge Type |
| `TransportationCalculationBase` | `CHAR(15)` | Calculation Base |
