---
name: I_MATERIALGROUPPACKGMATLTEXT
description: "This CDS view provides the material groups maintained in your configuration environment to group materials that need similar packaging materials (for example, liquids in bottles). The material group for packaging materials is entered in the material master record of the material to be packed. This CDS view provides the data to answer the following business questions: What are all the material groups for packaging materials defined in the system? What is the description of a specific packaging material group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-HU-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATERIALGROUPPACKGMATLTEXT')/$value
semantic_en: "This CDS view provides the material groups maintained in your configuration environment to group materials that need similar packaging materials (for example, liquids in bottles). The material group for packaging materials is entered in the material master record of the material to be packed. This CDS view provides the data to answer the following business questions: What are all the material groups for packaging materials defined in the system? What is the description of a specific packaging material group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - LO
  - bo:companycode
  - component:LO-HU-2CL
  - interface-view
  - LO-HU
  - LO-HU-2CL
  - lob:logistics general
  - material
  - metadata-only
---
# I_MATERIALGROUPPACKGMATLTEXT

**This CDS view provides the material groups maintained in your configuration environment to group materials that need similar packaging materials (for example, liquids in bottles). The material group for packaging materials is entered in the material master record of the material to be packed. This CDS view provides the data to answer the following business questions: What are all the material groups for packaging materials defined in the system? What is the description of a specific packaging material group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-HU-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATERIALGROUPPACKGMATLTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `MaterialGroupPackingMaterial` |  | |  |  | `CHAR(4)` | Material Group: Packaging Materials |
| `MaterialGroupPackMaterialText` |  | |  |  | `CHAR(20)` | Description |
