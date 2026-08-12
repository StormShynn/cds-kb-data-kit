---
name: I_EWM_WHSEREQSTATUSTYPE
description: "This CDS view enables you to view a list of all available status types for warehouse requests. With the related text view, you can also see the status type descriptions. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-DLP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEREQSTATUSTYPE')/$value
semantic_en: "This CDS view enables you to view a list of all available status types for warehouse requests. With the related text view, you can also see the status type descriptions. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Warehouse Request Status Type — CDS view giao diện (master data) dựa trên Warehouse Request Status Type."
keywords:
  - "warehouse"
  - "request"
  - "status"
  - "type"
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-DLP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-DLP
  - SCM-EWM-DLP-2CL
---
# I_EWM_WHSEREQSTATUSTYPE

**This CDS view enables you to view a list of all available status types for warehouse requests. With the related text view, you can also see the status type descriptions. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-DLP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEREQSTATUSTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouseRequestStatusType` | ✓ | |  | `status_type` | `CHAR(5)` | Status Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_EWM_WhseReqStatusTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEREQSTATUSTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_WHSEREQSTATUSTYPE')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warehouse Request Status Type'
@VDM.viewType:#BASIC
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  modelingPattern: #NONE,
  compositionRoot: true,
  usageType:{
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #MASTER
  },
  representativeKey: 'EWMWarehouseRequestStatusType',
  supportedCapabilities: [ #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SEARCHABLE_ENTITY ]
}
@Search.searchable: true
define view entity I_EWM_WhseReqStatusType
  as select from /scdl/ststyp
  association [0..*] to I_EWM_WhseReqStatusTypeText as _Text on $projection.EWMWarehouseRequestStatusType = _Text.EWMWarehouseRequestStatusType
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key status_type as EWMWarehouseRequestStatusType,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text

}
```
