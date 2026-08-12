---
name: I_MATERIALGROUPPACKINGMATERIAL
description: "This CDS view provides the material groups maintained in your configuration environment to group materials that need similar packaging materials (for example, liquids in bottles). The material group for packaging materials is entered in the material master record of the material to be packed. This CDS view provides the data to answer the following business questions: What are all the material groups for packaging materials defined in the system? What is the description of a specific packaging material group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-HU-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATERIALGROUPPACKINGMATERIAL')/$value
semantic_en: "This CDS view provides the material groups maintained in your configuration environment to group materials that need similar packaging materials (for example, liquids in bottles). The material group for packaging materials is entered in the material master record of the material to be packed. This CDS view provides the data to answer the following business questions: What are all the material groups for packaging materials defined in the system? What is the description of a specific packaging material group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Material Group for Packaging Materials — CDS view giao diện dựa trên tvegr."
keywords:
  - "material"
  - "group"
  - "for"
  - "packaging"
  - "materials"
  - "packing"
tags:
  - LO
  - bo:companycode
  - component:LO-HU-2CL
  - interface-view
  - LO-HU
  - LO-HU-2CL
  - lob:logistics general
  - material
---
# I_MATERIALGROUPPACKINGMATERIAL

**This CDS view provides the material groups maintained in your configuration environment to group materials that need similar packaging materials (for example, liquids in bottles). The material group for packaging materials is entered in the material master record of the material to be packed. This CDS view provides the data to answer the following business questions: What are all the material groups for packaging materials defined in the system? What is the description of a specific packaging material group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-HU-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATERIALGROUPPACKINGMATERIAL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaterialGroupPackingMaterial` | ✓ | |  | `magrv` | `CHAR(4)` | Material Group for Packaging Material |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_MaterialGroupPackgMatlText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATERIALGROUPPACKINGMATERIAL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATERIALGROUPPACKINGMATERIAL')/$value)*

```abap
@EndUserText.label: 'Material Group for Packaging Materials'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType: {
   serviceQuality:  #A,
   dataClass:       #CUSTOMIZING,
   sizeCategory:    #S
}


define view entity I_MaterialGroupPackingMaterial
  as select from tvegr
  association [0..*] to I_MaterialGroupPackgMatlText as _Text on $projection.MaterialGroupPackingMaterial = _Text.MaterialGroupPackingMaterial
{

      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8,
        ranking: #HIGH
      }
      @ObjectModel.text.association: '_Text'
  key magrv as MaterialGroupPackingMaterial,
      //Association
      _Text
}
```
