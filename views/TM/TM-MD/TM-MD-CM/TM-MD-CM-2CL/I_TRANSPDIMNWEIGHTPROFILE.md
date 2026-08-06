---
name: I_TRANSPDIMNWEIGHTPROFILE
description: This CDS view is a basic view to retrieve the information of dimensional weight profiles of freight agreements. Dimensional weight profile is the factor that converts a product's gross volume into dimensional weight. The system then uses the dimensional weight to apply the correct rate when calculating charges. Dimensional weight, also known as volumetric rate, is a standard way of establishing a minimum charge for the cubic space a package occupies. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: TM-MD-CM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPDIMNWEIGHTPROFILE')/$value
semantic_en: This CDS view is a basic view to retrieve the information of dimensional weight profiles of freight agreements. Dimensional weight profile is the factor that converts a product's gross volume into dimensional weight. The system then uses the dimensional weight to apply the correct rate when calculating charges. Dimensional weight, also known as volumetric rate, is a standard way of establishing a minimum charge for the cubic space a package occupies. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - TM
  - bo:companycode
  - component:TM-MD-CM-2CL
  - interface-view
  - product
  - TM-MD
  - TM-MD-CM
  - TM-MD-CM-2CL
  - metadata-only
---
# I_TRANSPDIMNWEIGHTPROFILE

**This CDS view is a basic view to retrieve the information of dimensional weight profiles of freight agreements. Dimensional weight profile is the factor that converts a product's gross volume into dimensional weight. The system then uses the dimensional weight to apply the correct rate when calculating charges. Dimensional weight, also known as volumetric rate, is a standard way of establishing a minimum charge for the cubic space a package occupies. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `TM-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPDIMNWEIGHTPROFILE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `TranspDimnWeightProfile` | `CHAR(10)` | Dimensional Weight Profile |
| `TransportationCalculationBase` | `CHAR(15)` | Calculation Base |
