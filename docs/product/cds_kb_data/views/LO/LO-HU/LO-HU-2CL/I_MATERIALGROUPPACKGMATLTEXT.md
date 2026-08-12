---
name: I_MATERIALGROUPPACKGMATLTEXT
description: "This CDS view provides the material groups maintained in your configuration environment to group materials that need similar packaging materials (for example, liquids in bottles). The material group for packaging materials is entered in the material master record of the material to be packed. This CDS view provides the data to answer the following business questions: What are all the material groups for packaging materials defined in the system? What is the description of a specific packaging material group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-HU-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATERIALGROUPPACKGMATLTEXT')/$value
semantic_en: "This CDS view provides the material groups maintained in your configuration environment to group materials that need similar packaging materials (for example, liquids in bottles). The material group for packaging materials is entered in the material master record of the material to be packed. This CDS view provides the data to answer the following business questions: What are all the material groups for packaging materials defined in the system? What is the description of a specific packaging material group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Material Group Packing Material - Text — CDS view giao diện dựa trên tvegrt."
keywords:
  - "material"
  - "group"
  - "packing"
  - "text"
  - "language"
  - "pack"
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
# I_MATERIALGROUPPACKGMATLTEXT

**This CDS view provides the material groups maintained in your configuration environment to group materials that need similar packaging materials (for example, liquids in bottles). The material group for packaging materials is entered in the material master record of the material to be packed. This CDS view provides the data to answer the following business questions: What are all the material groups for packaging materials defined in the system? What is the description of a specific packaging material group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-HU-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATERIALGROUPPACKGMATLTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `MaterialGroupPackingMaterial` | ✓ | |  | `magrv` | `CHAR(4)` | Material Group: Packaging Materials |
| `MaterialGroupPackMaterialText` |  | |  | `bezei` | `CHAR(20)` | Description |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATERIALGROUPPACKGMATLTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATERIALGROUPPACKGMATLTEXT')/$value)*

```abap
@EndUserText.label: 'Material Group Packing Material - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@ObjectModel.usageType: {
   serviceQuality:  #A,
   dataClass:       #CUSTOMIZING,
   sizeCategory:    #S
}

@AccessControl.authorizationCheck: #NOT_REQUIRED

define view entity I_MaterialGroupPackgMatlText
as select from  tvegrt
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    //Key
    @ObjectModel.foreignKey.association: '_Language'
    @Semantics.language: true
    key spras as Language,
    
    @ObjectModel.text.element:['MaterialGroupPackMaterialText']
    key tvegrt.magrv as MaterialGroupPackingMaterial,        

    //Text
    @Semantics.text: true
    bezei  as MaterialGroupPackMaterialText,
    
    //Association
    _Language
};
```
