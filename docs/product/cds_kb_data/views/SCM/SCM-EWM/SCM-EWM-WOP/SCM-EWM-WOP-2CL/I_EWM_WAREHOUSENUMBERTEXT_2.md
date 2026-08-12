---
name: I_EWM_WAREHOUSENUMBERTEXT_2
description: "This CDS view provides information about warehouse numbers in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WAREHOUSENUMBERTEXT_2')/$value
semantic_en: "This CDS view provides information about warehouse numbers in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Warehouse Number - Text — CDS view giao diện dựa trên Warehouse Number - Text."
keywords:
  - "warehouse"
  - "number"
  - "text"
  - "language"
  - "description"
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
---
# I_EWM_WAREHOUSENUMBERTEXT_2

**This CDS view provides information about warehouse numbers in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WAREHOUSENUMBERTEXT_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  | `lgnum` | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `EWMWarehouseDescription` |  | |  | `lnumt` | `CHAR(40)` | Warehouse Number Description |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WAREHOUSENUMBERTEXT_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WAREHOUSENUMBERTEXT_2')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warehouse Number - Text'

@VDM.viewType: #BASIC

@ObjectModel.representativeKey: 'EWMWarehouse'
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IEWMWHSENUMT2'
@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #MASTER,
                         sizeCategory: #M}
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SEARCHABLE_ENTITY ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations:true
define view entity I_EWM_WarehouseNumberText_2
  as select from /scwm/t300t as WarehouseName
{
  key WarehouseName.lgnum as EWMWarehouse,
      @Semantics.language: true
  key WarehouseName.spras as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      WarehouseName.lnumt as EWMWarehouseDescription
}
```
