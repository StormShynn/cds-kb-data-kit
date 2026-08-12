---
name: I_EHSLOCATIONTYPE
description: "This CDS view retrieves the different types of locations in Environment, Health, and Safety. This CDS view provides the data to answer the following business questions: How many different types of locations are there in Environment, Health, and Safety? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-FND-EHS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONTYPE')/$value
semantic_en: "This CDS view retrieves the different types of locations in Environment, Health, and Safety. This CDS view provides the data to answer the following business questions: How many different types of locations are there in Environment, Health, and Safety? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "EHS Location Type — CDS view giao diện dựa trên ehfndc_loc_typ."
keywords:
  - "ehs"
  - "location"
  - "type"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-FND-EHS
  - EHS-SUS
  - EHS-SUS-FND
  - EHS-SUS-FND-EHS
  - interface-view
---
# I_EHSLOCATIONTYPE

**This CDS view retrieves the different types of locations in Environment, Health, and Safety. This CDS view provides the data to answer the following business questions: How many different types of locations are there in Environment, Health, and Safety? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-EHS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EHSLocationType` | ✓ | |  | `cast( code as ehfnd_loc_type_code_nc preserving type )` | `CHAR(21)` | Location Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_EHSLocationTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EHSLOCATIONTYPE')/$value)*

```abap
@EndUserText.label: 'EHS Location Type'
@Analytics: { dataCategory:#DIMENSION , dataExtraction.enabled:true }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog: { sqlViewName: 'ILOCTYPE',
                compiler.compareFilter: true,
                buffering: { type: #FULL,
                             status: #ACTIVE } }

@ClientHandling.algorithm: #SESSION_VARIABLE

// used for customizing access
@ObjectModel: { representativeKey: 'EHSLocationType',
                resultSet.sizeCategory: #XS,
                sapObjectNodeType.name: 'EHSLocationType',
                supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET ],
                modelingPattern: #NONE,
                usageType:{ serviceQuality: #A,
                            sizeCategory:  #S,         // < 1.000
                            dataClass: #CUSTOMIZING } }

@Metadata.ignorePropagatedAnnotations:true
define view I_EHSLocationType
  as select from ehfndc_loc_typ
  association [0..*] to I_EHSLocationTypeText as _Text on $projection.EHSLocationType = _Text.EHSLocationType
{
      @ObjectModel.text.association: '_Text'
  key cast( code as ehfnd_loc_type_code_nc preserving type ) as EHSLocationType,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _Text
}
```
