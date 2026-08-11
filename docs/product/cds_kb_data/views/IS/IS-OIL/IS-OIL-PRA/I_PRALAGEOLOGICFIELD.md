---
name: I_PRALAGEOLOGICFIELD
description: "PRA Louisiana Geologic Field"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRALAGEOLOGICFIELD')/$value
semantic_en: "PRA Louisiana Geologic Field"
semantic_vi: "PRA Louisiana Geologic Field — CDS view giao diện dựa trên PRA Louisiana Geologic Field."
keywords:
  - "pra"
  - "louisiana"
  - "geologic"
  - "field"
  - "name"
tags:
  - IS
  - bo:companycode
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRALAGEOLOGICFIELD

**PRA Louisiana Geologic Field**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRALAGEOLOGICFIELD')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GeologicField` | ✓ | |  | `field_id` | `CHAR(4)` | Tax 2.0 LA - Field ID |
| `GeologicFieldName` |  | |  | `cast (field_desc as oiu_vdm_geologic_field_name )` | `CHAR(50)` | General Description - 50 Characters |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRALAGEOLOGICFIELD')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRALAGEOLOGICFIELD')/$value)*

```abap
@EndUserText.label: 'PRA Louisiana Geologic Field'
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVLAGEOFIELD'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'GeologicField'

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.sapObjectNodeType.name: 'PRALouisianaTaxGeologicField'

define view I_PRALAGeologicField
  as select from /pra/c_t9_fld
{
      @ObjectModel.text.element:  [ 'GeologicFieldName' ]
  key field_id                                                                                as GeologicField,
      @Semantics.text: true
      cast (field_desc as oiu_vdm_geologic_field_name )                                       as GeologicFieldName
};
```
